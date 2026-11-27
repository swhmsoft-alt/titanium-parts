/**
 * Per-product data for /titanium-products/titanium-rod-bar/.
 *
 * The wording lives here; `buildStandardPage` supplies the shared shell.
 * `catalogSections` replaces the shared grades-and-forms block with the
 * bar-and-rod specific one, and `extras` adds the dimension mapping table
 * the page can be quoted from.
 */
import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

const raw: StandardRaw = {
  M: 'Titanium Bar & Rod',
  slug: 'titanium-rod-bar',
  hero: {
    eyebrow: 'ASTM B348 Titanium Bar & Rod',
    title: 'Titanium Bar & Rod Manufacturer for Precision Machining',
    desc: 'Source round bar, rod, precision-ground stock and custom profiles with material, dimensions, tolerance, finish, processing and inspection reviewed against your order requirements.',
    img: '/images/titanium-products/precision-titanium-rods-bars-manufacturer.webp',
    tags: ['Round \u00b7 Ground \u00b7 Hollow \u00b7 Custom', 'Grades 2 \u00b7 5 \u00b7 7 \u00b7 23', 'Order-Specific MTC & Inspection'],
  },
  cta: {
    primary: { href: '#forms-section', label: 'Review Grades & Profiles' },
    secondary: { href: '#tp-rfq', label: 'Request a Quote' },
  },
  orderBasis: [
    {
      title: 'Material',
      body: 'Grade, UNS designation, the governing specification and its revision, the condition of the material (annealed, cold worked, stress relieved) and any supplementary requirements such as cleanliness or a specified grain structure.',
    },
    {
      title: 'Profile & Size',
      body: 'Round diameter, hex across flats, square or rectangular section, or hollow OD with wall or ID, together with the supplied length, the quantity and the machining allowance left per side for the downstream process.',
    },
    {
      title: 'Tolerance & Geometry',
      body: 'Diameter or section tolerance class, straightness, roundness, squareness, surface finish and end condition (sheared, squared, chamfered, or prepared for threading). These are the characteristics that decide whether the bar can enter your machining route.',
    },
    {
      title: 'Evidence',
      body: 'EN 10204 3.1 or 3.2 certification, heat or lot traceability, the dimensional report, any testing or NDT scope, marking, packing and the release documents the receiving inspection needs.',
    },
  ],  grades: [
    {
      img: '/images/titanium-products/titanium-grade-2-round-bar.webp',
      alt: 'Grade 2 titanium bar and rod',
      title: 'Grade 2 Titanium',
      spec: 'ASTM B348 / B348M when specified \u00b7 UNS R50400',
      body: 'Commercially pure titanium. Chosen for corrosion service rather than for strength. Availability, source form and the delivered condition are confirmed for the specific diameter or section, and the grade name alone does not fix the tolerance class.',
    },
    {
      img: '/images/titanium-products/grade-5-ti-6al-4v-rod.webp',
      alt: 'Grade 5 / Ti-6Al-4V bar and rod',
      title: 'Grade 5 / Ti-6Al-4V',
      spec: 'ASTM B348 or AMS 4928 as ordered \u00b7 UNS R56400',
      body: 'The general engineering alloy. Reviewed against the machined part it has to feed: the alloy drives the stock removal rate, the springback in cutting and the reaction to a specified heat treatment. General Grade 5 supply is not an aerospace qualification.',
    },
    {
      img: '/images/titanium-products/grade-7-ti-pd-alloy-rod.webp',
      alt: 'Grade 7 titanium bar and rod',
      title: 'Grade 7 Titanium',
      spec: 'ASTM B348 / B348M when specified \u00b7 UNS R52400',
      body: 'A palladium-stabilised alloy reviewed for acid and chloride service where general Grade 2 corrosion behaviour is insufficient. The source route, the condition and the size range are confirmed for the specific enquiry.',
    },
    {
      img: '/images/titanium-products/medical-grade-23-eli-rod.webp',
      alt: 'Grade 23 / Ti-6Al-4V ELI bar and rod',
      title: 'Grade 23 / Ti-6Al-4V ELI',
      spec: 'ASTM B348 / B348M when specified \u00b7 UNS R56407',
      body: 'The extra-low-interstitial variant of Grade 5. Material identity and traceability are separated from the finished-device validation and the regulatory responsibility, which stays with the device manufacturer.',
    },
  ],
  forms: [
    {
      title: 'Titanium Round Bar & Rod',
      body: 'State the diameter, the length and the tolerance class you intend to machine from. Round bar is the default route for turned parts, and the delivered diameter tolerance decides whether the blank can be taken straight to finish turning or has to be re-machined first.',
    },
    {
      title: 'Titanium Precision-Ground Bar',
      body: 'A finished diameter with a stated tolerance, a gauge length and a straightness requirement. Ground bar removes the sizing risk from your own process, and the achievable result depends on the grade, the starting diameter, the finished size, the length and the quantity.',
    },
    {
      title: 'Titanium Hollow Bar',
      body: 'Define the OD, the wall or the ID, the length and the concentricity you need. Hollow bar may be supplied from a standard source form or through a drawing-based route; which one applies is stated in the quotation rather than assumed.',
    },
    {
      title: 'Titanium Square, Rectangular & Hex Bar',
      body: 'Give the width, the height or the across-flats dimension, the corner condition, the length and the squareness or straightness class. Non-round sections usually need a drawing, and the stock route is agreed against that drawing.',
    },
    {
      title: 'Cut Blanks & Drawing-Based Sections',
      body: 'Bars cut to length, cut to blanks or machined to a customer drawing. The drawing defines the geometry, the allowance left for the customer process, the material, the condition and the inspection plan the order is accepted against.',
    },
  ],  processSteps: [
    {
      img: '/images/titanium-products/titanium-round-bar-rod.webp',
      alt: 'Round bar review',
      title: 'Specification Review',
      spec: 'Grade, standard, revision, condition, section and length are read back from the order.',
      body: 'The order basis is confirmed before any stock is committed: the governing standard, the grade, the profile, the tolerance class and the evidence package are written down so that the quotation and the certificate refer to the same thing.',
    },
    {
      img: '/images/titanium-products/precision-ground-titanium-bar.webp',
      alt: 'Stock preparation',
      title: 'Stock & Route Confirmation',
      spec: 'Source form, condition and production route are confirmed for the specific size.',
      body: 'The route is agreed before the order is placed: a standard source size, a ground size, a cut blank or a drawing-based section. The route decides which tolerances are achievable and which remain subject to the machining allowance.',
    },
    {
      img: '/images/titanium-products/titanium-hollow-bar.webp',
      alt: 'Cutting and preparation',
      title: 'Cutting & Preparation',
      spec: 'Length, end condition and preparation for the downstream process are agreed.',
      body: 'Bars are cut and prepared to the agreed length and end condition, with the allowance the customer process needs left in place. Sheared, squared, chamfered and threaded ends are different orders and are treated as such.',
    },
    {
      img: '/images/titanium-products/titanium-square-rectangular-bar.webp',
      alt: 'Dimensional and surface control',
      title: 'Dimensional & Surface Control',
      spec: 'Diameter, straightness, roundness and surface are controlled to the stated class.',
      body: 'The geometry is checked against the tolerance class and the surface against the stated finish. Where a ground bar was ordered, the finished diameter, the roundness and the straightness are the controlled characteristics rather than the starting size.',
    },
    {
      img: '/images/titanium-products/titanium-hex-bar-1.webp',
      alt: 'Marking, packing and release',
      title: 'Marking, Packing & Release',
      spec: 'Marking, certification, packing and release documents follow the agreed scope.',
      body: 'The material is marked for traceability, packed to protect the finished geometry and released with the documents that were agreed: the certificate, the dimensional report and any test or inspection record included in the order scope.',
    },
  ],
  mfgVideo: {
    poster: '/images/titanium-products/titanium-plates-sheets-manufacturer.webp',
    src: '/images/titanium-products/titanium-products-manufacturer.mp4',
  },
  applications: [
    {
      img: '/images/titanium-products/forged-custom-titanium-bar.webp',
      alt: 'Titanium bar machined into a precision component',
      title: 'CNC Machining & Precision Parts',
      spec: 'Control diameter or section, straightness, allowance, surface and material condition against the actual machining route.',
      body: 'Most titanium bar is bought to be machined. The stock is chosen for what happens on the machine: how much has to come off, how the alloy reacts to the cutting speed, and whether the delivered tolerance leaves enough material for the finished feature.',
    },
    {
      img: '/images/titanium-products/cnc-machining-precision-components.webp',
      alt: 'Forged and custom titanium blank',
      title: 'Forged & Custom Blanks',
      spec: 'Provide the approved drawing, material, condition, section, allowance, testing and acceptance plan.',
      body: 'A forged or machined blank is not bar in a different length. It carries a drawing, a defined allowance, a heat-treatment condition and an acceptance plan, and it is quoted against those rather than against a general size range.',
    },
    {
      img: '/images/titanium-products/chemical-processing01.webp',
      alt: 'Chemical and marine equipment made from titanium bar',
      title: 'Chemical & Marine Equipment',
      spec: 'Define media, concentration, contaminants, temperature, loading, joining and crevice conditions before grade selection.',
      body: 'Corrosion service is decided by the environment, not by the alloy name. The media, the concentration, the contaminants and the crevice geometry have to be defined before the grade is chosen, because the same grade behaves differently in a bulk liquid and in a stagnant crevice.',
    },
    {
      img: '/images/titanium-products/aerospace-high-performance-engineering04.webp',
      alt: 'Aerospace component machined from titanium bar',
      title: 'Aerospace & High-Performance',
      spec: 'Confirm approved specification, revision, condition, source and qualification responsibilities; general Grade 5 supply is not aerospace approval.',
      body: 'Aerospace work is a documentation question before it is a material question. The approved specification, the revision, the source and the qualification responsibilities have to be confirmed; a general Grade 5 bar with a certificate is not an aerospace approval.',
    },
  ],  evidence: [
    {
      title: 'Material Identity',
      body: 'Grade, heat or lot, product form, condition and the certificate that links them. The identity is taken from the certificate and the marking together, because a grade name on a document without a traceable lot does not identify the bar in your goods-in area.',
    },
    {
      title: 'Dimensional Evidence',
      body: 'Diameter, section, length, tolerance class, straightness, roundness and surface, measured on the delivered material and reported against the stated requirement. For a ground bar the reported values are the finished values, not the values of the stock it was made from.',
    },
    {
      title: 'Testing & NDT',
      body: 'Only the methods and criteria required by the agreed specification or order: ultrasonic, eddy-current, dye penetrant, hardness or mechanical testing where the specification calls for them. A test that nobody specified does not protect the order.',
    },
    {
      title: 'Document Release',
      body: 'EN 10204 3.1 or 3.2 certification, the dimensional report, marking, packing and release documents, delivered in the agreed format and index so that the receiving inspection can file them against the heat.',
    },
  ],
  controls: [
    {
      title: 'Material Identity',
      body: 'Grade, UNS designation, the governing specification with its revision, the condition and the heat or lot basis. If any of these is missing from the quotation, the price comparison is being made on an incomplete basis.',
    },
    {
      title: 'Geometry & Processing',
      body: 'Section, size, tolerance class, straightness, surface, the machining allowance and the condition of the ends. These are the points where a bar that is nominally correct still fails to enter the machining route.',
    },
    {
      title: 'Evidence Scope',
      body: 'Which certificates, which measurements, which tests and which inspection involvement are inside the order. The scope is stated before the order is placed, because it is much harder to add afterwards.',
    },
    {
      title: 'Delivery Basis',
      body: 'Length, quantity, packaging, marking and the release timing, so that the material arrives in a state the receiving inspection and the production schedule can both work with.',
    },
  ],
  faq: [
    {
      q: 'What information is needed for a titanium bar or rod quotation?',
      a: 'Provide the grade, governing specification and revision, condition, profile, diameter or section, length, quantity, surface, processing, inspection, testing and document requirements. A drawing is helpful for non-round or drawing-based blanks.',
    },
    {
      q: 'What is the difference between titanium rod and titanium bar?',
      a: 'The terms describe different production routes and dimensional practice. In general, rod covers smaller round cross-sections and bar covers larger rounds, squares, hex and rectangular sections. State the profile, dimensions and applicable specification.',
    },
    {
      q: 'Which grades can be reviewed for titanium bar and rod?',
      a: 'Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, size and applicable specification are confirmed for the specific quotation.',
    },
    {
      q: 'Can precision-ground titanium bar be supplied?',
      a: 'Ground bar can be reviewed where diameter tolerance, straightness, roundness and surface requirements are defined. Achievable results depend on grade, starting diameter, finished size, length, quantity and process route.',
    },
    {
      q: 'Can hollow, square, rectangular or hex titanium bar be supplied?',
      a: 'Non-round and hollow profiles can be reviewed from the required section, grade, condition, length, tolerance, machining allowance and quantity. Supply may use a standard source form or a drawing-based route, as stated in the quotation.',
    },
    {
      q: 'Are MTC, NDT and third-party inspection included automatically?',
      a: 'No. Required certificates, traceability, dimensional records, testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope.',
    },
    {
      q: 'What tolerance class can be delivered on round titanium bar?',
      a: 'The tolerance class depends on the grade, the diameter, the condition and the production route, and it is stated against the standard applied to the order. Ask for the tolerance class in the enquiry; a diameter without a tolerance class is not a specification.',
    },
    {
      q: 'How much machining allowance should be left on the bar?',
      a: 'The allowance is a decision of your process, not of the supplier. It has to cover the tolerance of the delivered bar plus your own machining distortion, and it is agreed per part because the same bar may feed a turned part and a milled part with different requirements.',
    },
  ],
  copy: {
    orderBasis: {
      eyebrow: 'Order Basis',
      heading: 'Freeze the Order Basis Before Comparing Price',
      lede: 'A titanium bar quotation is only comparable when the material, the geometry, the tolerance class and the evidence package are identical. These four items are what the price is actually made of.',
    },
    catalog: {
      eyebrow: 'Grades & Supply Review',
      heading: 'Grades and Forms Reviewed Against Your Order Basis',
      lede: 'The grade decides the material behaviour and the form decides the machining route. Both are reviewed against the same order basis, so a form that cannot be produced in a grade is ruled out before a price is discussed.',
    },
    process: {
      eyebrow: 'Order Route',
      heading: 'Coordinate the Order From Specification to Release',
      lede: 'Each step closes one part of the order basis. The stock route, the preparation, the dimensional control and the release documents are agreed for titanium bar and rod in the quotation.',
    },
    mfg: {
      eyebrow: 'Production Environment',
      heading: 'How the Titanium Bar and Rod Order Is Produced and Released',
      lede: 'The production and inspection scope for a titanium bar and rod order is agreed in the quotation: the stock route, the preparation, the dimensional control and the documents released with the material. The wording of this page does not describe a facility; it describes the scope that has to be written down before an order is placed.',
    },
    applications: {
      eyebrow: 'Application Context',
      heading: 'Match the Bar to the Part It Has to Become',
      lede: 'The stock is chosen for the part it feeds. Each context below sets out the qualification conversation that normally has to happen before the first quotation.',
    },
    evidence: {
      eyebrow: 'Supply Scope & Qualification',
      heading: 'Specify the Evidence Needed for Acceptance',
      lede: 'A certificate name alone does not define the complete acceptance package. For bar and rod, the material identity, the dimensional report, the test scope and the release documents are stated separately so that nothing is assumed to be included.',
    },
    controls: {
      eyebrow: 'Before You Order',
      heading: 'Confirm Four Controls Before You Buy',
      lede: 'Four checks that catch most order-basis errors before they become commercial or quality problems on a bar order.',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
    },
    rfq: {
      eyebrow: 'Titanium Bar & Rod Inquiry',
      lede: 'Share the available grade, specification and revision, profile, dimensions, tolerance class, quantity, processing and evidence requirements. A drawing is helpful for non-round or drawing-based sections and is optional for the first enquiry.',
      checks: [
        'Grade, specification and revision review',
        'Profile, dimensions and tolerance class review',
        'Processing, testing and documentation checklist',
        'Quotation-specific availability and delivery basis',
      ],
      formTitle: 'Titanium Bar & Rod Inquiry',
      submitLabel: 'Send Bar & Rod Inquiry',
      variant: 'titanium-rod-bar',
    },
  },
  controlsLink: {
    href: '/knowledge-center/',
    label: 'Read the Complete Purchase Guide',
  },
  applicationsLinkText: 'Review the application context \u2192',
};
raw.catalogSections = [
  {
    id: 'grades-section',
    tone: 'plain',
    eyebrow: 'Grade Reference',
    heading: 'Grades Available for Bar and Rod Supply',
    lede: 'The four grades below cover most titanium bar and rod enquiries. Each is reviewed against the order basis: the profile, the tolerance class, the condition and the evidence package are confirmed for the specific quotation.',
    kind: 'grades',
    items: raw.grades,
  },
  {
    id: 'forms-section',
    tone: 'alt',
    eyebrow: 'Form & Route',
    heading: 'Choose the Form Before the Size',
    lede: 'Rod, precision-ground bar, hollow bar and the non-round sections are different production routes with different tolerance capabilities. State the form, the controlling dimension and the machining allowance, and the route follows from that.',
    kind: 'forms',
    items: raw.forms,
  },
];

