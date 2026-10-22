#!/usr/bin/env python3
"""Author complete original story manuscripts with the configured, authenticated CLI.

No tool access is granted to the writing model. Every returned manuscript must
pass structural/length checks before it is saved. This does not approve media
or publication. Run editorial review separately before promoting manuscripts.
"""
from __future__ import annotations
import argparse
import concurrent.futures
import hashlib
import json
from pathlib import Path
import re
import subprocess
import threading
import time

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'content-expansion' / 'manuscripts'
CACHE = ROOT / '.cache' / 'expansion-writer'
LIMITS = {'3-5': (8, 450, 650), '6-8': (12, 900, 1200), '9-10': (16, 1400, 1900)}
STOP = threading.Event()
ENGINE = 'claude'
REASONING_EFFORT = None
REQUEST_TIMEOUT = 1200

class ProviderUnavailable(RuntimeError):
    """Do not submit the rest of the catalogue after a provider failure."""

def obj(properties):
    return {'type': 'object', 'additionalProperties': False,
            'properties': properties, 'required': list(properties)}

TEXT = {'type': 'string'}
SCENE = obj({'setting': TEXT, 'action': TEXT, 'mood': TEXT,
             'props': {'type': 'array', 'items': TEXT}})
SCHEMA = obj({'id': TEXT, 'title': TEXT, 'subtitle': TEXT, 'description': TEXT,
              'ageBand': {'type': 'string', 'enum': list(LIMITS)},
              'theme': TEXT, 'color': TEXT, 'character': TEXT,
              'editorial': obj({'goal': TEXT, 'obstacle': TEXT, 'turningPoint': TEXT, 'resolution': TEXT}),
              'pages': {'type': 'array', 'items': obj({'id': TEXT, 'text': TEXT, 'scene': SCENE})}})

THEMES = ['好奇与发现', '表达自己的需要', '面对变化', '误会与沟通', '尝试与修正',
          '尊重不同喜好', '保护自然', '诚实与补救', '公平与协商', '珍惜回忆',
          '耐心与观察', '想象与创造', '独立作决定', '情绪与安慰', '承诺与责任',
          '承认不知道', '勇敢求助', '友情与边界', '接受不完美', '合作中的不同办法']
SETTINGS = ['树梢村庄', '海边小镇', '雪地花园', '空中市集', '山谷作坊', '雨后庭院',
            '蘑菇森林', '河畔住家', '星星牧场', '云朵车站', '沙漠绿洲', '四季果园',
            '风铃街道', '贝壳海湾', '浮叶池塘', '屋顶花园', '橡果学校', '苔藓山洞',
            '晨雾草原', '萤火坡地', '纸风车小岛', '彩石溪谷', '羽毛剧场', '暖灯旅店',
            '旧木阁楼', '树根隧道', '竹叶茶馆', '花籽仓库', '冰晶小港', '松果游乐场',
            '藤蔓天桥', '月光牧屋', '银杏集市', '陶土村落', '雨伞山坡', '蒲公英驿站',
            '织布小屋', '湖心果摊', '沙丘观测站', '风帆书船', '浅滩沙堡', '树林音乐屋',
            '小石磨坊', '星砂海滩', '橘子温室', '风雪山屋', '落叶迷宫', '绿苔花圃',
            '屋檐雨廊', '长桥两岸']

def age_for(number):
    offset = (number - 1) % 40
    return '3-5' if offset < 16 else '6-8' if offset < 30 else '9-10'

def han(text):
    return len(re.findall(r'[\u3400-\u4dbf\u4e00-\u9fff]', text))

def validate(story, number):
    band = age_for(number)
    count, minimum, maximum = LIMITS[band]
    assert story['id'] == f'expansion-{number:04}', '故事ID不匹配'
    assert story['ageBand'] == band, '年龄不匹配'
    assert len(story['pages']) == count, f'必须恰好{count}页'
    assert re.fullmatch(r'#[0-9A-Fa-f]{6}', story['color']), '颜色必须6位十六进制'
    for field in ['title', 'subtitle', 'description', 'theme', 'character']:
        assert isinstance(story[field], str) and story[field].strip(), f'{field}缺失'
    assert len(story['subtitle']) <= 24, '副标题过长'
    paragraphs = set()
    for i, page in enumerate(story['pages']):
        assert page['id'] == f'p{i+1:02}', '页序不连续'
        assert han(page['text']) >= 25, '正文页面过短'
        assert page['text'] not in paragraphs, '重复正文页'
        paragraphs.add(page['text'])
        for key in ['setting', 'action', 'mood', 'props']:
            assert page['scene'].get(key), f'场景{key}缺失'
    length = sum(han(p['text']) for p in story['pages'])
    assert minimum <= length <= maximum, f'正文只有{length}汉字，要求{minimum}–{maximum}汉字（不含标点）'
    return length

