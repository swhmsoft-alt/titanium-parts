import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium foil product detail page. */
const raw: StandardRaw = {
  M: "Titanium Foil",
  slug: "titanium-foil-2",
  hero: {
    eyebrow: "ASTM B265 Foil · Slit Strip · Cut Sheet",
    title: "Titanium Foil Manufacturer — Coil, Slit Strip & Cut Pieces",
    desc: "Source titanium foil with grade, specification, thickness, units, width, condition, surface and delivery form reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-foil-manufacturer.webp",
    tags: [
      "Ultra-Thin Coil · Slit Strip",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Foil Grades" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, governing specification and revision, condition and the interstitial limits the end use implies."
    },
    {
      title: "Thickness & Width",
      body: "Nominal and minimum thickness, the unit the thickness is quoted in, the slit or coil width and the tolerance class that applies."
    },
    {
      title: "Surface & Delivery Form",
      body: "Surface finish and cleanliness, oil or interleaf protection, coil or strip versus cut sheet, and the edge condition of the slit."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, thickness and width record, surface inspection scope, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-1-foil.webp",
      alt: "Grade 1 titanium foil",
      title: "Grade 1 Titanium",
      spec: "UNS R50250 · ASTM B265 within scope",
      body: "The most formable of the commercial grades, used where the foil is drawn, stamped or deep formed rather than where strength decides the grade."
    },
    {
      img: "/images/titanium-products/grade-2-foil.webp",
      alt: "Grade 2 titanium foil",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B265 within scope",
      body: "The general foil grade, with the corrosion resistance and ductility balance that covers chemical, medical and general thin-product duties."
    },
    {
      img: "/images/titanium-products/grade-5-foil.webp",
      alt: "Grade 5 titanium foil",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B265 within scope",
      body: "The higher-strength alloy, selected where the foil has to hold a spring property or resist wear in the converted product."
    },
    {
      img: "/images/titanium-products/grade-23-foil.webp",
      alt: "Grade 23 titanium foil",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM B265 / F136",
      body: "Extra-low-interstitial chemistry for medical and implant-related foil; the finished-device approval stays with the device manufacturer."
    }
  ],
  forms: [
    {
      title: "CP Titanium Foil",
      body: "Commercially pure Grade 1 or Grade 2 foil for general thin-product applications, supplied in coil or slit strip."
    },
    {
      title: "Alloy Foil",
      body: "Grade 5 or project-specified alloy foil for strength, forming or chemical duty, with the same thickness control as the commercial-pure grades."
    },
    {
      title: "Foil Coil",
      body: "Continuous foil in coil form for downstream conversion or direct use, with the coil weight and eye size agreed as part of the order."
    },
    {
      title: "Cut Sheet / Blank",
      body: "Cut-to-size foil sheet or blank with the edge condition and the protective packing defined for the application."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Thickness & Application Review",
      body: "The thickness, the width, the unit the thickness is quoted in, the conversion route and the end use are read together before any coil is scheduled."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Route Confirmation",
      body: "Coil or sheet source, condition, heat identity and the applicable foil specification are confirmed against the quotation before slitting or cutting."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Slitting and Surface Control",
      title: "Slitting, Cutting & Surface Control",
      body: "Slit width, edge condition, burr control, cut-part tolerance and the oil or interleaf protection of the finished surface are controlled to the agreed scope."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Thickness, Width & Surface Inspection",
      body: "Gauge measurements at the stated points, width and length checks, edge and surface inspection and any porosity or defect check are performed as agreed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Coil and coil eye identification, protective packing against scoring and creasing, and the certificate index are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/speaker-diaphragm-foil.webp",
      alt: "Speaker diaphragm foil",
      title: "Audio & Speaker Diaphragm",
      spec: "Confirm thickness, grain, forming route, dome geometry and assembly-level acoustic validation."
    },
    {
      img: "/images/titanium-products/energy-storage-foil.webp",
      alt: "Energy storage foil",
      title: "Energy Storage & Battery",
      spec: "State substrate surface, current collector interface, coating compatibility and cell assembly responsibility."
    },
    {
      img: "/images/titanium-products/electronics-shielding-foil.webp",
      alt: "Electronics shielding foil",
      title: "Electronics & Shielding",
      spec: "Confirm thickness, surface, joining, shielding target and assembly boundary."
    },
    {
      img: "/images/titanium-products/chemical-processing-foil.webp",
      alt: "Chemical processing foil",
      title: "Chemical Processing",
      spec: "Define media, concentration, temperature, fabrication route and design code for the finished equipment."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and heat or lot reference for the coil the foil was taken from."
    },
    {
      title: "Thickness and width record",
      body: "Measured thickness at the stated points, slit or cut width, length, the measurement method and the tolerance class applied."
    },
    {
      title: "Surface and edge condition",
      body: "Surface cleanliness, oil or interleaf protection, edge condition and burr control on a slitted or cut edge, reported per the agreed scope."
    },
    {
      title: "Document release",
      body: "Required certificate index, third-party involvement, coil marking plan, protective packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Specification",
      body: "Grade, governing specification and revision, condition, and the interstitial limits the end use implies."
    },
    {
      title: "Thickness & Width Definition",
      body: "Nominal and minimum thickness, the unit used, the width, the length and the tolerance class each of them is held to."
    },
    {
      title: "Surface & Delivery Form",
      body: "Finish, cleanliness, protection medium, coil or strip versus cut sheet, and the edge condition that the conversion step needs."
    },
    {
      title: "Commercial & Delivery",
      body: "Quantity basis in coil weight or piece count, exclusions, packing, Incoterm and the schedule assumption behind the quotation."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium foil quotation?",
      a: "Provide the grade, governing specification and revision, condition, the nominal thickness, the unit the thickness is quoted in, the width, the length or coil weight, the surface and protection requirement, the delivery form, the inspection scope and the document requirements. A drawing or a thickness tolerance is helpful for slitted strip and cut parts."
    },
    {
      q: "Which grades can be reviewed for titanium foil?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source coil, condition, thickness range and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or cut-to-size titanium foil be supplied?",
      a: "Yes, slitted strip and cut sheet or blanks can be reviewed against the required thickness, width, length, edge condition, protection and quantity. The accepted conversion route and the final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, thickness and width records, surface inspection, testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for titanium foil?",
      a: "No. They depend on grade, source form, thickness, width, conversion route, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Foil Order Basis",
      heading: "State the Foil Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium foil against ASTM / ASME / project specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Foil Release Package",
      lede: "A material certificate does not describe a foil. The release package states where the thickness is measured, which points are checked on every coil, how the surface is protected and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Foil",
      lede: "Thickness and width definition, surface and protection, delivery form and commercial basis. Each one changes the price more than the grade name does, and each one is written down before the coil is scheduled."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "Foil is chosen against the end use, the conversion route and the surface the part has to present. Grade, thickness, protection and inspection scope follow from that service context, not from the product name."
    },
    process: {
      lede: "Foil is slit, cut and inspected in our own facility. The conversion route, the inspection scope and the documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Slitting, cut-part preparation and surface control are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Thickness, width and delivery form scope",
        "Surface, inspection and measurement requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Foil Inquiry",
      variant: "titanium-foil"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Foil Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Foil",
    lede: "Foil is quoted by thickness and width, but the conversion route, the failure modes, the inspection set and the delivery form are decided separately. Each of the four points below is stated on the order basis rather than assumed from the product name.",
    groups: [
      {
        title: "Conversion Route",
        items: [
          {
            title: "Slitting from coil versus cut sheet",
            body: "Slitting a coil to width needs a burr-free edge and a set residual curl that the next forming step has to live with, while a cut sheet starts from flat stock and is easier to handle but costs more per unit of area."
          },
          {
            title: "Rolling route and thickness tolerance",
            body: "Foil is rolled from a thicker strip, and the achievable thickness tolerance, the work-hardened surface and the grain direction all come from that route, so the tolerance and the finish are quoted together with the grade."
          },
          {
            title: "Annealing and formability",
            body: "A foil that will be deep formed or stamped needs an annealed, ductile condition, while a foil that is only cut and handled can be supplied in a harder condition for better springback stability."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Burr and edge tearing",
            body: "A thin foil tears at the slit edge and a raised burr becomes the crack initiation point in a later forming or sealing step, which is why edge condition is inspected rather than assumed."
          },
          {
            title: "Creasing and scoring in handling",
            body: "Foil is soft enough to crease and to pick up handling marks, so a creased fold or a scratch can be a reject even when the thickness is inside tolerance."
          },
          {
            title: "Interlayer reaction and galling",
            body: "Stored foil that is not protected can gall against the next layer or trap moisture, so the protection medium and the storage condition are part of the delivery specification, not a packing detail."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Gauge points, not one average",
            body: "Thickness is measured at several named points across the width and along the length, because the gauge reading at one point does not describe a coil and the tolerance is held across the product."
          },
          {
            title: "Width, length and squareness",
            body: "A slitted strip is checked for width, edge straightness and the squareness of the coil, and a cut part is checked for cut length and the position of the cut relative to the grain."
          },
          {
            title: "Surface and defect inspection",
            body: "Surface cleanliness, oil or interleaf condition, roll marks, scratches, pits and any porosity indication are inspected on the agreed sampling basis and reported per the specified method."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Coil, strip and cut part",
            body: "The order can end as a coil, as slit strip or as cut parts, and each form has its own handling, protection and packing requirement, which is agreed before the conversion route is fixed."
          },
          {
            title: "Quantity basis",
            body: "Thin products are commonly quoted by coil weight or by area, and the piece count, the coil weight and the length tolerance all have to be stated so the quotation can be compared like for like."
          },
          {
            title: "Batching and marking",
            body: "Production quantities can be supplied in batches with coil or bundle identification and heat or lot traceability per batch, or left unmarked when the customer's own system provides the traceability."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Foil Delivery Forms Differ from the Adjacent Forms",
    caption: "Coil, slit strip and cut sheet compared on the points that actually change between them.",
    columns: ["Comparison point", "Foil coil", "Slit strip", "Cut sheet or blank"],
    rows: [
      [
        "How it reaches the customer",
        "Continuous coil for downstream slitting, forming or coating",
        "Narrower strip wound for a specific converting line or a specific width",
        "Flat piece in a stated size, ready for a forming or assembly step"
      ],
      [
        "Dominant material concern",
        "Handling damage and coil set across the full width, since the customer still has to convert it",
        "Burr and edge quality, because the strip is fed directly into a cutting or forming operation",
        "Flatness and cut-part tolerance, because the part is measured and used as delivered"
      ],
      [
        "Dimensional emphasis",
        "Coil weight, eye size, thickness across the width and the set of the wound coil",
        "Slit width and its tolerance, edge condition, thickness and the strip length",
        "Cut length and width, thickness, flatness and the position of the part in the sheet"
      ],
      [
        "Typical application",
        "Coating, electroforming and further slitting or rolling operations",
        "Stamping, deep forming and high-speed conversion lines",
        "Diaphragm, shield, current-collector and formed-component production"
      ]
    ],
    footnote: "The delivery form of a foil is a conversion decision, not a packaging preference: it decides whether the customer still has to cut the material, whether the edge has to be protected from burr, and which characteristics are inspected before the material is used. State the delivery form, the thickness unit and the width tolerance in the inquiry."
  }
];

export const page = buildStandardPage(raw);
