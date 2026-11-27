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
      body: "Grade, UNS, governing specification and revision, rolled or annealed condition, thickness range and supplementary requirements."
    },
    {
      title: "Geometry",
      body: "Thickness, width, length, quantity, flatness class, thickness tolerance, edge condition and machining allowance."
    },
    {
      title: "Processing",
      body: "Hot-rolled and cold-rolled plate route, cut-to-size or full-size supply, surface class, protective handling and the downstream fabrication step."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, dimensional report, inspection and NDT scope, marking, packing and release documents."
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
      alt: "Requirement review for titanium plate and sheet",
      title: "Order Basis Review",
      body: "Specification revision, grade, thickness range, delivery condition, flatness class and inspection scope are fixed before any plate is scheduled. Only the dimensions and acceptance criteria confirmed in the quotation enter production."
    },
    {
      img: "/images/titanium-products/rolling-precision.webp",
      alt: "Hot rolling of titanium plate",
      title: "Hot Rolling to Size",
      body: "Slab preparation and hot rolling bring the plate close to the ordered thickness. Hot rolling is carried out through qualified partner workshops coordinated for the order, and the rolling record travels with the lot documentation."
    },
    {
      img: "/images/titanium-products/thermal-surface-integrity.webp",
      alt: "Cold rolling and delivery condition of titanium plate",
      title: "Cold Rolling and Condition",
      body: "Cold rolling and the selected delivery condition — annealed, cold rolled or as-rolled — determine the mechanical property and surface result. Condition and surface class follow the order rather than a default."
    },
    {
      img: "/images/titanium-products/precision-processing-cutting.webp",
      alt: "Cut-to-size preparation of titanium plate",
      title: "Cut-to-Size and Edge Preparation",
      body: "Plate is cut to the ordered width and length, or supplied as full-size material. Edge condition, cut tolerance and the machining allowance left for the customer are stated on the order."
    },
    {
      img: "/images/titanium-products/inspection-documentation.webp",
      alt: "Inspection of titanium plate and sheet",
      title: "Inspection and Release",
      body: "Thickness, width, length, flatness, surface condition and edge condition are inspected against the ordered scope. The dimensional record, MTC and any agreed NDT result are released with the shipment."
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
      title: "Rolling and heat traceability",
      body: "Melting route, heat or lot number and the rolling record that ties the plate back to the certificate.",
      icon: "tag"
    },
    {
      title: "Thickness and flatness record",
      body: "Measured thickness, width, length and flatness against the tolerance stated on the order, with the measuring method named.",
      icon: "ruler"
    },
    {
      title: "Surface and edge condition",
      body: "Surface class, pickling or as-rolled finish, edge condition and the protection applied before packing.",
      icon: "flask"
    },
    {
      title: "Inspection and release documents",
      body: "Only the dimensional report, NDT result, third-party involvement and release documents named in the agreed scope.",
      icon: "file-text"
    }
  ],
  controls: [
    {
      title: "Delivery condition",
      body: "Annealed, cold rolled or as-rolled, with the surface class that goes with it.",
      icon: "shield"
    },
    {
      title: "Dimensional scope",
      body: "Thickness range, width and length, flatness class, thickness tolerance and machining allowance.",
      icon: "settings"
    },
    {
      title: "Cut and edge scope",
      body: "Full-size or cut-to-size supply, cut tolerance, edge condition and the downstream fabrication step.",
      icon: "badge-check"
    },
    {
      title: "Commercial basis",
      body: "Quantity, exclusions, packing method, protective handling, Incoterm and schedule assumptions.",
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
    orderBasis: {
      eyebrow: "Plate Order Basis",
      heading: "State the Plate Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium plate and sheet against ASTM / ASME / project specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Plate Release Package",
      lede: "A plate certificate does not describe thickness, flatness, surface or edge condition. The release package for flat product states which of those are measured, which are witnessed and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Plate",
      lede: "Delivery condition, dimensional scope, cut scope and commercial basis. Each one changes the price more than the grade name does, and each one is written down before production starts."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "Flat titanium is chosen against the media, the temperature and the downstream fabrication step. Grade, condition and inspection scope follow from that service context, not from the section name."
    },
    process: {
      lede: "Plate and sheet are hot and cold rolled through qualified partner workshops coordinated for the order. Cutting, surface preparation, inspection scope and documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Plate and sheet rolling, cutting, surface preparation and inspection are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
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
  },
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Plate & Sheet Specifics",
    heading: "Four Points That Are Decided Differently for Flat Titanium",
    lede: "Plate and sheet share the rolling route but not the failure modes, the inspection set or the supply form. Each of the four points below is stated on the order basis rather than assumed from the product name.",
    groups: [
      {
        title: "Process Route",
        items: [
          {
            title: "Rolling, then finishing",
            body: "Slab preparation, hot rolling and cold rolling bring the material to the ordered thickness; the delivery condition — annealed, cold rolled or as-rolled — is selected together with the surface class it produces."
          },
          {
            title: "Flatness and residual stress",
            body: "Flatness class and residual stress level decide whether a plate can be formed, machined or used as a vessel shell without further correction."
          },
          {
            title: "Cut versus full size",
            body: "Full-size plate, cut-to-size plate and cut blanks are three different order bases: cut scope, cut tolerance and the machining allowance left for the customer change with each."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Hydrogen and stress",
            body: "Hydrogen pickup and tensile stress are the classic flat-product failure pair. The material condition, the pickling or annealing route and the residual stress level belong in the order basis."
          },
          {
            title: "Lamination and delamination",
            body: "Rolling defects such as lamination and delamination are invisible on the surface, which is why the NDT scope and its acceptance criteria have to be named with the material."
          },
          {
            title: "Crevice and galvanic attack",
            body: "In chloride service, crevice conditions and galvanic coupling to dissimilar metals affect grade selection and joint design, so the media and the joint arrangement are quoted with the material."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Thickness and flatness record",
            body: "Thickness, width, length and flatness are measured against the tolerance stated on the order, and the measuring method is named so the record can be compared with the incoming specification."
          },
          {
            title: "Surface and edge condition",
            body: "Surface class, mill or pickled finish, edge condition and the protective handling applied before packing are inspected separately from the material certificate."
          },
          {
            title: "Volumetric inspection",
            body: "Ultrasonic testing and other volumetric methods are quoted only where the specification or the service condition calls for them, together with the acceptance class and the third-party involvement."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Mill form",
            body: "Mill plate and sheet are supplied in the sizes the rolling route produces, with the protective film and packing needed for handling and storage."
          },
          {
            title: "Cut-to-size",
            body: "Cut-to-size plate is supplied against the ordered width and length, with the cut tolerance and edge condition defined on the order."
          },
          {
            title: "Blanks and machined parts",
            body: "Blanks, rings and machined parts are reviewed as a separate scope with their own drawing, datum scheme, allowance and inspection record."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Plate Differs from the Adjacent Forms",
    caption: "Plate, sheet and cut blanks compared on the points that actually change between them.",
    columns: ["Comparison point", "Plate", "Sheet", "Cut blanks"],
    rows: [
      [
        "Where it is used",
        "Heavier flat section for machining, vessels and fabricated equipment",
        "Thinner flat section for forming, panels and cladding",
        "Geometry defined by the customer drawing rather than by the mill"
      ],
      [
        "Dimensional emphasis",
        "Thickness, width, length and flatness class",
        "Thickness and width, with forming allowance in mind",
        "Blank outline, cut tolerance, datum and machining allowance"
      ],
      [
        "Inspection emphasis",
        "Thickness and flatness record plus the agreed NDT scope",
        "Thickness and surface condition, with forming trials where relevant",
        "Cut geometry, edge condition and the dimensional report for each blank"
      ],
      [
        "Supply form",
        "Mill plate or cut-to-size plate",
        "Mill sheet or cut sheet",
        "Blanks supplied ready for the customer's machining step"
      ]
    ],
    footnote: "The thickness boundary between plate, sheet and foil follows the governing specification and market practice, so state the exact thickness, grade, condition and specification in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
