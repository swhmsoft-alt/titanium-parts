import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const IN_DIR = path.resolve('scripts/product-data-json');
const OUT_DIR = path.resolve('src/data/titanium-product-details');
await mkdir(OUT_DIR, { recursive: true });
const t = (s) => s?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() || '';
const slugs = ['titanium-plate','titanium-coil','titanium-rod-bar','titanium-tubing','titanium-wire','titanium-foil','titanium-mesh','titanium-fasteners','titanium-fittings','titanium-flanges','titanium-forgings','titanium-machined-parts','titanium-balls','titanium-baskets','titanium-diaphragm','titanium-clad-copper'];
const imgs = new Set(); const out = {};
for (const slug of slugs) {
  const html = await readFile(path.join(IN_DIR, slug + '.html'), 'utf8');
  // Hero
  const hs = html.match(/<section[^>]*id="[^"]*-hero"[\s\S]*?<\/section>/i);
  const hero = hs ? {
    eyebrow: t((hs[0].match(/<p class="[^"]*eyebrow[^"]*"[^>]*>([\s\S]*?)<\/p>/)||[,''])[1]),
    title: t((hs[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/)||[,''])[1]),
    desc: t((hs[0].match(/<p class="[^"]*lede[^"]*"[^>]*>([\s\S]*?)<\/p>/)||[,''])[1]),
    img: (hs[0].match(/<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+\.(?:webp|jpg|png))"/)||[,''])[1] || null,
  } : {};
  // Forms
  const fs = html.match(/<section[^>]*id="[^"]*forms"[\s\S]*?<\/section>/i) || html.match(/<section[\s\S]*?Product Forms[\s\S]*?<\/section>/i);
  const forms = [];
  if (fs) {
    const re = /<a class="group block[\s\S]*?<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+)" alt="([^"]+)"[\s\S]*?<\/div>\s*<div class="p-6">\s*<h3[^>]*>([\s\S]*?)<\/h3>\s*<p class="[^"]*text-sm font-semibold[^"]*">([\s\S]*?)<\/p>\s*<p class="[^"]*mt-4[^"]*">([\s\S]*?)<\/p>/g;
    let m; while ((m = re.exec(fs[0]))) forms.push({ img: m[1], alt: m[2], title: t(m[3]), spec: t(m[4]), body: t(m[5]) });
  }
  // Selection guide
  const sg = html.match(/<section[\s\S]*?Solution Selection Guide[\s\S]*?<\/section>/i);
  const selectionGuide = [];
  if (sg) {
    const re = /<li[^>]*>\s*<span[^>]*>(\d+)<\/span>\s*<div>\s*<strong>([^<]+)<\/strong>\s*<p>([\s\S]*?)<\/p>/g;
    let m; while ((m = re.exec(sg[0]))) selectionGuide.push({ n: m[1], title: t(m[2]), body: t(m[3]) });
  }
  // Process
  const ps = html.match(/<section[^>]*bg-slate-950[\s\S]*?(?:From Substrate|From Material|From Slab|From Stock|From Wire|From Foil|From Plate|From Tube|From Bar|From Coil|From Mesh|From Fittings|From Fasteners|From Flange|From Forgings|From Machined|From Balls|From Baskets|From Diaphragm|From Clad)[\s\S]*?<\/section>/);
  const process = [];
  if (ps) {
    const re = /<article[\s\S]*?<div[^>]*>(\d+)<\/div>\s*<h3[^>]*>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>[\s\S]*?<p class="[^"]*em[^"]*"><em>([\s\S]*?)<\/em><\/p>[\s\S]*?<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+)" alt="([^"]+)"/g;
    let m; while ((m = re.exec(ps[0]))) process.push({ n: m[1], title: t(m[2]), body: t(m[3]), evidence: t(m[4]), img: m[5], alt: m[6] });
  }
  // Applications
  const aps = html.match(/<section[\s\S]*?(?:Four |Two |Three |)Application[\s\S]*?<\/section>/i);
  const applications = [];
  if (aps) {
    const re = /<a class="[^"]*app-card[\s\S]*?<img src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+)" alt="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
    let m; while ((m = re.exec(aps[0]))) applications.push({ img: m[1], alt: m[2], title: t(m[3]), body: t(m[4]) });
  }
  // Purchase guard
  const pg = html.match(/<section[\s\S]*?Purchase Guard[\s\S]*?<\/section>/i);
  const purchaseGuard = [];
  if (pg) {
    const re = /<h3[^>]*>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
    let m; while ((m = re.exec(pg[0]))) purchaseGuard.push({ title: t(m[1]), body: t(m[2]) });
  }
  // FAQ
  const fs2 = html.match(/<section[^>]*id="[^"]*-faq"[\s\S]*?<\/section>/i) || html.match(/<section[\s\S]*?FAQ[\s\S]*?<\/section>/i);
  const faq = [];
  if (fs2) {
    const re = /<details[\s\S]*?<summary[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>\s*<div[\s\S]*?<p>([\s\S]*?)<\/p>/g;
    let m; while ((m = re.exec(fs2[0]))) faq.push({ q: t(m[1]), a: t(m[2]) });
  }
  // RFQ options
  const rfqs = html.match(/<section[^>]*id="[^"]*-rfq"[\s\S]*?<\/section>/i);
  const rfqOptions = [];
  if (rfqs) {
    const re = /<option value="[^"]*"[^>]*>([^<]+)<\/option>/g;
    let m; while ((m = re.exec(rfqs[0]))) {
      const v = t(m[1]); if (v && !v.toLowerCase().startsWith('select')) rfqOptions.push(v);
    }
  }
  out[slug] = { hero, forms, selectionGuide, process, applications, purchaseGuard, faq, rfqOptions };
  [hero.img, ...forms.map(f=>f.img), ...process.map(p=>p.img), ...applications.map(a=>a.img)].filter(Boolean).forEach(u => imgs.add(u));
  console.log(slug.padEnd(22) + ' hero=' + (hero.title?.slice(0,30)||'-') + ' forms=' + forms.length + ' sel=' + selectionGuide.length + ' proc=' + process.length + ' apps=' + applications.length + ' faq=' + faq.length + ' rfq=' + rfqOptions.length);
}
await writeFile(path.join(OUT_DIR, 'all.json'), JSON.stringify(out, null, 2), 'utf8');
await writeFile(path.join(OUT_DIR, 'images.txt'), [...imgs].join('\n'), 'utf8');
console.log('\nTotal unique images: ' + imgs.size);
