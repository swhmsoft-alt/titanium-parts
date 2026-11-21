import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-tubing product detail page. */
const raw: StandardRaw = {
  M: "Titanium Tube & Pipe",
  hero: {
    eyebrow: "ASTM B338 Tube · ASTM B861/B862 Pipe",
    title: "Titanium Tube & Pipe Manufacturer in China — Seamless & Welded",
    desc: "Source seamless or welded titanium tube and pipe with product form, grade, specification, dimensions, condition, testing and documentation reviewed against your purchase requirements.",
    img: "/images/titanium-products/titanium-tube-pipe-manufacturer-1.webp",
    tags: [
      "B338 Tube · B861 Seamless Pipe · B862 Welded Pipe",
      "OD/Wall · NPS/Schedule · Drawing-Based",
      "Order-Specific MTC & Testing"
    ]
  },
  orderBasis: [
    {
      title: "Tube or pipe",
      body: "B338 tube, B861 seamless pipe, B862 welded pipe or drawing-based tubing."
    },
    {
      title: "Material and dimensions",
      body: "Grade, UNS, revision, condition, OD and wall or NPS and schedule, length and quantity."
    },
    {
      title: "Fabrication and service",
      body: "Media, temperature, pressure, joining, bending, ends, cleanliness and design code."
    },
    {
      title: "Evidence and release",
      body: "MTC, traceability, dimensional records, specified tests, marking, packing and documents."
    }
  ],
  forms: [
    {
      img: "/images/titanium-products/heat-exchanger-tube.webp",
      alt: "ASTM B338 Titanium Tube",
      title: "ASTM B338 Titanium Tube",
      spec: "Specify: OD × wall thickness × length",
      body: "Seamless or welded tube for condenser and heat-exchanger service when B338 is specified."
    },
    {
      img: "/images/titanium-products/titanium-seamless-pipe.webp",
      alt: "ASTM B861 Seamless Pipe",
      title: "ASTM B861 Seamless Pipe",
      spec: "Specify: NPS × schedule or exact OD × wall",
      body: "Seamless pipe for corrosion-resisting and elevated-temperature service under the ordered specification."
    },
    {
      img: "/images/titanium-products/titanium-welded-pipe.webp",
      alt: "ASTM B862 Welded Pipe",
      title: "ASTM B862 Welded Pipe",
      spec: "Specify: NPS × schedule or exact OD × wall",
      body: "Welded pipe with material, weld, condition, dimensions and testing controlled by the purchase order."
    },
    {
      img: "/images/titanium-products/heat-exchanger-tube.webp",
      alt: "Heat Exchanger Tube",
      title: "Heat Exchanger Tube",
      spec: "Specify: Grade · OD · wall · length · tests",
      body: "Straight or project-specific tube for condensers and heat exchangers with service and cleanliness requirements defined."
    },
    {
      img: "/images/titanium-products/aerospace-thin-wall-tube.webp",
      alt: "Thin-Wall Tube",
      title: "Thin-Wall Tube",
      spec: "Specify: Grade · OD · wall · tolerance",
      body: "Thin-wall tubing reviewed by alloy, formability, fabrication route and dimensional control."
    },
    {
      img: "/images/titanium-products/titanium-capillary-tube.webp",
      alt: "Capillary Tube",
      title: "Capillary Tube",
      spec: "Specify: OD · ID or wall · length · tolerance",
      body: "Small-diameter tubing reviewed for instrumentation or precision fluid-handling requirements."
    },
    {
      img: "/images/titanium-products/square-rectangular-tube.webp",
      alt: "Shaped & Custom Tube",
      title: "Shaped & Custom Tube",
      spec: "Specify: Drawing · section · wall · grade",
      body: "Square, rectangular and other drawing-based profiles supplied to an agreed drawing or applicable specification."
    },
    {
      img: "/images/titanium-products/custom-fabricated-u-bend.webp",
      alt: "Fabricated Tube",
      title: "Fabricated Tube",
      spec: "Specify: Drawing · geometry · tolerance · quantity",
      body: "Cutting, bending, U-bend, coiling and end preparation reviewed as an explicit processing scope."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review for titanium tube and pipe",
      title: "Requirement Review",
      body: "Form, standard, grade, dimensions, service and documents."
    },
    {
      img: "/images/titanium-products/seamless-welded-route.webp",
      alt: "Seamless or Welded Route",
      title: "Seamless or Welded Route",
      body: "Seamless, welded, source condition and processing boundary."
    },
    {
      img: "/images/titanium-products/sizing-fabrication-tube.webp",
      alt: "Sizing & Fabrication",
      title: "Sizing & Fabrication",
      body: "Cutting, ends, bending or drawing-based work as agreed."
    },
    {
      img: "/images/titanium-products/inspection-tests-tube.webp",
      alt: "Inspection & Tests",
      title: "Inspection & Tests",
      body: "Order-specific dimensions, visual checks, tests and reports."
    },
    {
      img: "/images/titanium-products/marking-release-tube.webp",
      alt: "Marking & Release",
      title: "Marking & Release",
      body: "Traceability, protection, packing, documents and delivery basis."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plate.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/heat-exchangers-condensers.webp",
      alt: "Heat Exchangers & Condensers titanium tube and pipe application",
      title: "Heat Exchangers & Condensers",
      spec: "Define thermal duty, media, temperature, pressure, grade, dimensions, cleanliness, ends and applicable B338 inspection requirements.",
      href: "/industries/chemical-processing/"
    },
    {
      img: "/images/titanium-products/chemical-petrochemical-processing.webp",
      alt: "Chemical Processing & Piping titanium tube and pipe application",
      title: "Chemical Processing & Piping",
      spec: "Define chemistry, concentration, contaminants, temperature, pressure, design code, NPS or dimensions, fabrication and inspection.",
      href: "/industries/chemical-processing/"
    },
    {
      img: "/images/titanium-products/marine-offshore02.webp",
      alt: "Marine & Seawater Systems titanium tube and pipe application",
      title: "Marine & Seawater Systems",
      spec: "Review temperature, velocity, crevices, galvanic contacts, pressure boundary, joining and maintenance access.",
      href: "/industries/marine-offshore/"
    },
    {
      img: "/images/titanium-products/have-a-non-standard-requirement.webp",
      alt: "Industrial Fabrication & OEM titanium tube and pipe application",
      title: "Industrial Fabrication & OEM",
      spec: "Use the approved drawing to control form, grade, dimensions, bending, welding, cleanliness, inspection and responsibility.",
      href: "/manufacturing-capabilities/"
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, heat or lot, form, condition and certificate link."
    },
    {
      title: "Dimensional records",
      body: "OD, wall, length, straightness, ends and agreed tolerances."
    },
    {
      title: "Testing evidence",
      body: "Method, acceptance criteria, sampling, witness point and report."
    },
    {
      title: "Release package",
      body: "Document index, marking, packing, shipping records and approval route."
    }
  ],
  controls: [
    {
      title: "Product & Material Identity",
      body: "Tube or pipe, seamless or welded, grade, standard revision and condition."
    },
    {
      title: "Dimensions & Fabrication",
      body: "OD/wall or NPS/schedule, length, tolerance, ends, joining and processing."
    },
    {
      title: "Testing & Acceptance",
      body: "Certificates, inspection, specified tests, witness points and release criteria."
    },
    {
      title: "Commercial & Delivery",
      body: "Quantity basis, exclusions, packing, Incoterm and schedule assumptions."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium tube or pipe quotation?",
      a: "Provide the product form, grade, specification and revision, condition, dimensions, quantity, service, testing and document requirements. A drawing is optional for the first enquiry and recommended for shaped or fabricated products."
    },
    {
      q: "What is the difference between titanium tube and titanium pipe?",
      a: "The two terms describe different dimensional and specification scopes. Tube is typically sized by outside diameter and wall, pipe by NPS and schedule. Confirm which one is required by the governing specification and service code."
    },
    {
      q: "What is the difference between ASTM B338, B861 and B862?",
      a: "B338 covers seamless and welded tubes intended for condenser and heat-exchanger service; ASTM B861 covers seamless titanium pipe; ASTM B862 covers welded titanium pipe. State the required revision and supplementary requirements in the order."
    },
    {
      q: "Can Titanium Parts supply both seamless and welded products?",
      a: "Yes. Seamless tube and pipe are produced by hot extrusion and welded tube and pipe by TIG welding, both in our own factory. Sizes, grades, condition, testing scope and lead time are confirmed per order"
    },
    {
      q: "How is the pressure rating of titanium tube or pipe determined?",
      a: "It cannot be determined from the material name alone. The responsible designer must apply the governing design code using dimensions, material properties at design temperature, joint factors, allowances, service conditions and system details."
    },
    {
      q: "Are hydrostatic, pneumatic, eddy-current, ultrasonic or third-party tests included automatically?",
      a: "No. Applicable tests, sampling, acceptance criteria, witness points and reports depend on the product specification and purchase order. They must be agreed before quotation and order release."
    }
  ],
  slug: "titanium-tubing",
  cta: {
    primary: {
      href: "#forms-section",
      label: "Choose Tube or Pipe"
    },
    secondary: {
      href: "#tp-rfq",
      label: "Request a Quote"
    }
  },
  copy: {
    orderBasis: {
      heading: "Start with Product Form, Standard and Design Basis"
    },
    process: {
      heading: "Coordinate the Order from Definition to Release",
      lede: "Seamless and welded tube and pipe are produced in our own factory. Sizing, fabrication, the inspection route and the document package are confirmed for each order."
    },
    mfg: {
      lede: "Seamless extrusion, TIG welding, sizing and inspection are carried out in our own factory. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    applications: {
      heading: "Match the Product Route to the Service and System",
      lede: "Industry labels are starting points. Final selection depends on service data, product specification, design code, fabrication and acceptance responsibilities."
    },
    evidence: {
      heading: "Specify Tests and Records Before Quotation",
      lede: "Hydrostatic, pneumatic, eddy-current, ultrasonic, penetrant or other testing must be tied to the applicable specification, product route, acceptance criteria, sampling and order scope. Do not assume every method is required or included."
    },
    controls: {
      lede: "Use this short check before comparing quotations. The complete guide covers standard selection, pressure-design boundaries, supplier evidence and commercial risk."
    },
    faq: {
      eyebrow: "Frequently Asked Questions"
    },
    rfq: {
      eyebrow: "Titanium Tube & Pipe Inquiry",
      lede: "Share the available product form, grade, specification, dimensions, quantity, service, testing and document requirements. A drawing is optional for the first enquiry and recommended for shaped or fabricated products.",
      checks: [
        "B338, B861 or B862 route review",
        "Grade, dimensions and condition review",
        "Testing and documentation checklist",
        "Quotation-specific availability and delivery basis"
      ],
      formTitle: "Titanium Tube & Pipe Inquiry",
      submitLabel: "Send Tube & Pipe Inquiry",
      variant: "titanium-tubing"
    }
  },
  controlsLink: {
    href: "/knowledge-center/",
    label: "Read the Complete Purchase Guide"
  },
  applicationsLinkText: "Review the application context →"
};

