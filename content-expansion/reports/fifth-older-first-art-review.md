# 0191–0195 插图验收

状态：已冻结，待主任务接入。验收时间：2026-10-22T19:45:56.099Z。

范围：5篇、80张内页、5张封面，共85张；本报告不表示已经上线。

模块：`scripts/expansion-art/fifth-older-first.mjs`
导出：`fifthOlderFirstArtwork(story,index,cover=false)`
模块 SHA-256：`d78ae0d2f11902c9876acbe2e45282d85d4522a8afe78c13b484875cf36c8713`

## 验证结果

- 绘制前读完五篇最终正文、全部分镜、人物设定和第五批高龄稿编辑报告。text-ready、正文与已审哈希均匹配。
- 85个SVG、85个PNG各自哈希唯一；内页1000×800、封面1000×1000；全部非空。
- 当前模块重新渲染全部85张，与缓存SVG/PNG哈希逐一一致；对应精确稿件文件。
- 未知故事、草稿状态、错误页数、负页码、越界与非整数页码均拒绝。
- 模块语法、git diff --check及新文件末尾换行/空白检查通过。

## 视觉覆盖

Read all five final manuscripts, all 16 page scenes, character specifications and editorial-005-older.md before drawing. Viewed every first-draft and revised frame in five contact sheets. Enlarged 0191 p02/p09/p11/p12/p15/p16; 0192 p03/p04/p08/p09/p11/p13/p16; 0193 p02/p03/p04/p05/p06/p07/p08/p10/p11/p12/p14/p16; 0194 p03/p06/p11/p12/p13/p15; 0195 cover/p05/p06/p08/p12/p14/p16. Viewed all five final contact sheets and re-enlarged the changed mast, payment, sleeve, embroidery, cover and seated giant details. After the final 0193 surface-placement changes, viewed its whole contact sheet and the altered display/bowl/bench details again.

## 分篇复查

| 故事 | 页数 / 图数 | 连续性与修订 |
| --- | --- | --- |
| expansion-0191《星星之间要留多宽》 | 16 / 17 | 帆上活动鱼与休息水印分明；灰补丁、空白/绣线对照与窄白边失败分阶段；试验纸接帆，递书双手触书，少量星星和大空白保留，拆线收在线卡里。 |
| expansion-0192《折折背上的第七级》 | 16 / 17 | 四细腿、圆耳和长鼻固定；台阶有支梁、柔叶带连身体；小门可见、同意后探索、闭门后复位；低处七级与窗台增长段连接目的地，旧草稿保留。 |
| expansion-0193《折岚要带哪一件雨天》 | 16 / 17 | 纸肤、绿格裙与紫腕带固定；12枚购买款和2枚船费分开；雨衣袖口覆盖纸手臂，试验纸鹤与本人不同；穿衣步行/乘船，晾干收衣后才变鹤带包飞。 |
| expansion-0194《今晚不走枕头里的沙路》 | 16 / 17 | 梦景用角纹区分，未画成预知或真实旅行；父亲留店、母亲后段归来；枕头四穗两扣与小花连续；抽屉、缝线、睡觉袖口和拥抱动作修正。 |
| expansion-0195《花拱下面原来是只鞋》 | 16 / 17 | 借出的左鞋、保留的右鞋与两只归还后穿鞋状态连续；提根仍连原土，失败木板和五趾凹痕可见；新床先准备、分根后有萎蔫缺口；巨人坐着交谈，花长在鞋外。 |

## 稿件记录

| ID | 正文 SHA-256（无分隔连接） |
| --- | --- |
| expansion-0191 | `92a7ddceda113ec1558257203b7939057802acca04f6ccb2c0bf7cdba2c89d73` |
| expansion-0192 | `7bcd97b352a7f9b982a924593a4b4b46e282b65aeb982a9ea5e875f3a5f36d30` |
| expansion-0193 | `9ab5685666a0fccb2a5dd2c05fd9b12553a7e7f373dddd1bd6be198519ff5ee8` |
| expansion-0194 | `c6b08e9605550230f92c96655225daa9b9c1474d7552e33bca1d2ccaf65b7d15` |
| expansion-0195 | `2cd4fbf33d67f51c101560204a57870c464c487f64efbd9ade3a918a9cf39879` |

完整稿件哈希、85张图片哈希、尺寸和统计在同名JSON。联排、SVG与PNG在 `.cache/fifth-older-first-art-review/`。

原创简化矢量绘本，采用代表性瞬间和正面道具示意；验收范围为情节连续性、明显解剖问题、道具与遮挡，不等于位图手绘、音频、浏览器或儿童用户测试。

未改正文、已冻结模块、全局清单、构建器或公开媒体；未提交或部署。
