/**
 * Blocking acceptance checks for the de-originalization work.
 *
 * Every check maps to a requirement that must hold before the site is
 * published. The script exits non-zero when any blocking check fails,
 * so it can gate a build in CI.
 *
 *   node scripts/qa/audit.mjs
 *   node scripts/qa/audit.mjs --verbose   # list every finding
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');
const VERBOSE = process.argv.includes('--verbose');

/** Domains whose assets must never be referenced from our own pages. */
const FOREIGN_HOSTS = ['heletitanium.com'];

/** Third-party trademarks that must not be presented as our own clients. */
const BANNED_LOGOS = [
  'electra', 'gonvarri', 'h2o', 'mainfraim',
  'pss', 'sespi', 'ventil-aqua', 'waterair',
];

const findings = [];
let failures = 0;

function fail(check, detail) {
  failures++;
  findings.push({ status: 'FAIL', check, detail });
}
function warn(check, detail) {
  findings.push({ status: 'WARN', check, detail });
}
function pass(check) {
  findings.push({ status: 'PASS', check, detail: '' });
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const srcFiles = walk(SRC).filter((f) => /\.(astro|ts|json)$/.test(f));

/* ------------------------------------------------------------------ */
/* 1. No third-party asset references                                   */
/* ------------------------------------------------------------------ */
{
  const offenders = [];
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const host of FOREIGN_HOSTS) {
      const re = new RegExp(`https?://(?:[^/]*\\.)?${host.replace(/\./g, '\\.')}`, 'g');
      const m = text.match(re);
      if (m) {
        offenders.push(
          `${path.relative(ROOT, file).replace(/\\/g, '/')}: ${m.length} ref(s)`
        );
      }
    }
  }
  if (offenders.length) {
    fail('no-foreign-host-references', offenders.join('\n      '));
  } else {
    pass('no-foreign-host-references');
  }
}

/* ------------------------------------------------------------------ */
/* 2. Every referenced local image exists                               */
/* ------------------------------------------------------------------ */
{
  const missing = [];
  const seen = new Set();
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/\/images\/[A-Za-z0-9\-_/.]+/g)) {
      const p = m[0];
      if (seen.has(p)) continue;
      seen.add(p);
      if (!fs.existsSync(path.join(PUBLIC, 'images', p.replace(/^\/images\//, '')))) {
        missing.push(p);
      }
    }
  }
  if (missing.length) {
    fail('image-references-resolve', missing.join('\n      '));
  } else {
    pass('image-references-resolve');
  }
}

/* ------------------------------------------------------------------ */
/* 3. No banned third-party logos on disk or in markup                  */
/* ------------------------------------------------------------------ */
{
  const logoDir = path.join(PUBLIC, 'images', 'logos');
  const found = fs.existsSync(logoDir)
    ? fs.readdirSync(logoDir).filter((f) => BANNED_LOGOS.includes(f.replace(/\.\w+$/, '')))
    : [];
  const markup = [];
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const name of BANNED_LOGOS) {
      if (text.includes(`/images/logos/${name}`)) {
        markup.push(`${path.relative(ROOT, file).replace(/\\/g, '/')} -> ${name}`);
      }
    }
  }
  if (found.length || markup.length) {
    fail('no-third-party-logos', [
      ...found.map((f) => `on disk: ${f}`),
      ...markup,
    ].join('\n      '));
  } else {
    pass('no-third-party-logos');
  }
}

/* ------------------------------------------------------------------ */
/* 4. No real-person photographs inherited from the source site          */
/* ------------------------------------------------------------------ */
{
  const teamDir = path.join(PUBLIC, 'images', 'team');
  const found = fs.existsSync(teamDir) ? fs.readdirSync(teamDir) : [];
  if (found.length) {
    fail('no-inherited-team-photos', found.join('\n      '));
  } else {
    pass('no-inherited-team-photos');
  }
}

/* ------------------------------------------------------------------ */
/* 5. Every image carries an alt attribute                              */
/* ------------------------------------------------------------------ */
{
  const bad = [];
  for (const file of srcFiles) {
    if (!file.endsWith('.astro')) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/<img\b[^>]*>/g)) {
      const tag = m[0];
      if (!/\balt\s*=/.test(tag)) {
        bad.push(`${path.relative(ROOT, file).replace(/\\/g, '/')}: ${tag.slice(0, 90)}`);
      }
    }
  }
  if (bad.length) {
    fail('images-have-alt', bad.join('\n      '));
  } else {
    pass('images-have-alt');
  }
}

