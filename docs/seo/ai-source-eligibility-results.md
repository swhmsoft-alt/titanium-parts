# 商业页面 AI 搜索选源资格检查表

- 生成时间：2026-11-26T18:38:52.273Z
- 生成方式：`npm run qa:elig`（脚本 `scripts/seo/source-eligibility-audit.mjs`，只读 `dist/`）
- 扫描范围：`dist`，全站 77 页；判定范围 33 页
- 判定阈值：溯源锚点 ≥ 2（硬门槛）；良好溯源 ≥ 4；相似度上限 0.55
- 硬性门槛：① 索引资格 与 ③ 事实与证据，任一未通过即判不通过

> **本表只做判定与记录，不改任何页面。** 所有"修复动作"列均为建议，
> 未在本轮实施；实施须另立任务，并受 `docs/seo/execution-plan.md` 的红线约束。
>
> **关于收录状态**：本表只判定技术可索引性，**不含**"是否已被 Google 收录"的结论。
> 收录状态只能通过 Search Console 或人工核验得出。

## 0. 概览

| 产品类 | 页数 | 门槛通过 | 门槛未通过 | 平均分 |
| --- | ---: | ---: | ---: | ---: |
| Titanium Products | 16 | 16 | 0 | 84.1 |
| Titanium Anodes | 16 | 1 | 15 | 69.0 |
| PEM Electrolyzer | 1 | 0 | 1 | 65.0 |
| **合计** | **33** | **17** | **16** | **76.2** |

## 1. 页面检查表

