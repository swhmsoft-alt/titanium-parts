# titanium-parts.com 无实体阶段去伪改写工单（交付 Cline 执行）

- 工单日期：2026-11-16
- 目标站：https://titanium-parts.com/
- 业务约束：**尚未注册公司、无自有工厂实图、无自有团队**；策略为先做 SEO / AI SEO 获取询盘，后续再注册主体。
- 执行原则：
  1. 先审计后改：每处改动保留原文对照，不改动无法核实的业务事实；禁止补造营业执照、证书、年限、面积、员工数、客户 logo、案例、合影。
  2. 面向欧美买家，对外文案**只用英文**，不出现中文、国标（GB）信息；标准引用仅用可核验的 ASTM / ISO / EN 等。
  3. 定位口径：**独立的工程选型与采购协调方（independent engineering & sourcing coordinator）**，生产由合格合作车间完成，我方负责规格定义、图纸审核、选型、跟单与单证协调。
  4. 路由到源文件：Astro 项目中按 URL 路由对应 `src/pages/**/*.astro`；全站通用文案（页眉/页脚/Organization Schema）在共享 Layout / 组件中，**只改一处、全站生效**。
  5. 改造期站点保持隔离：`robots.txt` `Disallow: /`，页面 `<meta name="robots" content="noindex,nofollow">`；去重与改写全部完成前，生产域名不开放索引。

---

## P0｜上线前必须完成（拆除不可核验承诺 + 隔离抓取）

### P0-1 抓取隔离

| 项 | 当前 | 要求 |
|---|---|---|
| `robots.txt` | `User-agent: * Allow: /` | 改造期改为 `User-agent: * Disallow: /`；sitemap 提交暂时关闭 |
| 页面 robots meta | 全站无 noindex | 每个页面 `<head>` 增加 `<meta name="robots" content="noindex,nofollow">` |
| 隔离解除条件 | — | P0 全部拆除 + P1 基础内容改写完成后，再恢复 `Allow: /`、移除 noindex，并在 GSC 提交 sitemap |

### P0-2 全站禁用词清理（共享组件先改）

**禁用表述（出现即改）：**

- `factory-direct` / `Factory-direct` / `factory direct`
- `Direct Factory`
- `Factory-Direct Manufacturing`
- `our factory` / `our facilities` / `our workshop`
- `built in-house` / `in-house`（指自产时）
- `our team`（暗示自有员工团队时）
- `a decade` / `over the past decade` / 具体成立年份与发展历程
- 具名/具职级的公司管理层头衔（见 P0-5）

**允许替换口径（推荐词库）：**

| 含义 | 允许英文表述 |
|---|---|
| 身份定位 | independent engineering & sourcing resource for titanium products, coated anodes and electrochemical components |
| 生产关系 | qualified production partners / partner workshops in China |
| 我方职责 | specification definition, drawing review, selection support, order follow-up, inspection and documentation coordination |
| 买家价值 | one technical contact instead of coordinating multiple suppliers |
| 供应角色 | technical supply coordinator（不自称 manufacturer / factory） |

### P0-3 删除残留第三方主体与虚构历史（About 页）

**位置：`/company/`（推测源文件 `src/pages/company.astro`）**

- 删除整句（残留真实第三方主体名 + 虚构起始年份）：

```text
Titanium Parts is the international industrial brand of Ningbo Alto Nanotag Technology Co., Ltd. The business began in 2013 and developed from titanium materials and custom fabrication into titanium anodes, electrochemical solutions and PEM hydrogen systems.
```

- 删除「A Decade of Capability Growth」整段时间线模块，含六个年份节点：`2013 / 2016 / 2019 / 2022 / 2024 / 2026` 及其对应历程文案（如 `Built our manufacturing foundation…`、`Launched MMO and platinized…`、`Entered the green hydrogen sector…`）。
- 删除段中自产承诺：`…and complete PEM electrolyzer systems for green hydrogen as the advanced layer — all built in-house.`
- 删除「Over the past decade, we have expanded…」年限叙述。

