/**
 * Source-eligibility audit of the commercial pages.
 *
 * Reads `dist/` (read-only) and scores every page of the audit scope against
 * the six dimensions of the source-eligibility standard:
 *
 *   1  index eligibility     hard gate
 *   2  query relevance
 *   3  facts and evidence    hard gate
 *   4  information completeness
 *   5  source credibility
 *   6  commercial conversion
 *
 * The scope is the 33 commercial pages of three product families. The scope is
 * fixed in `docs/seo/ai-source-eligibility-audit.md` and must not change here.
 *
 * The script never touches a page. It reports; humans decide.
 *
 *   node scripts/seo/source-eligibility-audit.mjs [distDir] [outDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.resolve(process.argv[2] || path.join(ROOT, 'dist'));
const OUT_DIR = path.resolve(process.argv[3] || path.join(ROOT, 'tmp', 'source-eligibility'));

/** The canonical origin of the site. */
const ORIGIN = 'https://titanium-parts.com';

/** A page must carry at least this many traceability anchors to be sourced. */
const MIN_TRACE_ANCHORS = 2;
/** A page is considered well sourced when it carries at least this many anchors. */
const GOOD_TRACE_ANCHORS = 4;
/** Above this similarity to another page the two are the same content. */
const CLONE_THRESHOLD = 0.55;
/** Below this similarity the page is clearly its own source. */
const CLEAR_SIMILARITY = 0.2;
/** A page below this word count carries too little to judge. */
const THIN_WORDS = 1500;
const EMPTY_WORDS = 800;

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

/**
 * Certificate anchors. The standard allows a certificate as a traceability
 * source, not only a standard number.
 */
const CERTIFICATE_PATTERNS = [
  /\bEN\s?10204\b/gi,
  /\bMTC\b/gi,
  /\bmill test certificate\b/gi,
  /\bPMI\b/gi,
  /\bthird[- ]party inspection\b/gi,
  /\bCertificate of Conformity\b/gi,
];

/**
 * Order-confirmed anchors. The standard says a value that cannot be traced to
 * a clause must be downgraded to "confirmed per order" rather than given an
 * invented standard number, so such a statement counts as a traceability
 * anchor.
 */
const ORDER_CONFIRMED_PATTERNS = [
  /\bconfirmed (per|at|on) order\b/gi,
  /\bper order confirmation\b/gi,
  /\bquotation-specific\b/gi,
  /\bconfirmed at quotation\b/gi,
  /\bsubject to order\b/gi,
  /\bconfirmed on (the )?inquiry\b/gi,
];

/**
 * Claims the site cannot document. The site is an engineering and sourcing
 * resource, not a factory it owns, so every one of these is a defect in the
 * credibility dimension.
 */
const UNVERIFIABLE_CLAIM_PATTERNS = [
  { re: /\bour own factory\b/i, label: '宣称自有工厂' },
  { re: /\bwe own\b[^.]{0,40}\bfactor(y|ies)\b/i, label: '宣称自有工厂' },
  { re: /\binside our (factory|facility|plant|works|shop)\b/i, label: '章节标题暗示自有工厂' },
  { re: /\bour own (facility|plant|works|shop|mill)\b/i, label: '宣称自有产线' },
  { re: /\b(produced|rolled|formed|machined|manufactured|made)\b[^.]{0,60}\bin our own\b/i, label: '宣称自有产线' },
  { re: /\bfactory[- ]direct\b/i, label: '宣称 factory-direct' },
  { re: /\bwe are a (titanium )?(manufacturer|factory|mill)\b/i, label: '宣称制造身份' },
  { re: /\bin-house (production|manufacturing|factory)\b/i, label: '宣称自有产线' },
  { re: /\b\d+\+?\s*years of (experience|expertise|manufacturing)\b/i, label: '宣称从业年限' },
  { re: /\bISO\s?9001 certified\b/i, label: '宣称体系认证' },
  { re: /\b\d{2,}\+?\s*(employees|staff|workers|machines|production lines)\b/i, label: '宣称规模数字' },
  { re: /\b\d{2,}\+?\s*(tons?|tonnes?)\s+(per|\/|a)\s+year\b/i, label: '宣称产能数字' },
];

