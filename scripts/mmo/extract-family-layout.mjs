/**
 * Step 1 — the layout base of the MMO anode family pages.
 *
 * The flattened content model lost the layout: an image that belongs inside a
 * card became a free standing figure and the text around it floated. This
 * script walks the captured reference pages (`tmp/ref/<slug>.html`) and keeps
 * the structure the reference actually has:
 *
 *   - the band of every section,
 *   - the header block (eyebrow, heading, lead) as one unit,
 *   - the content parts in the order they appear, each with its own kind, so
 *     a card keeps its image and a split keeps its two columns.
 *
 * The result is written to `tmp/ref/family-layout.json` and is the only
 * input the page generator needs. Local files only — no network.
 *
 *   node scripts/mmo/extract-family-layout.mjs
 *   node scripts/mmo/extract-family-layout.mjs --verify   # fingerprint check
 */
import fs from 'node:fs';
import { parse } from 'parse5';

const SLUGS = [
  'mmo-wire-anode', 'mmo-ribbon-anode', 'mmo-mesh-ribbon-anode',
  'mmo-canister-anode', 'mmo-tubular-anode', 'mmo-disc-anode', 'mmo-rod-anode',
];

const manifest = JSON.parse(fs.readFileSync('tmp/ref/image-manifest.json', 'utf8'));

/**
 * Maps a reference image URL to the local copy, when there is one.
 *
 * The reference page sometimes names a picture by a relative path while the
 * manifest holds the full address of the same file, so both are tried.
 */
const localImage = (slug, url) => {
  if (!url) return url;
  const map = manifest[slug] ?? {};
  if (map[url]) return map[url];
  const absolute = new URL(url, 'https://www.titanium-anode.com').href;
  return map[absolute] ?? url;
};

/* ------------------------------------------------------------------ */
/* DOM helpers                                                        */
/* ------------------------------------------------------------------ */

const txt = (node) => {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (!node.tagName) return '';
  let out = '';
  for (const child of node.childNodes ?? []) out += txt(child);
  return out;
};
const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value ?? '';
const cls = (node) => (attr(node, 'class') || '').split(/\s+/).filter(Boolean);
const hasClass = (node, needle) => cls(node).some((c) => c.includes(needle));
const children = (node) => (node.childNodes ?? []).filter((c) => c.tagName);
const text = (node) => clean(txt(node));

function walk(node, visit) {
  for (const child of node.childNodes ?? []) {
    if (!child.tagName) continue;
    visit(child);
    walk(child, visit);
  }
}
const findAll = (node, pred) => {
  const hits = [];
  walk(node, (n) => {
    if (pred(n)) hits.push(n);
  });
  return hits;
};
const find = (node, pred) => findAll(node, pred)[0];

/** Nearest ancestor that is a direct child of `stop`. */
function scopeOf(node, stop) {
  let current = node;
  let parent = current.parentNode;
  while (parent && parent !== stop) {
    current = parent;
    parent = current.parentNode;
  }
  return parent === stop ? current : node;
}

/* ------------------------------------------------------------------ */
/* Band and section geometry                                           */
/* ------------------------------------------------------------------ */

