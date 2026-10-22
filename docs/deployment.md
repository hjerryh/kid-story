# 网页部署记录

部署日期：2026-10-23（Asia/Shanghai）。正式地址：<https://kid-store.jentin.cn>。

## 发布内容

- 当前发布：`20261023-expansion-183-v1`，提交`01b4c9139d60f50b99d879a5095f9e0d01529f04`，Expo Web生产导出。
- 189篇完整故事：原有6篇，加上`expansion-0001`至`expansion-0183`。扩展库共2036页、2219张插图/封面、183条完整旁白（51397.942秒）。1000篇目标仍在进行中。
- 本次新增0156–0183共28篇、292页、320张图、7090.136秒旁白。第四批0121–0160全部上线，第五批0161–0183上线23篇。
- 当前清单2794文件、617604111字节；增量上传377个变化文件、75890537字节。
- 发布包：`artifacts/StoryIsland-Web-20261023-expansion-183-v1.incremental.tar.gz`；SHA-256为`facb7021151957dceae846f6dc59ddbfd607614f63420b0d0782eb8b1a526342`。
- 文件清单：`artifacts/StoryIsland-Web-20261023-expansion-183-v1.manifest.json`；服务器全部2794文件SHA-256核对后原子切换。
- 当前JS：`index-d945c738ff3f83fcdacd18ab8cc87d89.js`。上一版`20261023-expansion-155-v1`保留可回退；未变化媒体通过硬链接复用。

这是独立的静态网站，不依赖本机预览服务、Node后端、数据库或在线TTS。收藏和阅读位置保存在访问者自己的浏览器内；本机预览域名下的数据不会迁移到正式域名。

## 服务器位置

SSH连接：`jingtian-server`，用户`ubuntu`。公开DNS从`kid-store.jentin.cn`经`jentin.cn`解析到`124.221.85.250`。

- 站点目录：`/www/wwwroot/kid-store.jentin.cn/`
- 当前资源：`current -> releases/20261023-expansion-183-v1`
- 服务器校验清单：`manifests/20261023-expansion-183-v1.json`
- 更新前的站点配置备份：`manifests/20261022-expansion-40-v1.nginx-before.conf`
- 证书验证目录：`shared/.well-known/acme-challenge/`
- Nginx站点配置：`/www/server/panel/vhost/nginx/kid-store.jentin.cn.conf`
- 日志：`/www/wwwlogs/kid-store.jentin.cn.log`、`/www/wwwlogs/kid-store.jentin.cn.error.log`

实际承载80/443端口的是宝塔Nginx：`/www/server/nginx/sbin/nginx`，主配置`/www/server/nginx/conf/nginx.conf`。机器上的`/usr/sbin/nginx`使用另一套配置，不能用它检验或重载本网站。每次上线前都使用正确的二进制执行`-t`，通过后才优雅重载。

仓库中的配置副本为`deploy/nginx/kid-store.jentin.cn.conf`。站点根页面与`/library/index.json`使用`Cache-Control: no-cache`；带哈希的资源及`/library/stories/<id>/vN/`版本化资源缓存一年并带immutable。缺失资源返回404，不回落到首页。HTTP保留ACME验证入口，其他访问308跳转HTTPS。新配置已备份、通过正确Nginx二进制的`-t`检查并重载。

## HTTPS与续期

证书由Let's Encrypt签发，包含`kid-store.jentin.cn`，有效期至2027-01-20。证书文件位于`/etc/letsencrypt/live/kid-store.jentin.cn/`，沿用服务器已有ACME账户。

服务器已有`certbot.timer`处于active状态。该证书使用webroot验证，续期后执行`/usr/local/sbin/reload-kid-store-nginx`；脚本先检查宝塔Nginx配置，再重载使新证书生效。脚本源码见`deploy/reload-nginx.sh`。

续期模拟已通过：`certbot renew --dry-run --cert-name kid-store.jentin.cn --non-interactive --no-random-sleep-on-renew`返回成功。服务器现有Certbot版本使用`renew_hook`保存重载脚本；重载脚本已在首次签发时执行成功。

## 上线验证

- 当前2794文件均以HTTPS返回200且长度匹配本地；183篇2036页通过应用实际解析器及资源检查。
- 183条新增MP3的`Range: bytes=1024-2047`均返回206，Content-Range及1024字节响应逐条匹配本地。
- 183篇索引完整字节匹配、no-cache；版本化资源immutable；缺失音频/图片/JS返回404。公网检查0失败。
- 更新目录后显示189篇、8页。搜索“核桃还没”得1篇，《核桃还没打开的时候》播放至0:26并自动翻至第2页。
- 暂停、收藏、翻页后为第3页0:47；刷新后继续阅读恢复第3页0:47、收藏及暂停状态。浏览器无error/warn。
- 证据：`artifacts/expansion-183-live-http-verification.json`和`artifacts/expansion-183-live-{home,reader,restored}.png`。未在所有终端逐篇全程听完183条音轨。
- 本次内容校验、应用解析器和生产导出通过。应用/部署脚本未变，沿用此前22项应用回归、TypeScript及9项部署测试；未将旧检查计为此次重跑。Nginx配置不变，正确二进制的`-t`通过。

### 第四批扩展至35篇发布的历史验证

