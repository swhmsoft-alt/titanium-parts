import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-forging product detail page. */
const raw: StandardRaw = {
  M: "Titanium Forgings",
  slug: "titanium-forgings",
  hero: {
    eyebrow: "ASTM B381 · Custom Drawing-Based",
    title: "Custom Titanium Forgings to Drawing & Spec",
    desc: "Source titanium forgings with F-Grade, specification, forging route, heat treatment, allowance and inspection reviewed against your drawing and order requirements.",
    img: "/images/titanium-products/custom-titanium-forgings.webp",
    tags: [
      "Rings · Discs · Shafts · Blocks",
      "Drawing-Based Custom",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Forging Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, forging specification and revision, the section thickness class that applies and any supplementary requirement."
    },
    {
      title: "Geometry",
      body: "The drawing: profile, section thickness, overall dimensions, mass or length target, datum scheme and the surface condition required."
    },
    {
      title: "Route & Allowance",
      body: "Forging route and die class, machining allowance on the surfaces to be finished, heat treatment condition and the inspection level that applies."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat, mechanical test results, ultrasonic inspection record, dimensional report, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-forging.webp",
      alt: "Grade 2 titanium forging",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B381",
      body: "Commercially pure titanium for chemical, marine and general forgings where corrosion resistance and formability decide the grade rather than high strength."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-forging.webp",
      alt: "Grade 5 titanium forging",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B381 / AMS 4928",
      body: "High-strength alloy for aerospace and structural forgings where fatigue performance and section-to-section uniformity are critical."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-forging.webp",
      alt: "Grade 7 titanium forging",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B381",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-23-titanium-forging.webp",
      alt: "Grade 23 titanium forging",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM B381 / F136",
      body: "Extra-low-interstitial Grade 5 chemistry for medical implants and high-performance parts; the conformity scope is stated in the quotation."
    }
  ],
  forms: [
    {
      title: "Forged Ring",
      body: "Forged rings for flanges, hubs and pressure-boundary applications."
    },
    {
      title: "Forged Disc",
      body: "Forged discs for flanges, valve bodies and pressure-vessel components."
    },
    {
      title: "Forged Shaft / Bar",
      body: "Forged shafts, bars and stepped sections for mechanical assemblies."
    },
    {
      title: "Custom Forging",
      body: "Drawing-based custom forging for project-specific geometry and qualification."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Drawing & Requirement Review",
      body: "The drawing, grade, specification, heat treatment condition, inspection level and document scope are read together before a billet is allocated."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Billet Preparation",
      title: "Billet Preparation",
      body: "The bar or billet is cut, heated and scaled for the forging, and the heat identity, condition and chemistry are confirmed against the order."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Die Forging and Heat Treatment",
      title: "Die Forging & Heat Treatment",
      body: "The shape is forged in dies, trimmed and heat treated to the specified condition, with the surface and the allowance left for machining checked on the forging."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Machining and Inspection",
      title: "Machining & Inspection",
      body: "The forging is machined to the drawing, and dimensional, ultrasonic and mechanical checks are performed within the agreed scope."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Part marking, heat or lot traceability, protective packing and the certificate index are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/aerospace-forging.webp",
      alt: "Aerospace Forging",
      title: "Aerospace & High-Performance",
      spec: "Confirm approved specification, source, qualification scope and traceability requirement."
    },
    {
      img: "/images/titanium-products/chemical-pressure-forging.webp",
      alt: "Chemical Forging",
      title: "Chemical & Pressure",
      spec: "Confirm media, temperature, pressure, design code and forging route."
    },
    {
      img: "/images/titanium-products/marine-offshore-forging.webp",
      alt: "Marine Forging",
      title: "Marine & Offshore",
      spec: "Confirm seawater exposure, mechanical loading, NDE and inspection scope."
    },
    {
      img: "/images/titanium-products/medical-implant-forging.webp",
      alt: "Medical Forging",
      title: "Medical Implant",
      spec: "Separate ASTM F67 / F136 conformity from finished-device approval, clinical suitability and sterilization validation."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, heat or lot number and the condition the forging was delivered in."
    },
    {
      title: "Mechanical test results",
      body: "Tensile, yield, elongation and hardness against the specified condition, with the specimen location and the test standard named."
    },
    {
      title: "Ultrasonic inspection record",
      body: "Inspection extent, acceptance class, operator and equipment qualification, and the report reference for the forged shape."
    },
    {
      title: "Dimensional record & release",
      body: "Measured characteristics against the drawing with the method and sampling stated, plus the certificate index, marking plan, packing and delivery timing."
    }
  ],
  controls: [
    {
      title: "Drawing & Grade",
      body: "The governing drawing revision, grade, specification and the heat treatment condition the forging has to meet."
    },
    {
      title: "Route & Allowance",
      body: "Forging route, die class, machining allowance left on the forging and whether the customer finishes the part or the supplier does."
    },
    {
      title: "Inspection Scope",
      body: "Which ultrasonic, mechanical, dimensional and third-party checks are part of the order, and which remain the customer's own."
    },
    {
      title: "Commercial & Delivery",
      body: "Quantity basis, whether blanks or finished parts are supplied, packing, Incoterm and schedule assumptions."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium forging quotation?",
      a: "Provide the drawing, grade, governing specification and revision, heat treatment condition, quantity, the surfaces to be machined, inspection level and document scope. A drawing is the starting point for a custom forging, and the finished mass or the blank mass changes the route."
    },
    {
      q: "Which grades can be reviewed for titanium forgings?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, size and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium forgings be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required geometry, grade, condition, tolerance, machining allowance, processing route and quantity. The accepted process and final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, testing, ultrasonic inspection and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for titanium forgings?",
      a: "No. They depend on grade, source form, condition, size, forging route, heat treatment, machining, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Forging Order Basis",
      heading: "State the Forging Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium forgings against ASTM / ASME / project specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Forging Release Package",
      lede: "A forging certificate does not describe grain flow, the ultrasonic result or the machining allowance. The release package for a forging states which of those are measured, which are witnessed and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Forgings",
      lede: "Drawing revision, route and allowance, inspection scope and commercial basis. Each one changes the price more than the grade name does, and each one is written down before the billet is allocated."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A titanium forging is chosen against the load, the media and the design code that governs the part. Grade, route and inspection scope follow from that service context, not from the section name."
    },
    process: {
      lede: "Forgings are forged, heat treated, machined and inspected through qualified partner workshops coordinated for the order. Route, allowance, inspection scope and documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Forging, heat treatment, machining and inspection are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Drawing, grade and specification review",
        "Forging route, allowance and quantity scope",
        "Machining, inspection and testing requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Forging Inquiry",
      variant: "titanium-forging"
    }
  },
};

raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Forging Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Forgings",
    lede: "Forgings share a shape and a grade list, but the deformation route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is stated on the order basis rather than assumed from the product name.",
    groups: [
      {
        title: "Deformation Route",
        items: [
          {
            title: "Closed-die versus open-die",
            body: "Closed-die forging gives a defined shape and a repeatable grain flow at a production volume; open-die forging is used for large or low-volume shapes where a die set is not justified. The route is a quoting decision driven by shape and quantity."
          },
          {
            title: "Billet and working temperature",
            body: "The billet size, the working temperature and the reduction per pass decide whether the shape fills cleanly. Section thickness, not overall size, is usually the limiting dimension for the route."
          },
          {
            title: "Heat treatment and stress relief",
            body: "Solution treatment, ageing and stress relief are chosen by the specification and by the machining that follows. A forging that will be heavily machined needs a stress-relief route that keeps distortion within the drawing tolerance."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Laps and folds",
            body: "Metal that folds over itself during the first deformation can leave an internal lap that no surface inspection will find. The reduction sequence and the first-pass shape are what prevent it, which is why the route belongs in the order basis."
          },
          {
            title: "Distortion and residual stress",
            body: "Residual stress in a forging moves when material is removed in machining. A drawing tolerance that the forging cannot hold after machining has to be corrected by the route, not by tightening the machining."
          },
          {
            title: "Grain flow and fatigue",
            body: "Fatigue-critical parts are governed by grain flow and surface condition rather than by nominal strength. A defect-free surface, a continuous grain path and a controlled fillet decide the fatigue life of the part."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Ultrasonic coverage",
            body: "Forgings are inspected volumetrically because the defects that decide the part are internal. The extent, the acceptance class and the operator qualification are stated with the order rather than assumed."
          },
          {
            title: "Mechanical test location",
            body: "Test specimens are taken from the forging in the location the specification requires, because a test on the parent material says nothing about the part that was actually made."
          },
          {
            title: "Dimensional report against the drawing",
            body: "The report is written against the drawing's datum scheme and the as-supplied condition, so the customer can compare the delivered part with the drawing without re-interpreting the data."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "As-forged blank",
            body: "The forging is supplied with the machining allowance still on it, ready for the customer's own machining step, with the allowance and the surface condition defined."
          },
          {
            title: "Machined forging",
            body: "The forging is machined to the drawing features under an agreed scope, and the dimensional report covers the machined characteristics and the allowance that remains."
          },
          {
            title: "Stock form for a project",
            body: "Rings, discs, shafts and blocks in the standard size range are supplied against the mill or distributor route, with the condition confirmed at quotation."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Forging Forms Differ from the Adjacent Forms",
    caption: "Rings, discs and shafts compared on the points that actually change between them.",
    columns: ["Comparison point", "Forged ring", "Forged disc", "Forged shaft / bar"],
    rows: [
      [
        "Geometry that governs the order",
        "Inner and outer diameter, radial wall thickness and height, with the bore as the main datum",
        "Outer diameter, thickness, hub and bore geometry, with the face as the main datum",
        "Section profile, overall length, stepped diameters and the concentricity between them"
      ],
      [
        "Dimensional emphasis",
        "Wall thickness variation around the circumference and the parallelism of the faces",
        "Thickness variation across the disc and the flatness of the face after machining",
        "Straightness, runout and the concentricity of the steps to each other"
      ],
      [
        "Inspection emphasis",
        "Ultrasonic coverage of the wall and the forging ratio, which drives the defect probability",
        "Ultrasonic coverage of the disc body and the fillet region around the hub",
        "Ultrasonic coverage along the length and at the shoulder fillets"
      ],
      [
        "Typical application",
        "Flanges, hubs and pressure-boundary rings",
        "Valve bodies, flanges and pressure-vessel components",
        "Shafts, stepped sections and mechanical assemblies"
      ]
    ],
    footnote: "A ring, a disc and a shaft are distinguished by their shape and by the way they are cut from the billet, so state the drawing, the finished mass, the machining allowance and whether the part is supplied as a blank or machined in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