/** The background band of a reference section, as the tone of our model. */
const bandOf = (className) => {
  if (/bg-\[#003366\]|bg-blue-950|bg-blue-900/.test(className)) return 'navy';
  if (/bg-slate-950|bg-slate-900/.test(className)) return 'dark';
  if (/bg-gray-50|bg-slate-50/.test(className)) return 'alt';
  return 'plain';
};

/**
 * The vertical rhythm of a section.
 *
 * The reference carries Tailwind spacing on the section itself, so the
 * padding is read from its classes and named — the CSS owns the rem values.
 */
const padOf = (className) => {
  const classes = className.split(/\s+/);
  const rem = (token) => {
    const found = /^py-(\d+)$/.exec(token ?? '');
    return found ? { 10: 2.5, 12: 3, 16: 4, 20: 5, 24: 6, 28: 7 }[Number(found[1])] : 0;
  };
  const base = rem(classes.find((c) => /^py-\d+$/.test(c))) || 5;
  const large = rem(classes.find((c) => /^lg:py-\d+$/.test(c))) || base;
  return (
    {
      '5/7': 'default',
      '5/6': 'medium',
      '6/6': 'wide',
      '5/5': 'fixed',
      '4/7': 'short',
      '4/6': 'tight',
      '4/4': 'compact',
      '2.5/3': 'tiny',
    }[`${base}/${large}`] ?? 'default'
  );
};

/** The order a cell takes on a small screen. */
const orderOf = (node) => {
  const found = cls(node).find((c) => /^order-(\d+)$/.test(c));
  return found ? Number(/order-(\d+)/.exec(found)[1]) : 0;
};

/* ------------------------------------------------------------------ */
/* Part extraction                                                    */
/* ------------------------------------------------------------------ */

const imageOf = (node, slug) => {
  const img = node.tagName === 'img' ? node : find(node, (n) => n.tagName === 'img');
  if (!img) return null;
  const src = attr(img, 'src');
  return {
    src: localImage(slug, src),
    alt: attr(img, 'alt') || '',
    // The name the reference uses, so the verification can compare pictures.
    ref: src.split('/').pop(),
  };
};

const listOf = (node) => {
  const list = find(node, (n) => n.tagName === 'ul' || n.tagName === 'ol');
  if (!list) return [];
  return children(list)
    .filter((n) => n.tagName === 'li')
    .map((n) => text(n))
    .filter(Boolean);
};

const paragraphsOf = (node) =>
  children(node)
    .filter((n) => n.tagName === 'p')
    .map((n) => text(n))
    .filter(Boolean);

/**
 * The colour of a box in the reference: a blue box, an amber box or a plain
 * one. The renderer picks the matching card or callout treatment.
 */
const boxVariant = (node) => {
  const className = attr(node, 'class');
  if (/bg-blue-50|bg-primary-50/.test(className)) return 'blue';
  if (/bg-amber-50/.test(className)) return 'amber';
  return 'plain';
};

/** A card is a grid cell: heading, optional image, optional body text. */
const cardOf = (node, slug) => {
  const heading = find(node, (n) => n.tagName === 'h3' || n.tagName === 'h4');
  // The body may sit one level down, but it must not belong to a nested card.
  const body = findAll(node, (n) => n.tagName === 'p')
    .filter((p) => {
      if (!heading) return true;
      let cur = p.parentNode;
      while (cur && cur !== node) {
        if (cur !== heading.parentNode && find(cur, (n) => n.tagName === 'h3' || n.tagName === 'h4')) {
          return false;
        }
        cur = cur.parentNode;
      }
      return true;
    })
    .map((n) => text(n))
    .filter(Boolean);
  const index = children(node)
    .filter((n) => n.tagName === 'div' || n.tagName === 'span')
    .map((n) => text(n))
    .find((t) => /^\d{1,2}$/.test(t));
  const card = {
    index,
    title: heading ? text(heading) : '',
    tag: heading ? heading.tagName : '',
    body: body[0] ?? '',
    extra: body.slice(1),
    list: listOf(node),
    variant: boxVariant(node),
  };
  const image = imageOf(node, slug);
  if (image) card.image = image;
  // A card may end in a link — "View MMO Linear Anode →".
  const anchor = find(node, (n) => n.tagName === 'a');
  if (anchor) card.link = { label: text(anchor).trim(), href: attr(anchor, 'href') };
  return card;
};

/** The small uppercase line above a section heading. */
const eyebrowOf = (scope, heading) => {
  const siblings = children(scope);
  const before = siblings.slice(0, siblings.indexOf(heading));
  for (const node of before.reverse()) {
    const value = text(node);
    if (!value) continue;
    if (hasClass(node, 'uppercase') || value === value.toUpperCase()) return value;
  }
  return '';
};

const headerOf = (scope, heading) => {
  const siblings = children(scope);
  const index = siblings.indexOf(heading);
  const after = siblings.slice(index + 1);
  const lead =
    after.find((n) => n.tagName === 'p') ??
    siblings.find((n) => n.tagName === 'p');
  return {
    eyebrow: eyebrowOf(scope, heading),
    title: heading ? text(heading) : '',
    lead: lead ? text(lead) : '',
  };
};

/** One figure: the picture and its caption. */
const figureOf = (node, slug) => {
  const image = imageOf(node, slug);
  const caption = find(node, (n) => n.tagName === 'figcaption');
  return { image, caption: caption ? text(caption) : '' };
};

const tableOf = (node) => {
  const head = find(node, (n) => n.tagName === 'thead');
  const rows = findAll(node, (n) => n.tagName === 'tr');
  const cellsOf = (row) =>
    children(row)
      .filter((c) => c.tagName === 'td' || c.tagName === 'th')
      .map((c) => {
        // A cell may be a link — "View Product →".
        const anchor = find(c, (n) => n.tagName === 'a');
        if (!anchor) return text(c);
        return { text: text(c), href: attr(anchor, 'href') };
      });
  if (head) {
    const headRow = children(head)[0];
    return {
      header: headRow ? cellsOf(headRow) : [],
      rows: rows.filter((r) => r !== headRow).map(cellsOf),
    };
  }
  return { header: [], rows: rows.map(cellsOf) };
};

/** Column count of a reference grid, from its utility classes. */
const colsOf = (node) => {
  const found = cls(node)
    .map((c) => /grid-cols-(\d+)$/.exec(c))
    .filter(Boolean)
    .map((m) => Number(m[1]));
  return found.length ? Math.max(...found) : 0;
};

/** Whether a node carries a heading of its own. */
const hasHeadings = (node) =>
  findAll(node, (n) => n.tagName === 'h2' || n.tagName === 'h3' || n.tagName === 'h4')
    .length > 0;

/**
 * The heading that introduces a table: the closest h3 or h4 that sits before
 * it, either as a sibling or inside the sibling that precedes it.
 */
const captionHeading = (table, stop) => {
  let current = table;
  while (current.parentNode && current !== stop) {
    const parent = current.parentNode;
    const siblings = children(parent);
    const index = siblings.indexOf(current);
    for (let i = index - 1; i >= 0; i -= 1) {
      const node = siblings[i];
      if (node.tagName === 'h3' || node.tagName === 'h4') return node;
      const own = children(node).find((c) => c.tagName === 'h3' || c.tagName === 'h4');
      if (own) return own;
    }
    current = parent;
  }
  return null;
};

/** The heading and lead that sit above a table or a figure. */
const captionOf = (node, exclude, stop) => {
  const heading = exclude
    ? captionHeading(exclude, stop)
    : find(node, (n) => n.tagName === 'h3');
  if (!heading) return null;
  const siblings = children(heading.parentNode);
  const after = siblings.slice(siblings.indexOf(heading) + 1);
  const next = after.find((n) => n.tagName === 'p');
  const body =
    text(next) ||
    findAll(node, (n) => n.tagName === 'p')
      .filter((n) => !(exclude && inside(n, exclude)))
      .filter((n) => !inside(n, heading))
      .map((n) => text(n))
      .filter(Boolean)[0] ||
    '';
  return { title: text(heading), body, tag: heading.tagName };
};

/** Titles are compared by their words, so a dash or a quote does not matter. */
const normTitle = (value) =>
  String(value)
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .toLowerCase();

/** Whether a node sits inside another node. */
function inside(node, ancestor) {
  let parent = node.parentNode;
  while (parent) {
    if (parent === ancestor) return true;
    parent = parent.parentNode;
  }
  return false;
}

/** One question and its answer. */
const faqOf = (node) => {
  const summary = find(node, (n) => n.tagName === 'summary');
  const answer = children(node).find((n) => n !== summary);
  return { q: summary ? text(summary) : '', a: answer ? text(answer) : '' };
};

/**
 * A note is a bordered box that opens with a bold label.
 *
 * The label must be a direct child of the box: a strong that sits deeper
 * inside belongs to a card or a table, and must not turn the whole block
 * into a note.
 */
const noteOf = (node) => {
  const strong = children(node).find((n) => n.tagName === 'strong');
  if (!strong) return null;
  if (hasHeadings(node)) return null;
  const label = text(strong).replace(/:\s*$/, '');
  const rest = text(node).replace(text(strong), '').trim();
  return { label, text: rest, variant: boxVariant(node) };
};

/** Pills are the small rounded chips of the reference. */
const pillsOf = (node) =>
  children(node)
    .filter((n) => n.tagName === 'span')
    .map((n) => text(n))
    .filter((t) => t && !/^[|·•,–—\-\s]+$/.test(t));

/** The links of a row. */
const linksOf = (node) =>
  children(node)
    .filter((n) => n.tagName === 'a')
    .map((n) => ({ label: text(n).trim(), href: attr(n, 'href') }))
    .filter((l) => l.label);

/** Whether the links of a row are buttons rather than plain text. */
const linksAreButtons = (node) => {
  const anchor = children(node).find((n) => n.tagName === 'a');
  return anchor ? /rounded/.test(attr(anchor, 'class')) : false;
};

/** The separator the reference puts between two links of a row. */
const linkSeparator = (node) =>
  children(node)
    .filter((n) => n.tagName === 'span')
    .map((n) => text(n).trim())
    .find((t) => /^[|·•,–—\-\s]+$/.test(t)) ?? '';

/**
 * Collects the body parts of a node in document order.
 *
 * `consumed` holds the nodes that make up the section header, so the header is
 * not repeated as body content. `done` holds the tables that were already
 * emitted, so a table is never counted twice.
 */
let sectionRoot = null;

function collect(node, slug, consumed, parts, done) {
  if (consumed.has(node)) return;

  if (node.tagName === 'figure') {
    parts.push({ kind: 'figure', ...figureOf(node, slug) });
    return;
  }

  if (node.tagName === 'a') {
    parts.push({ kind: 'cta', label: text(node), href: attr(node, 'href') });
    return;
  }
  if (node.tagName === 'ul' || node.tagName === 'ol') {
    const items = children(node)
      .filter((n) => n.tagName === 'li')
      .map((n) => text(n))
      .filter(Boolean);
    if (items.length) parts.push({ kind: 'list', items });
    return;
  }
  if (node.tagName === 'p') {
    const value = text(node);
    if (value) parts.push({ kind: 'paragraph', text: value });
    return;
  }
  if (node.tagName === 'img') {
    parts.push({ kind: 'figure', image: imageOf(node, slug), caption: '' });
    return;
  }
  if (node.tagName === 'nav') {
    const links = linksOf(node);
    if (links.length) {
      parts.push({
        kind: 'links',
        items: links,
        style: linksAreButtons(node) ? 'button' : 'text',
        sep: '',
      });
    }
    return;
  }
  if (node.tagName !== 'div') return;

  const note = noteOf(node);
  if (note) {
    parts.push({ kind: 'note', ...note });
    return;
  }

  if (hasClass(node, 'flex-wrap')) {
    // A row of links is a row of links, even when a separator sits between them.
    const links = linksOf(node);
    if (links.length) {
      parts.push({
        kind: 'links',
        items: links,
        style: linksAreButtons(node) ? 'button' : 'text',
        sep: linkSeparator(node),
      });
      return;
    }
    const pills = pillsOf(node);
    if (pills.length) {
      parts.push({ kind: 'pills', items: pills });
      return;
    }
  }

  // A grid is a row of cells: cards, a picture with its copy, or a checklist.
  if (hasClass(node, 'grid')) {
    const cells = children(node);
    const withImage = cells.filter((c) => find(c, (n) => n.tagName === 'img'));

    // Two columns where only one holds the picture: a split keeps both sides.
    if (cells.length === 2 && withImage.length === 1) {
      const picture = withImage[0];
      const copy = cells.find((c) => c !== picture);
      const inner = [];
      const figureNode = find(picture, (n) => n.tagName === 'figure');
      const imageNode = find(picture, (n) => n.tagName === 'img');
      if (figureNode) consumed.add(figureNode);
      if (imageNode) consumed.add(imageNode);
      collect(copy, slug, consumed, inner, done);
      if (picture.tagName !== 'figure') collect(picture, slug, consumed, inner, done);
      // Some sections put the copy above the picture on a small screen.
      const copyFirst = orderOf(picture) > orderOf(copy);
      parts.push({ kind: 'split', ...figureOf(picture, slug), parts: inner, copyFirst });
      return;
    }

    // A grid of cards: every cell that carries a heading is one card.
    const cardCells = cells.filter(
      (c) => find(c, (n) => n.tagName === 'h3' || n.tagName === 'h4')
    );
    if (cardCells.length >= 2) {
      let run = [];
      const flush = () => {
        if (!run.length) return;
        const cards = run.map((c) => cardOf(c, slug)).filter((c) => c.title || c.body);
        if (cards.length) parts.push({ kind: 'cards', cols: colsOf(node), cards });
        run = [];
      };
      for (const cell of cells) {
        if (cardCells.includes(cell)) {
          run.push(cell);
        } else {
          flush();
          collect(cell, slug, consumed, parts, done);
        }
      }
      flush();
      return;
    }

    const withSpan = cells.filter((c) => find(c, (n) => n.tagName === 'span'));
    if (cells.length && withSpan.length === cells.length) {
      const items = cells.map((c) => text(c)).filter(Boolean);
      if (items.length) {
        parts.push({ kind: 'checklist', items });
        return;
      }
    }

    for (const cell of cells) collect(cell, slug, consumed, parts, done);
    return;
  }

  // A table is one part: the wrapper that holds it and nothing else.
  const tableUnits = children(node).filter((child) => {
    const tables = findAll(child, (n) => n.tagName === 'table');
    if (tables.length !== 1) return false;
    if (hasHeadings(child)) return false;
    return !text(child).replace(text(tables[0]), '').trim();
  });
  if (tableUnits.length) {
    // The heading above a table belongs to the table, so it is claimed before
    // the neighbouring blocks are collected; otherwise it is emitted twice.
    const captions = new Map();
    for (const child of tableUnits) {
      const table = find(child, (n) => n.tagName === 'table');
      const caption = captionOf(node, table, sectionRoot);
      captions.set(child, caption);
      const captionNode = caption ? captionHeading(table, sectionRoot) : null;
      if (captionNode) consumed.add(captionNode);
    }
    for (const child of children(node)) {
      if (tableUnits.includes(child)) {
        const table = find(child, (n) => n.tagName === 'table');
        parts.push({ kind: 'table', caption: captions.get(child), ...tableOf(table) });
      } else {
        collect(child, slug, consumed, parts, done);
      }
    }
    return;
  }

  const details = findAll(node, (n) => n.tagName === 'details');
  if (details.length) {
    parts.push({ kind: 'faq', items: details.map(faqOf) });
    return;
  }

  // A lone heading introduces the text that follows it.
  const heading = children(node).find(
    (n) => (n.tagName === 'h3' || n.tagName === 'h4') && !consumed.has(n)
  );
  if (heading) {
    const body = children(node)
      .filter((n) => n.tagName === 'p')
      .map((n) => text(n))
      .filter(Boolean)
      .join(' ');
    parts.push({ kind: 'heading', title: text(heading), body, tag: heading.tagName });
    consumed.add(heading);
    for (const child of children(node)) {
      if (child === heading) continue;
      collect(child, slug, consumed, parts, done);
    }
    return;
  }

  for (const child of children(node)) collect(child, slug, consumed, parts, done);
}

/* ------------------------------------------------------------------ */
/* Section extraction                                                 */
/* ------------------------------------------------------------------ */

function sectionOf(section, slug) {
  const className = attr(section, 'class');
  const container =
    find(section, (n) => attr(n, 'data-morank-container') === 'page') ??
    children(section)[0];
  if (!container) return null;

  const heading = find(container, (n) => n.tagName === 'h2');
  const scope = heading ? scopeOf(heading, container) : null;

  // The header is a unit of its own: eyebrow, heading and lead travel
  // together and are not repeated in the body.
  const consumed = new Set();
  let header = { eyebrow: '', title: '', lead: '' };
  if (scope && heading) {
    header = headerOf(scope, heading);
    consumed.add(heading);
    for (const node of children(scope)) {
      const value = text(node);
      if (!value) continue;
      if (hasClass(node, 'uppercase') || value === value.toUpperCase()) {
        consumed.add(node);
        break;
      }
    }
    const lead = children(scope).find((n) => n.tagName === 'p');
    if (lead) consumed.add(lead);
  }

  const parts = [];
  const done = new Set();
  sectionRoot = container;
  collect(container, slug, consumed, parts, done);
  sectionRoot = null;

  // A section may carry a decorative picture beside its content.
  for (const image of findAll(section, (n) => n.tagName === 'img')) {
    if (inside(image, container)) continue;
    parts.unshift({ kind: 'background', image: imageOf(image, slug), caption: '' });
  }

  return {
    id: attr(section, 'id') || '',
    tone: bandOf(className),
    pad: padOf(className),
    header,
    parts,
  };
}

/* ------------------------------------------------------------------ */
/* Fingerprint verification against tmp/ref/structure.txt              */
/* ------------------------------------------------------------------ */

function expectedFingerprints() {
  const raw = fs.readFileSync('tmp/ref/structure.txt', 'utf8');
  const out = {};
  let slug = null;
  let section = null;
  for (const line of raw.split('\n')) {
    const head = line.match(/^#####\s+(\S+)/);
    if (head) {
      slug = head[1];
      out[slug] = {};
      continue;
    }
    const open = line.match(/^\[(\d+)\]\s+id=(\S+)/);
    if (open) {
      section = { id: open[2] === '(none)' ? '' : open[2] };
      out[slug][section.id] = section;
      continue;
    }
    if (!section) continue;
    const h3 = line.match(/^\s+h3\((\d+)\)\s*=\s*(.*)$/);
    if (h3) {
      section.h3 = Number(h3[1]);
      section.h3Titles = h3[2]
        .split('||')
        .map((t) => t.trim())
        .filter(Boolean);
    }
    const imgs = line.match(/^\s+imgs\((\d+)\)\s*=\s*(.*)$/);
    if (imgs) {
      section.imgs = Number(imgs[1]);
      section.imgNames = imgs[2]
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
    }
    const tables = line.match(/^\s+tables\((\d+)\)/);
    if (tables) section.tables = Number(tables[1]);
    const details = line.match(/details\((\d+)\)/);
    if (details) section.details = Number(details[1]);
  }
  return out;
}

/**
 * Counts the reference fingerprint of an extracted section.
 *
 * The reference lists the headings of a section by name, so the extraction is
 * checked by title: every h3 of the reference must be found as a card title,
 * a table caption or a heading of its own.
 */
function fingerprint(section) {
  const titles = [];
  const images = [];
  const tables = [];
  const details = [];
  const links = [];

  const walk = (parts) => {
    for (const part of parts) {
      if (part.kind === 'cards') {
        for (const card of part.cards) {
          if (card.title) titles.push({ title: card.title, tag: card.tag });
          if (card.image) images.push(card.image);
          if (card.link) links.push(card.link.href);
        }
      } else if (part.kind === 'card') {
        if (part.title) titles.push({ title: part.title, tag: part.tag });
        if (part.image) images.push(part.image);
        if (part.link) links.push(part.link.href);
      } else if (part.kind === 'heading') {
        if (part.title) titles.push({ title: part.title, tag: part.tag });
      } else if (part.kind === 'split') {
        if (part.image) images.push(part.image);
        walk(part.parts ?? []);
      } else if (part.kind === 'figure') {
        if (part.image) images.push(part.image);
      } else if (part.kind === 'background') {
        if (part.image) images.push(part.image);
      } else if (part.kind === 'table') {
        tables.push(part);
        if (part.caption?.title) {
          titles.push({ title: part.caption.title, tag: part.caption.tag });
        }
        for (const row of part.rows ?? []) {
          for (const cell of row) {
            if (cell && typeof cell === 'object') links.push(cell.href);
          }
        }
      } else if (part.kind === 'faq') {
        details.push(...part.items);
      } else if (part.kind === 'links') {
        for (const link of part.items ?? []) links.push(link.href);
      } else if (part.kind === 'cta') {
        links.push(part.href);
      }
    }
  };
  walk(section.parts);

  return { titles, images, tables, details, links };
}

/**
 * The links every section of the reference carries.
 *
 * The fingerprint verifier compares titles, images, tables and FAQ panels. A
 * lost link slips through all of them, so the links are counted from the
 * reference page itself and compared as well.
 */
function referenceLinks(slug, id) {
  const file = `tmp/ref/${slug}.html`;
  if (!fs.existsSync(file)) return null;
  const doc = parse(fs.readFileSync(file, 'utf8'));
  const section = findAll(doc, (n) => n.tagName === 'section').find(
    (n) => attr(n, 'id') === id
  );
  if (!section) return null;
  return findAll(section, (n) => n.tagName === 'a').map((n) => attr(n, 'href'));
}

/* ------------------------------------------------------------------ */
/* Run                                                                */
/* ------------------------------------------------------------------ */

const pages = {};
for (const slug of SLUGS) {
  const file = `tmp/ref/${slug}.html`;
  if (!fs.existsSync(file)) {
    console.log(`skip ${slug}: no captured page`);
    continue;
  }
  const doc = parse(fs.readFileSync(file, 'utf8'));
  const sections = findAll(doc, (n) => n.tagName === 'section')
    .map((s) => sectionOf(s, slug))
    .filter((s) => s && s.id);
  pages[slug] = { slug, sections };
  console.log(`${slug}: ${sections.length} sections`);
}

fs.writeFileSync('tmp/ref/family-layout.json', `${JSON.stringify(pages, null, 2)}\n`);

if (process.argv.includes('--verify')) {
  const expected = expectedFingerprints();
  const report = [];
  const detail = [];
  let mismatches = 0;
  for (const [slug, page] of Object.entries(pages)) {
    for (const section of page.sections) {
      const want = expected[slug]?.[section.id];
      const got = fingerprint(section);
      detail.push(
        `${slug}#${section.id} [${section.tone}] ${section.parts
          .map((p) => `${p.kind}${p.cards ? `(${p.cards.length})` : ''}`)
          .join(' ')}`
      );
      if (!want) continue;
      const problems = [];
      // The reference counts h3 only, so an h4 is not a missing h3.
      const have = got.titles.filter((t) => t.tag === 'h3').map((t) => normTitle(t.title));
      for (const title of want.h3Titles ?? []) {
        const key = normTitle(title);
        const at = have.indexOf(key);
        if (at === -1) problems.push(`missing headings: ${title}`);
        else have.splice(at, 1);
      }
      for (const title of have) problems.push(`extra headings: ${title}`);
      const wantImgs = want.imgNames ?? [];
      const haveImgs = got.images.map((image) => image.ref ?? image.src.split('/').pop());
      for (const name of wantImgs) {
        const at = haveImgs.indexOf(name);
        if (at === -1) problems.push(`missing image: ${name}`);
        else haveImgs.splice(at, 1);
      }
      for (const name of haveImgs) problems.push(`extra image: ${name}`);
      if (want.tables !== undefined && want.tables !== got.tables.length) {
        problems.push(`tables ${got.tables.length} != ${want.tables}`);
      }
      if (want.details !== undefined && want.details !== got.details.length) {
        problems.push(`faq ${got.details.length} != ${want.details}`);
      }
      // A lost link slips through every other check, so it is compared here.
      const refLinks = referenceLinks(slug, section.id);
      if (refLinks) {
        const have = [...got.links];
        for (const href of refLinks) {
          const at = have.indexOf(href);
          if (at === -1) problems.push(`missing link: ${href}`);
          else have.splice(at, 1);
        }
        for (const href of have) problems.push(`extra link: ${href}`);
      }
      if (problems.length) {
        mismatches += 1;
        report.push(`${slug}#${section.id}: ${problems.join('; ')}`);
      }
    }
  }
  report.unshift(`mismatched sections: ${mismatches}`);
  fs.writeFileSync('tmp/qa/family-layout-verify.txt', `${report.join('\n')}\n`);
  fs.writeFileSync('tmp/qa/family-layout-parts.txt', `${detail.join('\n')}\n`);
  console.log(`fingerprint mismatches: ${mismatches}`);
}

