# SEO + GEO 联合巡检：风险整改清单与 GEO 增益清单

基准：Google 11 月核心更新（规模化内容与模板化内容降权）、AI Overviews / AI Mode 灰度规则、
Bing Copilot 引用优化。Google 官方立场：**不存在独立 GEO 权重**，AI 摘要复用主搜索索引。

数据来源：`npm run qa:geo` → `scripts/seo/geo-audit.mjs`，扫描 `dist/` 全量 77 页构建产物。
原始报告：`tmp/geo-audit/geo-audit.json`（全量字段）与 `tmp/geo-audit/geo-audit.md`（自动渲染版）。
本文件是人工成文的执行版，按修复顺序排列。

扫描快照：2026-11-19，77 页，164 项发现（33 项 high / 125 项 medium-low），157 项 GEO 机会。

---

## 0. 一页结论

| 维度 | 实测 | 判断 |
| --- | --- | --- |
| 站内模板化内容 | 12 页两两相似度 58.5%–68.4% | **本次核心更新的第一高危项**，集中在 `/titanium-products/*` |
| 参数溯源 | 27 个产品/技术页 0 个标准号锚点 | **第二高危项**，集中在 `/titanium-anode/*` 与 `/titanium-service/*` |
| 表格可抽取性 | 87 个表格，可抽取 **1** 个 | 46 个页面有表但无一可被 LLM 按行读取 |
| Product Schema | 31 个产品页，`additionalProperty` **0** 个 | 参数无法被答案引擎按属性对引用 |
| FAQPage | 40 页有节点，37 页有可见 FAQ 却无节点 | 问答对无法整段被引用 |
| WebPage 节点 | 29 / 77 页 | 全站缺口（HANDOFF:974 已记录的历史坑） |
| 埋点 | `gtag`/`GTM-`/`dataLayer` **0 命中** | 无法区分自然搜索与 AI 进站流量 |

**竞品复刻专项结论（最高危）**

本项目以对标复刻竞争网站为起点，站内证据显示：**复刻痕迹已经从"外部"传导到"内部"**——
16 个 `/titanium-products/*` 产品页彼此的正文 5-gram Jaccard 相似度达 58.5%–68.4%，
其中 `/titanium-products/titanium-bolts/` 与 `/titanium-products/titanium-forgings/` 达 **68.4%**。
这说明产品页已不是"复刻某一竞品"，而是**彼此互为模板**，直接命中规模化内容降权面。

站内自复制证据（42 组跨页重复段落，均已排除导航/页脚等站点通用块）：

| 重复段落（截断） | 涉及页面数 | 涉及路由 |
| --- | --- | --- |
| Confirm the titanium form, grade or order standard, the dimensions and the material evidence against the purchase specification. | 5 | `/cathodic-protection/`、`/titanium-anode/anti-fouling-system/`、`/titanium-anode/iridium-oxide-coated-titanium-anodes/`、`/titanium-anode/lead-dioxide-anode/`、`/titanium-anode/platinized-anode/` |
| Verify the dimensions, the identification, the visual condition, the packing and the agreed inspection or document package before shipment. | 6 | 上组 + `/cathodic-protection/reference-electrodes/` |
| Sampling, acceptance values, test methods and the supplied records are finalised in the quotation, the inspection plan or the approved order documents. | 7 | 上组 + `/hydrogen-generators/` |
| Send the service conditions, the material requirement and the drawing. A project engineer responds within 1 business day. | 9 | `/industries/*` 全部 9 个 spoke 页 |
| Media, temperature, pressure, current density, quantity and required documents... | 9 | `/industries/*` 全部 9 个 spoke 页 |
| We control the titanium identity, the plate preparation, the coating build, the gap and the sealing against the approved order basis... | 2 | `/salt-chlorinator-for-pool/`、`/sodium-hypochlorite-generator/` |
| Cutting, sizing, machining, forming, welding and finishing can be reviewed according to the product form, grade, dimensions... | 2 | `/faq/`、`/titanium-products/` |
| No. Thickness, total or precious-metal loading, application mass and surface elemental composition measured by XRF... | 2 | `/faq/`、`/titanium-anode/` |

