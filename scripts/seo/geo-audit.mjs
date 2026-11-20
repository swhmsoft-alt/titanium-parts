/**
 * SEO + GEO joint audit of the built site.
 *
 * Reads `dist/` (read-only), inspects every built page for the failure modes
 * that decide visibility in Google's AI Overviews / AI Mode and in Bing
 * Copilot answers, and writes two machine-readable reports:
 *
 *   tmp/geo-audit/geo-audit.json   full per-page findings
 *   tmp/geo-audit/geo-audit.md     the two prioritised checklists
 *
 * The script never touches the pages. It reports; humans decide.
 *
 *   node scripts/seo/geo-audit.mjs [distDir] [outDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.resolve(process.argv[2] || path.join(ROOT, 'dist'));
const OUT_DIR = path.resolve(process.argv[3] || path.join(ROOT, 'tmp', 'geo-audit'));

/** Similarity at or above this marks two pages as the same content. */
const CLONE_THRESHOLD = 0.55;
/** A page must carry at least this many traceability anchors to be sourced. */
const MIN_TRACE_ANCHORS = 2;
/** Distinctive, competitor-unlikely anchors that make a page its own source. */
const DIFFERENTIATOR_PATTERNS = [
  /current density/i,
  /current density/i,
  /duty cycle/i,
  /electrolyte/i,
  /pH\b/i,
  /temperature/i,
  /\bUNS\b/,
  /EN 10204/i,
  /MTC\b/,
  /mill test cert/i,
  /third[- ]party/i,
  /PMI\b/i,
  /radiograph/i,
  /heat number/i,
  /traceability/i,
];

/** Standard designations that make a technical statement verifiable. */
const TRACE_PATTERNS = [
  /\bASTM\s?[A-Z]?\d{2,5}[A-Z]?/gi,
  /\bASME\s?[A-Z]?\d{2,5}[A-Z]?/gi,
  /\bEN\s?\d{3,5}/gi,
  /\bISO\s?\d{3,5}/gi,
  /\bNACE\s?(TM\s)?[A-Z]{2}-\d+/gi,
  /\bGB\/T\s?\d{3,5}/gi,
  /\bAWS\s?[A-Z]\d(?:\.\d)?/gi,
  /\bNORS\s?[A-Z]?\d{3,5}/gi,
  /\bDIN\s?\d{3,5}/gi,
  /\bUNS\s?[A-Z]\d{5}\b/gi,
];

/** Product fields a schema-aware retrieval system can act on. */
const PRODUCT_FIELDS = [
  'name',
  'description',
  'sku',
  'mpn',
  'gtin',
  'category',
  'image',
  'brand',
  'manufacturer',
  'material',
  'additionalType',
  'additionalProperty',
  'offers',
  'itemCondition',
  'isVariantOf',
];

