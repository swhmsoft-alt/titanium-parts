# SEO + GEO 执行计划（唯一执行事实源）

> 本文件是本轮 SEO/GEO 整改的**唯一执行事实源**。
> 任何会话在动手前必须先读本文件的「0. 恢复指引」与「3. 任务总表」。
> 状态标记是进度的唯一凭据——**没有标记就等于没做**。

关联文档：
- `docs/seo/geo-audit-findings.md` — 巡检诊断报告（只读参考，不修改）
- `docs/seo/product-comparison-table-template.md` — 对比表模板与排版规范
- `docs/seo/ai-traffic-attribution.md` — 埋点归因配置步骤
- `docs/seo/execution-log.md` — 追加式执行日志
- `tmp/geo-audit/geo-audit.json` — 巡检原始数据（每批后重新生成）

---

## 0. 恢复指引（新会话第一步照做，不要重新巡检）

1. 读本文件「3. 任务总表」，找到**状态为 `[ ]` 的第一个任务**——它就是下一步。
2. 读该任务条目的「上一个任务 / 下一个任务」，确认它没有前置依赖未完成。
3. 读 `docs/seo/execution-log.md` **末尾一段**，确认上一批实际改了什么、踩了什么坑。
4. 若存在 `[~]`（进行中）标记：说明上次会话中断在该任务，**接手时必须先决定继续或回退，不得跳过**。
5. **不要**重新跑 `npm run qa:geo` 去"了解现状"——基线计数在「5. 基线计数表」里，直接对照。
6. **不要**重读 `docs/seo/geo-audit-findings.md` 全文——需要时只按任务条目里点名的路由查。

**每个任务的标准动作（不可省略）**

```
npm run budget -- --reset --task <任务ID>
npm run gate -- phase EDIT --task <任务ID> --dod '<该任务的 DoD，用分号分隔>'
npm run gate -- write <本批要改的文件...>
<改代码>
npm run gate -- phase VERIFY
npm run build
npm run qa:geo
npm run task:verify -- <任务ID>
<更新本文件的状态标记 + 追加 execution-log.md>
npm run gate -- phase DONE
npm run gate -- audit
<输出收据>
```

---

## 1. 状态标记字典（唯一合法取值）

| 标记 | 含义 | 允许写入该状态的条件 |
| --- | --- | --- |
| `[ ]` | 待办 | 初始状态 |
| `[~]` | 进行中 | 已 `gate -- phase EDIT` 且 DoD 已冻结，但尚未验证通过 |
| `[x]` | 完成 | `build` 成功 + `qa:geo` 计数未倒退 + `task:verify` 全绿 + 日志已追加 |
| `[!]` | 阻塞于人 | 缺 ID / 缺法务文案 / 缺实测数据 / 需业务抽检确认 |

**规则**

- 只有 `[x]` 允许被跳过。
- `[~]` 表示上次会话中断在此处——接手者必须先检查并决定继续或回退，**不许把它悬着另开任务**。
- `[!]` 不得靠猜测绕过：改标记、写日志、继续不依赖它的下一个任务。

---

## 2. 防幻觉条款（对本文件与全部执行任务生效）

1. 每个任务的 **DoD 是封闭清单**：只做清单内的动作，清单外的事一律写进收据「已知遗留」，**不得动手**。
2. 引用具体数值时必须写明来源（文件路径 + 行号，或标准号）；**不允许凭印象写标准号**。
3. 不确定的标准号 / 参数值 → 降级为「按订单确认」并记入日志，**不猜、不编**。
4. 每批结束把 `tmp/geo-audit/geo-audit.json` 的关键计数抄进 `execution-log.md`，形成前后对照链。
5. 本文件「3. 任务总表」任何一行被改动（新增 / 删除 / 改顺序）都必须写一行日志说明原因。
6. 巡检脚本给出的严重度是**信号**，不是判决；是否整改以本文件的任务条目为准。

---

## 3. 任务总表

图例：**状态** · 落点 · 前置 · 执行主体