/* ------------------------------------------------------------------ */
/* 6. No orphan image files                                             */
/* ------------------------------------------------------------------ */
{
  const referenced = new Set();
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/\/images\/[A-Za-z0-9\-_/.]+/g)) {
      referenced.add(m[0].replace(/^\/images\//, '').replace(/\\/g, '/'));
    }
  }
  const orphans = [];
  const imageRoot = path.join(PUBLIC, 'images');
  for (const file of walk(imageRoot)) {
    const rel = path.relative(imageRoot, file).replace(/\\/g, '/');
    if (!referenced.has(rel)) orphans.push(rel);
  }
  if (orphans.length) {
    warn('no-orphan-images', orphans.join('\n      '));
  } else {
    pass('no-orphan-images');
  }
}

/* ------------------------------------------------------------------ */
/* 7. No dead internal links                                            */
/* ------------------------------------------------------------------ */
{
  if (!fs.existsSync(DIST)) {
    warn('no-dead-internal-links', 'dist/ not built yet — skipped');
  } else {
    const routes = new Set(
      walk(DIST)
        .filter((f) => f.endsWith('.html'))
        .map((f) => {
          const rel = path.relative(DIST, f).replace(/\\/g, '/');
          // "contact/index.html" -> "/contact/" ; "index.html" -> "/"
          const route = '/' + rel.replace(/index\.html$/, '');
          return route;
        })
    );
    const dead = [];
    for (const file of srcFiles) {
      const text = fs.readFileSync(file, 'utf8');
      for (const m of text.matchAll(/href=["']([^"'#?]+)["']/g)) {
        const href = m[1];
        if (!href.startsWith('/')) continue;
        // Static assets are not routes.
        if (/\.[a-z0-9]{2,5}$/i.test(href)) continue;
        // Normalise to the trailing-slash form used by the route set.
        const normalised = href.endsWith('/') ? href : href + '/';
        if (!routes.has(normalised)) {
          dead.push(`${href}  (${path.relative(ROOT, file).replace(/\\/g, '/')})`);
        }
      }
    }
    const unique = [...new Set(dead)];
    if (unique.length) {
      warn('no-dead-internal-links', unique.join('\n      '));
    } else {
      pass('no-dead-internal-links');
    }
  }
}

/* ------------------------------------------------------------------ */
/* 8. Built output carries no foreign references                        */
/* ------------------------------------------------------------------ */
{
  if (!fs.existsSync(DIST)) {
    warn('dist-is-clean', 'dist/ not built yet — skipped');
  } else {
    const offenders = [];
    for (const file of walk(DIST)) {
      if (!/\.(html|xml|js|css|txt)$/.test(file)) continue;
      const text = fs.readFileSync(file, 'utf8');
      for (const host of FOREIGN_HOSTS) {
        if (text.includes(host)) {
          offenders.push(`${path.relative(DIST, file).replace(/\\/g, '/')} -> ${host}`);
        }
      }
    }
    if (offenders.length) {
      fail('dist-is-clean', [...new Set(offenders)].join('\n      '));
    } else {
      pass('dist-is-clean');
    }
  }
}

/* ------------------------------------------------------------------ */
/* 9. Every page has a unique title                                     */
/* ------------------------------------------------------------------ */
{
  const titles = new Map();
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/<BaseLayout[^>]*?\btitle="([^"]+)"/g)) {
      titles.set(m[1], (titles.get(m[1]) || 0) + 1);
    }
  }
  const dupes = [...titles.entries()].filter(([, n]) => n > 1);
  if (dupes.length) {
    warn('unique-page-titles', dupes.map(([t, n]) => `${t} (${n}x)`).join('\n      '));
  } else {
    pass('unique-page-titles');
  }
}

/* ------------------------------------------------------------------ */
/* 10. JSON-LD present on every page                                    */
/* ------------------------------------------------------------------ */
{
  // Structured data is emitted by the shared layout, so it is verified on
  // the built output rather than on individual page sources.
  if (!fs.existsSync(DIST)) {
    warn('structured-data-present', 'dist/ not built yet — skipped');
  } else {
    const built = walk(DIST).filter((f) => f.endsWith('.html'));
    const withLd = built.filter((f) =>
      fs.readFileSync(f, 'utf8').includes('application/ld+json')
    );
    if (!withLd.length) {
      fail('structured-data-present', 'no built page declares JSON-LD');
    } else if (withLd.length < built.length) {
      fail(
        'structured-data-present',
        `${withLd.length}/${built.length} built pages carry JSON-LD`
      );
    } else {
      pass('structured-data-present');
    }
  }
}

/* ------------------------------------------------------------------ */
/* Report                                                               */
/* ------------------------------------------------------------------ */
const shown = VERBOSE ? findings : findings.filter((f) => f.status !== 'PASS');
for (const f of shown) {
  console.log(`[${f.status}] ${f.check}${f.detail ? '\n      ' + f.detail : ''}`);
}
console.log(
  `\n${findings.filter((f) => f.status === 'PASS').length} passed, ` +
    `${findings.filter((f) => f.status === 'WARN').length} warnings, ${failures} failed`
);

if (failures) process.exit(1);
