# 商业页面 AI 搜索选源资格审计计划（唯一执行事实源）

> 本文件是《工业 B2B 商业页面 AI 搜索选源资格检查标准》的落地执行事实源。
> 标准原文：`docs/seo/工业 B2B 商业页面 AI 搜索选源资格检查标准.md`。
> 标准回答"检查什么"，本文件回答"在本站查哪些页、怎么判、判完怎么改"。
> 任何会话在动手前必须先读本文件「0. 恢复指引」与「6. 任务总表」。

关联文档：
- `docs/seo/工业 B2B 商业页面 AI 搜索选源资格检查标准.md` — 标准原文（六维定义、评分方式、交付模板）
- `docs/seo/execution-plan.md` — SEO/GEO 整改执行事实源（修复动作受其红线约束）
- `docs/seo/execution-log.md` — 追加式执行日志
- `docs/seo/geo-audit-findings.md` — 巡检诊断报告（只读参考）
- `scripts/seo/geo-audit.mjs` — 现有巡检脚本（SE-A2 的复用底座）
- `tmp/source-eligibility/` — 选源资格体检输出（每批重新生成）

**分工边界**：本文件只管"选源资格"这一层的**判定与记录**；一旦判定为缺陷并需要改代码，
必须回到 `docs/seo/execution-plan.md` 的任务体系执行，并遵守其「8. 禁止事项」全部红线。
本文件**不新建第二套修复体系**。

---

## 0. 恢复指引（新会话第一步照做，不要重新巡检）

1. 读本文件「6. 任务总表」，找到**状态为 `[ ]` 的第一个任务**——它就是下一步。
2. 读该任务条目的「上一个任务 / 下一个任务」，确认前置依赖未完成。
3. 读 `docs/seo/execution-log.md` 末尾一段，确认上一批实际改了什么、踩了什么坑。
4. 若存在 `[~]`（进行中）：说明上次会话中断在该任务，**接手时必须先决定继续或回退，不得跳过**。
5. **不要**重跑全站巡检去"了解现状"——基线计数在「7. 基线计数表」里，直接对照。
6. **不要**凭印象补写页面内容。本标准的每一项判定都必须能指向 `dist/` 产物中的具体证据。

**每个任务的标准动作（不可省略）**

```
npm run budget -- --reset --task <任务ID>
npm run gate -- phase EDIT --task <任务ID> --dod '<该任务的 DoD，用分号分隔，单引号包裹>'
npm run gate -- write <本批要改的文件...>
<改代码或写文档>
npm run gate -- phase VERIFY
npm run build
npm run qa:geo
npm run task:verify -- ai-source-eligibility-audit
<更新本文件的状态标记 + 追加 execution-log.md>
npm run gate -- phase DONE
npm run gate -- audit
<输出收据>
```

---

## 1. 六维 × 本站证据源映射

六维定义沿用标准原文，不重写。本节只补一件事：**每一维在本站用什么证据判定**。

| 维度 | 分值 | 性质 | 本站证据源 | 判定口径 | 不通过时 |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **① 索引资格** | 20 | **硬性门槛** | `public/robots.txt`；每页 `<meta name="robots">`、`<link rel="canonical">`；`<h1>` 数量；`dist/sitemap-*.xml` 覆盖 | robots 允许抓取 + 每页 robots 为 `index, follow` + canonical 绝对且指向自身 + h1 唯一 + 该路由在 sitemap 中 | 先修复技术问题 |
| **② 查询相关性** | 20 | 质量评分 | `<title>` / `<meta description>` / `<h1>` 与"目标查询"的对齐；`geo-audit` 的 `topSimilar` | 页面标题族 = 目标查询词（如 `titanium plate`），不是泛化族名；与同族页 `topSimilar` < 0.55 | 调整页面主题或内容 |
| **③ 事实与证据** | 20 | **硬性门槛** | `geo-audit` 的 `unsourced-spec`（溯源锚点数）；页面内的标准号 / UNS / 证书 / "按订单确认" | 每页技术参数**至少 2 个溯源锚点**；指不出标准条款的一律降级为"按订单确认"，**不猜标准号** | 修正错误或补充证据 |
| **④ 信息完整性** | 15 | 质量评分 | `geo-audit` 的 `thin-page`（词数）、`specItems`、可抽取表格数、可见 FAQ 数 | 能回答采购人员关于规格/材料/工艺/供货/交期/检测的问题；页薄（<1500 词）记为缺口 | 补充实际采购信息 |
| **⑤ 来源可信度** | 15 | 质量评分 | 页面文本中**不可证主张**的扫描（`routeLacks` 口径）；供应关系与责任边界的表述 | **边界可证伪口径**：页面不得出现自有工厂 / 厂址 / 成立年限 / 规模人数等本站无法举证的主张；必须说清"工程与采购协调 + 合格生产伙伴"的责任边界 | 补充真实的供应与责任说明 |
| **⑥ 商业转化** | 10 | 质量评分 | RFQ 入口是否在页面内、锚点可达；表单提示是否说明需提交哪些询价资料 | 页面内可点到 RFQ 表单；表单列明需提供的图纸 / 牌号 / 数量 / 公差等资料项 | 优化询盘路径与表单 |

