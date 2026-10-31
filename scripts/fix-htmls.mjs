import { writeFile, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';
const IN_DIR = path.resolve('scripts/product-data-json');
await mkdir(IN_DIR, { recursive: true });

// 1. Delete the wrong file (production returns 404 for /titanium-products/titanium-machined-parts/)
try { await unlink(path.join(IN_DIR, 'titanium-machined-parts.html')); console.log('Deleted wrong: titanium-machined-parts.html'); } catch {}

// 2. Fetch the correct HTMLs
const targets = [
  { url: '/titanium-products/titanium-foil-2/', out: 'titanium-foil-2.html' },
  { url: '/titanium-products/titanium-bolts/', out: 'titanium-bolts.html' },
  { url: '/titanium-machining-parts/', out: 'titanium-machining-parts.html' },
];
for (const t of targets) {
  const full = 'https://heletitanium.com' + t.url;
  const r = await fetch(full);
  if (!r.ok) { console.log('FAIL', r.status, full); continue; }
  const html = await r.text();
  await writeFile(path.join(IN_DIR, t.out), html, 'utf8');
  console.log('OK ', t.out, '-', html.length, 'bytes');
}
