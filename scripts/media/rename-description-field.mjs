/**
 * Rename the long-form body field to `detail` in the data sources that
 * also carry a short meta description.
 *
 * Both fields were called `description`, so the later declaration won and
 * the meta description came out as a 200-350 character paragraph.
 *
 * The rename is applied to the *second* `description:` block of each
 * entry, which is the long body — the first one is the meta description
 * inserted by `apply-template-descriptions.mjs`.
 *
 *   node scripts/media/rename-description-field.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

/** Data source files to process. */
const SOURCES = [
  'src/data/anode-coatings.ts',
  'src/data/industries-data.ts',
  'src/data/service-steps.ts',
];

let changed = 0;

for (const rel of SOURCES) {
  const full = path.join(ROOT, rel);
  const source = fs.readFileSync(full, 'utf8');
  let text = source;

  // 1. The interface declaration.
  text = text.replace(
    /(\/\*\* )Longer description([^*]*\*\/\n\s*)description: string;/,
    '$1Longer description$2detail: string;'
  );

  // 2. Each entry: rename the SECOND `description:` occurrence.
  const entryRe = /^(\s{2}\{\n)([\s\S]*?)^(\s{2}\},\n)/gm;
  text = text.replace(entryRe, (_m, head, body, tail) => {
    let seen = 0;
    const renamed = body.replace(/^(\s{4})description:$/gm, (line, indent) => {
      seen++;
      // Keep the first (the meta description), rename the rest.
      return seen === 1 ? line : `${indent}detail:`;
    });
    return head + renamed + tail;
  });

  if (text !== source) {
    fs.writeFileSync(full, text);
    changed++;
    console.log(`updated ${rel}`);
  }
}

console.log(`\n${changed} file(s) updated`);