> **关于 ⑤ 的口径说明**：本站定位是"工程支持 + 采购协调 + 合格生产伙伴"，
> `no-entity-*` 系列任务已禁止宣称自有工厂、厂址与历史。因此"来源可信度"
> **不能**按"自有资质与厂房"打分——那样会逼出违规文案。本站的可证伪口径是
> **"不宣称不可证之物 + 把供应关系与责任边界讲清楚"**，用 `routeLacks` 机器校验。
> 这与标准原文的意图一致（"企业身份、供应能力、质量控制、责任边界清晰"），
> 只是把"清晰"落到本站真实可行的表达上。

> **关于 ① 中"已被 Google 索引"**：站内**无法**判定"是否已被 Google 收录"，
> 该项属外部事实，只能通过 Google Search Console 或人工查询核验。
> 脚本只判**可索引条件**（robots / robots-meta / canonical / h1 / sitemap 覆盖）。
> **禁止**在计划或检查表中写"已索引"这类未经核验的结论。

---

## 2. 评分口径（100 分制）

| 维度 | 分值 | 性质 |
| :--- | :---: | :--- |
| ① 索引资格 | 20 | **硬性门槛** |
| ② 查询相关性 | 20 | 质量评分 |
| ③ 事实与证据 | 20 | **硬性门槛** |
| ④ 信息完整性 | 15 | 质量评分 |
| ⑤ 来源可信度 | 15 | 质量评分 |
| ⑥ 商业转化 | 10 | 质量评分 |
| **合计** | **100** | — |

**硬性门槛规则**：① 与 ③ 必须通过。**即使总分很高，也不能用总分掩盖这两项的问题。**
任一硬门槛未通过 → 该页状态直接判为"不通过"，不进入分数分档讨论。

**内部处理阈值（非 Google 官方标准，非排名预测）**

| 分数 | 处理 |
| :--- | :--- |
| **80–100** | 进入持续监测，不为 GEO 做大规模改写 |
| **60–79** | 优先修复高价值缺口 |
| **< 60** | 先补页面基础质量，不急于扩大内容规模 |

**打分细则（脚本口径，SE-A2 实现）**

| 维度 | 满分口径 | 部分得分口径 | 0 分口径 |
| :--- | :--- | :--- | :--- |
| ① | robots + robots-meta + canonical + h1 + sitemap 五项全中 | 每缺一项扣 4 分 | canonical 错或多 h1 → 门槛不通过 |
| ② | 标题族命中目标查询词 + `topSimilar` < 0.20 | `topSimilar` 0.20–0.55 → 扣 8 分 | 标题族与目标查询无关 → 扣 20 分 |
| ③ | 溯源锚点 ≥ 4 且无冲突参数 | 锚点 2–3 → 扣 10 分 | 锚点 < 2 → 门槛不通过 |
| ④ | 词数 ≥ 1500 且有 ≥1 张可抽取表 + ≥3 条可见 FAQ | 缺一项扣 5 分 | 词数 < 800 → 0 分 |
| ⑤ | 无不可证主张 + 含供应关系/责任边界表述 | 有边界表述但未写清 → 扣 7 分 | 出现不可证主张 → 扣 15 分并**必须修复** |
| ⑥ | RFQ 入口可达 + 列明询价资料项 | 缺一项扣 5 分 | 无 RFQ 入口 → 0 分 |

---

## 3. 审计范围：三大产品类及其下属细分类目（33 页）

范围依据：`dist/` 实测产物清单（2026-11-27），非按目录名推测。