### P0-4 删除虚构场地地址（Schema + 页面）

**全站 Organization JSON-LD 与联系页中的三地址数组必须移除：**

```json
"address":[
  {"@type":"PostalAddress","streetAddress":"Titanium Valley, Baoji City, Shaanxi Province, China","addressLocality":"Baoji City","addressRegion":"Shaanxi Province","addressCountry":"China"},
  {"@type":"PostalAddress","addressLocality":"Ningbo","addressCountry":"China"},
  {"@type":"PostalAddress","addressLocality":"Dongguan","addressCountry":"China"}
]
```

- Schema：删除整个 `address` 数组；不写 `foundingDate`、不写 `addressCountry` 级别的自有场地。
- 页面：删除 Baoji / Ningbo / Dongguan 三个场地卡片与「Our engineering center and main manufacturing hub.」「across our Baoji, Ningbo and Dongguan facilities.」等表述。
- 地区表述如需保留，仅可写采购集群层面的中性描述，如 `Sourcing base in the Baoji titanium industrial cluster, China`，不得写成自有厂区地址。

### P0-5 拆除虚构组织架构（Our Team 页）

**位置：`/our-team/`（推测源文件 `src/pages/our-team.astro`）**

删除以下 6 个角色卡片及其 bio（虚构管理层/人员）：

| 删除角色 | 删除 bio 原文 |
|---|---|
| Managing Director | Owns company direction, key accounts and long-term supply programmes, and is the escalation point for commercial commitments. |
| Technical Director | Approves material specifications, joining procedures and engineering deviations before they enter a quotation. |
| Anode Engineering Manager | Reviews substrate geometry, coating selection and current density assumptions for mixed-metal-oxide and platinized anodes. |
| PEM Systems Engineer | Defines stack architecture, balance-of-plant interfaces and control scope for PEM electrolyzer projects, and plans factory testing. |
| Quality & Documentation Lead | Runs the material certificate, inspection report, coating record and release document flow for every shipment. |
| Project Engineer | Handles day-to-day buyer communication, drawing review, sample coordination and order scheduling. |

**替换为单一对接块（不写姓名、不设总监/经理职级）：**

```text
Application & Quotation Contact
Drawing review, grade and coating selection, sample coordination, and order follow-up are handled through one technical contact. Send drawings, operating conditions and quantity for a specification review.
```

- 导航中可先将 Our Team 入口下线；团队头像类占位图一并移除（当前页面无真人头像，仅需删卡片）。

### P0-6 图片残留与媒体清理

1. 沿用既有《hele 修复工单》：2 张图、7 处引用改名，清除 EXIF。
   - `mmo-rod-anode-mmo-rod-anode-hele-titanium.webp` → `mmo-rod-anode-titanium.webp`（5 处）
   - `mmo-tubular-anode-mmo-tubular-anode-hele1.webp` → `mmo-tubular-anode-anode-1.webp`（2 处）
2. 全站排查复刻产品图 / 场景图：未替换前不得标注为自有车间、自有设备、自有团队实拍。
3. 无实图期间可用素材：自有 CAD 截图、2D 结构/剖面示意图、材质与涂层原理图、参数表视觉化、标注为 render 的 3D 渲染、可商用中性工业图库；**禁止**用 AI 图或图库图冒充自有工厂/员工。
4. 图片文件名统一为「核心产品词-短横线英文」；导出前清除 EXIF 拍摄信息、设备信息与版权注释。

---

## P1｜逐页改写工单（TDK + 正文 + Schema）

### 1. 首页 `/`

**TDK**