**修复原则**：这些段落本身写得不错（专业、具体、无夸大），问题不在文本质量而在**分布方式**。
正确动作不是删内容，而是**按主题归口**：把 9 个 industries spoke 的两段公共 RFQ 引导语抽到
`/industries/` 汇总页或 `RFQForm` 组件，spoke 页只保留本行业的**特有输入项**；
把 7 页共享的检验文件段落到 `/quality/` 或 `/inspection/` 权威页，各页改为内链引用。

---

## 1. 风险整改清单（高优先级，影响本次核心更新排名）

### 1.1 `/titanium-products/*` — 16 页互为模板（最高优先）

**问题**：12 页被判为 scaled-content，两两相似度 58.5%–68.4%。

| 页面 | 最相似对象 | 相似度 |
| --- | --- | --- |
| `/titanium-products/titanium-bolts/` | `/titanium-products/titanium-forgings/` | 68.4% |
| `/titanium-products/titanium-forgings/` | `/titanium-products/titanium-bolts/` | 68.4% |
| `/titanium-products/titanium-diaphragm/` | `/titanium-products/titanium-foil-2/` | 67.6% |
| `/titanium-products/titanium-foil-2/` | `/titanium-products/titanium-diaphragm/` | 67.6% |
| `/titanium-products/titanium-fittings/` | `/titanium-products/titanium-flanges/` | 67.6% |
| `/titanium-products/titanium-flanges/` | `/titanium-products/titanium-fittings/` | 67.6% |
| `/titanium-products/titanium-balls/` | `/titanium-products/titanium-forgings/` | 67.6% |
| `/titanium-products/titanium-mesh/` | `/titanium-products/titanium-diaphragm/` | 66.1% |
| `/titanium-products/titanium-wire/` | `/titanium-products/titanium-forgings/` | 64.6% |
| `/titanium-products/titanium-coil/` | `/titanium-products/titanium-foil-2/` | 63.8% |
| `/titanium-products/titanium-clad-copper/` | `/titanium-products/titanium-bolts/` | 62.5% |
| `/titanium-products/titanium-baskets/` | `/titanium-products/titanium-diaphragm/` | 58.5% |

**修复动作（按页差异化，不是重写全部）**

1. 每个产品页必须写入**本页独有**的三类内容，缺一不可：
   - 该形态的**工艺路线**：例如 `/titanium-products/titanium-coil/` 写开卷/分条/退火/卷重，
     `/titanium-products/titanium-forgings/` 写环轧/闭式模锻/热处理窗口
   - 该产品的**失效模式**：例如 `/titanium-products/titanium-diaphragm/` 的膜片疲劳与焊接气孔，
     `/titanium-products/titanium-fittings/` 的密封面粗糙度与垫片压缩量
   - 该产品的**检测项差异**：例如 `/titanium-products/titanium-mesh/` 的丝径/网孔/目数检测，
     `/titanium-products/titanium-balls/` 的球径圆度与表面粗糙度
2. 把现在 16 页共用的"订单基础四要素"（材料/几何/加工/证据）压缩为**该产品的实际字段**：
   板材页写厚度/宽度/长度/平面度，线材页写直径/涂层长度/盘重/接头形式。
3. 每页新增一节 **"与相邻形态的差别"**，用一张 2–4 列的对比表明确本形态不适用于什么。
   这是同时解决 scaled-content 与 GEO 可抽取性的同一个动作。
4. **不要**做的事：不要为了降相似度改写通用句式（那是低价值动作），不要引入未经验证的数值。

**推荐 Schema 属性（每页补齐）**

| 属性 | 值来源 | 动作 |
| --- | --- | --- |
| `Product.category` | 产品族 | 新增，如 `Titanium Fasteners` |
| `Product.material` | 牌号 + UNS | 新增，如 `Grade 2 / UNS R50400` |
| `Product.additionalType` | 形态 | 新增，如 `Hex Bolt` / `Coiled Strip` |
| `Product.additionalProperty` | 对比表模型 `toSchemaProperties()` | 新增，见 §4 |
| `Product.image` | 页面主图绝对 URL | 新增 |
| `Product.sku` | 已有 `product-meta.ts` | 16 页补齐（部分页缺） |
| `Product.itemCondition` | `NewCondition` | 新增（B2B 报价站按新品） |
| `Product.offers` | 挂 `Offer` + `priceSpecification` | 有报价口径时才挂，**不要**填假价格 |

