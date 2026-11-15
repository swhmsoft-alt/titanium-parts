import sharp from 'sharp';
import fs from 'node:fs';
const f = 'public/images/hero-bg.webp';
const m = await sharp(f).metadata();
const st = fs.statSync(f);
console.log(JSON.stringify({ file: f, format: m.format, width: m.width, height: m.height, bytes: st.size }, null, 2));