raw.extras = [
  {
    kind: 'specTable',
    tone: 'plain',
    eyebrow: 'Dimension Mapping',
    heading: 'Match the Form to the Controlling Dimension',
    caption: 'Titanium bar and rod dimension mapping: the form, the controlling dimension, the tolerance basis, the section specification and the scope boundary of each route',
    columns: ['Product form', 'Controlling dimension', 'Tolerance basis', 'Section specification', 'Scope boundary'],
    footnote: 'Every combination of grade, form, size, condition and specification has to be confirmed for the specific quotation. Availability in one size does not imply availability in the next, and a tolerance class always belongs to a stated size range.',
    rows: [
      [
        'Round bar and rod',
        'Diameter and length',
        'Diameter tolerance class plus straightness and roundness',
        'ASTM B348 / B348M',
        'The diameter without a tolerance class is not a specification; state the class.',
      ],
      [
        'Precision-ground bar',
        'Finished diameter and gauge length',
        'Finished diameter tolerance, roundness and straightness',
        'ASTM B348 / B348M, AMS 4928 as ordered',
        'Achievable tolerance depends on grade, starting size, finished size, length and quantity.',
      ],
      [
        'Hollow bar',
        'OD with wall or ID',
        'OD and wall tolerance plus concentricity',
        'ASTM B348 / B348M or a customer drawing',
        'Define OD, wall or ID, length and concentricity; the route may be standard or drawing-based.',
      ],
      [
        'Square, rectangular and hex bar',
        'Section and across-flats dimension',
        'Section tolerance, squareness and straightness',
        'ASTM B348 / B348M or a customer drawing',
        'Corner condition and straightness class have to be stated; do not apply a round tolerance.',
      ],
      [
        'Cut blanks and machined sections',
        'Drawing dimensions and allowance',
        'The drawing tolerance plus the machining allowance',
        'Customer drawing and an accepted acceptance plan',
        'The drawing, the allowance and the inspection plan are part of the order.',
      ],
    ],
  },
  {
    kind: 'engineeringInputs',
    tone: 'alt',
    eyebrow: 'Engineering Inputs',
    heading: 'The Inputs That Decide Whether the Bar Fits Your Process',
    lede: 'A titanium bar order is accepted or rejected on a small number of defined inputs. Give them before the enquiry, not after the first quotation.',
    items: [
      {
        title: 'Material',
        body: 'Grade, UNS designation, the governing specification with its revision, the condition and any supplementary requirement.',
      },
      {
        title: 'Geometry',
        body: 'Profile, controlling dimension, length, tolerance class, straightness, roundness and the machining allowance left for your process.',
      },
      {
        title: 'Surface and ends',
        body: 'Surface finish, end condition, edge or corner condition and any cleaning or passivation requirement.',
      },
      {
        title: 'Evidence',
        body: 'Certificate type, traceability level, dimensional report, test and NDT scope, third-party involvement and the release document index.',
      },
    ],
  },
];

export const page = buildStandardPage(raw);