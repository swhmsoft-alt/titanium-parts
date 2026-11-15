# MMO family — section band map

Every MMO anode page mirrors a reference page that alternates background
bands. The band belongs to the page data (`tone` in
`tmp/ref/family-model.json`), never to a template, and the renderer
(`src/components/mmo/MmoProductPage.astro`) turns the tone into a band class:

| tone | band class | colour | reference background |
| --- | --- | --- | --- |
| `plain` | — | page surface | `bg-white` or no background |
| `alt` | `.mmo-band-alt` | `--color-slate-50` | `bg-gray-50`, `bg-slate-50` |
| `navy` | `.mmo-band-navy` | `--color-primary-950` | `bg-[#003366]`, `bg-blue-950` |
| `dark` | `.mmo-band-dark` | `--color-slate-950` | `bg-slate-900`, `bg-slate-950` |

A band class that no data can produce is a band that silently disappears.
`navy` existed in `src/styles/mmo-product.css` from the start while the tone
model could not express it, so every family page rendered on one flat white
surface. That is the defect this map exists to prevent.

## Where the data comes from

`tmp/ref/family-model.json` is the source of the family pages and
`tmp/gen-data.mjs` writes `src/data/mmo-family-pages.ts` from it. The model
was written by hand and had lost three facts that only the reference page
carries — the band of every section, the eyebrow label above the section
heading and the FAQ answers — which is why the pages had no bands and empty
FAQ panels.

`scripts/mmo/sync-family-model.mjs` reads the saved reference pages in
`tmp/ref/<slug>.html` and writes those three facts back into the model:

```
node scripts/mmo/sync-family-model.mjs   # model  <- tmp/ref/<slug>.html
node tmp/gen-data.mjs                    # data file <- model
npm run build
```

`scripts/qa/check-family-bands.mjs` checks the built pages in `dist/` for the
band of every section, a rendered eyebrow, FAQ answers that are not empty and
a table treatment that matches its band.

## Band sequence per page

Read off the saved reference pages. `rfq` is always the near black band and
is rendered by the shared component.

### mmo-wire-anode

definition alt · geometry plain · technical-data alt · output plain ·
**custom-engineering navy** · applications plain · quality-evidence alt ·
comparison plain · before-quote-boundary plain · faq alt ·
**manufacturing-quality navy**

### mmo-ribbon-anode

definition alt · technical-data plain · grid-system alt ·
**custom-engineering dark** · connections plain · comparison alt ·
before-quote-boundary plain · faq alt · **manufacturing-quality navy**

### mmo-mesh-ribbon-anode

definition alt · mesh-geometry plain · output alt · design-inputs plain ·
**custom-engineering dark** · installation plain · quality-evidence alt ·
comparison plain · before-quote-boundary plain · faq alt ·
**manufacturing-quality navy**

### mmo-canister-anode

definition alt · models plain · applications alt · assembly plain ·
**custom-engineering dark** · connections alt · installation plain ·
comparison alt · faq plain · **manufacturing-quality navy**

### mmo-tubular-anode

configurations alt · technical-specifications plain · output alt ·
active-area plain · connections alt · applications alt ·
**custom-engineering dark** · quality-evidence alt · comparison plain ·
faq alt · **manufacturing-quality navy**

### mmo-disc-anode

configurations alt · technical-specifications plain · output alt ·
mounting plain · connections alt · applications plain ·
**custom-engineering navy** · quality-evidence alt · comparison plain ·
faq alt · **manufacturing-quality navy**

### mmo-rod-anode

configurations alt · technical-specifications plain · output alt ·
connections plain · applications alt · **custom-engineering navy** ·
comparison alt · faq alt

## Table treatment

The reference pages use **light tables everywhere** — every reference table
sits on a white or tinted band and carries dark text.

`mmo-table-dark` has no background on its body cells, so it only reads on a
navy or near black band. The renderer therefore derives the table treatment
from the band: a table is dark only inside a dark band, never on a light one.
`dark: true` in the page data can still force a dark table inside a dark
band, but it can no longer produce unreadable text on a light band.

Two more table details are covered by the renderer and by the model:

- a table with four columns or fewer gets `.mmo-table-narrow`, the 540px
  minimum width the reference pages use;
- the header row comes from `header` and the body rows from `rows` — a header
  must not be repeated as the first body row. The model had that duplicate
  on several pages; the sync script removes it.