def prior_context():
    descriptions = []
    for f in sorted((ROOT / 'content-expansion' / 'batches').glob('*/*.json')):
        for s in json.loads(f.read_text()):
            descriptions.append(s['title'] + '：' + s['description'])
    for f in sorted(OUT.glob('*.json'))[-100:]:
        try:
            s = json.loads(f.read_text())
            descriptions.append(s['title'] + '：' + s['description'])
        except (OSError, ValueError, KeyError):
            continue
    return '\n'.join(descriptions)

def authoring_guidance():
    file = ROOT / 'content-expansion' / 'authoring-guidance.md'
    return file.read_text() if file.exists() else ''

def write_one(number):
    if STOP.is_set():
        return {'id': number, 'state': 'deferred'}
    destination = OUT / f'expansion-{number:04}.json'
    if destination.exists():
        validate(json.loads(destination.read_text()), number)
        return {'id': number, 'state': 'existing'}
    band = age_for(number)
    pages, low, high = LIMITS[band]
    prompt = f'''为儿童有声绘本写一篇完整独立的简体中文原创童话。只输出指定JSON，不调用任何工具。
这是已批准的1000篇创作任务，直接完成正文，不要提问、讨论计划或写提纲代替故事。
ID expansion-{number:04}，年龄{band}岁，恰好{pages}页，正文合计{low}–{high}个汉字（不含标点和分镜）。
每页约{round((low+high)/2/pages)}汉字；写完自查长度。正文要连贯，有具体目标、阻碍、主动尝试、转折、完整结果和温柔余韵。
灵感方向：{THEMES[(number-1)%len(THEMES)]}，地点可从{SETTINGS[((number-1)//len(THEMES)+(number-1)*7)%len(SETTINGS)]}展开；不必强塞主题词。
它必须是童话，不是道德讲座。低龄用具体感官、单一小冲突；中龄有因果和尝试；高龄有动机和取舍。
不要套公式、换角色名字重写旧故事、堆叠意外魔法、以全体帮忙解决一切。幻想规则一旦设定要一致。
避免危险模仿、惊吓、羞辱或惩罚式教训；自然知识准确。不要摘录现代绘本、影视对白或译本。
title独特自然，subtitle不超过14字，theme为2–10字的简短主题标签，不写说教或总结句；description为包含核心冲突的书架简介；color为#xxxxxx。
character为中文人物外观设定（毛色/发型/衣服/配饰），各页保持一致。每页含p01开始连续id、完整朗读text和独特scene(setting/action/mood/props)。scene不参与朗读，不能藏正文必需的因果。
editorial写真实的goal/obstacle/turningPoint/resolution，供后续编辑审查，不能代替正文。
下列已写故事必须避免相似情节、相同标题和关键解决方法：\n{prior_context()}'''
    prompt += '\n编辑反馈与创作约束：\n' + authoring_guidance()
    problem = ''
    started = time.time()
    for attempt in range(3):
        target = CACHE / f'{number:04}-{attempt}'
        user_prompt = prompt + (f'\n上次输出需完整重写修复：{problem}' if problem else '')
        if STOP.is_set():
            return {'id': number, 'state': 'deferred'}
        if ENGINE == 'codex':
            schema_file = CACHE / 'story-schema.json'
            output_file = target.with_suffix(f'.{time.time_ns()}.story.json')
            command = ['codex', 'exec', '--ephemeral', '--sandbox', 'read-only',
                       '-c', 'project_doc_max_bytes=0', '-c', 'features.shell_tool=false',
                       '-c', 'web_search="disabled"', '--output-schema', str(schema_file),
                       '--json', '--output-last-message', str(output_file), '-']
            if REASONING_EFFORT:
                command[2:2] = ['-c', f'model_reasoning_effort="{REASONING_EFFORT}"']
        else:
            command = ['claude', '--print', '--tools', '', '--strict-mcp-config',
                       '--no-session-persistence', '--output-format', 'json',
                       '--json-schema', json.dumps(SCHEMA, ensure_ascii=False),
                       '--system-prompt', '你是原创儿童文学作者。直接输出完成的作品，严格遵守指定JSON结构。']
        try:
            result = subprocess.run(command, input=user_prompt, text=True,
                                    capture_output=True, cwd=ROOT, timeout=REQUEST_TIMEOUT)
        except (subprocess.TimeoutExpired, OSError) as error:
            STOP.set()
            raise ProviderUnavailable(f'{ENGINE} writer could not complete {number}: {type(error).__name__}') from error
        target.with_suffix('.stdout').write_text(result.stdout)
        target.with_suffix('.stderr').write_text(result.stderr)
        if result.returncode:
            STOP.set()
            raise ProviderUnavailable(f'{ENGINE} writer unavailable for {number}, exit {result.returncode}; inspect local cache log')
        if ENGINE == 'codex' and not output_file.exists():
            STOP.set()
            raise ProviderUnavailable(f'codex writer did not save a final response for {number}')
        try:
            response = {'structured_output': json.loads(output_file.read_text())} if ENGINE == 'codex' else json.loads(result.stdout)
            if response.get('is_error'):
                STOP.set()
                raise ProviderUnavailable(f'{ENGINE} writer reported an error for {number}; inspect local cache log')
            story = response.get('structured_output')
            if story is None:
                body = response.get('result', '')
                if body.startswith('```'):
                    body = re.sub(r'^```(?:json)?\s*|\s*```$', '', body)
                story = json.loads(body)
            length = validate(story, number)
        except (AssertionError, ValueError, TypeError, KeyError) as error:
            problem = str(error)
            continue
        story['status'] = 'text-draft'
        story['provenance'] = {'method': f'configured-{ENGINE}-cli-authored', 'review': 'pending',
            'characters': length, 'bodySha256': hashlib.sha256(''.join(p['text'] for p in story['pages']).encode()).hexdigest()}
        if ENGINE == 'codex' and REASONING_EFFORT:
            story['provenance']['reasoningEffort'] = REASONING_EFFORT
        temporary = destination.with_suffix('.json.tmp')
        temporary.write_text(json.dumps(story, ensure_ascii=False, indent=2) + '\n')
        temporary.replace(destination)
        return {'id': number, 'state': 'written', 'title': story['title'], 'characters': length,
                'seconds': round(time.time() - started, 1)}
    raise RuntimeError(f'{number} failed manuscript validation: {problem}')