/**
 * Statements that make the supply relationship and the responsibility clear.
 * The site coordinates production with qualified partners, so any statement
 * that names that coordination counts.
 */
const BOUNDARY_PATTERNS = [
  /qualified (production )?partners?/i,
  /qualified partner workshops/i,
  /engineering support/i,
  /coordinated supply/i,
  /sourcing base/i,
  /we source/i,
  /sourcing and engineering/i,
  /production is placed with/i,
  /we coordinate/i,
  /\bcoordinat(e|es|ed|ing|ion)\b/i,
  /\bpartner(ship)?\b/i,
];

/** Words a buyer has to supply for a quotation to be answerable. */
const INQUIRY_KEYWORDS = [
  'drawing',
  'quantity',
  'tolerance',
  'dimension',
  'material grade',
  'standard',
  'application',
  'surface',
];

/**
 * The audit scope: 33 commercial pages of three product families.
 * [route, target query, page type, acceptable title form]
 *
 * The title form is a regular expression, not the query itself, because a
 * page may legitimately serve a query under a different but equivalent word
 * ("titanium tubing" is served by "Titanium Tube & Pipe", "titanium bolts" by
 * "Titanium Fasteners"). Scoring the literal query against the title would
 * report a mismatch that no buyer would ever notice.
 */
