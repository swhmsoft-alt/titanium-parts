import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium wire and welding consumable product detail page. */
const raw: StandardRaw = {
  M: "Titanium Wire",
  slug: "titanium-wire",
  hero: {
    eyebrow: "ASTM B863 · AWS A5.16 Welding Wire & Rod",
    title: "Titanium Wire & Welding Wire Manufacturer — B863, A5.16",
    desc: "Source titanium wire and welding consumables with grade, classification, diameter, condition, surface and supply form reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-wire-manufacturer.webp",
    tags: [
      "ASTM B863 · AWS A5.16",
      "Coil · Spool · Cut Length",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Wire Grades" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material & Classification",
      body: "Grade, UNS number, the governing wire or consumable specification and revision — ASTM B863 for general wire, AWS A5.16 for welding classification — and the condition the order is written against."
    },
    {
      title: "Diameter & Package",
      body: "Wire diameter and tolerance, the temper or condition, and the supply form the order ends on: spooled coil, straight cut length, or a cut and cleaned length for a welding procedure."
    },
    {
      title: "Surface & Cleanliness",
      body: "Whether the wire is drawn, ground, pickled, degreased or annealed, how the surface has to look for the downstream process, and what level of contamination control the end use requires."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, the inspection record for diameter and surface, any third-party or NDT check, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-wire.webp",
      alt: "Grade 2 titanium wire",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B863 / AWS A5.16 ERTi-2",
      body: "Commercially pure titanium for chemical, marine and general service, the usual choice where corrosion resistance and formability decide the grade rather than strength."
    },
    {
      img: "/images/titanium-products/grade-5-ti-6al-4v-wire.webp",
      alt: "Grade 5 titanium wire",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B863 / AWS A5.16 ERTi-5",
      body: "Higher-strength alloy for spring, fastener and forming work, where the wire has to carry a load in addition to resisting the medium."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-wire.webp",
      alt: "Grade 7 titanium wire",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B863",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-23-eli-wire.webp",
      alt: "Grade 23 titanium wire",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM F136 / AWS A5.16",
      body: "Extra-low-interstitial grade for implant and medical device work, where the wire becomes part of a finished device rather than a process consumable."
    }
  ],
  forms: [
    {
      title: "General Wire (B863)",
      body: "Round wire in the annealed or cold-drawn condition, used as feedstock for spring, forming, weaving, medical and general industrial work."
    },
    {
      title: "Welding Wire & Rod (A5.16)",
      body: "ERTi-classified consumable for TIG and MIG welding, reviewed against the base material and the qualified welding procedure it has to support."
    },
    {
      title: "Straight & Cut Wire",
      body: "Straightened or cut-to-length wire for medical, fastener and assembly work, where the straightness and the cut end condition decide how the wire is handled downstream."
    },
    {
      title: "Fine & Precision Wire",
      body: "Fine and ultra-fine wire for sensors, electronics, weaving and device work, where the diameter tolerance and the surface of the wire are the deciding characteristics."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Classification & Diameter Review",
      body: "Grade, classification, diameter, condition, supply form and the specification basis are read together before any feedstock is drawn or annealed for the order."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Feedstock & Condition Confirmation",
      body: "The source rod or billet, the heat identity, the condition and the applicable wire or consumable specification are confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Drawing and surface control",
      title: "Drawing, Annealing & Surface Preparation",
      body: "Drawing to the required diameter, the anneal and the surface treatment are carried out to the approved route, and the surface is prepared to the condition the downstream process needs."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Diameter, Surface & Package Inspection",
      body: "Diameter and ovality, surface condition, straightness and the spool or coil package are checked, and any third-party verification stated in the order is performed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the spool, tag or bundle without contaminating the wire, the certificate index, the package protection and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/welding-fabrication-wire.webp",
      alt: "Welding fabrication wire",
      title: "Welding & Fabrication",
      spec: "Confirm the qualified procedure, the base material, the joint design, the filler classification and any post-weld requirement before the consumable is ordered."
    },
    {
      img: "/images/titanium-products/medical-device-wire.webp",
      alt: "Medical device wire",
      title: "Medical & Implant",
      spec: "Separate ASTM F67 / F136 material conformity from finished-device approval, biological evaluation and sterilization validation, which stay with the device manufacturer."
    },
    {
      img: "/images/titanium-products/electroplating-anodizing-wire.webp",
      alt: "Electroplating and anodizing wire",
      title: "Electroplating & Anodizing",
      spec: "State the tank chemistry, the current range, the wire diameter, the surface condition, the basket use and the change-out method."
    },
    {
      img: "/images/titanium-products/spring-forming-wire.webp",
      alt: "Spring forming wire",
      title: "Spring & Forming",
      spec: "Confirm the mechanical property set, the surface condition, the coiling geometry, any post-form stress relief and the acceptance criterion for the formed part."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the rod or billet the wire was drawn from."
    },
    {
      title: "Dimensional record",
      body: "Measured diameter and ovality, straightness where it applies, and the spool, coil or bundle format, with the measuring method, the sampling and the tolerance named."
    },
    {
      title: "Surface & classification",
      body: "Surface condition, cleanliness, the temper or condition of the wire, and the consumable classification where the order is a welding consumable, with the acceptance criterion written down."
    },
    {
      title: "Document release",
      body: "Required certificate index, traceability level, third-party involvement, marking plan, protective packaging, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Classification",
      body: "Grade, governing wire or consumable specification and revision, condition, and the supplementary requirements the end use implies."
    },
    {
      title: "Diameter & Supply Form",
      body: "Diameter and tolerance, the temper or condition, and whether the order ends on a spooled coil, a straight cut length or a prepared welding length."
    },
    {
      title: "Surface & Cleanliness",
      body: "Drawn, ground, pickled, degreased or annealed surface, the contamination control the end use needs, and how the wire is protected until it is used."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every spool, which are sampled, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium wire quotation?",
      a: "Provide the grade, the governing specification and revision, the classification where the wire is a welding consumable, the diameter and tolerance, the condition, the supply form, quantity, surface requirement, inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a cut-length or formed-wire item."
    },
    {
      q: "Which grades can be reviewed for titanium wire?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, diameter and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium wire be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required grade, classification, diameter, condition, tolerance, straightness, cut length, processing route and quantity. The accepted process and the final scope are stated in the quotation."
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
      q: "Are stock, MOQ and lead time fixed for titanium wire?",
      a: "No. They depend on grade, classification, diameter, condition, surface treatment, supply form, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Wire Order Basis",
      heading: "State the Wire Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium wire against ASTM B863 and AWS A5.16. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Wire Release Package",
      lede: "A material certificate does not describe a drawn wire. The release package states which diameters and surface characteristics are measured, which checks are sampled, and which documents travel with the spool or bundle."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Wire",
      lede: "Classification, diameter and supply form, surface condition, and inspection scope. Each one changes the price more than the grade name does, and each one is written down before any feedstock is drawn."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "Wire is chosen against the process it enters, not only against the grade. A welding consumable, a spring wire and a fine device wire are reviewed on different conditions, and the order basis follows from that role."
    },
    process: {
      lede: "Wire is drawn, annealed, cleaned and packaged in our own facility. The drawing route, the surface treatment and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Drawing, annealing, surface preparation and packaging are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Classification, diameter, supply form and surface scope",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Wire Inquiry",
      variant: "titanium-wire"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Wire Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Wire",
    lede: "Every wire order carries the same grade list and the same certificate language, but the drawing route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Drawing Route",
        items: [
          {
            title: "Consumable against general wire",
            body: "A welding consumable is drawn and cleaned so that it feeds through the torch and fuses cleanly, while general wire is drawn for a downstream mechanical process such as springing or weaving, so the acceptance route and the surface expectation are different even at the same diameter."
          },
          {
            title: "Annealed against cold-drawn condition",
            body: "Annealed wire is supplied soft enough to be formed on the customer's equipment, while a cold-drawn condition is supplied for spring use, so the temper and the mechanical property expectation have to be stated rather than left as a general grade name."
          },
          {
            title: "Spooled, coiled or cut length",
            body: "The same drawn wire can leave the workshop spooled for a welding procedure, coiled for a forming line, or cut and cleaned to length for a specific assembly, and each route adds or removes a handling step that the quotation has to name."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Contamination carried into the weld",
            body: "Titanium welds are sensitive to surface contamination, so oil, grease, drawing compound and handling dust on the wire are a defect rather than a cosmetic issue, and the cleaning and packaging requirements belong in the order basis."
          },
          {
            title: "Hydrogen pickup during annealing",
            body: "Annealing is where hydrogen can enter the material if the atmosphere is not controlled, and the effect is a loss of ductility that appears later at the forming step, so the anneal route and the atmosphere are part of the reviewed scope."
          },
          {
            title: "Straightness loss in handling",
            body: "A spool of fine wire bends and kinks if it is dropped, unwound roughly or stored on end, so the spool format, the coil weight and the packaging method decide whether the wire reaches the next process usable."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Diameter with ovality",
            body: "A drawn wire is characterised by diameter and ovality together, because a wire that is nominally on diameter but out of round behaves differently in a feed mechanism and in a coiling operation, so both are measured."
          },
          {
            title: "Surface appearance as a characteristic",
            body: "For a consumable the surface condition is part of the acceptance, since the picking, the bright finish and the absence of residue are what make the wire usable, so surface is inspected rather than assumed from the material certificate."
          },
          {
            title: "Spool weight and package count",
            body: "The coil weight, the number of packages and the winding direction are measured and confirmed, because they decide how the wire is fed on the customer's line and how many changes a production run needs."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Spool, coil or cut length",
            body: "The order can end on a spool for a welding procedure, a coil for a forming line, or a cut and cleaned length for an assembly, and that choice moves part of the work from our workshop to the customer's line, so it is stated in the quotation."
          },
          {
            title: "Marking that does not contaminate",
            body: "Identification is applied to the spool flange or the bundle tag rather than to the wire itself, because a mark on the wire surface is a defect in a welding or a forming application."
          },
          {
            title: "Protective packaging",
            body: "Wire is packaged so that it stays clean and does not deform between the workshop and the point of use, and the packaging level is part of the release package rather than an afterthought."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Wire Forms Differ from the Adjacent Forms",
    caption: "General wire, welding consumable and fine wire compared on the points that actually change between them.",
    columns: ["Comparison point", "General wire", "Welding consumable", "Fine wire"],
    rows: [
      [
        "How the wire is used",
        "Feeds a downstream mechanical process such as springing, forming or weaving, so it is judged by how it responds to the customer's equipment",
        "Becomes part of the weld, so it is judged by how it fuses, how it feeds through the torch and how clean it stays in storage",
        "Becomes a component of a small assembly, so it is judged by diameter consistency and by how little it interferes with a delicate process"
      ],
      [
        "Dominant material concern",
        "The temper and the mechanical property set, because the wire has to take a forming or coiling operation without splitting",
        "The surface cleanliness, because contamination at the wire surface is what causes porosity and unstable fusion in titanium welding",
        "The diameter tolerance and the surface finish, because at fine dimensions both the stock and the drawing route have less margin for variation"
      ],
      [
        "Dimensional emphasis",
        "Diameter, ovality, straightness and the coil weight on the package",
        "Diameter and the classification, with the surface condition treated as a measured characteristic rather than a description",
        "Diameter within a tight band, with ovality and the absence of kinks or marks becoming the deciding measurements"
      ],
      [
        "Typical application",
        "Spring, fastener, weaving and general industrial feedstock, supplied in coils or cut lengths",
        "TIG and MIG welding of titanium base metal, supplied on spools and matched to a qualified procedure",
        "Sensors, electronics, medical device and fine weaving work, where the wire is handled by the customer's own assembly"
      ]
    ],
    footnote: "A wire order is named by the role the wire plays in the next process, not by the grade it is made from. State the classification, the diameter, the condition, the supply form and the surface requirement in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);




