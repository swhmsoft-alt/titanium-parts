/**
 * Assertion handlers for the task verifier.
 *
 * Every handler is business agnostic: it reads a declaration from the task
 * file and answers one question about the built site. Adding a new kind of
 * check means adding a handler here — no existing task file has to change.
 *
 * Handler signature: (assertion, ctx) => { pass: boolean, detail: string }
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ORIGIN = 'https://titanium-parts.com';

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

/** Strip tags so a text check can match across element boundaries. */
function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function meta(html, pattern) {
  const m = html.match(pattern);
  return m ? m[1] : null;
}

function jsonLdOf(html) {
  const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch {
    return null;
  }
}

/** Decode the entities Astro emits into text nodes. */
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&rarr;/g, '→')
    .trim();
}

/**
 * Mega menu groups of one navigation menu, parsed from the built header.
 *
 * The split patterns tolerate the scoped-style attribute Astro appends to
 * every element, so `<div class="mega-menu-group" data-astro-cid-...>` is
 * recognised as a group and not as a menu.
 */
function megaMenuGroups(html) {
  const blocks = html.split(/<div class="mega-menu(?:\s[^"]*)?"/);
  const menus = [];
  for (const block of blocks) {
    const groups = [];
    const parts = block.split(/<div class="mega-menu-group(?:\s[^"]*)?"/).slice(1);
    for (const part of parts) {
      const raw = (part.match(/mega-menu-group-label[^>]*>([^<]+)</) || [])[1];
      if (!raw) continue;
      const href = (part.match(/mega-menu-group-label[^>]*href="([^"]+)"/) || [])[1] || null;
      const childCount = (part.match(/mega-menu-sub-item/g) || []).length;
      const childHrefs = [...part.matchAll(/mega-menu-sub-item[^>]*href="([^"]+)"/g)].map((m) => m[1]);
      groups.push({ label: decodeEntities(raw), href, childCount, childHrefs });
    }
    if (groups.length) menus.push(groups);
  }
  return menus;
}

/**
 * Extract the string literals of an exported array or object.
 *
 * The body is bounded by matching brackets so that a neighbouring export in
 * the same module cannot contribute entries.
 */