| 页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果 |
| --- | --- | --- | --- | --- | --- | --- |
| /titanium-products/ | titanium products | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称 factory-direct）｜Factory-Direct Titanium Product Supply Grade & Standard Selection Guidance Custom Size & Manufacturing Support Testing, Documentation & Export Support PREFER EMAIL? sales@titanium-parts.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Industrial Titanium Products Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-plate/ | titanium plate | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Plate and sheet are hot and cold rolled in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Plate & Sheet Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-foil-2/ | titanium foil | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Foil is slit, cut and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Foil Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-rod-bar/ | titanium rod bar | 通过 | 20/20/20/5/0/10 = 75 | 信息完整性：正文词数 ≥ 1500未通过｜1031 词<br>信息完整性：至少 1 张可抽取表格未通过｜可抽取 0/0 张<br>不可证主张（宣称自有产线）｜Inside Titanium Parts Titanium Bar & Rod Manufacturing Environment Titanium Bar & Rod preparation, processing and inspection are carried out in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Rod & Bar Manufacturer | Titanium Parts" | 补真实采购信息：规格表、可抽取表格与可见 FAQ；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-tubing/ | titanium tubing | 通过 | 20/20/20/10/0/10 = 80 | 信息完整性：正文词数 ≥ 1500未通过｜1477 词<br>不可证主张（宣称自有工厂）｜Process Review Coordinate the Order from Definition to Release Seamless and welded tube and pipe are produced in our own factory.<br>不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Definition to Release Seamless and welded tube and pipe are produced in our own factory.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Tube & Pipe Manufacturer | Titanium Parts" | 补真实采购信息：规格表、可抽取表格与可见 FAQ；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-fittings/ | titanium fittings | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Fittings are formed, machined and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Pipe Fittings Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-flanges/ | titanium flanges | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Flanges are forged, machined and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Pipe Flanges Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-forgings/ | titanium forgings | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Forgings are forged, heat treated, machined and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Forgings Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-mesh/ | titanium mesh | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Mesh is woven, expanded, punched or welded in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Mesh Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-wire/ | titanium wire | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Wire is drawn, annealed, cleaned and packaged in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Wire Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-clad-copper/ | titanium clad copper | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Clad copper is bonded, machined, inspected and packed in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium-Clad Copper Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-bolts/ | titanium bolts | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Fasteners are formed, machined and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Fasteners Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-diaphragm/ | titanium diaphragm | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Diaphragms are cut, formed and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Diaphragms Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-coil/ | titanium coil | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Coil is slitted, cut, edge-prepared and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Coil & Strip Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-baskets/ | titanium baskets | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Baskets are formed, welded, assembled and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Anode Baskets Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-products/titanium-balls/ | titanium balls | 通过 | 20/20/20/15/0/10 = 85 | 不可证主张（宣称自有产线）｜Process Review Coordinate the Order from Specification to Release Balls are machined, formed, closed and inspected in our own facility.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Balls & Spheres Manufacturer | Titanium Parts" | 改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/ | titanium anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/15/10 = 80 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="Titanium Anode Manufacturer | Titanium Parts" | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/coating-systems/ | anode coating systems | 未通过（③ 事实与证据未通过） | 20/20/0/10/8/10 = 68 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>信息完整性：正文词数 ≥ 1500未通过｜1010 词<br>未见供应关系与责任边界表述｜BOUNDARY_PATTERNS 命中 0 条 | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；补真实采购信息：规格表、可抽取表格与可见 FAQ；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/anti-fouling-system/ | anti fouling anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory How the System, the Control and the Documentation Are Controlled We control the titanium identity, the electrode arrangement, the control hardware and the connection against the approved order basis. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/iridium-oxide-coated-titanium-anodes/ | iridium oxide coated titanium anodes | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory How the Coating, the Substrate and the Geometry Are Controlled We control the titanium identity, the surface condition, the coating loading and the connection against the approved order basis. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/lead-dioxide-anode/ | lead dioxide anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory How the Layer Build, the Handling and the Traceability Are Controlled We control the titanium identity, the surface condition, the layer build and the connection against the approved order basis. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/platinized-anode/ | platinized titanium anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory How the Substrate, the Plating and the Geometry Are Controlled We control the titanium identity, the surface condition, the plating process and the connection against the approved order basis. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/ruthenium-coated-titanium-anodes/ | ruthenium coated titanium anodes | 通过 | 20/20/20/15/15/10 = 100 | 六维均达标，无待修缺口 | 无需修复 | 无需修复 |
| /titanium-anode/mmo-anode/ | mmo anode | 未通过（③ 事实与证据未通过） | 20/20/0/10/8/10 = 68 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>信息完整性：正文词数 ≥ 1500未通过｜1404 词<br>未见供应关系与责任边界表述｜BOUNDARY_PATTERNS 命中 0 条 | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；补真实采购信息：规格表、可抽取表格与可见 FAQ；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-wire-anode/ | mmo wire anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System We control the titanium wire identity, coated length, surface condition, connection and termination against the approved order basis. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/ | mmo mesh ribbon anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System We review the titanium substrate, expanded geometry, coated area, conductor-bar interfaces and finished identification against the approved order schedule. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-ribbon-anode/ | mmo ribbon anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System Ribbon width, thickness, coated surface, coil identity and crossover connections are controlled against the approved grid schedule. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-tubular-anode/ | mmo tubular anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System We review the titanium tube material and dimensions, active coated zone, end construction, cable connection and seal against the approved technical schedule. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-rod-anode/ | mmo rod anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/8/10 = 73 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>未见供应关系与责任边界表述｜BOUNDARY_PATTERNS 命中 0 条 | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-canister-anode/ | mmo canister anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System The release review covers the internal MMO element, conductive backfill, canister dimensions, cable exit, sealing, identification and packing. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-disc-anode/ | mmo disc anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[MTC]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System Marine disc assemblies are checked against the approved geometry, active area, backing or mounting interface, cable outlet and sealing arrangement. | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /titanium-anode/mmo-anode/mmo-linear-anode/ | mmo linear anode | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 0 个溯源锚点，参数无出处｜anchors=[无]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory Inside Our Manufacturing & Quality System The release package should match the ordered assembly, not a generic anode certificate.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="MMO Linear Anode Manufacturer | Flexible ICCP Anodes | Titanium Parts" | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |
| /pem-electrolyzer/ | pem electrolyzer | 未通过（③ 事实与证据未通过） | 20/20/0/15/0/10 = 65 | 仅 1 个溯源锚点，参数无出处｜anchors=[THIRD-PARTY INSPECTION]<br>不可证主张（章节标题暗示自有工厂）｜Inside our factory How the Stack, the Assembly and the Records Are Controlled We control the cell materials, the assembly, the pressure integrity and the acceptance test against the approved order basis.<br>标题含制造/供应类自称（不计入分数，需人工确认定位口径）｜title="PEM Electrolyzer Manufacturer | Hydrogen Systems | Titanium Parts" | 给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号；改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张 | 未修复（本轮不擅自改码，待立项） |