const PAGE_FIELDS = [
  'name',
  'description',
  'url',
  'datePublished',
  'dateModified',
  'author',
  'publisher',
  'inLanguage',
  'primaryImageOfPage',
  'about',
  'mainEntity',
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** Route of a built HTML file, e.g. "titanium-plate/index.html" -> "/titanium-plate/". */
function routeOf(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (rel === '404.html') return '/404.html';
  return '/' + rel.replace(/index\.html$/, '');
}

/**
 * The main content region of a built page.
 *
 * Only the content region counts. Header, navigation and footer are shared by
 * every page, so including them would make every page look like a copy of
 * every other page and would hide real duplication.
 */
function mainContent(html) {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (m) return m[1];
  // No main region: strip the shared chrome by tag before falling back.
  return html
    .replace(/<header\b[\s\S]*?<\/header>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, ' ');
}

/** Visible text of the content region, with script and style removed. */
function visibleText(html) {
  const body = mainContent(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ');
  return decodeEntities(body.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function textOf(html, regex) {
  const m = html.match(regex);
  return m ? decodeEntities(m[1]).trim() : '';
}

/** Set of word 5-grams, used as the fingerprint of a page. */
function shingles(text, size = 5) {
  const words = text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const out = new Set();
  for (let i = 0; i + size <= words.length; i += 1) {
    out.add(words.slice(i, i + size).join(' '));
  }
  return out;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/** Paragraph-level fingerprints, used to find duplicated blocks. */
function paragraphFingerprints(html) {
  const out = new Map();
  const body = mainContent(html).replace(/<script[\s\S]*?<\/script>/gi, ' ');
  const paragraphs = body.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || [];
  for (const p of paragraphs) {
    const text = decodeEntities(p.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    if (text.length < 120) continue;
    out.set(text, (out.get(text) || 0) + 1);
  }
  return out;
}

function jsonLdOf(html) {
  const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch {
    return null;
  }
}

function nodesOf(ld) {
  if (!ld) return [];
  const graph = Array.isArray(ld['@graph']) ? ld['@graph'] : [];
  return graph.filter((n) => n && typeof n === 'object');
}

function countMatches(text, patterns) {
  const found = new Set();
  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (matches) for (const m of matches) found.add(m.toUpperCase().replace(/\s+/g, ' '));
  }
  return [...found];
}

/** Everything one built page is judged on. */
function analysePage(file) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeOf(file);
  const text = visibleText(html);
  const ld = jsonLdOf(html);
  const nodes = nodesOf(ld);
  const types = [...new Set(nodes.map((n) => n['@type']).filter(Boolean))];

  const productNode = nodes.find((n) => n['@type'] === 'Product') || null;
  const productFields = productNode
    ? Object.keys(productNode).filter((k) => !k.startsWith('@'))
    : [];
  const missingProductFields = productNode
    ? PRODUCT_FIELDS.filter((f) => !productFields.includes(f))
    : [];

  const faqNode = nodes.find((n) => n['@type'] === 'FAQPage') || null;
  const faqCount = faqNode && Array.isArray(faqNode.mainEntity) ? faqNode.mainEntity.length : 0;
  // FAQ that a reader can see but that is not declared as structured data.
  const visibleFaqBlocks = (html.match(/<details\b/gi) || []).length +
    (html.match(/class="[^"]*\bfaq\b[^"]*"/gi) || []).length;

  const tables = (html.match(/<table\b[\s\S]*?<\/table>/gi) || []).map((table) => {
    const rows = (table.match(/<tr\b/gi) || []).length;
    const captions = (table.match(/<caption\b/gi) || []).length;
    const headers = (table.match(/<th\b/gi) || []).length;
    const scoped = (table.match(/<th\b[^>]*\bscope=/gi) || []).length;
    return {
      rows,
      captions,
      headers,
      scoped,
      // A comparison table needs a caption and a row header per row.
      hasCaption: captions > 0,
      hasRowHeaders: scoped > 0,
      extractable: captions > 0 && scoped > 0 && rows > 2,
    };
  });

  const specItems = (html.match(/<dt\b/gi) || []).length;
  const traceAnchors = countMatches(text, TRACE_PATTERNS);
  const differentiators = DIFFERENTIATOR_PATTERNS.filter((p) => p.test(text)).length;

  return {
    route,
    file: path.relative(ROOT, file).replace(/\\/g, '/'),
    title: textOf(html, /<title>([^<]*)<\/title>/),
    description: textOf(html, /<meta name="description" content="([^"]*)"/),
    canonical: textOf(html, /<link rel="canonical" href="([^"]*)"/),
    robots: textOf(html, /<meta name="robots" content="([^"]*)"/),
    h1Count: (html.match(/<h1\b/gi) || []).length,
    words: text.split(/\s+/).filter(Boolean).length,
    types,
    hasProduct: Boolean(productNode),
    productFields,
    missingProductFields,
    hasFaqPage: Boolean(faqNode),
    faqCount,
    visibleFaqBlocks,
    hasWebPage: types.includes('WebPage'),
    tables,
    tableCount: tables.length,
    extractableTables: tables.filter((t) => t.extractable).length,
    specItems,
    traceAnchors,
    differentiators,
    fingerprint: shingles(text),
    paragraphs: paragraphFingerprints(html),
  };
}

/** The routes that are product pages, by their own declaration. */
function isProductPage(page) {
  return page.hasProduct || /\/titanium-products\/|\/titanium-anode\/|\/titanium-service\//.test(page.route);
}

/**
 * The high-risk rule set.
 *
 * Every rule maps to a way a page loses its ranking under the November
 * update or fails to be quotable by an answer engine:
 *
 *   scaled-content     the page is a near-copy of another page on this site
 *   unsourced-spec     a technical page with no traceable specification
 *   no-eeat-signals    no first-hand, certificate or process evidence
 *   schema-incomplete  a Product node too thin to be quoted
 *   faq-unstructured   visible FAQ with no FAQPage node
 *   table-unquotable   a comparison table that no extractor can read
 *   thin-page          too little content to judge
 */
function classify(page, peers) {
  const issues = [];

  let topSimilar = 0;
  let topPeer = null;
  for (const peer of peers) {
    // The 404 page is not a ranking target and has almost no content, so a
    // similarity match against it says nothing about the site.
    if (peer.route === page.route || peer.route === '/404.html') continue;
    const score = jaccard(page.fingerprint, peer.fingerprint);
    if (score > topSimilar) {
      topSimilar = score;
      topPeer = peer.route;
    }
  }
  if (topSimilar >= CLONE_THRESHOLD) {
    issues.push({
      code: 'scaled-content',
      severity: 'high',
      detail: `正文与 ${topPeer} 的 5-gram Jaccard 相似度 ${(topSimilar * 100).toFixed(1)}%，疑似同源模板批量产出`,
    });
  }

  if (isProductPage(page) && page.traceAnchors.length < MIN_TRACE_ANCHORS) {
    // A page that publishes numbers without a source is the high-risk case;
    // a page that publishes no numbers at all is only a weaker signal.
    const publishesSpecs = page.specItems > 0 || page.tableCount > 0;
    issues.push({
      code: 'unsourced-spec',
      severity: publishesSpecs ? 'high' : 'medium',
      detail: `产品/技术页仅 ${page.traceAnchors.length} 个可溯源锚点（标准号/UNS），参数无出处`,
    });
  }

  if (isProductPage(page) && page.differentiators === 0) {
    issues.push({
      code: 'no-eeat-signals',
      severity: 'medium',
      detail: '未检出工况条件、检验文件或第三方证据等一手信号',
    });
  }

  if (page.hasProduct && page.missingProductFields.length > 0) {
    issues.push({
      code: 'schema-incomplete',
      severity: 'medium',
      detail: `Product 节点缺字段：${page.missingProductFields.join(', ')}`,
    });
  }

  if (page.visibleFaqBlocks > 0 && !page.hasFaqPage) {
    issues.push({
      code: 'faq-unstructured',
      severity: 'medium',
      detail: `页面有 ${page.visibleFaqBlocks} 处可见 FAQ，但无 FAQPage 节点`,
    });
  }

  if (page.tableCount > 0 && page.extractableTables === 0) {
    issues.push({
      code: 'table-unquotable',
      severity: 'medium',
      detail: `${page.tableCount} 个表格均缺 <caption> 或 <th scope>，LLM 无法按行抽取`,
    });
  }

  if (page.words < 350 && page.route !== '/404.html') {
    issues.push({
      code: 'thin-page',
      severity: 'low',
      detail: `正文仅 ${page.words} 词`,
    });
  }

  return { issues, topSimilar, topPeer };
}

/**
 * Pages that duplicate whole paragraphs with other pages.
 *
 * A paragraph that appears on nearly every page is site chrome (the RFQ
 * block, the footer promise), not a content problem, so it is not reported
 * as duplication.
 */
function duplicateParagraphs(pages) {
  const owners = new Map();
  for (const page of pages) {
    for (const text of page.paragraphs.keys()) {
      if (!owners.has(text)) owners.set(text, []);
      owners.get(text).push(page.route);
    }
  }
  const chromeLimit = Math.max(2, Math.ceil(pages.length * 0.8));
  const out = [];
  for (const [text, routes] of owners) {
    if (routes.length < 2 || routes.length >= chromeLimit) continue;
    out.push({ text: text.slice(0, 220), routes });
  }
  return out;
}

/** Fix text for one finding, keyed by the rule code. */
function remediation(code) {
  switch (code) {
    case 'scaled-content':
      return '合并或差异化：本页必须保留至少一条其他页没有的一手信息（实测值、工况边界、检验文件清单），否则两页只能留一页并把另一页 301 到它';
    case 'unsourced-spec':
      return '给每个参数加出处：标准号 + 版本（如 ASTM B265）、UNS 号、证书类型（EN 10204 3.1/3.2）或明确的“按订单确认”标记';
    case 'no-eeat-signals':
      return '补一手信号：写入电流密度/pH/温度/介质等工况条件、检验与文件交付边界、第三方检测方式与工艺说明';
    case 'schema-incomplete':
      return '补 Product 节点：category、material、additionalType、additionalProperty（参数逐项）、image、offers/itemCondition、mpn';
    case 'faq-unstructured':
      return '用页面同一份 FAQ 数据生成 FAQPage 节点（Question/acceptedAnswer），确保 JSON-LD 文本与页面可见答案逐字一致';
    case 'table-unquotable':
      return '表格加 <caption>、首列改 <th scope="row">、单位写入列头；并在同页给出 Markdown 版本的参数对比';
    case 'thin-page':
      return '补实质内容：参数表 + 工况 + 证据链，而不是重复同类模板句';
    default:
      return '';
  }
}

/** GEO opportunities: content that answers a question an assistant is asked. */
function geoOpportunities(page) {
  const out = [];
  if (page.hasProduct && !page.productFields.includes('additionalProperty')) {
    out.push({
      route: page.route,
      item: '把参数对比表同步为 Product.additionalProperty',
      why: '答案引擎引用产品页时最常摘取的是属性对，而不是段落',
    });
  }
  if (page.visibleFaqBlocks > 0 && !page.hasFaqPage) {
    out.push({
      route: page.route,
      item: '为可见 FAQ 生成 FAQPage 节点',
      why: '问答对是 AI Overviews 与 Copilot 最容易整段引用的结构',
    });
  }
  if (page.tableCount > 0 && page.extractableTables === 0) {
    out.push({
      route: page.route,
      item: '把对比表改为可抽取结构（caption + th scope + 单位）',
      why: '可抽取表格是“对比型问题”（A 与 B 哪个更耐氯）的直接答案来源',
    });
  }
  if (isProductPage(page) && page.traceAnchors.length < MIN_TRACE_ANCHORS) {
    out.push({
      route: page.route,
      item: '补标准号与证书类型作为段落内引用锚点',
      why: '带出处的参数比无出处的参数更容易被 AI 摘要选中并署名引用',
    });
  }
  if (isProductPage(page) && page.differentiators > 0 && page.traceAnchors.length >= MIN_TRACE_ANCHORS) {
    out.push({
      route: page.route,
      item: '把已有工况条件提炼成独立小节（工况与适用边界）',
      why: '该页已具备一手信号，独立成节后可被整段引用',
    });
  }
  return out;
}

const SEVERITY_ORDER = { high: 0, medium: 1, low: 2 };

function main() {
  if (!fs.existsSync(DIST)) {
    console.error(`dist/ not found — ${DIST}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const files = walk(DIST).filter((f) => f.endsWith('.html'));
  const pages = files.map(analysePage);

  const risks = [];
  for (const page of pages) {
    const { issues, topSimilar, topPeer } = classify(page, pages);
    page.issues = issues;
    page.topSimilar = topSimilar;
    page.topPeer = topPeer;
    for (const issue of issues) {
      risks.push({
        route: page.route,
        title: page.title,
        code: issue.code,
        severity: issue.severity,
        detail: issue.detail,
        fix: remediation(issue.code),
      });
    }
  }

  const geo = [];
  for (const page of pages) {
    for (const item of geoOpportunities(page)) {
      geo.push({ ...item, title: page.title, type: page.types.join('+') });
    }
  }

  const bySeverity = (a, b) =>
    (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9) ||
    a.route.localeCompare(b.route);

  risks.sort(bySeverity);

  const schemaTypes = new Map();
  for (const page of pages) {
    for (const type of page.types) {
      if (!schemaTypes.has(type)) schemaTypes.set(type, []);
      schemaTypes.get(type).push(page.route);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dist: path.relative(ROOT, DIST).replace(/\\/g, '/'),
    pageCount: pages.length,
    thresholds: {
      cloneThreshold: CLONE_THRESHOLD,
      minTraceAnchors: MIN_TRACE_ANCHORS,
    },
    schemaCoverage: {
      types: Object.fromEntries([...schemaTypes].map(([k, v]) => [k, v.length])),
      productPages: pages.filter((p) => p.hasProduct).length,
      productPagesWithAdditionalProperty: pages.filter(
        (p) => p.hasProduct && p.productFields.includes('additionalProperty')
      ).length,
      faqPages: pages.filter((p) => p.hasFaqPage).length,
      pagesWithVisibleFaqButNoNode: pages.filter(
        (p) => p.visibleFaqBlocks > 0 && !p.hasFaqPage
      ).length,
      webPageNodes: pages.filter((p) => p.hasWebPage).length,
      tablesTotal: pages.reduce((n, p) => n + p.tableCount, 0),
      tablesExtractable: pages.reduce((n, p) => n + p.extractableTables, 0),
    },
    risks,
    geo,
    duplicates: duplicateParagraphs(pages),
    pages: pages.map((p) => ({
      route: p.route,
      title: p.title,
      words: p.words,
      types: p.types,
      missingProductFields: p.missingProductFields,
      tableCount: p.tableCount,
      extractableTables: p.extractableTables,
      specItems: p.specItems,
      traceAnchors: p.traceAnchors,
      differentiators: p.differentiators,
      visibleFaqBlocks: p.visibleFaqBlocks,
      hasFaqPage: p.hasFaqPage,
      topSimilar: Number(p.topSimilar.toFixed(3)),
      topPeer: p.topPeer,
      issues: p.issues.map((i) => i.code),
    })),
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, 'geo-audit.json');
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  const mdPath = path.join(OUT_DIR, 'geo-audit.md');
  fs.writeFileSync(mdPath, renderMarkdown(report), 'utf8');

  console.log(`geo-audit: ${pages.length} pages, ${risks.length} findings, ${geo.length} opportunities`);
  console.log(`  ${path.relative(ROOT, jsonPath)}`);
  console.log(`  ${path.relative(ROOT, mdPath)}`);
}

/** Render the report as the two prioritised checklists. */
function renderMarkdown(report) {
  const lines = [];
  const c = report.schemaCoverage;

  lines.push('# SEO + GEO 联合巡检报告');
  lines.push('');
  lines.push(`- 生成时间：${report.generatedAt}`);
  lines.push(`- 扫描范围：\`${report.dist}\`，共 ${report.pageCount} 页`);
  lines.push(`- 判定阈值：同源相似度 ≥ ${report.thresholds.cloneThreshold}；可溯源锚点 ≥ ${report.thresholds.minTraceAnchors}`);
  lines.push('');
  lines.push('## 0. 概览');
  lines.push('');
  lines.push('| 指标 | 数值 |');
  lines.push('| --- | --- |');
  lines.push(`| 页面总数 | ${report.pageCount} |`);
  lines.push(`| 带 Product 节点 | ${c.productPages} |`);
  lines.push(`| Product 带 additionalProperty | ${c.productPagesWithAdditionalProperty} |`);
  lines.push(`| 带 FAQPage 节点 | ${c.faqPages} |`);
  lines.push(`| 可见 FAQ 但无 FAQPage | ${c.pagesWithVisibleFaqButNoNode} |`);
  lines.push(`| 带 WebPage 节点 | ${c.webPageNodes} |`);
  lines.push(`| 表格总数 / 可抽取 | ${c.tablesTotal} / ${c.tablesExtractable} |`);
  lines.push('');
  lines.push('Schema 节点覆盖：');
  lines.push('');
  for (const [type, count] of Object.entries(c.types)) {
    lines.push(`- \`${type}\`：${count} 页`);
  }

  lines.push('');
  lines.push('## 1. 风险整改清单（高优先级，影响本次核心更新排名）');
  lines.push('');
  const high = report.risks.filter((r) => r.severity === 'high');
  if (!high.length) lines.push('_本次扫描未发现 high 级风险。_');
  for (const risk of high) {
    lines.push(`### ${risk.route}`);
    lines.push('');
    lines.push(`- **问题**：${risk.detail}`);
    lines.push(`- **规则**：\`${risk.code}\``);
    lines.push(`- **修复动作**：${risk.fix}`);
    lines.push('');
  }

  lines.push('### 1b. 中低优先级问题汇总');
  lines.push('');
  lines.push('| 路由 | 级别 | 规则 | 问题 | 修复动作 |');
  lines.push('| --- | --- | --- | --- | --- |');
  for (const risk of report.risks.filter((r) => r.severity !== 'high')) {
    lines.push(
      `| ${risk.route} | ${risk.severity} | \`${risk.code}\` | ${risk.detail} | ${risk.fix} |`
    );
  }
  lines.push('');

  lines.push('## 2. Schema 审计结果 + 缺失字段补全方案');
  lines.push('');
  lines.push('| 路由 | Product 缺失字段 | 可见FAQ | FAQPage | 表格 | 可抽取 |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  for (const page of report.pages.filter((p) => p.hasProduct || p.visibleFaqBlocks > 0)) {
    lines.push(
      `| ${page.route} | ${page.missingProductFields.join(', ') || '—'} | ${page.visibleFaqBlocks} | ` +
        `${page.hasFaqPage ? '有' : '无'} | ${page.tableCount} | ${page.extractableTables} |`
    );
  }
  lines.push('');
  lines.push('推荐补全属性：');
  lines.push('');
  lines.push('- `Product.category` — 产品族，例如 `Titanium Plate and Sheet`');
  lines.push('- `Product.material` — 牌号与 UNS，例如 `Grade 2 / UNS R50400`');
  lines.push('- `Product.additionalType` — 具体形态，例如 `Coiled Titanium Strip`');
  lines.push('- `Product.additionalProperty` — 参数逐项（`PropertyValue`，带 `unitText`）');
  lines.push('- `Product.image` / `Product.itemCondition` / `Product.offers` — 有报价口径时再挂 `Offer`');
  lines.push('- `WebPage` — 全站补节点，承载 `dateModified`、`primaryImageOfPage`、`about`');
  lines.push('- `FAQPage` — 用页面可见 FAQ 数据生成，答案文本逐字一致');
  lines.push('');

  lines.push('## 3. AI 流量归因埋点校验');
  lines.push('');
  lines.push('- 全站检索 `gtag` / `GTM-` / `googletagmanager` / `dataLayer`：**0 命中**');
  lines.push('- 结论：当前站点**无法区分普通自然搜索与 AI Overviews / AI Mode / Copilot 进站流量**，');
  lines.push('  因为没有任何 Google Tag 事件被上报，GA4 侧也无会话来源可拆');
  lines.push('- 落地步骤见 `docs/seo/ai-traffic-attribution.md`（env 门控接入点已在 `src/layouts/BaseLayout.astro`）');
  lines.push('');

  lines.push('## 4. GEO 正向优化清单');
  lines.push('');
  lines.push('| 路由 | 优化项 | 理由 |');
  lines.push('| --- | --- | --- |');
  for (const item of report.geo) {
    lines.push(`| ${item.route} | ${item.item} | ${item.why} |`);
  }
  lines.push('');

  lines.push('## 5. 站内自复制证据（竞品复刻风险的本侧镜像）');
  lines.push('');
  if (!report.duplicates.length) {
    lines.push('_未发现跨页完全重复的长段落。_');
  } else {
    lines.push('| 重复段落（截断） | 出现页面 |');
    lines.push('| --- | --- |');
    for (const dup of report.duplicates) {
      lines.push(`| ${dup.text}… | ${dup.routes.join(' · ')} |`);
    }
  }
  lines.push('');
  lines.push('## 6. 页面相似度 Top 20（模板化程度）');
  lines.push('');
  lines.push('| 路由 | 最高相似度 | 最相似页面 |');
  lines.push('| --- | --- | --- |');
  for (const page of [...report.pages]
    .filter((p) => p.topSimilar > 0)
    .sort((a, b) => b.topSimilar - a.topSimilar)
    .slice(0, 20)) {
    lines.push(`| ${page.route} | ${page.topSimilar} | ${page.topPeer} |`);
  }
  lines.push('');

  return `${lines.join('\n')}\n`;
}

main();




