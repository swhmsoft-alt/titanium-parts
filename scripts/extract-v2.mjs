import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const IN = path.resolve('scripts/product-data-json');
const OUT = path.resolve('src/data/titanium-product-details');
await mkdir(OUT, { recursive: true });
const t = (s) => s?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() || '';

// Slugs map to actual production URLs
const slugs = [
  'titanium-plate', 'titanium-coil', 'titanium-rod-bar', 'titanium-tubing', 'titanium-wire',
  'titanium-foil-2', 'titanium-mesh', 'titanium-bolts', 'titanium-fittings', 'titanium-flanges',
  'titanium-forgings', 'titanium-machining-parts', 'titanium-balls', 'titanium-baskets',
  'titanium-diaphragm', 'titanium-clad-copper',
];

const imgs = new Set();
const out = {};
for (const slug of slugs) {
  const html = await readFile(path.join(IN, slug + '.html'), 'utf8');
  // Hero (section id="*-hero")
  const hs = html.match(/<section[^>]*id="[^"]*-hero"[\s\S]*?<\/section>/i);
  const hero = hs ? {
    eyebrow: t((hs[0].match(/<p[^>]*text-(?:sm|blue|amber)[^>]*>([\s\S]*?)<\/p>/) || [, ''])[1]),
    title: t((hs[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]),
    desc: t((hs[0].match(/<p[^>]*text-(?:lg|base|xl)[^>]*>([\s\S]*?)<\/p>/) || [, ''])[1]),
    img: (hs[0].match(/<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+\.(?:webp|jpg|png))"/) || [, ''])[1] || null,
  } : {};
  // Find ALL h2 and split content by them
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  // FAQ: collect all <details> from anywhere
  const faq = [];
  const dRe = /<details[\s\S]*?<summary[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>\s*<div[\s\S]*?<p>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = dRe.exec(html))) faq.push({ q: t(m[1]), a: t(m[2]) });
  // All h2 titles
  const h2Titles = h2s.map(m => t(m[1])).filter(x => x.length > 3 && x.length < 200);
  // All h3 + p pairs
  const h3ps = [];
  const hpRe = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  while ((m = hpRe.exec(html))) h3ps.push({ title: t(m[1]), body: t(m[2]) });
  // All cards with image + h3 + p
  const cards = [];
  const cardRe = /<article[\s\S]*?<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+)" alt="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<article|<\/article)/g;
  while ((m = cardRe.exec(html))) {
    const h3 = t(m[3]);
    const rest = m[4];
    const ps = [...rest.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(p => t(p[1]));
    cards.push({ img: m[1], alt: m[2], title: h3, spec: ps[0] || '', body: ps[ps.length - 1] || '' });
  }
  // RFQ options
  const rfqSec = html.match(/<section[^>]*id="[^"]*-rfq"[\s\S]*?<\/section>/i);
  const rfqOptions = rfqSec ? [...rfqSec[0].matchAll(/<option value="[^"]*"[^>]*>([\s\S]*?)<\/option>/g)].map(m => t(m[1])).filter(x => x && !/^select/i.test(x)) : [];
  // All image URLs in this page
  [...html.matchAll(/<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+\.(?:webp|jpg|png))"/g)].forEach(m => imgs.add(m[1]));
  out[slug] = { hero, h2Titles, h3ps, cards, faq, rfqOptions };
  console.log(slug.padEnd(22) + ' hero=' + (hero.title?.slice(0, 25) || '-') + ' h2=' + h2Titles.length + ' h3ps=' + h3ps.length + ' cards=' + cards.length + ' faq=' + faq.length + ' rfq=' + rfqOptions.length);
}
await writeFile(path.join(OUT, 'all.json'), JSON.stringify(out, null, 2), 'utf8');
await writeFile(path.join(OUT, 'images.txt'), [...imgs].join('\n'), 'utf8');
console.log('\nTotal unique images: ' + imgs.size);
