#!/usr/bin/env python3
"""Record bundled narration from complete story pages; derive real page timings.

Dependencies: Python 3, ffmpeg, ffprobe, and edge-tts or macOS say.
Examples:
  python3 scripts/generate-audio.py --story moon-post
  python3 scripts/generate-audio.py --engine say
  python3 scripts/generate-audio.py --engine edge --force

No synthesis or network request is needed when the app plays these files.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import shutil
import struct
import subprocess
import sys
import time
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / ".cache" / "audio"
SAMPLE_RATE = 24000
PAGE_PAUSE = 0.35
TARGETS = {"3-5": (120, 240), "6-8": (300, 420), "9-10": (480, 720)}
SAY_RATES = {"3-5": 130, "6-8": 135, "9-10": 125}
EDGE_RATES = {"3-5": "-18%", "6-8": "-15%", "9-10": "-18%"}


def run(command: list[str], timeout: int = 120) -> str:
    result = subprocess.run(command, capture_output=True, text=True, timeout=timeout)
    if result.returncode:
        # Do not echo service URLs or full connection diagnostics into build output.
        raise RuntimeError(f"{Path(command[0]).name} failed (exit {result.returncode}): "
                           + result.stderr[-400:].split("url=")[0])
    return result.stdout + result.stderr


def tool(name: str) -> str:
    found = shutil.which(name)
    if not found:
        raise RuntimeError(f"Missing required command: {name}")
    return found


def duration(path: Path) -> float:
    data = json.loads(run([tool("ffprobe"), "-v", "error", "-show_entries",
                           "format=duration", "-of", "json", str(path)]))
    return float(data["format"]["duration"])


def atomic_json(path: Path, data: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    temporary.replace(path)


def edge_record(text_file: Path, output: Path, rate: str) -> None:
    last_error = None
    for attempt in range(2):
        try:
            run([sys.executable, "-m", "edge_tts", "--voice", "zh-CN-XiaoxiaoNeural",
                 f"--rate={rate}", "--pitch=-2Hz", "--file", str(text_file),
                 "--write-media", str(output)], timeout=45)
            if output.stat().st_size < 1000 or duration(output) < 0.2:
                raise RuntimeError("TTS produced empty or invalid audio")
            return
        except (RuntimeError, subprocess.TimeoutExpired) as error:
            last_error = error
            if attempt == 0:
                time.sleep(1)
    raise RuntimeError(f"Edge narration unavailable after two bounded attempts: {last_error}")


def choose_engine(requested: str) -> tuple[str, str]:
    if requested != "auto":
        return requested, "Explicit engine selection."
    text_file = CACHE / "engine-probe.txt"
    text_file.write_text("月亮慢慢升起来。晚安，小小故事岛。")
    try:
        edge_record(text_file, CACHE / "engine-probe.mp3", "-18%")
        return "edge", "Online Xiaoxiao probe succeeded."
    except (RuntimeError, subprocess.TimeoutExpired) as error:
        if not shutil.which("say"):
            raise
        print(f"{error}\nUsing recorded offline Mandarin Tingting.", flush=True)
        return "say", "Edge service probe failed; macOS offline Tingting recorded to files."


def record_page(story: dict, page: dict, engine: str, force: bool) -> Path:
    rate = SAY_RATES[story["ageBand"]] if engine == "say" else EDGE_RATES[story["ageBand"]]
    digest = hashlib.sha256(json.dumps({"text": page["text"], "engine": engine,
        "rate": rate, "voice": "Tingting" if engine == "say" else "zh-CN-XiaoxiaoNeural",
        "pitch": -2, "sampleRate": SAMPLE_RATE}, ensure_ascii=False).encode()).hexdigest()[:16]
    directory = CACHE / story["id"]
    directory.mkdir(parents=True, exist_ok=True)
    stem = directory / f"{page['id']}-{digest}"
    text_file = stem.with_suffix(".txt")
    pcm = stem.with_suffix(".wav")
    if pcm.exists() and not force:
        return pcm
    text_file.write_text(page["text"], encoding="utf-8")
    raw = stem.with_suffix(".aiff" if engine == "say" else ".mp3")
    if engine == "say":
        run([tool("say"), "-v", "Tingting", "-r", str(rate), "-f", str(text_file),
             "-o", str(raw)], timeout=180)
    else:
        edge_record(text_file, raw, str(rate))
    run([tool("ffmpeg"), "-v", "error", "-y", "-i", str(raw), "-ar", str(SAMPLE_RATE),
         "-ac", "1", "-c:a", "pcm_s16le", str(pcm)])
    if duration(pcm) < 1:
        raise RuntimeError(f"Suspiciously short page audio: {story['id']}/{page['id']}")
    print(f"  {story['id']}/{page['id']}: {duration(pcm):.2f}s", flush=True)
    return pcm


def measure(path: Path) -> dict:
    output = run([tool("ffmpeg"), "-hide_banner", "-i", str(path), "-af",
                  "volumedetect,silencedetect=noise=-45dB:d=0.25", "-f", "null", "-"])
    silence = sum(float(value) for value in re.findall(r"silence_duration: ([\d.]+)", output))
    peak_match = re.search(r"max_volume: ([-\d.]+) dB", output)
    mean_match = re.search(r"mean_volume: ([-\d.]+) dB", output)
    if not peak_match or not mean_match:
        raise RuntimeError(f"Could not inspect audio levels: {path}")
    seconds = duration(path)
    return {"duration": seconds, "peakDb": float(peak_match[1]),
            "meanDb": float(mean_match[1]), "silenceSeconds": round(silence, 3),
            "silenceRatio": round(silence / seconds, 4)}


def build_story(story: dict, engine: str, force: bool, engine_note: str) -> None:
    sources = [record_page(story, page, engine, force) for page in story["pages"]]
    directory = CACHE / story["id"]
    combined = directory / "combined.wav"
    timeline = []
    tail_levels = []
    position = 0.0
    with wave.open(str(combined), "wb") as output:
        output.setnchannels(1)
        output.setsampwidth(2)
        output.setframerate(SAMPLE_RATE)
        for index, (page, source) in enumerate(zip(story["pages"], sources)):
            with wave.open(str(source), "rb") as audio:
                output.writeframes(audio.readframes(audio.getnframes()))
                audio.setpos(max(0, audio.getnframes() - SAMPLE_RATE // 10))
                tail = audio.readframes(SAMPLE_RATE // 10)
                samples = struct.unpack("<" + "h" * (len(tail) // 2), tail)
                rms = math.sqrt(sum(value * value for value in samples) / len(samples))
                tail_levels.append(20 * math.log10(max(rms / 32768, 0.000001)))
            # Probe real decoded audio, never estimate duration from characters.
            seconds = duration(source)
            pause = PAGE_PAUSE if index < len(sources) - 1 else 0.2
            output.writeframes(bytes(round(pause * SAMPLE_RATE) * 2))
            end = position + seconds + pause
            timeline.append({"id": page["id"], "start": round(position, 6), "end": round(end, 6)})
            position = end
    lower, upper = TARGETS[story["ageBand"]]
    if not lower <= position <= upper:
        raise RuntimeError(f"{story['id']} is {position:.2f}s; expected {lower}-{upper}s. "
                           "Adjust the age-appropriate reading rate or story length; do not pad with silence.")
    source_metrics = measure(combined)
    gain = -3 - source_metrics["peakDb"]
    destination = ROOT / "assets" / "stories" / story["id"] / "narration.mp3"
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = directory / "narration.mp3"
    run([tool("ffmpeg"), "-v", "error", "-y", "-i", str(combined), "-af", f"volume={gain:.3f}dB",
         "-ar", str(SAMPLE_RATE), "-ac", "1", "-c:a", "libmp3lame", "-b:a", "80k",
         "-metadata", f"title={story['title']}", "-metadata", "artist=小小故事岛 · 合成旁白",
         str(temporary)])
    metrics = measure(temporary)
    if metrics["peakDb"] > -0.5 or metrics["meanDb"] < -35 or metrics["silenceRatio"] > 0.4:
        raise RuntimeError(f"Audio level or silence check failed: {metrics}")
    if abs(metrics["duration"] - position) > 0.15:
        raise RuntimeError("MP3 encoding duration differs from page timeline by more than 0.15s")
    # Include the tiny MP3 encoder padding in the last page for complete coverage.
    timeline[-1]["end"] = metrics["duration"]
    voice = "macOS Tingting (zh-CN), recorded offline" if engine == "say" else "zh-CN-XiaoxiaoNeural"
    timing_file = ROOT / "src" / "content" / "timings.json"
    timings = json.loads(timing_file.read_text()) if timing_file.exists() else {}
    timings[story["id"]] = {"duration": metrics["duration"], "pages": timeline, "voice": voice}
    temporary.replace(destination)
    atomic_json(timing_file, timings)
    report = {"story": story["id"], "title": story["title"], "ageBand": story["ageBand"],
              "pages": len(story["pages"]), "voice": voice, "engine": engine,
              "rate": SAY_RATES[story["ageBand"]] if engine == "say" else EDGE_RATES[story["ageBand"]],
              "engineNote": engine_note, "pagePause": PAGE_PAUSE, "gainDb": round(gain, 3),
              "engineVersion": run([sys.executable, "-m", "edge_tts", "--version"]).strip() if engine == "edge" else "macOS say / Tingting",
              "sourceChars": sum(len(re.findall(r"[\u4e00-\u9fff]", p["text"])) for p in story["pages"]),
              "loudestPageTailDb": round(max(tail_levels), 1),
              "sha256": hashlib.sha256(destination.read_bytes()).hexdigest(), **metrics}
    atomic_json(directory / "report.json", report)
    print(json.dumps(report, ensure_ascii=False), flush=True)


def write_notes() -> None:
    reports = [json.loads(path.read_text()) for path in sorted(CACHE.glob("*/report.json"))]
    rows = []
    for item in reports:
        seconds = item["duration"]
        rounded_seconds = round(seconds)
        rows.append(f"| {item['title']} ({item['story']}) | {rounded_seconds // 60}:{rounded_seconds % 60:02d} "
                    f"({seconds:.3f}s) | {item['pages']} | {item['rate']} | {item['peakDb']:.1f} dBFS | "
                    f"{item['meanDb']:.1f} dBFS | {100 * item['silenceRatio']:.1f}% |")
    voices = "; ".join(sorted({item["voice"] for item in reports}))
    body = """# 旁白来源与验证

