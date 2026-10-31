# Titanium Parts

Static marketing site for a titanium products manufacturer and engineering
supplier, built with Astro.

## Tech Stack

- **Astro 5.x** (SSG, static output)
- **TypeScript** strict
- **Native CSS** with CSS variables
- **Sharp** for image processing at build time
- **@astrojs/sitemap** for the generated sitemap

## Commands

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build
npm run preview    # serve the production build

npm run qa         # build + run every acceptance check
npm run qa:audit   # content and legal checks
npm run qa:seo     # titles, descriptions, canonicals, structured data
npm run qa:links   # internal link check
```

## Project Structure

```
src/
├── components/   Reusable .astro components
├── data/         Content and configuration (single source of truth)
├── layouts/      Page layouts
├── pages/        Routes
└── styles/       Global CSS

public/
├── images/       Site imagery
└── favicon.svg, robots.txt

scripts/
├── media/        Image pipeline and content tooling
├── qa/           Acceptance checks
└── brand/        Brand asset generation
```

## Content Model

All site configuration lives in `src/data/`, one concern per file:

| File | Purpose |
|---|---|
| `site.ts` | Brand, contact details, addresses, SEO defaults |
| `navigation.ts` | Main menu, filtered against the built routes |
| `page-meta.ts` | Titles and descriptions for the non-product routes |
| `product-meta.ts` | Titles and descriptions for product routes |
| `industries-data.ts` | Industry sectors and their detail pages |
| `anode-coatings.ts` | Anode coating families |
| `service-steps.ts` | Fabrication and processing services |
| `team-data.ts` | Team roles |
| `faqs-data.ts` | FAQ entries |
| `routes.json` | Generated route list used to filter the menu |

Editing a value in these files changes it everywhere. Nothing about the
brand, contact details or navigation should be hard-coded in a template.

### Adding a page

1. Create the page under `src/pages/`.
2. Give it a unique `title` and `description` in `src/data/page-meta.ts`
   or `src/data/product-meta.ts`.
3. Run `npm run build` — this regenerates `src/data/routes.json`, which
   keeps the menu free of links to pages that do not exist.

## Image Pipeline

Images ship from `public/`. A build-time integration measures each one and
writes its real width and height into the markup, so the browser can reserve
space and the page does not shift while loading.

To replace the imagery:

1. Collect the new photographs.
2. Put them in `assets-incoming/` following the layout in
   `scripts/media/media-map.json`.
3. Update the matching entries in `scripts/media/media-map.json`
   (`file` = path under `assets-incoming/`, `alt` = description).
4. Run `npm run media:replace`. Assets are converted to WebP, capped at
   1600px, stripped of all metadata, and every reference in `src/` is
   rewritten. The build output is unaffected for slots that have not been
   delivered yet.

`npm run media:scan` regenerates the manifest skeleton without discarding
values already filled in. `npm run media:order` writes the shooting work
order to `docs/photo-work-order.csv`.

## Acceptance Checks

`npm run qa` runs everything below and exits non-zero on failure:

- no references to third-party asset hosts
- every referenced image exists; no orphan files
- every image has an alt attribute
- no third-party trademarks presented as clients
- no inherited staff photography
- every internal link resolves
- unique title and description on every page, within search-result limits
- canonical URLs absolute on the production origin
- valid JSON-LD (Organization, WebSite, BreadcrumbList, Product) on every page
- no third-party references in the built output