| 项 | 原文（Old） | 改为（New） |
|---|---|---|
| H1 | Titanium Products Manufacturer & Engineering Supplier | Titanium & Anode Sourcing and Engineering Support |
| Meta Description | Factory-direct titanium materials, precision-machined components, engineered anodes and PEM electrolyzer systems for global OEMs, EPC contractors and system integrators. | Titanium mill products, coated anodes and electrochemical components, specified and coordinated for OEMs, EPC contractors and system integrators through qualified production partners in China. |
| 页脚 Tagline | Factory-direct manufacturer and engineering supplier of titanium products, titanium anodes, and PEM electrolyzer systems for global OEMs, EPC contractors, and system integrators. | Independent engineering and sourcing support for titanium products, coated anodes and electrochemical components, coordinated with qualified production partners for global industrial buyers. |

**正文块替换**

- Hero 副文案原文：`Factory-direct titanium materials, precision-fabricated components, engineered titanium anodes, and PEM electrolyzer systems for global OEMs, EPC contractors, system integrators, and industrial projects`
  → New：`Titanium materials, coated anodes and electrochemical components, specified to your drawing and operating conditions and coordinated through qualified partner workshops in China.`
- 能力卡 `Factory-Direct Manufacturing` 标题 → `Specification & Supply Coordination`；其 desc `Factory-direct titanium plates, sheets, rods, tubes, fittings, fasteners, and custom CNC parts.` → `Titanium mill products, fittings, fasteners and custom components, reviewed for grade, dimension and documentation before supply.`
- 信任条 `Direct Factory · Engineering Supplier` → `Engineering Support · Coordinated Supply`
- 全站导航/页眉中 `Direct Factory` 同类标签同步替换。

**Schema（首页 Organization）**

- `description` 改为：`Independent engineering and sourcing resource for titanium products, coated anodes and electrochemical components, coordinated with qualified production partners in China.`
- 删除 `address` 三地址数组；不新增 `foundingDate`。
- `WebSite.description` 同步改为协调方口径；`publisher` 指向保留。
- 保留 `ContactPoint`（邮箱、电话、可用语言）。

### 2. 关于页 `/company/`

**TDK**

| 项 | 原文 | 改为 |
|---|---|---|
| Title | About Titanium Parts \| Manufacturer & Engineering Supplier | About Titanium Parts \| Engineering & Sourcing Support |
| H2 | Titanium Products Manufacturer & Engineering Supplier | Titanium & Anode Engineering and Sourcing Support |
| Hero Desc | Factory-direct titanium products, anodes, and PEM electrolyzer systems for OEMs, EPC contractors, and system integrators worldwide. | Titanium products, coated anodes and electrochemical components, reviewed and coordinated for OEMs, EPC contractors and system integrators worldwide. |

**正文块替换**

- 首段原文：`Titanium Parts is a factory-direct titanium products manufacturer and engineering supplier for global OEMs, EPC contractors, and system integrators. Our capability builds in three layers: titanium materials as the traceable foundation; MMO titanium anodes as the value-added layer; and complete PEM electrolyzer systems for green hydrogen as the advanced layer — all built in-house.`
  → New：`Titanium Parts is an independent engineering and sourcing resource for titanium mill products, coated anodes and electrochemical components. We work with qualified partner workshops in China, and coordinate specification review, drawing check, production follow-up, inspection and documentation so buyers deal with a single technical contact.`
- 业务分层段（Three Connected Product Businesses）保留产品族划分，但把「自产层」措辞改为「我方协调供应的产品族」：钛材、MMO/镀铂阳极、PEM 相关部件；**不写** complete PEM systems 自产集成能力，除非后续有合作方可证明。
- 优势段 `Factory-direct supply, custom engineering, traceable quality documents, application-specific support, and long-term project cooperation.`
  → `Specification review, application selection support, coordinated inspection and documentation, and responsive follow-up for ongoing projects.`
- 客户对象段保留：`Global OEMs, EPC teams, system integrators, hydrogen developers, water treatment companies, and industrial project buyers.`（事实性描述，不改）

### 3. 质量页 `/quality/`

**原则：** 当前页面把 CMM、XRF PMI、压力/气密试验、过程巡检等写成自有实验室与自有质检团队；无实体阶段必须降级为「与合作车间 / 第三方检验协调安排」。

**TDK**

