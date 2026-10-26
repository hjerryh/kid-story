# kid-story · 小小故事岛

给 3–10 岁孩子的中文有声绘本 App。Expo / React Native 同一套代码支持 iOS、Android 和网页预览。

正式网页版：<https://kid-store.jentin.cn>。已部署到服务器并启用HTTPS，发布与维护说明见 [部署记录](docs/deployment.md)。

## 本地运行

```sh
npm install
npm run web -- --port 8081
```

打开 http://localhost:8081 。网页用于直接体验选故事、图文阅读、收藏和真实旁白；后台、锁屏及离线安装包能力以原生验证记录为准。

```sh
npm run ios
npm run android
```

原生构建需要对应的 Xcode / Android SDK。可用 `npx expo prebuild --no-clean` 更新原生工程，音频权限和后台配置在 `app.json` 中；应用不需要麦克风权限或登录。Expo 58 默认 prebuild 会重建原生目录，已有原生修改时请保留 `--no-clean`。

## 本轮交付

当前生产版预览：<http://localhost:8082>。开发预览：<http://localhost:8081>。
生产版可在停止服务后按以下命令重新打开：

```sh
npm run build:web
python3 -m http.server 8082 --bind 127.0.0.1 --directory dist
```

iOS 模拟器 Release 包已经构建并实际播放；可安装产物及运行范围见 [原生验证记录](docs/native-verification.md)。它仅适用于 Apple Silicon 上的 iOS 模拟器，不是实体 iPhone 的签名安装包。Android 已通过资源和 Hermes 代码导出，但本机缺少 Android SDK，未生成 APK 或执行 Android 运行验证。

完整测试及交互证据见 [验证记录](docs/verification.md)。后台计时、来电/耳机中断和真机适配仍需相应设备验收。

## 当前内容

正式网页版共 **506 篇故事**：原有 6 篇，加上已完成并部署的 500 篇原创童话。新增故事包含 5648 页图文、6148 张插图及封面、500 条普通话旁白（约 39.4 小时），按 3–5、6–8、9–10 岁分龄。

新增内容见 [500 篇目录](content-expansion/CATALOG.md)及[最终交付记录](content-expansion/reports/final-500-publication.md)。以下为原有 6 篇内置故事：

- 3–5 岁：《月亮邮局》《小熊的发光种子》
- 6–8 岁：《云海里的小鲸鱼》《小狐狸的森林图书馆》
- 9–10 岁：《森林里的慢时钟》《风的另一边》

这 6 篇内置故事包含 72 页故事插图和约 34 分钟普通话旁白。音频、封面与插图都是真实本地资源。来源与生成说明见 `assets/*-notes.md`。

打开故事不会自动发声。按下播放后图文随旁白切页；暂停时翻页保持安静。支持收藏、进度恢复、故事内跳转和 15 / 30 分钟定时停止。所有本地数据留在当前设备。

## 内容生产与验证

```sh
node scripts/render-illustrations.mjs
python3 scripts/generate-audio.py --help
node scripts/build-catalog.mjs
npm run validate:content
npm test
npm run typecheck
npm run build:web
```

故事在 `src/content/stories.json`，实际音轨时间轴在 `src/content/timings.json`。修改旁白正文后必须重新录制、生成时间轴并验证，不能手填预计时长。插图脚本用本项目原创 SVG 场景渲染 PNG；配音为预生成普通话音轨，播放过程中不调用在线 TTS。

新增的 500 篇故事及版本化图片、音频位于 `public/library/`，正文源稿位于 `content-expansion/`。可运行 `node scripts/validate-expansion.mjs --require-all` 检查交付范围的完整性。编号 0501 起的储备稿不属于此次交付，也未发布到网站。

仓库另保留编号 0501–1000 的 500 篇储备稿及已有插图草稿，完成状态见[储备内容说明](content-expansion/RESERVES.md)。这些文件纳入版本管理不代表已完成媒体验收或上线。

设计、实施计划与实际验证证据位于 `docs/`。网页版已部署；没有执行应用商店发布。

## 项目内 Skills

项目专用 skill 保存在 `.agents/skills/`，随仓库版本管理，直接引用本项目脚本和决策文档。支持项目级 skill 发现的工具可从该目录加载；其他工具可按下表读取对应 `SKILL.md`。

| Skill | 用途 | 调用示例 |
| --- | --- | --- |
| [kid-story-content](.agents/skills/kid-story-content/SKILL.md) | 分龄正文、分镜与全文审稿，维护储备状态 | `使用 $kid-story-content 审阅0605–0608，仅更新正文和审稿记录。` |
| [kid-story-media](.agents/skills/kid-story-media/SKILL.md) | 逐页插图、配音、时间轴与媒体入库验收 | `使用 $kid-story-media 检查第0500篇的图文和配音是否一致。` |
| [kid-story-release](.agents/skills/kid-story-release/SKILL.md) | 网页生产导出、增量部署和线上验证 | `使用 $kid-story-release 准备本次发布包，暂不部署。` |

Skill 是执行指南；当前交付范围、部署状态和储备边界仍以 `docs/` 与 `content-expansion/RESERVES.md` 为准。提交 skill 不会自动制作故事或部署网站。
