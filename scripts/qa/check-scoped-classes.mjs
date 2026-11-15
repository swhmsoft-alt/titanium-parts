#!/usr/bin/env node
/**
 * Checks that every utility class used inside a `.mmo-page` block exists in
 * `src/styles/mmo-reference.css`.
 *
 * The utility layer of the reference pages is scoped under `.mmo-page` and was
 * generated from the reference markup. A class that is not in that file does
 * nothing at all — it fails silently, and the page loses a rule without any
 * error in the build. This script turns that silent failure into a failure.
 *
 * Usage: node scripts/qa/check-scoped-classes.mjs [file ...]
 * With no arguments the pages of the current expansion are checked.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const cssPath = resolve(root, 'src/styles/mmo-reference.css');

/**
 * Classes that are deliberately not in the utility layer.
 *
 * - `mmo-page` itself is the scope.
 * - The classes of the elements the renderer writes by hand are checked too,
 *   so this list only holds what the utility layer cannot know about.
 */
const ALLOWED = new Set(['mmo-page']);

/** Reads the class names the utility layer defines. */
function knownClasses() {
  const css = readFileSync(cssPath, 'utf8');
  const names = new Set();

  // `.mmo-page .some-class{` and `.mmo-page .some-class >`
  for (const match of css.matchAll(/\.mmo-page \.([A-Za-z0-9_-]+)/g)) {
    names.add(match[1]);
  }
  // `.mmo-page [class~="some-class"]`
  for (const match of css.matchAll(/\.mmo-page \[class~="([^"]+)"\]/g)) {
    names.add(match[1]);
  }
  // `.mmo-page .group:hover [class~="group-hover:x"]`
  for (const match of css.matchAll(/\[class~="([^"]+)"\]/g)) {
    names.add(match[1]);
  }
  return names;
}

/**
 * Reads every class token written in the markup of a source file.
 *
 * Only literal class attributes are read. A dynamic value — `class={x}` — is
 * resolved by the data that feeds it, which the page models carry, so the
 * models are read as well and their literal band classes are picked up.
 */
function usedClasses(source) {
  const used = new Set();

  for (const match of source.matchAll(/class="([^"]*)"/g)) {
    for (const token of match[1].split(/\s+/)) {
      if (token) used.add(token);
    }
  }

  // A template literal of a class attribute: `class={`...`}`.
  for (const match of source.matchAll(/class=\{`([^`]+)`\}/g)) {
    for (const literal of match[1].matchAll(/['"]([^'"]+)['"]/g)) {
      for (const token of literal[1].split(/\s+/)) {
        if (token) used.add(token);
      }
    }
  }

  return used;
}

/**
 * Reads the literal band classes of a page model.
 *
 * The band of a section and the class of the closing band are written as
 * plain strings in the model, so they are read from there.
 */
function modelClasses(source) {
  const used = new Set();
  const patterns = [
    /band:\s*'([^']+)'/g,
    /bandClass:\s*'([^']+)'/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      for (const token of match[1].split(/\s+/)) {
        if (token) used.add(token);
      }
    }
  }
  return used;
}

const defaultTargets = [
  'src/components/anode/ProductPage.astro',
  'src/components/anode/PageBand.astro',
  'src/components/anode/PageBlocks.astro',
  'src/components/anode/RuIrAnodePage.astro',
  'src/data/ru-ir-anode-page.ts',
  'src/data/ru-ir-anode-sections.ts',
  'src/data/ir-ta-anode-page.ts',
  'src/data/ir-ta-anode-sections.ts',
  'src/data/platinized-anode-page.ts',
  'src/data/platinized-anode-sections.ts',
  'src/data/pb-o2-anode-page.ts',
  'src/data/pb-o2-anode-sections.ts',
  'src/data/anti-fouling-page.ts',
  'src/data/anti-fouling-sections.ts',
  'src/data/cathodic-protection-page.ts',
  'src/data/cathodic-protection-sections.ts',
  'src/data/reference-electrode-page.ts',
  'src/data/reference-electrode-sections.ts',
  'src/data/pem-electrolyzer-page.ts',
  'src/data/pem-electrolyzer-sections.ts',
  'src/data/hydrogen-generator-page.ts',
  'src/data/hydrogen-generator-sections.ts',
  'src/data/salt-chlorinator-page.ts',
  'src/data/salt-chlorinator-sections.ts',
  'src/data/sodium-hypochlorite-page.ts',
  'src/data/sodium-hypochlorite-sections.ts',
];

const targets = process.argv.slice(2).length ? process.argv.slice(2) : defaultTargets;
const known = knownClasses();
const missing = new Map();

for (const target of targets) {
  const path = resolve(root, target);
  if (!existsSync(path)) continue;
  const source = readFileSync(path, 'utf8');
  const tokens = new Set([...usedClasses(source), ...modelClasses(source)]);
  for (const token of tokens) {
    if (ALLOWED.has(token)) continue;
    if (known.has(token)) continue;
    if (!missing.has(token)) missing.set(token, new Set());
    missing.get(token).add(target);
  }
}

if (missing.size === 0) {
  console.log(`OK: every scoped class is defined (${known.size} classes in the utility layer).`);
  process.exit(0);
}

console.log(`MISSING ${missing.size} class(es):`);
for (const [token, files] of [...missing.entries()].sort()) {
  console.log(`  ${token}  <- ${[...files].join(', ')}`);
}
process.exit(1);
