# 网页部署记录

部署日期：2026-10-22（Asia/Shanghai）。正式地址：<https://kid-store.jentin.cn>。

## 发布内容

- 当前发布：`20261022-expansion-40-v1`，基于 `da28d00` 后的故事库扩展代码，Expo Web 生产导出。
- 46篇完整故事：原有6篇，加上`expansion-0001`至`expansion-0040`。新增496张插图/封面和40条完整旁白（11956.440秒）。1000篇扩展目标仍在进行中。
- 发布包含785个文件（包含已生成的旧素材版本），195965795字节；服务器release还保留旧版客户端的静态资源，共888个文件。
- 发布包：`artifacts/StoryIsland-Web-20261022-expansion-40-v1.tar.gz`。
- 发布包 SHA-256：`b25477f0ec12c8284daa9f12bee57a9ad6585b3a06b3740213b35f266ec23b14`。
- 文件校验清单：`artifacts/StoryIsland-Web-20261022-expansion-40-v1.manifest.json`；服务器解包后的全部785个文件均通过SHA-256核对，之后才原子切换`current`。
- 当前JS：`index-d945c738ff3f83fcdacd18ab8cc87d89.js`。上一版`20261022-2a60c8a`继续保留以便回退。

这是独立的静态网站，不依赖本机预览服务、Node后端、数据库或在线TTS。收藏和阅读位置保存在访问者自己的浏览器内；本机预览域名下的数据不会迁移到正式域名。

## 服务器位置

SSH连接：`jingtian-server`，用户`ubuntu`。公开DNS从`kid-store.jentin.cn`经`jentin.cn`解析到`124.221.85.250`。

- 站点目录：`/www/wwwroot/kid-store.jentin.cn/`
- 当前资源：`current -> releases/20261022-expansion-40-v1`
- 服务器校验清单：`manifests/20261022-expansion-40-v1.json`
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

- 当前发布的全部785个文件均以HTTPS返回200，长度与本地匹配；40篇远程详情及456页内容已通过应用实际解析器校验。
- 40条新MP3的`Range: bytes=1024-2047`全部返回206，`Content-Range`和1024字节响应逐条与本地一致。
- 远程索引包含40篇并使用no-cache；版本化资源使用immutable；不存在的音频、JS、图片均返回404。
- 线上UI显示46篇，24篇/页，第二页22篇；搜索“松鼠”得到4篇，9–10岁筛选显示12篇。
- 《松鼠闻到的花香》实际播放至0:22并自动翻至第2页；暂停后下一页定位第3页0:43；刷新后收藏仍在，继续阅读恢复相同页/位置且保持暂停。
- 《灯塔熄灯以后的晚上》实际播放至1:18、第3页；暂停后翻页定位第4页1:31。检查期间浏览器控制台没有error/warn记录。
- 当前证据：`artifacts/expansion-live-http-verification.json`、`artifacts/expansion-live-home.png`、`artifacts/expansion-live-reader.png`。本次未在所有终端逐篇全程听完40条音轨。

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

在macOS打包时可使用`COPYFILE_DISABLE=1 tar --no-xattrs -czf <发布包> -C dist .`，避免携带macOS扩展属性。仅修改资源且不改Nginx配置时，无需重启或重载Nginx。

此记录只涵盖网页版上线。iOS/Android的安装包、签名与应用商店发布不受本次部署影响。
