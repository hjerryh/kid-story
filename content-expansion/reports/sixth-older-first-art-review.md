# 0231–0235 插图验收

状态：已冻结，待主任务接入。验收时间：2026-10-22T20:26:56.659Z。

范围：5篇、80张内页、5张封面，共85张；不表示已经上线。

模块：`scripts/expansion-art/sixth-older-first.mjs`
导出：`sixthOlderFirstArtwork(story,index,cover=false)`
模块 SHA-256：`c351482d19b3f5fd884901de3e65b3588a3f92918d0af60c87a483b2d9873d66`

## 验证结果

- 绘制前读完五篇最终正文、80页分镜、人物设定和第六批高龄编辑报告；合并输出曾截断0234，随后单独通读全文补足。text-ready、正文与已审哈希均匹配。
- 85个SVG、85个PNG各自哈希唯一；内页1000×800、封面1000×1000，全部非空。
- 当前模块重新渲染全部85张，与缓存SVG/PNG哈希逐一一致；缓存对应精确稿件文件。
- 未知故事、草稿状态、错误页数、负页码、越界和非整数页码均拒绝。
- 模块语法、git diff --check及新文件末尾换行/空白检查通过。

## 视觉覆盖

Read all five final text-ready manuscripts, all 80 page scenes, character specifications and editorial-006-older.md before drawing. Re-read all of 0234 after a combined output was truncated. Inspected all 85 first-draft frames in five contact sheets, all five final contact sheets, and the final 0232/0234 sheets again after their last changes. Enlarged 0231 p09/p11/p12/p14/p16; 0232 cover/p03/p06/p08/p09/p11/p13/p16; 0233 cover/p07/p11/p12/p14/p16; 0234 p01/p04/p10/p11/p12/p13/p14/p16; 0235 cover/p06/p10/p11/p15. Re-enlarged the revised twig/disc, vest, oar rig, deck provisions, high-chair eye level, tasting shell/loaves, recipe and seated sewing details.

## 分篇复查

| 故事 | 页数 / 图数 | 连续性与修订 |
| --- | --- | --- |
| expansion-0231《蓝纽扣住在羽毛隔壁》 | 16 / 17 | 实际落法分类，干湿两叶分房；白备用扣与木圆片试验不动其他失物；枝岔—长线—圆片连续；丢失的旧线不提前出现，取出蓝扣后柜内无重复，末页缝回背心。 |
| expansion-0232《寻新号带上了两支桨》 | 16 / 17 | 魔帆展开、垂落、收帆分明；初试无架，量尺寸时不提前安装；拆柜取材后有垫和搭扣，桨连双手并伸船外；近岸航行有救生衣/饮水/午饭，归航两桨和旧盒收妥。 |
| expansion-0233《茴青把低窗画回来》 | 16 / 17 | 纸外图纸与纸内试住分开；高椅眼高到窗、脚悬空；低窗坐姿和脱鞋可见；浅抽屉先是图上草稿，收藏仍在盒中；签名前无真屋，建成后纸獾恢复拇指比例。 |
| expansion-0234《砾温带着难过揉面包》 | 16 / 17 | 三顶小石与靛蓝围裙连续；封壳、两指开口、主动出壳、脚边再次长壳及留下原壳分阶段；三份面团与半块试吃数量明确；面包、石磨有支撑，缝包椅背置后。 |
| expansion-0235《望川不必等人读》 | 16 / 17 | 四肢含抬爪不多画，左前爪月牙固定；独自认信无女孩替读；不/能/来、圈生字、信件比较与粗笔回信逐步呈现；末页各自阅读，封面保留完整尾部。 |

## 稿件记录

| ID | 正文 SHA-256（无分隔连接） |
| --- | --- |
| expansion-0231 | `732aea3b2cae36039be273c856d4afbd2732b432720d079490dffc170f887ea6` |
| expansion-0232 | `6d27d5b2b956e04a15b41391caf4f77bf102c268cb418255473834883df0751d` |
| expansion-0233 | `746f3d9717a83b49b77d5dc38b8fd0ee82c4dbade10aa4c32f1d30ee6ec8820a` |
| expansion-0234 | `236b76474c5dd4df5f5c683e6a7099e7df180e6be1e1a3a773caa612222a5915` |
| expansion-0235 | `eb8b6bccaef25f4892d740a9b47a1adf3fb0a2c55cd4525d8a7a5388e0437fd3` |

精确稿件哈希、85张图片哈希、尺寸与统计在同名JSON。联排、SVG与PNG在 `.cache/sixth-older-first-art-review/`。

原创简化矢量绘本，选取代表性瞬间，房屋/船只和正面道具为示意透视；信件使用印刷字形示意关键字，不是笔迹复刻。验收覆盖叙事连续性、可见肢体、关键道具与遮挡，不代表位图手绘、音频、浏览器或儿童用户测试。

未改正文、已冻结模块、全局清单、构建器或公开媒体；未提交或部署。
