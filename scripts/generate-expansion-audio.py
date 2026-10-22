#!/usr/bin/env python3
"""Record complete expansion stories without touching the bundled six-story catalog.

Example:
  python3 scripts/generate-expansion-audio.py --engine edge \
      --input content-expansion/batches/001/middle.json --jobs 2

Requires ffmpeg, ffprobe, and edge-tts. The existing isolated edge runtime at
.cache/audio/edge-runtime is used when present. Outputs and resumable page caches
live exclusively beneath .cache/expansion-audio/<story-id>/.
"""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import json
import math
import os
from pathlib import Path
import re
import shutil
import struct
import subprocess
import sys
import time
import wave

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / '.cache' / 'expansion-audio'
VOICE = 'zh-CN-XiaoxiaoNeural'
SAMPLE_RATE = 24000
PAGE_PAUSE = 0.35
END_PAUSE = 0.20
RATES = {'3-5': '-18%', '6-8': '-15%', '9-10': '-18%'}
LENGTHS = {'3-5': (450, 650, 8), '6-8': (900, 1200, 12), '9-10': (1400, 1900, 16)}


def digest(data: object) -> str:
    return hashlib.sha256(json.dumps(data, ensure_ascii=False, sort_keys=True,
                                    separators=(',', ':')).encode('utf-8')).hexdigest()


