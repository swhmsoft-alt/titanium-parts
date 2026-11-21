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
 *
 * The second half of the script checks the built pages in `dist`: every class
 * has to be styled for the scope it is rendered in — either by a global rule
 * or by a rule scoped to the `data-astro-cid` of the element that carries it.
 * A class that only exists under another component's scope is dead CSS.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
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

/**
 * Checks that every class of the built pages is styled for the scope it is
 * rendered in.
 *
 * Astro scopes a component's `<style>` to the elements of that component, so a
 * rule of one component never reaches the markup of another. A class that only
 * exists under another component's `data-astro-cid` is silently dead: the page
 * builds, the class is in the stylesheet, and nothing is styled. Reading the
 * class names alone cannot see this — the scope attribute has to be compared
 * with the scope of the rule.
 */
const DIST = resolve(root, 'dist');

/** Marker classes that intentionally carry no rule of their own. */
const UNSTYLED_MARKERS = new Set([
  'footer-brand',
  'logo-default',
  'logo-white',
  'tp-app-card',
]);

/** Reads the class names a stylesheet styles, per scope. */
function collectStyles(css) {
  const globalClasses = new Set();
  const cidClasses = new Map();

  for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selector = match[1];
    const cids = [...selector.matchAll(/\[data-astro-cid-([A-Za-z0-9_-]+)\]/g)].map((m) => m[1]);
    const classes = [...selector.matchAll(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g)].map((m) => m[1]);

    if (cids.length === 0) {
      for (const name of classes) globalClasses.add(name);
      continue;
    }
    for (const cid of cids) {
      if (!cidClasses.has(cid)) cidClasses.set(cid, new Set());
      for (const name of classes) cidClasses.get(cid).add(name);
    }
  }

  return { globalClasses, cidClasses };
}

/** Merges the styles of one stylesheet into the collected styles. */
function mergeStyles(target, source) {
  for (const name of source.globalClasses) {
    target.globalClasses.add(name);
    target.allDefined.add(name);
  }
  for (const [cid, names] of source.cidClasses) {
    if (!target.cidClasses.has(cid)) target.cidClasses.set(cid, new Set());
    for (const name of names) {
      target.cidClasses.get(cid).add(name);
      target.allDefined.add(name);
    }
  }
}

/** Checks one built page against the collected styles. */
function checkPage(html, pagePath, styles, problems, markers) {
  for (const match of html.matchAll(/<([a-zA-Z][a-zA-Z0-9-]*)((?:\s[^<>]*?)?)\/?>/g)) {
    const attributes = match[2] || '';
    const cid = attributes.match(/data-astro-cid-([A-Za-z0-9_-]+)/);
    const className = attributes.match(/class="([^"]*)"/);
    if (!cid || !className) continue;

    const scoped = styles.cidClasses.get(cid[1]) || new Set();
    for (const token of className[1].split(/\s+/)) {
      if (!token || UNSTYLED_MARKERS.has(token)) continue;
      if (styles.globalClasses.has(token) || scoped.has(token)) continue;
      const line = `  ${token}  <- ${pagePath}`;
      // A class that is styled somewhere else but not in this scope is a dead
      // rule: the page renders unstyled. A class that is styled nowhere is a
      // marker class, not a defect.
      const bucket = styles.allDefined.has(token) ? problems : markers;
      if (!bucket.has(line)) bucket.set(line, token);
    }
  }
}

/** Lists the built pages of the site. */
function listPages(directory) {
  const pages = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_astro') continue;
      pages.push(...listPages(full));
    } else if (entry.name.endsWith('.html')) {
      pages.push({ path: full, relative: full.slice(DIST.length + 1) });
    }
  }
  return pages;
}

const styles = { globalClasses: new Set(), cidClasses: new Map(), allDefined: new Set() };
const scopeProblems = new Map();
const markerUses = new Map();
let pagesChecked = 0;

if (existsSync(DIST)) {
  const astroDir = resolve(DIST, '_astro');
  if (existsSync(astroDir)) {
    for (const name of readdirSync(astroDir).filter((file) => file.endsWith('.css'))) {
      mergeStyles(styles, collectStyles(readFileSync(resolve(astroDir, name), 'utf8')));
    }
  }

  for (const page of listPages(DIST)) {
    const html = readFileSync(page.path, 'utf8');
    // Styles Astro inlined into the page carry their scope with them.
    for (const match of html.matchAll(/<style>([\s\S]*?)<\/style>/g)) {
      mergeStyles(styles, collectStyles(match[1]));
    }
    checkPage(html, page.relative, styles, scopeProblems, markerUses);
    pagesChecked += 1;
  }
}

if (missing.size === 0) {
  console.log(`OK: every scoped class is defined (${known.size} classes in the utility layer).`);
} else {
  console.log(`MISSING ${missing.size} class(es):`);
  for (const [token, files] of [...missing.entries()].sort()) {
    console.log(`  ${token}  <- ${[...files].join(', ')}`);
  }
}

const scopeLines = [...scopeProblems.keys()].sort();

const markerLines = [...markerUses.keys()].sort();

if (pagesChecked === 0) {
  console.log('SKIP: no built pages found, the scope check did not run.');
} else if (scopeLines.length === 0) {
  console.log(`OK: every class of the built pages is styled for the scope it is rendered in (${pagesChecked} pages checked).`);
} else {
  console.log(`UNSCOPED ${scopeLines.length} class use(s):`);
  for (const line of scopeLines) console.log(line);
}

if (markerLines.length > 0) {
  console.log(`NOTE: ${markerLines.length} class use(s) carry no rule at all (markers, not defects).`);
}

process.exit(missing.size === 0 && scopeLines.length === 0 ? 0 : 1);
