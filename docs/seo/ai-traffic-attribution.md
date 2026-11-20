# AI 流量归因：Google Tag 接入与配置步骤

## 0. 巡检结论（实测）

全库检索 `gtag` / `GTM-` / `googletagmanager` / `dataLayer`：**0 命中**。

结论：站点当前**无法区分普通自然搜索与 AI Overviews / AI Mode / Bing Copilot 进站流量**。
原因不是配置缺失，而是根本没有事件上报通道——GA4 侧无会话来源可拆，GTM 侧无标签可读。

新站尚无数据，因此本轮不接入任何第三方脚本，只落地 **env 门控接入点**：
`src/layouts/BaseLayout.astro` 已读 `PUBLIC_GTM_ID` 与 `PUBLIC_GA4_ID`，
**两个变量都为空时，`<head>` 不输出任何脚本、不初始化 `dataLayer`、不写任何 Cookie**，
构建产物与今日逐字节等价（零合规风险、零性能损耗）。

---

## 1. 启用步骤（一次性）

### 1.1 准备两个 ID

| ID | 来源 | 用途 |
| --- | --- | --- |
| `GTM-XXXXXXX` | Google Tag Manager → 容器 → 右上角 ID | 统一管理标签与变量 |
| `G-XXXXXXXXXX` | GA4 → 管理 → 媒体 → 衡量 ID | 事件落库 |

### 1.2 写入环境变量

`.env`（本地）与部署平台的环境变量面板（生产）都要写：

```
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Astro 只把 `PUBLIC_` 前缀的变量暴露给客户端，符合其既有约定。
**两个变量必须同时存在才启用**——只配一个会保持站点无脚本状态（避免半配置污染数据）。

### 1.3 重新构建并验证

```
npm run build
```

在 `dist/index.html` 中应能看到 `googletagmanager.com/gtm.js?id=GTM-XXXXXXX`
与 `googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`。
未配置时这两个字符串应为 **0 命中**。

---

## 2. 区分 AI 助手流量的归因链路

### 2.1 为什么需要自建维度

Google 官方**没有**独立的 "AI Overviews" 流量报表维度。AI 摘要与 AI Mode 的点击
以**普通搜索会话**的形式落在 GA4 里，来源显示为 `google / organic` 或
`google / web`。因此必须靠 **referrer 主机名**在站点侧自行标记。

接入点已在 `BaseLayout` 中埋好第一个变量：

```
gtag('set','ai_referrer_host',(document.referrer||'').split('/')[2]||'direct');
```

它把 referrer 主机名写进 `ai_referrer_host`。若站点是直接落地（无 referrer），
值为 `direct`。

### 2.2 GA4 侧配置：自定义事件维度

1. GA4 → 管理 → **数据展示 → 自定义定义**
2. 新建自定义维度：
   - 名称：`AI 助手来源`
   - 范围：**事件**
   - 事件参数名：`ai_referrer_host`
3. 在 GTM 中添加 **GA4 事件** 标签（事件名建议 `ai_landing`），参数：
   - `ai_referrer_host` = 上面 JS 写入的变量
   - `page_location` / `page_referrer` / `page_path` 常规带上

### 2.3 GTM 侧配置：把主机名映射成渠道

在 GTM 变量里建一个**查找表（Lookup Table）**，把主机名归一成渠道名：

| 主机名 | 归一渠道 |
| --- | --- |
| `chatgpt.com` | `AI Assistant` |
| `chat.openai.com` | `AI Assistant` |
| `perplexity.ai` | `AI Assistant` |
| `copilot.microsoft.com` | `AI Assistant` |
| `claude.ai` | `AI Assistant` |
| `gemini.google.com` | `AI Assistant` |
| `bing.com` | `Bing` |
| `duckduckgo.com` | `DuckDuckGo` |
| 空 / `direct` | `Direct` |
| 其他 | `Other Referral` |

把归一渠道写进 GA4 事件参数 `ai_channel`。

### 2.4 AI 平台引用的识别边界（务必知悉）

- **ChatGPT / Perplexity / Claude 的引用点击带 referrer**，可被上述维度捕获。
- **Google AI Overviews / AI Mode 内部点击**：Google 站内跳转，referrer 仍是 google，
  **无法**与普通自然搜索区分。要拆开只能靠：
  - GA4 的 **着陆页 + 后续行为**（AI 摘要流量通常查询词更具体、落地更深、RFQ 转化更高）
  - GTM 中按 **落地页路径** 建二级维度（`/titanium-products/*` 等）
  - Search Console 的**查询词**维度（AI 摘要来源的查询往往含长尾对比词）
- **Bing Copilot** 的引用点击 referrer 为 `copilot.microsoft.com`，可直接命中。

### 2.5 验证方法

1. GTM → **预览** → 打开站点，确认 `ai_landing` 事件在 dataLayer 中触发。
2. GA4 → **调试模式**（DebugView）确认事件参数落地。
3. GA4 → **探索** → 自定义维度 `ai_channel` 按会话拆分，对比 `google/organic` 与 `AI Assistant` 的会话数、转化率、RFQ 提交数。
4. 人工验证：用一个 `?utm_source=chatgpt.com&utm_medium=referral` 链接访问，
   确认 referrer 维度可读（注意：部分浏览器会截断 referrer 的 query，需实测）。

---

## 3. 同意管理（本轮未落地，仅说明）

站点当前**没有 Cookie 同意层**。在欧盟/英国流量占比上来之前建议：

- 默认全拒绝 → 用户接受后才注入 GTM/GA4 脚本
- 「必要 Cookie」豁免可包含同意状态本身；统计与分析类需显式同意
- 采用 Google Consent Mode v2 的 `default` / `denied` / `granted` 三态，
  以便在用户拒绝时仍能获得聚合建模信号

本轮**不落地** Banner 代码——超出用户点名的 DoD 范围，且需要文案与法务确认。

---

## 4. 落地后的必做配置清单

- [ ] GA4 自定义事件维度 `ai_referrer_host` 已创建
- [ ] GTM 查找表把 AI 主机名归一为 `AI Assistant`
- [ ] GA4 事件 `ai_landing` 在 DebugView 可见
- [ ] GA4 探索中建好 `ai_channel` × 着陆页 的二级分析
- [ ] Search Console 接入并已验证（AI 摘要的查询词分析依赖它）
- [ ] 同意层上线（欧盟/英国流量进入前）

---

## 5. 不做什么（Google 官方立场）

- 不做 `llms.txt` 迷信：站点已有 `scripts/seo/build-llms-txt.mjs` 自动生成，
  但 Google 官方明确表示**没有独立的 GEO 权重**，AI 摘要复用主搜索索引。
  本轮不新增任何围绕该文件的优化。
- 不做短句切碎式改写：官方否定的做法，且会直接伤害可读性与专业可信度。
- 不做隐藏文本 / 关键词堆砌 / 结构化数据伪装内容（cloaking）。
- 答案引擎的引用资格**只**取决于：内容本身是否对问题有唯一价值、
  是否有可溯源的一手证据、是否结构化到可被抽取。三者都在本报告的整改清单里。
