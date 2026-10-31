// One-shot: download every image + video referenced by the production
// /titanium-anode/ page so we can render a 100% replica locally.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT_DIR = path.resolve('public/images/titanium-anode');
const BASE = 'https://heletitanium.com';

const assets = [
  // Hero
  { url: '/wp-content/uploads/2026/09/Titanium-Anode-Manufacturer.webp', out: 'titanium-anode-manufacturer.webp' },
  // Coating families
  { url: '/wp-content/uploads/2026/09/Ruthenium-Iridium-MMO-Anodes.webp', out: 'ru-ir-mmo-anodes.webp' },
  { url: '/wp-content/uploads/2026/09/Iridium-Tantalum-MMO-Anodes.webp', out: 'ir-ta-mmo-anodes.webp' },
  { url: '/wp-content/uploads/2026/09/Platinized-Titanium-Anodes.webp', out: 'platinized-titanium-anodes.webp' },
  { url: '/wp-content/uploads/2026/09/PbO%E2%82%82-Coated-Anodes.webp', out: 'pbo2-coated-anodes.webp' },
  // Anode forms (8 images)
  { url: '/wp-content/uploads/2026/10/Mesh-Anodes.webp', out: 'mesh-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Plate-Anodes.webp', out: 'plate-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Tubular-Anodes.webp', out: 'tubular-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Rod-Anodes.webp', out: 'rod-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Ribbon-Strip-Anodes.webp', out: 'ribbon-strip-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Wire-Anodes.webp', out: 'wire-anodes.webp' },
  { url: '/wp-content/uploads/2026/10/Disc-Special-Geometry.webp', out: 'disc-special-geometry.webp' },
  // Process review (4 images)
  { url: '/wp-content/uploads/2026/09/Titanium-Substrate-Traceability123.webp', out: 'titanium-substrate-traceability.webp' },
  { url: '/wp-content/uploads/2026/09/Surface-Preparation-Control.webp', out: 'surface-preparation-control.webp' },
  { url: '/wp-content/uploads/2026/09/Coating-Process-Loading-Control.webp', out: 'coating-process-loading-control.webp' },
  { url: '/wp-content/uploads/2026/09/Geometry-Electrical-Connection-Inspection.webp', out: 'geometry-electrical-connection-inspection.webp' },
  // Applications (2 extra images)
  { url: '/wp-content/uploads/2026/05/ChatGPT-Image-2026%E5%B9%B45%E6%9C%8826%E6%97%A5-18_57_13-3.webp', out: 'iccp-marine-protection.webp' },
  { url: '/wp-content/uploads/2026/05/ChatGPT-Image-2026%E5%B9%B45%E6%9C%8826%E6%97%A5-19_37_43.webp', out: 'electrowinning-surface-finishing.webp' },
  // Manufacturing video poster + video
  { url: '/wp-content/uploads/2026/09/Titanium-Anodes-Manufacturer-Hele-scaled.webp', out: 'titanium-anodes-video-poster.webp' },
  { url: '/wp-content/uploads/2026/09/HeleTitanium_Website_Video_02_Clean_1080p.mp4', out: 'titanium-anode-manufacturing.mp4' },
];

await mkdir(OUT_DIR, { recursive: true });

let ok = 0, fail = 0;
for (const a of assets) {
  const fullUrl = BASE + a.url;
  try {
    const res = await fetch(fullUrl);
    if (!res.ok) { console.log('FAIL', res.status, fullUrl); fail++; continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = path.join(OUT_DIR, a.out);
    await writeFile(dest, buf);
    console.log('OK ', a.out, '-', buf.length, 'bytes');
    ok++;
  } catch (e) {
    console.log('ERR', a.out, e.message);
    fail++;
  }
}
console.log(`Done: ${ok} ok, ${fail} failed of ${assets.length}`);