function exportedEntries(source, exportName, idField) {
  const decl = `export const ${exportName}`;
  const start = source.indexOf(decl);
  if (start === -1) return null;
  const slice = source.slice(start + decl.length);

  const openMatch = slice.match(/=\s*([\[{])/);
  if (!openMatch) return null;

  const openChar = openMatch[1];
  const closeChar = openChar === '[' ? ']' : '}';
  const bodyStart = openMatch.index + openMatch[0].length - 1;

  let depth = 0;
  let quote = null;
  let previous = '';
  let body = '';

  for (const ch of slice.slice(bodyStart)) {
    body += ch;
    if (quote) {
      if (ch === quote && previous !== '\\') quote = null;
      previous = ch;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch;
      previous = ch;
      continue;
    }
    if (ch === openChar) depth++;
    else if (ch === closeChar) {
      depth--;
      if (depth === 0) break;
    }
    previous = ch;
  }

  const ids = [...body.matchAll(new RegExp(`${idField}:\\s*'([^']+)'`, 'g'))].map((m) => m[1]);
  return ids;
}

/* ------------------------------------------------------------------ */
/* handlers                                                            */
/* ------------------------------------------------------------------ */

export const handlers = {
  /** The route exists in the build. */
  routeExists(assertion, ctx) {
    const ok = ctx.pages.has(assertion.route);
    return {
      pass: ok,
      detail: ok ? 'route built' : `route missing from dist: ${assertion.route}`,
    };
  },

  /** The route carries complete, well formed metadata. */
  routeMeta(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };

    const problems = [];
    const title = meta(html, /<title>([^<]*)<\/title>/);
    const desc = meta(html, /<meta name="description" content="([^"]*)"/);
    const canonical = meta(html, /<link rel="canonical" href="([^"]*)"/);
    const ogImage = meta(html, /<meta property="og:image" content="([^"]*)"/);

    if (!title) problems.push('missing title');
    else if (title.length > 70) problems.push(`title ${title.length} chars (>70)`);

    if (!desc) problems.push('missing description');
    else if (desc.length < 70 || desc.length > 175) {
      problems.push(`description ${desc.length} chars (outside 70-175)`);
    }

    if (!canonical) problems.push('missing canonical');
    else if (!canonical.startsWith(ORIGIN)) problems.push(`canonical not on origin: ${canonical}`);

    if (!ogImage) problems.push('missing og:image');

    const ld = jsonLdOf(html);
    if (!ld) problems.push('missing or invalid JSON-LD');
    else {
      const types = (ld['@graph'] || []).map((n) => n['@type']);
      for (const required of ['Organization', 'WebSite', 'BreadcrumbList']) {
        if (!types.includes(required)) problems.push(`JSON-LD missing ${required}`);
      }
    }

    return {
      pass: problems.length === 0,
      detail: problems.length ? problems.join('; ') : 'metadata complete',
    };
  },

  /** The built page contains a marker string. */
  routeContains(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };
    const haystack = assertion.text ? textOf(html) : html;
    const needle = assertion.text ?? assertion.selector ?? '';
    const ok = haystack.includes(needle);
    return {
      pass: ok,
      detail: ok ? `found "${needle}"` : `not found "${needle}"`,
    };
  },

  /** The built page links to another route. */
  routeLinksTo(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };
    const ok = html.includes(`href="${assertion.href}"`);
    return {
      pass: ok,
      detail: ok ? `links to ${assertion.href}` : `no link to ${assertion.href}`,
    };
  },

  /** The main navigation carries the expected menu groups. */
  navGroups(assertion, ctx) {
    const menus = megaMenuGroups(ctx.pages.get('/') || '');
    const expected = assertion.groups || [];
    const match = menus.find((groups) => {
      if (groups.length !== expected.length) return false;
      return expected.every((e, i) => {
        const g = groups[i];
        if (g.label !== e.label) return false;
        if (typeof e.childCount === 'number' && g.childCount !== e.childCount) return false;
        if (Array.isArray(e.childHrefs) && !e.childHrefs.every((h) => g.childHrefs.includes(h))) {
          return false;
        }
        return true;
      });
    });
    const found = match ? match.map((g) => `${g.label} (${g.childCount})`).join(', ') : 'none';
    return {
      pass: Boolean(match),
      detail: match
        ? `menu "${assertion.menu}" → ${found}`
        : `no menu matched "${assertion.menu}" (found: ${found})`,
    };
  },

  /** A data module exports the expected number of entries. */
  dataEntries(assertion, ctx) {
    const file = path.join(ctx.root, assertion.module);
    if (!fs.existsSync(file)) return { pass: false, detail: `module missing: ${assertion.module}` };
    const source = fs.readFileSync(file, 'utf8');
    const ids = exportedEntries(source, assertion.export, assertion.idField || 'slug');
    if (!ids) {
      return { pass: false, detail: `export "${assertion.export}" not found in ${assertion.module}` };
    }
    const problems = [];
    if (typeof assertion.count === 'number' && ids.length !== assertion.count) {
      problems.push(`${ids.length} entries (expected ${assertion.count})`);
    }
    if (Array.isArray(assertion.slugs)) {
      const missing = assertion.slugs.filter((s) => !ids.includes(s));
      if (missing.length) problems.push(`missing slugs: ${missing.join(', ')}`);
    }
    return {
      pass: problems.length === 0,
      detail: problems.length ? problems.join('; ') : `${ids.length} entries`,
    };
  },

  /**
   * The built page carries semantic tables with enough rows to be usable
   * as a table result, and uses header cells rather than layout markup.
   */
  routeHasTable(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };

    const tables = html.match(/<table\b/gi) || [];
    if (!tables.length) {
      return { pass: false, detail: 'no <table> element found' };
    }

    const rows = (html.match(/<tr\b/gi) || []).length;
    const minRows = assertion.minRows ?? 1;
    if (rows < minRows) {
      return { pass: false, detail: `${rows} table rows (expected at least ${minRows})` };
    }

    const headers = (html.match(/<th\b/gi) || []).length;
    if (!headers) {
      return { pass: false, detail: 'tables carry no <th> header cells' };
    }

    return {
      pass: true,
      detail: `${tables.length} table(s), ${rows} rows, ${headers} header cells`,
    };
  },

  /** The JSON-LD graph carries the given schema.org node types. */
  routeJsonLdType(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };

    const ld = jsonLdOf(html);
    if (!ld) return { pass: false, detail: 'missing or invalid JSON-LD' };

    const types = new Set((ld['@graph'] || []).map((n) => n['@type']));
    const missing = (assertion.types || []).filter((t) => !types.has(t));
    if (missing.length) {
      return { pass: false, detail: `missing @type: ${missing.join(', ')}` };
    }

    return {
      pass: true,
      detail: `graph carries ${(assertion.types || []).join(', ')}`,
    };
  },

  /** A source file does NOT contain a marker string. */
  fileLacks(assertion, ctx) {
    const file = path.join(ctx.root, assertion.path);
    if (!fs.existsSync(file)) return { pass: false, detail: `file missing: ${assertion.path}` };
    const source = fs.readFileSync(file, 'utf8');
    const ok = !source.includes(assertion.text);
    return {
      pass: ok,
      detail: ok ? `does not contain "${assertion.text}"` : `still contains "${assertion.text}"`,
    };
  },

  /**
   * Every built page carries a marker string.
   *
   * Used for site-wide guarantees such as "every page is noindex during the
   * isolation period" — a per-route assertion would need 77 entries.
   */
  allRoutesContain(assertion, ctx) {
    const missing = [];
    for (const [route, html] of ctx.pages) {
      if (!html.includes(assertion.text)) missing.push(route);
    }
    return {
      pass: missing.length === 0,
      detail: missing.length
        ? `${missing.length}/${ctx.pages.size} pages lack "${assertion.text}" (e.g. ${missing.slice(0, 3).join(', ')})`
        : `all ${ctx.pages.size} pages carry "${assertion.text}"`,
    };
  },

  /**
   * The built page does NOT carry a marker string.
   *
   * The counterpart of `routeContains` — it encodes "this claim must be gone"
   * as a machine check instead of a review comment.
   */
  routeLacks(assertion, ctx) {
    const html = ctx.pages.get(assertion.route);
    if (!html) return { pass: false, detail: `route missing from dist: ${assertion.route}` };
    const haystack = assertion.text ? textOf(html) : html;
    const needle = assertion.text ?? assertion.selector ?? '';
    const ok = !haystack.includes(needle);
    return {
      pass: ok,
      detail: ok ? `does not contain "${needle}"` : `still contains "${needle}"`,
    };
  },

  /** A source file exists. */
  fileExists(assertion, ctx) {
    const file = path.join(ctx.root, assertion.path);
    const ok = fs.existsSync(file);
    return { pass: ok, detail: ok ? 'file present' : `file missing: ${assertion.path}` };
  },

  /** A source file contains a marker string. */
  fileContains(assertion, ctx) {
    const file = path.join(ctx.root, assertion.path);
    if (!fs.existsSync(file)) return { pass: false, detail: `file missing: ${assertion.path}` };
    const source = fs.readFileSync(file, 'utf8');
    const ok = source.includes(assertion.text);
    return {
      pass: ok,
      detail: ok ? `contains "${assertion.text}"` : `does not contain "${assertion.text}"`,
    };
  },

  /**
   * A tracked file changed by additions only.
   *
   * This encodes constraints such as "the landing page may only be extended,
   * never rewritten" as a machine check instead of a review comment.
   */
  fileDiffAdditive(assertion, ctx) {
    const rel = assertion.path.replace(/\\/g, '/');
    const res = spawnSync('git', ['diff', '--numstat', '--', rel], {
      cwd: ctx.root,
      encoding: 'utf8',
    });
    if (res.error) return { pass: false, detail: `git diff failed: ${res.error.message}` };

    const tracked = spawnSync('git', ['ls-files', '--error-unmatch', rel], {
      cwd: ctx.root,
      encoding: 'utf8',
    });
    if (tracked.status !== 0) {
      return { pass: true, detail: 'new file — additive by definition' };
    }

    const line = (res.stdout || '').trim().split('\n').filter(Boolean)[0];
    if (!line) return { pass: true, detail: 'unchanged — additive by definition' };

    const [added, deleted] = line.split(/\s+/);
    const addedCount = Number(added);
    const deletedCount = Number(deleted);
    return {
      pass: deletedCount === 0,
      detail:
        deletedCount === 0
          ? `${addedCount} insertions, 0 deletions`
          : `${addedCount} insertions, ${deletedCount} deletions — existing lines were removed`,
    };
  },

  /** A public asset exists. */
  imageExists(assertion, ctx) {
    const raw = assertion.path.replace(/\\/g, '/');
    const rel = raw.startsWith('public/')
      ? raw.slice('public/'.length)
      : raw.replace(/^\/+/, '');
    const file = path.join(ctx.root, 'public', rel);
    const ok = fs.existsSync(file);
    return { pass: ok, detail: ok ? 'asset present' : `asset missing: public/${rel}` };
  },

  /** A module exports a named binding. */
  dataExportExists(assertion, ctx) {
    const file = path.join(ctx.root, assertion.module);
    if (!fs.existsSync(file)) return { pass: false, detail: `module missing: ${assertion.module}` };
    const source = fs.readFileSync(file, 'utf8');
    const ok = source.includes(`export const ${assertion.export}`);
    return {
      pass: ok,
      detail: ok ? `exports ${assertion.export}` : `does not export ${assertion.export}`,
    };
  },

  /** The build produced at least a given number of pages. */
  pageCount(assertion, ctx) {
    const count = ctx.pages.size;
    const min = assertion.min ?? 0;
    return {
      pass: count >= min,
      detail: `${count} pages built (minimum ${min})`,
    };
  },
};

export const knownTypes = Object.keys(handlers);