def file_hash(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def atomic_json(path: Path, data: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(path)


def tool(name: str) -> str:
    path = shutil.which(name)
    if not path:
        raise RuntimeError(f'Missing required command: {name}')
    return path


def run(command: list[str], timeout: int = 120, env: dict | None = None) -> str:
    result = subprocess.run(command, capture_output=True, text=True, timeout=timeout, env=env)
    if result.returncode:
        # Avoid printing service URLs and connection diagnostics from third-party tools.
        detail = result.stderr[-300:].split('url=')[0]
        raise RuntimeError(f'{Path(command[0]).name} failed (exit {result.returncode}): {detail}')
    return result.stdout + result.stderr


def edge_env() -> dict:
    env = os.environ.copy()
    runtime = ROOT / '.cache' / 'audio' / 'edge-runtime'
    if (runtime / 'edge_tts').is_dir():
        env['PYTHONPATH'] = str(runtime) + (os.pathsep + env['PYTHONPATH'] if env.get('PYTHONPATH') else '')
    return env


def duration(path: Path) -> float:
    result = json.loads(run([tool('ffprobe'), '-v', 'error', '-show_entries',
                             'format=duration', '-of', 'json', str(path)]))
    value = float(result['format']['duration'])
    if not math.isfinite(value) or value <= 0:
        raise RuntimeError(f'Invalid audio duration: {path.name}')
    return value


def pcm_frames(path: Path) -> int:
    with wave.open(str(path), 'rb') as source:
        if (source.getframerate(), source.getnchannels(), source.getsampwidth()) != (SAMPLE_RATE, 1, 2):
            raise RuntimeError(f'Invalid PCM format: {path.name}')
        count = source.getnframes()
        if count < SAMPLE_RATE or len(source.readframes(count)) != count * 2:
            raise RuntimeError(f'Incomplete or suspiciously short page: {path.name}')
        return count


def validate(story: dict) -> int:
    if not re.fullmatch(r'[a-zA-Z0-9][a-zA-Z0-9_-]{0,100}', story.get('id', '')):
        raise ValueError('Story ID must be a safe path component')
    if not isinstance(story.get('title'), str) or not story['title'].strip():
        raise ValueError(f"{story['id']}: title required")
    if story.get('ageBand') not in LENGTHS:
        raise ValueError(f"{story['id']}: unknown age band")
    lower, upper, expected_pages = LENGTHS[story['ageBand']]
    pages = story.get('pages', [])
    if len(pages) != expected_pages:
        raise ValueError(f"{story['id']}: expected {expected_pages} complete pages")
    seen = set()
    characters = 0
    for page in pages:
        page_id = page.get('id', '')
        if not re.fullmatch(r'[a-zA-Z0-9_-]{1,100}', page_id) or page_id in seen:
            raise ValueError(f"{story['id']}: invalid or duplicate page ID")
        seen.add(page_id)
        text = page.get('text', '')
        if not isinstance(text, str) or len(text.strip()) < 20:
            raise ValueError(f"{story['id']}/{page_id}: incomplete text")
        characters += len(re.findall(r'[\u4e00-\u9fff]', text))
    if not lower <= characters <= upper:
        raise ValueError(f"{story['id']}: {characters} Chinese characters; expected {lower}-{upper}")
    return characters


def record_page(story: dict, page: dict, version: str, force: bool, env: dict) -> Path:
    key = digest({'text': page['text'], 'engine': 'edge', 'voice': VOICE,
                  'rate': RATES[story['ageBand']], 'pitch': '-2Hz',
                  'sampleRate': SAMPLE_RATE, 'engineVersion': version})
    folder = CACHE / story['id'] / 'pages'
    folder.mkdir(parents=True, exist_ok=True)
    stem = folder / f"{page['id']}-{key[:24]}"
    pcm = stem.with_suffix('.wav')
    if pcm.exists() and not force:
        try:
            pcm_frames(pcm)
            return pcm
        except (RuntimeError, wave.Error, EOFError):
            pass
    compressed = stem.with_suffix('.mp3')
    if compressed.exists() and not force:
        temporary_pcm = stem.with_suffix('.restore.wav')
        try:
            run([tool('ffmpeg'), '-v', 'error', '-y', '-i', str(compressed), '-ar',
                 str(SAMPLE_RATE), '-ac', '1', '-c:a', 'pcm_s16le', str(temporary_pcm)])
            pcm_frames(temporary_pcm)
            temporary_pcm.replace(pcm)
            return pcm
        except (RuntimeError, wave.Error, EOFError):
            temporary_pcm.unlink(missing_ok=True)
    text_file = stem.with_suffix('.txt')
    text_file.write_text(page['text'], encoding='utf-8')
    raw = stem.with_suffix('.partial.mp3')
    last_error = None
    for attempt in range(3):
        try:
            raw.unlink(missing_ok=True)
            run([sys.executable, '-m', 'edge_tts', '--voice', VOICE,
                 f"--rate={RATES[story['ageBand']]}", '--pitch=-2Hz',
                 '--file', str(text_file), '--write-media', str(raw)], timeout=45, env=env)
            if not raw.exists() or raw.stat().st_size < 1000 or duration(raw) < 1:
                raise RuntimeError('Narration service produced incomplete page audio')
            temporary_pcm = stem.with_suffix('.partial.wav')
            run([tool('ffmpeg'), '-v', 'error', '-y', '-i', str(raw), '-ar',
                 str(SAMPLE_RATE), '-ac', '1', '-c:a', 'pcm_s16le', str(temporary_pcm)])
            frames = pcm_frames(temporary_pcm)
            temporary_pcm.replace(pcm)
            raw.replace(stem.with_suffix('.mp3'))
            print(f"{story['id']}/{page['id']}: {frames / SAMPLE_RATE:.2f}s", flush=True)
            return pcm
        except (RuntimeError, subprocess.TimeoutExpired, OSError, wave.Error, EOFError) as error:
            last_error = error
            if attempt < 2:
                time.sleep(attempt + 1)
    raise RuntimeError(f"{story['id']}/{page['id']}: three bounded recording attempts failed: {last_error}")


def measure(path: Path) -> dict:
    output = run([tool('ffmpeg'), '-hide_banner', '-i', str(path), '-af',
                  'volumedetect,silencedetect=noise=-45dB:d=0.25', '-f', 'null', '-'])
    silence = sum(float(value) for value in re.findall(r'silence_duration: ([\d.]+)', output))
    peak = re.search(r'max_volume: ([-\d.]+) dB', output)
    mean = re.search(r'mean_volume: ([-\d.]+) dB', output)
    if not peak or not mean:
        raise RuntimeError(f'Could not inspect audio signal: {path.name}')
    seconds = duration(path)
    return {'duration': seconds, 'peakDb': float(peak[1]), 'meanDb': float(mean[1]),
            'silenceSeconds': round(silence, 3), 'silenceRatio': round(silence / seconds, 4)}


def build_story(story: dict, version: str, force: bool, env: dict) -> dict:
    characters = validate(story)
    folder = CACHE / story['id']
    folder.mkdir(parents=True, exist_ok=True)
    text_hash = hashlib.sha256('\n\n'.join(p['text'] for p in story['pages']).encode('utf-8')).hexdigest()
    content_hash = digest({'story': story['id'], 'title': story['title'],
                           'ageBand': story['ageBand'], 'pages': [
                               {'id': p['id'], 'text': p['text']} for p in story['pages']],
                           'voice': VOICE, 'rate': RATES[story['ageBand']],
                           'engineVersion': version, 'sampleRate': SAMPLE_RATE,
                           'pagePause': PAGE_PAUSE, 'endPause': END_PAUSE,
                           'format': 'mp3-80k', 'pipelineVersion': 1})
    destination = folder / 'narration.mp3'
    report_path = folder / 'report.json'
    timing_path = folder / 'timing.json'
    if not force and destination.exists() and report_path.exists() and timing_path.exists():
        old = json.loads(report_path.read_text())
        if (old.get('contentSha256') == content_hash and old.get('audioSha256') == file_hash(destination)
                and old.get('timingSha256') == file_hash(timing_path)):
            print(f"{story['id']}: validated content-hash cache ({old['duration']:.2f}s)", flush=True)
            return old
    sources = [record_page(story, page, version, force, env) for page in story['pages']]
    combined = folder / 'combined.wav'
    timeline = []
    tail_levels = []
    position_frames = 0
    with wave.open(str(combined), 'wb') as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(SAMPLE_RATE)
        for index, (page, source) in enumerate(zip(story['pages'], sources)):
            with wave.open(str(source), 'rb') as audio:
                frame_count = audio.getnframes()
                samples_bytes = audio.readframes(frame_count)
                output.writeframes(samples_bytes)
                tail = samples_bytes[-(SAMPLE_RATE // 10) * 2:]
                samples = struct.unpack('<' + 'h' * (len(tail) // 2), tail)
                rms = math.sqrt(sum(value * value for value in samples) / len(samples))
                tail_levels.append(20 * math.log10(max(rms / 32768, 0.000001)))
            pause_frames = round((PAGE_PAUSE if index < len(sources) - 1 else END_PAUSE) * SAMPLE_RATE)
            output.writeframes(bytes(pause_frames * 2))
            end_frames = position_frames + frame_count + pause_frames
            timeline.append({'id': page['id'], 'start': round(position_frames / SAMPLE_RATE, 6),
                             'end': round(end_frames / SAMPLE_RATE, 6)})
            position_frames = end_frames
    source_metrics = measure(combined)
    gain = -3 - source_metrics['peakDb']
    temporary = folder / 'narration.partial.mp3'
    run([tool('ffmpeg'), '-v', 'error', '-y', '-i', str(combined), '-af', f'volume={gain:.3f}dB',
         '-ar', str(SAMPLE_RATE), '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '80k',
         '-metadata', f"title={story['title']}", '-metadata', 'artist=小小故事岛 · 合成旁白', str(temporary)])
    metrics = measure(temporary)
    if metrics['peakDb'] > -0.5 or metrics['meanDb'] < -35 or metrics['silenceRatio'] > 0.4:
        raise RuntimeError(f"{story['id']}: audio level or silence check failed: {metrics}")
    if abs(metrics['duration'] - position_frames / SAMPLE_RATE) > 0.15:
        raise RuntimeError(f"{story['id']}: MP3 and decoded page timeline differ by more than 0.15s")
    timeline[-1]['end'] = metrics['duration']
    timing = {'duration': metrics['duration'], 'pages': timeline, 'voice': VOICE}
    temporary.replace(destination)
    atomic_json(timing_path, timing)
    report = {'story': story['id'], 'title': story['title'], 'ageBand': story['ageBand'],
              'pages': len(story['pages']), 'voice': VOICE, 'engine': 'edge', 'engineVersion': version,
              'rate': RATES[story['ageBand']], 'pitch': '-2Hz', 'sampleRate': SAMPLE_RATE,
              'sourceChars': characters, 'sourceTextSha256': text_hash, 'contentSha256': content_hash,
              'audioSha256': file_hash(destination), 'timingSha256': file_hash(timing_path),
              'pagePause': PAGE_PAUSE, 'endPause': END_PAUSE, 'gainDb': round(gain, 3),
              'loudestPageTailDb': round(max(tail_levels), 1),
              'durationPolicy': 'Measured natural narration; no target-duration padding or stretching.',
              'verification': 'Complete decode, PCM-frame timeline, signal levels and silence ratio; not human listening.',
              **metrics}
    atomic_json(report_path, report)
    print(f"COMPLETE {story['id']}: {metrics['duration']:.3f}s / {len(timeline)} pages", flush=True)
    return report


def compact_pcm(story_id: str) -> int:
    """Remove regenerable PCM only after final audio and timing hashes verify."""
    if not re.fullmatch(r'expansion-\d{4}', story_id):
        raise ValueError('Invalid expansion ID for cache compaction')
    folder = CACHE / story_id
    report = json.loads((folder / 'report.json').read_text())
    assert report['audioSha256'] == file_hash(folder / 'narration.mp3')
    assert report['timingSha256'] == file_hash(folder / 'timing.json')
    candidates = [folder / 'combined.wav'] + [
        p for p in (folder / 'pages').glob('*.wav')
        if '.partial.' not in p.name and '.restore.' not in p.name and p.with_suffix('.mp3').is_file()]
    removed = 0
    for file in candidates:
        if file.is_file():
            removed += file.stat().st_size
            file.unlink()
    return removed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input', type=Path, required=True, help='JSON story or array of complete stories')
    parser.add_argument('--story', action='append', help='Story ID to select (repeatable)')
    parser.add_argument('--engine', choices=['edge'], required=True, help='Explicit synthesis engine; no silent fallback')
    parser.add_argument('--jobs', type=int, choices=[1, 2], default=2)
    parser.add_argument('--force', action='store_true')
    parser.add_argument('--keep-pcm', action='store_true', help='Keep regenerable WAV intermediates for diagnostics')
    args = parser.parse_args()
    data = json.loads(args.input.read_text(encoding='utf-8'))
    stories = data if isinstance(data, list) else [data]
    if not stories or any(not isinstance(story, dict) for story in stories):
        parser.error('Input must contain at least one complete story object')
    ids = [story.get('id') for story in stories]
    if len(set(ids)) != len(ids):
        parser.error('Input contains duplicate story IDs')
    if args.story:
        unknown = set(args.story) - set(ids)
        if unknown:
            parser.error('Unknown selected story IDs: ' + ', '.join(sorted(unknown)))
        stories = [story for story in stories if story['id'] in args.story]
    for story in stories:
        validate(story)
    tool('ffmpeg')
    tool('ffprobe')
    env = edge_env()
    version = run([sys.executable, '-m', 'edge_tts', '--version'], env=env).strip()
    CACHE.mkdir(parents=True, exist_ok=True)
    completed, failures = [], []
    with ThreadPoolExecutor(max_workers=args.jobs) as executor:
        futures = {executor.submit(build_story, story, version, args.force, env): story['id'] for story in stories}
        for future in as_completed(futures):
            story_id = futures[future]
            try:
                report = future.result()
                if not args.keep_pcm:
                    compact_pcm(story_id)
                completed.append(report)
            except Exception as error:
                failure = {'story': story_id, 'error': str(error)}
                failures.append(failure)
                print(f"FAILED {story_id}: {error}", file=sys.stderr, flush=True)
    summary = {'input': str(args.input.resolve()), 'requested': len(stories),
               'completed': [{'story': report['story'], 'duration': report['duration'],
                              'contentSha256': report['contentSha256']} for report in completed],
               'failures': failures, 'totalSeconds': sum(report['duration'] for report in completed)}
    atomic_json(CACHE / 'last-run-report.json', summary)
    print(json.dumps(summary, ensure_ascii=False, indent=2), flush=True)
    return 1 if failures else 0


if __name__ == '__main__':
    raise SystemExit(main())
