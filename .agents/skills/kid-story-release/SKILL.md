---
name: kid-story-release
description: "用于 kid-story 小小故事岛网页版的生产导出、增量部署、线上验收及发布记录维护。用户要求更新 kid-store.jentin.cn、准备发布包或验证该站点版本时使用；只提交储备稿或文档不触发部署。"
---

# 小小故事岛：网页发布

从仓库根目录执行，先读[部署记录](../../../docs/deployment.md)顶部的当前版本、[当前范围](../../../docs/superpowers/specs/2026-10-22-thousand-stories-design.md)与本次 Git 差异。发布参数取自当前仓库脚本和部署记录，不能从历史聊天的临时路径猜测。

## 判断本次动作

- 区分“提交/推送Git”“准备发布包”和“部署网站”。只有本次请求及既有授权涵盖部署时才上传并切换服务器；skill自身不授予发布权限。仅提交储备稿、skill或决策文档无需网站构建与部署。
- 当前发布基线为500篇扩展故事加6篇内置故事；储备内容虽已在Git中，仍不属于线上库。用户若明确调整发布范围，同步范围文档和校验器，不能只把储备文件复制到 `public/`。
- 技术栈为 Expo / React Native / TypeScript，网页版由 `expo export` 生成静态资源，无需启动Node后端或在线TTS。原生构建能力另见[原生验证记录](../../../docs/native-verification.md)，网页部署不代表IPA/APK或应用商店发布。

## 构建前

内容变更先核对本次审稿、媒体报告与 `public/library/index.json`，按 [kid-story-media](../kid-story-media/SKILL.md)确认详情和资源可被应用解析。

```sh
node scripts/validate-expansion.mjs --require-all
git diff --check
npm run build:web
```

上述范围校验使用当前500篇基线。此命令重写内容目录/库存报告，审查差异。应用逻辑变更另运行 `npm test`、`npm run typecheck`；内置6篇变更运行 `npm run validate:content`；部署脚本变更运行 `python3 -m unittest discover -s tests -p 'deploy_web_test.py'`。纯文档改动不需重跑这些应用测试。

用明确文件列表提交本次发布内容，保持部署输入可追溯。发布清单的 `baseCommit` 只记录HEAD，不自动证明工作区或 `dist/` 与该提交一致：确认待发布源文件和媒体都已提交，导出来自同一组文件。用户的无关改动不要一并发布。

## 准备与部署

选一个未使用的release名称，例如日期加本次变更短名；失败重试前先检查远端 `current` 和同名release是否存在，不能覆盖已有发布目录。

```sh
python3 scripts/deploy-web.py --release "$release_id" --prepare-only
```

`release_id` 须先设置为本次实际名称。`--prepare-only` 也会通过SSH读取当前远端清单，但不上传或切换；产出 `artifacts/StoryIsland-Web-<release>.manifest.json` 与增量包。准备后检查文件数、故事数、变更字节、包哈希和基线提交。准备产物与下述正式运行可能重新生成，不假设两个压缩包字节相同。

本次已获准部署时运行：

```sh
python3 scripts/deploy-web.py --release "$release_id"
```

现有[部署脚本](../../../scripts/deploy-web.py)调用[远端安装器](../../../scripts/install-web-release.py)，验证全清单SHA-256、硬链接复用不变资源、原子切换 `current`，并保留上一版。不要通过硬链接原地改文件，否则会污染旧版本。现有站点由宝塔Nginx承载，配置检验/重载必须使用部署脚本指定的 `/www/server/nginx/sbin/nginx`，不能误用系统另一个Nginx。

保持首页和索引 `no-cache`，版本化媒体 `immutable`，缺失媒体返回404。修改已发布资源应使用新版本路径，不能删除冲突检查或覆盖旧路径。脚本遇到基线变化、哈希冲突、配置错误时先定位；修正后再试，避免无界重试。安装阶段失败有回滚逻辑；线上验收失败不代表脚本自动回滚，需检查实际 `current`、上一版清单和故障范围后再处理。

## 上线验收与记录

```sh
python3 scripts/verify-web-release.py --report "artifacts/${release_id}-http-verification.json"
```

此脚本以本地 `dist/` 为期望，检查所有文件HTTPS状态/长度、完整目录字节、音频Range、缓存策略和404；必须先确认 `dist/` 正是本次发布导出。

浏览器刷新正式站点，等目录加载完成；确认故事总数，搜索本次目标故事，实际打开图文并播放到自动翻页。暂停、收藏、手动翻页、刷新并继续阅读，核对页码、进度和暂停/收藏状态；检查浏览器错误并保存实际截图。没有浏览器能力或某项未测时如实记录，不能用HTTP检查代替交互验收。

最后更新 `docs/deployment.md`、对应 `content-expansion/reports/` 发布记录和适用的计划进度。写明release、源码提交、故事/媒体数量、哈希、线上检查与未验证项。`artifacts/` 和 `.cache/` 默认不进Git；维护可提交的摘要，不假称原始证据在新克隆中存在。完成 Git 推送时核对远端分支提交，不把推送成功当作部署成功。
