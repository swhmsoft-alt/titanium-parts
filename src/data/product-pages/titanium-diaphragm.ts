import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium diaphragm product detail page. */
const raw: StandardRaw = {
  M: "Titanium Diaphragms",
  slug: "titanium-diaphragm",
  hero: {
    eyebrow: "Tweeter Dome · Sensor · Corrugated · Formed",
    title: "Titanium Diaphragm Manufacturer — Tweeter Domes & Sensor",
    desc: "Source titanium diaphragms with grade, thickness, profile, forming route and inspection reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-diaphragm.webp",
    tags: [
      "Tweeter · Sensor · Pressure",
      "Drawing-Based Custom",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Diaphragm Types" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material",
      body: "Grade, UNS number, governing specification and revision, condition and the interstitial limits the end use implies."
    },
    {
      title: "Profile & Geometry",
      body: "Dome or diaphragm diameter, thickness, profile depth, clamped edge or surround detail, and the drawing revision the geometry belongs to."
    },
    {
      title: "Forming & Assembly",
      body: "Forming route, tooling and lubricant constraints, the mating parts it must work against, and who validates the finished assembly."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, dimensional record of the formed profile, leak, cycle or acoustic test scope, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-1-titanium-diaphragm.webp",
      alt: "Grade 1 titanium diaphragm",
      title: "Grade 1 Titanium",
      spec: "UNS R50250 · ASTM B265 within scope",
      body: "The softest and most formable of the commercial grades, chosen when deep drawing of a thin profile matters more than spring strength."
    },
    {
      img: "/images/titanium-products/grade-2-titanium-diaphragm.webp",
      alt: "Grade 2 titanium diaphragm",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 · ASTM B265 within scope",
      body: "The general grade for sensor and acoustic diaphragms, with the corrosion resistance and formability balance most diaphragm duties rely on."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-diaphragm.webp",
      alt: "Grade 5 titanium diaphragm",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 · ASTM B265 / AMS 4911",
      body: "The higher-strength alloy, used where the diaphragm works at temperature or the stiffness has to hold a shape under load."
    },
    {
      img: "/images/titanium-products/grade-23-titanium-diaphragm.webp",
      alt: "Grade 23 titanium diaphragm",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 · ASTM B265 / F136",
      body: "Extra-low-interstitial chemistry for medical and sensor duties; the finished-device approval stays with the device manufacturer."
    }
  ],
  forms: [
    {
      title: "Tweeter Dome",
      body: "Spherical dome diaphragm for high-frequency audio reproduction, formed from a thin disc with a rolled or clamped surround."
    },
    {
      title: "Sensor Diaphragm",
      body: "Flat or shallow-formed diaphragm for pressure, flow and acoustic sensors, where deflection and hysteresis define the performance."
    },
    {
      title: "Corrugated Diaphragm",
      body: "Corrugated profile for pressure sensors, pumps and metering devices, using the convolution to absorb stroke without a separate flexure."
    },
    {
      title: "Custom / Drawing",
      body: "Drawing-based diaphragm for a project-specific profile, clamp detail or forming sequence that the standard forms do not cover."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Drawing & Requirement Review",
      body: "The profile, the clamped edge, the mating part and the finished-assembly validation are read together before any sheet is cut."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Material & Forming Route Confirmation",
      body: "Sheet or disc source, condition, heat identity and the applicable specification are confirmed against the quotation before tooling is prepared."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Forming and Edge Control",
      title: "Forming, Edge & Surface Control",
      body: "Blank preparation, forming or spinning steps, edge condition, clamp detail and surface protection are controlled to the approved route."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Testing",
      title: "Profile Inspection & Functional Test",
      body: "Profile geometry, thickness and flatness checks, plus any leak, cycle or acoustic verification the order calls for, are performed in the agreed scope."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification without damaging the working profile, protective packing for thin parts and the certificate index are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/audio-acoustic-diaphragm.webp",
      alt: "Audio diaphragm",
      title: "Audio & Acoustic",
      spec: "Confirm dome geometry, surround, voice coil, motor, enclosure and assembly-level acoustic validation."
    },
    {
      img: "/images/titanium-products/pressure-sensor-diaphragm.webp",
      alt: "Pressure sensor diaphragm",
      title: "Pressure & Flow Sensor",
      spec: "State media, pressure differential, cycle, displacement, sensitivity and validation responsibility."
    },
    {
      img: "/images/titanium-products/industrial-pump-diaphragm.webp",
      alt: "Industrial pump diaphragm",
      title: "Industrial Pump Diaphragm",
      spec: "Confirm media, cycle profile, temperature, fatigue, proof/burst test and assembly responsibility."
    },
    {
      img: "/images/titanium-products/medical-device-diaphragm.webp",
      alt: "Medical device diaphragm",
      title: "Medical Device Diaphragm",
      spec: "Separate ASTM F67 / F136 conformity from finished-device approval, biological evaluation and sterilization validation."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and heat or lot reference for the sheet or disc that was formed."
    },
    {
      title: "Formed geometry record",
      body: "Measured diameter, profile height, thickness, clamped-edge condition and flatness, with the method, sampling and tolerance named."
    },
    {
      title: "Functional test scope",
      body: "Leak, pressure-cycle, fatigue or acoustic measurements only where the order requires them, with the standard and the sample size stated."
    },
    {
      title: "Document release",
      body: "Required certificate index, third-party involvement, marking plan, protective packing, approval route and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Specification",
      body: "Grade, governing specification and revision, condition, and the interstitial limits the end use implies."
    },
    {
      title: "Profile & Forming Route",
      body: "Diameter, thickness, profile, forming route, tooling constraint and who owns the finished-assembly validation."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every part, which are sampled, and which functional tests are part of the order."
    },
    {
      title: "Handling & Delivery",
      body: "Packaging that protects a thin formed part, marking method, quantity basis, Incoterm and the schedule assumption behind the quotation."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium diaphragm quotation?",
      a: "Provide the grade, governing specification and revision, condition, the profile with its diameter and thickness, the clamped edge or surround detail, quantity, forming route, functional test and inspection scope, and the document requirements. A drawing is optional for the first enquiry and normally required for a formed profile."
    },
    {
      q: "Which grades can be reviewed for titanium diaphragms?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, thickness and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium diaphragms be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required profile, grade, condition, thickness, tooling route, quantity and document scope. The accepted process and final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, functional testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for titanium diaphragms?",
      a: "No. They depend on grade, source form, thickness, profile, forming route, tooling, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Diaphragm Order Basis",
      heading: "State the Diaphragm Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium diaphragms against ASTM / ASME / project specifications. Availability is confirmed per order."
    },
    evidence: {
      heading: "Specify the Diaphragm Release Package",
      lede: "A material certificate does not describe a formed profile. The release package for a diaphragm states which characteristics are measured on every part, which functional tests are run, and which documents travel with the shipment."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Diaphragms",
      lede: "Profile, forming route, inspection scope and handling. Each one changes the price more than the grade name does, and each one is written down before the first sheet is cut."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A diaphragm is chosen against the media, the pressure, the cycle and the assembly it works in. Grade, thickness, forming route and inspection scope follow from that service context, not from the product name."
    },
    process: {
      lede: "Diaphragms are cut, formed and inspected in our own facility. The forming route, the functional test scope and the documentation are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Blank preparation, forming and profile inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade and specification review",
        "Profile, thickness and forming route scope",
        "Functional testing and inspection requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Diaphragm Inquiry",
      variant: "titanium-diaphragm"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Diaphragm Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Diaphragms",
    lede: "Diaphragms share a thin disc and a grade list, but the forming route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is stated on the order basis rather than assumed from the product name.",
    groups: [
      {
        title: "Forming Route",
        items: [
          {
            title: "Deep drawing versus spinning",
            body: "A shallow sensor profile is drawn from a blank in a single operation, while a deep acoustic dome is usually spun or drawn in stages because the strain limit of the grade decides how far the profile can go in one pass."
          },
          {
            title: "Clamped edge versus rolled surround",
            body: "A diaphragm that is clamped between two flanges carries its stress in that edge and needs the edge condition controlled; a rolled surround stores the tension in the rolled section instead, which changes both the tooling and the inspection."
          },
          {
            title: "Lubricant and tooling surface",
            body: "The lubricant and the die surface affect galling on the working face of a titanium dome, and a marked or scratched surface on an acoustic part is audible. The tooling preparation is therefore part of the route, not a detail."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Fatigue at the clamped edge",
            body: "A cycled diaphragm usually initiates at the clamped edge or the transition radius rather than in the free span, so the edge condition and the radius are the two characteristics that decide fatigue life."
          },
          {
            title: "Work hardening and springback",
            body: "Forming a thin titanium disc work-hardens it and the formed profile springs back as it releases the tooling, so the achieved profile is set by the route and the allowance, not by the nominal drawing alone."
          },
          {
            title: "Pitting and crevice corrosion",
            body: "In a wet service the clamped crevice and the wet-side face are where a titanium diaphragm corrodes first, so the medium, the surface condition and the passivation state are quoted together with the geometry."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Profile rather than flat length",
            body: "For a formed part the characteristic is the profile — diameter, height, radius and flatness of the span — measured after forming, because the as-formed condition is what the assembly works against."
          },
          {
            title: "Thickness and thinning",
            body: "Where the profile is drawn or spun, the thickness changes across the part, so the gauge is taken at the named location and the thinning at the thinnest section is reported as a separate characteristic."
          },
          {
            title: "Functional test alignment",
            body: "Leak, pressure-cycle, fatigue and acoustic checks answer questions that a dimensional report cannot, so the standard, the sample size and the acceptance criterion are named in the order rather than assumed."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Separately packed parts",
            body: "A thin formed diaphragm is delivered separated so that it cannot scratch or dish in transit, and the packing method is agreed as part of the order because it changes both the risk and the cost."
          },
          {
            title: "Production batches",
            body: "Production quantities can be supplied in batches with part marking and heat or lot traceability per batch, or left unmarked when the customer's own system provides the traceability."
          },
          {
            title: "Assembly scope",
            body: "The order can end at the formed diaphragm or extend to the frame, clamp or surround it works against, and that boundary is stated in the quotation because it changes both the tooling and the test scope."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Diaphragm Types Differ from the Adjacent Forms",
    caption: "Tweeter domes, sensor diaphragms and corrugated diaphragms compared on the points that actually change between them.",
    columns: ["Comparison point", "Tweeter dome", "Sensor diaphragm", "Corrugated diaphragm"],
    rows: [
      [
        "How the part works",
        "Moves a small mass over a wide frequency band, so mass and stiffness balance decides the response",
        "Deflects under a differential pressure, so the sensitivity depends on thickness and effective area",
        "Absorbs a large stroke through the convolution, so the working range is set by the fold geometry"
      ],
      [
        "Dominant material concern",
        "Stiffness and internal damping across the audio band, with the forming route setting residual stress",
        "Fatigue life under repeated pressure cycles and the hysteresis of the span",
        "Fatigue life concentrated in the fold roots, and the number of folds the geometry can carry"
      ],
      [
        "Dimensional emphasis",
        "Dome diameter, dome height, surround section and the flatness of the clamped rim",
        "Effective diameter, span thickness, deflection under load and the clamped-edge detail",
        "Diameter, stroke, fold count and the thickness of the convolution at its root"
      ],
      [
        "Typical application",
        "High-frequency audio reproduction in a loudspeaker or headset assembly",
        "Pressure, flow and acoustic sensing in an instrumentation assembly",
        "Metering and pumping duties where stroke and media compatibility dominate"
      ]
    ],
    footnote: "A diaphragm is named by what it does in the assembly, not by how it is made. State the diameter, the thickness, the clamped edge or surround detail, the cycle or frequency range and the validation owner in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