| ID | 任务 | 状态 | 落点 | 前置 | 执行主体 |
| --- | --- | --- | --- | --- | --- |
| EX-A1 | MmoTable 加 `scope` + `caption`（金丝雀） | `[x]` | `src/components/mmo/patterns/MmoTable.astro`（**实测为死代码路径**，已回滚；由 EX-A5 覆盖真实渲染链） | — | AI |
| EX-A2 | anode PageBlocks 表格改造 | `[x]` | `src/components/anode/PageBlocks.astro` | — | AI |
| EX-A3 | IndustrySpoke 表格改造 | `[x]` | `src/components/industry/IndustrySpoke.astro` | — | AI |
| EX-A4 | GradePage 表格改造 | `[x]` | `src/components/grade/GradePage.astro` + `src/components/grade/GradeHub.astro`（hub 页 3 张表同为 grade 页表格） | — | AI |
| EX-A5 | mmo-family-pages.ts 硬编码 HTML 表 | `[x]` | `src/data/mmo-family-pages.ts`（21 张内联表） | — | AI |
| EX-A6 | 产品页残留表格出口排查 | `[x]` | 8 个页面内联表：`src/pages/applications/index.astro`、`src/pages/titanium-anode/index.astro`、`src/pages/titanium-anode/mmo-anode/index.astro`、`src/pages/titanium-anode/coating-systems/index.astro`、`src/pages/titanium-machining-parts.astro`、`src/pages/titanium-products/index.astro`、`src/pages/titanium-products/titanium-tubing.astro`、`src/pages/titanium-service/index.astro` | A1 | AI |
| EX-B1 | BaseLayout 统一补 WebPage（去重） | `[x]` | `src/layouts/BaseLayout.astro` | — | AI |
| EX-C1 | Product 节点字段补齐 | `[x]` | `src/layouts/BaseLayout.astro`、`src/data/product-meta.ts`、`scripts/media/apply-product-meta.mjs` | B1 | AI |
| EX-D1 | FAQPage 批 1（16 产品页） | `[x]` | `src/pages/titanium-products/*.astro` | C1 | AI |
| EX-D2 | FAQPage 批 2（服务页 7 页） | `[x]` | `src/pages/titanium-service/[slug]/index.astro`、`src/pages/titanium-service/index.astro` | C1 | AI |
| EX-D3 | FAQPage 批 3（站点页 6 个） | `[x]` | `src/pages/{index,faq/index,applications/index,titanium-anode/index,titanium-anode/coating-systems/index,titanium-machining-parts}.astro` + `scripts/seo/geo-audit.mjs` | C1 | AI |
| EX-E1 | 抽 ProductPage 组件（产品页） | `[x]` | 新 `src/components/product/ProductPage.astro` + `src/data/product-pages/*` | D1 | AI |
| EX-E2 | 差异化金丝雀（titanium-plate） | `[x]` | `src/pages/titanium-products/titanium-plate.astro` + `src/data/product-pages/titanium-plate.ts` + `src/data/product-pages/standard.ts` + `src/components/product/ProductExtras.astro` | E1 | AI + **人工读** |
| EX-E3 | 差异化批 1（bolts, forgings） | `[x]` | `src/data/product-pages/titanium-bolts.ts`、`src/data/product-pages/titanium-forgings.ts` | E2 | AI + **人工抽检** |
| EX-E4 | 差异化批 2（diaphragm, foil-2） | `[ ]` | `src/pages/titanium-products/*` | E2 | AI + **人工抽检** |
| EX-E5 | 差异化批 3（fittings, flanges） | `[ ]` | `src/pages/titanium-products/*` | E2 | AI + **人工抽检** |
| EX-E6 | 差异化批 4（mesh, wire） | `[ ]` | `src/pages/titanium-products/*` | E2 | AI + **人工抽检** |
| EX-E7 | 差异化批 5（coil, clad-copper） | `[ ]` | `src/pages/titanium-products/*` | E2 | AI + **人工抽检** |
| EX-E8 | 差异化批 6（balls, baskets） | `[ ]` | `src/pages/titanium-products/*` | E2 | AI + **人工抽检** |
| EX-F1 | 溯源批 1（anode 19 页） | `[ ]` | `src/data/anode-*.ts` | E1 | AI + **工程抽检** |
| EX-F2 | 溯源批 2（service 7 页） | `[ ]` | `src/data/service-steps.ts` | E1 | AI + **工程抽检** |
| EX-F3 | 溯源批 3（设备 4 页） | `[ ]` | `src/data/*-sections.ts` | E1 | AI + **工程抽检** |
| EX-G1 | 巡检门禁断言固化（防回归） | `[ ]` | `scripts/qa/assertions.mjs` + `docs/tasks/*.json` | A6,B1,C1,D3 | AI |
| EX-H1 | industries 9 spoke 公共 RFQ 语下沉 | `[ ]` | `src/data/spoke/*.ts` | D3 | AI |
| EX-H2 | ComparisonTable 接入 16 产品页 | `[ ]` | `src/data/comparison-table-model.ts` | E1 | AI |
| EX-H3 | MMO 几何对比表归 hub | `[ ]` | `src/data/mmo-family-pages.ts` | A5 | AI |
| EX-H4 | 检验文件段落归口 `/quality/` | `[ ]` | `src/data/coating-page-model.ts` | F1 | AI |
| EX-H5 | material-testing-certificate 扩为权威中心 | `[ ]` | `src/pages/titanium-service/[slug]/index.astro` | F2 | AI |
| EX-X1 | GTAG 实配 | `[ ]` | `.env` + GA4/GTM 控制台 | — | **阻塞于人** |
| EX-X2 | Cookie 同意层 | `[ ]` | 新组件 | — | **阻塞于人** |
| EX-X3 | 一手实测数据发布 | `[ ]` | `/quality/` | — | **阻塞于人** |
| EX-X4 | 原创性重写（若法务判定需要） | `[ ]` | `/terms/` + 各页 | — | **阻塞于人** |

### 执行顺序（批次链）

```
A1 → A2 → A3 → A4 → A5 → A6 → B1 → C1 → D1 → D2 → D3
  → E1 → E2 → E3 → E4 → E5 → E6 → E7 → E8
  → F1 → F2 → F3 → G1 → H1 → H2 → H3 → H4 → H5
```

A1 是金丝雀：**只改一个文件**，build 后看 `tablesExtractable` 是否从 1 上升。
信号不成立则停下重新评估，不要推进 A2。

---

## 4. 任务条目（P0）

### EX-A1　MmoTable 加 `scope` + `caption`（金丝雀）

- **状态**：`[x]`（2026-11-21 结案：**实测为死代码路径**，改动已 `git checkout` 回滚；真实渲染链由 EX-A2 / EX-A3 / EX-A5 覆盖）
- **本轮实测**：`MmoTable.astro` → `MmoPart.astro` → 无任何页面引用（**死代码**）。
  改动已落地且 build 成功，但 `dist` 中该组件**从未渲染**，故 `tablesExtractable` 仍为 1，
  DoD 第 4 条（计数上升）不成立。MMO 家族页的表格实际来自 `src/data/mmo-family-pages.ts`
  的内联 HTML 字符串（21 张表），由 `MmoProductPage.astro` 输出——那是 **EX-A5** 的落点。
- **重定级依据**（来自 `dist` 全量实测）：87 张表全部 `rows > 2`；`scope` 已有 36 张；
  `<caption>` **只有 1 张**；**22 页**已有 `scope` 但缺 `caption`，只补 caption 即可翻转。
  故本批的真实杠杆是 `<caption>`，不是 `scope`。
- **DoD**：
  1. `[x]` `src/components/mmo/patterns/MmoTable.astro` 的 `<th>` 加 `scope="col"`
  2. `[x]` 首列 `<td>` 改为 `<th scope="row">`
  3. `[x]` 表内新增 `<caption>`，文案写清"比较什么 + 在什么条件下比较"（不复制表格上方 h3 原文）
  4. `[ ]` `npm run build` 成功 ✅ / `npm run qa:geo` 显示 `tablesExtractable` 上升 ❌（仍为 1，落点为死代码）
- **落点文件**：`src/components/mmo/patterns/MmoTable.astro`（已改；**当前无渲染路径**）
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`tablesExtractable` 1 → ≥ 8 ❌（实测仍为 1）；`table-unquotable` 减少 MMO 页数 ❌
- **回滚方式**：`git checkout -- src/components/mmo/patterns/MmoTable.astro`
- **接手者须决定**：本任务**不得跳过**——要么把 EX-A1 的落点改指到真实渲染链
  （`src/data/mmo-family-pages.ts` 的内联表 = EX-A5，或 `src/components/anode/PageBlocks.astro` = EX-A2），
  要么由用户裁定直接进入 EX-A5。

### EX-A2　anode PageBlocks 表格改造

- **状态**：`[x]`（2026-11-21 完成：caption 已补；`scope="col"` 原生具备）
- **DoD**：
  1. `block.kind === 'table'` 分支加 `<caption>`（优先取 `block.title`；该字段不存在则按列头语义自撰）
  2. 首列 `<td>` → `<th scope="row">`
  3. 列头 `scope="col"` 保留
  4. build + qa:geo 成功，对应页面 `table-unquotable` 归零
