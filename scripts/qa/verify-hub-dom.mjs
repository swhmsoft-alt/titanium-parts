/**
 * Verify the heading outline, the FAQ/JSON-LD consistency and the internal
 * links of the built industry hub page.
 *
 *   node scripts/qa/verify-hub-dom.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.join(ROOT, 'dist');
const PAGE = path.join(DIST, 'industries', 'index.html');

let problems = 0;
const ok = (msg) => console.log(`  PASS  ${msg}`);
const bad = (msg) => {
  problems++;
  console.log(`  FAIL  ${msg}`);
};

if (!fs.existsSync(PAGE)) {
  console.error('dist/industries/index.html not found — run `npm run build` first.');
  process.exit(1);
}

const html = fs.readFileSync(PAGE, 'utf8');

/** Decode the entities Astro emits into text nodes. */
const decode = (t) =>
  t
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

// The site header and footer carry their own headings and <summary> elements.
// The outline of the page itself is the content inside <main>.
const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
if (!mainMatch) {
  bad('no <main> element found in the built page');
  console.log('\nHALTED');
  process.exit(1);
}
const main = mainMatch[1];

/* --- 1. heading outline ------------------------------------------------ */
console.log('\n=== Heading outline ===');
const headings = [...main.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => ({
  level: Number(m[1][1]),
  text: decode(m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()),
}));

const h1s = headings.filter((h) => h.level === 1);
if (h1s.length === 1) ok(`exactly one H1: "${h1s[0].text}"`);
else bad(`expected 1 H1, found ${h1s.length}`);

for (const h of headings) console.log(`  h${h.level}  ${h.text}`);

// A heading must never jump more than one level down from the previous one.
let prev = 1;
for (const h of headings) {
  if (h.level > prev + 1) {
    bad(`heading level jumps h${prev} -> h${h.level} at "${h.text}"`);
  }
  prev = h.level;
}

const h2s = headings.filter((h) => h.level === 2);
const h3s = headings.filter((h) => h.level === 3);
console.log(`\n  H2 count: ${h2s.length}   H3 count: ${h3s.length}`);
if (h3s.length === 17) ok('H3 count is 17 (3 routes + 9 industries + 2 qualification + 3 RFQ)');
else bad(`expected 17 H3, found ${h3s.length}`);

/* --- 2. FAQ accordion vs FAQPage JSON-LD ------------------------------- */
console.log('\n=== FAQ consistency ===');
const domQuestions = [...main.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/gi)]
  .map((m) => decode(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()))
  .filter((q) => q && !q.startsWith('<'));
const domAnswers = [...main.matchAll(/<div class="hub-faq-answer[^"]*"[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)]
  .map((m) => decode(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()));

const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!ldMatch) {
  bad('no JSON-LD block found');
} else {
  let ld;
  try {
    ld = JSON.parse(ldMatch[1]);
  } catch (e) {
    bad(`JSON-LD is not valid JSON: ${e.message}`);
  }
  if (ld) {
    const faq = (ld['@graph'] || []).find((n) => n['@type'] === 'FAQPage');
    if (!faq) {
      bad('JSON-LD graph carries no FAQPage node');
    } else {
      ok('JSON-LD parses and carries a FAQPage node');
      const entities = faq.mainEntity || [];
      if (entities.length === domQuestions.length) {
        ok(`FAQ count matches: ${entities.length} questions in DOM and JSON-LD`);
      } else {
        bad(`FAQ count mismatch: ${entities.length} in JSON-LD vs ${domQuestions.length} in DOM`);
      }
      let mismatch = 0;
      entities.forEach((e, i) => {
        if (e.name !== domQuestions[i]) {
          mismatch++;
          console.log(`        Q mismatch [${i}]: ld="${e.name}" dom="${domQuestions[i]}"`);
        }
        const ldAnswer = (e.acceptedAnswer?.text || '').replace(/\s+/g, ' ').trim();
        if (ldAnswer !== domAnswers[i]) {
          mismatch++;
          console.log(`        A mismatch [${i}]: ld="${ldAnswer}" dom="${domAnswers[i]}"`);
        }
      });
      if (mismatch === 0) ok('every question and answer matches character for character');
      else bad(`${mismatch} FAQ text mismatch(es)`);
    }
  }
}

/* --- 3. internal links ------------------------------------------------- */
console.log('\n=== Internal links ===');
function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}
const routes = new Set(
  walk(DIST)
    .filter((f) => f.endsWith('.html'))
    .map((f) => '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '')),
);
const hrefs = [
  ...new Set(
    [...main.matchAll(/href="(\/[^"#?]*)"/g)]
      .map((m) => m[1])
      // Static assets are not page routes — they are checked by the dead-link audit.
      .filter((h) => !/\.[a-z0-9]+$/i.test(h)),
  ),
];
let dead = 0;
for (const href of hrefs) {
  const route = href.endsWith('/') ? href : href + '/';
  if (!routes.has(route)) {
    dead++;
    console.log(`        dead: ${href}`);
  }
}
if (dead === 0) ok(`all ${hrefs.length} internal page links resolve to built routes`);
else bad(`${dead} dead internal link(s)`);

const expected = [
  '/titanium-products/',
  '/titanium-anode/',
  '/pem-electrolyzer/',
  '/industries/chemical-processing/',
  '/industries/marine-offshore/',
  '/industries/aerospace/',
  '/industries/medical/',
  '/industries/cathodic-protection/',
  '/industries/water-treatment/',
  '/industries/electroplating/',
  '/industries/electrowinning/',
  '/industries/hydrogen-energy/',
];
const missing = expected.filter((h) => !html.includes(`href="${h}"`));
if (missing.length === 0) ok('all 12 whitelisted target links are present on the page');
else bad(`missing expected links: ${missing.join(', ')}`);

/* --- 4. metadata ------------------------------------------------------- */
console.log('\n=== Metadata ===');
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
console.log(`  title length: ${title.length}   description length: ${desc.length}`);
if (title.length <= 70) ok('title within 70 characters');
else bad(`title too long: ${title.length}`);
if (desc.length >= 70 && desc.length <= 175) ok('description within 70-175 characters');
else bad(`description out of range: ${desc.length}`);

console.log(`\n${problems === 0 ? 'ALL CHECKS PASSED' : `${problems} PROBLEM(S) FOUND`}`);
process.exit(problems ? 1 : 0);
