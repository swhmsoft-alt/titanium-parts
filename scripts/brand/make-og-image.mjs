/**
 * Generate the default Open Graph / Twitter card image.
 *
 * Rendered from an inline SVG so the result is deterministic and can be
 * regenerated whenever the brand palette or wording changes.
 *
 *   node scripts/brand/make-og-image.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'public', 'images', 'og-default.jpg');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="64" y="64" width="1072" height="502" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.35"/>
  <circle cx="600" cy="212" r="46" fill="none" stroke="#60a5fa" stroke-width="3"/>
  <path d="M 574 212 L 600 186 L 626 212 L 600 238 Z" fill="none" stroke="#60a5fa" stroke-width="3"/>
  <circle cx="600" cy="212" r="7" fill="#e63946"/>
  <text x="600" y="342" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="800" fill="#ffffff" text-anchor="middle">Titanium Parts</text>
  <text x="600" y="398" font-family="Inter, Arial, sans-serif" font-size="29" font-weight="600" fill="#93c5fd" text-anchor="middle">Titanium Products Manufacturer &amp; Engineering Supplier</text>
  <text x="600" y="452" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="500" fill="#cbd5e1" text-anchor="middle">Titanium Anodes &#183; PEM Electrolyzer Systems &#183; Custom Parts</text>
</svg>`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });

const info = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(OUT);

console.log(`Wrote ${path.relative(ROOT, OUT)} (${info.width}x${info.height}, ${info.size} bytes)`);
