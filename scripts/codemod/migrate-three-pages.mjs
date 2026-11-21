/**
 * Migrate titanium-baskets / titanium-plate / titanium-tubing into the shared
 * product skeleton: the page data moves to `src/data/product-pages/<slug>.ts`
 * and the page becomes a thin shell around `ProductPage`.
 *
 * The per-page section wording and the page-specific blocks are declared here
 * so the shared component only has to render them.
 */
import fs from 'node:fs';

const OUT_DIR = 'src/data/product-pages';
const PAGE_DIR = 'src/pages/titanium-products';

const unquote = (json) =>
  json.replace(/^(\s*)"([A-Za-z_$][\w$]*)":/gm, '$1$2:');

const ts = (value) => unquote(JSON.stringify(value, null, 2));

const PAGES = {
  'titanium-baskets': {
    cta: {
      primary: { href: '#forms-section', label: 'Review Basket Types' },
      secondary: { href: '#tp-rfq', label: 'Request a Quote' },
    },
    catalogSections: [
      {
        id: 'forms-section',
        tone: 'plain',
        eyebrow: 'Grade Reference',
        heading: '{M} Grades & Forms',
        lede: '{M} grades and product forms reviewed against ASTM / ASME / project specifications.',
        kind: 'grades',
        itemsKey: 'grades',
      },
    ],
    extras: [
      {
        kind: 'boundary',
        tone: 'blue-bg',
        eyebrow: 'Product Boundary',
        heading: 'A Titanium Anode Basket Is Not A Titanium Anode',
        lede: 'The basket is a containment and contact component. A titanium mesh or perforated vessel holds soluble anode material such as nickel or copper balls, keeps it in contact with the bath and carries the current into the solution. It carries no mixed metal oxide coating and it does not generate the anodic reaction itself, so it belongs to the fabricated titanium component range rather than to the coated anode family.',
        links: [
          { href: '/titanium-anode/', label: 'Review titanium anodes', primary: true },
          { href: '/titanium-anode/mmo-anode/', label: 'Review MMO titanium anodes →' },
        ],
      },
    ],
  },

  'titanium-plate': {
    cta: {
      primary: { href: '#tp-rfq', label: 'Send Titanium Plate &amp; Sheet Inquiry' },
      secondary: { href: '/titanium-products/', label: 'All Products' },
    },
    hero: { id: 'plate-hero' },
    catalogSections: [
      {
        tone: 'plain',
        eyebrow: 'Grade Reference',
        heading: '{M} Grades',
        lede: '{M} grades reviewed against ASTM / ASME / project specifications.',
        kind: 'grades',
        itemsKey: 'grades',
      },
      {
        tone: 'alt',
        eyebrow: 'Product Form',
        heading: 'Specify the Exact Form, Not Only “Titanium Plate”',
        lede: 'Product forms, dimensions and acceptance criteria relevant to the titanium plate & sheet order basis.',
        kind: 'forms-links',
        itemsKey: 'forms',
        linkText: 'View {title} →',
      },
    ],
    extras: [
      {
        kind: 'cutPrep',
        tone: 'plain',
        eyebrow: 'Processing Options',
        heading: 'Cutting and Preparation Matched to the Next Process',
        lede: 'Cutting, surface preparation and machining-ready blanks can be reviewed according to grade, thickness, geometry, allowance, edge condition, tolerance and quantity.',
        itemsKey: 'cuttingPrepList',
        note: '<strong>Before Requesting a Quote:</strong> identify critical dimensions and the downstream machining or fabrication route. The cutting method and achievable tolerance remain order-specific.',
        imgKey: 'cuttingPrepImg',
        alt: 'Titanium plate and sheet cutting and preparation',
      },
    ],
    copy: {
      process: {
        lede: 'Plate and sheet are hot and cold rolled in our own facility. Cutting, surface preparation, inspection scope and documentation are confirmed by quotation against the approved order basis.',
      },
      mfg: {
        lede: 'Plate and sheet rolling, cutting, surface preparation and inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation.',
      },
      applications: { eyebrow: 'Industry Context' },
      rfq: {
        checks: [
          'Grade and specification review',
          'Plate, sheet or cut-blank scope',
          'Processing and inspection requirements',
          'Quotation-specific availability and delivery basis',
        ],
        submitLabel: 'Send Plate & Sheet Inquiry',
        variant: 'titanium-plate',
      },
    },
  },

  'titanium-tubing': {
    cta: {
      primary: { href: '#forms-section', label: 'Choose Tube or Pipe' },
      secondary: { href: '#tp-rfq', label: 'Request a Quote' },
    },
    catalogSections: [
      {
        id: 'forms-section',
        tone: 'plain',
        eyebrow: 'Tube &amp; Pipe Range',
        heading: 'Separate the Product Routes Before Quotation',
        lede: 'B338 tube, B861 seamless pipe and B862 welded pipe are not interchangeable labels. Custom and fabricated products also require a defined drawing and responsibility boundary.',
        kind: 'forms-cards',
        itemsKey: 'forms',
        specLabel: 'Specify:',
        note: 'Grade, dimensions, condition and availability: confirmed by quotation.',
      },
    ],
    extras: [
      {
        kind: 'specTable',
        tone: 'alt',
        eyebrow: 'Specification Mapping',
        heading: 'Match the Standard to the Ordered Product',
        caption: 'Tubing specification mapping: product route, typical order dimensions, the specification applied when required and the scope boundary',
        columns: [
          'Product route',
          'Typical order dimensions',
          'Specification when required',
          'Scope boundary',
        ],
        rowsKey: 'specMapping',
        footnote: 'Not every grade is included or available in every product form, size, condition or specification. Confirm the exact combination in the quotation.',
      },
      {
        kind: 'engineeringInputs',
        tone: 'plain',
        eyebrow: 'Engineering Inputs',
        heading: 'Pressure and Corrosion Claims Need a Defined Basis',
        lede: 'A material grade or successful product test does not create a system pressure rating. The responsible designer must apply the governing code using actual dimensions, material properties at design temperature, joint factors, allowances, service conditions and system configuration.',
        itemsKey: 'engineeringInputs',
      },
    ],
    copy: {
      orderBasis: { heading: 'Start with Product Form, Standard and Design Basis' },
      process: {
        heading: 'Coordinate the Order from Definition to Release',
        lede: 'Seamless and welded tube and pipe are produced in our own factory. Sizing, fabrication, the inspection route and the document package are confirmed for each order.',
      },
      mfg: {
        lede: 'Seamless extrusion, TIG welding, sizing and inspection are carried out in our own factory. The inspection scope and documentation for a specific order are agreed in the quotation.',
      },
      applications: {
        heading: 'Match the Product Route to the Service and System',
        lede: 'Industry labels are starting points. Final selection depends on service data, product specification, design code, fabrication and acceptance responsibilities.',
      },
      evidence: {
        heading: 'Specify Tests and Records Before Quotation',
        lede: 'Hydrostatic, pneumatic, eddy-current, ultrasonic, penetrant or other testing must be tied to the applicable specification, product route, acceptance criteria, sampling and order scope. Do not assume every method is required or included.',
      },
      controls: {
        lede: 'Use this short check before comparing quotations. The complete guide covers standard selection, pressure-design boundaries, supplier evidence and commercial risk.',
      },
      faq: { eyebrow: 'Frequently Asked Questions' },
      rfq: {
        eyebrow: 'Titanium Tube &amp; Pipe Inquiry',
        lede: 'Share the available product form, grade, specification, dimensions, quantity, service, testing and document requirements. A drawing is optional for the first enquiry and recommended for shaped or fabricated products.',
        checks: [
          'B338, B861 or B862 route review',
          'Grade, dimensions and condition review',
          'Testing and documentation checklist',
          'Quotation-specific availability and delivery basis',
        ],
        formTitle: 'Titanium Tube &amp; Pipe Inquiry',
        submitLabel: 'Send Tube &amp; Pipe Inquiry',
        variant: 'titanium-tubing',
      },
    },
    controlsLink: {
      href: '/knowledge-center/',
      label: 'Read the Complete Purchase Guide',
    },
    applicationsLinkText: 'Review the application context →',
  },
};

