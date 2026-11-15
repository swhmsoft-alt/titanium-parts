/**
 * Step 1 — enrich tmp/ref/family-model.json from the saved reference pages
 * in tmp/ref/<slug>.html.
 *
 * The hand written model never captured three facts that only the reference
 * page carries: the background band of every section, the eyebrow label above
 * the section heading, and the FAQ answers. The generated page therefore lost
 * every band and rendered empty FAQ panels.
 *
 * Local files only — no network. Safe to run repeatedly.
 */
import fs from 'node:fs';
import { parse } from 'parse5';

const SLUGS = [
  'mmo-wire-anode', 'mmo-ribbon-anode', 'mmo-mesh-ribbon-anode',
  'mmo-canister-anode', 'mmo-tubular-anode', 'mmo-disc-anode', 'mmo-rod-anode',
];

const report = [];
const log = (line) => report.push(line);

const txt = (n) => {
  if (!n) return '';
  if (n.nodeName === '#text') return n.value;
  if (!n.tagName) return '';
  let o = '';
  for (const c of n.childNodes ?? []) o += txt(c);
  return o;
};
const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value ?? '';
function findAll(node, pred, out = []) {
  for (const c of node.childNodes ?? []) {
    if (!c.tagName) continue;
    if (pred(c)) out.push(c);
    findAll(c, pred, out);
  }
  return out;
}
const find = (n, p) => findAll(n, p)[0];

const DEBRAND = [
  [/What HELE reviews/g, 'What we review'],
  [/Can HELE supply/g, 'Can we supply'],
  [/Inside HELE/g, 'Inside our factory'],
  [/HELE Engineering/g, 'our engineering team'],
  [/HELE engineering/g, 'our engineering team'],
  [/HELE manufactures/g, 'We manufacture'],
  [/HELE supplies/g, 'We supply'],
  [/HELE controls/g, 'We control'],
  [/HELE reviews/g, 'We review'],
  [/HELE also needs/g, 'We also need'],
  [/HELE can then review/g, 'We can then review'],
  [/Existing HELE available options/g, 'Available options'],
  [/Current HELE source configurations/g, 'Current source configurations'],
  [/HELE Titanium/g, 'our factory'],
  [/HELE’s/g, 'our'],
  [/HELE's/g, 'our'],
  [/\bHELE\b/g, 'our factory'],
];
const debrand = (text) => {
  let out = String(text);
  for (const [pattern, replacement] of DEBRAND) out = out.replace(pattern, replacement);
  return out;
};

const bandOf = (cls) => {
  if (/bg-\[#003366\]|bg-blue-950|bg-blue-900/.test(cls)) return 'navy';
  if (/bg-slate-950|bg-slate-900/.test(cls)) return 'dark';
  if (/bg-gray-50|bg-slate-50/.test(cls)) return 'alt';
  return 'plain';
};

const model = JSON.parse(fs.readFileSync('tmp/ref/family-model.json', 'utf8'));

for (const slug of SLUGS) {
  const doc = parse(fs.readFileSync(`tmp/ref/${slug}.html`, 'utf8'));
  const refSections = findAll(doc, (n) => n.tagName === 'section' && attr(n, 'id'));
  const page = model[slug];

  for (const section of page.sections) {
    const ref = refSections.find((r) => attr(r, 'id') === section.id);
    if (!ref) {
      log(`${slug}#${section.id} NO REFERENCE SECTION`);
      continue;
    }

    const band = bandOf(attr(ref, 'class'));
    if (section.tone !== band) {
      log(`${slug}#${section.id} tone ${section.tone} -> ${band}`);
      section.tone = band;
    }

    const h2 = find(ref, (n) => n.tagName === 'h2');
    const siblings = h2?.parentNode?.childNodes?.filter((n) => n.tagName) ?? [];
    const previous = siblings[siblings.indexOf(h2) - 1];
    const label = previous ? clean(txt(previous)) : '';
    const cls = previous ? attr(previous, 'class') : '';
    const isLabel =
      /eyebrow|uppercase|tracking/.test(cls) ||
      (label && label === label.toUpperCase() && /[A-Z]/.test(label));
    if (!section.eyebrow && label && label.length <= 70 && isLabel) {
      section.eyebrow = label;
      log(`${slug}#${section.id} eyebrow = "${label}"`);
    } else if (!section.eyebrow) {
      log(`${slug}#${section.id} NO EYEBROW (candidate "${label.slice(0, 40)}")`);
    }
  }

  const referenceFaq = findAll(doc, (n) => n.tagName === 'details')
    .map((d) => {
      const summary = find(d, (n) => n.tagName === 'summary');
      const siblings = summary?.parentNode?.childNodes?.filter((n) => n.tagName) ?? [];
      const body = siblings.find((n) => n !== summary);
      return { q: summary ? clean(txt(summary)) : '', a: body ? clean(txt(body)) : '' };
    })
    .filter((item) => item.q);

  for (const section of page.sections) {
    for (const block of section.blocks) {
      if (block.kind === 'faq') {
        for (const item of block.items) {
          if (item.a) continue;
          const wanted = debrand(item.q);
          const hit =
            referenceFaq.find((r) => debrand(r.q) === wanted) ??
            referenceFaq.find(
              (r) =>
                r.q &&
                wanted &&
                (debrand(r.q).startsWith(wanted.slice(0, 30)) ||
                  wanted.startsWith(debrand(r.q).slice(0, 30)))
            );
          if (hit?.a) {
            item.a = hit.a;
            log(`${slug} faq "${wanted.slice(0, 44)}" answer ${hit.a.length} chars`);
          } else {
            log(`${slug} faq "${wanted.slice(0, 44)}" NO ANSWER IN REFERENCE`);
          }
        }
      }
      if (block.kind === 'table') {
        const head = block.header ?? [];
        const first = block.rows?.[0] ?? [];
        if (head.length && first.length === head.length && first.every((v, i) => v === head[i])) {
          block.rows.shift();
          log(`${slug}#${section.id} table dropped duplicated header row`);
        }
        if (block.dark && section.tone !== 'dark' && section.tone !== 'navy') {
          block.dark = false;
          log(`${slug}#${section.id} table dark -> light (band ${section.tone})`);
        }
      }
    }
  }
}

fs.writeFileSync('tmp/ref/family-model.json', `${JSON.stringify(model, null, 2)}\n`);
fs.writeFileSync('tmp/qa/sync-family-model-report.txt', `${report.join('\n')}\n`);
console.log('model patched');