const SCOPE = [
  ['/titanium-products/', 'titanium products', 'hub', /titanium products/i],
  ['/titanium-products/titanium-plate/', 'titanium plate', 'product', /titanium (plate|sheet)/i],
  ['/titanium-products/titanium-foil-2/', 'titanium foil', 'product', /titanium (foil|strip)/i],
  ['/titanium-products/titanium-rod-bar/', 'titanium rod bar', 'product', /titanium (rod|bar)/i],
  ['/titanium-products/titanium-tubing/', 'titanium tubing', 'product', /titanium (tube|tubing|pipe)/i],
  ['/titanium-products/titanium-fittings/', 'titanium fittings', 'product', /titanium (pipe )?fittings/i],
  ['/titanium-products/titanium-flanges/', 'titanium flanges', 'product', /titanium (pipe )?flanges/i],
  ['/titanium-products/titanium-forgings/', 'titanium forgings', 'product', /titanium (forging|forged)/i],
  ['/titanium-products/titanium-mesh/', 'titanium mesh', 'product', /titanium mesh/i],
  ['/titanium-products/titanium-wire/', 'titanium wire', 'product', /titanium wire/i],
  ['/titanium-products/titanium-clad-copper/', 'titanium clad copper', 'product', /titanium[- ]?(clad|copper)/i],
  ['/titanium-products/titanium-bolts/', 'titanium bolts', 'product', /titanium (fastener|bolt)/i],
  ['/titanium-products/titanium-diaphragm/', 'titanium diaphragm', 'product', /titanium diaphragm/i],
  ['/titanium-products/titanium-coil/', 'titanium coil', 'product', /titanium coil/i],
  ['/titanium-products/titanium-baskets/', 'titanium baskets', 'product', /titanium (anode )?baskets?/i],
  ['/titanium-products/titanium-balls/', 'titanium balls', 'product', /titanium (balls?|spheres?)/i],
  ['/titanium-anode/', 'titanium anode', 'hub', /titanium anode/i],
  ['/titanium-anode/coating-systems/', 'anode coating systems', 'hub', /coating/i],
  ['/titanium-anode/anti-fouling-system/', 'anti fouling anode', 'system', /anti[- ]?fouling/i],
  ['/titanium-anode/iridium-oxide-coated-titanium-anodes/', 'iridium oxide coated titanium anodes', 'coating', /(iridium|ir-ta)/i],
  ['/titanium-anode/lead-dioxide-anode/', 'lead dioxide anode', 'coating', /lead[- ]?dioxide/i],
  ['/titanium-anode/platinized-anode/', 'platinized titanium anode', 'coating', /platiniz/i],
  ['/titanium-anode/ruthenium-coated-titanium-anodes/', 'ruthenium coated titanium anodes', 'coating', /(ruthenium|ru-ir)/i],
  ['/titanium-anode/mmo-anode/', 'mmo anode', 'hub', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-wire-anode/', 'mmo wire anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/', 'mmo mesh ribbon anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-ribbon-anode/', 'mmo ribbon anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-tubular-anode/', 'mmo tubular anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-rod-anode/', 'mmo rod anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-canister-anode/', 'mmo canister anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-disc-anode/', 'mmo disc anode', 'family', /mmo/i],
  ['/titanium-anode/mmo-anode/mmo-linear-anode/', 'mmo linear anode', 'family', /mmo/i],
  ['/pem-electrolyzer/', 'pem electrolyzer', 'equipment', /pem/i],
];

/** Words that carry no query meaning. */

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

/** The main content region of a built page. */
function mainContent(html) {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (m) return m[1];
  return html
    .replace(/<header\b[\s\S]*?<\/header>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, ' ');
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/** Visible text of the content region, with script and style removed. */
function visibleText(html) {
  const body = mainContent(html)
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ');
  return decodeEntities(body.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function textOf(html, regex) {
  const m = html.match(regex);
  return m ? decodeEntities(m[1]).trim() : '';
}

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

/** Distinct traceability anchors found in the text. */
function countMatches(text, patterns) {
  const found = new Set();
  for (const pattern of patterns) {
    const matches = text.match(pattern);
    if (!matches) continue;
    for (const match of matches) found.add(match.trim().toUpperCase());
  }
  return [...found];
}

/**
 * The sentence around the first match of a pattern.
 * Used as the evidence for a credibility finding.
 */
function sentenceAround(text, pattern) {
  const match = text.match(pattern);
  if (!match) return '';
  const index = match.index ?? 0;
  const start = text.lastIndexOf('.', index) + 1;
  const dot = text.indexOf('.', index + match[0].length);
  const end = dot === -1 ? text.length : dot + 1;
  return text.slice(start, end).trim();
}

/** Read the built robots.txt, if it exists. */
function readRobots() {
  const file = path.join(DIST, 'robots.txt');
  if (!fs.existsSync(file)) return '';
  return fs.readFileSync(file, 'utf8');
}

/** All routes listed in the built sitemap. */
function sitemapRoutes() {
  const out = new Set();
  for (const file of walk(DIST).filter((f) => /^sitemap.*\.xml$/.test(path.basename(f)))) {
    const xml = fs.readFileSync(file, 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = m[1].trim();
      const u = new URL(url);
      out.add(u.pathname);
    }
  }
  return out;
}

/**
 * Analyse one built page.
 * Everything here is measured from the artefact; nothing is assumed.
 */
function analysePage(file, robots, sitemap) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeOf(file);
  const text = visibleText(html);
  const words = text.split(/\s+/).filter(Boolean).length;

  const title = textOf(html, /<title>([^<]*)<\/title>/);
  const h1 = textOf(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const description = textOf(html, /<meta name="description" content="([^"]*)"/);
  const canonical = textOf(html, /<link rel="canonical" href="([^"]*)"/);
  const robotsMeta = textOf(html, /<meta name="robots" content="([^"]*)"/);
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  const tables = (html.match(/<table\b[\s\S]*?<\/table>/gi) || []).map((table) => {
    const rows = (table.match(/<tr\b/gi) || []).length;
    const captions = (table.match(/<caption\b/gi) || []).length;
    const scoped = (table.match(/<th\b[^>]*\bscope=/gi) || []).length;
    return { rows, captions, scoped, extractable: captions > 0 && scoped > 0 && rows > 2 };
  });

  const faqItems = (mainContent(html).match(/<details\b/gi) || []).length;
  // The RFQ block is identified by the form itself and by the anchor that
  // points at it. The anchor id is page specific (`#tp-rfq`, `#anode-rfq`, ...),
  // so a fixed id would have reported a missing form on every page.
  const hasRfqAnchor =
    /class="[^"]*rfq-form[^"]*"/i.test(html) ||
    /href="#[^"]*rfq[^"]*"/i.test(html) ||
    /id="[^"]*rfq[^"]*"/i.test(html);
  const inquiryTerms = INQUIRY_KEYWORDS.filter((k) => new RegExp(k, 'i').test(text));

  const traceAnchors = [
    ...countMatches(text, TRACE_PATTERNS),
    ...countMatches(text, CERTIFICATE_PATTERNS),
    ...countMatches(text, ORDER_CONFIRMED_PATTERNS),
  ];
  // The matched sentence is kept so a credibility verdict can be checked
  // against the page instead of taken on trust.
  const unverifiable = [];
  const seenClaims = new Set();
  for (const p of UNVERIFIABLE_CLAIM_PATTERNS) {
    if (!p.re.test(text)) continue;
    const quote = sentenceAround(text, p.re);
    const key = `${p.label}|${quote}`;
    if (seenClaims.has(key)) continue;
    seenClaims.add(key);
    unverifiable.push({ label: p.label, quote });
  }
  const boundaryHits = [];
  const seenBoundary = new Set();
  for (const p of BOUNDARY_PATTERNS) {
    if (!p.test(text)) continue;
    const quote = sentenceAround(text, p);
    if (seenBoundary.has(quote)) continue;
    seenBoundary.add(quote);
    boundaryHits.push({ pattern: p.source, quote });
  }
  // A self-description in the title is reported, not scored: the site's own
  // positioning is a separate decision and is not this audit's to change.
  const titleSelfClaim = /manufacturer|factory|producer|supplier|distributor/i.test(title)

  const robotsAllows = /Allow:\s*\//i.test(robots) && !/Disallow:\s*\/\s*$/im.test(robots);
  const robotsIndexable = /index/i.test(robotsMeta) && !/noindex/i.test(robotsMeta);
  const canonicalAbsolute = /^https?:\/\//i.test(canonical);
  const canonicalSelf =
    canonicalAbsolute &&
    canonical.replace(/\/$/, '') === `${ORIGIN}${route}`.replace(/\/$/, '');
  const inSitemap = sitemap.has(route);

  return {
    route,
    file: path.relative(ROOT, file).replace(/\\/g, '/'),
    title,
    h1,
    description,
    canonical,
    robotsMeta,
    h1Count,
    words,
    tableCount: tables.length,
    extractableTables: tables.filter((t) => t.extractable).length,
    faqItems,
    hasRfqAnchor,
    inquiryTerms,
    traceAnchors,
    unverifiable,
    boundaryHits,
    titleSelfClaim,
    robotsAllows,
    robotsIndexable,
    canonicalAbsolute,
    canonicalSelf,
    inSitemap,
    fingerprint: shingles(text),
  };
}

/**
 * Score one page against the six dimensions.
 *
 * The scoring rules are fixed in `docs/seo/ai-source-eligibility-audit.md`
 * section 2. Every deduction carries the evidence that caused it, so a score
 * can be checked against the artefact instead of trusted.
 */
function score(page, targetQuery, type, titleForm) {
  const evidence = [];
  const add = (dim, finding, proof) => evidence.push({ dim, finding, proof });

  // ① index eligibility (20, hard gate)
  const indexChecks = [
    ['robots.txt 允许抓取', page.robotsAllows, 'robots.txt'],
    ['页面 robots meta 为 index', page.robotsIndexable, page.robotsMeta || '(缺失)'],
    ['canonical 为绝对 URL', page.canonicalAbsolute, page.canonical || '(缺失)'],
    ['canonical 指向自身', page.canonicalSelf, page.canonical || '(缺失)'],
    ['H1 唯一', page.h1Count === 1, `h1Count=${page.h1Count}`],
    ['出现在 sitemap', page.inSitemap, page.inSitemap ? '已收录' : '未收录'],
  ];
  let d1 = 20;
  for (const [label, ok, proof] of indexChecks) {
    if (ok) continue;
    d1 -= 4;
    add(1, `索引资格：${label}未通过`, proof);
  }
  const gate1 = !page.canonicalSelf || page.h1Count !== 1;

  // ② query relevance (20)
  // The title form is the primary signal; the H1 is the accepted fallback,
  // because a page whose H1 names the product still answers the query.
  const titleHit = titleForm.test(page.title);
  const h1Hit = titleForm.test(page.h1);
  let d2 = 20;
  let d2Finding = titleHit ? '标题族命中目标查询' : `H1 命中目标查询（标题为 ${page.title}）`;
  if (!titleHit && !h1Hit) {
    d2 -= 20;
    d2Finding = `标题与 H1 均未命中目标查询（${targetQuery}）`;
    add(2, d2Finding, `title="${page.title}" · h1="${page.h1}"`);
  } else if (!titleHit) {
    d2 -= 8;
    add(2, d2Finding, `title="${page.title}" · h1="${page.h1}"`);
  }
  if (d2 > 0 && page.topSimilar >= CLONE_THRESHOLD) {
    d2 -= 12;
    d2Finding = `与 ${page.topPeer} 相似度 ${(page.topSimilar * 100).toFixed(1)}%，疑似同源模板`;
    add(2, d2Finding, `topSimilar=${page.topSimilar.toFixed(3)}`);
  } else if (d2 > 0 && page.topSimilar > CLEAR_SIMILARITY) {
    d2 -= 8;
    d2Finding = `与 ${page.topPeer} 相似度 ${(page.topSimilar * 100).toFixed(1)}%，内容区分度不足`;
    add(2, d2Finding, `topSimilar=${page.topSimilar.toFixed(3)}`);
  }

  // ③ facts and evidence (20, hard gate)
  const anchorCount = page.traceAnchors.length;
  let d3 = 20;
  let d3Finding = `溯源锚点 ${anchorCount} 个`;
  if (anchorCount < MIN_TRACE_ANCHORS) {
    d3 = 0;
    d3Finding = `仅 ${anchorCount} 个溯源锚点，参数无出处`;
    add(3, d3Finding, `anchors=[${page.traceAnchors.join(', ') || '无'}]`);
  } else if (anchorCount < GOOD_TRACE_ANCHORS) {
    d3 = 10;
    d3Finding = `溯源锚点仅 ${anchorCount} 个（建议 ≥ ${GOOD_TRACE_ANCHORS}）`;
    add(3, d3Finding, `anchors=[${page.traceAnchors.join(', ')}]`);
  }
  const gate3 = anchorCount < MIN_TRACE_ANCHORS;

  // ④ information completeness (15)
  let d4 = 15;
  const completeness = [
    [`正文词数 ≥ ${THIN_WORDS}`, page.words >= THIN_WORDS, `${page.words} 词`],
    ['至少 1 张可抽取表格', page.extractableTables >= 1, `可抽取 ${page.extractableTables}/${page.tableCount} 张`],
    ['至少 3 条可见 FAQ', page.faqItems >= 3, `${page.faqItems} 条`],
  ];
  for (const [label, ok, proof] of completeness) {
    if (ok) continue;
    if (page.words < EMPTY_WORDS && label.startsWith('正文词数')) {
      d4 = 0;
      add(4, `信息完整性：${label}未通过（正文过薄）`, proof);
      continue;
    }
    d4 -= 5;
    add(4, `信息完整性：${label}未通过`, proof);
  }

  // ⑤ source credibility (15)
  let d5 = 15;
  let d5Finding = '无不可证主张，且写明供应关系与责任边界';
  if (page.unverifiable.length > 0) {
    d5 = 0;
    const labels = [...new Set(page.unverifiable.map((u) => u.label))];
    d5Finding = `出现不可证主张：${labels.join('、')}`;
    for (const u of page.unverifiable) {
      add(5, `不可证主张（${u.label}）`, u.quote);
    }
  } else if (page.boundaryHits.length === 0) {
    d5 -= 7;
    d5Finding = '未见供应关系与责任边界表述';
    add(5, d5Finding, 'BOUNDARY_PATTERNS 命中 0 条');
  }
  if (page.titleSelfClaim) {
    add(5, '标题含制造/供应类自称（不计入分数，需人工确认定位口径）', `title="${page.title}"`);
  }

  // ⑥ commercial conversion (10)
  let d6 = 10;
  const conversion = [
    ['RFQ 入口可达', page.hasRfqAnchor, page.hasRfqAnchor ? '存在 #inquiry 入口' : '未找到 RFQ 入口'],
    ['列明询价资料项', page.inquiryTerms.length >= 3, `命中 ${page.inquiryTerms.length} 项：${page.inquiryTerms.join(', ') || '无'}`],
  ];
  for (const [label, ok, proof] of conversion) {
    if (ok) continue;
    d6 -= 5;
    add(6, `商业转化：${label}未通过`, proof);
  }

  const scores = {
    d1: Math.max(0, d1),
    d2: Math.max(0, d2),
    d3: Math.max(0, d3),
    d4: Math.max(0, d4),
    d5: Math.max(0, d5),
    d6: Math.max(0, d6),
  };
  const total = scores.d1 + scores.d2 + scores.d3 + scores.d4 + scores.d5 + scores.d6;
  const band = total >= 80 ? 'monitor' : total >= 60 ? 'fix-gaps' : 'base-quality';

  return {
    route: page.route,
    type,
    targetQuery,
    hardGate: gate1 || gate3 ? 'fail' : 'pass',
    gateReasons: [
      ...(gate1 ? ['① 索引资格未通过'] : []),
      ...(gate3 ? ['③ 事实与证据未通过'] : []),
    ],
    scores,
    total,
    band,
    findings: [
      { dim: 1, finding: indexChecks.every(([, ok]) => ok) ? '索引条件五项全中' : '索引条件存在缺项', proof: `robots=${page.robotsMeta} · canonical=${page.canonical} · h1=${page.h1Count} · sitemap=${page.inSitemap ? '有' : '无'}` },
      { dim: 2, finding: d2Finding, proof: `title="${page.title}" · h1="${page.h1}" · topSimilar=${page.topSimilar.toFixed(3)} (peer ${page.topPeer})` },
      { dim: 3, finding: d3Finding, proof: `anchors=[${page.traceAnchors.join(', ') || '无'}]` },
      { dim: 4, finding: `${page.words} 词 · ${page.extractableTables}/${page.tableCount} 张可抽取表 · ${page.faqItems} 条 FAQ`, proof: 'dist 实测' },
      { dim: 5, finding: d5Finding, proof: page.boundaryHits.length ? `boundary=${page.boundaryHits.map((b) => b.quote).join(' | ')}` : 'boundary 命中 0 条' },
      { dim: 6, finding: `RFQ 入口 ${page.hasRfqAnchor ? '有' : '无'} · 询价资料项 ${page.inquiryTerms.length} 项`, proof: page.inquiryTerms.join(', ') || '无' },
    ],
    evidence,
    metrics: {
      words: page.words,
      h1Count: page.h1Count,
      canonical: page.canonical,
      robotsMeta: page.robotsMeta,
      inSitemap: page.inSitemap,
      tableCount: page.tableCount,
      extractableTables: page.extractableTables,
      faqItems: page.faqItems,
      traceAnchors: page.traceAnchors,
      topSimilar: Number(page.topSimilar.toFixed(3)),
      topPeer: page.topPeer,
      unverifiable: page.unverifiable,
      inquiryTerms: page.inquiryTerms,
    },
  };
}

/** The most similar other page of the scope. */
function nearestPeer(page, peers) {
  let topSimilar = 0;
  let topPeer = null;
  for (const peer of peers) {
    if (peer.route === page.route) continue;
    const value = jaccard(page.fingerprint, peer.fingerprint);
    if (value > topSimilar) {
      topSimilar = value;
      topPeer = peer.route;
    }
  }
  return { topSimilar, topPeer };
}

/**
 * The action a finding implies.
 *
 * The audit does not fix anything. It names the action so that a later task
 * can pick it up without re-reading the pages.
 */
function actionFor(evidence) {
  if (evidence.dim === 1) return '修技术项：robots meta / canonical / h1 / sitemap 覆盖';
  if (evidence.dim === 2) return '调整标题族与 H1，使标题直接命中目标查询词';
  if (evidence.dim === 3) return '给每个技术参数补出处（标准号 / UNS / 证书 / 按订单确认），不猜标准号';
  if (evidence.dim === 4) return '补真实采购信息：规格表、可抽取表格与可见 FAQ';
  if (evidence.dim === 5) return '改写为「工程支持 + 采购协调 + 合格生产伙伴」的可证伪表述，删掉自有产线主张';
  if (evidence.dim === 6) return '优化询盘路径与表单资料项提示';
  return '待立项';
}

/** Render the report as the page check table. */
function renderMarkdown(report) {
  const lines = [];
  lines.push('# 商业页面 AI 搜索选源资格检查表');
  lines.push('');
  lines.push(`- 生成时间：${report.generatedAt}`);
  lines.push(`- 生成方式：\`npm run qa:elig\`（脚本 \`scripts/seo/source-eligibility-audit.mjs\`，只读 \`dist/\`）`);
  lines.push(`- 扫描范围：\`${report.dist}\`，全站 ${report.pageCount} 页；判定范围 ${report.scope.length} 页`);
  lines.push(`- 判定阈值：溯源锚点 ≥ ${MIN_TRACE_ANCHORS}（硬门槛）；良好溯源 ≥ ${GOOD_TRACE_ANCHORS}；相似度上限 ${CLONE_THRESHOLD}`);
  lines.push('- 硬性门槛：① 索引资格 与 ③ 事实与证据，任一未通过即判不通过');
  lines.push('');
  lines.push('> **本表只做判定与记录，不改任何页面。** 所有"修复动作"列均为建议，');
  lines.push('> 未在本轮实施；实施须另立任务，并受 `docs/seo/execution-plan.md` 的红线约束。');
  lines.push('>');
  lines.push('> **关于收录状态**：本表只判定技术可索引性，**不含**"是否已被 Google 收录"的结论。');
  lines.push('> 收录状态只能通过 Search Console 或人工核验得出。');
  lines.push('');
  lines.push('## 0. 概览');
  lines.push('');
  lines.push('| 产品类 | 页数 | 门槛通过 | 门槛未通过 | 平均分 |');
  lines.push('| --- | ---: | ---: | ---: | ---: |');
  for (const group of report.groups) {
    lines.push(`| ${group.name} | ${group.total} | ${group.pass} | ${group.fail} | ${group.average} |`);
  }
  lines.push(`| **合计** | **${report.totals.total}** | **${report.totals.pass}** | **${report.totals.fail}** | **${report.totals.average}** |`);
  lines.push('');
  lines.push('## 1. 页面检查表');
  lines.push('');
  lines.push('| 页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果 |');
  lines.push('| --- | --- | --- | --- | --- | --- | --- |');
  for (const page of report.pages) {
    const s = page.scores;
    const scoreText = `${s.d1}/${s.d2}/${s.d3}/${s.d4}/${s.d5}/${s.d6} = ${page.total}`;
    const gateText = page.hardGate === 'pass' ? '通过' : `未通过（${page.gateReasons.join('；')}）`;
    const evidenceText = page.evidence.length
      ? page.evidence.map((e) => `${e.finding}｜${e.proof}`).join('<br>')
      : '六维均达标，无待修缺口';
    const actions = [...new Set(page.evidence.map((e) => actionFor(e)))];
    const actionText = actions.length ? actions.join('；') : '无需修复';
    const fixState = page.evidence.length ? '未修复（本轮不擅自改码，待立项）' : '无需修复';
    lines.push(
      `| ${page.route} | ${page.targetQuery} | ${gateText} | ${scoreText} | ${evidenceText} | ${actionText} | ${fixState} |`
    );
  }
  lines.push('');
  lines.push('## 2. 跨页问题聚类');
  lines.push('');
  const clusters = new Map();
  for (const page of report.pages) {
    for (const e of page.evidence) {
      const key = `${e.dim}|${e.finding}`;
      if (!clusters.has(key)) clusters.set(key, { dim: e.dim, finding: e.finding, routes: [] });
      clusters.get(key).routes.push(page.route);
    }
  }
  const sorted = [...clusters.values()].sort(
    (a, b) => b.routes.length - a.routes.length || a.dim - b.dim
  );
  lines.push('| 维度 | 问题 | 命中页数 | 涉及路由 |');
  lines.push('| --- | --- | ---: | --- |');
  for (const c of sorted) {
    lines.push(`| ${c.dim} | ${c.finding} | ${c.routes.length} | ${c.routes.join('<br>')} |`);
  }
  lines.push('');
  lines.push('## 3. 逐维明细');
  lines.push('');
  for (const page of report.pages) {
    lines.push(`### ${page.route}`);
    lines.push('');
    lines.push(`- 目标查询：${page.targetQuery}（页面类型：${page.type}）`);
    lines.push(`- 硬性门槛：**${page.hardGate === 'pass' ? '通过' : '未通过'}**${page.gateReasons.length ? ` — ${page.gateReasons.join('；')}` : ''}`);
    lines.push(`- 总分：${page.total}（${page.band}）`);
    lines.push('');
    lines.push('| 维度 | 得分 | 判定 | 证据 |');
    lines.push('| --- | ---: | --- | --- |');
    for (const f of page.findings) {
      lines.push(`| ${f.dim} | ${page.scores[`d${f.dim}`]} | ${f.finding} | ${f.proof} |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error(`dist/ not found — ${DIST}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const robots = readRobots();
  const sitemap = sitemapRoutes();
  const files = walk(DIST).filter((f) => f.endsWith('.html'));

  const byRoute = new Map();
  for (const file of files) {
    const route = routeOf(file);
    if (byRoute.has(route)) continue;
    byRoute.set(route, file);
  }

  const missing = [];
  const analysed = [];
  for (const [route, query, type, titleForm] of SCOPE) {
    const file = byRoute.get(route);
    if (!file) {
      missing.push(route);
      continue;
    }
    analysed.push({ page: analysePage(file, robots, sitemap), query, type, titleForm });
  }

  const peers = analysed.map((a) => a.page);
  const pages = [];
  for (const { page, query, type, titleForm } of analysed) {
    const { topSimilar, topPeer } = nearestPeer(page, peers);
    page.topSimilar = topSimilar;
    page.topPeer = topPeer;
    pages.push(score(page, query, type, titleForm));
  }

  const familyOf = (route) => {
    if (route.startsWith('/titanium-products/')) return 'Titanium Products';
    if (route.startsWith('/titanium-anode/')) return 'Titanium Anodes';
    if (route.startsWith('/pem-electrolyzer/')) return 'PEM Electrolyzer';
    return 'Other';
  };

  const groupNames = ['Titanium Products', 'Titanium Anodes', 'PEM Electrolyzer'];
  const groups = groupNames.map((name) => {
    const members = pages.filter((p) => familyOf(p.route) === name);
    const pass = members.filter((p) => p.hardGate === 'pass').length;
    const average = members.length
      ? (members.reduce((n, p) => n + p.total, 0) / members.length).toFixed(1)
      : '0.0';
    return { name, total: members.length, pass, fail: members.length - pass, average };
  });
  const totals = {
    total: pages.length,
    pass: pages.filter((p) => p.hardGate === 'pass').length,
    fail: pages.filter((p) => p.hardGate === 'fail').length,
    average: pages.length
      ? (pages.reduce((n, p) => n + p.total, 0) / pages.length).toFixed(1)
      : '0.0',
  };

  const report = {
    generatedAt: new Date().toISOString(),
    dist: path.relative(ROOT, DIST).replace(/\\/g, '/'),
    pageCount: files.length,
    scope: SCOPE.map(([route]) => route),
    missingInDist: missing,
    thresholds: {
      minTraceAnchors: MIN_TRACE_ANCHORS,
      goodTraceAnchors: GOOD_TRACE_ANCHORS,
      cloneThreshold: CLONE_THRESHOLD,
      clearSimilarity: CLEAR_SIMILARITY,
      thinWords: THIN_WORDS,
    },
    groups,
    totals,
    pages,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, 'source-eligibility.json');
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  const md = renderMarkdown(report);
  const mdPath = path.join(OUT_DIR, 'source-eligibility.md');
  fs.writeFileSync(mdPath, md, 'utf8');
  // The results table is a deliverable, so it is written into docs/ as well.
  const resultsPath = path.join(ROOT, 'docs', 'seo', 'ai-source-eligibility-results.md');
  fs.writeFileSync(resultsPath, md, 'utf8');

  console.log(
    `source-eligibility: ${pages.length}/${SCOPE.length} scoped pages, ${totals.pass} gate pass, ${totals.fail} gate fail, avg ${totals.average}`
  );
  if (missing.length) console.log(`  missing in dist: ${missing.join(', ')}`);
  console.log(`  ${path.relative(ROOT, jsonPath)}`);
  console.log(`  ${path.relative(ROOT, mdPath)}`);
}

main();

