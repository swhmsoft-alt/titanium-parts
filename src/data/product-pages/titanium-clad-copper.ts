import { buildStandardPage } from './standard';
import type { StandardRaw } from './standard';

/** Data of the titanium-clad copper conductor product detail page. */
const raw: StandardRaw = {
  M: "Titanium-Clad Copper",
  slug: "titanium-clad-copper",
  hero: {
    eyebrow: "Bar \u00b7 Rod \u00b7 Tube \u00b7 Busbar",
    title: "Titanium Clad Copper Bar, Rod & Busbar Manufacturer",
    desc: "Source titanium-clad copper conductors with core, cladding ratio, current duty and inspection reviewed against your order requirements.",
    img: "/images/titanium-products/titanium-clad-copper.webp",
    tags: [
      "Bar \u00b7 Rod \u00b7 Tube \u00b7 Connector",
      "Drawing-Based Custom",
      "Order-Specific MTC & Inspection"
    ]
  },
  cta: {
    primary: { href: "#forms-section", label: "Review Clad Forms" },
    secondary: { href: "#tp-rfq", label: "Request a Quote" }
  },
  orderBasis: [
    {
      title: "Core & Cladding Material",
      body: "The copper grade and the titanium grade of the cladding, the specification the composite is supplied against, the cladding thickness or ratio, and any supplementary requirement the service implies."
    },
    {
      title: "Section & Current Duty",
      body: "Cross-section, length, the current the conductor has to carry, the duty cycle and the electrolyte or medium it sits in, because the section and the cladding ratio are decided together."
    },
    {
      title: "Bond & Surface",
      body: "Whether the bond is metallurgical or mechanical, the interface quality the order expects, the surface state of the titanium side, and the sealing or end-condition requirement."
    },
    {
      title: "Evidence",
      body: "MTC for the composite, the bond verification, the inspection record for section and interface, any third-party check, marking, packing and release documents."
    }
  ],
  grades: [
    {
      img: "/images/titanium-products/clad-copper-grade-2.webp",
      alt: "Clad Grade 2",
      title: "Grade 2 Cladding",
      spec: "UNS R50400 \u00b7 ASTM B898 / B265 as applicable",
      body: "Commercially pure titanium on the process side, the usual choice where the conductor carries current in a chloride or oxidising bath and the cost of a higher cladding grade is not justified."
    },
    {
      img: "/images/titanium-products/clad-copper-grade-7.webp",
      alt: "Clad Grade 7",
      title: "Grade 7 Cladding",
      spec: "UNS R52400 \u00b7 ASTM B898 / B265",
      body: "Palladium-enhanced titanium for reducing acid and chloride-rich media, selected where the pure grade no longer covers the chemistry at the interface."
    },
    {
      img: "/images/titanium-products/clad-copper-grade-12.webp",
      alt: "Clad Grade 12",
      title: "Grade 12 Cladding",
      spec: "UNS R53400 \u00b7 ASTM B898 / B265",
      body: "High-strength titanium cladding for conductors that have to carry mechanical load as well as current, where the busbar is also a structural support."
    },
    {
      img: "/images/titanium-products/clad-copper-grade-1.webp",
      alt: "Clad Grade 1",
      title: "Grade 1 Cladding",
      spec: "UNS R50250 \u00b7 ASTM B898 / B265",
      body: "The lowest-strength commercially pure grade, used where the cladding exists for corrosion resistance alone and the mechanical duty of the conductor is carried by the copper core."
    }
  ],
  forms: [
    {
      title: "Clad Bar / Busbar",
      body: "Flat or rectangular composite conductor for electroplating lines and electrochemical cells, where the busbar carries current into the tank and the titanium face has to survive the chemistry."
    },
    {
      title: "Clad Rod",
      body: "Round composite rod for anodes, hangers and connection components, where the part has to be machined and threaded while keeping the titanium layer intact at the exposed end."
    },
    {
      title: "Clad Tube",
      body: "Composite tube for fluid handling and dual-metal conductor duty, where the copper carries the current or the pressure and the titanium carries the media."
    },
    {
      title: "Custom / Connector",
      body: "Drawing-based custom connector, hanger and machined clad-copper assembly, where the interface geometry and the sealing boundary decide how the part is built."
    }
  ],
  processSteps: [
    {
      img: "/images/titanium-products/requirement-review-titanium-supply.webp",
      alt: "Requirement Review",
      title: "Duty & Interface Review",
      body: "The current duty, the medium, the section, the cladding ratio and the interface geometry are read together before any composite is assembled or machined."
    },
    {
      img: "/images/titanium-products/material-identity-verification.webp",
      alt: "Material and Route Confirmation",
      title: "Core & Cladding Material Confirmation",
      body: "The copper core and the titanium cladding are identified by grade and heat, and the specification the composite is supplied against is confirmed against the quotation."
    },
    {
      img: "/images/titanium-products/processing-interface-confirmation.webp",
      alt: "Bonding and surface control",
      title: "Cladding, Bonding & Machining Route",
      body: "The cladding or bonding route, the interface preparation, the machining allowance and the surface protection of the titanium face are carried out to the agreed process."
    },
    {
      img: "/images/titanium-products/inspection-documentation-records.webp",
      alt: "Inspection and Records",
      title: "Section, Bond & Surface Inspection",
      body: "Section dimensions, cladding thickness or ratio, bond integrity and the titanium surface are inspected, and any third-party verification stated in the order is performed."
    },
    {
      img: "/images/titanium-products/marking-packing-release.webp",
      alt: "Marking, Packing and Release",
      title: "Marking, Packing & Release",
      body: "Identification on the part without contaminating the titanium face, the certificate index for both metals, the protective packing and the delivery basis are checked before release."
    }
  ],
  mfgVideo: {
    poster: "/images/titanium-products/titanium-plates-sheets-manufacturer.webp",
    src: "/images/titanium-products/titanium-products-manufacturer.mp4"
  },
  applications: [
    {
      img: "/images/titanium-products/electroplating-clad-copper.webp",
      alt: "Electroplating Clad",
      title: "Electroplating & Anodizing",
      spec: "Define the tank chemistry, the current range, the liquid level, the hanger and contact arrangement and the change-out method, because the cladding grade follows from the bath rather than the reverse."
    },
    {
      img: "/images/titanium-products/chlor-alkali-clad-copper.webp",
      alt: "Chlor-Alkali Clad",
      title: "Chlor-Alkali & Electrolysis",
      spec: "Map the wet chlorine, brine, hypochlorite and condensate zones, and assign the sealing responsibility for the transition between the titanium face and the copper core."
    },
    {
      img: "/images/titanium-products/electrowinning-clad-copper.webp",
      alt: "Electrowinning Clad",
      title: "Electrowinning & Electrorefining",
      spec: "State the electrolyte, the impurity load, the cell geometry, the current, the contact arrangement and the cathode requirement the conductor has to support."
    },
    {
      img: "/images/titanium-products/cathodic-protection-clad-copper.webp",
      alt: "Cathodic Protection Clad",
      title: "Cathodic Protection & Marine",
      spec: "Define the conductor role, the exposure, the current, the cable connection, the sealing detail, the monitoring arrangement and the installation boundary."
    }
  ],
  evidence: [
    {
      title: "Composite material identity",
      body: "The copper grade and the titanium grade of the cladding, the heat or lot references of both metals, and the specification the composite is supplied against."
    },
    {
      title: "Section & interface record",
      body: "Measured section dimensions, the cladding thickness or ratio, the bond verification method and its result, with the sampling plan and the acceptance criterion named."
    },
    {
      title: "Test and inspection",
      body: "Mechanical testing of the composite, NDT or third-party checks, and any coating or surface verification stated in the agreed scope and recorded against the order."
    },
    {
      title: "Document release",
      body: "Required certificate index for both metals, traceability level, language, approval route, protective packaging and delivery timing."
    }
  ],
  controls: [
    {
      title: "Core & Cladding Basis",
      body: "The copper grade, the titanium cladding grade, the composite specification and revision, the cladding thickness or ratio, and the heat or lot references of both metals."
    },
    {
      title: "Section & Duty",
      body: "Cross-section, length, the current and duty cycle, the medium, and the machining allowance left for the customer's own fitting and sealing work."
    },
    {
      title: "Bond & Surface",
      body: "Whether the bond is metallurgical or mechanical, the interface quality expected, the surface state of the titanium face, and the protection applied before packing."
    },
    {
      title: "Inspection Scope",
      body: "Which characteristics are measured on every piece, which are sampled along the length, and which third-party or NDT checks are part of the order."
    }
  ],
  faq: [
    {
      q: "What information is needed for a titanium-clad copper quotation?",
      a: "Provide the copper grade, the titanium cladding grade, the governing composite specification and revision, the cross-section and length, the current and duty cycle, the medium, the cladding thickness or ratio, the bond expectation, the machining allowance, the surface requirement and the inspection, testing and document requirements. A drawing is optional for the first enquiry and normally needed for a connector or a hanger."
    },
    {
      q: "Which cladding grades can be reviewed?",
      a: "Common enquiries include Grade 2, Grade 7, Grade 12 and Grade 1 cladding. Other grades may be reviewed. Availability, the bond route, the cladding ratio and the applicable specification are confirmed for the specific quotation."
    },
    {
      q: "Can custom or drawing-based clad copper parts be supplied?",
      a: "Yes, drawing-based items can be reviewed against the required section, length, current duty, cladding grade and ratio, bond type, interface geometry, machining allowance, surface requirement and quantity. The accepted process and the final scope are stated in the quotation."
    },
    {
      q: "Are MTC, traceability and third-party inspection included automatically?",
      a: "No. Required certificates for both metals, traceability level, dimensional and bond records, testing, NDT and third-party involvement should be specified before quotation. Only the agreed package is included in the order scope."
    },
    {
      q: "Does material compliance equal finished-product approval?",
      a: "No. A raw-material specification does not establish finished-device approval, clinical suitability, sterilization validation, regulatory compliance or application qualification. Those responsibilities remain with the device or system manufacturer."
    },
    {
      q: "Are stock, MOQ and lead time fixed for clad copper?",
      a: "No. They depend on the copper and titanium grades, the composite specification, the section, the bond route, the cladding ratio, the machining requirement, inspection, quantity and documentation. Confirm the exact combination during quotation review."
    }
  ],
  copy: {
    orderBasis: {
      eyebrow: "Clad Conductor Order Basis",
      heading: "State the Clad Conductor Order Basis Before Comparing Price"
    },
    catalog: {
      lede: "Cladding grades and conductor forms below are reviewed for titanium-clad copper against ASTM B898 and B265 as applicable. Availability, bond route and cladding ratio are confirmed per order."
    },
    evidence: {
      heading: "Specify the Composite Release Package",
      lede: "Two certificates and one interface. The release package states what is recorded for the copper core, what is recorded for the titanium cladding, how the bond is verified, and which documents travel with the part."
    },
    controls: {
      heading: "Confirm Four Points Before Ordering Clad Copper",
      lede: "Core and cladding basis, section and duty, bond and surface, inspection scope. Each one changes the price more than the composite name does, and each one is written down before any part is assembled or machined."
    },
    applications: {
      eyebrow: "Service Context",
      lede: "A clad conductor is chosen against the cell it serves. An electroplating hanger, a chlor-alkali busbar, an electrowinning contact and a cathodic protection anode are reviewed on different media, duties and interface conditions, and the order basis follows from that role."
    },
    process: {
      lede: "Clad copper is bonded, machined, inspected and packed in our own facility. The bonding route, the machining allowance and the inspection scope are confirmed by quotation against the approved order basis."
    },
    mfg: {
      lede: "Bonding, interface preparation, machining, surface protection and packaging are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation."
    },
    rfq: {
      checks: [
        "Copper, cladding grade and composite specification review",
        "Section, current duty, cladding ratio and bond expectation",
        "Inspection, testing and document requirements",
        "Quotation-specific availability and delivery basis"
      ],
      submitLabel: "Send Clad Copper Inquiry",
      variant: "titanium-clad-copper"
    }
  }
};
raw.extras = [
  {
    kind: "detailSections",
    tone: "alt",
    eyebrow: "Clad Conductor Specifics",
    heading: "Four Points That Are Decided Differently for Titanium-Clad Copper",
    lede: "Every clad conductor order carries the same grade list and the same certificate language, but the bonding route, the failure modes, the inspection set and the supply form are decided separately. Each of the four points below is written into the order basis instead of being assumed from the product name.",
    groups: [
      {
        title: "Bonding Route",
        items: [
          {
            title: "Metallurgical against mechanical bond",
            body: "A metallurgical bond makes the two metals behave as one section under load and lets the composite be machined like a solid conductor, while a mechanical bond relies on the core and the layer being held together by the section itself, so the downstream stress and the allowable exposure have to be stated separately."
          },
          {
            title: "Cladding grade against cladding ratio",
            body: "The cladding grade is chosen against the chemistry of the medium, while the cladding ratio is chosen against the current the conductor has to carry, so a heavier copper section does not remove the need to specify the titanium layer the process actually sees."
          },
          {
            title: "Interface preparation before bonding",
            body: "The bond depends on the prepared interface, so the cleaning, the roughness and the fit-up of the two metals are part of the route, and a surface that is handled afterwards or left for a long period can lose the bond quality it was assembled with."
          }
        ]
      },
      {
        title: "Failure Modes",
        items: [
          {
            title: "Delamination at the interface",
            body: "A composite that is machined too deeply, loaded in bending or exposed to a thermal cycle can separate at the interface, so the machining allowance and the working geometry are part of the order rather than a detail left to the fabricator."
          },
          {
            title: "Exposed copper in an aggressive bath",
            body: "Any point where the copper core reaches the medium corrodes far faster than the titanium face, so the end condition, the sealing detail and the transition from titanium to copper decide whether the part survives the service."
          },
          {
            title: "Heat and contact transfer",
            body: "A conductor in an electrolytic cell is a current path and a heat path at the same time, so the joint that carries the current into the bath has to be designed against the contact itself rather than against the conductor body alone."
          }
        ]
      },
      {
        title: "Inspection Differences",
        items: [
          {
            title: "Cladding thickness as a measured value",
            body: "The cladding is measured as a thickness or as a ratio at the delivered section, because a nominal ratio hides the local thinning that a machined or a handled part can develop, so the measurement is reported per piece rather than per lot."
          },
          {
            title: "Bond verification method",
            body: "The bond is verified by a stated method with a stated acceptance criterion, since the test chosen decides what the result actually proves about the interface."
          },
          {
            title: "Surface condition on the titanium face",
            body: "The titanium face is inspected as a surface in its own right, because it is the part that meets the medium, and a mark, a burr or a contaminated patch on that face is a defect even when the composite underneath is sound."
          }
        ]
      },
      {
        title: "Supply Form",
        items: [
          {
            title: "Bar, rod, tube or machined part",
            body: "The order can end on a bar or busbar for the customer's own fitting, a rod for a hanger or an anode, a tube for fluid and conductor duty, or a fully machined connector, and that choice moves part of the work from our workshop to the customer's line, so it is stated in the quotation."
          },
          {
            title: "Machining allowance and end condition",
            body: "The machining allowance and the condition of the exposed end decide whether the customer can fit the part directly or has to machine it further, and that difference has to be settled before the part is made rather than after it arrives."
          },
          {
            title: "Identification that protects the process face",
            body: "Identification is applied to the copper side or to the tag rather than to the titanium face, because a mark on the face that meets the medium is a defect in the service."
          }
        ]
      }
    ]
  },
  {
    kind: "specTable",
    tone: "plain",
    eyebrow: "Form Boundaries",
    heading: "How Clad Conductor Forms Differ from the Adjacent Forms",
    caption: "Clad bar and busbar, clad rod and clad tube compared on the points that actually change between them.",
    columns: ["Comparison point", "Clad bar / busbar", "Clad rod", "Clad tube"],
    rows: [
      [
        "How the conductor is used",
        "Carries current horizontally into or out of a tank or cell as a flat or rectangular section, so the contact surface area and the flat face decide how the current enters the bath",
        "Acts as a hanger, a connection pin or an anode support, so the part is machined, threaded or fitted rather than fed through a fixed contact",
        "Carries fluid, a current or both inside a sealed wall, so the interface has to work against a pressure boundary rather than against an open bath"
      ],
      [
        "Dominant material concern",
        "The current density across the section and the condition of the wide titanium face, because the conductor is loaded in bending over its whole length",
        "The integrity of the titanium layer around a machined feature, because machining removes material from the composite and can reach the core if the allowance is wrong",
        "The bond along a cylindrical interface and the sealing of the transition, because the tube has to hold a boundary as well as carry its duty"
      ],
      [
        "Dimensional emphasis",
        "Cross-section width and thickness, length, the contact end geometry and the flatness of the process face",
        "Diameter, length, thread or fit geometry, the machining allowance and the condition of the exposed end",
        "Outer and inner diameter, wall thickness, length, the cladding ratio on the bore, and the concentricity and roundness of the finished tube"
      ],
      [
        "Typical application",
        "Electroplating and anodizing lines, chlor-alkali cells and electrowinning plant, where the busbar spans a cell and feeds current into the electrolyte",
        "Anode hangers, contact pins, connection components and cathodic protection anodes, where a compact round part is installed into an existing fitting",
        "Fluid-handling lines and dual-metal conductor duties, where a copper or titanium liner carries the media inside a composite wall"
      ]
    ],
    footnote: "A clad conductor order is named by the duty and the geometry it serves, not by the composite name. State the copper and titanium grades, the section, the current duty, the medium, the cladding ratio, the bond expectation and the inspection scope in the inquiry rather than relying on the product name."
  }
];

export const page = buildStandardPage(raw);
