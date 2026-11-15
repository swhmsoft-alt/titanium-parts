/**
 * Captures the markup of the reference pages, section by section.
 *
 * The pages of this family are drawn with the reference pages' own markup
 * and the reference pages' own utilities. Re-typing the markup into Astro
 * components loses the details that make a page look right — the exact grid,
 * the exact padding, the exact order — so the markup is taken from the saved
 * reference pages as it is and only cleaned:
 *
 *   - scripts, styles, forms and frames are removed;
 *   - the reference brand is taken out of the copy;
 *   - every address becomes an address of this site;
 *   - every picture becomes the local copy of it.
 *
 *   node scripts/mmo/extract-family-sections.mjs
 *
 * Writes `tmp/ref/family-sections.json` and reports what was captured.
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

/** The copy of the reference brand never reaches this site. */
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

/** Rewrites a reference address to the matching route on this site. */
const localHref = (href) => {
  if (!href) return href;
  if (!href.startsWith('http')) return href;
  const path = href
    .replace(/^https?:\/\/[^/]+/, '')
    .split('#')[0]
    .replace(/\/+$/, '')
    .replace(/\/Titanium Anodes.*$/, '');
  const anchor = href.includes('#') ? `#${href.split('#')[1]}` : '';
  if (!path) return `/${anchor}`;
  return `${path.replace(/^\/+/, '/')}${anchor}`;
};

/** The local copy of a reference picture. */
function localImage(src, manifest) {
  if (!src) return src;
  for (const entry of Object.values(manifest)) {
    const file = typeof entry === 'string' ? entry : entry.src;
    if (!file) continue;
    if (src === file || src.endsWith(new URL(file, 'https://x').pathname)) return file;
  }
  return src;
}

/** Removes what the reference page carries that this site does not need. */
function clean(body) {
  let out = body;

  // Scripts, styles, frames.
  out = out.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<style\b[\s\S]*?<\/style>/gi, '');
  out = out.replace(/<iframe\b[\s\S]*?<\/iframe>/gi, '');
  out = out.replace(/<noscript\b[\s\S]*?<\/noscript>/gi, '');

  // The form of the reference page posts to the reference site. Its layout is
  // kept — it is part of the design — but it posts to this site's contact
  // page and uses this site's field names.
  out = out.replace(
    /<form[^>]*>/gi,
    '<form action="/contact/" method="post" enctype="multipart/form-data" class="space-y-5">'
  );
  out = out.replace(/<input type="hidden"[^>]*>/gi, '');
  out = out.replace(/<input[^>]*_official_website_url[^>]*>/gi, '');
  out = out.replace(/name="contact_name"/g, 'name="fullName"');
  out = out.replace(/name="contact_email"/g, 'name="email"');
  out = out.replace(/name="product_interest"/g, 'name="product"');
  out = out.replace(/name="file_upload"/g, 'name="attachment"');
  out = out.replace(/name="message"/g, 'name="message"');

  // The theme's own markup hooks carry no meaning here, but the container
  // hook does — it is what gives a section its width and its side padding.
  out = out.replace(/\sdata-morank-(theme-color|theme-bg)="[^"]*"/gi, '');
  out = out.replace(/data-morank-container="page"/gi, 'data-mmo-container="page"');

  // The brand and its address.
  out = debrand(out);
  out = out.replace(/sales@heletitanium\.com/g, 'sales@titanium-parts.com');

  // Addresses.
  out = out.replace(/href="(https?:\/\/[^"]*)"/g, (_, href) => `href="${localHref(href)}"`);

  // Comments.
  out = out.replace(/<!--[\s\S]*?-->/g, '');

  return out;
}

/** The anchor navigation that sits between the hero and the first section. */
function navOf(body) {
  const match = body.match(/<nav class="anchor-nav[\s\S]*?<\/nav>/);
  return match ? clean(match[0]) : '';
}

const manifest = JSON.parse(fs.readFileSync('tmp/ref/image-manifest.json', 'utf8'));

/** Every reference picture, by the address the reference page uses. */
const pictures = new Map();
for (const page of Object.values(manifest)) {
  for (const [remote, local] of Object.entries(page)) pictures.set(remote, local);
}

const pages = {};
const report = [];

for (const slug of SLUGS) {
  const file = `tmp/ref/${slug}.html`;
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');

  const body = html.slice(html.indexOf('<main'));
  const all = sectionsOf(body).map((section) => ({
    id: section.id,
    cls: section.cls,
    body: clean(section.body),
  }));

  // The first section without an id is the hero.
  const hero = all.find((section) => !section.id);
  const sections = all.filter((section) => section.id);

  // The pictures of the page, taken to their local copies.
  for (const section of [hero, ...sections].filter(Boolean)) {
    section.body = section.body.replace(/src="(https?:\/\/[^"]+)"/g, (_, src) => {
      const local = pictures.get(src);
      return local ? `src="${local}"` : `src="${src}"`;
    });
  }

  pages[slug] = {
    hero: hero ? { cls: hero.cls, body: hero.body } : null,
    nav: navOf(body),
    sections,
  };

  report.push(
    `${slug}: hero ${hero ? 'yes' : 'no'}, nav ${pages[slug].nav ? 'yes' : 'no'}, ${sections.length} sections, ${sections.reduce(
      (n, s) => n + s.body.length,
      0
    )} chars`
  );
}

fs.writeFileSync(
  'tmp/ref/family-sections.json',
  JSON.stringify({ pages }, null, 2)
);

report.push(`written: tmp/ref/family-sections.json`);
console.log(report.join('\n'));

function sectionsOf(html) {
  const out = [];
  const pattern = /<section\b([^>]*)>/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const attrs = match[1];
    const id = attrs.match(/id="([^"]+)"/)?.[1] ?? '';
    const cls = attrs.match(/class="([^"]*)"/)?.[1] ?? '';
    const start = match.index + match[0].length;

    // The body of the section ends at its own closing tag.
    let depth = 1;
    let i = start;
    while (i < html.length && depth > 0) {
      const open = html.indexOf('<section', i);
      const close = html.indexOf('</section>', i);
      if (close === -1) break;
      if (open !== -1 && open < close) {
        depth++;
        i = open + 8;
        continue;
      }
      depth--;
      i = close + 10;
      if (depth === 0) {
        out.push({ id, cls, body: html.slice(start, close) });
      }
    }
    pattern.lastIndex = i;
  }
  return out;
}