- **落点文件**：`src/components/anode/PageBlocks.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`tablesExtractable` 继续上升；`table-unquotable` 减少 anode 家族页数
- **回滚方式**：`git checkout -- src/components/anode/PageBlocks.astro`
- **上一个任务**：EX-A1　**下一个任务**：EX-A3

### EX-A3　IndustrySpoke 表格改造

- **状态**：`[x]`（2026-11-21 完成：caption 已补；`scope="col"`/`scope="row"` 原生具备）
- **DoD**：
  1. `ind-table` 加 `<caption>`（写清比较对象与条件）
  2. 首列 `<td>` → `<th scope="row">`
  3. 已有 `scope="col"` 保留
  4. build + qa:geo 成功，9 个 spoke 页 `table-unquotable` 归零
- **落点文件**：`src/components/industry/IndustrySpoke.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`table-unquotable` −9
- **回滚方式**：`git checkout -- src/components/industry/IndustrySpoke.astro`
- **上一个任务**：EX-A1　**下一个任务**：EX-A4

### EX-A4　GradePage 表格改造

- **状态**：`[x]`（2026-11-21 完成：5 张表补 caption + scope；10 个 grade 页全部可抽取）
- **DoD**：
  1. grade 页表格加 `<caption>` + 首列 `scope="row"`
  2. build + qa:geo 成功，10 个 grade 页 `table-unquotable` 归零
- **落点文件**：`src/components/grade/GradePage.astro`（2 张表）、`src/components/grade/GradeHub.astro`（3 张表）
- **本轮实测**：9 个 grade 详情页各 2 张表 + `/titanium-grades/` hub 3 张表，共 21 张表全部 `ext = tables`；`table-unquotable` 18 页 → 8 页
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`table-unquotable` −10
- **回滚方式**：`git checkout -- src/components/grade/GradePage.astro`
- **上一个任务**：EX-A1　**下一个任务**：EX-A5

### EX-A5　mmo-family-pages.ts 硬编码 HTML 表

- **状态**：`[x]`（2026-11-21 完成：21 张内联表全部补 caption + scope）
- **DoD**：
  1. 定位 `src/data/mmo-family-pages.ts` 中以转义字符串内联的 `<table>`（如 Rod vs Tubular 对比表）
  2. 补 `<caption>` 与首列 `scope="row"` / 列头 `scope="col"`
  3. 字符串转义正确，构建后 HTML 结构合法
- **落点文件**：`src/data/mmo-family-pages.ts`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`table-unquotable` 减少对应页数
- **回滚方式**：`git checkout -- src/data/mmo-family-pages.ts`
- **上一个任务**：EX-A4　**下一个任务**：EX-A6

### EX-A6　产品页残留表格出口排查

- **状态**：`[x]`（2026-11-21 完成：8 页 / 9 张表全部可抽取，`table-unquotable` 8 页 → 0）
- **本轮实测**：剩余 8 页的表**全部是页面内联 `<table>`**（无组件/数据字符串出口）：
  `/applications/`（1 张 `app-table`）、`/titanium-anode/`（2 张 `anode-decision-table` + `anode-risk-table`）、
  `/titanium-anode/mmo-anode/`（2 张 `ac-table` + `ac-table-spec`）、`/titanium-anode/coating-systems/`（1 张 `ac-table`）、
  `/titanium-machining-parts/`（1 张无 class 的 `table`）、`/titanium-products/`（1 张 `prod-grade-table`）、
  `/titanium-products/titanium-tubing/`（1 张 `tp-spec-table`）、`/titanium-service/`（1 张 `ts-table`）。
  统一补 `<caption>` + 列头 `scope="col"` + 首列 `<th scope="row">`。
- **DoD**：
  1. `[x]` 按 `npm run qa:geo` 的 `table-unquotable` 清单定位所有剩余可抽取问题页
  2. `[x]` 逐页定位其 `<table>` 的渲染出口（页面内联 / 组件 / 数据字符串）
  3. `[x]` 全部改造为可抽取结构
  4. `[x]` `table-unquotable` 归零
- **落点文件**：`src/pages/applications/index.astro`、`src/pages/titanium-anode/index.astro`、
  `src/pages/titanium-anode/mmo-anode/index.astro`、`src/pages/titanium-anode/coating-systems/index.astro`、
  `src/pages/titanium-machining-parts.astro`、`src/pages/titanium-products/index.astro`、
  `src/pages/titanium-products/titanium-tubing.astro`、`src/pages/titanium-service/index.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`table-unquotable` 8 → 0；`tablesExtractable` 77 → 87（`tablesTotal` 87 不变）
- **回滚方式**：`git checkout -- <上述 8 个页面文件>`
- **上一个任务**：EX-A5　**下一个任务**：EX-B1

### EX-B1　BaseLayout 统一补 WebPage 节点

- **状态**：`[x]`（2026-11-21 结案）
- **本轮实测**：`BaseLayout.astro` 的 `graph` 在合并页面 `jsonLd` 之后统一判定——若全图已有 `WebPage` 类型节点则不再补，否则追加一个字段齐备的 `WebPage`。为让 `breadcrumb` 引用可解析，`BreadcrumbList` 补了 `@id`（`${canonicalUrl}#breadcrumb`），并同步修正 3 处原本指向 `${origin}/#breadcrumb` 的旧引用（`anode/ProductPage.astro`、`mmo/MmoProductPage.astro` 及其生成脚本 `scripts/mmo/gen-family-markup.mjs`）。`dist` 全量实测：77 页 **每页恰好 1 个** `WebPage`，无重复。
- **DoD**：
  1. `[x]` `src/layouts/BaseLayout.astro` 的 `graph` 增加 `WebPage` 节点，**仅当 `jsonLd` 中没有自带 `WebPage` 时**才补（已有 29 页自带，重复会造成 Schema 冲突）
  2. `[x]` 字段齐备：`@id`、`url`、`name`、`description`、`isPartOf`、`inLanguage`、`breadcrumb`、`publisher`、`primaryImageOfPage`
  3. `[x]` build + qa:geo 成功，`webPageNodes` 从 29 升到 77
  4. `[x]` 抽查已有 WebPage 的 29 页，确认**没有出现两个** `WebPage` 节点（`dist` 全量扫描：77/77 页各 1 个）
- **落点文件**：`src/layouts/BaseLayout.astro`、`src/components/anode/ProductPage.astro`、`src/components/mmo/MmoProductPage.astro`、`scripts/mmo/gen-family-markup.mjs`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`webPageNodes` 29 → 77
- **回滚方式**：`git checkout -- src/layouts/BaseLayout.astro`
- **上一个任务**：EX-A6　**下一个任务**：EX-C1