for (const [slug, cfg] of Object.entries(PAGES)) {
  const raw = JSON.parse(fs.readFileSync(`tmp/raw-${slug}.json`, 'utf8'));

  const rawOut = {};
  for (const [key, value] of Object.entries(raw)) {
    if (key === 'slug') continue;
    rawOut[key] = value;
  }
  rawOut.slug = slug;
  if (cfg.hero) rawOut.hero = { ...rawOut.hero, ...cfg.hero };
  rawOut.cta = cfg.cta;
  if (cfg.copy) rawOut.copy = cfg.copy;
  if (cfg.controlsLink) rawOut.controlsLink = cfg.controlsLink;
  if (cfg.applicationsLinkText) rawOut.applicationsLinkText = cfg.applicationsLinkText;

  const catalogSections = cfg.catalogSections.map((s) => {
    const { itemsKey, ...rest } = s;
    return { ...rest, items: raw[itemsKey] };
  });
  const extras = cfg.extras.map((e) => {
    const out = { ...e };
    if (e.itemsKey) {
      out.items = raw[e.itemsKey];
      delete out.itemsKey;
    }
    if (e.rowsKey) {
      out.rows = raw[e.rowsKey].map((r) => [r.route, r.dimensions, r.spec, r.scope]);
      delete out.rowsKey;
    }
    if (e.imgKey) {
      out.img = raw[e.imgKey];
      delete out.imgKey;
    }
    return out;
  });

  const body = [
    "import { buildStandardPage } from './standard';",
    "import type { StandardRaw } from './standard';",
    '',
    '/** Data of the ' + slug + ' product detail page. */',
    'const raw: StandardRaw = ' + ts(rawOut) + ';',
    '',
    'raw.catalogSections = ' + ts(catalogSections) + ';',
    'raw.extras = ' + ts(extras) + ';',
    '',
    'export const page = buildStandardPage(raw);',
    '',
  ].join('\n');

  fs.writeFileSync(`${OUT_DIR}/${slug}.ts`, body);

  const shell = [
    '---',
    "import ProductPage from '../../components/product/ProductPage.astro';",
    `import { page } from '../../data/product-pages/${slug}';`,
    '---',
    '',
    '<ProductPage {...page} />',
    '',
  ].join('\n');
  fs.writeFileSync(`${PAGE_DIR}/${slug}.astro`, shell);
  console.log('wrote', slug);
}

