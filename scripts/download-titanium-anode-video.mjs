// Download just the MP4 separately (large file)
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('public/images/titanium-anode/titanium-anode-manufacturing.mp4');
const URL = 'https://heletitanium.com/wp-content/uploads/2026/09/HeleTitanium_Website_Video_02_Clean_1080p.mp4';

await mkdir(path.dirname(OUT), { recursive: true });

try {
  const res = await fetch(URL, { redirect: 'follow' });
  console.log('Status:', res.status, 'CT:', res.headers.get('content-type'), 'Len:', res.headers.get('content-length'));
  if (!res.ok) { console.log('Failed'); process.exit(1); }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(OUT, buf);
  console.log(`Saved ${buf.length} bytes to ${OUT}`);
} catch (e) {
  console.log('Error:', e.message);
}
