# 未发布储备内容

2026-10-26，按用户要求，将超出新增500篇交付范围的现有稿件和工作素材一并提交到 Git。此操作仅保存已有成果，不扩充线上目录，也不改变正文和插图的审核状态。

## 正文

`manuscripts/expansion-0501.json` 至 `manuscripts/expansion-1000.json` 共500篇储备稿：

- 0501–0604：104篇，文件状态为 `text-ready`；0601–0604的既有审稿记录为 `reports/editorial-016-young.md`。
- 0605–1000：396篇，文件状态为 `text-draft`，仍需全文审阅。

0501–0600此前已提交，本次补充0601–1000共400份正文文件。结构和重复文本检查不等于新增全文审阅；本次不将草稿升级为已审稿。

## 插图工作素材

本次保存111份已有SVG，位于 `artwork/expansion-0506/`、`artwork/expansion-0507/` 及 `artwork/expansion-0511/` 至 `artwork/expansion-0515/`。

同时保存三个尚未接入生产构建的绘图模块：

- `../scripts/expansion-art/thirteenth-middle-last-extra.mjs`：0506–0507。
- `../scripts/expansion-art/thirteenth-middle-last-extra-extra.mjs`：0508–0510。
- `../scripts/expansion-art/thirteenth-older-first.mjs`：0511–0515。

这些素材保留为工作草稿，未完成正式冻结交付，不作为可发布媒体。此前已提交的0504–0505插图继续保留。生成缓存和临时产物仍遵循仓库 `.gitignore`。

## 线上范围

`public/library/index.json` 仍只包含0001–0500共500篇扩展故事，连同原有6篇，网站共506篇。0501起的储备稿未加入线上目录；以后发布需要另行完成审稿、插图验收、配音、时间轴及上线验证。