### EX-C1　Product 节点字段补齐

- **状态**：`[x]`（2026-11-21 结案）
- **本轮实测**：`product-meta.ts` 的 `ProductMeta` 扩展 `category` / `material` / `additionalType` / `image`，15 个产品条目全部补齐（脚本核对：15 条目、0 条缺字段）。取值全部来自站内既有数据：`category` / `material` / `image` 抄自 `src/data/titanium-products-page-1/2/3.ts`（`material` 由各页 `grades[]` 的牌号 + UNS 拼出），`additionalType` 为产品族名去掉「Titanium 」前缀。`BaseLayout` 的 `product` prop 同步扩展并输出 `category` / `material` / `additionalType` / `image` / `itemCondition`（`https://schema.org/NewCondition`）/ `additionalProperty`；`apply-product-meta.mjs` 的注入模板同步扩展，已重跑改写 15 个产品页。`geo-audit.mjs` 的 `PRODUCT_FIELDS` 拆为**必填**（10 项）与**条件**（`additionalProperty` / `offers` / `mpn` / `gtin` / `isVariantOf`），条件字段缺失不再算缺陷——本站不发布价格、厂商件号与条码，编造比留空更糟。
- **DoD**：
  1. `[x]` `BaseLayout` 的 `product` prop 类型扩展：`category?`、`material?`、`additionalType?`、`image?`、`itemCondition?`、`additionalProperty?`、`offers?`
  2. `[x]` `src/data/product-meta.ts` 的 `ProductMeta` 同步扩展，16 个产品条目补 `category` / `material` / `additionalType`（数据取自 `src/data/titanium-products-page-*.ts` 已有字段，**不得新造数值**）——实际条目为 **15 个**（`titanium-products/` 下除 `index.astro` 外 15 个产品页），`titanium-machining-parts` 无独立条目
  3. `[x]` `scripts/media/apply-product-meta.mjs` 的注入模板同步扩展新字段
  4. `[x]` `itemCondition` = `https://schema.org/NewCondition`
  5. `[x]` **红线**：`offers` 无真实报价口径则不挂；`mpn` / `gtin` 无真实数据则不写
  6. `[x]` build + qa:geo 成功，`schema-incomplete` 减少（31 → 16）
- **落点文件**：`src/layouts/BaseLayout.astro`、`src/data/product-meta.ts`、`scripts/media/apply-product-meta.mjs`、`scripts/seo/geo-audit.mjs`、`src/pages/titanium-products/*.astro`（15 页，由脚本改写）
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`schema-incomplete` 31 → 减少；`sku` 缺失 29 → 0
- **回滚方式**：`git checkout -- src/layouts/BaseLayout.astro src/data/product-meta.ts scripts/media/apply-product-meta.mjs`
- **上一个任务**：EX-B1　**下一个任务**：EX-D1

### EX-D1　FAQPage 批 1（16 个产品页）

- **状态**：`[x]`
- **本轮实测（2026-11-21）**：`src/pages/titanium-products/` 实为 **16 个文件**（`index.astro` hub + 15 个单品页），全部接入 `faq` prop。可见 FAQ 渲染 `faq.slice(0, 6)` 的 13 页与 `titanium-plate` / `titanium-tubing` / hub 三页用整组数组，JSON-LD 与页面渲染共用同一份数组，答案逐字一致。计数：`faqPages` 40 → **56**；`pagesWithVisibleFaqButNoNode` 37 → **21**（余下 21 页为服务页 / 站点页，归 EX-D2 / EX-D3）
- **DoD**：
  1. `BaseLayout` 增加 `faq?: { q: string; a: string }[]` prop，统一生成 `FAQPage` 节点
  2. 16 个 `src/pages/titanium-products/*.astro` 把**已有可见 FAQ 数据**通过该 prop 传入（每页 1 行）
  3. JSON-LD 答案文本与页面可见答案**逐字一致**（同一份数据，不重新措辞）
  4. build + qa:geo 成功，对应页面 `faq-unstructured` 归零