### 1.2 `/titanium-anode/*` — 19 页 0 个标准号锚点

**问题**：`unsourced-spec`（high），页面发布了电流密度窗口、电位窗口、涂层负载、寿命等参数，
但**一个标准号都没有**。这是"无溯源佐证的参数说明页"，正是本次核心更新与 GEO 引用的双重高危。

涉及路由（19 个 Product/技术页）：
`/titanium-anode/`、`/titanium-anode/anti-fouling-system/`、`/titanium-anode/coating-systems/`、
`/titanium-anode/iridium-oxide-coated-titanium-anodes/`、`/titanium-anode/lead-dioxide-anode/`、
`/titanium-anode/mmo-anode/`、`/titanium-anode/mmo-anode/mmo-canister-anode/`、
`/titanium-anode/mmo-anode/mmo-disc-anode/`、`/titanium-anode/mmo-anode/mmo-linear-anode/`、
`/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/`、`/titanium-anode/mmo-anode/mmo-ribbon-anode/`、
`/titanium-anode/mmo-anode/mmo-rod-anode/`、`/titanium-anode/mmo-anode/mmo-tubular-anode/`、
`/titanium-anode/mmo-anode/mmo-wire-anode/`、`/titanium-anode/platinized-anode/`、
`/titanium-anode/ruthenium-coated-titanium-anodes/`，另加
`/hydrogen-generators/`、`/pem-electrolyzer/`、`/salt-chlorinator-for-pool/`、
`/sodium-hypochlorite-generator/`。

**修复动作**

1. 每个参数值后补出处，取值只允许四类，**不允许第三类**：
   - **标准**：ASTM B348（钛棒/坯）、ASTM B265（板带）、ASTM B338/B861/B862（管）、
     NACE TM0166（涂层测试）、NACE TM0389（CP 检验）、ISO 15589（CP 设计）、
     AWS A5.1（焊材）、ISO 8501（涂装体系）、ASTM B381（锻件）
   - **牌号**：UNS R50250 / R50400 / R56400 / R52400 / R53400 / R56407
   - **证书**：EN 10204 3.1 / 3.2、PMI（材料成分识别）
   - **状态**：无法给通用值的写"按订单确认"，并写清需要哪一项输入才能定值
2. 每个 MMO 家族页新增一张**涂层体系对比表**（行=涂层体系，列=适用反应/工况/电位窗口/寿命），
   用 `ComparisonTable.astro` 渲染。这是 9 个 MMO 几何页共同需要的高价值资产，
   放在 hub 页 `/titanium-anode/mmo-anode/`，几何页内链引用，**不要**在 9 个几何页各写一遍。
3. 每个阳极页新增"**不适用边界**"一节：本工艺在何种介质/电流/温度下不推荐使用。
   这一节是 AI Overviews 最常引用的段落类型，且竞品通稿普遍没有。

**推荐 Schema 属性**：在 §1.1 属性表基础上，额外补 `Product.additionalProperty` 中的
`额定电流密度`、`使用电位窗口`、`设计寿命`、`适用介质`、`涂层体系` 五项，带 `unitText` 与 `description: "Source: …"`。

### 1.3 `/titanium-service/*` — 7 页 0–1 个锚点 + 薄内容

**问题**：`unsourced-spec`（high）、`no-eeat-signals`（medium）、`thin-page`（low）三重命中。
`/titanium-service/cnc-machining/`、`/titanium-service/forming-bending/`、
`/titanium-service/surface-treatment-finishing/` 三页连一手信号都检不出（0 个工况/检验/第三方证据）。

**修复动作**

1. 每个 service 页写明：设备类型与**公差能力区间**、可用检测手段（CMM/三坐标/UT/RT/PMI）、
   典型最短交期与**该交期的适用条件**、不合格处置方式。
2. `/titanium-service/material-testing-certificate/` 是全站**唯一**天然权威页
   （当前仅 1 个锚点），应扩为 `/quality/` 权威内容中心：
   证书类型对照（2.2 / 3.1 / 3.2）、每种证书能证明什么、不能证明什么、
   第三方检测机构的角色边界。其他页改为内链到它，**停止重复叙述证书类型**。

