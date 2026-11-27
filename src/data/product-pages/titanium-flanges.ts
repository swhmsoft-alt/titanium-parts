import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium pipe flange product detail page. */
const raw: StandardRaw = {
  M: "Titanium Pipe Flanges",
  slug: "titanium-flanges",
  hero: {
    eyebrow: "ASTM B381 · ASME B16.5 · B16.47",
    title: "Custom Titanium Flange Manufacturer — Forged In-House",
    desc: "Source titanium flanges with type, grade, NPS/DN, pressure class, face and dimensional standard reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-pipe-flange.webp",
    tags: [
      "Weld Neck · Slip-On · Blind",
      "Forged In-House",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Flange Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, the governing flange specification and revision, condition, and any supplementary requirement the end use implies."
    },
    {
      title: "Type, Class & Dimensions",
      body: "Flange type, pressure rating class or PN designation, NPS/DN, facing type, bolt circle and the dimensional standard the flange is made against."
    },
    {
      title: "Weld End & Bore",
      body: "Weld-neck taper, bore diameter, the mating pipe schedule, and whether the bore is stepped or straight for the specified joint."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, dimensional and NDT records, marking content, protective packing and the release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-flange.webp",
      alt: "Grade 2 titanium flange",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B381 / ASME B16.5",
      body: "Commercially pure titanium for chemical and marine service, where corrosion resistance of the forged body decides the grade rather than pressure capability."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-flange.webp",
      alt: "Grade 5 titanium flange",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B381 / AMS 4928",
      body: "Higher-strength alloy for pressure classes where the flange hub carries a higher load and the forging has to hold more than corrosion resistance alone."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-flange.webp",
      alt: "Grade 7 titanium flange",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 · ASTM B381",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the media."
    },
    {
      img: "/images/titanium-products/grade-12-titanium-flange.webp",
      alt: "Grade 12 titanium flange",
      title: "Grade 12 Titanium",
      spec: "UNS R53400 · ASTM B381",
      body: "Nickel-free grade for seawater and chlor-alkali duty where the order must exclude nickel-bearing material."
    }
  ],
  forms: [
    {
      title: "Weld Neck",
      body: "Tapered hub flanges welded to the pipe, where the weld carries the load and the bore must match the pipe schedule exactly."
    },
    {
      title: "Slip-On",
      body: "Hubs that slip over the pipe and are clamped by the bolt load, so the joint depends on the pipe surface and the bore fit rather than on a weld."
    },
    {
      title: "Blind",
      body: "Solid discs without a bore, used for closing a line, blanking a header and for pressure-test boundaries."
    },
    {
      title: "Custom / Drawing",
      body: "Drawing-based flanges for a project-specific diameter, bolt pattern, facing or hub length that the standard tables do not cover."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Type, Class & Dimension Review",
      body: "Flange type, rating class, facing, bore, bolt pattern, dimensional standard and document scope are read together before the forging order is placed."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Forging Route Confirmation",
      body: "The forging source, grade, condition, heat identity and the applicable flange specification are confirmed against the quotation before the blank is formed."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Machining and Surface Control",
      title: "Machining, Facing & Weld Preparation",
      body: "The body is machined to the face, hub and bore dimensions, and the weld end is prepared to the agreed taper and bevel so that the joint matches the pipe it welds to."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Dimensional, NDT & Pressure Records",
      body: "Face, thickness, bolt circle, bore and taper are measured, and any NDT or third-party verification stated in the order is performed in the agreed scope."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Stamped or etched identification clear of the sealing face, protection of the machined face, the certificate index and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/chemical-flange.webp",
      alt: "Chemical process flange",
      title: "Chemical & Process",
      spec: "Confirm media, temperature, pressure, the design code in force and the corrosion allowance carried in the flange thickness."
    },
    {
      img: "/images/titanium-products/marine-offshore-flange.webp",
      alt: "Marine and offshore flange",
      title: "Marine & Offshore",
      spec: "Confirm seawater exposure, galvanic compatibility with the bolting, the joint type and the inspection regime."
    },
    {
      img: "/images/titanium-products/power-desalination-flange.webp",
      alt: "Power and desalination flange",
      title: "Power & Desalination",
      spec: "State temperature, pressure, cycle, design code and the qualification scope that the class has to satisfy."
    },
    {
      img: "/images/titanium-products/pharma-food-flange.webp",
      alt: "Pharma and food flange",
      title: "Pharma & Food",
      spec: "Confirm surface condition, cleaning, sterilization, traceability and the final assembly responsibility."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the forging the flange was machined from."
    },
    {
      title: "Dimensional record",
      body: "Measured face diameter, thickness, bolt circle, bore and hub dimensions, with the standard, the measuring method and the sampling named."
    },
    {
      title: "Test and inspection",
      body: "Any NDT, hydrostatic or third-party verification stated in the agreed scope, with the acceptance criterion written down."
    },
    {
      title: "Document release",
      body: "Required certificate index, third-party involvement, marking content, protective packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Specification",
      body: "Grade, governing specification and revision, condition, and the supplementary requirements the end use implies."
    },
    {
      title: "Type, Class & Facing",
      body: "Flange type, rating class or PN designation, facing type, NPS/DN, bolt pattern and the dimensional standard in force."
    },
    {
      title: "Bore & Weld End",
      body: "Bore diameter, matching pipe schedule, hub taper and weld-end preparation, and whether the bore is stepped for the joint."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every flange, which are sampled, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium flange quotation?",
      a: "Provide the flange type, grade, governing specification and revision, size, rating class or PN designation, facing, bolt pattern, bore and pipe schedule, quantity, and the inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a non-standard bolt circle, a special facing or a stepped bore."
    },
    {
      q: "Which grades can be reviewed for titanium flanges?",
      a: "Common enquiries include Grades 2, 5, 7 and 12. Other grades may be reviewed. Availability, source form, condition, size and applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium flanges be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required type, grade, condition, class, facing, bolt pattern, bore, machining allowance and quantity. The accepted process and final scope are stated in the quotation."
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
      q: "Are stock, MOQ and lead time fixed for titanium flanges?",
      a: "No. They depend on grade, type, class, size, facing, bolt pattern, bore, machining scope, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Flange Order Basis",
      heading: "State the Flange Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium flanges against ASTM B381 and ASME B16.5 / B16.47. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Flange Release Package",
      lede: "A material certificate does not describe a machined flange. The release package states which dimensions are measured on every flange, which checks are sampled, and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Titanium Flanges",
      lede: "Type and class, bore and weld end, facing, and inspection scope. Each one changes the price more than the grade name does, and each one is written down before the forging is ordered."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A flange is chosen against the medium, the pressure, the bolting and the joint it belongs to. Grade, class, facing, bore and inspection scope follow from that service context, not from the product name."
    },
    process: {
      lede: "Flanges are forged, machined and inspected through qualified partner workshops coordinated for the order. The forging route, the machining scope and the documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Forging, machining of the face and bore, and the dimensional records are carried out through qualified partner workshops coordinated for the order. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Flange type, class, facing and bore scope",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Flange Inquiry",
      variant: "titanium-flange"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Flange Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Flanges",
    lede: "A flange is bought as a joint, not as a disc, so the forging route, the failure modes, the inspection set and the supply form are settled separately from the grade. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Forging and Machining Route",
        items: [
          {
            title: "Forged body versus machined from bar",
            body: "A forged blank is compacted before the shape is machined, so the grain follows the hub and the face and the body can be made in a thickness a cut-from-bar route would not reach without welding."
          },
          {
            title: "Weld-neck versus slip-on body",
            body: "A weld-neck hub is tapered to match the pipe and is welded into the line, while a slip-on hub is straight and depends on the clamp load and the pipe surface, so the two bodies are machined and inspected differently."
          },
          {
            title: "Hub length and taper",
            body: "The hub length and the taper angle set how the flange welds to the pipe and how much straight length the joint consumes, and both are machined from the same blank as the face, which is why they are quoted together with the pipe schedule."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Stress concentration at the hub",
            body: "The fillet where the hub meets the flange body is where a flange cracks under bolt load and pressure, so the hub geometry and the forging quality are what decide whether that fillet survives the service."
          },
          {
            title: "Gasket contact and face flatness",
            body: "A flange that is not flat enough or not clean enough at the sealing face leaks through the gasket before it ever fails structurally, which is why face condition is inspected and stated as a separate characteristic."
          },
          {
            title: "Galvanic attack at the bolting",
            body: "In seawater service a titanium flange joined with bare steel fasteners creates a couple at the joint, so the bolting material and the isolation of the joint are part of the flange order rather than a downstream detail."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Face, thickness and bolt circle",
            body: "For a flange the characteristics are the raised face, the disc thickness at the stated location, the bolt circle and the bolt hole positions, since these are what the joint actually depends on."
          },
          {
            title: "Bore and taper against the pipe",
            body: "The bore diameter and the hub taper are measured against the pipe schedule they are matched to, because a flange that is dimensionally correct but paired with the wrong pipe will not weld or will not seat."
          },
          {
            title: "Marking and traceability",
            body: "The identification on the body carries the material, the standard and the heat or lot reference, and it is stamped or etched clear of the sealing face so that the joint surface is not damaged."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Single flanges versus flange sets",
            body: "The order can end at loose flanges delivered for site bolting, or extend to matched sets with the bolting and gaskets specified, and the choice changes both the packing and the responsibility for the joint."
          },
          {
            title: "Face protection in packing",
            body: "The machined face is protected during packing so that the sealing surface arrives without the handling damage that would otherwise be discovered only at assembly, and the packing method is agreed with the order."
          },
          {
            title: "Weld-neck blanks and machining scope",
            body: "A flange can be supplied as a finished machined item or as a semi-finished body for the customer to machine, and that boundary has to be stated because it moves a share of the dimensional responsibility."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Flange Types Differ from the Adjacent Forms",
    caption: "Weld-neck, slip-on and blind flanges compared on the points that actually change between them.",
    columns: ["Comparison point", "Weld neck", "Slip-on", "Blind"],
    rows: [
      [
        "How the part joins the line",
        "Welded to the pipe through a tapered hub, so the joint is part of the pipe weld",
        "Slipped over the pipe and clamped by the bolts, so the joint is mechanical",
        "Bolted to the end of a line or a header without a bore, so the joint closes the system"
      ],
      [
        "Dominant material concern",
        "Hub fillet stress and the weld heat-affected zone next to the bore",
        "Bore-to-pipe fit and the surface condition that the clamp depends on",
        "Disc thickness under bolt preload and the flatness of the sealing face"
      ],
      [
        "Dimensional emphasis",
        "Bore diameter, hub taper, hub length and the weld-end preparation",
        "Bore diameter, pipe outside diameter range, hub length and face position",
        "Outside diameter, disc thickness, bolt circle and the sealing face"
      ],
      [
        "Typical application",
        "Process and chemical lines where the joint has to carry the same duty as the pipe",
        "Utility, instrument and auxiliary lines with lower pressure and limited disassembly",
        "Line closure, header blanking and pressure-test boundaries"
      ]
    ],
    footnote: "A flange is named by the joint it makes, not by the disc it looks like. State the type, the rating class, the facing, the bore and the mating pipe in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
