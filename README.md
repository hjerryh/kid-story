# 小小故事岛

给 3–10 岁孩子的中文有声绘本 App。Expo / React Native 同一套代码支持 iOS、Android 和网页预览。

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

- 3–5 岁：《月亮邮局》《小熊的发光种子》
- 6–8 岁：《云海里的小鲸鱼》《小狐狸的森林图书馆》
- 9–10 岁：《森林里的慢时钟》《风的另一边》

共 6 篇原创童话、72 页故事插图和约 34 分钟普通话旁白。音频、封面与插图都是真实本地资源。来源与生成说明见 `assets/*-notes.md`。

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

设计、实施计划与实际验证证据位于 `docs/`。没有执行应用商店发布或任何云端部署。