## 2. 跨页问题聚类

| 维度 | 问题 | 命中页数 | 涉及路由 |
| --- | --- | ---: | --- |
| 5 | 标题含制造/供应类自称（不计入分数，需人工确认定位口径） | 19 | /titanium-products/<br>/titanium-products/titanium-plate/<br>/titanium-products/titanium-foil-2/<br>/titanium-products/titanium-rod-bar/<br>/titanium-products/titanium-tubing/<br>/titanium-products/titanium-fittings/<br>/titanium-products/titanium-flanges/<br>/titanium-products/titanium-forgings/<br>/titanium-products/titanium-mesh/<br>/titanium-products/titanium-wire/<br>/titanium-products/titanium-clad-copper/<br>/titanium-products/titanium-bolts/<br>/titanium-products/titanium-diaphragm/<br>/titanium-products/titanium-coil/<br>/titanium-products/titanium-baskets/<br>/titanium-products/titanium-balls/<br>/titanium-anode/<br>/titanium-anode/mmo-anode/mmo-linear-anode/<br>/pem-electrolyzer/ |
| 5 | 不可证主张（宣称自有产线） | 15 | /titanium-products/titanium-plate/<br>/titanium-products/titanium-foil-2/<br>/titanium-products/titanium-rod-bar/<br>/titanium-products/titanium-tubing/<br>/titanium-products/titanium-fittings/<br>/titanium-products/titanium-flanges/<br>/titanium-products/titanium-forgings/<br>/titanium-products/titanium-mesh/<br>/titanium-products/titanium-wire/<br>/titanium-products/titanium-clad-copper/<br>/titanium-products/titanium-bolts/<br>/titanium-products/titanium-diaphragm/<br>/titanium-products/titanium-coil/<br>/titanium-products/titanium-baskets/<br>/titanium-products/titanium-balls/ |
| 5 | 不可证主张（章节标题暗示自有工厂） | 12 | /titanium-anode/anti-fouling-system/<br>/titanium-anode/iridium-oxide-coated-titanium-anodes/<br>/titanium-anode/lead-dioxide-anode/<br>/titanium-anode/platinized-anode/<br>/titanium-anode/mmo-anode/mmo-wire-anode/<br>/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/<br>/titanium-anode/mmo-anode/mmo-ribbon-anode/<br>/titanium-anode/mmo-anode/mmo-tubular-anode/<br>/titanium-anode/mmo-anode/mmo-canister-anode/<br>/titanium-anode/mmo-anode/mmo-disc-anode/<br>/titanium-anode/mmo-anode/mmo-linear-anode/<br>/pem-electrolyzer/ |
| 3 | 仅 0 个溯源锚点，参数无出处 | 9 | /titanium-anode/<br>/titanium-anode/coating-systems/<br>/titanium-anode/anti-fouling-system/<br>/titanium-anode/iridium-oxide-coated-titanium-anodes/<br>/titanium-anode/lead-dioxide-anode/<br>/titanium-anode/platinized-anode/<br>/titanium-anode/mmo-anode/<br>/titanium-anode/mmo-anode/mmo-ribbon-anode/<br>/titanium-anode/mmo-anode/mmo-linear-anode/ |
| 3 | 仅 1 个溯源锚点，参数无出处 | 7 | /titanium-anode/mmo-anode/mmo-wire-anode/<br>/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/<br>/titanium-anode/mmo-anode/mmo-tubular-anode/<br>/titanium-anode/mmo-anode/mmo-rod-anode/<br>/titanium-anode/mmo-anode/mmo-canister-anode/<br>/titanium-anode/mmo-anode/mmo-disc-anode/<br>/pem-electrolyzer/ |
| 4 | 信息完整性：正文词数 ≥ 1500未通过 | 4 | /titanium-products/titanium-rod-bar/<br>/titanium-products/titanium-tubing/<br>/titanium-anode/coating-systems/<br>/titanium-anode/mmo-anode/ |
| 5 | 未见供应关系与责任边界表述 | 3 | /titanium-anode/coating-systems/<br>/titanium-anode/mmo-anode/<br>/titanium-anode/mmo-anode/mmo-rod-anode/ |
| 4 | 信息完整性：至少 1 张可抽取表格未通过 | 1 | /titanium-products/titanium-rod-bar/ |
| 5 | 不可证主张（宣称 factory-direct） | 1 | /titanium-products/ |
| 5 | 不可证主张（宣称自有工厂） | 1 | /titanium-products/titanium-tubing/ |

