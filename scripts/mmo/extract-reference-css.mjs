/**
 * Builds the utility layer the seven MMO family pages are drawn with.
 *
 * The reference pages are a Tailwind build; the site is not — it has its own
 * stylesheet and its own design language. That difference, not a missing rule
 * and not a missing section, is why the pages never looked like the reference.
 * The reference ships its compiled stylesheet inside the saved page, so the
 * rules that draw it can be read back out of the local file and scoped to the
 * family pages. Nothing is fetched.
 *
 *   node scripts/mmo/extract-reference-css.mjs
 *
 * Writes `src/styles/mmo-reference.css` and reports the coverage: every
 * utility a reference section uses must end up in the file.
 */
import fs from 'node:fs';

const SLUGS = [
  'mmo-wire-anode',
  'mmo-ribbon-anode',
  'mmo-mesh-ribbon-anode',
  'mmo-canister-anode',
  'mmo-tubular-anode',
  'mmo-disc-anode',
  'mmo-rod-anode',
];

/** The class the scoped rules are attached to. */
const SCOPE = '.mmo-page';

/**
 * Selectors of the reference that belong to its theme, not to the content.
 *
 * The theme's own classes are dropped. Its structural hooks are not — the
 * wrapper and the container hold the page together — they are renamed, so
 * that they work on this site.
 */
const FOREIGN = /daisyui|daisy|wp-|aioseo|simg|cky|htddf|jetpack|elementor|woocommerce|yoast|twemoji|morank-(?!page-wrapper)/;

/**
 * The hooks of the reference, renamed.
 *
 * The wrapper holds the page and the container gives every section its width
 * and its side padding. Both are needed; both are renamed so that they do not
 * carry the name of the reference.
 */
const RENAME = [
  [/morank-page-wrapper/g, 'mmo-page'],
  [/data-morank-container/g, 'data-mmo-container'],
];

/** The element selectors whose reset the reference relies on. */
const ELEMENTS = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'a', 'img',
  'table', 'thead', 'tbody', 'tr', 'th', 'td', 'blockquote', 'figure',
  'figcaption', 'hr', 'strong', 'em', 'small', 'svg', 'code', 'pre',
  'details', 'summary', 'dl', 'dt', 'dd', 'label', 'button', 'input',
  'select', 'textarea', 'fieldset', 'legend', '*',
  'section', 'nav', 'main', 'article', 'aside', 'header', 'footer',
]);

const read = (p) => fs.readFileSync(p, 'utf8');

/**
 * The utilities the reference content uses.
 *
 * The content of a reference page is its `<main>` — the sections and the
 * anchor navigation between them. The page chrome around it is the site's
 * own header and footer, which this site does not draw. Scanning the
 * sections alone therefore loses the utilities of the anchor navigation,
 * and the rules that style the content as a whole.
 */
function neededClasses() {
  const classes = new Map();
  for (const slug of SLUGS) {
    const file = `tmp/ref/${slug}.html`;
    if (!fs.existsSync(file)) continue;
    const html = read(file);
    const from = html.indexOf('<main');
    const to = html.indexOf('</main>');
    if (from < 0 || to < 0) continue;
    const main = html.slice(from, to);
    for (const m of main.matchAll(/class="([^"]+)"/g)) {
      for (const c of m[1].split(/\s+/)) {
        if (c) classes.set(decode(c), (classes.get(decode(c)) ?? 0) + 1);
      }
    }
  }
  return classes;
}

/** The markup of a page writes its classes escaped. */
const decode = (c) =>
  c
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

/**
 * The compiled stylesheet of every saved page.
 *
 * Each page carries its own pruned build, so one page alone is missing the
 * utilities the other pages use. All seven are read and their rules merged.
 */
function referenceCss() {
  const sheets = [];
  for (const slug of SLUGS) {
    const file = `tmp/ref/${slug}.html`;
    if (!fs.existsSync(file)) continue;
    const html = read(file);
    const blocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)]
      .map((m) => m[1])
      .filter((css) => css.length > 200);
    if (blocks.length) sheets.push(blocks.join('\n'));
  }
  return sheets;
}

