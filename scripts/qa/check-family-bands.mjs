/**
 * Checks the built pages in dist/ against the reference band map.
 *
 * For every MMO family page it reports the band of every content section,
 * the eyebrow labels, the FAQ answers and the table treatment. A light band
 * that carries a dark table is reported as a failure — that combination is
 * what made the table body text unreadable.
 */
import fs from 'node:fs';

const SLUGS = [
  'mmo-wire-anode', 'mmo-ribbon-anode', 'mmo-mesh-ribbon-anode',
  'mmo-canister-anode', 'mmo-tubular-anode', 'mmo-disc-anode', 'mmo-rod-anode',
];

const lines = [];
const problems = [];

for (const slug of SLUGS) {
  const file = `dist/titanium-anode/mmo-anode/${slug}/index.html`;
  if (!fs.existsSync(file)) {
    problems.push(`${slug}: page missing in dist`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const sections = [...html.matchAll(/<section[^>]*id="([^"]+)"[^>]*class="([^"]*)"/g)];
  const bands = sections.map(([, id, cls]) => {
    const m = cls.match(/mmo-band-(alt|navy|dark)/);
    return { id, band: m ? m[1] : 'plain' };
  });
  const eyebrows = [...html.matchAll(/<p class="mmo-eyebrow[^"]*">([^<]*)<\/p>/g)].map((m) => m[1]);
  const faq = [...html.matchAll(/<details class="mmo-faq[^"]*">([\s\S]*?)<\/details>/g)];
  const faqEmpty = faq.filter(([, body]) => {
    const answer = body.replace(/<summary>[\s\S]*?<\/summary>/, '').replace(/<[^>]+>/g, '').trim();
    return answer.length === 0;
  }).length;
  const darkTables = (html.match(/mmo-table-dark/g) || []).length;
  const narrowTables = (html.match(/mmo-table-narrow/g) || []).length;
  const lightTables = (html.match(/class="mmo-table( |")/g) || []).length;

  lines.push(
    `${slug}\n  bands: ${bands.map((b) => `${b.id}=${b.band}`).join(' ')}\n` +
      `  eyebrows: ${eyebrows.length} | faq panels: ${faq.length} (empty ${faqEmpty}) | ` +
      `tables: light ${lightTables} narrow ${narrowTables} dark ${darkTables}`
  );

  if (faq.length && faqEmpty) problems.push(`${slug}: ${faqEmpty} FAQ panel(s) without an answer`);
  if (!eyebrows.length) problems.push(`${slug}: no eyebrow label rendered`);
  const lightBand = bands.filter((b) => b.band !== 'dark' && b.band !== 'navy').length;
  if (lightBand && darkTables) problems.push(`${slug}: ${darkTables} dark table(s) on a light band`);
}

fs.writeFileSync('tmp/qa/dist-check.txt', `${lines.join('\n')}\n\n=== problems ===\n${problems.join('\n') || 'none'}\n`);
console.log(problems.length ? `${problems.length} problems` : 'all pages consistent');
