# 产品参数对比表模板（可直接复用）

适用：Google AI Overviews / AI Mode / Bing Copilot 的**对比型问题**
（“Grade 2 和 Grade 5 怎么选”“MMO 和铂钛阳极哪个更耐氯”）。

数据源：类型定义在 `src/data/comparison-table-model.ts`，
渲染器在 `src/components/ComparisonTable.astro`。
同一份数据同时产出**页面上的语义 HTML 表格**与 **Schema 的 `additionalProperty`**，
两者永不漂移。

---

## 1. Markdown 模板（用于工单、报价附件与外部同步）

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

**填写纪律**

| 规则 | 说明 |
| --- | --- |
| 单位进表头 | 参数名后写 `(MPa)`、`(°C)`、`(A/m²)`，值里不重复单位 |
| 值给范围 | `345–490`，不给 `约 400` |
| 条件跟值走 | `2–6 A/m² @ 20 °C, 3% NaCl`；无条件的值视为不可引用 |
| 明确“按订单确认” | 无法给通用值的，写 `按订单确认（需图纸/工况）`，不要编造 |
| 每个值带出处 | 标准号 + 版本，或证书类型，或“厂家标称值” |
| 首列是参数名 | 每行第一列必须是参数，不是分类标题 |
| 不跨行合并 | 避免 `rowspan`，抽取器读合并单元格会丢行 |

---

## 2. 语义 HTML 模板（页面内渲染，由 `ComparisonTable.astro` 产出）

```html
<div class="tp-comparison" id="{table.id}">
  <h3 class="tp-comparison-title">{title}</h3>
  <div class="tp-comparison-scroll">
    <table class="tp-comparison-table">
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col" class="tp-comparison-param">Parameter</th>
          <th scope="col">{主体A}</th>
          <th scope="col">{主体B}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="tp-comparison-param">牌号 / UNS</th>
          <td><span class="tp-comparison-value">{值}</span></td>
          <td>
            <span class="tp-comparison-value">{值}</span>
            <span class="tp-comparison-condition">({条件})</span>
            <span class="tp-comparison-source">— {出处}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

**强制项**

1. `<caption>` 必写——写清**比较什么**与**在什么条件下比较**。
   它是答案引擎整段引用时最可能带走的句子。
2. `<th scope="col">` 每个列头必写。
3. `<th scope="row">` 每个参数名必写（首列用 `th` 不用 `td`）。
4. 单位只出现在表头或参数名后。
5. 表格放在正文流中，**不要**用 `aria-hidden`、不要放进折叠区默认隐藏。

---

## 3. 排版规范（视觉与结构分离）

| 位置 | 规范 |
| --- | --- |
| 首列 | 不换行（`white-space: nowrap`），宽度按内容自适应 |
| 数据列 | 左对齐；纯数值列可右对齐，但需全表统一 |
| 行高 | `padding: 0.875rem 1.25rem`，行内文字 `line-height: 1.6` |
| 表头 | 底色 `#f8fafc`，下边框 2px，正文行 1px 分隔 |
| 横向滚动 | 容器 `overflow-x: auto`，不压缩列宽 |
| 条件/来源 | 字号 0.875rem，颜色区分于主值；**不得**只用颜色区分信息 |
| 移动端 | 首列 sticky（可选），保证参数名始终可见 |
| 对比表数量 | 每页 1–2 张；超过 3 张改为按维度分组 |

---

## 4. Schema 对应（用现有类型，不虚构 schema.org 类型）

`schema.org` **没有** `Table` 或 `SpecSheet` 类型。正确做法是用既有类型表达：

```json
{
  "@type": "Product",
  "name": "{产品名}",
  "sku": "{SKU}",
  "category": "{产品族}",
  "material": "{牌号 / UNS}",
  "additionalType": "{具体形态}",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "抗拉强度 — Grade 2",
      "value": "345–490 MPa",
      "unitText": "MPa",
      "description": "Source: ASTM B265"
    }
  ]
}
```

- `additionalProperty` 由 `toSchemaProperties(table)` 从**同一份表数据**自动生成，
  命名规则为 `{参数} — {主体}`，避免脱离表后含义丢失。
- 条件会被拼进 `value`，因为**没有条件的数字不是事实**。
- 出处会被写进 `description`（`Source: …`），让引用可溯源。
- 可选的 `ItemList`：当一页列出多个可比较主体（如 9 种 MMO 阳极几何），
  用 `ItemList` + `ListItem` + `itemListElement` 承载主体清单，
  **不要**用不存在的 `Table` 类型。

---

## 5. 用法（数据化 → 渲染 → Schema）

```ts
// src/data/{family}-comparison.ts
import type { ComparisonTable } from './comparison-table-model';

export const mmoGeometryComparison: ComparisonTable = {
  id: 'mmo-geometry-comparison',
  title: 'MMO Titanium Anode Geometry Comparison',
  caption:
    'Geometry compared against the installation method and the current density each shape is normally run at. ' +
    'Values are typical design windows; final sizing follows the electrolyte analysis and the design current.',
  subjects: [
    { key: 'wire', label: 'Wire Anode', subtitle: 'coil supply' },
    { key: 'ribbon', label: 'Ribbon Anode', subtitle: 'surface mounted' },
    { key: 'mesh', label: 'Mesh Ribbon Anode', subtitle: 'embedded in concrete' },
  ],
  rows: [
    {
      key: 'form',
      label: 'Active element',
      cells: [
        { value: 'MMO coated titanium wire', sourceRef: 'Coating system datasheet' },
        { value: 'Solid MMO strip', sourceRef: 'Coating system datasheet' },
        { value: 'Expanded titanium mesh, MMO coated', sourceRef: 'Coating system datasheet' },
      ],
    },
    {
      key: 'current-density',
      label: 'Typical current density',
      unit: 'A/m²',
      cells: [
        { value: '2–6', condition: 'at 20 °C, neutral chloride', sourceRef: 'Design window, project confirmed' },
        { value: '1–4', condition: 'at 20 °C, neutral chloride', sourceRef: 'Design window, project confirmed' },
        { value: '0.5–2', condition: 'embedded, at 20 °C', sourceRef: 'Design window, project confirmed' },
      ],
      note: 'Design windows, not guaranteed ratings. The governing value follows the electrolyte analysis.',
    },
  ],
  sources: [
    'Mixed metal oxide coating system datasheet',
    'Project design current and electrolyte analysis',
  ],
};
```

页面中：

```astro
---
import ComparisonTable from '../../components/ComparisonTable.astro';
import { toSchemaProperties } from '../../data/comparison-table-model';
import { mmoGeometryComparison } from '../../data/mmo-comparison';

const properties = toSchemaProperties(mmoGeometryComparison);
---
<ComparisonTable table={mmoGeometryComparison} />
```

Schema 侧把 `properties` 传给页面的 `jsonLd` 或 `Product` 节点即可。

---

## 6. 自检清单

- [ ] 每张表有 `<caption>`，且写明比较对象与条件
- [ ] 每个列头与每个参数名都有 `scope`
- [ ] 单位在表头/参数名，不在值里重复
- [ ] 值给范围，且带条件或明确的“按订单确认”
- [ ] 每个值有出处（标准号+版本 / 证书 / 标称值）
- [ ] 无 `rowspan` / `colspan` 合并单元格
- [ ] `additionalProperty` 由同一份数据生成，与页面表格一致
- [ ] 表头与正文在移动端可读，无横向截断
- [ ] 表格未被折叠默认隐藏、未被 `aria-hidden`
