import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium coil, strip and cut sheet product detail page. */
const raw: StandardRaw = {
  M: "Titanium Coil & Strip",
  slug: "titanium-coil",
  hero: {
    eyebrow: "ASTM B265 Coil \u00b7 Slit Strip \u00b7 Cut Sheet",
    title: "Titanium Coil Manufacturer \u2014 Master Coil & Slit Strip",
    desc: "Specify grade, governing specification, condition, thickness, width, edge, coil ID/OD, unit weight, winding, inspection and documents before comparing quotations.",
    img: "/images/titanium-products/titanium-foil-manufacturer.webp",
    tags: [
      "Master Coil \u00b7 Slit Strip \u00b7 Cut Sheet",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Choose Coil Form" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material & Condition",
      body: "Grade, UNS reference, the governing flat-product specification and revision, the condition the coil is supplied in, and any supplementary requirement the end use implies."
    },
    {
      title: "Flat Profile & Size",
      body: "Thickness and width with tolerance, the delivered length or unit weight, and whether the order ends on a master coil, a slit strip or a cut-to-length sheet."
    },
    {
      title: "Coil Geometry & Edge",
      body: "Coil inner and outer diameter, the winding direction, the edge condition the downstream process needs, and the surface state the coil is delivered in."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, the inspection record for thickness, width and flatness, any third-party or NDT check, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-coil-strip.webp",
      alt: "Grade 2 Titanium Coil",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 \u00b7 ASTM B265 applicable scope",
      body: "Commercially pure titanium for chemical, marine and general service, the usual choice where corrosion resistance and the forming behaviour of flat stock decide the grade rather than strength."
    },
    {
      img: "/images/titanium-products/grade-5-ti-6al-4v-coil.webp",
      alt: "Grade 5 / Ti-6Al-4V Coil",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 \u00b7 ASTM B265 applicable scope",
      body: "Higher-strength alloy for pressure equipment, structural forming and demanding downstream work, where the flat product has to carry a load in addition to resisting the medium."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-coil.webp",
      alt: "Grade 7 Titanium Coil",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 \u00b7 ASTM B265 applicable scope",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media and the strip has to survive an aggressive bath."
    },
    {
      img: "/images/titanium-products/grade-23-eli-coil.webp",
      alt: "Grade 23 ELI Coil",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 \u00b7 ASTM B265 / F136 as ordered",
      body: "Extra-low-interstitial grade for implant and medical device work, where the strip becomes part of a finished device rather than a process feedstock and the interstitial content has to be controlled."
    }
  ],
  forms: [
    {
      title: "Master Coil",
      body: "Continuous flat-rolled material delivered on a coil for the customer's own slitting, cut-to-length or forming line, so the order is defined by width, thickness and coil weight rather than by a piece length."
    },
    {
      title: "Slit Strip",
      body: "Rewound child coils slit to the ordered width for continuous feeding, forming or welding, where edge quality and winding tension decide whether the strip runs through the downstream line without interruption."
    },
    {
      title: "Cut Sheet",
      body: "Flat-rolled sheet cut to length and stacked, used where the downstream operation is a press brake or a machining cell rather than a continuous line, and where flatness of the stack matters more than the coil geometry."
    },
    {
      title: "Thin-Gauge Coil",
      body: "Thin-gauge coil and foil supplied for thin-product, electronic and chemical requirements, where handling damage and surface cleanliness are the dominant risks rather than strength."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Specification & Flat Profile Review",
      body: "Grade, specification revision, condition, thickness, width, coil geometry, edge requirement and the document scope are read together before any coil is slit or cut."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Source Coil & Condition Confirmation",
      body: "The master coil the order is taken from, its heat identity, its condition and the applicable flat-product specification are confirmed against the quotation before the line is scheduled."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Slitting and edge control",
      title: "Slitting, Cut-to-Length & Edge Preparation",
      body: "Slitting to the ordered width, cut-to-length where the order asks for sheet, and the edge preparation and surface protection are carried out to the route agreed in the quotation."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Flatness, Thickness & Surface Inspection",
      body: "Thickness, width, flatness, edge condition and surface state are measured along the delivered length, and any third-party verification stated in the order is performed and recorded."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the coil tag or the bundle, the certificate index, the protective packaging against coil set and surface damage, and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/welded-tube-production-coil.webp",
      alt: "Welded Tube Production",
      title: "Welded Tube Production",
      spec: "Confirm alloy, condition, width, edge, burr, camber, surface cleanliness and the customer's own welding qualification before the strip enters the mill."
    },
    {
      img: "/images/titanium-products/plate-heat-exchanger-coil.webp",
      alt: "Plate Heat Exchangers",
      title: "Plate Heat Exchangers",
      spec: "Confirm drawability, surface, thickness consistency across the width, flatness, edge condition and the component-level forming qualification of the plate."
    },
    {
      img: "/images/titanium-products/electrochemical-hydrogen-coil.webp",
      alt: "Electrochemical & Hydrogen",
      title: "Electrochemical & Hydrogen",
      spec: "Confirm the medium, temperature, the function the formed part has to perform, the surface or coating interface, and the application-specific validation route."
    },
    {
      img: "/images/titanium-products/chemical-processing-coil.webp",
      alt: "Chemical Processing",
      title: "Chemical Processing",
      spec: "Confirm medium, concentration, temperature, fabrication route, design code and where the corrosion responsibility for the finished equipment actually sits."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the master coil the delivered product was taken from."
    },
    {
      title: "Flat product record",
      body: "Measured thickness, width, flatness, edge condition and surface state, with the measuring method, the sampling plan and the tolerance named."
    },
    {
      title: "Test and inspection",
      body: "Mechanical testing, surface or flatness verification, NDT, or third-party checks stated in the agreed scope and recorded against the order."
    },
    {
      title: "Document release",
      body: "Required certificate index, traceability level, language, approval route, protective packaging specification and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Condition",
      body: "Grade, flat-product specification and revision, condition, heat or lot basis, and any supplementary requirement the end use implies."
    },
    {
      title: "Flat Profile & Coil Geometry",
      body: "Thickness and width with tolerance, unit weight or length, coil inner and outer diameter, winding direction and the edge condition required downstream."
    },
    {
      title: "Surface & Handling",
      body: "Surface state and cleanliness, interleaf or protective packing, coil set control, and the handling limits that keep the strip flat and unmarked."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every coil, which are sampled along the length, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium coil quotation?",
      a: "Provide the grade, the governing flat-product specification and revision, the condition, the thickness and width with tolerance, the coil geometry or unit weight, the edge requirement, the supply form (master coil, slit strip or cut sheet), the quantity, the inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a slit strip or a cut-to-length item."
    },
    {
      q: "Which grades can be reviewed for titanium coil?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source coil, condition, thickness, width and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium coil be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required grade, condition, thickness, width, tolerance, coil geometry, edge condition, slitting or cut-to-length route and quantity. The accepted process and the final scope are stated in the quotation."
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
      q: "Are stock, MOQ and lead time fixed for titanium coil?",
      a: "No. They depend on grade, source coil, condition, thickness, width, coil geometry, slitting or cut-to-length route, edge requirement, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Coil Order Basis",
      heading: "State the Coil Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium coil and strip against ASTM B265. Availability, source coil and conversion route are confirmed per order."
    },
    evidence: {
      heading: "Specify the Flat Product Release Package",
      lede: "A material certificate does not describe a coil. The release package states which thicknesses, widths and flatness readings are measured, how they are sampled along the length, and which documents travel with the coil or the bundle."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Coil",
      lede: "Material and condition, flat profile and coil geometry, surface and handling, inspection scope. Each one changes the price and the route more than the grade name does, and each one is written down before a coil is slit or cut."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "Coil is chosen against the process it enters, not only against the grade. A tube mill feed, a plate forming line and a cut-to-length shop floor are reviewed on different flat-profile and edge conditions, and the order basis follows from that role."
    },
    process: {
      lede: "Coil is slitted, cut, edge-prepared and inspected through qualified partner workshops coordinated for the order. The conversion route, the edge treatment and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Slitting, cut-to-length, edge preparation, flatness control and packaging are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade, condition and specification review",
        "Thickness, width, coil geometry, edge and supply form",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Coil Inquiry",
      variant: "titanium-coil"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Coil Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Coil",
    lede: "A coil order always carries the same grade list and the same certificate language, but the conversion route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Conversion Route",
        items: [
          {
            title: "Master coil against slit strip",
            body: "A master coil is delivered for the customer to convert on its own line, so the order is judged by width, thickness and coil weight, while a slit strip is already cut to width and rewound, so the order is judged by edge quality and winding tension."
          },
          {
            title: "Slitting against cut-to-length",
            body: "Slitting serves a continuous line where the strip must feed without interruption, while cut-to-length serves a forming cell or a machining shop where the flatness of the stacked sheet matters more than the coil geometry, so the two routes are quoted separately."
          },
          {
            title: "Thin-gauge handling",
            body: "At thin gauges the material is dominated by handling rather than by strength, so interleaf, protective packing and the coil set control become part of the route instead of being treated as packing details added at the end."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Burr and edge damage at slitting",
            body: "A slit edge that carries a burr or a sharp break tears the downstream product rather than the coil itself, so the edge condition and the deburring route belong in the order basis and in the acceptance criteria."
          },
          {
            title: "Coil set and flatness loss",
            body: "Flat-rolled material stores bending energy, and a coil that is handled roughly or stored on its edge delivers a strip with a set that makes forming inconsistent, so the packing and the storage orientation are stated rather than assumed."
          },
          {
            title: "Surface contamination and handling marks",
            body: "Titanium surfaces carry the fingerprint of every contact they take, and in chemical or electrolytic service a contaminated or marked surface is a defect, so the surface state and the interleaf requirement are written into the order."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Thickness across the width",
            body: "A coil is judged by the thickness profile across the width as well as by the nominal reading, because a forming operation follows the profile and a plate that is on nominal at the centre can still fail at the edges."
          },
          {
            title: "Flatness and camber",
            body: "Flatness and camber are measured rather than assumed, since they decide whether the sheet can be blanked, formed or machined without the part springing back differently from the drawing."
          },
          {
            title: "Edge condition as a recorded characteristic",
            body: "For a slit strip the edge is a delivered characteristic with its own acceptance criterion, so it is inspected and reported instead of being treated as a by-product of the slitting operation."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Coil, strip or stacked sheet",
            body: "The order can end on a master coil for the customer's own line, a slit strip for continuous feeding, or a cut sheet for a forming cell, and that choice moves part of the work from our workshop to the customer's floor, so it is stated in the quotation."
          },
          {
            title: "Marking on the tag",
            body: "Identification is applied to the coil tag or the bundle rather than to the strip surface, because a mark on the surface is a defect in a forming or an electrolytic application."
          },
          {
            title: "Protective packing and coil set control",
            body: "The packing level, the interleaf and the way the coil is supported decide whether the material arrives flat and unmarked, so the packing specification is part of the release package rather than an afterthought."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Coil Forms Differ from the Adjacent Forms",
    caption: "Master coil, slit strip and cut sheet compared on the points that actually change between them.",
    columns: ["Comparison point", "Master coil", "Slit strip", "Cut sheet"],
    rows: [
      [
        "Where the conversion happens",
        "At the customer's own line, so the delivered form is the raw input for slitting, cut-to-length or forming and the order is judged by width, thickness and coil weight",
        "At our line before delivery, so the strip arrives already at the ordered width and rewound for continuous feeding",
        "At our line before delivery, so the sheet arrives flat and stacked and the customer works with discrete pieces rather than a continuous strip"
      ],
      [
        "Dominant material concern",
        "The flat profile and the coil set, because the material is still going to be converted and its stored bending energy follows the customer into the next operation",
        "The edge condition and the winding tension, because the strip has to feed through a continuous line without tearing or jamming",
        "The flatness of the stacked sheet, because the part is formed or machined on a machine bed rather than fed from a reel"
      ],
      [
        "Dimensional emphasis",
        "Thickness across the width, width, coil weight, coil inner and outer diameter and the winding direction",
        "The same flat profile measured after slitting, plus the slit edge condition, the burr requirement and the child coil weight",
        "Length and squareness of the cut piece on top of the thickness and flatness, with the stacking and support method stated"
      ],
      [
        "Typical application",
        "Feedstock for a customer's own tube mill, slitting line or forming press, where the customer keeps the conversion step in-house",
        "Continuous feeding into a welded tube line, a forming line or a welding operation that needs a constant width",
        "Press-brake forming, laser or machining blank work, and fabrication where discrete flat parts are produced downstream"
      ]
    ],
    footnote: "A coil order is named by the conversion route it belongs to, not by the grade it is made from. State the grade, the condition, the thickness and width, the supply form, the edge requirement and the inspection scope in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
