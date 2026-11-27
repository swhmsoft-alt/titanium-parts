import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-fastener product detail page. */
const raw: StandardRaw = {
  M: "Titanium Fasteners",
  slug: "titanium-bolts",
  hero: {
    eyebrow: "Bolts · Screws · Nuts · Studs · Custom",
    title: "Industrial Titanium Fastener Manufacturer — Bolts, Screws, Nuts",
    desc: "Source titanium bolts, screws, nuts, studs and custom fasteners with grade, dimensions, thread, finish and inspection reviewed against your order requirements.",
    img: "/images/titanium-products/industrial-titanium-fastener.webp",
    tags: [
      "Bolts · Screws · Nuts · Studs",
      "Drawing-Based Custom",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Fastener Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, governing fastener specification and revision, condition and any supplementary requirement such as hydrogen or interstitial limits."
    },
    {
      title: "Thread & Fit",
      body: "Thread form, pitch, tolerance class, the length measurement basis (under head or overall) and the fit that the joint requires."
    },
    {
      title: "Head & Drive Geometry",
      body: "Head style, drive type, head dimension tolerance, shank diameter and any coating or passivation requirement."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, dimensional and thread record, any proof or mechanical test result, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-bolt.webp",
      alt: "Grade 2 titanium bolt",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B348 / B381",
      body: "Commercially pure titanium for chemical, marine and general fastening where corrosion resistance and formability decide the grade rather than high strength."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-bolt.webp",
      alt: "Grade 5 titanium bolt",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B348 / AMS 4928",
      body: "High-strength alloy for aerospace and structural fastening where preload capability is part of the joint design."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-bolt.webp",
      alt: "Grade 7 titanium bolt",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B348 / B381",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-23-titanium-bolt.webp",
      alt: "Grade 23 titanium bolt",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM F136 / B381",
      body: "Extra-low-interstitial Grade 5 chemistry for medical and high-performance assemblies; the conformity scope is stated in the quotation."
    }
  ],
  forms: [
    {
      title: "Bolts",
      body: "Hex bolts, socket head cap screws and structural bolts for mechanical assemblies."
    },
    {
      title: "Screws / Sockets",
      body: "Socket head, button head and machine screws for precision assemblies."
    },
    {
      title: "Nuts / Washers",
      body: "Nuts, washers and locking hardware matched to thread and joint requirement."
    },
    {
      title: "Studs / Threaded Rods",
      body: "Stud bolts and threaded rods for high-temperature and pressure assemblies."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Requirement Review",
      body: "Drawing, grade, thread form, head style, quantity, coating and document scope are read together before any material is committed."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Route Confirmation",
      body: "Bar or billet source, condition, heat identity and the applicable fastener specification are confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Thread Forming and Head Machining",
      title: "Thread Forming & Head Machining",
      body: "Cold heading or machining of the body, thread rolling or cutting to the stated class, and head marking are controlled to the approved scope."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Testing",
      title: "Inspection & Testing",
      body: "Dimensional, thread, head and surface checks, plus proof load or mechanical testing where the specification calls for it, are performed in the agreed scope."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Part marking, batch identification, protective packing for plated items and the certificate index are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/chemical-plant-fastener.webp",
      alt: "Chemical Plant",
      title: "Chemical Plant & Process",
      spec: "Confirm media, temperature, pressure and corrosion allowance versus grade and finish."
    },
    {
      img: "/images/titanium-products/marine-offshore-fastener.webp",
      alt: "Marine & Offshore",
      title: "Marine & Offshore",
      spec: "Confirm seawater exposure, galvanic compatibility, preload and inspection regime."
    },
    {
      img: "/images/titanium-products/aerospace-racing-fastener.webp",
      alt: "Aerospace & Racing",
      title: "Aerospace & Racing",
      spec: "Confirm approved specification, source, qualification scope and traceability requirement."
    },
    {
      img: "/images/titanium-products/medical-device-fastener.webp",
      alt: "Medical Device",
      title: "Medical Device",
      spec: "Separate ASTM F67 / F136 conformity from finished-device approval and regulatory compliance."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and heat or lot reference for the bar or billet used."
    },
    {
      title: "Dimensional & thread record",
      body: "Measured length, head dimensions, shank diameter, thread pitch and class verification, with the method and sampling named."
    },
    {
      title: "Proof and mechanical testing",
      body: "Proof load, hardness, tensile or torque results only where the governing specification requires them, with the standard referenced."
    },
    {
      title: "Document release",
      body: "Required certificate index, third-party involvement, marking plan, packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Standard",
      body: "Grade, governing fastener specification and revision, condition, and the supplementary requirements that apply."
    },
    {
      title: "Thread Definition",
      body: "Thread form, pitch, tolerance class, length measurement basis and the preload or fit assumption behind the joint."
    },
    {
      title: "Head, Drive & Finish",
      body: "Head style, drive type, surface condition and any coating or passivation requirement."
    },
    {
      title: "Acceptance Scope",
      body: "Which inspections, tests, samples, marking and documents are part of the order and which are performed by the customer."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium fastener quotation?",
      a: "Provide the grade, governing specification and revision, thread form and pitch, head style, length measurement basis, quantity, surface or coating requirement, inspection, testing and document scope. A drawing is optional for the first enquiry and needed for non-standard or drawing-based items."
    },
    {
      q: "Which grades can be reviewed for titanium fasteners?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, size and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium fasteners be supplied?",
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
      q: "Are stock, MOQ and lead time fixed for titanium fasteners?",
      a: "No. They depend on grade, source form, condition, size, thread class, processing, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Fastener Order Basis",
      heading: "State the Fastener Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium fasteners against ASTM / ASME / project specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Fastener Release Package",
      lede: "A material certificate does not describe thread class, head geometry or surface condition. The release package for a fastener states which of those are measured, which are witnessed and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Fasteners",
      lede: "Thread definition, head geometry, finish and acceptance scope. Each one changes the price more than the grade name does, and each one is written down before production starts."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A titanium fastener is chosen against the media, the temperature and the joint it clamps. Grade, thread class and inspection scope follow from that service context, not from the section name."
    },
    process: {
      lede: "Fasteners are formed, machined and inspected through qualified partner workshops coordinated for the order. Thread route, surface treatment, inspection scope and documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Fastener forming, threading, head machining and inspection are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Thread, head and quantity scope",
        "Processing, inspection and testing requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Fastener Inquiry",
      variant: "titanium-fastener"
    }
  },
};

raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Fastener Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Fasteners",
    lede: "Fasteners share a form and a grade list, but the thread route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is stated on the order basis rather than assumed from the product name.",
    groups: [
      {
        title: "Thread Route",
        items: [
          {
            title: "Rolling versus cutting",
            body: "Rolling forms the thread without removing material and gives a stronger, smoother root; cutting is used where the size, the class or the material route makes rolling impractical. Which route applies is a quoting decision, not a customer preference."
          },
          {
            title: "Cold heading versus machining",
            body: "Standard proportions are cold headed from bar, while non-standard heads, shank steps and small batches are machined. The route sets the achievable dimensional tolerance and the surface appearance."
          },
          {
            title: "Thread engagement and lubrication",
            body: "Engagement length, thread pitch and the surface condition of the thread decide the preload the joint can hold, and lubrication changes the torque needed to reach it. Both belong in the order basis."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Galvanic coupling",
            body: "Titanium is noble in most media, so coupling it to a less noble fastener in the same joint can attack the other metal. Isolating washers, dissimilar-metal separation or a coated finish belong in the discussion before the grade is chosen."
          },
          {
            title: "Thread stripping and bearing",
            body: "A titanium fastener usually fails at the thread or under the head rather than in the shank, because the material is softer than the mating steel. Thread engagement and the bearing surface are therefore the dimensions that decide the joint."
          },
          {
            title: "Hydrogen and stress corrosion",
            body: "In strong reducing environments, hydrogen pickup and stress-corrosion cracking govern the grade and the stress-relief route. The service medium, the temperature and the residual stress level are quoted together with the material."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Thread gauge verification",
            body: "Thread pitch diameter, class and flank angle are verified against the gauge or method named in the specification, because a length measurement alone does not describe a thread."
          },
          {
            title: "Head and shank dimensions",
            body: "Head height, head width, bearing surface and shank diameter are measured as separate characteristics, with the tolerance class and the measurement method stated on the report."
          },
          {
            title: "Proof load and surface condition",
            body: "Proof load, hardness or tensile testing is performed where the specification requires it, and surface condition or coating thickness is recorded separately from the material certificate."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Standard stock items",
            body: "Common sizes and head styles are supplied against the mill or distributor route with the stock condition and the coating state confirmed at quotation."
          },
          {
            title: "Drawing-based items",
            body: "Non-standard heads, shank steps, thread lengths and special materials are supplied against the customer drawing, with the accepted route stated in the quotation."
          },
          {
            title: "Batches and marking",
            body: "Production quantities can be supplied in batches with part marking, heat or lot traceability and a certificate index per batch, or left unmarked when the customer's own system provides the traceability."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Fastener Types Differ from the Adjacent Forms",
    caption: "Hex bolts, socket head cap screws and studs compared on the points that actually change between them.",
    columns: ["Comparison point", "Hex bolt", "Socket head cap screw", "Stud and threaded rod"],
    rows: [
      [
        "How the joint is closed",
        "Nut on the far side of the joint, tightened across the clamped members",
        "Threaded or riveted structure on the far side, driven from the accessible side",
        "Nut on the far side, with the stud standing proud on both ends"
      ],
      [
        "Tool access",
        "External wrench clearance, so the head envelope is a design constraint",
        "Internal drive access, so the recess geometry matters for tooling",
        "Two end access points, both of which may need to remain reachable"
      ],
      [
        "Dimensional emphasis",
        "Length under head, thread length, head height and width, and the nut-side clearance",
        "Length under head, head height and width, drive size and key engagement",
        "Thread length on both ends, body diameter and the straightness of the stud"
      ],
      [
        "Typical application",
        "Structural and pressure-boundary assemblies where a wrench side is available",
        "Compact assemblies, thin sections and restricted access joints",
        "Flanged joints, high-temperature assemblies and double-ended fastening"
      ]
    ],
    footnote: "The boundary between a bolt, a screw and a stud is a matter of convention and of the governing specification, so state the head style, the thread form, the length measurement basis and the mating element in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