## 3. 逐维明细

### /titanium-products/

- 目标查询：titanium products（页面类型：hub）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Industrial Titanium Products Manufacturer | Titanium Parts" · h1="Industrial Titanium Products Manufacturer & Supplier" · topSimilar=0.015 (peer /titanium-products/titanium-rod-bar/) |
| 3 | 20 | 溯源锚点 7 个 | anchors=[ASTM B265, ASTM B348, ASTM B338, ASTM B863, ASTM B381, MTC, THIRD-PARTY INSPECTION] |
| 4 | 15 | 1646 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称 factory-direct | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-products/titanium-plate/

- 目标查询：titanium plate（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-plate/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Plate & Sheet Manufacturer | Titanium Parts" · h1="Titanium Plate & Sheet Manufacturer — Grade 2, Grade 5 & Custom Cut Sizes" · topSimilar=0.080 (peer /titanium-products/titanium-bolts/) |
| 3 | 20 | 溯源锚点 9 个 | anchors=[ASTM B265, ASTM F136, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, QUOTATION-SPECIFIC] |
| 4 | 15 | 1997 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Plate and sheet are hot and cold rolled in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-foil-2/

- 目标查询：titanium foil（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-foil-2/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Foil Manufacturer | Titanium Parts" · h1="Titanium Foil Manufacturer — Coil, Slit Strip & Cut Pieces" · topSimilar=0.146 (peer /titanium-products/titanium-diaphragm/) |
| 3 | 20 | 溯源锚点 9 个 | anchors=[ASTM B265, UNS R50250, UNS R50400, UNS R56400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2019 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Foil is slit, cut and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-rod-bar/

- 目标查询：titanium rod bar（页面类型：product）
- 硬性门槛：**通过**
- 总分：75（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-rod-bar/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Rod & Bar Manufacturer | Titanium Parts" · h1="Titanium Bar & Rod Manufacturer for Precision Machining" · topSimilar=0.080 (peer /titanium-products/titanium-bolts/) |
| 3 | 20 | 溯源锚点 8 个 | anchors=[ASTM B348, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, QUOTATION-SPECIFIC] |
| 4 | 5 | 1031 词 · 0/0 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Each step closes one part of the order basis. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-tubing/

- 目标查询：titanium tubing（页面类型：product）
- 硬性门槛：**通过**
- 总分：80（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-tubing/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Tube & Pipe Manufacturer | Titanium Parts" · h1="Titanium Tube & Pipe Manufacturer in China — Seamless & Welded" · topSimilar=0.049 (peer /titanium-products/titanium-rod-bar/) |
| 3 | 20 | 溯源锚点 6 个 | anchors=[ASTM B338, ASTM B861, ASTM B862, MTC, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 10 | 1477 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有工厂、宣称自有产线 | boundary=Process Review Coordinate the Order from Definition to Release Seamless and welded tube and pipe are produced in our own factory. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, material grade, standard, application |

### /titanium-products/titanium-fittings/

- 目标查询：titanium fittings（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-fittings/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Pipe Fittings Manufacturer | Titanium Parts" · h1="Titanium Pipe Fittings Manufacturer — Elbows, Tees, Reducers" · topSimilar=0.179 (peer /titanium-products/titanium-flanges/) |
| 3 | 20 | 溯源锚点 10 个 | anchors=[ASTM B363, ASME B16, UNS R50400, UNS R56400, UNS R52400, UNS R53400, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2124 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Fittings are formed, machined and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-flanges/

- 目标查询：titanium flanges（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-flanges/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Pipe Flanges Manufacturer | Titanium Parts" · h1="Custom Titanium Flange Manufacturer — Forged In-House" · topSimilar=0.179 (peer /titanium-products/titanium-fittings/) |
| 3 | 20 | 溯源锚点 10 个 | anchors=[ASTM B381, ASME B16, UNS R50400, UNS R56400, UNS R52400, UNS R53400, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2072 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Flanges are forged, machined and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-forgings/

- 目标查询：titanium forgings（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-forgings/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Forgings Manufacturer | Titanium Parts" · h1="Custom Titanium Forgings to Drawing & Spec" · topSimilar=0.170 (peer /titanium-products/titanium-bolts/) |
| 3 | 20 | 溯源锚点 11 个 | anchors=[ASTM B381, ASTM F67, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC, CONFIRMED AT QUOTATION] |
| 4 | 15 | 1900 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Forgings are forged, heat treated, machined and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-mesh/

- 目标查询：titanium mesh（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-mesh/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Mesh Manufacturer | Titanium Parts" · h1="Titanium Mesh Manufacturer — Woven, Expanded & Fabricated" · topSimilar=0.162 (peer /titanium-products/titanium-fittings/) |
| 3 | 20 | 溯源锚点 9 个 | anchors=[ASTM B265, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2263 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Mesh is woven, expanded, punched or welded in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-wire/

- 目标查询：titanium wire（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-wire/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Wire Manufacturer | Titanium Parts" · h1="Titanium Wire & Welding Wire Manufacturer — B863, A5.16" · topSimilar=0.151 (peer /titanium-products/titanium-mesh/) |
| 3 | 20 | 溯源锚点 12 个 | anchors=[ASTM B863, ASTM F136, ASTM F67, AWS A5.1, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2291 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Wire is drawn, annealed, cleaned and packaged in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-products/titanium-clad-copper/

- 目标查询：titanium clad copper（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-clad-copper/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium-Clad Copper Manufacturer | Titanium Parts" · h1="Titanium Clad Copper Bar, Rod & Busbar Manufacturer" · topSimilar=0.104 (peer /titanium-products/titanium-coil/) |
| 3 | 20 | 溯源锚点 9 个 | anchors=[ASTM B898, UNS R50400, UNS R52400, UNS R53400, UNS R50250, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2495 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Clad copper is bonded, machined, inspected and packed in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-products/titanium-bolts/

- 目标查询：titanium bolts（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-bolts/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Fasteners Manufacturer | Titanium Parts" · h1="Industrial Titanium Fastener Manufacturer — Bolts, Screws, Nuts" · topSimilar=0.170 (peer /titanium-products/titanium-forgings/) |
| 3 | 20 | 溯源锚点 12 个 | anchors=[ASTM B348, ASTM F136, ASTM F67, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC, CONFIRMED AT QUOTATION] |
| 4 | 15 | 1876 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Fasteners are formed, machined and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-diaphragm/

- 目标查询：titanium diaphragm（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-diaphragm/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Diaphragms Manufacturer | Titanium Parts" · h1="Titanium Diaphragm Manufacturer — Tweeter Domes & Sensor" · topSimilar=0.150 (peer /titanium-products/titanium-bolts/) |
| 3 | 20 | 溯源锚点 10 个 | anchors=[ASTM B265, ASTM F67, UNS R50250, UNS R50400, UNS R56400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 1985 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Diaphragms are cut, formed and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 8 项 | drawing, quantity, tolerance, dimension, material grade, standard, application, surface |

### /titanium-products/titanium-coil/

- 目标查询：titanium coil（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-coil/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Coil & Strip Manufacturer | Titanium Parts" · h1="Titanium Coil Manufacturer — Master Coil & Slit Strip" · topSimilar=0.150 (peer /titanium-products/titanium-wire/) |
| 3 | 20 | 溯源锚点 9 个 | anchors=[ASTM B265, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2363 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Coil is slitted, cut, edge-prepared and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-products/titanium-baskets/

- 目标查询：titanium baskets（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-baskets/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Anode Baskets Manufacturer | Titanium Parts" · h1="Custom Titanium Anode Baskets for Electroplating & Surface Finishing" · topSimilar=0.118 (peer /titanium-products/titanium-balls/) |
| 3 | 20 | 溯源锚点 8 个 | anchors=[ASTM B265, UNS R50250, UNS R50400, UNS R52400, UNS R53400, MTC, THIRD-PARTY INSPECTION, QUOTATION-SPECIFIC] |
| 4 | 15 | 2379 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Baskets are formed, welded, assembled and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, tolerance, dimension, standard, surface |

### /titanium-products/titanium-balls/

- 目标查询：titanium balls（页面类型：product）
- 硬性门槛：**通过**
- 总分：85（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-products/titanium-balls/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Balls & Spheres Manufacturer | Titanium Parts" · h1="Titanium Balls & Spheres Manufacturer — Solid, Hollow and Hemispherical" · topSimilar=0.150 (peer /titanium-products/titanium-coil/) |
| 3 | 20 | 溯源锚点 10 个 | anchors=[ASTM B348, ASTM F67, UNS R50400, UNS R56400, UNS R52400, UNS R56407, MTC, THIRD-PARTY INSPECTION, CONFIRMED PER ORDER, QUOTATION-SPECIFIC] |
| 4 | 15 | 2314 词 · 1/1 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：宣称自有产线 | boundary=Process Review Coordinate the Order from Specification to Release Balls are machined, formed, closed and inspected in our own facility. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-anode/

- 目标查询：titanium anode（页面类型：hub）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：80（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Titanium Anode Manufacturer | Titanium Parts" · h1="Custom Titanium Anodes for Industrial Electrochemical Systems" · topSimilar=0.012 (peer /titanium-anode/mmo-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 2992 词 · 2/2 张可抽取表 · 7 条 FAQ | dist 实测 |
| 5 | 15 | 无不可证主张，且写明供应关系与责任边界 | boundary=The exact manufacturing and partner scope is confirmed for the specific order. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-anode/coating-systems/

- 目标查询：anode coating systems（页面类型：hub）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：68（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/coating-systems/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Coating Systems for Titanium Anodes | Titanium Parts" · h1="Coating Systems for Titanium Anodes" · topSimilar=0.034 (peer /titanium-anode/mmo-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 10 | 1010 词 · 1/1 张可抽取表 · 3 条 FAQ | dist 实测 |
| 5 | 8 | 未见供应关系与责任边界表述 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 3 项 | quantity, application, surface |

### /titanium-anode/anti-fouling-system/

- 目标查询：anti fouling anode（页面类型：system）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/anti-fouling-system/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Electrolytic Anti-Fouling Systems for Marine Anodes | Titanium Parts" · h1="Electrolytic Anti-Fouling Systems" · topSimilar=0.028 (peer /titanium-anode/platinized-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 3714 词 · 2/2 张可抽取表 · 10 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request an Anti-Fouling System Quotation A project engineer responds within 1 business day. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 4 项 | quantity, dimension, standard, surface |

### /titanium-anode/iridium-oxide-coated-titanium-anodes/

- 目标查询：iridium oxide coated titanium anodes（页面类型：coating）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/iridium-oxide-coated-titanium-anodes/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Ir-Ta Coated Titanium Anodes for Oxygen Evolution | Titanium Parts" · h1="Iridium Oxide Coated Titanium Anodes for Oxygen Evolution" · topSimilar=0.145 (peer /titanium-anode/platinized-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 4074 词 · 2/2 张可抽取表 · 10 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request an Ir-Ta Anode Quotation A project engineer responds within 1 business day. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/lead-dioxide-anode/

- 目标查询：lead dioxide anode（页面类型：coating）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/lead-dioxide-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Lead Dioxide Coated Titanium Anodes | Titanium Parts" · h1="Lead Dioxide Coated Titanium Anodes" · topSimilar=0.087 (peer /titanium-anode/platinized-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 3793 词 · 2/2 张可抽取表 · 10 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request a PbO₂ Anode Case Review A project engineer responds within 1 business day. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/platinized-anode/

- 目标查询：platinized titanium anode（页面类型：coating）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/platinized-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Platinized Titanium Anodes for Electrochemistry | Titanium Parts" · h1="Platinized Titanium Anodes" · topSimilar=0.145 (peer /titanium-anode/iridium-oxide-coated-titanium-anodes/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 3790 词 · 2/2 张可抽取表 · 10 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request a Platinized Anode Quotation A project engineer responds within 1 business day. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 7 项 | drawing, quantity, tolerance, dimension, standard, application, surface |

### /titanium-anode/ruthenium-coated-titanium-anodes/

- 目标查询：ruthenium coated titanium anodes（页面类型：coating）
- 硬性门槛：**通过**
- 总分：100（monitor）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/ruthenium-coated-titanium-anodes/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="Ru-Ir Coated Titanium Anodes for Chlorine Evolution | Titanium Parts" · h1="Ruthenium Coated Titanium Anodes for Chlorine Evolution" · topSimilar=0.057 (peer /titanium-anode/iridium-oxide-coated-titanium-anodes/) |
| 3 | 20 | 溯源锚点 4 个 | anchors=[MTC, PMI, THIRD-PARTY INSPECTION, CERTIFICATE OF CONFORMITY] |
| 4 | 15 | 3295 词 · 2/2 张可抽取表 · 10 条 FAQ | dist 实测 |
| 5 | 15 | 无不可证主张，且写明供应关系与责任边界 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request a Ru-Ir Anode Quotation A project engineer responds within 1 business day. | The typical document set for a Ru-Ir coated titanium anode order, adjustable to your acceptance requirements: Material certificate (MTC) for the titanium substrate, with heat and lot traceability Positive material identification (PMI) confirming the titanium grade Coating loading records for the coated area, in g/cm² Coating composition records, by XRF where the agreed scope includes them Adhesion and visual inspection of the coated surface and the masked boundary Dimensional inspection against the approved drawing, including the uncoated length Final inspection against the quality plan, with marking and labelling checks Certificate of conformity, packing list and export documents for the shipment Third-party inspection can be coordinated where your contract requires it, and the inspection and document scope is normally fixed at quotation stage so that it does not become a dispute at delivery. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 5 项 | drawing, quantity, dimension, application, surface |

### /titanium-anode/mmo-anode/

- 目标查询：mmo anode（页面类型：hub）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：68（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Titanium Anodes | Titanium Parts" · h1="MMO Titanium Anodes" · topSimilar=0.034 (peer /titanium-anode/coating-systems/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 10 | 1404 词 · 2/2 张可抽取表 · 4 条 FAQ | dist 实测 |
| 5 | 8 | 未见供应关系与责任边界表述 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 3 项 | quantity, dimension, surface |

### /titanium-anode/mmo-anode/mmo-wire-anode/

- 目标查询：mmo wire anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-wire-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO-Coated Titanium Wire Anodes for CP | Titanium Parts" · h1="MMO-Coated Titanium Wire Anodes for Cathodic Protection" · topSimilar=0.070 (peer /titanium-anode/mmo-anode/mmo-ribbon-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1760 词 · 2/2 张可抽取表 · 7 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/

- 目标查询：mmo mesh ribbon anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Mesh Ribbon Anodes for CP | Titanium Parts" · h1="MMO Mesh Ribbon Anodes for Reinforced Concrete Cathodic Protection" · topSimilar=0.102 (peer /titanium-anode/mmo-anode/mmo-ribbon-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1755 词 · 3/3 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-ribbon-anode/

- 目标查询：mmo ribbon anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-ribbon-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Ribbon Anodes for Tank-Bottom Protection | Titanium Parts" · h1="Solid MMO Ribbon Anodes for Tank Bottom Cathodic Protection" · topSimilar=0.102 (peer /titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 1712 词 · 4/4 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-tubular-anode/

- 目标查询：mmo tubular anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-tubular-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Tubular Anodes for Cathodic Protection | Titanium Parts" · h1="MMO-Coated Titanium Tubular Anodes for ICCP Systems" · topSimilar=0.071 (peer /titanium-anode/mmo-anode/mmo-canister-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1861 词 · 4/4 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-rod-anode/

- 目标查询：mmo rod anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：73（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-rod-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Rod Anodes for Compact ICCP Systems | Titanium Parts" · h1="MMO-Coated Titanium Rod Anodes for Compact ICCP Systems" · topSimilar=0.044 (peer /titanium-anode/mmo-anode/mmo-tubular-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1555 词 · 3/3 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 8 | 未见供应关系与责任边界表述 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 5 项 | drawing, quantity, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-canister-anode/

- 目标查询：mmo canister anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-canister-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Canister Anodes for ICCP Groundbeds | Titanium Parts" · h1="Prepackaged MMO Canister Anodes for Deep and Shallow Groundbeds" · topSimilar=0.071 (peer /titanium-anode/mmo-anode/mmo-tubular-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1850 词 · 3/3 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-disc-anode/

- 目标查询：mmo disc anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-disc-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Disc Anodes for Marine ICCP Systems | Titanium Parts" · h1="MMO Disc Anodes for Marine and Vessel ICCP Systems" · topSimilar=0.071 (peer /titanium-anode/mmo-anode/mmo-tubular-anode/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[MTC] |
| 4 | 15 | 1846 词 · 2/2 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary 命中 0 条 |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /titanium-anode/mmo-anode/mmo-linear-anode/

- 目标查询：mmo linear anode（页面类型：family）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/titanium-anode/mmo-anode/mmo-linear-anode/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="MMO Linear Anode Manufacturer | Flexible ICCP Anodes | Titanium Parts" · h1="MMO Linear Anodes for Distributed Cathodic Protection" · topSimilar=0.021 (peer /titanium-anode/mmo-anode/mmo-ribbon-anode/) |
| 3 | 0 | 仅 0 个溯源锚点，参数无出处 | anchors=[无] |
| 4 | 15 | 2416 词 · 4/4 张可抽取表 · 6 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=Coordinate rectifier and cable limits Check rectifier voltage/current range, header cable, junction boxes, field cable and acceptable voltage drop as one electrical path. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 6 项 | drawing, quantity, dimension, standard, application, surface |

### /pem-electrolyzer/

- 目标查询：pem electrolyzer（页面类型：equipment）
- 硬性门槛：**未通过** — ③ 事实与证据未通过
- 总分：65（fix-gaps）

| 维度 | 得分 | 判定 | 证据 |
| --- | ---: | --- | --- |
| 1 | 20 | 索引条件五项全中 | robots=index, follow, max-image-preview:large · canonical=https://titanium-parts.com/pem-electrolyzer/ · h1=1 · sitemap=有 |
| 2 | 20 | 标题族命中目标查询 | title="PEM Electrolyzer Manufacturer | Hydrogen Systems | Titanium Parts" · h1="PEM Electrolyzers for Hydrogen That Has to Be Produced on Demand" · topSimilar=0.018 (peer /titanium-anode/anti-fouling-system/) |
| 3 | 0 | 仅 1 个溯源锚点，参数无出处 | anchors=[THIRD-PARTY INSPECTION] |
| 4 | 15 | 4338 词 · 1/1 张可抽取表 · 9 条 FAQ | dist 实测 |
| 5 | 0 | 出现不可证主张：章节标题暗示自有工厂 | boundary=com Sourcing base in the Baoji titanium industrial cluster, China Request a PEM Electrolyzer Technical Quote We review configuration, delivery boundary, and acceptance plan. |
| 6 | 10 | RFQ 入口 有 · 询价资料项 4 项 | quantity, dimension, standard, application |