/** Parse a stylesheet into a tree of rules and at-rules. */
function parseCss(css) {
  const root = { type: 'rules', children: [] };
  const stack = [root];
  let buf = '';
  let i = 0;
  while (i < css.length) {
    const ch = css[i];
    if (ch === '{') {
      const prelude = buf.trim();
      buf = '';
      const node = prelude.startsWith('@')
        ? { type: 'at', name: prelude.split(/\s/)[0], prelude, children: [] }
        : { type: 'rule', selector: prelude, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else if (ch === '}') {
      const node = stack.pop();
      if (node.type === 'rule' || node.name === '@font-face') {
        node.declarations = buf.trim();
      }
      buf = '';
    } else if (ch === ';') {
      const top = stack[stack.length - 1];
      // A semicolon inside a declaration block separates two declarations; a
      // semicolon at the top level ends an at-rule statement.
      if (top.type === 'rule' || top.name === '@font-face') {
        buf += ';';
      } else {
        const prelude = buf.trim();
        buf = '';
        if (prelude.startsWith('@')) {
          top.children.push({ type: 'atrule', prelude });
        }
      }
    } else {
      buf += ch;
    }
    i++;
  }
  return root;
}

/**
 * The class names a selector mentions, unescaped.
 *
 * A class of an arbitrary value holds a `,` and a `.` of its own — the class
 * `lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,.95fr)]` is one name. A comma
 * that separates the parts of a selector is written plain, a comma that
 * belongs to a name is written escaped.
 */
function classesOf(selector) {
  const names = [];
  for (const m of selector.matchAll(/\.((?:\\.|[A-Za-z0-9_\-])+)/g)) {
    names.push(m[1].replace(/\\/g, ''));
  }
  // A class of an arbitrary value is written as an attribute selector, so its
  // name is read out of the attribute as well.
  for (const m of selector.matchAll(/\[class~="([^"]+)"\]/g)) {
    names.push(m[1]);
  }
  return names;
}

/**
 * A class of the reference, written the way a browser can read it.
 *
 * A name that holds a `:` or a `[` — the name of a variant, or of an
 * arbitrary value — is written escaped by the reference. An escaped name is
 * not a valid identifier, so the browser drops the rule. The name is
 * therefore written as an attribute selector, which reads the same and is
 * valid: `[class~="lg:grid-cols-2"]`.
 */
function plainClass(classSelector) {
  const name = classSelector.slice(1).replace(/\\/g, '');
  if (/^[A-Za-z0-9_-]+$/.test(name)) return classSelector;
  return `[class~="${name}"]`;
}

/**
 * The scope of a selector.
 *
 * A class that is written escaped is written as an attribute selector, so
 * that the browser reads it. The renamed wrapper already carries the scope.
 */
function scopeSelector(selector) {
  const trimmed = selector.trim();
  if (trimmed.startsWith(':root')) return SCOPE;
  if (/^(html|body)\b/.test(trimmed)) return null;
  if (trimmed.startsWith(SCOPE)) return trimmed;

  // The reference wraps its content in `<main>`; this site wraps it in the
  // scope itself. A rule of the `main` element therefore becomes a rule of
  // the scope.
  const withoutMain = trimmed.replace(/^main\b/, '').trim();
  if (withoutMain !== trimmed) {
    return withoutMain ? `${SCOPE} ${withoutMain}` : SCOPE;
  }

  const plain = trimmed.replace(/\.((?:\\.|[A-Za-z0-9_\-])+)/g, (match) => plainClass(match));

  return `${SCOPE} ${plain}`;
}

/** Whether a selector only needs the element reset. */
function isElementSelector(selector) {
  return splitSelector(selector)
    .map((s) => s.trim())
    .every((s) => {
      if (s.startsWith(':root') || s.startsWith('@')) return false;
      // A pseudo-element on its own — `::before` — belongs to every element.
      if (/^::?[a-z-]+$/i.test(s)) return true;
      const head = s.match(/^([a-zA-Z*][a-zA-Z0-9]*)/)?.[1] ?? '';
      return ELEMENTS.has(head);
    });
}

/**
 * The parts of a selector list.
 *
 * A comma separates the parts of a list, but a comma may also belong to the
 * value of an attribute selector — `[class~="lg:grid-cols-[minmax(0,1fr)]"]`
 * holds one — and a comma that is escaped belongs to a class name. Only the
 * comma that really separates two parts is a separator.
 */
function splitSelector(selector) {
  const parts = [];
  let current = '';
  let escaped = false;
  let depth = 0;

  for (const ch of selector) {
    if (escaped) {
      current += ch;
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      current += ch;
      escaped = true;
      continue;
    }
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  parts.push(current);
  return parts;
}

const needed = neededClasses();

let totalRules = 0;
let droppedForeign = 0;
const covered = new Set();

/** The rules of every page, keyed so that the same rule is kept once. */
const rules = new Map();

/** The order a rule was written in, so that the cascade is kept. */
let sequence = 0;

/**
 * The at-rules a rule sits in, outermost first.
 *
 * A responsive utility of the reference — every `lg:`, `md:` and `sm:` rule —
 * lives inside an `@media` block. Dropping that block turns the rule into an
 * unconditional one, and the rule of the smallest breakpoint then overrides
 * the rule of the largest one, because the blocks are written in the order of
 * their width and a later rule wins. The blocks are therefore kept.
 */
function mediaOrder(preludes) {
  const widths = [];
  let other = 0;
  for (const prelude of preludes) {
    const width = prelude.match(/min-width:\s*([\d.]+)(px|rem)/);
    if (width) widths.push(parseFloat(width[1]) * (width[2] === 'rem' ? 16 : 1));
    else other += 1;
  }
  return { widths, other };
}

/**
 * Collect the rules of a stylesheet that the pages need.
 *
 * A rule is kept when it carries a utility a section uses, or when it is the
 * element reset the reference relies on. The key holds the place of the rule
 * in the stylesheet, so a rule that appears on several pages is kept once and
 * a rule that differs between pages keeps both of them.
 */
function collect(node, path, media = []) {
  for (const child of node.children ?? []) {
    if (child.type === 'atrule') continue;

    if (child.type === 'at') {
      const name = child.name.toLowerCase();
      if (name === '@keyframes') {
        const steps = (child.children ?? [])
          .map((s) => `${s.selector}{${s.declarations}}`)
          .join('');
        rules.set(`${path}|${child.prelude}`, { at: child.prelude, body: steps, media, seq: sequence++ });
        continue;
      }
      if (name === '@font-face') continue;
      if (name === '@media' || name === '@supports' || name === '@layer') {
        collect(child, `${path}|${child.prelude}`, [...media, child.prelude]);
      }
      continue;
    }

    totalRules++;
    // The structural hooks of the reference are renamed first, so that they
    // work on this site and do not carry the name of the reference.
    let selector = child.selector;
    for (const [pattern, replacement] of RENAME) selector = selector.replace(pattern, replacement);

    if (FOREIGN.test(selector)) {
      droppedForeign++;
      continue;
    }

    const classes = classesOf(selector);
    const hit = classes.filter((c) => needed.has(c));
    const elementOnly = hit.length === 0 && isElementSelector(selector);

    // The container rule gives every section its width and its side padding.
    const isContainer = /\[data-mmo-container[^\]]*\]/.test(selector);

    if (hit.length === 0 && !elementOnly && !isContainer) continue;

    const scoped = splitSelector(selector)
      .map((s) => scopeSelector(s))
      .filter(Boolean);
    if (scoped.length === 0) continue;

    for (const c of hit) covered.add(c);
    rules.set(`${path}|${scoped.join(', ')}`, {
      selector: scoped.join(', '),
      declarations: child.declarations,
      media,
      seq: sequence++,
    });
  }
}

for (const sheet of referenceCss()) {
  collect(parseCss(sheet), '');
}

/**
 * The rules back in the order the browser must apply them.
 *
 * A rule that is not inside a breakpoint comes first. The rules of a
 * breakpoint come after it, the narrower breakpoint before the wider one, so
 * that the wider rule wins where both apply — the order the reference page
 * relies on.
 */
function mediaWidth(prelude) {
  const m = prelude.match(/min-width:\s*([\d.]+)(px|rem)/);
  if (!m) return Number.POSITIVE_INFINITY;
  return parseFloat(m[1]) * (m[2] === 'rem' ? 16 : 1);
}

function orderMedia(preludes) {
  return [...preludes].sort((a, b) => mediaWidth(a) - mediaWidth(b));
}

const groups = new Map();
for (const [, entry] of rules) {
  const key = entry.media.join('&&');
  if (!groups.has(key)) groups.set(key, { media: entry.media, entries: [] });
  groups.get(key).entries.push(entry);
}

/** The breakpoints, the narrow one first. */
const breakpointGroups = [...groups.values()].sort((a, b) => {
  const aw = a.media.length ? mediaWidth(a.media[0]) : -1;
  const bw = b.media.length ? mediaWidth(b.media[0]) : -1;
  if (aw !== bw) return aw - bw;
  return a.entries[0].seq - b.entries[0].seq;
});

const body = breakpointGroups
  .map((group) => {
    const inner = group.entries
      .sort((a, b) => a.seq - b.seq)
      .map((entry) =>
        entry.at ? `${entry.at}{${entry.body}}` : `${entry.selector}{${entry.declarations}}`
      )
      .join('\n');
    if (!group.media.length) return inner;
    return `${orderMedia(group.media).map((m) => `${m}{`).join('')}\n${inner}\n${group.media.map(() => '}').join('')}`;
  })
  .join('\n');

const header = `/* =================================================================
   MMO FAMILY — UTILITY LAYER OF THE REFERENCE PAGES

   Generated by scripts/mmo/extract-reference-css.mjs. Do not edit.

   The seven MMO family pages are drawn with the reference pages' own
   utilities, scoped under .${SCOPE.slice(1)} so that nothing outside the
   family pages is affected. The site itself is not a Tailwind project and
   does not need to become one.
   ================================================================= */

`;

fs.mkdirSync('src/styles', { recursive: true });
fs.writeFileSync('src/styles/mmo-reference.css', header + body + '\n');

const missing = [...needed.keys()].filter((c) => !covered.has(c));
const report = [
  `rules seen: ${totalRules}`,
  `foreign rules dropped: ${droppedForeign}`,
  `rules kept: ${rules.size}`,
  `utilities needed by the sections: ${needed.size}`,
  `utilities covered: ${covered.size}`,
  `utilities missing: ${missing.length}`,
  missing.length ? `missing: ${missing.join(' ')}` : 'missing: none',
  `written: src/styles/mmo-reference.css (${fs.statSync('src/styles/mmo-reference.css').size} bytes)`,
];
fs.mkdirSync('tmp/qa', { recursive: true });
fs.writeFileSync('tmp/qa/mmo-reference-css.txt', report.join('\n'));
console.log(report.join('\n'));

