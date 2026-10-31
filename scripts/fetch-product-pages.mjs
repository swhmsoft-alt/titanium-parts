// Fetch all 16 production product pages and extract structured data
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT_DIR = path.resolve('scripts/product-data-json');
await mkdir(OUT_DIR, { recursive: true });

const slugs = [
  'titanium-plate', 'titanium-coil', 'titanium-rod-bar', 'titanium-tubing', 'titanium-wire',
  'titanium-foil', 'titanium-mesh', 'titanium-fasteners', 'titanium-fittings', 'titanium-flanges',
  'titanium-forgings', 'titanium-machined-parts', 'titanium-balls', 'titanium-baskets',
  'titanium-diaphragm', 'titanium-clad-copper',
];

const allImages = new Set();
const failed = [];

for (const slug of slugs) {
  const url = `https://heletitanium.com/titanium-products/${slug}/`;
  try {
    console.log(`Fetching ${slug}...`);
    const res = await fetch(url);
    if (!res.ok) { failed.push({ slug, status: res.status }); continue; }
    const html = await res.text();
    await writeFile(path.join(OUT_DIR, `${slug}.html`), html, 'utf8');
    // Extract image URLs
    const imgMatches = html.matchAll(/src="(https:\/\/heletitanium\.com\/wp-content\/uploads\/[^"]+\.(?:webp|jpg|jpeg|png|svg))"/g);
    for (const m of imgMatches) {
      const u = m[1];
      if (!u.includes('logo') && !u.includes('icon')) allImages.add(u);
    }
    console.log(`  OK (${html.length} bytes)`);
  } catch (e) {
    failed.push({ slug, error: e.message });
    console.log(`  ERROR: ${e.message}`);
  }
}

// Write image list
const imgList = [...allImages];
await writeFile(path.join(OUT_DIR, 'images.txt'), imgList.join('\n'), 'utf8');
console.log(`\nTotal unique images: ${imgList.length}`);
console.log(`Failed: ${failed.length}`);
if (failed.length) console.log(JSON.stringify(failed, null, 2));
