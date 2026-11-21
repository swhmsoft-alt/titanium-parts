import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-plate product detail page. */
const raw: StandardRaw = {
  M: "Titanium Plate & Sheet",
  hero: {
    eyebrow: "ASTM B265 Titanium Flat Products",
    title: "Titanium Plate & Sheet Manufacturer — Grade 2, Grade 5 & Custom Cut Sizes",
    desc: "Source plate, sheet and cut blanks with grade, specification, condition, dimensions, surface, processing, inspection and documentation reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    tags: [
      "Grades 2 · 5 · 7 · 23",
      "Plate · Sheet · Cut Blanks",
      "Order-Specific MTC & Inspection"
    ],
    id: "plate-hero"
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS, specification and revision, condition and supplementary requirements."
    },
    {
      title: "Geometry",
      body: "Thickness, width, length, quantity, flatness, tolerance and machining allowance."
    },
    {
      title: "Processing",
      body: "Full-size material or blanks, cut route, edge condition, surface and downstream fabrication."
    },
    {
      title: "Evidence",
      body: "MTC, traceability, inspection, testing, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-sheet.webp",
      alt: "Grade 2 Titanium plate and sheet",
      title: "Grade 2 Titanium",
      spec: "ASTM B265 / B265M when specified · UNS R50400",
      body: "Commercially pure titanium for chemical processing, marine and general fabrication where formability and corrosion resistance drive the grade choice."
    },
    {
      img: "/images/titanium-products/grade-5-ti-6al-4v-plate-sheet.webp",
      alt: "Grade 5 / Ti-6Al-4V plate and sheet",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "ASTM B265 or AMS 4911 as ordered · UNS R56400",
      body: "High-strength alloy for aerospace, high-performance engineering and structural components where mechanical performance is required."
    },
    {
      img: "/images/titanium-products/marine-grade-sheet.webp",
      alt: "Grade 7 Titanium plate and sheet",
      title: "Grade 7 Titanium",
      spec: "ASTM B265 / B265M when specified · UNS R52400",
      body: "Pd-enhanced grade for reducing acid, chloride-rich and other aggressive chemical media beyond the Grade 2 capability window."
    },
    {
      img: "/images/titanium-products/grade-23-eli-medical-sheet.webp",
      alt: "Grade 23 / Ti-6Al-4V ELI plate and sheet",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "ASTM B265 or ASTM F136 only when ordered · UNS R56407",
      body: "Extra-low-interstitial Grade 5 chemistry for medical and high-performance applications; specification and qualification scope are stated in the quotation."
    }
  ],
  forms: [
    {
      title: "Sheet",
      spec: "For forming, fabricated panels and thinner flat-product requirements. State thickness and flatness explicitly.",
      href: "/titanium-products/titanium-foil-2/"
    },
    {
      title: "Plate",
      spec: "For heavier sections, machined parts and fabricated equipment. Define condition, allowance and inspection.",
      href: "/titanium-products/titanium-plate/"
    },
    {
      title: "Cut Blanks",
      spec: "Add blank geometry, cut tolerance, edge condition, datum and machining allowance.",
      href: "/manufacturing-capabilities/"
    },
    {
      title: "Titanium Foil",
      spec: "For ultra-thin requirements, use the dedicated foil page and confirm thickness, condition and handling.",
      href: "/titanium-products/titanium-foil-2/"
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/titanium-slab-preparation-scaled.webp",
      alt: "Requirement Review for titanium flat products",
      title: "Requirement Review",
      body: "Grade, specification revision, condition, dimensions, quantity and document scope are aligned before supply."
    },
    {
      img: "/images/titanium-products/rolling-precision.webp",
      alt: "Material and Route Confirmation for titanium flat products",
      title: "Material and Route Confirmation",
      body: "The source material, preparation and processing route are confirmed against the accepted quotation."
    },
    {
      img: "/images/titanium-products/thermal-surface-integrity.webp",
      alt: "Cutting and Surface Control for titanium flat products",
      title: "Cutting and Surface Control",
      body: "Cut method, allowance, edge condition and surface requirements are controlled to the agreed scope."
    },
    {
      img: "/images/titanium-products/inspection-documentation.webp",
      alt: "Inspection and Records for titanium flat products",
      title: "Inspection and Records",
      body: "Order-specific dimensional, surface, material or third-party checks are completed as agreed."
    },
    {
      img: "/images/titanium-products/final-dimension-packaging.webp",
      alt: "Marking, Packing and Release for titanium flat products",
      title: "Marking, Packing and Release",
      body: "Identification, document set, protective packing and delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/chemical-processing01.webp",
      alt: "Chemical Processing titanium plate and sheet application",
      title: "Chemical Processing",
      spec: "Define media, concentration, contaminants, temperature, pressure and fabrication duty before selecting Grade 2, 7 or another material.",
      href: "/industries/chemical-processing/"
    },
    {
      img: "/images/titanium-products/marine-offshore02.webp",
      alt: "Marine & Offshore titanium plate and sheet application",
      title: "Marine & Offshore",
      spec: "Review seawater exposure, crevice conditions, mechanical loading, joining and maintenance access.",
      href: "/industries/marine-offshore/"
    },
    {
      img: "/images/titanium-products/aerospace-high-performance-engineering04.webp",
      alt: "Aerospace & High-Performance titanium plate and sheet application",
      title: "Aerospace & High-Performance",
      spec: "Confirm the approved material specification, condition, source and traceability requirements; general Grade 5 supply is not automatic aerospace approval.",
      href: "/industries/aerospace/"
    },
    {
      img: "/images/titanium-products/medical-precision-engineering03.webp",
      alt: "Medical & Precision titanium plate and sheet application",
      title: "Medical & Precision",
      spec: "Separate raw-material specification from finished-device qualification and regulatory responsibilities.",
      href: "/industries/medical/"
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, heat or lot reference, product form and certificate link.",
      icon: "tag"
    },
    {
      title: "Dimensional evidence",
      body: "Characteristics, method, sampling, tolerance and report format.",
      icon: "ruler"
    },
    {
      title: "Additional testing",
      body: "Only tests and acceptance criteria stated in the agreed scope.",
      icon: "flask"
    },
    {
      title: "Document release",
      body: "Required index, language, approval route and delivery timing.",
      icon: "file-text"
    }
  ],
  controls: [
    {
      title: "Material Identity",
      body: "Grade, form, specification revision, condition and heat or lot basis.",
      icon: "shield"
    },
    {
      title: "Dimensions & Processing",
      body: "Size, tolerance, surface, allowance, cut route and responsibility.",
      icon: "settings"
    },
    {
      title: "Evidence & Acceptance",
      body: "Certificates, inspection, tests, hold points and acceptance criteria.",
      icon: "badge-check"
    },
    {
      title: "Commercial & Delivery",
      body: "Quantity basis, exclusions, packing, Incoterm and schedule assumptions.",
      icon: "truck"
    }
  ],
  processNumbering: 'plain',
  faq: [
    {
      q: "What information is needed for a titanium plate or sheet quotation?",
      a: "Provide the grade, governing specification and revision, condition, thickness, width, length, quantity, surface requirement, cutting or processing scope, inspection documents, packing and destination. Add the drawing where cut blanks or tight tolerances are involved."
    },
    {
      q: "What is the difference between titanium sheet, plate and foil?",
      a: "The terms describe flat products of different thickness ranges. The boundary can vary by specification and market practice. For purchasing, state the exact thickness, dimensions, grade, condition and governing specification rather than relying on the name alone."
    },
    {
      q: "Which grades can be reviewed for titanium plate and sheet?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, dimensions, condition and the applicable standard must be confirmed for the specific order."
    },
    {
      q: "Can plate or sheet be supplied as cut blanks?",
      a: "Cut-to-size blanks can be reviewed against the grade, thickness, geometry, tolerance, edge condition, machining allowance and quantity. The accepted process and final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and additional inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, testing and third-party inspection should be listed before quotation. The confirmed document and inspection package becomes part of the order basis."
    },
    {
      q: "Are stock, MOQ and lead time fixed?",
      a: "No. They depend on grade, standard, condition, dimensions, quantity, processing, inspection and current material availability. Treat them as quotation-specific values."
    }
  ],
  slug: "titanium-plate",
  cta: {
    primary: {
      href: "#tp-rfq",
      label: "Send Titanium Plate & Sheet Inquiry"
    },
    secondary: {
      href: "/titanium-products/",
      label: "All Products"
    }
  },
  copy: {
    process: {
      lede: "Plate and sheet are hot and cold rolled in our own facility. Cutting, surface preparation, inspection scope and documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Plate and sheet rolling, cutting, surface preparation and inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    applications: {
      eyebrow: "Industry Context"
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Plate, sheet or cut-blank scope",
        "Processing and inspection requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Plate & Sheet Inquiry",
      variant: "titanium-plate"
    }
  }
};