def main():
    global ENGINE, REASONING_EFFORT, REQUEST_TIMEOUT
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--start', type=int, required=True)
    parser.add_argument('--end', type=int, required=True)
    parser.add_argument('--workers', type=int, default=2)
    parser.add_argument('--exclude', default='')
    parser.add_argument('--engine', choices=['claude', 'codex'], default='claude')
    parser.add_argument('--reasoning-effort', choices=['low', 'medium', 'high', 'xhigh'],
                        help='Optional effort for this Codex writing process; keeps the configured model')
    parser.add_argument('--request-timeout', type=int, default=1200,
                        help='Maximum seconds for one CLI response (default: 1200)')
    args = parser.parse_args()
    assert 1 <= args.start <= args.end <= 1000
    assert 1 <= args.workers <= 4
    assert 60 <= args.request_timeout <= 3600
    assert not args.reasoning_effort or args.engine == 'codex'
    OUT.mkdir(parents=True, exist_ok=True); CACHE.mkdir(parents=True, exist_ok=True)
    ENGINE = args.engine
    REASONING_EFFORT = args.reasoning_effort
    REQUEST_TIMEOUT = args.request_timeout
    (CACHE / 'story-schema.json').write_text(json.dumps(SCHEMA, ensure_ascii=False))
    excluded = {int(x) for x in args.exclude.split(',') if x}
    numbers = [i for i in range(args.start, args.end + 1) if i not in excluded]
    failures = []
    remaining = iter(numbers)
    consecutive_failures = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        pending = {}
        for number in remaining:
            pending[pool.submit(write_one, number)] = number
            if len(pending) >= args.workers:
                break
        while pending:
            done, _ = concurrent.futures.wait(pending, return_when=concurrent.futures.FIRST_COMPLETED)
            for job in done:
                number = pending.pop(job)
                try:
                    report = job.result()
                    if report.get('state') == 'written':
                        consecutive_failures = 0
                except Exception as error:
                    report = {'id': number, 'state': 'failed', 'reason': str(error)}
                    failures.append(report)
                    consecutive_failures += 1
                    if consecutive_failures >= 3:
                        STOP.set()
                print(json.dumps(report, ensure_ascii=False), flush=True)
                if not STOP.is_set():
                    next_number = next(remaining, None)
                    if next_number is not None:
                        pending[pool.submit(write_one, next_number)] = next_number
        if STOP.is_set():
            print(json.dumps({'state': 'stopped', 'reason': 'provider unavailable or three consecutive failures; resume skips saved manuscripts'}), flush=True)
    if failures:
        raise SystemExit(1)

if __name__ == '__main__':
    main()