## 来源

- 所有故事正文为本项目创作的原创童话，输入来自 `src/content/stories.json` 的完整 `page.text`，没有替换为摘要。
- 配音是预先录制并随应用打包的 MP3；播放器不调用系统即时朗读，也不请求在线 TTS。
- 首选 Microsoft Edge `zh-CN-XiaoxiaoNeural`。本次预装 edge-tts 7.2.8 返回 HTTP 403；在项目缓存中隔离安装 7.3.1 后请求成功，正式生成改为 Xiaoxiao。离线 Tingting 的初次样音留在缓存中，不是最终交付音轨。
- Xiaoxiao 为普通话神经网络合成女声，语速按年龄段放慢，音高 -2 Hz。没有真人配音声明。备用 `--engine say` 可生成 macOS 自带 `Tingting` 的普通话音轨，音色更朴素；它只用于网络服务不可用时的显式降级。
- 语音引擎归各自供应商所有；没有采样或模仿特定个人的声音，没有第三方录音或背景音乐。此处记录工具来源，不宣称获得供应商之外的独立语音资产授权。

## 可复现命令

```sh
python3 -m pip install --target .cache/audio/edge-runtime edge-tts==7.3.1
PYTHONPATH=.cache/audio/edge-runtime python3 scripts/generate-audio.py --story moon-post --engine edge
PYTHONPATH=.cache/audio/edge-runtime python3 scripts/generate-audio.py --engine edge
# 离线备用：python3 scripts/generate-audio.py --engine say
```

