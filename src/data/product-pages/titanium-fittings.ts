import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium pipe fitting product detail page. */
const raw: StandardRaw = {
  M: "Titanium Pipe Fittings",
  slug: "titanium-fittings",
  hero: {
    eyebrow: "ASTM B363 · ASME B16.9",
    title: "Titanium Pipe Fittings Manufacturer — Elbows, Tees, Reducers",
    desc: "Source titanium pipe fittings with type, grade, NPS/DN, wall, end preparation and inspection reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-pipe-fittings.webp",
    tags: [
      "Elbows · Tees · Reducers",
      "ASME B16.9 · B363",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Fitting Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, the governing fitting specification and revision, condition, and any supplementary requirement the end use implies."
    },
    {
      title: "Fitting Type & Geometry",
      body: "Elbow angle and bend radius, tee branch geometry, reducer orientation, NPS/DN, wall or schedule, centre-to-end and centre-to-face dimensions, and the tolerances the drawing allows."
    },
    {
      title: "End Preparation & Wall",
      body: "Butt-weld bevel angle and root face, mating pipe outside diameter and wall, and whether the fitting is supplied bevelled or plain for later preparation."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, dimensional record against the applicable dimension standard, any NDT or third-party check, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-fitting.webp",
      alt: "Grade 2 titanium fitting",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B363 / ASME B16.9",
      body: "Commercially pure titanium for chemical, marine and general service where corrosion resistance and formability decide the grade rather than strength."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-fitting.webp",
      alt: "Grade 5 titanium fitting",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B363 / ASME B16.9",
      body: "Higher-strength alloy for pressure and hydraulic service where the wall has to carry the load at a reduced section."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-fitting.webp",
      alt: "Grade 7 titanium fitting",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B363 / ASME B16.9",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-12-titanium-fitting.webp",
      alt: "Grade 12 titanium fitting",
      title: "Grade 12 Titanium",
      spec: "UNS R53400 · ASTM B363 / ASME B16.9",
      body: "Nickel-free grade for seawater and chlor-alkali duty where the order must exclude nickel-bearing material."
    }
  ],
  forms: [
    {
      title: "Elbows",
      body: "45° and 90° elbows in long-radius and short-radius geometry, where the bend radius and the angle decide the pressure loss and the layout of the mating pipe."
    },
    {
      title: "Tees",
      body: "Equal and reducing tees for branch connections, where the branch reinforcement and the branch wall decide whether the branch is welded in or machined from solid."
    },
    {
      title: "Reducers",
      body: "Concentric and eccentric reducers for diameter transitions, where the orientation decides whether the line stays level or the bottom of the pipe stays continuous."
    },
    {
      title: "Caps / Stub Ends",
      body: "Pipe caps, lap-joint stub ends and drawing-based fittings for end closure, branch take-off and tie-in points."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Type, Radius & Dimension Review",
      body: "Fitting type, angle, bend radius, branch geometry, end preparation, the dimension standard and the document scope are read together before any tube is cut."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Forming Route Confirmation",
      body: "The seamless tube or forged source, condition, heat identity and the applicable fitting specification are confirmed against the quotation before forming starts."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Forming and End Preparation",
      title: "Forming, Machining & End Preparation",
      body: "Bending or forging, machining of the branch and the sealing face, and the bevel of the butt-weld ends are controlled to the approved route and the agreed wall allowance."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Dimensional & Surface Inspection",
      body: "Centre-to-end, angle, wall thickness, ovality and end condition are measured, and any NDT or third-party verification stated in the order is performed in the agreed scope."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the body without damaging the sealing face, protection of the machined ends, the certificate index and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/chemical-piping-fitting.webp",
      alt: "Chemical piping fitting",
      title: "Chemical Piping",
      spec: "Confirm media, concentration, temperature, pressure, the design code in force, and whether the branch is welded in or machined."
    },
    {
      img: "/images/titanium-products/marine-piping-fitting.webp",
      alt: "Marine piping fitting",
      title: "Marine & Offshore Piping",
      spec: "Confirm seawater, splash zone, fouling, the joint type and the inspection regime that applies to the weld."
    },
    {
      img: "/images/titanium-products/pharma-food-fitting.webp",
      alt: "Pharma and food fitting",
      title: "Pharma & Food-Grade",
      spec: "State surface condition, cleaning and sterilization regime, traceability and who owns the final assembly responsibility."
    },
    {
      img: "/images/titanium-products/power-desalination-fitting.webp",
      alt: "Power and desalination fitting",
      title: "Power & Desalination",
      spec: "Confirm temperature, pressure, cycle count, design code and the corrosion allowance carried in the wall."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the tube or forging the fitting was made from."
    },
    {
      title: "Dimensional record",
      body: "Measured angle, centre-to-end, wall thickness and ovality, with the dimension standard, the measuring method and the sampling named."
    },
    {
      title: "Test and inspection",
      body: "Surface condition, bevel geometry and any NDT or third-party check stated in the agreed scope, with the acceptance criterion written down."
    },
    {
      title: "Document release",
      body: "Required certificate index, third-party involvement, marking plan, protective packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Specification",
      body: "Grade, governing specification and revision, condition, and the supplementary requirements the end use implies."
    },
    {
      title: "Geometry & Wall",
      body: "Type, angle, bend radius, branch geometry, NPS/DN, wall or schedule, and the dimension standard the fitting is made against."
    },
    {
      title: "End Preparation",
      body: "Bevel angle and root face, mating pipe outside diameter and wall, and whether the ends arrive bevelled or plain."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every fitting, which are sampled, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium pipe fitting quotation?",
      a: "Provide the fitting type, grade, governing specification and revision, NPS/DN, wall or schedule, angle or branch geometry, end preparation, quantity, and the inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a non-standard radius or a branch taken off at an angle."
    },
    {
      q: "Which grades can be reviewed for titanium pipe fittings?",
      a: "Common enquiries include Grades 2, 5, 7 and 12. Other grades may be reviewed. Availability, source form, condition, size and applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium fittings be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required geometry, grade, condition, wall, machining allowance, forming route, end preparation and quantity. The accepted process and final scope are stated in the quotation."
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
      q: "Are stock, MOQ and lead time fixed for titanium pipe fittings?",
      a: "No. They depend on grade, source form, condition, size, wall, forming route, end preparation, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Fitting Order Basis",
      heading: "State the Fitting Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium pipe fittings against ASTM B363 and ASME B16.9. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Fitting Release Package",
      lede: "A material certificate does not describe a formed fitting. The release package states which dimensions are measured on every fitting, which checks are sampled, and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Pipe Fittings",
      lede: "Type and radius, wall, end preparation and inspection scope. Each one changes the price more than the grade name does, and each one is written down before the tube is cut."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A fitting is chosen against the medium, the pressure and the joint it sits in. Grade, wall, radius, end preparation and inspection scope follow from that service context, not from the product name."
    },
    process: {
      lede: "Fittings are formed, machined and inspected through qualified partner workshops coordinated for the order. The forming route, the machining scope and the documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Forming, end preparation and dimensional inspection are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Fitting type, radius, wall and end preparation scope",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Fitting Inquiry",
      variant: "titanium-fitting"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Fitting Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Pipe Fittings",
    lede: "Every fitting carries the same grade list and the same certificate language, but the bend route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Forming Route",
        items: [
          {
            title: "Bend versus forged body",
            body: "An elbow is commonly taken from a seamless tube and bent, while a tee or a reducer body is machined or forged, so the wall in the bend and the wall at the branch are produced by different routes and carry different allowance."
          },
          {
            title: "Long radius versus short radius",
            body: "The radius changes how the pipe is bent and how much straight length is consumed, and a short-radius elbow in the same nominal size leaves less room for the mating pipe, which is a layout decision as much as a dimensional one."
          },
          {
            title: "Branch reinforcement",
            body: "A reducing tee has to carry the branch load at the opening, so the reinforcement around the branch and the transition from the run decide whether the body is machined from solid, fabricated from two runs and a stub, or supplied as a weldment."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Thinning on the bend",
            body: "Bending stretches the outer wall of a tube, so the wall at the bend is thinner than the nominal wall and the minimum wall is the number the design has to accept, not the wall at the plain end."
          },
          {
            title: "Ovality and bore distortion",
            body: "Forming pulls the bore out of round, and a bore that is no longer round does not seal the same way against a gasket or a mating flange, so the bore condition is quoted together with the end preparation."
          },
          {
            title: "Crevice corrosion at the branch",
            body: "In a wet service the crevice where a branch meets the run is where the attack starts, so the medium, the surface condition and the passivation state are quoted together with the geometry rather than added afterwards."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Centre-to-end against overall length",
            body: "A fitting is dimensioned by the centre-to-end and centre-to-face distances that set the run length, and by the angle, so those are the characteristics that are measured instead of a stock length."
          },
          {
            title: "Wall at the bend",
            body: "Where the wall thins during forming, the gauge is taken at the named location on the bend and the minimum wall is reported as a separate characteristic, because a nominal wall on the certificate does not describe the bend."
          },
          {
            title: "Bevel and end condition",
            body: "The butt-weld ends are inspected as delivered — bevel angle, root face and surface condition — because a mismatched end preparation is found at the welding station rather than in the workshop."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Bevelled or plain ends",
            body: "A fitting can arrive bevelled to the agreed angle and root face or plain for preparation on site, and the choice moves part of the work from our workshop to the installation, so it is stated in the quotation."
          },
          {
            title: "Marking on the body",
            body: "Identification is marked on the body without damaging the sealing face or the machined end, and the marking content — grade, specification, size, heat or lot — is part of the release package rather than an afterthought."
          },
          {
            title: "Loose items versus weldment",
            body: "The order can end at loose fittings delivered for site welding, or extend to a prefabricated assembly where the welds are made and inspected here, and that boundary changes both the welding scope and the test scope."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Pipe Fitting Types Differ from the Adjacent Forms",
    caption: "Elbows, tees and reducers compared on the points that actually change between them.",
    columns: ["Comparison point", "Elbow", "Tee", "Reducer"],
    rows: [
      [
        "How the part works",
        "Changes the direction of the line by a fixed angle, so the bend radius governs how much length the run consumes",
        "Splits the line into a run and a branch, so the branch opening has to be reinforced against the run",
        "Transitions the line between two diameters, so the orientation decides whether the pipe stays level or keeps its bottom"
      ],
      [
        "Dominant material concern",
        "Thinning of the outer wall on the bend and the resulting loss of ovality in the bore",
        "Stress concentration at the branch opening and the wall transition into the run",
        "Wall thinning where the cone is formed and the flow disturbance at the step between the two diameters"
      ],
      [
        "Dimensional emphasis",
        "Angle, centre-to-end and centre-to-face distances, and the minimum wall at the bend",
        "Run size, branch size, the reinforcement around the branch and the centre-to-face dimension",
        "Large and small end sizes, the orientation, and the length of the straight transition"
      ],
      [
        "Typical application",
        "Direction change between fixed equipment and process runs in chemical and marine piping",
        "Branch take-off for instruments, utilities and cleaning lines on a process header",
        "Pump discharge and header transitions where one diameter has to meet another without an elbow"
      ]
    ],
    footnote: "A fitting is named by the geometry it changes, not by the grade it is made from. State the type, the angle or branch geometry, the wall, the end preparation and the mating pipe in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
