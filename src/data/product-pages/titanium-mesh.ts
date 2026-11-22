import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium mesh product detail page. */
const raw: StandardRaw = {
  M: "Titanium Mesh",
  slug: "titanium-mesh",
  hero: {
    eyebrow: "Woven · Expanded · Perforated · Welded",
    title: "Titanium Mesh Manufacturer — Woven, Expanded & Fabricated",
    desc: "Source titanium mesh with mesh type, grade, feedstock standard, geometry, overall size and fabrication reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-mesh-manufacturer.webp",
    tags: [
      "Woven · Expanded · Perforated · Welded",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Mesh Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, the governing mesh or sheet specification and revision, condition, and any supplementary requirement the end use implies."
    },
    {
      title: "Mesh Type & Geometry",
      body: "Whether the order is woven, expanded, perforated or welded, and for each of those the defining geometry: mesh count and wire diameter for woven, SWD and LWD for expanded, hole pattern and pitch for perforated, spacing and panel size for welded."
    },
    {
      title: "Panel & Edge Condition",
      body: "Overall panel width and length, the cut or sheared edge condition, the amount of trimmed material at the edges, flatness of the panel, and whether the mesh is supplied flat, rolled or cut to shape."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, the inspection record for aperture, wire diameter and open area, any third-party or NDT check, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-wire-mesh.webp",
      alt: "Grade 2 titanium mesh",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B265 / B863 feedstock",
      body: "Commercially pure titanium for chemical, marine and general service where corrosion resistance and formability decide the grade rather than strength."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-mesh.webp",
      alt: "Grade 5 titanium mesh",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B265 / B863 feedstock",
      body: "Higher-strength alloy for expanded and perforated mesh where the strand or the perforated sheet has to carry load as well as resist the medium."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-mesh.webp",
      alt: "Grade 7 titanium mesh",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B265 / B863 feedstock",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-23-eli-mesh.webp",
      alt: "Grade 23 titanium mesh",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM B265 / B863 / F136",
      body: "Extra-low-interstitial grade for medical filtration and device work, where the mesh becomes part of a finished product rather than a process component."
    }
  ],
  forms: [
    {
      title: "Woven Mesh",
      body: "Square or plain weave built from crimped or plain wire, where the mesh count, the wire diameter and the aperture together fix the open area and the filtration behaviour."
    },
    {
      title: "Expanded Mesh",
      body: "Sheet opened into a diamond pattern by slitting and stretching, where SWD, LWD, strand width and open area define the geometry and the stiffness of the panel."
    },
    {
      title: "Perforated Sheet",
      body: "Sheet with a punched hole pattern, where the hole shape, the pitch, the open area and the border margin decide how the panel behaves under load."
    },
    {
      title: "Welded Mesh",
      body: "Wire intersections joined by welding rather than weaving, where the spacing, the panel size and the surface condition decide how the panel is handled and framed."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Type, Count & Aperture Review",
      body: "Mesh type, mesh count, wire diameter, aperture, panel size and the specification basis are read together before any wire or sheet is committed to the order."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Feedstock & Forming Route Confirmation",
      body: "Whether the mesh starts from wire or from sheet, the condition, heat identity and the applicable mesh or sheet specification are confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Forming and edge control",
      title: "Weaving, Expanding & Edge Preparation",
      body: "Weaving, expanding, punching or welding is carried out to the approved geometry, and the cut edge, the trimmed margin and the panel flatness are controlled to the agreed scope."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Aperture, Count & Panel Inspection",
      body: "Mesh count, wire diameter, aperture or hole size, open area, strand width and panel dimensions are measured, and any third-party check stated in the order is performed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the panel without obscuring the mesh opening, protection of the cut edges against handling damage, the certificate index and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/electrochemical-anode-mesh.webp",
      alt: "Electrochemical anode mesh",
      title: "Electrochemical Anode Substrate",
      spec: "Confirm the bare substrate geometry against the finished coating system, the active area, the loading and the service conditions before the mesh is cut."
    },
    {
      img: "/images/titanium-products/chemical-filtration-mesh.webp",
      alt: "Chemical filtration mesh",
      title: "Filtration & Separation",
      spec: "State the medium, the retention requirement, the aperture, the flow behaviour, the temperature and the mechanical loading the panel has to carry."
    },
    {
      img: "/images/titanium-products/architectural-decorative-mesh.webp",
      alt: "Architectural decorative mesh",
      title: "Architectural & Decorative",
      spec: "Confirm the visual criteria, the panel flatness, the framing interface and the long-term surface stability expected of the exposed titanium."
    },
    {
      img: "/images/titanium-products/medical-bioprocessing-mesh.webp",
      alt: "Medical bioprocessing mesh",
      title: "Medical & Bioprocessing",
      spec: "Separate raw-material conformity from finished-device approval, biological evaluation and sterilization validation, which stay with the device manufacturer."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the wire or sheet the mesh was produced from."
    },
    {
      title: "Geometric record",
      body: "Measured mesh count, wire diameter, aperture or hole size, open area and panel dimensions, with the measuring method, the sampling and the tolerance named."
    },
    {
      title: "Test and inspection",
      body: "Surface condition, any NDT or third-party check stated in the agreed scope, and the acceptance criterion written down rather than assumed."
    },
    {
      title: "Document release",
      body: "Required certificate index, traceability level, marking plan, protective packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Specification",
      body: "Grade, governing mesh or sheet specification and revision, condition, and the supplementary requirements the end use implies."
    },
    {
      title: "Type & Defining Geometry",
      body: "Woven, expanded, perforated or welded, and for that type the mesh count, wire diameter, aperture or hole pattern that the order is actually about."
    },
    {
      title: "Panel & Edge Condition",
      body: "Panel size, cut edge, trimmed margin, flatness, and whether the mesh ships flat, rolled or cut to a shape."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every panel, which are sampled, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium mesh quotation?",
      a: "Provide the mesh type, grade, governing specification and revision, the defining geometry such as mesh count, wire diameter, aperture or hole pattern, the panel size, quantity, edge condition, inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a shaped or cut panel."
    },
    {
      q: "Which grades can be reviewed for titanium mesh?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, feedstock form, condition, size and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium mesh be supplied?",
      a: "Yes, drawing-based panels can be reviewed against the required type, grade, geometry, aperture, panel size, edge condition and quantity. The accepted process and the final scope are stated in the quotation."
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
      q: "Are stock, MOQ and lead time fixed for titanium mesh?",
      a: "No. They depend on grade, mesh type, feedstock form, condition, geometry, panel size, edge condition, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Mesh Order Basis",
      heading: "State the Mesh Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium mesh against the applicable wire, sheet and mesh specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Mesh Release Package",
      lede: "A material certificate does not describe a woven, expanded or perforated panel. The release package states which geometric characteristics are measured on every panel, which checks are sampled, and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Mesh",
      lede: "Mesh type, defining geometry, panel condition and inspection scope. Each one changes the price more than the grade name does, and each one is written down before any wire or sheet is committed."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "Mesh is chosen against the medium, the aperture requirement and the panel it has to survive in service. Type, geometry, edge condition and inspection scope follow from that context, not from the product name."
    },
    process: {
      lede: "Mesh is woven, expanded, punched or welded in our own facility. The forming route, the edge preparation and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Forming, edge preparation and geometric inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Mesh type, defining geometry and panel condition scope",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Mesh Inquiry",
      variant: "titanium-mesh"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Mesh Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Mesh",
    lede: "Every mesh order carries the same grade list and the same certificate language, but the forming route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Forming Route",
        items: [
          {
            title: "Woven from wire or expanded from sheet",
            body: "A woven panel is built from crimped or plain wire interlaced to a mesh count, while expanded and perforated panels start from sheet that is slit, stretched or punched, so the feedstock and the tooling are decided before the geometry is."
          },
          {
            title: "Welded intersections against interlaced ones",
            body: "A welded panel joins the wires at their crossings with a spot weld, which fixes the spacing and keeps the panel dimensionally stable, whereas a woven panel keeps its structure from the weave itself and behaves differently under handling."
          },
          {
            title: "Cut edge against formed edge",
            body: "Sheet-derived panels carry a sheared or punched edge, and woven panels are cut at the trimming line, so the edge condition, the trimmed margin and the burr expectation are quoted rather than left to the fabrication route."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Aperture drift under load",
            body: "The open area of a panel changes when the mesh is stretched, framed or pressed, and a filtration duty stated on the nominal aperture can be lost once the panel is tensioned, so the loading condition belongs in the order basis."
          },
          {
            title: "Contamination in the crevice",
            body: "In a wet service the crevice where two wires cross, or where a strand meets the sheet edge, is where attack and fouling start, so the medium, the surface condition and the passivation state are quoted together with the geometry."
          },
          {
            title: "Handling damage at the cut edge",
            body: "A mesh panel is light and easily bruised, so the cut edge and the corner of a large panel are where damage appears first and where the packing method has to protect the material rather than just contain it."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Count and aperture together",
            body: "A woven panel is characterised by mesh count and wire diameter, which together fix the aperture, so both are measured and reported rather than an aperture quoted on its own."
          },
          {
            title: "SWD and LWD for expanded mesh",
            body: "An expanded panel is characterised by the short and long diagonal of the diamond, and by the strand width and open area, so those are the characteristics that are measured instead of a nominal mesh size."
          },
          {
            title: "Hole pattern and border margin",
            body: "A perforated panel is characterised by the hole shape, the pitch and the margin left at the border, and the border is measured as a separate characteristic because it is where a cut is most likely to be needed."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Flat, rolled or cut to shape",
            body: "A large panel can be supplied flat, rolled for handling, or cut to a shaped outline, and that choice moves part of the work from our workshop to the installation, so it is stated in the quotation."
          },
          {
            title: "Marking away from the opening",
            body: "Identification is marked on the panel margin or on the wire itself where it does not obstruct the open area, because a marking that blocks the aperture changes how the panel performs."
          },
          {
            title: "Loose panel versus framed assembly",
            body: "The order can end at loose panels delivered for site framing, or extend to a framed assembly where the mesh is tensioned and fixed here, and that boundary changes both the handling scope and the inspection scope."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Mesh Types Differ from the Adjacent Forms",
    caption: "Woven, expanded and welded mesh compared on the points that actually change between them.",
    columns: ["Comparison point", "Woven mesh", "Expanded mesh", "Welded mesh"],
    rows: [
      [
        "How the panel works",
        "Interlaces wire to a mesh count, so the aperture is defined by count and wire diameter and the panel keeps its structure from the weave",
        "Opens a sheet by slitting and stretching it, so the diamond pattern and the open area are set by the expansion tool and the sheet thickness",
        "Joins wire intersections by welding, so the spacing stays fixed and the panel resists being pulled out of shape"
      ],
      [
        "Dominant material concern",
        "Wire drawn and bent at every crossing, so the work-hardening of the crimp and the stiffness of the wire decide the behaviour",
        "Strands stretched from the sheet, so the elongation of the strand and the tearing of the slot decide the strength of the panel",
        "Weld nuggets at every crossing, so the heat-affected area around the join and the corrosion behaviour of that area decide the durability"
      ],
      [
        "Dimensional emphasis",
        "Mesh count, wire diameter and the resulting aperture across the panel",
        "SWD, LWD, strand width and open area, with the sheet thickness setting the height of the strand",
        "Spacing in both directions, the panel size and the condition of the welded crossings"
      ],
      [
        "Typical application",
        "Filtration, screening and separation duties where the aperture has to be repeatable across the panel",
        "Architectural, guarding and screening work where an open pattern and a stable sheet edge are wanted",
        "Reinforcing and guarding panels where the grid has to hold its shape against handling and impact"
      ]
    ],
    footnote: "A mesh is named by the way its openings are made, not by the grade it is made from. State the type, the defining geometry, the panel size and the edge condition in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);