需要 Python 3、ffmpeg、ffprobe；离线模式需要 macOS `say` 的 `Tingting` 声音。`auto` 先作两次有超时的网络试录，失败后选择离线声音。每篇故事固定一个引擎，中途失败即报错。缓存按正文、声音、语速和采样率的哈希区分，正文改变后不会误用旧录音。

## 录制与同步

- 每页完整录音后，转为 24 kHz、单声道、16-bit PCM；保留引擎生成的完整开头和结尾，不硬切语音。
- 每页间追加 0.35 秒停顿，最后保留 0.20 秒尾音缓冲；不通过大片静音凑目标时长，不对语音作时间拉伸。
- 逐页用 ffprobe 读取实际时长，再将所有 PCM 页拼成完整故事。峰值归一至约 -3 dBFS 后编码为 24 kHz、单声道、80 kbps MP3。
- `src/content/timings.json` 按这些实际时长生成连续区间，最后一页覆盖 MP3 微小编码填充；完整音轨与时间轴差异校验上限 0.15 秒。
- 验证完整解码、年龄段时长、峰值、平均电平与静音比例。静音定义为低于 -45 dBFS 且持续至少 0.25 秒，包含正常句间/页间停顿；超过 40% 则失败。
- 另测每页原始 PCM 最后 100 ms 的 RMS，生成报告保存在 `.cache/audio/<story>/report.json` 的 `loudestPageTailDb`；本批 Xiaoxiao 页尾均为静音，未在有声信号处硬切。
- 本记录是信号与时序验证；不能据此声称真人试听质量或真机播放已经验收。

## 实际生成记录

| 故事 | 实际时长 | 页数 | say 语速 / edge rate | 峰值 | 平均电平 | 静音比例 |
| --- | --- | --- | --- | --- | --- | --- |
""" + "\n".join(rows) + f"\n\n本批音轨实际声音：{voices}。共 {len(reports)} 篇、{sum(item['pages'] for item in reports)} 页，合计 {sum(item['duration'] for item in reports):.3f} 秒。\n"
    (ROOT / "assets" / "audio-notes.md").write_text(body, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--story", action="append", help="Only generate this story ID (repeatable)")
    parser.add_argument("--engine", choices=["auto", "edge", "say"], default="auto")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    CACHE.mkdir(parents=True, exist_ok=True)
    stories = json.loads((ROOT / "src" / "content" / "stories.json").read_text())
    if args.story:
        unknown = set(args.story) - {s["id"] for s in stories}
        if unknown:
            parser.error(f"Unknown stories: {', '.join(sorted(unknown))}")
        stories = [s for s in stories if s["id"] in args.story]
    engine, engine_note = choose_engine(args.engine)
    for story in stories:
        build_story(story, engine, args.force, engine_note)
        write_notes()


if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, subprocess.TimeoutExpired) as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