### 1.4 中优先级（46 页表格不可抽取）

**问题**：`table-unquotable`，87 个表格中仅 1 个可抽取（`/industries/`）。

涉及路由：全部含表的 46 页（`/applications/`、`/cathodic-protection/` 及其 reference-electrodes、
`/hydrogen-generators/`、9 个 `/industries/*` spoke、`/industries/`、`/pem-electrolyzer/`、
`/salt-chlorinator-for-pool/`、`/sodium-hypochlorite-generator/`、19 个 `/titanium-anode/*`、
10 个 `/titanium-grades/*` 及 hub、`/titanium-machining-parts/`、`/titanium-products/`、
`/titanium-products/titanium-tubing/`、`/titanium-service/`）。

**修复动作**：统一改用 `src/components/ComparisonTable.astro` 渲染，强制：
`<caption>` 必写（写清比较对象与条件）、列头 `<th scope="col">`、首列 `<th scope="row">`、
单位进表头、每值带 `sourceRef`。排版规范见 `docs/seo/product-comparison-table-template.md` §3。

**注意**：该组件是新增的**未接入**组件（DoD 范围是产出组件与模板，不含改写 46 个页面）。
实际接入需新一轮任务。

### 1.5 中优先级（37 页可见 FAQ 无 FAQPage 节点）

**问题**：`faq-unstructured`。页面有可见 FAQ 区块，但 JSON-LD 无 `FAQPage` 节点，
答案引擎无法整段引用。

涉及路由（37 个）：`/`、`/404.html`、`/applications/`、`/company/`、`/contact/`、`/faq/`、
`/knowledge-center/`、`/manufacturing-capabilities/`、`/our-team/`、`/quality/`、`/terms/`、
`/titanium-anode/`、`/titanium-anode/coating-systems/`、`/titanium-machining-parts/`、
`/titanium-products/` + 其下 16 个产品页、`/titanium-service/` + 其下 6 个 service 页。

**修复动作**：页面已有 FAQ 数据源（`src/data/faqs-data.ts` 等），
统一用**同一份数据**生成 `FAQPage`（`Question` / `acceptedAnswer`），
保证 JSON-LD 文本与页面可见答案**逐字一致**。`/titanium-anode/mmo-anode/*` 已有正确实现可作样板。

### 1.6 中低优先级

| 规则 | 数量 | 涉及 | 动作 |
| --- | --- | --- | --- |
| `schema-incomplete` | 31 | 全部 Product 页 | 按 §1.1 属性表补齐；`additionalProperty` 由对比表模型自动生成 |
| `no-eeat-signals` | 3 | `/titanium-service/cnc-machining/`、`forming-bending/`、`surface-treatment-finishing/` | 补工况与检验证据，见 §1.3 |
| `thin-page` | 9 | `/contact/`、`/knowledge-center/`、`/our-team/`、`/titanium-service/*` 6 页 | 补实质内容（参数/工况/证据），不以模板句充数 |

---

## 2. Schema 审计结果 + 缺失字段补全方案

### 2.1 节点覆盖（77 页实测）

| 节点 | 覆盖页数 | 判定 |
| --- | --- | --- |
| `Organization` | 77 | 全覆盖 |
| `WebSite` | 77 | 全覆盖 |
| `BreadcrumbList` | 77 | 全覆盖 |
| `Product` | 31 | 仅产品页，**29 个产品页缺 `sku`** |
| `FAQPage` | 40 | **37 页有可见 FAQ 却无节点** |
| `WebPage` | 29 | **48 页缺失**（HANDOFF:974 历史坑） |
| `ImageObject` | 2 | 几乎全缺，产品页应有主图节点 |

### 2.2 Product 节点缺失字段（31 页统一缺）