| 产品类 | 页数 | 路由 | 页面类型 | 权重检查重点 |
| :--- | ---: | :--- | :--- | :--- |
| **Titanium Products** | **16** | `/titanium-products/`（hub）+ 15 个单品页 | hub + 标准产品页 | 标准产品页重**规格 / 材料牌号 / 执行标准 / 供货形态**；hub 重**分类导航与采购入口** |
| **Titanium Anodes** | **16** | `/titanium-anode/`（hub）+ `anti-fouling-system/` + `coating-systems/` + 4 个涂层页 + `mmo-anode/`（hub）+ 8 个 MMO 家族页 | hub + 涂层页 + 家族页 | 涂层页重**涂层体系 / 适用介质 / 寿命边界**；家族页重**几何规格 / 安装方式 / 选型对照** |
| **PEM Electrolyzer** | **1** | `/pem-electrolyzer/` | 单产品页 | 重**设备参数 / 产气量 / 纯度 / 供货与安装条件** |
| **合计** | **33** | — | — | — |

### 3.1 Titanium Products（16 页）

| # | 路由 | 类型 |
| --- | :--- | :--- |
| 1 | `/titanium-products/` | hub |
| 2 | `/titanium-products/titanium-plate/` | 标准产品页 |
| 3 | `/titanium-products/titanium-foil-2/` | 标准产品页 |
| 4 | `/titanium-products/titanium-rod-bar/` | 标准产品页 |
| 5 | `/titanium-products/titanium-tubing/` | 标准产品页 |
| 6 | `/titanium-products/titanium-fittings/` | 标准产品页 |
| 7 | `/titanium-products/titanium-flanges/` | 标准产品页 |
| 8 | `/titanium-products/titanium-forgings/` | 标准产品页 |
| 9 | `/titanium-products/titanium-mesh/` | 标准产品页 |
| 10 | `/titanium-products/titanium-wire/` | 标准产品页 |
| 11 | `/titanium-products/titanium-clad-copper/` | 标准产品页 |
| 12 | `/titanium-products/titanium-bolts/` | 标准产品页 |
| 13 | `/titanium-products/titanium-diaphragm/` | 标准产品页 |
| 14 | `/titanium-products/titanium-coil/` | 标准产品页 |
| 15 | `/titanium-products/titanium-baskets/` | 标准产品页 |
| 16 | `/titanium-products/titanium-balls/` | 标准产品页 |

### 3.2 Titanium Anodes（16 页）

| # | 路由 | 类型 |
| --- | :--- | :--- |
| 17 | `/titanium-anode/` | hub |
| 18 | `/titanium-anode/coating-systems/` | 选型 hub |
| 19 | `/titanium-anode/anti-fouling-system/` | 体系页 |
| 20 | `/titanium-anode/iridium-oxide-coated-titanium-anodes/` | 涂层页 |
| 21 | `/titanium-anode/lead-dioxide-anode/` | 涂层页 |
| 22 | `/titanium-anode/platinized-anode/` | 涂层页 |
| 23 | `/titanium-anode/ruthenium-coated-titanium-anodes/` | 涂层页 |
| 24 | `/titanium-anode/mmo-anode/` | 家族 hub |
| 25 | `/titanium-anode/mmo-anode/mmo-wire-anode/` | 家族页 |
| 26 | `/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/` | 家族页 |
| 27 | `/titanium-anode/mmo-anode/mmo-ribbon-anode/` | 家族页 |
| 28 | `/titanium-anode/mmo-anode/mmo-tubular-anode/` | 家族页 |
| 29 | `/titanium-anode/mmo-anode/mmo-rod-anode/` | 家族页 |
| 30 | `/titanium-anode/mmo-anode/mmo-canister-anode/` | 家族页 |
| 31 | `/titanium-anode/mmo-anode/mmo-disc-anode/` | 家族页 |
| 32 | `/titanium-anode/mmo-anode/mmo-linear-anode/` | 家族页 |

### 3.3 PEM Electrolyzer（1 页）

| # | 路由 | 类型 |
| --- | :--- | :--- |
| 33 | `/pem-electrolyzer/` | 设备页 |

### 3.4 范围事实说明（防幻觉）

1. **PEM Electrolyzer 名下没有细分类目页**：`src/pages/` 下只有 `pem-electrolyzer/index.astro`
   一条路由，"下属细分类目"在本站不存在。按 **1 页**计入，**不虚构子页**。
2. **Anode 的 `[slug]` 动态路由当前产出 0 页**：`src/pages/titanium-anode/[slug]/index.astro`
   在 `getStaticPaths` 中把 `ruthenium-coated-titanium-anodes`、`iridium-oxide-coated-titanium-anodes`、
   `platinized-anode`、`lead-dioxide-anode` 四个 slug 全部排除（各有静态页承接），
   故 Anode 类 16 页全为静态页。
3. 本计划**不新增、不修改、不删除任何 URL 路径**。

---

## 4. 执行流程（5 步）

沿用标准原文的流程，落到本站：

