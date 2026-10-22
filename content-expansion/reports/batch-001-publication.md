# 第一批40篇：已上线

日期：2026-10-22。正式地址：https://kid-store.jentin.cn 。发布标识：`20261022-expansion-40-v1`。

原有6篇之外新增40篇完整故事，编号`expansion-0001`至`expansion-0040`。3–5岁16篇、6–8岁14篇、9–10岁10篇；共40073个正文汉字、456页。每篇已全文审阅，修订记录见`editorial-001-partial.md`。没有宣称完成全网原创性检索。

## 素材

- 原创向量插图496张：456张分页图、40张封面；SVG原稿保存在`content-expansion/artwork/`，发布WebP为1000×800或1000×1000。
- 40条普通话合成旁白，实际总长11956.440秒（3小时19分16秒），最新MP3合计119603346字节。
- 每条旁白使用最终完整正文，原文/音轨/时间轴哈希相符；全部可解码、分页时间连续且覆盖全轨。音频检查为信号/文件/时序验证，不等于真人逐句试听。
- 插图逐组检查联系表，修正道具、人物连续性、遮挡等问题；复用基础画面组件，每页有对应故事的动作与场景。
- 版本化素材保留旧版本，禁止原地替换已有版本字节。最新入口为`public/library/index.json`。

## 验证与发布

22项回归测试、类型检查、六篇原内容校验、扩展结构/篇幅/重复段落校验及40篇456页的实际应用解析器校验通过，生产构建成功。阅读器保留完整故事对象，避免目录更新版本后旧页点击播放失效。

服务器对785个发布文件逐一SHA-256核对后切换软链接，保留旧release和静态资源。全部文件线上HTTPS长度检查通过；40条新音频的1024–2047字节Range请求均返回206且内容精确匹配。索引no-cache、版本化素材immutable、缺失资源404符合预期。

浏览器实际验证46篇列表、两页分页、搜索与分龄；新增低龄和高龄旁白持续推进并自动翻页；暂停翻页、收藏及刷新恢复正常。完整观察与本地证据路径见`docs/deployment.md`、`docs/verification.md`。

## 复现

从正式稿汇总构建输入（排除samples）：

```sh
node scripts/collect-expansion.mjs --start 1 --end 40 --ready --require-range --output .cache/first-batch-40.json
python3 scripts/generate-expansion-audio.py --engine edge --input .cache/first-batch-40.json --jobs 2
node scripts/build-expansion-library.mjs --input .cache/first-batch-40.json
npm run build:web
```

缓存音频已存在时按正文哈希复用；修改正文需重新生成对应页面旁白。渲染器或编码规则变化会产生新的版本，不保证重建后的二进制与历史发布一致。

1000篇扩展目标仍在进行。此报告仅证明首批40篇已完成并上线，不把后续草稿计入发布数。
