/**
 * Page spec extractor — the base of the replica pipeline.
 *
 * A reference page is captured once into tmp/ref/<slug>.html. Everything its
 * layout is made of — the background band of a section, the vertical padding,
 * the container width, the type scale of the heading, the card and table
 * treatment — is encoded in the utility class names of that markup. This
 * script turns the captured page into a machine readable spec, so the visual
 * difference between the reference and the local page is a list, not an
 * opinion.
 *
 * Offline by design: it reads the captured pages, it never fetches.
 *
 *   node scripts/mmo/extract-page-spec.mjs            # all captured pages
 *   node scripts/mmo/extract-page-spec.mjs mmo-wire-anode
 */
import fs from 'node:fs';
import { parse } from 'parse5';

const SLUGS = fs
  .readdirSync('tmp/ref')
  .filter((name) => name.endsWith('.html'))
  .map((name) => name.replace(/\.html$/, ''));

const wanted = process.argv[2];
const targets = wanted ? [wanted] : SLUGS;

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
const classes = (n) => (attr(n, 'class') || '').split(/\s+/).filter(Boolean);

function findAll(node, pred, out = []) {
  for (const c of node.childNodes ?? []) {
    if (!c.tagName) continue;
    if (pred(c)) out.push(c);
    findAll(c, pred, out);
  }
  return out;
}
const find = (n, p) => findAll(n, p)[0];

const BG = /^(bg-|bg-\[)/;
const PAD = /^(py|pt|pb|px)-/;
const WIDTH = /^(max-w-|w-|px-|mx-auto)/;
const TYPE = /^(text-(xs|sm|base|lg|xl|\d|4xl|5xl|6xl|7xl|8xl|9xl)|font-|leading-|tracking-)/;

/** The role a content element plays, guessed from its tag and classes. */
const roleOf = (node) => {
  const tag = node.tagName;
  const cls = classes(node);
  if (tag === 'table') return 'table';
  if (tag === 'details') return 'faq';
  if (tag === 'figure' || tag === 'img') return 'figure';
  if (tag === 'ul' || tag === 'ol') return 'list';
  if (tag === 'p') return 'paragraph';
  if (tag === 'h3') return 'card-heading';
  if (tag === 'a') return 'link';
  if (tag === 'div' && cls.some((c) => /rounded-2xl|rounded-xl/.test(c))) return 'card';
  return tag;
};

const utilityTally = new Map();
const tally = (cls) => {
  for (const c of cls) utilityTally.set(c, (utilityTally.get(c) ?? 0) + 1);
};

for (const slug of targets) {
  const file = `tmp/ref/${slug}.html`;
  if (!fs.existsSync(file)) {
    console.log(`skip ${slug}: no captured page`);
    continue;
  }
  const doc = parse(fs.readFileSync(file, 'utf8'));
  const sections = findAll(doc, (n) => n.tagName === 'section');

  const spec = {
    slug,
    source: `tmp/ref/${slug}.html`,
    sections: [],
  };

  for (const section of sections) {
    const cls = classes(section);
    tally(cls);
    const background = cls.find((c) => BG.test(c) && !c.startsWith('hover:')) ?? null;
    const padding = cls.filter((c) => PAD.test(c));
    const containerNode = find(section, (n) => attr(n, 'data-morank-container') === 'page');
    const container = containerNode ? classes(containerNode) : [];
    tally(container);

    const h2 = find(section, (n) => n.tagName === 'h2');
    const siblings = h2?.parentNode?.childNodes?.filter((n) => n.tagName) ?? [];
    const eyebrowNode = siblings[siblings.indexOf(h2) - 1];
    const leadNode = siblings[siblings.indexOf(h2) + 1];

    const content = findAll(section, (n) => roleOf(n) !== 'div' && n !== h2 && n !== eyebrowNode && n !== leadNode)
      .filter((n) => {
        const parentTags = (n.parentNode?.childNodes ?? []).filter((c) => c.tagName);
        return parentTags.length <= 6;
      })
      .slice(0, 400)
      .map((n) => {
        const nodeCls = classes(n);
        tally(nodeCls);
        return {
          role: roleOf(n),
          class: nodeCls.join(' '),
          text: clean(txt(n)).slice(0, 160),
          rows: n.tagName === 'table' ? findAll(n, (c) => c.tagName === 'tr').length : undefined,
        };
      });

    spec.sections.push({
      id: attr(section, 'id') || '(hero)',
      background,
      padding,
      container: container.filter((c) => WIDTH.test(c)),
      eyebrow: eyebrowNode
        ? { text: clean(txt(eyebrowNode)), class: classes(eyebrowNode).join(' ') }
        : null,
      heading: h2 ? { text: clean(txt(h2)), class: classes(h2).join(' ') } : null,
      lead: leadNode && leadNode.tagName === 'p'
        ? { text: clean(txt(leadNode)), class: classes(leadNode).join(' ') }
        : null,
      content,
    });
  }

  fs.writeFileSync(`tmp/ref/${slug}.spec.json`, `${JSON.stringify(spec, null, 2)}\n`);
  console.log(`${slug}: ${spec.sections.length} sections -> tmp/ref/${slug}.spec.json`);
}

const inventory = [...utilityTally.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([name, count]) => `${String(count).padStart(5)}  ${name}`);
fs.writeFileSync('tmp/ref/utility-inventory.txt', `${inventory.join('\n')}\n`);
console.log(`utility inventory: ${inventory.length} distinct classes`);