raw.catalogSections = [
  {
    id: "forms-section",
    tone: "plain",
    eyebrow: "Tube & Pipe Range",
    heading: "Separate the Product Routes Before Quotation",
    lede: "B338 tube, B861 seamless pipe and B862 welded pipe are not interchangeable labels. Custom and fabricated products also require a defined drawing and responsibility boundary.",
    kind: "forms-cards",
    specLabel: "Specify:",
    note: "Grade, dimensions, condition and availability: confirmed by quotation.",
    items: [
      {
        img: "/images/titanium-products/heat-exchanger-tube.webp",
        alt: "ASTM B338 Titanium Tube",
        title: "ASTM B338 Titanium Tube",
        spec: "Specify: OD × wall thickness × length",
        body: "Seamless or welded tube for condenser and heat-exchanger service when B338 is specified."
      },
      {
        img: "/images/titanium-products/titanium-seamless-pipe.webp",
        alt: "ASTM B861 Seamless Pipe",
        title: "ASTM B861 Seamless Pipe",
        spec: "Specify: NPS × schedule or exact OD × wall",
        body: "Seamless pipe for corrosion-resisting and elevated-temperature service under the ordered specification."
      },
      {
        img: "/images/titanium-products/titanium-welded-pipe.webp",
        alt: "ASTM B862 Welded Pipe",
        title: "ASTM B862 Welded Pipe",
        spec: "Specify: NPS × schedule or exact OD × wall",
        body: "Welded pipe with material, weld, condition, dimensions and testing controlled by the purchase order."
      },
      {
        img: "/images/titanium-products/heat-exchanger-tube.webp",
        alt: "Heat Exchanger Tube",
        title: "Heat Exchanger Tube",
        spec: "Specify: Grade · OD · wall · length · tests",
        body: "Straight or project-specific tube for condensers and heat exchangers with service and cleanliness requirements defined."
      },
      {
        img: "/images/titanium-products/aerospace-thin-wall-tube.webp",
        alt: "Thin-Wall Tube",
        title: "Thin-Wall Tube",
        spec: "Specify: Grade · OD · wall · tolerance",
        body: "Thin-wall tubing reviewed by alloy, formability, fabrication route and dimensional control."
      },
      {
        img: "/images/titanium-products/titanium-capillary-tube.webp",
        alt: "Capillary Tube",
        title: "Capillary Tube",
        spec: "Specify: OD · ID or wall · length · tolerance",
        body: "Small-diameter tubing reviewed for instrumentation or precision fluid-handling requirements."
      },
      {
        img: "/images/titanium-products/square-rectangular-tube.webp",
        alt: "Shaped & Custom Tube",
        title: "Shaped & Custom Tube",
        spec: "Specify: Drawing · section · wall · grade",
        body: "Square, rectangular and other drawing-based profiles supplied to an agreed drawing or applicable specification."
      },
      {
        img: "/images/titanium-products/custom-fabricated-u-bend.webp",
        alt: "Fabricated Tube",
        title: "Fabricated Tube",
        spec: "Specify: Drawing · geometry · tolerance · quantity",
        body: "Cutting, bending, U-bend, coiling and end preparation reviewed as an explicit processing scope."
      }
    ]
  }
];
raw.extras = [
  {
    kind: "specTable",
    tone: "alt",
    eyebrow: "Specification Mapping",
    heading: "Match the Standard to the Ordered Product",
    caption: "Tubing specification mapping: product route, typical order dimensions, the specification applied when required and the scope boundary",
    columns: [
      "Product route",
      "Typical order dimensions",
      "Specification when required",
      "Scope boundary"
    ],
    footnote: "Not every grade is included or available in every product form, size, condition or specification. Confirm the exact combination in the quotation.",
    rows: [
      [
        "Condenser / heat-exchanger tube",
        "OD × wall × length",
        "ASTM B338 / ASME SB-338",
        "Seamless or welded tube; confirm grade, revision, condition and tests."
      ],
      [
        "Seamless pipe",
        "NPS × schedule or exact dimensions",
        "ASTM B861 / ASME SB-861",
        "Seamless pipe; define service, design code, ends and test package."
      ],
      [
        "Welded pipe",
        "NPS × schedule or exact dimensions",
        "ASTM B862 / ASME SB-862",
        "Welded pipe; define weld route, condition, NDT and acceptance."
      ],
      [
        "Shaped / fabricated tube",
        "Drawing and controlled dimensions",
        "Customer drawing or verified standard",
        "Do not apply B861 automatically to square or rectangular tube."
      ]
    ]
  },
  {
    kind: "engineeringInputs",
    tone: "plain",
    eyebrow: "Engineering Inputs",
    heading: "Pressure and Corrosion Claims Need a Defined Basis",
    lede: "A material grade or successful product test does not create a system pressure rating. The responsible designer must apply the governing code using actual dimensions, material properties at design temperature, joint factors, allowances, service conditions and system configuration.",
    items: [
      {
        title: "Service conditions",
        body: "Media, concentration, contaminants, temperature, pressure, velocity and cycling."
      },
      {
        title: "Geometry",
        body: "OD, wall, ID, NPS, schedule, tolerance, straightness, length and ends."
      },
      {
        title: "Fabrication",
        body: "Seamless or welded route, bending, joining, heat treatment, cleaning and inspection."
      },
      {
        title: "Design responsibility",
        body: "Design code, allowable stress, joint factor, allowances and approval authority."
      }
    ]
  }
];

export const page = buildStandardPage(raw);
