# 原创绘本插图清单

日期：2026-10-22。首版共 6 个故事、72 张正文插图、6 张封面。正文 1000 × 800，封面 1000 × 1000，PNG，全部作为离线资源打包。

## 来源与制作方式

所有角色造型、场景、道具、配色及 SVG 路径均为本项目原创，以程序化向量构图导出 PNG；没有使用第三方图库、抓取插画、商标角色或图像生成模型。人物、植物、建筑与叙事道具保存在可编辑绘制器中，细微噪声用于纸面质感。字体不属于插图资产：插图内不排故事正文，标题与正文由 App 的可访问文本层显示。

绘制器：`scripts/render-illustrations.mjs`。中间 SVG 位于 `.cache/illustrations/`，可从脚本重建。Node.js 与 sharp 0.34.5 用于本地栅格化。固定坐标与随机种子使导出结果可重复。

```sh
node scripts/render-illustrations.mjs
node scripts/render-illustrations.mjs --story=moon-post
node scripts/render-illustrations.mjs --story=moon-post --sample
```

封面使用每个故事单独设计的构图，不替代任何叙事页。每页选择明确的叙事时刻；同一场景连续发生的事件保留空间关系，并变化人物姿态、道具状态或参与角色。绘制器校验分页总数，避免正文扩页后静默产生空白或重复图。

## 视觉检查

已逐篇检查全部 72 页的联排图，另查看 6 张封面原图。检查角色服饰连续、情节道具、无空白与重复文件，以及主角在画面中的可辨认性。月光暂时消失的段落保留遮月云；兔子具有站立、侧身蹲坐、递出荷叶与挥手姿态；鲸鱼的云丝、泡泡与降雨分别呈现；新地图成为纸帆时呈现航线与铜纽扣。未进行用户或儿童实测，画风属于首版原创向量绘本风格。

## 分页与分镜对应

### 月亮邮局（moon-post）

小兔暖暖：奶白色绒毛、长耳朵、圆眼睛，戴浅蓝围巾，背芥末黄色邮包；小蜗牛：杏色身体、珊瑚橙螺旋壳；萤火虫：淡金色小光点。

封面：`assets/stories/moon-post/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | rabbit cottage window at moonrise | Rabbit opens a silver envelope on the windowsill |
| page-02.png | lotus pond under a clear moon | Rabbit lifts a lotus leaf holding a small moonbeam |
| page-03.png | small wooden bridge beneath clouds | Rabbit looks into an empty dark lotus leaf |
| page-04.png | dewy grass beside the bridge | Fireflies gather around Rabbit and the lotus leaf |
| page-05.png | path approaching a pumpkin cottage | Rabbit and fireflies arrive at a dark pumpkin house |
| page-06.png | pumpkin cottage doorway and round window | Rabbit offers the glowing leaf to a small snail |
| page-07.png | warm pumpkin cottage interior | Rabbit and Snail share pear slices beneath returning moonlight |
| page-08.png | pond with a glowing pumpkin cottage in the distance | Rabbit leaves a reply beside the moonlit pond while Snail waves |

### 小熊的发光种子（seed-light）

小熊阿棕：蜂蜜棕毛、奶油色口鼻，穿苔绿色背带裤；小刺猬：浅米色脸、栗棕色圆背；种子：金黄色、带星形斑点，长成圆叶金光小苗。

封面：`assets/stories/seed-light/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | sunny garden beside a bear cottage | Bear discovers a golden seed with a star marking |
| page-02.png | bear cottage windowsill at dusk | Bear waters a red flowerpot and moves his nightlight aside |
| page-03.png | windowsill with a fresh two-leaf sprout | Bear sits on a stool watching a green sprout beneath the stars |
| page-04.png | craft table next to the shaded sprout | Bear notices the sprout drooping beneath a gold paper star |
| page-05.png | sunny vegetable patch below an open window | Bear tends carrots while the uncovered sprout rests in sunlight |
| page-06.png | bear cottage doorway in blue twilight | Hedgehog points to the first golden glow in the flowerpot |
| page-07.png | outdoor picnic table lit by a tiny glowing plant | Bear and Hedgehog share strawberries around their plant lantern |
| page-08.png | moonlit garden path leading back to bear cottage | Bear carries the glowing flowerpot along stepping stones |