`20261023-expansion-155-v1`新增0144–0155后达161篇。2418文件服务器SHA-256、HTTPS长度、155音轨Range检查通过。《枣枣不再吱呀以后》播放至第2页0:38；刷新恢复第3页50.7秒、收藏并保持暂停。证据保留于`artifacts/expansion-155-live-*`。

### 第四批扩展至23篇发布的历史验证

`20261023-expansion-143-v1`新增0129–0143后达149篇。2218文件服务器SHA-256、HTTPS长度、143音轨Range检查通过。《长车票弯弯站》播放至第2页0:40；刷新恢复第4页61.2秒、收藏并保持暂停。证据保留于`artifacts/expansion-143-live-*`。

### 第三批补齐与第四批前8篇发布的历史验证

`20261023-expansion-128-v1`新增0116–0128后达134篇。2025文件服务器SHA-256、HTTPS长度、128音轨Range检查通过。《泡泡火车到站啦》播放至第2页0:37；刷新恢复第4页62.7秒、收藏并保持暂停。证据保留于`artifacts/expansion-128-live-*`。

### 第三批前35篇发布的历史验证

`20261023-expansion-115-v1`新增0081–0115后达121篇。1842文件服务器SHA-256、HTTPS长度和115音轨Range检查通过。搜索“蓝桥”得1篇，《蓝桥那头的两碗汤》播放至第2页0:29；刷新恢复第3页56.9秒、收藏并保持暂停。证据保留于`artifacts/expansion-115-live-*`及`content-expansion/reports/batch-003-publication-partial.md`。

### 第二批全部40篇发布的历史验证

`20261023-expansion-80-v1`补齐0066–0080，使网站达到86篇。1361文件服务器SHA-256、HTTPS长度、80音轨Range全部通过。《伞先生下面不下雨》播放至第2页0:52；暂停、收藏及翻页后刷新，恢复第4页1:21及收藏，保持暂停。证据保留于`artifacts/expansion-80-live-*`及`content-expansion/reports/batch-002-publication.md`。

### 第二批前25篇发布的历史验证

`20261022-expansion-65-v1`补充0041–0065后网站达到71篇。1096文件服务器SHA-256与HTTPS长度、65条音频Range全部通过；线上《牧星歌里的土豆》播放至第3页1:08，刷新恢复第5页1:41及收藏，保持暂停。未变化MP3在两版本间inode一致。证据保留于`artifacts/expansion-65-live-*`及`content-expansion/reports/batch-002-publication-partial.md`。

### 首批40篇发布的历史验证

`20261022-expansion-40-v1`新增40篇，使网站达到46篇。785文件的服务器SHA-256、HTTPS长度和40条音频Range验证通过。实测搜索“松鼠”4篇、9–10岁12篇、分页24+22；《松鼠闻到的花香》刷新恢复第3页0:43和收藏，《灯塔熄灯以后的晚上》播放推进并翻页。历史证据保留于`artifacts/expansion-live-*`及`content-expansion/reports/batch-001-publication.md`。

### 首次六篇发布的历史验证

- 以可信CA校验证书并访问HTTPS，主页返回200且标题正确；HTTP保留原路径和查询参数跳转到HTTPS。
- 全部88个文件均返回200，文件长度匹配本地；PNG、MP3和JS的MIME类型正确。
- 六条MP3的`Range: bytes=1024-2047`均返回206，内容与本地相应1024字节一致；越界Range返回416。
- 不存在的图片/音频/JS资源按配置返回404；首页不使用长期缓存，哈希资源使用immutable缓存。
- 线上浏览器实际播放《月亮邮局》，从0:00推进至0:33并自动切换第2页；暂停后跳转到第3页0:37保持暂停。
- 收藏后刷新，收藏仍存在；继续阅读恢复第3页0:37且不会自动播放。检查期间浏览器控制台没有运行错误。

首次发布的本地证据：`artifacts/live-deployment-verification.json`、`artifacts/live-home.jpg`、`artifacts/live-reader.jpg`。截图和验证数据属于实际公开站点，不是本地开发服务。

## 后续更新

更新时先通过项目检查并执行`npm run build:web`，将新的`dist/`上传至新的release目录，验证资源完整性后原子切换`current`软链接；保留上一版目录便于回退。不要向正在使用的release目录逐个覆盖文件。

后续批次使用`python3 scripts/deploy-web.py --release <唯一发布标识>`准备增量发布包、上传并原子切换；`--prepare-only`仅生成本地清单与发布包。脚本沿用`jingtian-server`，不会更改SSH身份或全局配置。每次仍校验新release的全部清单文件，增量包仅传输变化的文件。

新release通过硬链接复用未变化的文件，新入口与新增素材写入独立文件再替换；不会通过硬链接原地改写旧release。发布锁和预期旧版本检查避免并发切换，旧客户端的静态资源继续保留。安装逻辑由`tests/deploy_web_test.py`验证，测试命令为`python3 -m unittest discover -s tests -p '*_test.py'`。

发布后运行`python3 scripts/verify-web-release.py`，核对全部HTTPS文件长度、完整索引字节、最新音频Range、缓存策略及404，并再次做浏览器交互验收。脚本不会把仅上传成功当作线上验收完成。

在macOS打包时可使用`COPYFILE_DISABLE=1 tar --no-xattrs -czf <发布包> -C dist .`，避免携带macOS扩展属性。仅修改资源且不改Nginx配置时，无需重启或重载Nginx。

此记录只涵盖网页版上线。iOS/Android的安装包、签名与应用商店发布不受本次部署影响。
