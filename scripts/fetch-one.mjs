const r = await fetch('https://heletitanium.com/titanium-machining-parts/');
console.log('Status:', r.status);
if (r.ok) {
  const html = await r.text();
  const { writeFile, mkdir } = await import('node:fs/promises');
  await mkdir('scripts/product-data-json', { recursive: true });
  await writeFile('scripts/product-data-json/titanium-machining-parts.html', html, 'utf8');
  console.log('Saved', html.length, 'bytes');
}
