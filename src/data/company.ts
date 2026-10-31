/**
 * Backwards-compatible alias for `site.ts`.
 *
 * Kept so existing imports of `@data/company` keep working while the
 * canonical configuration lives in a single module.
 */
export { site as company, site, copyright, type Site } from './site';
