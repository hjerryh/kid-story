# 第二批高龄前五篇配图审核

范围：0071–0075，每篇16页与独立封面，共85幅SVG母版。

模块：`scripts/expansion-art/second-older.mjs`，导出 `secondOlderArtwork(story,index,cover=false)`。

模块SHA256：`2b7e1241e467f8847085e9665dee0e7ec57fe12208074cbe14768df6706b7e4e`。

已渲染全部85幅PNG，尺寸、非空、85个不同SVG哈希、85个不同PNG哈希、终审正文哈希与文件哈希全部通过；5类无效输入均拒绝。

逐页检查了5张联系表中的80页与5封面，修改后复看联系表；另放大核查0072第5页、0075第12页、0074第16页。

- 0071: kept cloak intact before cutting, removed visible knot over opaque cover, removed duplicate moon and extra embroidered fish.
- 0072: crescent-shaped notch appears from p05 onward; washer scene uses laundry sign; p10 backyard stays blank; corrected evidence drawing offset, supported desk lamp, covered the ending completely.
- 0073: detached neck supported on a wooden stand; spare hinge sits on floor; ferryman pole contacts the moving house.
- 0074: maintained six pots, staged closed/half-open/full flowers, moved rock and path behind subject, kept shore pots clear of faces, added seated final pause.
- 0075: seven roofs and seven tower windows, three stone stripes, two clamps; dry city has supports, released stone rests in cloth-lined hand, p14 has sunset only, moon appears p15, final city stays dismantled.

- expansion-0071《月亮借一小块黑暗》：正文 SHA256 `28ccb63deb864f0598ce03ba75c5a397e095f4bbfc046946fe02b8a28a7efba1`，17幅。
- expansion-0072《作者也不知道的珍珠案》：正文 SHA256 `8e5c7899b41e5c6b33127d97caaf67072eb45e4e93a94bb551da4e2bce0f1944`，17幅。
- expansion-0073《河上漂来的第三间房》：正文 SHA256 `f8ff207454074cc215a4c64c1523acdaf90662495848eb00b9f92b52d04d34c8`，17幅。
- expansion-0074《苇舟慢慢划过黄昏》：正文 SHA256 `db68b1d821d797c9782aeae0cbae1a0e86204f9a12dcc30088512117507cc36e`，17幅。
- expansion-0075《小城底下的冬眠客》：正文 SHA256 `21887c279840a98709917b516fa491e351885c83dd367e768fc38920e3bd5db7`，17幅。

预览和联系表在 `.cache/second-older-art-review`；逐图哈希和源稿哈希见同名JSON。

限制：这是逐页编排的简化SVG绘本画，不是手绘位图。此次仅审核配图与文字对应、关键物件和画面遮挡，不代替音频、页面排版或儿童用户测试。