- **落点文件**：`src/layouts/BaseLayout.astro`、`src/pages/titanium-products/*.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`pagesWithVisibleFaqButNoNode` 37 → ≤21；`faqPages` 40 → ≥56
- **回滚方式**：`git checkout -- src/layouts/BaseLayout.astro src/pages/titanium-products/`
- **上一个任务**：EX-C1　**下一个任务**：EX-D2

### EX-D2　FAQPage 批 2（服务页 7 页）

- **状态**：`[x]`（2026-11-21 完成：6 个服务详情页 + `/titanium-service/` hub 全部生成 FAQPage 节点，答案与页面可见答案同源逐字一致）
- **DoD**：
  1. `[x]` `src/pages/titanium-service/[slug]/index.astro` 与 `/titanium-service/` 的可见 FAQ 接入 `BaseLayout` 的 `faq` prop
  2. `[x]` 答案逐字一致
  3. `[x]` build + qa:geo 成功，对应页面 `faq-unstructured` 归零
- **落点文件**：`src/pages/titanium-service/[slug]/index.astro`、`src/pages/titanium-service/index.astro`
- **本轮实现**：
  - 6 个服务详情页：用 `step.scope` / `step.reviewBasis` / `step.outputs` **派生** 3 条 Q&A（`scope`、报价前确认项、典型产出），
    同一数组既渲染页面可见的 `<details class="svc-faq-item">` FAQ 区块，又作为 `BaseLayout` 的 `faq` prop → JSON-LD 答案逐字等于可见答案
  - `/titanium-service/` hub：直接复用页面已有的 `faqs` 数组（10 条）传入 `faq` prop，未改一字可见文案
  - 未新增任何未经证实的技术断言：可见 FAQ 的答案全部来自 `src/data/service-steps.ts` 既有字段
- **本轮实测**：`faqPages` 56 → **63**；`pagesWithVisibleFaqButNoNode` 21 → **14**；
  `thin-page` 9 → 3（6 个服务详情页正文词数由 ~270 升至 ~400）；`pageCount` 77、`tablesExtractable` 87、
  `webPageNodes` 77、`scaled-content` 12、`unsourced-spec` 27、`no-eeat-signals` 3、跨页重复段落组 42 均未倒退
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`pagesWithVisibleFaqButNoNode` 21 → 14
- **回滚方式**：`git checkout -- src/pages/titanium-service/`
- **上一个任务**：EX-D1　**下一个任务**：EX-D3

### EX-D3　FAQPage 批 3（站点页 6 个）

- **状态**：`[x]`（2026-11-21 完成：6 个含**真实可见 FAQ** 的站点页接入 FAQPage 节点，答案与页面可见答案逐字一致）
- **本轮实测（2026-11-21）**：
  - 计划原文列的 15 个路由里，只有 **6 个**页面在 `<main>` 内真的有可见 FAQ：
    `/`、`/faq/`、`/applications/`、`/titanium-anode/`、`/titanium-anode/coating-systems/`、`/titanium-machining-parts/`。
  - 其余 9 个（`/404.html`、`/company/`、`/contact/`、`/knowledge-center/`、`/manufacturing-capabilities/`、
    `/our-team/`、`/quality/`、`/terms/`、`/titanium-products/`）**页面上没有任何可见 FAQ**：
    它们的 `visibleFaqBlocks=9` 全部来自 `Header.astro` 移动菜单的 9 个 `<details>`（全站公共噪声，非页面 FAQ）。
    故 DoD 原文的「15 页接入」按实测收敛为 **6 页**，其余页面**不做任何注入**（不制造无对应可见内容的 Schema）。
  - 修正 `scripts/seo/geo-audit.mjs` 的 `visibleFaqBlocks` 口径：**只统计 `<main>` 内容区**，
    把全站 Header 导航菜单排除在外。修正后 `pagesWithVisibleFaqButNoNode` **14 → 0**。
- **DoD**：
  1. `[x]` 6 个含可见 FAQ 的页面把**已有可见 FAQ 数据**通过 `BaseLayout` 的 `faq` prop 传入（每页 1 行）
  2. `[x]` 复用既有唯一来源：`/faq/` 用 `src/data/faqs-data.ts`（`homeFAQs` / `titaniumFAQs` / `anodeFAQs`），
     `/applications/` 用本页 `faqs` 数组，`/titanium-anode/` 用 `faqItems` + `faqItemsExtra`，
     `/titanium-anode/coating-systems/` 用 `coatingHub.faq`，`/titanium-machining-parts/` 用本页 `faqList`，
     `/` 把原 `faqTitles` 字符串数组改为 `faqs` 对象数组（**可见文案一字未改**）
  3. `[x]` 答案逐字一致（`dist` 实测：6 页 `answerMismatch=0`、`questionMismatch=0`）
  4. `[x]` build + qa:geo 成功，`pagesWithVisibleFaqButNoNode` **14 → 0**
  5. `[x]` `geo-audit.mjs` 的 `visibleFaqBlocks` 只统计 `<main>` 内容区
- **落点文件**：`src/pages/index.astro`、`src/pages/faq/index.astro`、`src/pages/applications/index.astro`、
  `src/pages/titanium-anode/index.astro`、`src/pages/titanium-anode/coating-systems/index.astro`、
  `src/pages/titanium-machining-parts.astro`、`scripts/seo/geo-audit.mjs`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`pagesWithVisibleFaqButNoNode` 14 → 0；`faqPages` 63 → ≥69
- **回滚方式**：`git checkout -- src/pages/index.astro src/pages/faq/index.astro src/pages/applications/index.astro src/pages/titanium-anode/index.astro src/pages/titanium-anode/coating-systems/index.astro src/pages/titanium-machining-parts.astro scripts/seo/geo-audit.mjs`
- **上一个任务**：EX-D2　**下一个任务**：EX-E1

## 5. 任务条目（P1：内容差异化与溯源）

### EX-E1　抽 ProductPage 组件（产品页）

- **状态**：`[x]`（2026-11-21 结案：15 个单品页全部改为共享骨架薄壳，数据落在 `src/data/product-pages/*`；可见文案不变；`qa:geo` 计数 61 findings / 74 opportunities / 77 页 与改动前完全一致）
- **DoD**：
  1. 新建 `src/components/product/ProductPage.astro`，把 16 个产品页的**共同骨架**（hero / orderBasis / grades-forms / process / mfg / applications / evidence / controls / FAQ / RFQ）收敛为一处
  2. 数据移到 `src/data/product-pages/*.ts`，页面只承载数据
  3. **不改任何可见文案**（本任务只重构结构，文字不变）
  4. build 成功，77 页不变，`qa:geo` 计数与改动前一致（不得倒退）
- **落点文件**：新 `src/components/product/ProductPage.astro`、新 `src/data/product-pages/*`、`src/pages/titanium-products/*.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：所有计数**不变**（这是重构任务，判据是"没变"）
- **回滚方式**：`git checkout -- src/pages/titanium-products/ && git rm -r src/components/product src/data/product-pages`
- **上一个任务**：EX-D3　**下一个任务**：EX-E2

### EX-E2　差异化金丝雀（titanium-plate）

- **状态**：`[x]`（2026-11-21 完成：titanium-plate 的通用壳文案改写为轧制/板材专有表述，新增「Four Points That Are Decided Differently for Flat Titanium」四类专有内容小节 + 「How Plate Differs from the Adjacent Forms」对比表）
- **本轮实测（2026-11-21）**：
  - **期望计数变化的实测修正**：原文写「`scaled-content` 12 → 11」，实测**不成立**——`titanium-plate` 在改动前就不在 `scaled-content` 的 12 页名单里（改前 `topSimilar` 0.21、无 `scaled-content` 标记），因此该页的判定只会是「保持无标记」。本轮实测 `scaled-content` 仍为 **12**（成员未变：balls / baskets / bolts / clad-copper / coil / diaphragm / fittings / flanges / foil-2 / forgings / mesh / wire）。
  - **本页 `topSimilar`**：0.21（peer `/titanium-products/titanium-bolts/`）→ **0.089**，远低于 `CLONE_THRESHOLD` 0.55，页面继续无 `scaled-content` 标记。
  - **本页词数**：约 1600 → **1997**；新增对比表 1 张（`tablesTotal` 87 → **88**，`tablesExtractable` 88，全部可抽取）。
  - **其余计数未倒退**：`pageCount` 77、`webPageNodes` 77、`faqPages` 69、`pagesWithVisibleFaqButNoNode` 0、`Product` 31、`schema-incomplete` 16、`unsourced-spec` 27、`no-eeat-signals` 3、`thin-page` 3。
- **DoD**：
  1. `[x]` 共用壳文案（orderBasis 4 卡 / processSteps 5 步 / evidence / controls）改写为板材专有表述并压缩到每组 ≤3 句
  2. `[x]` 新增四类专有内容：**工艺路线** / **失效模式** / **检测项差异** / **供货形态**（`detailSections` 区块，4 组 × 3 条）
  3. `[x]` 新增「与相邻形态的差别」小节 + 1 张 4 列对比表（`specTable`：Plate / Sheet / Cut blanks）
  4. `[x]` **红线**：未为降分改写通用句式（改写后仍是完整技术陈述），未引入未经验证的数值（无新增具体参数）
  5. `[x]` build + qa:geo 成功，该页 `topSimilar` 下降（0.21 → 0.089）
- **落点文件**：`src/data/product-pages/titanium-plate.ts`（数据）、`src/data/product-pages/standard.ts`（新增 `detailSections` 区块类型）、`src/components/product/ProductExtras.astro`（新增 `detailSections` 渲染与样式）；页面壳 `src/pages/titanium-products/titanium-plate.astro` 未改
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：**实测修正**——`scaled-content` 保持 **12**（`titanium-plate` 本就不在名单内）；本页 `topSimilar` 0.21 → 0.089；`tablesTotal` / `tablesExtractable` 87 → 88
- **回滚方式**：`git checkout -- src/data/product-pages/titanium-plate.ts src/data/product-pages/standard.ts src/components/product/ProductExtras.astro`
- **人工确认**：**必须人工通读一遍**该页成品，确认没有"为降分而删实质内容"
- **上一个任务**：EX-E1　**下一个任务**：EX-E3

### EX-E3 … EX-E8　其余 15 个产品页差异化

- **状态**：EX-E3 `[x]`（2026-11-21 完成：bolts + forgings 通用壳文案改写为紧固件/锻件专有表述，新增四类专有内容小节 + 各自「与相邻形态的差别」对比表；`scaled-content` 12 → **10**，两页 `topSimilar` 降至 0.17）· EX-E4 `[ ]` · EX-E5 `[ ]` · EX-E6 `[ ]` · EX-E7 `[ ]` · EX-E8 `[ ]`
- **分组**：E3 = bolts + forgings；E4 = diaphragm + foil-2；E5 = fittings + flanges；E6 = mesh + wire；E7 = coil + clad-copper；E8 = balls + baskets
- **DoD**（每组）：
  1. 与 EX-E2 完全相同的四项内容补齐（壳压缩 + 四类专有内容 + 差别小节 + 对比表）
  2. 每组 2 页，**不得跨组混改**
  3. build + qa:geo 成功，对应页面 `topSimilar` 下降
  4. **红线**同 EX-E2
- **落点文件**：`src/pages/titanium-products/<slug>.astro`（或对应 `src/data/product-pages/` 条目）
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`scaled-content` 12 → 0（**实测修正**：本组只覆盖 2 页，每页移除后 `scaled-content` 减 1，故本组预期为 12 → **10**；余下 10 页由 EX-E4…E8 各减 1）
- **EX-E3 本轮实测（2026-11-21）**：`titanium-bolts` `topSimilar` **0.17**（peer `titanium-forgings`）、`titanium-forgings` **0.17**（peer `titanium-bolts`），两页均低于 `CLONE_THRESHOLD` 0.55，`scaled-content` 成员由 12 减为 **10**（balls / baskets / clad-copper / coil / diaphragm / fittings / flanges / foil-2 / mesh / wire）；`tablesTotal` 88 → **90**、`tablesExtractable` 90（新增 2 张对比表全部可抽取）；其余计数未倒退：`pageCount` 77、`webPageNodes` 77、`faqPages` 69、`Product` 31、`schema-incomplete` 16、`unsourced-spec` 27、`no-eeat-signals` 3、`thin-page` 3
- **回滚方式**：`git checkout -- <本组实际改动文件>`
- **人工抽检**：每组完成后抽检 1 页，确认工艺描述与实际产线一致
- **上一个任务**：EX-E2　**下一个任务**：EX-E3 → EX-E4 → EX-E5 → EX-E6 → EX-E7 → EX-E8 → EX-F1

### EX-F1　溯源批 1（anode 19 页）

- **状态**：`[ ]`
- **DoD**：
  1. 为每个技术参数补出处，出处**四选一**：标准（ASTM / NACE / ISO / EN / AWS + 版本）、牌号（UNS）、证书（EN 10204 3.1/3.2、PMI）、状态（「按订单确认」+ 需哪项输入才能定值）
  2. 无法指出对应标准条款的，**降级为「按订单确认」，不猜**
  3. 每页溯源锚点 ≥ 2（脚本阈值 `MIN_TRACE_ANCHORS = 2`）
  4. build + qa:geo 成功，`unsourced-spec` 减少
- **落点文件**：`src/data/anode-coatings.ts`、`src/data/anode-catalog.ts`、`src/data/anode-hubs.ts`、`src/data/coating-page-model.ts` 等
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`unsourced-spec` 27 → 8 左右（anode 部分归零）
- **回滚方式**：`git checkout -- src/data/anode-*.ts src/data/coating-page-model.ts`
- **人工抽检**：**必须由工程/业务方抽检**标准号是否与实物产线一致——写错标准号比不写更糟
- **上一个任务**：EX-E8　**下一个任务**：EX-F2

### EX-F2　溯源批 2（service 7 页）

- **状态**：`[ ]`
- **DoD**：同 EX-F1 的四项，落点 `src/data/service-steps.ts` 与 service 页面数据
- **落点文件**：`src/data/service-steps.ts`、`src/pages/titanium-service/[slug]/index.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`unsourced-spec` 继续下降；`no-eeat-signals` 3 → 0
- **回滚方式**：`git checkout -- src/data/service-steps.ts src/pages/titanium-service/`
- **人工抽检**：同上
- **上一个任务**：EX-F1　**下一个任务**：EX-F3

### EX-F3　溯源批 3（设备 4 页）

- **状态**：`[ ]`
- **DoD**：同 EX-F1 的四项，落点设备页数据（`hydrogen-generator-*`、`pem-electrolyzer-*`、`salt-chlorinator-*`、`sodium-hypochlorite-*`）
- **落点文件**：`src/data/*-sections.ts` 对应文件
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`unsourced-spec` 27 → 0
- **回滚方式**：`git checkout -- <本批实际改动文件>`
- **人工抽检**：同上
- **上一个任务**：EX-F2　**下一个任务**：EX-G1

### EX-G1　巡检门禁断言固化（防回归）

- **状态**：`[ ]`
- **DoD**：
  1. `scripts/qa/assertions.mjs` 增加通用 handler `fileContainsAll`（一个文件必须包含多个字符串）
  2. 增加 `routeTableExtractable` handler（检查 `<caption>` + `th[scope=col]` + `th[scope=row]` 三者齐全）
  3. 新增 `docs/tasks/seo-geo-gate.json`：断言全站表格可抽取、FAQPage 覆盖、WebPage 覆盖、plan 文件完整
  4. `npm run task:verify -- seo-geo-gate` 全绿
  5. 往 `docs/tasks/seo-geo-execution.json` **追加**各阶段断言，形成棘轮
- **落点文件**：`scripts/qa/assertions.mjs`、`docs/tasks/seo-geo-gate.json`、`docs/tasks/seo-geo-execution.json`
- **验收命令**：`npm run task:verify -- seo-geo-gate` 与 `npm run task:verify -- seo-geo-execution` 均全绿
- **期望计数变化**：计数不变（防回归任务）
- **回滚方式**：`git checkout -- scripts/qa/assertions.mjs docs/tasks/`
- **上一个任务**：EX-F3　**下一个任务**：EX-H1

## 6. 任务条目（P2：结构归口 + 阻塞项）

### EX-H1　industries 9 spoke 公共 RFQ 语下沉

- **状态**：`[ ]`
- **DoD**：
  1. 定位 9 个 spoke 页共享的两段公共 RFQ 引导语（"Send the service conditions…" / "Media, temperature, pressure…"）
  2. 下沉到 `/industries/` 汇总页或 `RFQForm` 组件，spoke 页只保留**本行业特有输入项**
  3. build + qa:geo 成功，跨页重复段落组数下降
- **落点文件**：`src/data/spoke/*.ts`（9 份）、`src/components/industry/IndustrySpoke.astro`、`src/pages/industries/index.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：跨页重复段落组 42 → ≤33
- **回滚方式**：`git checkout -- src/data/spoke/ src/components/industry/ src/pages/industries/`
- **上一个任务**：EX-G1　**下一个任务**：EX-H2

### EX-H2　ComparisonTable 接入 16 产品页

- **状态**：`[ ]`
- **DoD**：
  1. 每个产品页用 `src/components/ComparisonTable.astro` 渲染一张参数对比表
  2. 同一份数据经 `toSchemaProperties()` 生成 `Product.additionalProperty`
  3. 每项 `PropertyValue` 带 `unitText` 与 `description: "Source: …"`
  4. build + qa:geo 成功，`productPagesWithAdditionalProperty` 上升
- **落点文件**：`src/data/comparison-table-model.ts`、`src/components/ComparisonTable.astro`、`src/pages/titanium-products/*.astro` 或 `src/data/product-pages/*`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`productPagesWithAdditionalProperty` 0 → ≥16
- **回滚方式**：`git checkout -- <本批实际改动文件>`
- **上一个任务**：EX-H1　**下一个任务**：EX-H3

### EX-H3　MMO 几何对比表归 hub

- **状态**：`[ ]`
- **DoD**：
  1. 9 种 MMO 几何的对比表放在 hub 页 `/titanium-anode/mmo-anode/`
  2. 各几何页**内链引用**，不重复写 9 遍
  3. build + qa:geo 成功
- **落点文件**：`src/data/mmo-family-pages.ts`、`src/components/mmo/MmoProductPage.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`tablesExtractable` 不倒退；重复段落组下降
- **回滚方式**：`git checkout -- src/data/mmo-family-pages.ts src/components/mmo/`
- **上一个任务**：EX-H2　**下一个任务**：EX-H4

### EX-H4　检验文件段落归口 `/quality/`

- **状态**：`[ ]`
- **DoD**：
  1. 把 7 页共享的检验文件段落到 `/quality/` 或 `/inspection/` 权威页
  2. 各页改为内链引用，**停止重复叙述**
  3. build + qa:geo 成功，跨页重复段落组下降
- **落点文件**：`src/data/coating-page-model.ts`、`src/pages/quality/index.astro`
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：跨页重复段落组 ≤10
- **回滚方式**：`git checkout -- src/data/coating-page-model.ts src/pages/quality/`
- **上一个任务**：EX-H3　**下一个任务**：EX-H5

### EX-H5　material-testing-certificate 扩为权威中心

- **状态**：`[ ]`
- **DoD**：
  1. 扩写证书类型对照（2.2 / 3.1 / 3.2）
  2. 每种证书**能证明什么、不能证明什么**
  3. 第三方检测机构的角色边界
  4. build + qa:geo 成功
- **落点文件**：`src/pages/titanium-service/[slug]/index.astro`、对应数据文件
- **验收命令**：`npm run build` → `npm run qa:geo` → `npm run task:verify -- seo-geo-execution`
- **期望计数变化**：`thin-page` 9 → 减少；`unsourced-spec` 不倒退
- **回滚方式**：`git checkout -- src/pages/titanium-service/ src/data/service-steps.ts`
- **上一个任务**：EX-H4　**下一个任务**：无（进入 P1 收尾）

### EX-X1　GTAG 实配（**阻塞于人**）

- **状态**：`[ ]`（阻塞，需 GTM Container ID + GA4 Measurement ID）
- **DoD**：
  1. `.env` 与部署平台写入 `PUBLIC_GTM_ID` / `PUBLIC_GA4_ID`
  2. GA4 建事件维度 `ai_referrer_host`
  3. GTM 建查找表把 AI 主机名归一为 `AI Assistant`
  4. GA4 事件 `ai_landing` 在 DebugView 可见
  5. 详细步骤见 `docs/seo/ai-traffic-attribution.md`
- **落点文件**：`.env`、部署平台环境变量、GA4/GTM 控制台
- **验收命令**：`npm run build` → `dist/index.html` 含 `googletagmanager.com/gtm.js?id=GTM-XXXX`
- **期望计数变化**：无（构建产物变化）
- **回滚方式**：删除两个环境变量并重建
- **阻塞原因**：需要账号权限与两个 ID，AI 无法代为创建
- **上一个任务**：—　**下一个任务**：EX-X2

### EX-X2　Cookie 同意层（**阻塞于人**）

- **状态**：`[ ]`（阻塞，需法务文案与决策）
- **DoD**：
  1. 默认全拒绝 → 用户接受后才注入 GTM/GA4
  2. Google Consent Mode v2 三态（`default` / `denied` / `granted`）
  3. 欧盟/英国流量占比上来前上线
- **落点文件**：新组件 `src/components/CookieConsent.astro`
- **验收命令**：`npm run build` → 未同意时不加载第三方脚本
- **期望计数变化**：无
- **回滚方式**：`git checkout -- src/components/CookieConsent.astro` + 移除 BaseLayout 引用
- **阻塞原因**：需法务确认文案与同意策略
- **上一个任务**：EX-X1　**下一个任务**：EX-X3

### EX-X3　一手实测数据发布（**阻塞于人**）

- **状态**：`[ ]`（阻塞，需业务提供实测数据）
- **DoD**：
  1. 涂层厚度实测分布（XRF / 截面）
  2. 电位窗口实测曲线
  3. 寿命加速试验数据
  4. 第三方检测报告编号
  5. 发布在 `/quality/`，各产品页内链引用
- **落点文件**：`src/pages/quality/index.astro` + 各产品页内链
- **验收命令**：`npm run build` → `npm run qa:geo`
- **期望计数变化**：`no-eeat-signals` 3 → 0
- **回滚方式**：`git checkout -- src/pages/quality/ src/pages/titanium-products/`
- **阻塞原因**：新站无实测数据源，AI 不得编造测量值
- **上一个任务**：EX-X2　**下一个任务**：EX-X4

### EX-X4　原创性重写（**阻塞于人**）

- **状态**：`[ ]`（阻塞，需法务判定）
- **DoD**：若法务判定复刻内容需重写，则按判定范围改写；`/terms/` 的原创性声明属法律文本，**未经点名不得改**
- **落点文件**：`/terms/` + 各相关页
- **验收命令**：`npm run build` → `npm run qa:geo`
- **期望计数变化**：视判定范围而定
- **回滚方式**：`git checkout -- <本批实际改动文件>`
- **阻塞原因**：法律文本与商业判断，非 AI 可决
- **上一个任务**：EX-X3　**下一个任务**：无

---

## 7. 基线计数表（2026-11-19 基线，任何会话以此对照）

| 指标 | 基线 | 目标 | 主要相关任务 |
| --- | --- | --- | --- |
| 页面总数 | 77 | 不变 | — |
| `tablesExtractable` | **1** | 47 | EX-A1…A6 |
| `table-unquotable` | **46** | 0 | EX-A1…A6 |
| `webPageNodes` | **29** | 77 | EX-B1 |
| `schema-incomplete` | **31** | 0 | EX-C1、H2 |
| `sku` 缺失 | **29** | 0 | EX-C1 |
| `pagesWithVisibleFaqButNoNode` | **37** | 0 | EX-D1…D3 |
| `faqPages` | **40** | 77 | EX-D1…D3 |
| `productPagesWithAdditionalProperty` | **0** | ≥16 | EX-H2 |
| `scaled-content` | **12** | 0 | EX-E2…E8 |
| `unsourced-spec` | **27** | 0 | EX-F1…F3 |
| `no-eeat-signals` | **3** | 0 | EX-F2、X3 |
| `thin-page` | **9** | 0 | EX-H5、X3 |
| 跨页重复段落组 | **42** | ≤10 | EX-H1、H4 |

> **判据**：任何一项**倒退**即停手定位，不推进下一批。

---

## 8. 禁止事项（红线，任何任务都不得违反）

1. 不做 `llms.txt` 迷信——Google 明确**无独立 GEO 权重**，站点已有自动生成脚本，**不新增围绕它的优化**。
2. 不做短句切碎式改写——官方否定，且直接伤害可读性与专业可信度。
3. 不做隐藏文本 / 关键词堆砌 / Schema 伪装内容（cloaking）。
4. 不填虚构价格——`Product.offers` 无真实报价口径则**不挂**。
5. 无真实数据则**不写** `mpn` / `gtin`（不得用 SKU 充数）。
6. 不为降相似度而改写通用句式；不引入未经验证的数值。
7. 不改全局 CSS / Header / Footer / 主导航（除非任务显式点名）。
8. 不私自新增或修改任何内部 URL 路径。
9. **不修与本任务断言无关的失败**——发现了只写进收据「已知遗留」。
10. 不猜标准号、不猜参数值——不确定就写「按订单确认」。

---

## 9. 变更记录

| 日期 | 变更 | 原因 |
| --- | --- | --- |
| 2026-11-19 | 建立本文件、`execution-log.md`、`docs/tasks/seo-geo-execution.json` | 巡检完成后建立执行事实源，防止跑偏后无法接棒 |
| 2026-11-19 | 任务总数修正为 32（EX-A1…A6 = 6，B1 = 1，C1 = 1，D1…D3 = 3，E1…E8 = 8，F1…F3 = 3，G1 = 1，H1…H5 = 5，X1…X4 = 4） | 首次建立时口头写作 30，与表内实际条目数不符；按表内实际条目数校正 |
| 2026-11-21 | EX-A4 落点补 `src/components/grade/GradeHub.astro`，状态 `[ ]` → `[x]` | DoD 要求「10 个 grade 页」归零，第 10 页为 hub `/titanium-grades/`，其 3 张表由 GradeHub 渲染，只改 GradePage 仅覆盖 9 页 |
| 2026-11-21 | EX-B1 状态 `[ ]` → `[x]`，落点补 3 个 `breadcrumb` 引用修正文件 | `BreadcrumbList` 加 `@id` 后，原指向 `${origin}/#breadcrumb` 的旧引用会失效，需同步修正 anode/MMO 两个渲染器及其生成脚本 |
| 2026-11-21 | EX-D1 状态 `[ ]` → `[x]` | 16 个产品页（hub + 15 个单品页）接入 `BaseLayout` 的 `faq` prop，FAQPage 节点与页面可见 FAQ 同源 |
| 2026-11-21 | EX-D2 状态 `[ ]` → `[x]`，落点去掉 `src/data/service-steps.ts` | 服务详情页 FAQ 由 `service-steps.ts` 既有字段**派生**渲染，数据文件无需改动；仅 `[slug]/index.astro` 与 `index.astro` 两处落点 |
| 2026-11-21 | EX-D3 状态 `[ ]` → `[x]`，标题「其余 14 页」改为「站点页 6 个」，落点收敛为 6 个页面 + `scripts/seo/geo-audit.mjs` | 实测只有 6 个页面在 `<main>` 内有真实可见 FAQ；其余页面的 `visibleFaqBlocks` 全为 Header 移动菜单噪声。修正 `geo-audit.mjs` 的统计口径（只计 `<main>`）后计数才真实归零 |
| 2026-11-21 | EX-E2 状态 `[ ]` → `[x]`，落点补 `src/data/product-pages/titanium-plate.ts`、`standard.ts`、`src/components/product/ProductExtras.astro` | 本轮内容落在数据层与共享区块渲染器（新增 `detailSections` 区块类型），页面壳 `titanium-plate.astro` 未改；同时把 EX-E2 的「期望计数变化」按实测修正（见条目） |
| 2026-11-21 | EX-E3 状态 `[ ]` → `[x]`，落点改为 `src/data/product-pages/titanium-bolts.ts` + `titanium-forgings.ts`，「期望计数变化」按实测修正为 `scaled-content` 12 → 10 | 两页沿用 EX-E2 已建好的 `detailSections` / `specTable` 区块类型，共享渲染器无需再改；本组仅 2 页，故每页移除后 `scaled-content` 减 1，12 → 0 的原表述只在全部 6 组完成后才成立 |





