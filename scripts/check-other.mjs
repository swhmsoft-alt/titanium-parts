const urls = [
  '/', '/titanium-products/', '/titanium-anode/', '/pem-electrolyzer/', '/cathodic-protection/',
  '/company/', '/our-team/', '/quality/', '/manufacturing-capabilities/',
  '/industries/', '/knowledge-center/', '/contact/',
  '/hydrogen-generators/', '/sodium-hypochlorite-generator/', '/salt-chlorinator-for-pool/',
  '/404.html',
];
const results = await Promise.all(urls.map(async (u) => {
  try {
    const r = await fetch(`http://localhost:4321${u}`);
    return { url: u, status: r.status };
  } catch (e) {
    return { url: u, error: e.message };
  }
}));
const bad = results.filter(r => r.status >= 500);
console.log(`Result: ${results.length - bad.length}/${results.length} OK (no 500 errors)`);
if (bad.length) console.log('500s:', bad.map(b => `${b.url}`).join(', '));
for (const r of results) {
  const tag = r.status === 200 ? '✓' : r.status >= 500 ? '✗' : '~';
  console.log(`  ${tag} [${r.status}] ${r.url}`);
}