| 项 | 原文方向 | 改为 |
|---|---|---|
| Title/H1 | 暗示自有质量体系与产线检验 | Quality Documentation & Coordinated Inspection for Titanium Components |

**正文口径调整（逐块）**

- Hero 原文：`Titanium Parts' quality system covers incoming material verification, in-process dimensional checks, surface and coating inspection, mechanical testing, and order-specific documentation aligned to the agreed scope.`
  → New：`For each order, we coordinate material verification, dimensional and surface checks, coating inspection where applicable, and the documentation package agreed in the inspection and test plan with our production partners.`
- 八个巡检点模块：把主语从「我们自有设备/自检」改为「按约定检验计划在合作车间或第三方执行、我方跟单归档」。
  - `CMM, calipers, gauges and surface plates used to verify part geometry…` → `Dimensional records are checked against drawing tolerance at the partner workshop or an agreed third-party inspection.`
  - `Handheld XRF PMI used to confirm grade composition…` → `Grade composition is confirmed through mill certificates and PMI arrangements where required by the agreed plan.`
  - `XRF composition records, coating loading and adhesion review…` → `Coating composition, loading and adhesion records are reviewed from the partner's coating documentation, with retest arranged when specified.`
  - `PEM stack assembly review, pressure / leak tests…` → `Assembly and functional checks follow the agreed test scope; reports are compiled into the shipment document package.`
- 文档段保留并强化（这是无实体阶段最可承诺的价值）：MTC / 材质证书、批次记录、等级核验、尺寸与表面检验报告、焊接记录、包装清单、符合性声明、 datasheet；注明 `type and scope agreed per order`。
- **禁止**出现：ISO 9001 / 体系认证编号、自有实验室、自有质检团队人数、设备资产清单（除非后续取得可证明材料）。

### 4. 产能/能力页 `/manufacturing-capabilities/`

**正文口径**

- 原文：`…and PEM electrolyzer assembly across our Baoji, Ningbo and Dongguan facilities.`
  → New：`Titanium processing, anode coating and assembly support are coordinated through qualified partner workshops, with specification, follow-up and documentation handled by our engineering contact.`
- 三场地卡片（Baoji - Titanium Valley / Dongguan - PEM Assembly / Ningbo - Project Coordination）删除或改为「协作网络角色」，不标注为我方场地。
- 拆成两栏表述：
  - **What we engineer & coordinate**：选型、图纸审核、规格与标准确认、跟单、检验安排、单证。
  - **What partner workshops produce**：加工成型、表面处理、涂层、装配；具体工艺能力仅填写合作方可实际交付的范围。

### 5. 联系页 `/contact/`

- 删除三地址 Schema 与「Our engineering center and main manufacturing hub.」表述。
- 保留联系渠道：邮箱 `sales@titanium-parts.com`、电话/WhatsApp；联系表单字段（产品族、图纸、工况、数量、交期目标）保留。
- 联系页 Schema 如有 `ContactPage` 可保留；`PostalAddress` 移除。
- 响应时间表述（如 `within 1 business day`）仅在确有能力兑现时保留，否则改为中性 `We respond on China business days.`

### 6. 产品页（31 个 Product，含 rod / tubular 等阳极与钛材页）

**通用规则（逐页执行）**

1. 删除产品描述中的 `factory-direct` / `our factory` / `in-house production` 等自产措辞，改为 `coordinated with qualified partner workshops`。
2. 技术事实（牌号、尺寸范围、涂层体系、电流密度、工况、执行标准）**保留**，但只填可由合作方交付、可核验的范围；不确定的参数表先留区间或 `available to drawing`，不照搬对手数值。
3. 重写与对手逐字雷同的 Title / Meta Description / H1 / 正文段落与 alt（当前 rod 正文重叠约 82%、tubular 约 84%，优先处理这两页）。
4. 参数表重建：按牌号（Gr1/Gr2/Gr5 等）、标准（ASTM B265/B338/B348/B381/B863 等，仅保留真实适用项）、涂层、工况分组；不复制对手整表数值。
5. 产品 `Product` Schema 保留；`Brand` 指向 `Titanium Parts`；移除任何暗示自有工厂产地的字段；`image` 补齐 `ImageObject`（caption、尺寸、版权说明）。
6. FAQPage 保留，答案随正文重写同步更新，去除与对手雷同的问答表述。

