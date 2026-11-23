import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium balls, spheres and hemispheres product detail page. */
const raw: StandardRaw = {
  M: "Titanium Balls & Spheres",
  slug: "titanium-balls",
  hero: {
    eyebrow: "Solid \u00b7 Hollow \u00b7 Hemispherical \u00b7 Float",
    title: "Titanium Balls & Spheres Manufacturer \u2014 Solid, Hollow and Hemispherical",
    desc: "Specify grade, diameter, tolerance, wall thickness, surface and inspection for titanium balls, hollow spheres and hemispheres. The machining or forming route and the sealing interface are confirmed against your order before production.",
    img: "/images/titanium-products/titanium-balls-spheres.webp",
    tags: [
      "Solid \u00b7 Hollow \u00b7 Hemispherical",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Ball Forms" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Material & Condition",
      body: "Grade, UNS reference, the governing product specification and revision, the condition the parts are supplied in, and any supplementary requirement the end use implies."
    },
    {
      title: "Ball Geometry",
      body: "Diameter with tolerance, the sphere form and roundness the part has to hold, the surface finish, and whether the order is for a solid, a hollow or a hemispherical body."
    },
    {
      title: "Hollow Wall & Closure",
      body: "For hollow items the wall thickness, the closure or weld method, the internal volume, the leak tightness requirement and any valve, stem or mounting feature that belongs to the ball."
    },
    {
      title: "Evidence",
      body: "MTC tied to the heat or lot, the dimensional and surface inspection record, any leak or pressure verification stated in the order, marking, protective packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/grade-2-titanium-ball.webp",
      alt: "Grade 2 Ball",
      title: "Grade 2 Titanium",
      spec: "UNS R50400 \u00b7 ASTM B348 applicable scope",
      body: "Commercially pure titanium, the usual choice where corrosion resistance and the machining behaviour of the ball decide the grade rather than load-carrying strength."
    },
    {
      img: "/images/titanium-products/grade-5-titanium-ball.webp",
      alt: "Grade 5 Ball",
      title: "Grade 5 / Ti-6Al-4V",
      spec: "UNS R56400 \u00b7 ASTM B348 / AMS 4928",
      body: "Higher-strength alloy for valve trim, bearing and precision work, where the ball has to carry a load in addition to resisting the medium it works in."
    },
    {
      img: "/images/titanium-products/grade-7-titanium-ball.webp",
      alt: "Grade 7 Ball",
      title: "Grade 7 Titanium",
      spec: "UNS R52400 \u00b7 ASTM B348",
      body: "Palladium-enhanced grade for reducing acid and chloride-rich service, selected where Grade 2 no longer covers the medium and the surface has to survive an aggressive bath."
    },
    {
      img: "/images/titanium-products/grade-23-titanium-ball.webp",
      alt: "Grade 23 Ball",
      title: "Grade 23 / Ti-6Al-4V ELI",
      spec: "UNS R56407 \u00b7 ASTM B348 / F136",
      body: "Extra-low-interstitial grade for implant and device work, where the ball becomes part of a finished device and the interstitial content has to be controlled."
    }
  ],
  forms: [
    {
      title: "Solid Ball",
      body: "Machined from bar or billet to the ordered diameter, used as a valve plug, a bearing element, a mixing or milling medium, or a precision weight where the material has to be one piece."
    },
    {
      title: "Hollow Sphere",
      body: "Formed and closed shell for buoyancy and weight-critical service, where the order is judged by wall thickness, internal volume, leak tightness and the balance of the finished body."
    },
    {
      title: "Hemispherical Shell",
      body: "Domed half body for tanks, vessels and welded sphere assemblies, supplied as a formed half or as part of a welded assembly with the seam treatment stated in the order."
    },
    {
      title: "Float & Valve Ball",
      body: "Precision-machined ball with a defined seat or seal interface, where the order is judged by the seating geometry, the surface inside the sealing line and the assembly-level validation."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Requirement & Geometry Review",
      body: "Grade, specification revision, condition, diameter, tolerance, form, quantity and the document scope are read together before any blank is cut."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Stock & Blank Confirmation",
      body: "The bar, billet or sheet the order is taken from, its heat identity, its condition and the applicable product specification are confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Cutting and Surface Control",
      title: "Machining, Forming & Closure Route",
      body: "Spherical machining, hemispherical forming, welding and closure, and the machining allowance are carried out to the route agreed for the geometry in the order."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Form, Surface & Dimensional Inspection",
      body: "Diameter, roundness, wall thickness, surface and, where the order asks for it, leak or pressure verification are measured and recorded before the parts are packed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification, the certificate index, protective packing that prevents contact marking, and the delivery basis are checked before the parts leave the workshop."
    }
  ],  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/valve-flow-control-ball.webp",
      alt: "Valve & Flow Control",
      title: "Valve & Flow Control",
      spec: "Confirm the ball diameter against the seat, the sealing line geometry, the pressure class, the seat material and the assembly-level valve qualification."
    },
    {
      img: "/images/titanium-products/bearing-precision-ball.webp",
      alt: "Bearing & Precision",
      title: "Bearing & Precision",
      spec: "State the load direction, the lubrication method, the clearance, the roundness class the running surface has to hold and the fatigue or wear test scope."
    },
    {
      img: "/images/titanium-products/buoyancy-hollow-sphere.webp",
      alt: "Buoyancy & Hollow Sphere",
      title: "Buoyancy & Hollow Sphere",
      spec: "Confirm the wall thickness, the internal volume, the leak or pressure verification, the closure method and the buoyancy calculation the body has to satisfy."
    },
    {
      img: "/images/titanium-products/medical-implant-ball.webp",
      alt: "Medical Implant",
      title: "Medical Implant",
      spec: "Keep ASTM F67 or F136 material conformity separate from finished-device approval, clinical suitability, sterilization validation and application qualification."
    }
  ],
  evidence: [
    {
      title: "Material identity",
      body: "Grade, specification revision, condition and the heat or lot reference of the bar, billet or sheet the parts were taken from."
    },
    {
      title: "Form and dimensional record",
      body: "Measured diameter, roundness, wall thickness and surface state, with the measuring method, the sampling plan, the tolerance and the report format named."
    },
    {
      title: "Test and inspection",
      body: "Leak or pressure verification for hollow items, mechanical or NDT checks, and any third-party inspection stated in the agreed scope."
    },
    {
      title: "Document release",
      body: "Required certificate index, traceability level, language, approval route, protective packing specification and delivery timing."
    }
  ],
  controls: [
    {
      title: "Material & Condition",
      body: "Grade, product specification and revision, condition, heat or lot basis, and any supplementary requirement the end use implies."
    },
    {
      title: "Geometry & Closure",
      body: "Diameter with tolerance, roundness class, surface finish, whether the body is solid or hollow, and the wall, closure or weld method for hollow items."
    },
    {
      title: "Interface & Handling",
      body: "The mating seat, seal line or stem, the surface condition inside the interface, and the packing that keeps the finished spheres free of contact marking."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every part, which are sampled from the batch, and which leak, pressure or third-party checks belong to the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium ball or sphere quotation?",
      a: "Provide the grade, the governing specification and revision, the condition, the diameter with tolerance, whether the body is solid, hollow or hemispherical, the wall thickness for hollow items, the surface finish, the quantity, the inspection, testing and document requirements. A drawing is optional for the first enquiry and normally required for a hollow sphere, a float ball or any non-standard geometry."
    },
    {
      q: "Which grades can be reviewed for titanium balls and spheres?",
      a: "Common enquiries include Grades 2, 5, 7 and 23. Other grades may be reviewed. Availability, source form, condition, diameter and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based titanium balls be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required geometry, grade, condition, diameter, tolerance, roundness, wall thickness, machining route, closure method and quantity. The accepted process and the final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates, traceability level, dimensional records, leak or pressure testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for titanium balls?",
      a: "No. They depend on grade, source form, condition, diameter, wall thickness, machining or forming route, closure method, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Ball Order Basis",
      heading: "State the Ball Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Grades and forms below are reviewed for titanium balls and spheres against ASTM B348. Availability, source stock and the machining or forming route are confirmed per order."
    },
    evidence: {
      heading: "Specify the Ball Release Package",
      lede: "A material certificate does not describe a sphere. The release package states which diameters, roundness readings, wall thicknesses and surface results are measured, how they are sampled across the batch, and which documents travel with the parts."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Balls",
      lede: "Material and condition, geometry and closure, interface and handling, inspection scope. Each one changes the price and the route more than the grade name does, and each one is written down before a blank is cut."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A ball is chosen against the service it enters, not only against the grade. A valve trim, a bearing race, a buoyancy body and an implant component are reviewed on different roundness, surface and interface conditions, and the order basis follows from that role."
    },
    process: {
      lede: "Balls are machined, formed, closed and inspected in our own facility. The route, the closure method and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Spherical machining, hemispherical forming, welding, dimensional and surface inspection and protective packing are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Grade, condition and specification review",
        "Diameter, roundness, wall and closure requirement",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Ball Inquiry",
      variant: "titanium-balls"
    }
  }
};raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Ball Specifics",
    heading: "Four Points That Are Decided Differently for Titanium Balls",
    lede: "A ball order always carries the same grade list and the same certificate language, but the forming route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Forming & Machining Route",
        items: [
          {
            title: "Solid against hollow production",
            body: "A solid ball is machined from bar or billet with the allowance taken out on a spherical path, while a hollow sphere is formed from sheet and closed, so the two routes have different starting stock, different allowance logic and a different wall control."
          },
          {
            title: "Hemispherical forming",
            body: "A hemisphere is pressed or spun from sheet rather than turned from solid stock, so its wall thickness follows the forming limit of the grade and the seam or weld condition has to be part of the order instead of a later decision."
          },
          {
            title: "Machining allowance",
            body: "Spherical machining removes material continuously in several passes, so the allowance is quoted as a route characteristic together with the final diameter tolerance, and it changes the delivered form more than the tolerance alone does."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Roundness loss and sphericity error",
            body: "A ball that is off-round does not seal against a seat and does not run evenly in a bearing race, so roundness and sphericity are acceptance characteristics of the part rather than a by-product of the machining operation."
          },
          {
            title: "Wall thinning and porosity in hollow bodies",
            body: "Forming a shell thins the wall locally and can leave porosity in the weld zone, so a hollow item is judged by its minimum wall and its closure quality rather than by its outside diameter."
          },
          {
            title: "Contact marking and surface damage",
            body: "Finished spheres pick up marks from every contact they take, and in a valve or a bearing the marked zone can be the very zone that seals or rolls, so the packing and the surface requirement belong in the order."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Diameter and roundness measurement",
            body: "A spherical part is measured on a dedicated spherical measuring method rather than with a caliper, so the method, the sampling across the batch and the tolerance have to be agreed before production."
          },
          {
            title: "Wall thickness on hollow items",
            body: "For a hollow sphere the wall is measured locally, at the pole and around the closure, because the minimum value decides whether the body keeps its buoyancy and its leak tightness."
          },
          {
            title: "Leak and pressure verification",
            body: "A closed body is verified by leak or pressure testing when the order asks for it, and the method and the acceptance criterion are stated in the release package instead of being implied by the word hollow."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Loose parts against fitted sets",
            body: "A valve order arrives as a matched set of trim parts with the seat interface in mind, while a mixing or milling order arrives as a bulk quantity where the individual part matters less than the consistency of the batch."
          },
          {
            title: "Identification and marking",
            body: "Identification is applied to the packing and the label rather than to the spherical surface, because a mark on the working surface is a defect in a sealing or a running application."
          },
          {
            title: "Protective packing",
            body: "The packing level and the separators decide whether the spheres arrive free of contact marking, so the packing specification is part of the release package rather than an afterthought."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Ball Forms Differ from the Adjacent Forms",
    caption: "Solid ball, hollow sphere and hemispherical shell compared on the points that actually change between them.",
    columns: ["Comparison point", "Solid ball", "Hollow sphere", "Hemispherical shell"],
    rows: [
      [
        "Starting stock and route",
        "Bar or billet machined on a spherical path, with the allowance taken out in successive passes",
        "Sheet formed into a shell and closed by welding or a drawn closure, so the wall and the seam define the part",
        "Sheet pressed or spun into a dome, so the forming limit of the grade and the seam condition are the limits of the route"
      ],
      [
        "Dominant acceptance characteristic",
        "Diameter, roundness and sphericity, since the body is one solid piece with no interior condition",
        "Wall thickness and leak tightness at the closure, because the outside diameter alone says nothing about the body",
        "Wall uniformity over the dome and the condition of the rim or seam, because the half body is used as part of an assembly"
      ],
      [
        "Typical service",
        "Valve trim, bearing elements, mixing and milling media and precision weights where density and wear resistance decide the grade",
        "Buoyancy and weight-critical applications where displacement has to be controlled inside the body",
        "Tank and vessel heads and welded sphere assemblies where the dome becomes part of a larger welded structure"
      ],
      [
        "Order basis emphasis",
        "Diameter with tolerance, roundness class, surface finish and the mating seat or race it has to work against",
        "Diameter with tolerance, minimum wall, closure method, internal volume and the leak or pressure verification",
        "Diameter and height of the dome, wall, rim or weld preparation, the forming route and the assembly boundary it belongs to"
      ]
    ],
    footnote: "A ball order is named by the body it is made from, not by the grade it is made of. State the grade, the condition, the diameter and tolerance, the body type, the wall and closure requirement, the interface and the inspection scope in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);