### 云海里的小鲸鱼（cloud-whale）

小鲸鱼阿蓝：圆润天蓝身体、奶油白肚皮、小圆鳍，系珊瑚橙短围巾；雨云：淡灰蓝柔软云团；燕子：深蓝翅膀、奶白肚皮；山谷小女孩：棕色短辫、黄色雨靴。

封面：`assets/stories/cloud-whale/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | vast pastel cloud sea at sunrise | Small blue whale blows tiny bubbles below distant large whales |
| page-02.png | cloud lookout above a distant mountain ridge | Whale reads a note carried by a dandelion parachute |
| page-03.png | edge of the cloud harbor above green fields | Whale gently nudges a sleepy little rain cloud toward the valley |
| page-04.png | windy mountain ridge with tall pine trees | A gust scatters the rain cloud into wisps around rocks and pines |
| page-05.png | sheltered pocket behind a mountain boulder | Whale discovers a small bubble can hold a wisp of mist |
| page-06.png | pine canopy filled with floating mist bubbles | Whale and two swallows collect cloud wisps inside clear bubbles |
| page-07.png | tall stone wall with a narrow round opening | Whale inspects a small stone window with a trail of bubbles |
| page-08.png | narrow mountain passage seen from its entrance | Whale gently feeds mist bubbles through the stone opening |
| page-09.png | cool meadow on the shaded side of the mountain | Whale gathers spare dewdrops from bowing grass into bubbles |
| page-10.png | apple orchard beneath a ring of mist bubbles | Swallows release the gathered mist above a girl watering saplings |
| page-11.png | apple orchard in a soft steady rain shower | Girl lifts her watering can while rain refreshes the orchard |
| page-12.png | rose-colored cloud sea at sunset | Whale carries a thank-you drawing and blows a new line of bubbles |

### 小狐狸的森林图书馆（fox-library）

小狐狸栗栗：赤橙色毛、奶白脸颊和尾尖，穿湖蓝色背带裙，戴圆形小眼镜；鼹鼠墨墨：深灰绒毛、粉鼻头、黄色小帽；松鼠：赤棕毛与蓬松尾巴；猫头鹰：浅棕羽毛、奶油色眼圈。

封面：`assets/stories/fox-library/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | hollow oak tree transformed into a small library | Fox hangs a library sign beside shelves and a jar of flowers |
| page-02.png | quiet library with straight rows of tall chairs | Fox waits at an empty lending desk as small animals hesitate outside |
| page-03.png | library doorstep during light rain | Fox reads a rain-soaked leaf letter left beneath the door |
| page-04.png | cozy low mole home beneath fern leaves | Fox crouches beside Mole at a stone reading table |
| page-05.png | forest path beneath a squirrel branch and owl perch | Fox collects notes from Squirrel and Owl in her lending book |
| page-06.png | library worktable covered in floor-plan sketches | Fox studies a crowded drawing while measuring the small tree hollow |
| page-07.png | library planning table with animal friends gathered around | Mole Squirrel and Owl add ideas to Fox’s drawing |
| page-08.png | oak library renovation with a tunnel and hanging reading basket | Forest friends build a low entry and cozy places to read |
| page-09.png | library porch sheltered during a rain shower | Friends cover outdoor book boxes with a large waterproof sheet |
| page-10.png | new reading porch under an oak tree after rain | Fox welcomes Hedgehog and rabbits beneath the new canopy |
| page-11.png | lively but gentle forest library with varied reading nooks | Animals read in the tunnel basket and shaded porch |
| page-12.png | forest library glowing softly beneath a starry canopy | Owl reads aloud while Fox curls up with a book near friends |

### 森林里的慢时钟（clock-forest）

小鹿时禾：暖棕色毛、奶白胸口、细小双角和白色背斑，披鼠尾草绿短斗篷，斜背棕色工具包；河狸：栗棕毛、扁尾巴、芥末黄工作围裙；老猫头鹰：灰棕羽毛、圆眼镜；田螺：浅棕壳、淡米色身体。