| 缺失字段 | 优先级 | 补全方式 |
| --- | --- | --- |
| `additionalProperty` | **P0** | 对比表模型 `toSchemaProperties()` 自动生成 |
| `category` | **P0** | 产品族常量，来自 `src/data/product-meta.ts` 同源 |
| `material` | **P0** | 牌号 + UNS，来自各页已有数据 |
| `additionalType` | **P0** | 形态名，来自各页已有数据 |
| `image` | P1 | 页面主图绝对 URL |
| `sku` | P1 | 29 页缺失，从 `product-meta.ts` 补齐 |
| `itemCondition` | P1 | `https://schema.org/NewCondition` |
| `offers` | P2 | 有报价口径再挂 `Offer`；**不得填虚构价格** |
| `mpn` / `gtin` | P2 | 无真实数据则**不写**，不要用 SKU 充数 |
| `isVariantOf` | P2 | 仅当有 ProductGroup 变体关系时写 |

### 2.3 WebPage 节点（48 页缺失）

在 `BaseLayout` 的 `@graph` 中统一追加 `WebPage` 节点，承载：
`name`（= title）、`description`、`url`（= canonical）、`inLanguage`、
`isPartOf` → `WebSite.@id`、`breadcrumb` → `BreadcrumbList.@id`、
`primaryImageOfPage` → `ImageObject`、`datePublished` / `dateModified`（取 `astro.config.mjs`
已有的 `pageLastmod` 机制）、`publisher` → `Organization.@id`。

### 2.4 FAQPage 节点（37 页缺失）

`mainEntity` 用 `Question` / `acceptedAnswer`；答案文本取页面可见 FAQ 的**原文**，
不重新措辞、不截断、不加 Schema 专属前缀。

### 2.5 表格 → Schema 的正确映射

`schema.org` **没有** `Table` / `SpecSheet` 类型，不要虚构。用：

- 单页一张对比表 → `Product.additionalProperty`（`PropertyValue` 数组）
- 单页多主体（9 种 MMO 几何）→ 追加 `ItemList` + `ListItem` + `itemListElement`

`PropertyValue` 命名规则 `{参数} — {主体}`，条件拼进 `value`，出处写进 `description`。

---

## 3. AI 流量归因埋点校验与配置步骤

**校验结论**：全库检索 `gtag` / `GTM-` / `googletagmanager` / `dataLayer` → **0 命中**。
站点当前**完全没有** Google Tag 事件上报，GA4 侧无会话来源可拆，
**无法区分普通自然搜索与 AI Overviews / AI Mode / Bing Copilot 进站流量**。

**本轮落地**：`src/layouts/BaseLayout.astro` 已加 env 门控接入点：
读 `PUBLIC_GTM_ID` 与 `PUBLIC_GA4_ID`，**两者都为空时不输出任何脚本、不初始化 `dataLayer`、不写 Cookie**，
构建产物与今日等价。新站无数据，**不接入第三方脚本、不做 Cookie 同意层**。

**配置步骤、GA4 自定义维度、GTM 查找表、验证方法**：见 `docs/seo/ai-traffic-attribution.md`。

关键边界（务必知悉）：
- ChatGPT / Perplexity / Claude / Copilot 的引用点击**带 referrer**，可被 `ai_referrer_host` 捕获
- **Google AI Overviews / AI Mode 的内部点击 referrer 仍是 google**，无法与普通自然搜索区分，
  只能靠落地页路径 + Search Console 查询词 + 后续行为（RFQ 转化）间接拆解

---

## 4. GEO 正向优化清单（按优先级）

优先级依据：答案引擎引用产品页时，摘取的是**属性对**与**问答对**，其次是**可抽取表格**，
最后才是段落。因此顺序是 参数 → 实测/溯源 → 对比内容 → FAQ。

### P0 — 参数结构化（31 个 Product 页）

- [ ] 每个产品页用 `ComparisonTable.astro` 渲染一张参数对比表
- [ ] 同一份数据经 `toSchemaProperties()` 生成 `Product.additionalProperty`
- [ ] 每项 `PropertyValue` 带 `unitText` 与 `description: "Source: …"`
- [ ] 补 `category` / `material` / `additionalType` / `image` / `itemCondition`

### P0 — FAQ 结构化（37 页）

- [ ] 可见 FAQ → `FAQPage` 节点，答案逐字一致
- [ ] 优先做对比型问题：「Grade 2 与 Grade 5 怎么选」「MMO 与铂钛阳极哪个更耐氯」
      「板材与管材的检验差异」——这些是 AI Overviews 与 Copilot 最高频的问题形态