1. **筛选页面** — 本计划已把范围收敛到 33 页（三大产品类及下属细分类目）。
   这 33 页都是**商业页**，能承接真实询盘，不需要再做关键词曝光筛选。
2. **排查门槛** — 先判 ①索引资格 与 ③事实与证据。不通过的先修技术/事实问题，
   **不进入评分分档**，也不在本阶段改写文案。
3. **验证匹配** — 再判 ②查询相关性（标题族 vs 目标查询）、④信息完整性、
   ⑤来源可信度、⑥商业转化，逐页产出六维分与证据。
4. **精准修复** — 只修**有证据支持**的缺口。修复动作不在本计划内直接执行，
   必须回到 `docs/seo/execution-plan.md` 的任务体系，并遵守其红线。
5. **双轨监测** — 传统搜索表现通过 Google Search Console 监测；
   AI 搜索引用**单独记录**观察结果（站内无法自动判定，属人工/外部记录项）。

> Google 官方建议继续使用传统 SEO 基础实践，并未要求增加专门的 AI 搜索结构化数据
> 或另建一套 GEO 页面体系。本计划不引入新 URL 体系，不新增专用结构化数据类型。

---

## 5. 机器化落点

**SE-A2 才实现**，本轮只登记任务，不写代码。

- 脚本路径：`scripts/seo/source-eligibility-audit.mjs`
- 运行方式：`npm run qa:elig`（package.json 新增脚本）
- 复用底座：`scripts/seo/geo-audit.mjs` 的 `analysePage()` / `routeOf()` / `visibleText()` /
  `jsonLdOf()` / `countMatches()` / `TRACE_PATTERNS` 等既有能力，**不重写解析器**
- 输出：`tmp/source-eligibility/source-eligibility.json` + `source-eligibility.md`
- 覆盖范围：全站 77 页扫描（数据一次算全），**判定与记录只针对 33 页审计范围**
- 每页输出字段：`route` / `type` / `hardGate`（通过|未通过）/ `gateReasons[]` /
  `scores{d1..d6}` / `total` / `band` / `evidence[]`（每条含 `dim` / `finding` / `proof`）

**与 `qa:geo` 的关系**：`qa:geo` 是**全站风险扫描**（输出问题清单），
`qa:elig` 是**商业页选源资格判定**（输出六维分数与门槛结论）。两者共用解析器，
但判定口径、覆盖范围与产出格式不同，**不合并**。

---

## 6. 任务总表

图例：**状态** · 落点 · 前置 · 执行主体

| ID | 任务 | 状态 | 落点 | 前置 | 执行主体 |
| --- | --- | :---: | --- | --- | --- |
| SE-A1 | 选源资格标准落地为本执行计划 | `[x]` | `docs/seo/ai-source-eligibility-audit.md` + `docs/tasks/ai-source-eligibility-audit.json` | — | AI |
| SE-A2 | 体检脚本落地（`qa:elig`） | `[ ]` | 新 `scripts/seo/source-eligibility-audit.mjs` + `package.json` | A1 | AI |
| SE-A3 | Titanium Products 16 页首轮体检（**金丝雀**） | `[ ]` | `tmp/source-eligibility/` | A2 | AI |
| SE-A4 | Titanium Anodes 16 页首轮体检 | `[ ]` | `tmp/source-eligibility/` | A3 | AI |
| SE-A5 | PEM Electrolyzer 1 页体检 | `[ ]` | `tmp/source-eligibility/` | A4 | AI |
| SE-A6 | 33 页检查表落盘 | `[ ]` | 新 `docs/seo/ai-source-eligibility-results.md` | A5 | AI |
| SE-A7 | 缺陷修复（**另行立项**） | `[ ]` | 受 `docs/seo/execution-plan.md` 任务体系约束 | A6 | AI + **人工抽检** |
| SE-A8 | 门禁固化（防回归） | `[ ]` | `scripts/qa/assertions.mjs` + `docs/tasks/ai-source-eligibility-audit.json` | A6 | AI |

### 执行顺序（批次链）

```
A1 → A2 → A3 → A4 → A5 → A6 → A7 → A8
```

**A3 是金丝雀**：先只判 `titanium-products/titanium-plate/` 一页，
人工核对六维分数与证据是否成立；**信号不成立就停下重新评估口径**，不推进 A4。

---

## 7. 基线计数表

### 7.1 全站基线（取自 EX-E8 结案实测，2026-11-22）