---

## P1-补｜注册前可做的 SEO / GEO 内容补强（不依赖企业实体）

- **内容集群**：按产品族 + 工况 + 选型问题产出选购指南（阳极选型、钛材牌号选择、涂层体系对比、ICCP 工况匹配、水处理/氯碱/电积应用），每篇配结构化参数表 + FAQ + 内链。
- **实体建模（诚实口径）**：统一产品、牌号、标准、应用场景命名；产品页 ↔ 应用页 ↔ 指南 ↔ FAQ 内链互通。
- **Schema 补齐**：指南文章上 `Article`（作者写工程角色，不写虚构人名）；总览页补 `ItemList` / `CollectionPage`；主图补 `ImageObject`。
- **E-E-A-T 替代信号**：技术深度、可核验标准引用、透明 sourcing 模式、明确响应流程、真实联系渠道、工程师视角署名内容；无证据不放认证/年限/面积/客户 logo/具名员工。
- **GEO 优先长尾**：参数对比表 + 清晰问答 + 标准引用，争取选型类问题（如 `MMO rod anode current density for soil ICCP`）被 AI 引用。

---

## P2｜注册公司后再升级（本阶段不做）

1. 补真实主体：注册名称、营业执照、对公联系信息，更新 Organization Schema 的 `legalName` / `address`。
2. 上传真实素材：工厂/车间/设备/团队实景照、认证证书、MTC 样本、可公开工程案例与客户背书（取得授权后）。
3. 定位升级：在具备可证明产能与体系后，再将口径从 sourcing coordinator 升级为 manufacturer / verified supplier，并同步 TDK、Schema 与对外承诺。
4. 扩展多语言与外链：英文站排名与 AI 引用稳定后，再评估西语等版本；行业目录、B2B 平台、合作伙伴外链逐步建设。

---

## 验收清单（改动完成后逐项核对）

### 文本与实体

- [ ] 全站 grep 禁用词 `factory-direct|factory direct|Direct Factory|our factory|our facilities|in-house|built in-house|a decade|2013|Ningbo Alto Nanotag` 命中数为 0（历史年份仅允许出现在真实可证明的语境）。
- [ ] About 页无第三方主体名、无时间线、无成立年限。
- [ ] Our Team 无总监/经理/工程师具职级卡片与 bio；仅保留单一对接角色。
- [ ] 三地址（Baoji/Ningbo/Dongguan）在页面与 Schema 中均已移除。
- [ ] 无虚构 ISO/体系认证编号、厂房面积、员工数、客户 logo、案例。

### Schema

- [ ] Organization 无 `address` 数组、无 `foundingDate`；description 为协调方口径。
- [ ] `Product` / `Brand` / `FAQPage` 保留且答案已重写。
- [ ] 指南页 `Article`、总览页 `ItemList/CollectionPage`、主图 `ImageObject` 已补齐。
- [ ] Rich Results 测试通过，无报错实体字段。

### 媒体与技术

- [ ] 2 张 `hele` 图片已改名，7 处引用更新；旧图按需 301。
- [ ] 全站图片文件名规范、EXIF 已清；无冒充自有工厂/团队的素材。
- [ ] 改造期 robots `Disallow: /` + 全站 noindex；解除隔离前复核。
- [ ] 对外文案无中文、无 GB 国标；标准引用均可核验。

### 待业务确认（决定可承诺范围）

- [ ] 是否有可挂靠的有资质贸易主体/个体户用于签单收汇？
- [ ] 合作车间能否出具 MTC、能否安排第三方验货？（决定 Quality 页承诺边界）

> （注：部分内容由豆包 AI 生成）