# 旁白来源与验证

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
| 森林里的慢时钟 (clock-forest) | 9:03 (543.122s) | 16 | -18% | -3.5 dBFS | -22.3 dBFS | 15.2% |
| 云海里的小鲸鱼 (cloud-whale) | 5:09 (308.922s) | 12 | -15% | -3.4 dBFS | -20.6 dBFS | 16.0% |
| 小狐狸的森林图书馆 (fox-library) | 5:12 (311.850s) | 12 | -15% | -3.4 dBFS | -20.7 dBFS | 15.9% |
| 月亮邮局 (moon-post) | 2:36 (156.250s) | 8 | -18% | -3.4 dBFS | -21.0 dBFS | 16.8% |
| 小熊的发光种子 (seed-light) | 2:52 (172.498s) | 8 | -18% | -3.4 dBFS | -21.2 dBFS | 16.8% |
| 风的另一边 (wind-map) | 9:07 (547.250s) | 16 | -18% | -3.6 dBFS | -22.5 dBFS | 14.5% |

本批音轨实际声音：zh-CN-XiaoxiaoNeural。共 6 篇、72 页，合计 2039.892 秒。
