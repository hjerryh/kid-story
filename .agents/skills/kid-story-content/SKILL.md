---
name: kid-story-content
description: "用于 kid-story 小小故事岛项目的故事创作、全文审稿、分镜整理与储备稿维护。用户要求新增或修改故事、审阅某段编号、整理内容完成状态时使用；配图配音与发布另有项目 skill。"
---

# 小小故事岛：故事与审稿

本 skill 随 kid-story 仓库维护，以下命令从仓库根目录执行。先用 `git rev-parse --show-toplevel` 定位，不能依赖某台机器的绝对路径。

## 范围与事实来源

- 先读[扩充设计的当前有效范围](../../../docs/superpowers/specs/2026-10-22-thousand-stories-design.md)和[储备说明](../../../content-expansion/RESERVES.md)。文件中旧1000篇方案是历史，不是继续执行的指令。
- 现有发布基线为0001–0500，加6篇内置故事。用户的新要求可以调整范围；只要求审稿、保存或提交储备内容，不等于要求上线或继续完成整个储备库。
- 正文来源为 `content-expansion/batches/` 与 `content-expansion/manuscripts/`，不能只扫描其中一个。示例结构见[第500篇](../../../content-expansion/manuscripts/expansion-0500.json)；内置6篇使用 `src/content/stories.json`，不混用扩展稿流程。
- 精确圈定本次编号、正文或媒体任务及是否发布。已有储备稿优先原地修订，避免为同一故事另造ID。

## 正文与分镜规则

以[校验脚本](../../../scripts/validate-expansion.mjs)为当前结构约束：

| ageBand | 页数 | 正文汉字数 |
| --- | ---: | ---: |
| `3-5` | 8 | 450–650 |
| `6-8` | 12 | 900–1200 |
| `9-10` | 16 | 1400–1900 |

当前编号按每40篇分组：组内1–16低龄、17–30中龄、31–40高龄。不要单独改稿件年龄来绕过该映射；如用户要改分配，连同校验与设计一起调整。

保留 `title/subtitle/description/theme/character/color`、`editorial` 情节说明，以及每页 `id/text/scene`。页码依次为 `p01` 等；分镜包含 `setting/action/mood/props`，须能画出正文当页发生的事。

审稿时阅读整篇所有页，检查目标、阻碍、尝试、转折与结果；逐页追踪角色外观、道具数量、位置、持有者和前后因果。低龄使用具体动作与清楚语句；纠正把比喻画成实体、道具凭空出现或消失、未发生的动作提前进入分镜等问题。避免用换名重复故事、暴力惩罚或羞辱凑篇数。

## 状态与审稿证据

1. 修改前保存源稿字节或明确 Git 基线，便于复查。缓存快照不是已提交的交付文件。
2. 新稿保留 `status: text-draft`、`provenance.review: pending`。只有实际全文审阅通过，才设置 `text-ready` 与 `full-text-reviewed`，记录报告路径和实际修改。
3. `bodySha256`、`reviewedBodySha256` 使用 UTF-8 的 `pages.map(p => p.text).join('')` 计算 SHA-256；`provenance.characters` 按汉字统计。保留真实创作来源，不能复制别篇的生成或审阅经历。
4. 审稿报告放在 `content-expansion/reports/`，记录编号、问题/修订、最终正文哈希及检查范围。正文改动后更新审稿证据；旧配音必须重新确认或生成，不能沿用过期哈希。

这些状态属于不同层次：稿件 `text-draft` → `text-ready`；构建后的目录条目为 `media-ready`；实际上线以部署记录和在线验收为准。Git提交不改变完成层次。

## 校验与交付

```sh
node scripts/validate-expansion.mjs
```

该命令会重写 `content-expansion/CATALOG.md` 与 `reports/inventory.json`，审查产生的差异。它检查结构、篇幅和完全相同文本，不证明全文已审或全网原创。

当前交付仍为500篇时，最终完整性检查使用 `node scripts/validate-expansion.mjs --require-all`。它精确要求0001–0500及对应媒体ID，不能用来证明0501以后媒体完整。若获准扩充发布范围，先同步脚本的目标、分龄汇总断言和生成文案，再验收新范围；单纯审阅储备稿无需修改发布上限。

报告本次实际新增/审阅数量与仍待完成项。仅暂存本次正文、审稿报告及相关目录/说明变更；缓存、音频临时文件和无关改动不顺手提交。需要媒体制作时，转到相邻的 [kid-story-media](../kid-story-media/SKILL.md)。