### P0 — 对比表可抽取（46 页）

- [ ] 统一 `<caption>` + `scope` + 单位进表头
- [ ] 每值带条件或"按订单确认"，每值带出处
- [ ] 无 `rowspan` / `colspan`
- [ ] 9 种 MMO 几何的对比表放 hub 页，几何页内链，**不重复写 9 遍**

### P1 — 溯源与一手证据（27 页）

- [ ] 每个技术页补标准号锚点（ASTM / NACE / ISO / EN / AWS + 版本）
- [ ] 每个技术页补一手信号：工况条件、检验与文件边界、第三方检测方式、工艺说明
- [ ] 已有锚点页（`/titanium-grades/*`、`/titanium-products/titanium-plate/` 等 6 锚点以上）
      提炼为独立小节，形成可整段引用的结构

### P1 — 工况与边界独立成节（16 个产品页已具备条件）

- [ ] 把已有工况条件从段落中抽出为 **"工况与适用边界"** 小节
- [ ] 每节首句给出结论，随后给条件，最后给不可用的情形

### P2 — 一手实测数据（本轮无数据，需业务侧补）

新站没有实测数据源，以下为**待补数据位**，不是本轮动作：
涂层厚度实测分布（XRF/截面）、电位窗口实测曲线、寿命加速试验数据、
第三方检测报告编号。补齐后应发布在 `/quality/` 并在各产品页内链引用。

---

## 5. 可直接复用的产品参数对比表 Markdown 模板

完整模板、语义 HTML 规范、排版规范、Schema 映射与自检清单：
`docs/seo/product-comparison-table-template.md`

摘要：

```markdown
### {产品族} 参数对比

| 参数 | {主体A} | {主体B} | {主体C} |
| --- | --- | --- | --- |
| 牌号 / UNS | {值} | {值} | {值} |
| 抗拉强度 (MPa) | {范围} | {范围} | {范围} |
| 最高使用温度 (°C) | {范围} | {范围} | {范围} |
| 适用介质 | {介质与浓度} | {介质与浓度} | {介质与浓度} |
| 电流密度 (A/m²) | {范围 @ 条件} | {范围 @ 条件} | {范围 @ 条件} |
| 适用电位窗口 (V) | {窗口} | {窗口} | {窗口} |
| 设计寿命 (年) | {范围} | {范围} | {范围} |
| 供货形态 | {形态} | {形态} | {形态} |
| 检验文件 | {文件类型} | {文件类型} | {文件类型} |

来源：{标准号 + 版本、UNS、证书类型、第三方检测}
```

填写纪律：单位进表头；值给范围不给"约"；条件跟值走；无法给通用值的写"按订单确认（需图纸/工况）"；
每个值带出处；首列必须是参数名；不跨行合并单元格。

---

## 6. 本轮不做的事（Google 官方立场与范围约束）

- 不做 `llms.txt` 迷信：站点已有 `scripts/seo/build-llms-txt.mjs` 自动生成，
  但 Google 明确**没有独立 GEO 权重**，AI 摘要复用主搜索索引。本轮不新增任何围绕该文件的优化。
- 不做短句切碎式改写：官方否定，且直接伤害可读性与专业可信度。
- 不做隐藏文本、关键词堆砌、Schema 伪装内容。
- 不接入第三方脚本、不做 Cookie 同意层（无 ID、无流量、无合规准备）。
- 不改写 46 个页面的表格、不补 37 页的 FAQPage、不补 48 页的 WebPage：
  这些是**清单内容**，实际改写需新一轮任务。
- `/terms/` 原创性声明（"本站内容为独立工程整理，非转载"）属法律文本，未点名，本轮不动。

---

## 7. 复现方式

```
npm run build       # 77 页
npm run qa:geo      # 输出 tmp/geo-audit/geo-audit.json 与 geo-audit.md
```

判定阈值写在 `scripts/seo/geo-audit.mjs` 顶部常量：
`CLONE_THRESHOLD = 0.55`、`MIN_TRACE_ANCHORS = 2`。
调低 `CLONE_THRESHOLD` 会暴露更多模板簇，调高则只报极端重复。



