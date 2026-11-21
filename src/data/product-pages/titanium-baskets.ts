import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-baskets product detail page. */
const raw: StandardRaw = {
  M: "Titanium Anode Baskets",
  hero: {
    eyebrow: "Mesh · Perforated · Framed · Custom Hooks",
    title: "Custom Titanium Anode Baskets for Electroplating & Surface Finishing",
    desc: "Source titanium anode baskets with mesh type, frame, hook, current contact and loading reviewed against your plating line and process requirements.",
    img: "/images/titanium-products/titanium-anode-basket.webp",
    tags: [
      "Plating Line Compatible",
      "Custom Hooks · Mesh · Frames",
      "Order-Specific MTC & Inspection"
    ]
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS, specification and revision, condition and supplementary requirements."
    },
    {
      title: "Profile & Size",
      body: "Diameter, section, length, quantity, tolerance and machining allowance."
    },
    {
      title: "Precision Requirements",
      body: "Tolerance, surface, finish, end condition and acceptance criteria."
    },
    {
      title: "Evidence",
      body: "MTC, traceability, inspection, testing, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-1-titanium-basket.webp",
      alt: "Grade 1 Basket",
      title: "Grade 1 Titanium",
      spec: "UNS R50250 · ASTM B265 applicable scope"
    },
    {
      img: "/images/titanium-products/grade-2-titanium-basket.webp",
      alt: "Grade 2 Basket",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B265 / B348"
    },
    {
      img: "/images/titanium-products/grade-7-titanium-basket.webp",
      alt: "Grade 7 Basket",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B265 / B348"
    },
    {
      img: "/images/titanium-products/grade-12-titanium-basket.webp",
      alt: "Grade 12 Basket",
      title: "Grade 12 Titanium",
      spec: "UNS R53400 · ASTM B265 / B348"
    }
  ],
  forms: [
    {
      title: "Mesh Anode Basket",
      body: "Titanium mesh basket for soluble anodes and uniform plating current distribution."
    },
    {
      title: "Perforated Basket",
      body: "Perforated sheet basket for higher mechanical strength and heavier anode loading."
    },
    {
      title: "Framed / Reinforced",
      body: "Framed and reinforced baskets for heavy-load and large-tank applications."
    },
    {
      title: "Custom Hook / Contact",
      body: "Hook and contact design matched to the busbar, current and plating duty."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Requirement Review",
      body: "Grade, specification, condition, dimensions, quantity and document scope aligned before supply."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Route Confirmation",
      body: "Source form, condition, identity and applicable specification confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Cutting and Surface Control",
      title: "Processing & Surface Control",
      body: "Cut route, allowance, edge condition and surface requirements controlled to the agreed scope."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Inspection & Records",
      body: "Order-specific dimensional, surface, material or third-party checks completed as agreed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification, document set, protective packing and delivery basis checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/electroplating-line-basket.webp",
      alt: "Electroplating Line",
      title: "Electroplating Line",
      spec: "Confirm bath, anode material, current, workpiece geometry and rectifier control basis."
    },
    {
      img: "/images/titanium-products/electrowinning-basket.webp",
      alt: "Electrowinning & Refining",
      title: "Electrowinning & Refining",
      spec: "State electrolyte, impurities, cell geometry, total current and cathode product."
    },
    {
      img: "/images/titanium-products/surface-finishing-basket.webp",
      alt: "Surface Finishing",
      title: "Surface Finishing",
      spec: "Confirm finishing chemistry, agitation, work-piece handling and rinsing boundary."
    },
    {
      img: "/images/titanium-products/pickling-cleaning-basket.webp",
      alt: "Pickling & Cleaning",
      title: "Pickling & Cleaning",
      spec: "Define acid mix, temperature, immersion, basket compatibility and waste treatment responsibility."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and heat or lot reference."
    },
    {
      title: "Dimensional evidence",
      body: "Measured characteristics, method, sampling, tolerance and report format."
    },
    {
      title: "Test and inspection",
      body: "Mechanical, NDT or third-party checks stated in the agreed scope."
    },
    {
      title: "Document release",
      body: "Required certificate index, language, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material Identity",
      body: "Grade, form, specification revision, condition and heat or lot basis."
    },
    {
      title: "Geometry & Processing",
      body: "Size, tolerance, surface, allowance, processing route and responsibility."
    },
    {
      title: "Evidence & Acceptance",
      body: "Certificates, measurements, tests, hold points and acceptance criteria."
    },
    {
      title: "Commercial & Delivery",
      body: "Quantity basis, exclusions, packing, Incoterm and schedule assumptions."
    }
  ],
  faq: [
    {
      q: "What information is needed for a Titanium Anode Baskets quotation?",
      a: "Provide the grade, governing specification and revision, condition, dimensions, quantity, surface, processing, inspection, testing and document requirements. A drawing is optional for the first enquiry and especially useful for non-standard or drawing-based items."
    },
    {
      q: "Which grades can be reviewed for Titanium Anode Baskets?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, size and applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based Titanium Anode Baskets be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required geometry, grade, condition, tolerance, machining allowance, processing route and quantity. The accepted process and final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for Titanium Anode Baskets?",
      a: "No. They depend on grade, source form, condition, size, tolerance, processing, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  slug: "titanium-baskets",
  cta: {
    primary: {
      href: "#forms-section",
      label: "Review Basket Types"
    },
    secondary: {
      href: "#tp-rfq",
      label: "Request a Quote"
    }
  }
};

raw.catalogSections = [
  {
    id: "forms-section",
    tone: "plain",
    eyebrow: "Grade Reference",
    heading: "{M} Grades & Forms",
    lede: "{M} grades and product forms reviewed against ASTM / ASME / project specifications.",
    kind: "grades",
    items: [
      {
        img: "/images/titanium-products/grade-1-titanium-basket.webp",
        alt: "Grade 1 Basket",
        title: "Grade 1 Titanium",
        spec: "UNS R50250 · ASTM B265 applicable scope"
      },
      {
        img: "/images/titanium-products/grade-2-titanium-basket.webp",
        alt: "Grade 2 Basket",
        title: "Grade 2 Titanium",
        spec: "UNS R50400 · ASTM B265 / B348"
      },
      {
        img: "/images/titanium-products/grade-7-titanium-basket.webp",
        alt: "Grade 7 Basket",
        title: "Grade 7 Titanium",
        spec: "UNS R52400 · ASTM B265 / B348"
      },
      {
        img: "/images/titanium-products/grade-12-titanium-basket.webp",
        alt: "Grade 12 Basket",
        title: "Grade 12 Titanium",
        spec: "UNS R53400 · ASTM B265 / B348"
      }
    ]
  }
];
raw.extras = [
  {
    kind: "boundary",
    tone: "blue-bg",
    eyebrow: "Product Boundary",
    heading: "A Titanium Anode Basket Is Not A Titanium Anode",
    lede: "The basket is a containment and contact component. A titanium mesh or perforated vessel holds soluble anode material such as nickel or copper balls, keeps it in contact with the bath and carries the current into the solution. It carries no mixed metal oxide coating and it does not generate the anodic reaction itself, so it belongs to the fabricated titanium component range rather than to the coated anode family.",
    links: [
      {
        href: "/titanium-anode/",
        label: "Review titanium anodes",
        primary: true
      },
      {
        href: "/titanium-anode/mmo-anode/",
        label: "Review MMO titanium anodes →"
      }
    ]
  }
];

export const page = buildStandardPage(raw);
