import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium anode basket product detail page. */
const raw: StandardRaw = {
  M: "Titanium Anode Baskets",
  slug: "titanium-baskets",
  hero: {
    eyebrow: "Mesh \u00b7 Perforated \u00b7 Framed \u00b7 Custom Hooks",
    title: "Custom Titanium Anode Baskets for Electroplating & Surface Finishing",
    desc: "Specify titanium anode baskets by grade, basket type, mesh or sheet, frame, hook and current contact. The opening area, the anode loading and the current path are confirmed against your plating line before production.",
    img: "/images/titanium-products/titanium-anode-basket.webp",
    tags: [
      "Plating Line Compatible",
      "Custom Hooks \u00b7 Mesh \u00b7 Frames",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Basket Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material & Condition",
      body: "Grade, UNS reference, the governing sheet or mesh specification and revision, the condition the material is supplied in, and any supplementary requirement the bath chemistry implies."
    },
    {
      title: "Basket Type & Geometry",
      body: "Mesh type, wire or sheet thickness, the opening area, the basket dimensions, the frame arrangement and whether the basket is reinforced for heavy anode loading."
    },
    {
      title: "Hook, Contact & Current Path",
      body: "Hook style and material, the contact surface that carries the current, the busbar it hangs on, and the electrical contact condition the plating line has to achieve."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, the inspection record for the mesh and the frame, the current and contact verification where it is agreed, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-1-titanium-basket.webp",
      alt: "Grade 1 Basket",
      title: "Grade 1 Titanium",
      spec: "UNS R50250 \u00b7 ASTM B265 applicable scope",
      body: "The lower-strength commercially pure grade, used where the basket works as a containment and contact component in a mild bath and the mechanical duty stays low."
    },
    {
      img: "/images/titanium-products/grade-2-titanium-basket.webp",
      alt: "Grade 2 Basket",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 \u00b7 ASTM B265 / B348",
      body: "The general-purpose commercially pure grade for plating, pickling and cleaning baskets, where corrosion resistance in the bath decides the grade rather than load capacity."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-basket.webp",
      alt: "Grade 7 Basket",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 \u00b7 ASTM B265 / B348",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich baths, selected where Grade 2 no longer covers the electrolyte and the mesh has to survive an aggressive medium."
    },
    {
      img: "/images/titanium-products/grade-12-titanium-basket.webp",
      alt: "Grade 12 Basket",
      title: "Grade 12 Titanium",
      spec: "UNS R53400 \u00b7 ASTM B265 / B348",
      body: "Higher-strength titanium for heavy-load, large-tank and reinforced basket duty, where the frame and the welded joints have to carry a real mechanical load."
    }
  ],
  forms: [
    {
      title: "Mesh Anode Basket",
      body: "Woven or expanded titanium mesh used as a soluble anode container, where the opening area decides the current distribution across the anode material inside the basket."
    },
    {
      title: "Perforated Basket",
      body: "Perforated sheet basket used where mechanical strength matters more than open area, typically for heavier anode loading or a bath in which debris has to be retained."
    },
    {
      title: "Framed / Reinforced",
      body: "Framed and reinforced basket for large tanks and heavy duty, where the rim, the seams and the handle have to survive repeated handling and the load of the anode material."
    },
    {
      title: "Custom Hook / Contact",
      body: "Hook and contact design matched to the busbar, the current rating and the plating duty, so that the contact area and the contact surface are chosen together instead of as a default."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Requirement & Line Review",
      body: "Grade, specification revision, condition, basket type, mesh or sheet dimensions, hook style, anode loading and the document scope are read together before any material is cut."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Mesh, Sheet & Frame Material Confirmation",
      body: "The sheet or mesh the basket is made from, its heat identity, its condition and the applicable product specification are confirmed against the quotation before the line is scheduled."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Forming and assembly control",
      title: "Forming, Welding & Assembly Route",
      body: "Forming of the basket body, the seams and the frame welds, the hook attachment and the contact surface are carried out to the route agreed for the basket type and the load."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Mesh, Frame & Contact Inspection",
      body: "Opening area, basket dimensions, weld condition, hook geometry and the contact surface are inspected, and any agreed electrical or third-party check is performed and recorded."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the basket or the label, the certificate index, the protective packing that keeps the mesh undamaged, and the delivery basis are checked before release."
    }
  ],  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/electroplating-line-basket.webp",
      alt: "Electroplating Line",
      title: "Electroplating Line",
      spec: "Confirm the bath, the anode material, the current, the workpiece geometry, the basket size per tank and the rectifier control basis."
    },
    {
      img: "/images/titanium-products/electrowinning-basket.webp",
      alt: "Electrowinning & Refining",
      title: "Electrowinning & Refining",
      spec: "State the electrolyte, the impurities, the cell geometry, the total current, the anode loading per basket and the cathode product."
    },
    {
      img: "/images/titanium-products/surface-finishing-basket.webp",
      alt: "Surface Finishing",
      title: "Surface Finishing",
      spec: "Confirm the finishing chemistry, the agitation, the workpiece handling, the mesh opening that the process needs and the rinsing boundary."
    },
    {
      img: "/images/titanium-products/pickling-cleaning-basket.webp",
      alt: "Pickling & Cleaning",
      title: "Pickling & Cleaning",
      spec: "Define the acid mix, the temperature, the immersion time, the basket compatibility with the chemistry and the waste treatment responsibility."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the sheet or mesh the basket was made from."
    },
    {
      title: "Mesh and dimensional record",
      body: "Measured mesh or sheet thickness, opening area, basket dimensions and frame arrangement, with the measuring method, the sampling plan and the tolerance named."
    },
    {
      title: "Test and inspection",
      body: "Weld condition, hook geometry, contact surface verification, and any third-party or agreed electrical check stated in the scope."
    },
    {
      title: "Document release",
      body: "Required certificate index, traceability level, language, approval route, protective packing specification and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Condition",
      body: "Grade, sheet or mesh specification and revision, condition, heat or lot basis, and the supplementary requirement the bath chemistry implies."
    },
    {
      title: "Basket Type & Geometry",
      body: "Mesh type and thickness, the opening area, the basket dimensions, the frame and reinforcement, and the anode loading the basket has to carry."
    },
    {
      title: "Hook, Contact & Current Path",
      body: "Hook style, contact area and surface condition, the busbar compatibility, and the handling limits that keep the mesh and the contact free of damage."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every basket, which are sampled from the batch, and which electrical or third-party checks belong to the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium anode basket quotation?",
      a: "Provide the grade, the governing specification and revision, the condition, the basket type, the mesh or sheet thickness, the opening area, the basket dimensions, the frame arrangement, the hook style, the anode loading, the inspection, testing and document requirements. A drawing or a tank size with the required basket dimensions is normally needed because a basket is a line component rather than a stock item."
    },
    {
      q: "Which grades can be reviewed for titanium anode baskets?",
      a: "Common enquiries include Grades 1, 2, 7 and 12. Other grades may be reviewed. Availability, source form, condition, mesh specification and the applicable product specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium anode baskets be supplied?",
      a: "Yes, drawing-based baskets can be reviewed against the required type, grade, condition, mesh or sheet, dimensions, frame, hook, current rating and quantity. The accepted fabrication route and the final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, weld or electrical checks and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Is a titanium anode basket the same as a titanium anode?",
      a: "No. The basket is a containment and current-contact component that holds soluble anode material and carries the current into the bath. It carries no mixed metal oxide coating and does not generate the anodic reaction, so it is quoted as a fabricated titanium component rather than as a coated anode."
    },
    {
      q: "Are stock, MOQ and lead time fixed for titanium anode baskets?",
      a: "No. They depend on grade, basket type, mesh specification, dimensions, frame and hook design, anode loading, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Basket Order Basis",
      heading: "State the Basket Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium anode baskets against ASTM B265 and B348. Availability, source form and the fabrication route are confirmed per order."
    },
    evidence: {
      heading: "Specify the Basket Release Package",
      lede: "A material certificate does not describe a basket. The release package states which mesh, opening area, frame and hook readings are measured, how they are sampled, and which documents travel with the basket."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Baskets",
      lede: "Material and condition, basket type and geometry, hook and current path, inspection scope. Each one changes the price and the route more than the grade name does, and each one is written down before a basket is built."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A basket is chosen against the line it runs in, not only against the grade. A plating tank, an electrowinning cell, a finishing bath and a pickling tank are reviewed on different opening area, loading and current conditions, and the order basis follows from that role."
    },
    process: {
      lede: "Baskets are formed, welded, assembled and inspected through qualified partner workshops coordinated for the order. The fabrication route, the hook and contact design and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Forming, frame welding, hook assembly, mesh and frame inspection and protective packing are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade, condition and specification review",
        "Basket type, mesh, dimensions, frame and hook",
        "Loading, current path, inspection and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Basket Inquiry",
      variant: "titanium-baskets"
    }
  }
};raw.catalogSections = [
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
        spec: "UNS R50250 \u00b7 ASTM B265 applicable scope"
      },
      {
        img: "/images/titanium-products/grade-2-titanium-basket.webp",
        alt: "Grade 2 Basket",
        title: "Grade 2 Titanium",
        spec: "UNS R50400 \u00b7 ASTM B265 / B348"
      },
      {
        img: "/images/titanium-products/grade-7-titanium-basket.webp",
        alt: "Grade 7 Basket",
        title: "Grade 7 Titanium",
        spec: "UNS R52400 \u00b7 ASTM B265 / B348"
      },
      {
        img: "/images/titanium-products/grade-12-titanium-basket.webp",
        alt: "Grade 12 Basket",
        title: "Grade 12 Titanium",
        spec: "UNS R53400 \u00b7 ASTM B265 / B348"
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
        label: "Review MMO titanium anodes \u2192"
      }
    ]
  },
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Basket Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Baskets",
    lede: "A basket order always carries the same grade list and the same certificate language, but the fabrication route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Fabrication Route",
        items: [
          {
            title: "Mesh basket against perforated sheet",
            body: "A mesh basket is formed from woven or expanded mesh and closed by welding, so the opening area is a property of the mesh itself, while a perforated basket is cut and formed from sheet, so the opening pattern and the sheet thickness decide the flow area instead."
          },
          {
            title: "Framed against unframed construction",
            body: "A reinforced basket adds a rim, a frame and welded joints so that the load of the anode material and the repeated handling are carried by the frame rather than by the mesh itself, which changes both the route and the inspection set."
          },
          {
            title: "Hook and contact assembly",
            body: "The hook is formed, welded or brazed onto the frame and the contact surface is prepared for the busbar, so the current path is a designed part of the fabrication route instead of a detail added at the plating line."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Mesh damage and torn openings",
            body: "A basket that is handled roughly loses mesh integrity at the seams and around the hook, and a torn opening lets anode material escape into the bath, so the seam and hook condition are part of the acceptance criteria."
          },
          {
            title: "Current concentration at the contact point",
            body: "A small or dirty contact area concentrates the current at one point and produces uneven distribution inside the basket, so the contact area, its surface condition and the cleaning interval belong to the order basis."
          },
          {
            title: "Chemical attack and galvanic coupling",
            body: "A basket in an aggressive bath is attacked from the surface, and a mixed-material assembly can create galvanic coupling at the joint, so the grade, the joint method and the compatibility of the parts have to be chosen together."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Opening area and mesh specification",
            body: "The flow area of a mesh basket is a bought-in characteristic of the mesh, so the mesh type, the wire or sheet thickness and the opening are recorded as supplied rather than measured on the finished basket."
          },
          {
            title: "Weld and seam condition",
            body: "The seams and the frame welds carry the mechanical load and the current path, so they are inspected and recorded as a delivered characteristic with an acceptance criterion attached."
          },
          {
            title: "Hook and contact verification",
            body: "The hook geometry, the contact area and the surface condition are checked against the busbar it has to hang on, and any agreed electrical check is performed before the basket is released."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "One basket against a tank set",
            body: "A plating line is usually supplied as a set matched to the tank size and the number of positions, while a single replacement basket is quoted against the geometry of the item it replaces, so the two orders carry different document scopes."
          },
          {
            title: "Identification and marking",
            body: "Identification is applied to the frame, the label or the packing rather than to the mesh surface, because a mark on the working surface is a defect in a bath where the surface is continuously wetted."
          },
          {
            title: "Protective packing",
            body: "The packing and the separators decide whether the mesh arrives without deformation or a broken weave, so the packing specification is part of the release package rather than an afterthought."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Basket Types Differ from the Adjacent Forms",
    caption: "Mesh basket, perforated basket and framed basket compared on the points that actually change between them.",
    columns: ["Comparison point", "Mesh basket", "Perforated basket", "Framed basket"],
    rows: [
      [
        "Where the flow area comes from",
        "From the woven or expanded mesh itself, so the opening is a characteristic of the purchased mesh and is recorded as supplied",
        "From the perforation pattern cut into the sheet, so the opening and the sheet thickness together set the flow area",
        "From the same body construction as the basket it reinforces, with the frame adding strength without changing the opening area"
      ],
      [
        "Dominant design concern",
        "Current distribution across the anode material inside the basket, because a large open area and a uniform mesh keep the anode working over its whole surface",
        "Mechanical strength and retention, because a perforated sheet survives handling and heavy anode loading where a fine mesh would deform",
        "Load carrying and service life, because the rim, the seams and the handle carry the anode load through repeated handling cycles"
      ],
      [
        "Typical duty",
        "Plating and soluble anode containment in a moderate bath, where the current has to reach the work evenly and the mesh stays lightly loaded",
        "Heavier anode loading, larger tanks or baths in which debris has to be retained inside the basket",
        "Large-tank and heavy-duty lines where the basket is loaded, lifted and re-hung many times per shift"
      ],
      [
        "Order basis emphasis",
        "Mesh type, wire or sheet thickness, opening area, basket dimensions, hook and the anode loading per basket",
        "Sheet thickness, perforation pattern, basket dimensions, hook and the mechanical duty the basket has to survive",
        "Frame and reinforcement arrangement, joint method, hook and contact design, basket dimensions and the service life the line expects"
      ]
    ],
    footnote: "A basket order is named by the duty it performs on the line, not by the grade it is made of. State the grade, the basket type, the mesh or sheet specification, the dimensions, the frame, the hook and contact, the anode loading and the inspection scope in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);