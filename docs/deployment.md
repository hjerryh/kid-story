# 网页部署记录

部署日期：2026-10-22（Asia/Shanghai）。正式地址：<https://kid-store.jentin.cn>。

## 发布内容

- 应用版本：Git `2a60c8a`，Expo Web 生产导出。
- 88 个文件，含 78 张插图/封面、6 条旁白、JavaScript 与页面文件。
- 发布包：`artifacts/StoryIsland-Web-2a60c8a.tar.gz`。
- 发布包 SHA-256：`35aef3eaf7290edec73f2fdecc0d5e02023390286d586a6b6fcd1907d5587d65`。
- 文件校验清单：`artifacts/StoryIsland-Web-2a60c8a.manifest.json`；服务器解包后的全部88个文件均通过SHA-256核对。

这是独立的静态网站，不依赖本机预览服务、Node后端、数据库或在线TTS。收藏和阅读位置保存在访问者自己的浏览器内；本机预览域名下的数据不会迁移到正式域名。

## 服务器位置

SSH连接：`jingtian-server`，用户`ubuntu`。公开DNS从`kid-store.jentin.cn`经`jentin.cn`解析到`124.221.85.250`。

- 站点目录：`/www/wwwroot/kid-store.jentin.cn/`
- 当前资源：`current -> releases/20261022-2a60c8a`
- 服务器校验清单：`manifests/20261022-2a60c8a.json`
- 证书验证目录：`shared/.well-known/acme-challenge/`
- Nginx站点配置：`/www/server/panel/vhost/nginx/kid-store.jentin.cn.conf`
- 日志：`/www/wwwlogs/kid-store.jentin.cn.log`、`/www/wwwlogs/kid-store.jentin.cn.error.log`

实际承载80/443端口的是宝塔Nginx：`/www/server/nginx/sbin/nginx`，主配置`/www/server/nginx/conf/nginx.conf`。机器上的`/usr/sbin/nginx`使用另一套配置，不能用它检验或重载本网站。每次上线前都使用正确的二进制执行`-t`，通过后才优雅重载。

仓库中的配置副本为`deploy/nginx/kid-store.jentin.cn.conf`。站点根页面使用`Cache-Control: no-cache`；带哈希的图片、音频和JS缓存一年。缺失资源返回404，不回落到首页。HTTP保留ACME验证入口，其他访问308跳转HTTPS。

## HTTPS与续期

证书由Let's Encrypt签发，包含`kid-store.jentin.cn`，有效期至2027-01-20。证书文件位于`/etc/letsencrypt/live/kid-store.jentin.cn/`，沿用服务器已有ACME账户。

服务器已有`certbot.timer`处于active状态。该证书使用webroot验证，续期后执行`/usr/local/sbin/reload-kid-store-nginx`；脚本先检查宝塔Nginx配置，再重载使新证书生效。脚本源码见`deploy/reload-nginx.sh`。

续期模拟已通过：`certbot renew --dry-run --cert-name kid-store.jentin.cn --non-interactive --no-random-sleep-on-renew`返回成功。服务器现有Certbot版本使用`renew_hook`保存重载脚本；重载脚本已在首次签发时执行成功。

## 上线验证

- 以可信CA校验证书并访问HTTPS，主页返回200且标题正确；HTTP保留原路径和查询参数跳转到HTTPS。
- 全部88个文件均返回200，文件长度匹配本地；PNG、MP3和JS的MIME类型正确。
- 六条MP3的`Range: bytes=1024-2047`均返回206，内容与本地相应1024字节一致；越界Range返回416。
- 不存在的图片/音频/JS资源按配置返回404；首页不使用长期缓存，哈希资源使用immutable缓存。
- 线上浏览器实际播放《月亮邮局》，从0:00推进至0:33并自动切换第2页；暂停后跳转到第3页0:37保持暂停。
- 收藏后刷新，收藏仍存在；继续阅读恢复第3页0:37且不会自动播放。检查期间浏览器控制台没有运行错误。

本地证据：`artifacts/live-deployment-verification.json`、`artifacts/live-home.jpg`、`artifacts/live-reader.jpg`。截图和验证数据属于实际公开站点，不是本地开发服务。

## 后续更新

更新时先通过项目检查并执行`npm run build:web`，将新的`dist/`上传至新的release目录，验证资源完整性后原子切换`current`软链接；保留上一版目录便于回退。不要向正在使用的release目录逐个覆盖文件。

在macOS打包时可使用`COPYFILE_DISABLE=1 tar --no-xattrs -czf <发布包> -C dist .`，避免携带macOS扩展属性。仅修改资源且不改Nginx配置时，无需重启或重载Nginx。

此记录只涵盖网页版上线。iOS/Android的安装包、签名与应用商店发布不受本次部署影响。