| 指标 | 基线 | 目标 | 主要相关任务 |
| --- | --- | --- | --- |
| 页面总数 | 77 | 不变 | — |
| `tablesExtractable` | 100 | 不倒退 | EX-A1…A6 |
| `table-unquotable` | 0 | 0 | EX-A1…A6 |
| `webPageNodes` | 77 | 77 | EX-B1 |
| `faqPages` | 69 | 77 | EX-D1…D3 |
| `pagesWithVisibleFaqButNoNode` | 0 | 0 | EX-D1…D3 |
| `schema-incomplete` | 16 | 0 | EX-C1、H2 |
| `scaled-content` | 0 | 0 | EX-E2…E8 |
| `unsourced-spec` | 27 | 0 | EX-F1…F3 |
| `no-eeat-signals` | 3 | 0 | EX-F2、X3 |
| `thin-page` | 3 | 0 | EX-H5、X3 |
| 跨页重复段落组 | 42 | ≤10 | EX-H1、H4 |

> **判据**：任何一项**倒退**即停手定位，不推进下一批。

### 7.2 审计范围基线（SE-A2 建表时回填，**本轮留空**）

SE-A2 首次运行 `qa:elig` 后，把 33 页的门槛结论与六维分数写入本表，
并写入 `tmp/source-eligibility/source-eligibility.json`。

| 产品类 | 页数 | 门槛通过 | 门槛未通过 | 平均分 | 备注 |
| --- | ---: | ---: | ---: | ---: | :--- |
| Titanium Products | 16 | *(待填)* | *(待填)* | *(待填)* | *(待填)* |
| Titanium Anodes | 16 | *(待填)* | *(待填)* | *(待填)* | *(待填)* |
| PEM Electrolyzer | 1 | *(待填)* | *(待填)* | *(待填)* | *(待填)* |
| **合计** | **33** | *(待填)* | *(待填)* | *(待填)* | — |

---

## 8. 禁止事项（红线，任何任务都不得违反）

除 `docs/seo/execution-plan.md`「8. 禁止事项」的 10 条全部适用外，本计划追加 3 条：

11. **不得为凑 ⑤ 来源可信度而写不可证主张**——不得出现自有工厂、厂址、成立年限、
    员工规模、产能数字等本站无法举证的内容；只写"工程支持 + 采购协调 + 合格生产伙伴"
    的可证伪表述。
12. **不得为凑分数而堆字数或复制段落**——④信息完整性的得分来自真实采购信息，
    跨页重复段落会同时触发 `qa:geo` 的重复段落计数倒退。
13. **不得新增、修改或删除任何内部 URL 路径**——33 页审计范围是既定集合，
    不得为了"补一个类目页"而动路由。

> **最关键的执行原则**：只修复有证据支持的问题，
> 不因为 AI 搜索出现新机制就批量改写已经有效的商业页面。

---

## 9. 页面检查表模板（最终交付物）

SE-A6 落盘 `docs/seo/ai-source-eligibility-results.md`，每页一行，字段固定：

| 页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *(待填)* | *(待填)* | *(待填)* | *(待填)* | *(待填)* | *(待填)* | *(待填)* |

**填写规则**

- **目标查询**：写该页应当回答的采购查询（如 `titanium plate supplier`），
  不是页面标题的复制。
- **硬性门槛**：只写 `通过` / `未通过`；未通过必须在此行注明命中哪一项（①或③）。
- **六维评分**：写 `d1/d2/d3/d4/d5/d6 = x/y` 与总分，例如 `20/18/16/12/15/8 = 89`。
- **问题证据**：必须指向 `dist/` 中的具体位置（标题 / 表格 / 段落 / JSON-LD 节点），
  **禁止**写"内容不够丰富"这类无法核验的描述。
- **修复动作**：写具体动作与落点文件；无证据支撑的问题**不写动作**。
- **复查结果**：`已修复` / `未修复（待立项）` / `不适用`。

**表格布局**（`docs/seo/ai-source-eligibility-results.md`）

```markdown
| 页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果 |
| --- | --- | --- | --- | --- | --- | --- |
| /titanium-products/titanium-plate/ | *(待填)* | *(待填)* | *(待填)* | *(待填)* | *(待填)* | *(待填)* |
```

---

## 10. 变更记录

| 日期 | 变更 | 原因 |
| --- | --- | --- |
| 2026-11-27 | 建立本文件 + `docs/tasks/ai-source-eligibility-audit.json` | 将《工业 B2B 商业页面 AI 搜索选源资格检查标准》落地为可接棒、可验证、不可跑偏的执行体系；审计范围按用户指定收敛为 Titanium Products / Titanium Anodes / PEM Electrolyzer 三类产品及下属细分类目共 33 页 |