raw.catalogSections = [
  {
    tone: "plain",
    eyebrow: "Grade Reference",
    heading: "{M} Grades",
    lede: "{M} grades reviewed against ASTM / ASME / project specifications.",
    kind: "grades",
    items: [
      {
        img: "/images/titanium-products/grade-2-titanium-sheet.webp",
        alt: "Grade 2 Titanium plate and sheet",
        title: "Grade 2 Titanium",
        spec: "ASTM B265 / B265M when specified · UNS R50400",
        body: "Commercially pure titanium for chemical processing, marine and general fabrication where formability and corrosion resistance drive the grade choice."
      },
      {
        img: "/images/titanium-products/grade-5-ti-6al-4v-plate-sheet.webp",
        alt: "Grade 5 / Ti-6Al-4V plate and sheet",
        title: "Grade 5 / Ti-6Al-4V",
        spec: "ASTM B265 or AMS 4911 as ordered · UNS R56400",
        body: "High-strength alloy for aerospace, high-performance engineering and structural components where mechanical performance is required."
      },
      {
        img: "/images/titanium-products/marine-grade-sheet.webp",
        alt: "Grade 7 Titanium plate and sheet",
        title: "Grade 7 Titanium",
        spec: "ASTM B265 / B265M when specified · UNS R52400",
        body: "Pd-enhanced grade for reducing acid, chloride-rich and other aggressive chemical media beyond the Grade 2 capability window."
      },
      {
        img: "/images/titanium-products/grade-23-eli-medical-sheet.webp",
        alt: "Grade 23 / Ti-6Al-4V ELI plate and sheet",
        title: "Grade 23 / Ti-6Al-4V ELI",
        spec: "ASTM B265 or ASTM F136 only when ordered · UNS R56407",
        body: "Extra-low-interstitial Grade 5 chemistry for medical and high-performance applications; specification and qualification scope are stated in the quotation."
      }
    ]
  },
  {
    tone: "alt",
    eyebrow: "Product Form",
    heading: "Specify the Exact Form, Not Only “Titanium Plate”",
    lede: "Product forms, dimensions and acceptance criteria relevant to the titanium plate & sheet order basis.",
    kind: "forms-links",
    linkText: "View {title} →",
    items: [
      {
        title: "Sheet",
        spec: "For forming, fabricated panels and thinner flat-product requirements. State thickness and flatness explicitly.",
        href: "/titanium-products/titanium-foil-2/"
      },
      {
        title: "Plate",
        spec: "For heavier sections, machined parts and fabricated equipment. Define condition, allowance and inspection.",
        href: "/titanium-products/titanium-plate/"
      },
      {
        title: "Cut Blanks",
        spec: "Add blank geometry, cut tolerance, edge condition, datum and machining allowance.",
        href: "/manufacturing-capabilities/"
      },
      {
        title: "Titanium Foil",
        spec: "For ultra-thin requirements, use the dedicated foil page and confirm thickness, condition and handling.",
        href: "/titanium-products/titanium-foil-2/"
      }
    ]
  }
];
raw.extras = [
  {
    kind: "cutPrep",
    tone: "plain",
    eyebrow: "Processing Options",
    heading: "Cutting and Preparation Matched to the Next Process",
    lede: "Cutting, surface preparation and machining-ready blanks can be reviewed according to grade, thickness, geometry, allowance, edge condition, tolerance and quantity.",
    note: "<strong>Before Requesting a Quote:</strong> identify critical dimensions and the downstream machining or fabrication route. The cutting method and achievable tolerance remain order-specific.",
    alt: "Titanium plate and sheet cutting and preparation",
    items: [
      "Cut-to-size dimensions",
      "Edge and corner requirements",
      "Flatness and machining allowance",
      "Surface and protective handling"
    ],
    img: "/images/titanium-products/precision-processing-cutting.webp"
  }
];

export const page = buildStandardPage(raw);
