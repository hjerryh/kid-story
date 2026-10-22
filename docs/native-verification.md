# 原生构建验证

验证日期：2026-10-22（Asia/Shanghai）。

## 本机环境

- macOS / Apple Silicon。
- Xcode 26.3，Build 17C529；当前 iOS / iOS Simulator SDK 均为 26.2。
- 可用模拟器运行时：iOS 26.3。
- CocoaPods 1.17.0。
- Expo 58.0.17、React Native 0.88.0。
- 验证设备：iPhone 17，UDID `AD3E181C-6F17-4E0D-AEFF-68ECF5D1964B`。保留用户已有的 iPad Air 11-inch (M3) 运行状态。

## iOS

结果：最终源码的 iOS arm64 模拟器 Release 构建成功（`xcodebuild` exit 0、`BUILD SUCCEEDED`），并已安装到指定 iPhone 17 模拟器启动运行。前次构建因会话中断停止在 SVG 依赖编译，后续在同一 DerivedData 上使用 `-jobs 2` 增量续建；最终再次增量构建包含 `StoryPicture` 插图重试与 RN 0.88 样式兼容修复。

构建日志目录：`.cache/native-build/`。

- `pod-install.log`：依赖安装日志。
- `pod-install-after-icon.log`：图标刷新后从缓存恢复 Pods 的日志。
- `prebuild-refresh.log`：品牌图标生成日志。
- `simulator-boot.log`：iPhone 17 模拟器启动日志。
- `xcodebuild-release.log`：第一次模拟器 Release 构建日志（中断）。
- `xcodebuild-release-resumed.log`：同一 DerivedData 上第一次续建成功日志。
- `xcodebuild-release-final.log`：最终源码的增量构建成功日志。
- `final-bundle-verification.json`：源码时刻、JS bundle SHA-256 与全量媒体文件逐项校验。

本轮构建命令：

```sh
xcodebuild -workspace ios/app.xcworkspace -scheme app \
  -configuration Release -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,id=AD3E181C-6F17-4E0D-AEFF-68ECF5D1964B' \
  -derivedDataPath .cache/native-build/DerivedData -jobs 2 \
  CODE_SIGNING_ALLOWED=NO ONLY_ACTIVE_ARCH=YES build
```

Expo 58 的 `expo prebuild` 默认重建原生目录。如果要更新已有原生工程并保留 Pods，需显式使用 `npx expo prebuild --platform ios --no-install --no-clean`。图标已经生成到 `ios/app/Images.xcassets/AppIcon.appiconset/`。

生成的 Info.plist 已包含后台音频模式 `UIBackgroundModes = [audio]`，未请求麦克风使用权限。

## iOS 交付与实测范围

产物是 **Apple Silicon iOS 模拟器包**，不是可安装到真机的签名 IPA。

- `.app`：`.cache/native-build/DerivedData/Build/Products/Release-iphonesimulator/app.app`
- 可交付 ZIP：`artifacts/StoryIsland-iOS-Simulator.zip`
- ZIP SHA-256：`62247e2802585f3e384a8f83cada03edbfea3705c5593e0d2f248917ad755746`
- 最终截图：`artifacts/ios-reader-final.png`
- 最终 `main.jsbundle` 生成于 2026-10-22 20:24:42（Asia/Shanghai），晚于最后应用源码 `StoryPicture.tsx` 的 20:21:44 修改。
- JS bundle SHA-256：`e4c7ab44d0f5da5c43359de4fa9eef34423b605a7a1371c38aca945e378704eb`
- 包内 78 张 PNG 与 6 个 MP3，共 84 项媒体，均与源码资源逐项 SHA-256 一致。故事内容和媒体已内置，Release 启动不依赖 Metro；本轮没有通过关闭网络进一步做断网场景实验。

通过模拟器实际界面完成的验证：

1. 最终 Release 包安装并冷启动成功；品牌首页、故事列表及插图显示正常，没有启动红屏。
2. 打开《月亮邮局》时保持暂停，显示 `0:00` 与“播放故事”，没有进入即出声。
3. 点播放后从 `0:00` 推进至 `0:18`，随后自动显示第 2 页与对应插图/文字。
4. 在约 `0:32` 使用模拟器 Home 按钮回到 iOS 桌面，稍后重新打开应用仍为播放状态，显示 `1:56`、第 7 页。已验证短时间退到桌面后的后台连续播放和回前台页面同步。
5. 最终在 `2:04` 点暂停，界面变回“播放故事”；交付时保持暂停。
6. 覆盖安装最终包并重启模拟器后，首页仍显示“继续阅读月亮邮局”，阅读记录没有被覆盖安装清空。已结束故事重新打开从第 1 页开始。

尚未完成的原生验证：锁屏媒体卡片与系统暂停/继续按钮、长时间后台或设备休眠后的 15/30 分钟定时、真机来电/耳机拔出/蓝牙音频切换、真机安装签名、平板与 Android 设备。尝试锁屏期间模拟器窗口受到外部关闭与其他模拟器窗口切换影响，未得到可靠的锁屏控件证据；不将 Info.plist 配置或源代码检查视为这些运行场景通过。

## Android

当前机器有 `adb`，但未发现可用 Android SDK / `sdkmanager` / `gradle`；`ANDROID_HOME` 和 `ANDROID_SDK_ROOT` 为空，`~/Library/Android/sdk` 不存在。`java` 是系统占位入口，`/usr/libexec/java_home -V` 报告没有系统注册的 Java Runtime。IntelliJ IDEA 和 DevEco Studio 内各有可执行的 JBR 21（分别为 21.0.6 和 21.0.8），可在配置 Android 工具链时复用。

已通过 `npx expo export --platform android --output-dir .cache/exports/android`，生成 Hermes bundle 和资源；这不是 APK。

因此本轮不声称 Android 原生构建或设备运行已验证。要构建 Android，需配置 Android SDK 和指向可用 JDK 的 `JAVA_HOME` 后再执行项目的 Android 构建命令；本轮未下载大型 SDK 或更改全局开发环境。
