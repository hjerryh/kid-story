---
name: kid-story-media
description: "用于 kid-story 小小故事岛项目已审故事的逐页插图、普通话配音、时间轴核对及版本化媒体入库。用户要求补图、修图、配音、检查图文音频一致性或接入指定故事媒体时使用。"
---

# 小小故事岛：媒体制作与验收

以下路径和命令相对仓库根目录。先读取本次完整稿件及其 `provenance.reviewReport`，按[当前范围](../../../docs/superpowers/specs/2026-10-22-thousand-stories-design.md)确定要处理的编号。`text-ready` 标记不足以单独证明可制作：核对正文、审稿报告及 `reviewedBodySha256`。

## 只准备本次输入

使用[收集脚本](../../../scripts/collect-expansion.mjs)，显式指定 `--start`、`--end`、`--ready`、`--require-range`、`--output`。输出写到 `.cache/`，不写回正文目录。默认范围是1–1000，不能省略编号后对整个库制作媒体。

若正文尚未审阅，先按 [kid-story-content](../kid-story-content/SKILL.md)处理。仅制作储备媒体时不要注册生产构建器：构建器会更新线上待发布目录，不能当成纯渲染工具。

## 插图

- 独立故事模块放在 `scripts/expansion-art/`。已验收范例为 [thirteenth-middle-first.mjs](../../../scripts/expansion-art/thirteenth-middle-first.mjs)，对应[验收记录](../../../content-expansion/reports/thirteenth-middle-first-art-review.md)。这些是实现与报告格式范例，不是可以复制到新故事的验收结论。
- 先完整阅读正文、分镜和人物设定，固定源稿快照。每页画出对应动作与道具状态，封面单独构图；当前分页图1000×800、封面1000×1000。角色颜色、服饰、肢体、数量与持有物保持连续。
- 在 `.cache/` 渲染PNG、联系表与检查数据。实际打开全部分页联系表，放大检查关键动作、道具数目、遮挡、裁切和修改页；自动非空白或唯一哈希检查不能代替看图。简化SVG插图按真实制作方式描述。
- 验收通过后保存规范SVG到 `content-expansion/artwork/<id>/`，报告到 `content-expansion/reports/`。冻结并记录完整源稿、无分隔正文、绘图模块、递归本地依赖及每帧SVG/PNG/像素哈希。重新渲染与记录比对，防止验收的是旧图。
- 已冻结共享helper的修改可能影响很多故事。修改前查调用与哈希范围；不要用全库重建来碰运气。未完成草稿继续按[储备说明](../../../content-expansion/RESERVES.md)保存。

## 配音与时间轴

读取[扩展配音脚本](../../../scripts/generate-expansion-audio.py)，确认 `ffmpeg`、`ffprobe` 与 `edge-tts` 可用。已有 `.cache/audio/edge-runtime` 可被脚本使用，但新克隆不保证有它。按本次任务准备缺少的依赖，不复制缓存状态或假定已有旁白。

对已核对的输入文件调用：

```sh
python3 scripts/generate-expansion-audio.py --engine edge --input .cache/expansion-selected.json --jobs 2
```

输入文件必须是本次刚生成并核对过的选择集。可通过 `--story` 进一步限制。现有脚本按页断点续作、每页最多重试3次；失败后定位问题并保留缓存，避免无限重跑或默认使用 `--force`。同一故事不要并行运行多个配音进程。

产物在 `.cache/expansion-audio/<id>/`：`narration.mp3`、`timing.json`、`report.json`。脚本用实际PCM帧数和停顿生成时间轴；不得用估计时长填时间点，或用空音轨/浏览器系统朗读代替预生成旁白。

两种正文哈希有意不同：

| 用途 | UTF-8输入 |
| --- | --- |
| 审稿 `bodySha256` / `reviewedBodySha256` | 全部分页文字无分隔拼接 `join('')` |
| 配音 `sourceTextSha256` | 全部分页文字用两个换行拼接 `join('\n\n')` |

核对音频与时间轴文件哈希、源正文哈希、页码、连续递增的起止时间和最后一页结束时间。报告中的解码/信号检查不等于逐句听审；抽听或全程听审只报告实际覆盖的范围。

## 接入版本化媒体

只有本次包含入库且目标范围允许时，才编辑[构建器](../../../scripts/build-expansion-library.mjs)：加入模块import、`artworkFiles`登记和精确ID区间映射。范围外素材不注册。

```sh
node scripts/build-expansion-library.mjs --input .cache/expansion-selected.json
```

构建器和 `public/library/index.json` 必须由一个写入者串行处理。已有 `.cache/expansion-library-build.lock` 时先检查持有进程；不能因为等待而直接删锁。

构建后检查 `built` 和 `skipped`，退出成功也可能跳过未就绪故事。输出为 `public/library/stories/<id>/vN/`、索引及每篇媒体报告。内容或生成依赖变化会产生新版本；已发布的 `vN` 资源不可覆盖。

运行范围校验，并用 [parseRemoteIndex / parseRemoteStory](../../../src/content/remote.ts)检查本次索引与故事详情、所有被引用资源存在且非空。`validate-expansion.mjs --require-all` 只保证当前目标ID集合，不替代图片、音轨和详情检查。浏览器实测播放推进、自动翻页、暂停后翻页保持安静及进度恢复；不把网页验证当作iOS真机后台/锁屏验证。

需要发布时转到 [kid-story-release](../kid-story-release/SKILL.md)。只有本地媒体就绪时，报告“本地已完成”，不要说已上线。
