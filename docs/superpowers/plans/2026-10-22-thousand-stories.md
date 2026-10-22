# 千篇有声绘本扩充执行计划

> **For agentic workers:** 按下列任务并行创作、顺序集成与校验。用户已经要求继续执行。

**Goal:** 为现有六篇之外新增1000篇完整原创童话，并在媒体完成和检查后分批上线。

**Architecture:** 保留原六篇内置故事。新增故事使用同源远程目录与逐篇详情，浏览书架只加载元数据；按需下载插图和音轨。正文、媒体、发布各自记录实际完成数。

**Tech Stack:** Expo/React Native/TypeScript；JSON；Node/Python；SVG/WebP；预生成普通话MP3；现有Nginx。

**Spec:** ../specs/2026-10-22-thousand-stories-design.md

## Global Constraints

- 新增1000篇：低龄400、中龄350、高龄250；450–650/900–1200/1400–1900正文汉字，8/12/16页。
- 25批，每批16/14/10篇。完整独立情节，不以换名模板凑数。
- 仅media-ready进入线上目录；文字完成不冒充配音、插图或发布完成。
- 不破坏六篇现有内容、收藏、阅读进度和音频同步。

## Review Focus

- 远程目录不可达或无效：仍能阅读内置故事，远程可重试。
- 远程进度在目录未加载时：不得被当作无效数据清除。
- 不完整媒体或时间轴：发布检查拒绝加入目录。
- 目录中的路径越界和异常数值：加载器拒绝，不能污染播放器。
- 内容重复或录音失败：保留草稿/失败记录，不静默降低标准。

## Task 1: 完整正文与检查记录

Files: content-expansion/batches/NNN/*.json、*.md；scripts/validate-expansion.mjs。

- [x] 独立创作第一批40篇，将三篇已审阅样稿纳入稳定ID expansion-0001/0017/0031。
- [ ] 每批校验数量、年龄分配、唯一ID/标题、正文汉字、页序、场景和重复段落。
- [ ] 独立编辑检查全部摘要并至少通读六篇，保存真实覆盖记录；继续其余24批。

## Task 2: 远程内容库

Files: App.tsx、src/content/types.ts、src/content/remote.ts、tests/remote-catalog.test.ts。

Interface: /library/index.json 为 {schemaVersion:1,stories:[summary]}；summary有id/version/status/title/subtitle/description/ageBand/theme/color/cover/pageCount/duration/detailUrl。/library/stories/<id>/v<version>/story.json有相同元数据、audio及pages[{id,text,image,start,end}]。所有URL限制在同源/library/下。

- [x] 添加输入校验、目录加载、详情按需加载和请求失败重试。
- [x] 搜索与每页24篇；收藏、继续阅读支持远程故事，内置六篇离线可用。
- [x] 测试无效路径/时间轴、断网回退、重复目录项、远程进度保留；npm test与npm run typecheck通过。

## Task 3: 插图、配音与发布目录

Files: scripts/build-expansion-library.mjs、scripts/generate-expansion-audio.py；public/library/；content-expansion/reports/。

- [ ] 按故事人物设定和每页行动绘制可编辑原稿，导出WebP封面与逐页图；检查不同页面与人物一致性。
- [ ] 完整逐页正文预生成普通话旁白，逐页量测实际时长并拼接MP3；正文哈希防止缓存串用。
- [ ] 检查音轨可解码、信号电平、静音比例、全部图像可解码、页序与时间轴覆盖。
- [ ] 仅完整内容写入版本化详情；目录原子更新并记录素材哈希与实际字数时长。

## Task 4: 生产验证与上线

Files: docs/deployment.md、docs/verification.md、deploy/nginx/kid-store.jentin.cn.conf。

- [x] 首批40篇：npm test、npm run typecheck、npm run validate:content、扩充内容校验和npm run build:web通过。
- [x] 首批40篇：浏览器验证搜索、打开新故事、实际播放与翻页、刷新恢复、加载失败重试；按记录标明未测设备。
- [x] 首批40篇：上传新release，核验哈希/媒体Range/缓存/404及磁盘余量后切换current；保留可回退版本。
- [ ] 逐批记录完整正文、媒体和线上实际数量；1000全部完成才宣布目标达成。

## 当前里程碑

2026-10-22，首批40篇已完成全文审稿、496张插图、40条旁白（11956.440秒）并发布，线上共46篇。22项测试通过，785个发布文件校验通过，40条音频Range通过。后续24批继续执行，只有1000篇全部完成才能关闭目标。详见`content-expansion/reports/batch-001-publication.md`。

2026-10-23进展：第二批0041–0080共40篇正文全部全文审阅；0041–0065的25篇完成媒体并发布，累计65篇新增/71篇线上。0066–0070已完成媒体并通过实际应用解析器，尚待后续发布。第三批已开始审稿和配音。第二批部分发布证据见`content-expansion/reports/batch-002-publication-partial.md`；1000篇目标仍开放。

2026-10-23后续进展：累计305篇新增故事已完成媒体并上线（0001–0275、0281–0310），线上共311篇。4532文件哈希及HTTPS长度、305音轨Range通过；新故事播放、自动翻页、收藏和刷新恢复通过。正文已全文审阅至0540，配图与配音继续推进。详见第7/8批部分发布记录；1000篇目标仍开放。

2026-10-23再推进：累计连续0001–0328共328篇新增故事完成媒体并上线，网站共334篇。第七、第八批全部完成，第九批前8篇完成。4905文件哈希及HTTPS长度、328音轨Range通过；《第七只脚先往上抬》播放自动翻页，刷新恢复第5页116秒及收藏/暂停。正文已全文审阅至0542；当前739篇稿件不等于739篇可读故事。1000篇目标仍开放。

2026-10-23继续推进：新增故事连续0001–0355共355篇已完成媒体并上线，网站361篇。5298文件哈希/HTTPS长度和355音轨Range通过；《木纹列车转了一个弯》自动翻至第2页0:35，刷新恢复第3页54.6秒、收藏及暂停。正文审阅及配音审核至0552；第九批剩5篇和第十批继续配图，1000篇目标仍开放。

2026-10-23继续推进：连续0001–0383共383篇新增故事完整上线，网站389篇。第九批全部、第十批前23篇完成；5674文件哈希/HTTPS长度与383音频Range通过。《阿阔游进竖着的海》播放自动到第4页1:21，刷新恢复第7页143.7秒、收藏及暂停。全文审稿和配音审核至0556，0384–0400继续配图。1000篇目标保持开放。
