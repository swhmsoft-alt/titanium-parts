import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT_DIR = path.resolve('public/images/titanium-products');
const BASE = 'https://heletitanium.com';

const assets = [
  { url: '/wp-content/uploads/2026/06/Titanium-Products-Manufacturer-Supplier.webp', out: 'hero-bg.webp' },
  // 13 product range images
  { url: '/wp-content/uploads/2026/09/Titanium-Plate.webp', out: 'titanium-plate.webp' },
  { url: '/wp-content/uploads/2026/09/Precision-Slit-Strip.webp', out: 'titanium-coil-strip.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Rods-Bars-1.webp', out: 'titanium-rod-bar.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Tubes-Pipes.webp', out: 'titanium-tubes-pipes.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Wire.webp', out: 'titanium-wire.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Foil.webp', out: 'titanium-foil.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Mesh.webp', out: 'titanium-mesh.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Fasteners.webp', out: 'titanium-fasteners.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Fittings.webp', out: 'titanium-fittings.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Flanges.webp', out: 'titanium-flanges.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Forgings.webp', out: 'titanium-forgings.webp' },
  { url: '/wp-content/uploads/2026/09/Titanium-Machined-Components.webp', out: 'titanium-machined-parts.webp' },
  // 6 industry images
  { url: '/wp-content/uploads/2026/09/Chemical-Processing01.webp', out: 'industry-chemical-processing.webp' },
  { url: '/wp-content/uploads/2026/09/Marine-Offshore02.webp', out: 'industry-marine-offshore.webp' },
  { url: '/wp-content/uploads/2026/09/Medical-Precision-Engineering03.webp', out: 'industry-medical-precision.webp' },
  { url: '/wp-content/uploads/2026/09/Aerospace-High-Performance-Engineering04.webp', out: 'industry-aerospace.webp' },
  { url: '/wp-content/uploads/2026/09/Electrochemical-Systems05.webp', out: 'industry-electrochemical-systems.webp' },
  { url: '/wp-content/uploads/2026/09/Green-Hydrogen.webp', out: 'industry-green-hydrogen.webp' },
  // 2 misc
  { url: '/wp-content/uploads/2026/07/Custom-Titanium-Processing-for-Drawings-Samples-and-Project-Requirements.webp', out: 'titanium-processing-banner.webp' },
  { url: '/wp-content/uploads/2026/09/Inspection-QA.webp', out: 'inspection-qa.webp' },
];

await mkdir(OUT_DIR, { recursive: true });

let ok = 0, fail = 0;
for (const a of assets) {
  try {
    const res = await fetch(BASE + a.url);
    if (!res.ok) { console.log('FAIL', res.status, a.url); fail++; continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(OUT_DIR, a.out), buf);
    console.log('OK ', a.out, '-', buf.length, 'bytes');
    ok++;
  } catch (e) {
    console.log('ERR', a.out, e.message);
    fail++;
  }
}
console.log(`Done: ${ok} ok, ${fail} failed of ${assets.length}`);