封面：`assets/stories/clock-forest/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | moss-covered forest clock tower beside a stream | Young Deer looks from the clock tower over a waking woodland village |
| page-02.png | village square with lantern preparations and a sun marker | Deer compares the clock with a long shadow beside a white stone |
| page-03.png | inside the clock mechanism above a sluggish waterwheel | Deer examines intact gears and follows a leaf drifting in slow water |
| page-04.png | new pond formed by fallen branches at a stream bend | Deer meets Beaver beside a branch dam and muddy bank |
| page-05.png | shallow edge of the pond beside a newly opened gap | Deer notices tiny tadpoles as water recedes from a moved branch |
| page-06.png | restored pond with frogs birds and revived ferns | Deer and Beaver reseal the gap while pond creatures settle |
| page-07.png | clock keeper’s desk beside an open tower window | Deer studies conflicting stream sketches as Owl opens the window |
| page-08.png | dry bank beside the pond with a newly dug side channel | Deer and Beaver watch the trial channel soak into dry soil |
| page-09.png | curving tree roots on a damp forest bank | A resting Deer notices Snail following a firm moist path under roots |
| page-10.png | firm root-lined route between pond and lower stream | Deer tests a gentle slope with a wooden cup while Beaver plans a gate |
| page-11.png | woodland stream bypass under construction by animal friends | Friends build and adjust a narrow bark channel while Deer checks pond depth |
| page-12.png | sunset view between the repaired waterwheel and the adjustable gate | Deer tunes the gate while Beaver signals from the steady wheel |
| page-13.png | village square with unfinished lanterns on shared tables | Deer explains the delay as Baker brings paste for everyone to help |
| page-14.png | forest clearing where everyone finishes handmade lanterns | Animals decorate pond and clock lanterns as the first evening bell rings |
| page-15.png | lantern procession crossing a little bridge beside the preserved pond | Deer waits as lantern reflections meet fireflies over the pond |
| page-16.png | peaceful pond bank with the clock tower beyond the trees | Deer sketches the new water route and watches a leaf float past |

### 风的另一边（wind-map）

小女孩楠楠：乌黑短发、齐刘海、暖棕眼睛，穿杏黄雨衣和砖红短靴，背小斜挎包；小风号：靛蓝色折纸船、奶白纸帆；小纸鹤：白纸身体、淡粉翼尖；外婆：银灰盘发、暖紫开衫、圆眼镜。

封面：`assets/stories/wind-map/cover.png`

| 文件 | 场景 | 画面中的行动 |
| --- | --- | --- |
| page-01.png | grandmother’s seaside attic with a magical map | Girl studies a map whose islands fade into a blank silver edge |
| page-02.png | attic worktable with a blue paper boat and a newly copied map | Girl folds a paper boat beside her starred travel map |
| page-03.png | attic window opening onto a glowing river of air at dusk | Grandmother helps Girl board an enlarged paper boat beside a warm lamp |
| page-04.png | paper boat sailing above a seaside village at blue hour | Girl draws her route while the home window glows in the distance |
| page-05.png | shell-bell island with reeds beside a paper-boat landing | Girl carefully repairs a small paper crane’s folded wing |
| page-06.png | quiet landing on shell-bell island with diverging wind paths | Girl compares the crane’s direction with the star on her map |
| page-07.png | paper boat turning toward an uncharted northern cloud bank | Girl redraws her route while Crane points toward a long cloud |
| page-08.png | winding air currents along a white cloud mountain | Girl steers the boat in gentle zigzags while Crane reads the wind |
| page-09.png | still cloud hollow beneath a sheltered mountain wall | Girl moors the paper boat to a cloud stone and shares a biscuit with Crane |
| page-10.png | low opening at the base of a cloud mountain | Girl follows a floating feather through a gentle low current |
| page-11.png | white tower rising from clouds with many pastel paper cranes | Crane reunites with its flock as Girl receives a folded paper feather |
| page-12.png | paper boat moored beside the white tower under evening mist | Girl studies her sturdy map beside a torn damp sail |
| page-13.png | paper boat with its hand-drawn map transformed into a new sail | Girl and Crane rig the map sail using cord and a copper button |
| page-14.png | warm attic window welcoming a small returning paper boat | Girl arrives home by the glowing lamp as Grandmother looks up from sewing |
| page-15.png | attic table where grandmother and girl unfold a weathered map | Grandmother and Girl examine the new white tower and faded route together |
| page-16.png | quiet bedside window with a paper boat and an open partly blank map | Girl leaves the repaired boat by the window after adding memories to the map |
