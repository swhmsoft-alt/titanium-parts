/**
 * MMO linear anode product page — content model.
 *
 * The page is a 1:1 replica of the reference product page: fourteen
 * sections in the same order, the same card structure, the same four
 * data tables and the same six FAQ entries. Every string that the buyer
 * reads lives here so that the template stays free of business logic.
 *
 * The section ids are the anchor targets of the sticky section nav.
 */

/** One image slot: the local file and the alt text that describes it. */
export interface MloImage {
  /** Path under public/images. */
  src: string;
  /** Alternative text, describing what the photograph shows. */
  alt: string;
}

/** A titled block with a paragraph underneath. */
export interface MloTextBlock {
  title: string;
  body: string;
}

/** A numbered card in the design-basis grid. */
export interface MloNumberedCard extends MloTextBlock {
  /** Two digit ordinal, e.g. "01". */
  index: string;
}

/** One row of the output rating table. */
export interface MloRatingRow {
  /** Output per metre, metric. */
  metric: string;
  /** The same rating in imperial practice. */
  imperial: string;
  /** Whether the rating is a stock direction or a reviewed one. */
  status: string;
  /** What has to be settled before the rating goes on the order. */
  confirm: string;
}

/** One row of a two column technical data table. */
export interface MloSpecRow {
  label: string;
  value: string;
}

/** A technical data table with its own heading. */
export interface MloSpecTable {
  heading: string;
  rows: MloSpecRow[];
}

/** One row of the anode form comparison table. */
export interface MloComparisonRow {
  product: string;
  whatItIs: string;
  direction: string;
  /** Route of the sibling product page, or null for the page itself. */
  href: string | null;
  /** Link text for the sibling product. */
  linkLabel: string | null;
}

/** An application card with its own photograph. */
export interface MloApplicationCard extends MloTextBlock {
  image: MloImage;
}

/** One product option in the RFQ select. */
export interface MloProductOption {
  value: string;
  label: string;
}

/** The RFQ block: what to send and where to send it. */
export interface MloRfq {
  eyebrow: string;
  title: string;
  intro: string;
  /** Checklist of the information the buyer should send. */
  checklist: string[];
  /** Contact block on the left. */
  emailLabel: string;
  email: string;
  address: string;
  /** Product options offered in the select. */
  options: MloProductOption[];
  /** Submit button label. */
  submitLabel: string;
  /** Privacy note below the button. */
  privacy: string;
}

/** The whole page. */
export interface MloPage {
  /** Meta title, 70 characters or fewer including the brand. */
  seoTitle: string;
  /** Meta description, 70 to 175 characters. */
  description: string;
  /** Hero. */
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    note: string;
    /** Main photograph above the three thumbnails. */
    image: MloImage;
    /** The three thumbnail photographs. */
    thumbnails: MloImage[];
    /** The four figures below the hero. */
    stats: { value: string; label: string }[];
  };
  /** Sticky section navigation. */
  nav: { label: string; href: string }[];
  /** Design basis: what has to be known before the anode is chosen. */
  designBasis: {
    eyebrow: string;
    title: string;
    lede: string;
    cards: MloNumberedCard[];
    note: { title: string; body: string };
  };
  /** What the assembly is made of. */
  assembly: {
    eyebrow: string;
    title: string;
    lede: string;
    paragraphs: string[];
    components: MloTextBlock[];
    image: MloImage;
    caption: string;
  };
  /** Output rating ladder. */
  outputs: {
    eyebrow: string;
    title: string;
    lede: string;
    tableHead: [string, string, string, string];
    rows: MloRatingRow[];
    cards: MloTextBlock[];
    note: { title: string; body: string };
  };
  /** Technical specification tables. */
  technicalData: {
    eyebrow: string;
    title: string;
    lede: string;
    tables: MloSpecTable[];
    note: { title: string; body: string };
  };
  /** Custom engineering. */
  customEngineering: {
    eyebrow: string;
    title: string;
    lede: string;
    items: MloTextBlock[];
    image: MloImage;
  };
  /** Where the anodes are used. */
  applications: {
    eyebrow: string;
    title: string;
    lede: string;
    cards: MloApplicationCard[];
  };
  /** Electrical review and installation controls, side by side. */
  review: {
    electrical: {
      eyebrow: string;
      title: string;
      lede: string;
      cards: MloTextBlock[];
    };
    installation: {
      eyebrow: string;
      title: string;
      lede: string;
      cards: MloTextBlock[];
    };
  };
  /** Manufacturing and quality system. */
  quality: {
    eyebrow: string;
    title: string;
    lede: string;
    cards: MloTextBlock[];
    records: string;
    image: MloImage;
    caption: string;
  };
  /** Comparison against the sibling geometries. */
  comparison: {
    eyebrow: string;
    title: string;
    lede: string;
    tableHead: [string, string, string, string];
    rows: MloComparisonRow[];
    /** Related geometry links below the table. */
    related: { label: string; href: string }[];
  };
  /** What is settled before the quotation is written. */
  boundary: {
    eyebrow: string;
    title: string;
    lede: string;
    review: { title: string; items: string[] };
    limits: { title: string; items: string[] };
    related: { title: string; body: string; links: { label: string; href: string }[] };
  };
  /** Frequently asked questions. */
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  /** The engineering RFQ block. */
  rfq: MloRfq;
}

export const mmoLinearPage: MloPage = {
  seoTitle: 'MMO Linear Anode Manufacturer | Flexible ICCP Anodes | Titanium Parts',
  description:
    'Flexible MMO linear anode assemblies for distributed cathodic protection: 82 to 1312 mA/m output, 40 mm body, 25-year design life and project-specific cables.',

  hero: {
    eyebrow: 'MMO Linear Anode Manufacturer · Flexible ICCP Assemblies',
    title: 'MMO Linear Anodes for Distributed Cathodic Protection',
    lede:
      'Titanium Parts manufactures flexible MMO linear anode assemblies for long-run ICCP systems. Each order is configured around the required output per meter, active length, conductor and feed arrangement, installation environment, connection protection and design-life basis.',
    primaryCta: { label: 'Request Linear Anode Review', href: '#linear-rfq' },
    secondaryCta: { label: 'View Technical Data', href: '#technical-data' },
    note:
      'Final output, active length, life calculation and installation layout must be confirmed against the project CP design and approved order documents.',
    image: {
      src: '/images/titanium-anode/mmo-linear-anode-hero-reel.webp',
      alt: 'MMO flexible linear anode assembly supplied on a reel',
    },
    thumbnails: [
      {
        src: '/images/titanium-anode/mmo-linear-anode-distributed-installation.webp',
        alt: 'MMO linear anode installed for distributed cathodic protection',
      },
      {
        src: '/images/titanium-anode/mmo-linear-anode-assembly-cross-section.webp',
        alt: 'MMO linear anode cross-section and component structure',
      },
      {
        src: '/images/titanium-anode/mmo-linear-anode-components-inspection.webp',
        alt: 'MMO linear anode active wire conductor and coke assembly',
      },
    ],
    stats: [
      { value: '82–1312 mA/m', label: 'Standard output directions' },
      { value: '328 / 656', label: 'Frequently requested mA/m ratings' },
      { value: '25 years', label: 'Standard design basis at rated conditions' },
      { value: 'Up to 500 m', label: 'Reference coil length; custom available' },
    ],
  },

  nav: [
    { label: 'Design Basis', href: '#design-basis' },
    { label: 'Assembly', href: '#assembly' },
    { label: 'Output Ratings', href: '#outputs' },
    { label: 'Technical Data', href: '#technical-data' },
    { label: 'Applications', href: '#applications' },
    { label: 'Quality System', href: '#quality' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Request a Quote', href: '#linear-rfq' },
  ],


  designBasis: {
    eyebrow: 'Start with the CP design',
    title: 'Define the Electrical Duty and Installation Boundary First',
    lede:
      'A linear anode should not be selected from outer diameter or coil length alone. The CP design must connect the protected structure, current demand, environment, active length, conductor arrangement, voltage-drop limit, installation method and target life. When these inputs are incomplete, the quotation should identify them as open items rather than hide them inside a standard model description.',
    cards: [
      {
        index: '01',
        title: 'Protected Structure',
        body:
          'Identify the pipeline, tank bottom, station piping, buried steel or other asset; define its geometry, coating condition, isolation and protection zones.',
      },
      {
        index: '02',
        title: 'Environment',
        body:
          'Provide measured soil, sand or backfill resistivity, moisture and temperature information, chemical exposure, installation depth and expected seasonal variation.',
      },
      {
        index: '03',
        title: 'Electrical Duty',
        body:
          'State total CP current, target output per meter, active length, rectifier limits, feed points, cable route and the permitted voltage drop.',
      },
      {
        index: '04',
        title: 'Installation & Life',
        body:
          'Define layout, spacing, bending and pulling conditions, joints, terminations, access, commissioning evidence and the required service-life calculation basis.',
      },
    ],
    note: {
      title: 'Engineering boundary:',
      body:
        'Titanium Parts supplies the linear-anode assembly and agreed manufacturing evidence. Final CP system design, protection criteria, rectifier selection, field layout and commissioning acceptance remain subject to the project designer and applicable owner or project requirements.',
    },
  },

  assembly: {
    eyebrow: 'Complete assembly',
    title: 'What Is an MMO Linear Anode Assembly?',
    lede:
      'An MMO linear anode is a flexible packaged impressed-current anode that distributes current along an extended installation length.',
    paragraphs: [
      'The MMO-coated titanium wire is the active electrode, but it is only one part of the product. A complete assembly also needs a longitudinal conductor, controlled electrical connections, conductive coke breeze, a porous containment layer, mechanical protection and order-defined ends or lead cables.',
      'This distinction matters when quotations are compared. A bare MMO wire, a wire-and-cable subassembly and a finished coke-sock linear anode do not have the same supply boundary, electrical behavior, installation protection or field responsibilities.',
    ],
    components: [
      {
        title: 'MMO/Ti Active Wire',
        body: 'Grade 1 titanium wire with IrO₂/Ta₂O₅ MMO coating provides the active anodic surface.',
      },
      {
        title: 'Continuous Copper Conductor',
        body: 'Carries current along the installation and helps control longitudinal resistance and voltage drop.',
      },
      {
        title: 'Conductive Coke Breeze',
        body: 'Creates a conductive environment around the active element and supports distributed discharge.',
      },
      {
        title: 'Fabric & Outer Braiding',
        body: 'Retains the coke breeze and protects the flexible assembly during transport and installation.',
      },
      {
        title: 'Connections, Splices & End Seals',
        body: 'Connection spacing, sealing materials, lead-cable transitions and end treatment are controlled against the approved assembly design.',
      },
    ],
    image: {
      src: '/images/titanium-anode/mmo-linear-anode-assembly-cross-section.webp',
      alt: 'Cross-section and components of an MMO linear anode assembly',
    },
    caption:
      'Confirm the actual bill of materials, conductor, connection interval, coke properties, fabric construction and terminations in the approved technical schedule.',
  },

  outputs: {
    eyebrow: 'Current output options',
    title: 'Standard and Custom Linear Anode Output Ratings',
    lede:
      'Output per meter is a design input, not a stand-alone performance promise. Select it together with total CP demand, active length, coating and life basis, conductor size, feed arrangement, voltage drop, coke/backfill condition, soil resistivity and rectifier capability.',
    tableHead: ['Output Direction', 'Imperial Equivalent', 'Supply Status', 'What Must Be Confirmed'],
    rows: [
      {
        metric: '82 mA/m',
        imperial: '25 mA/ft',
        status: 'Standard direction',
        confirm: 'Required active length, total current, conductor and 25-year rated basis.',
      },
      {
        metric: '328 mA/m',
        imperial: '100 mA/ft',
        status: 'Standard direction',
        confirm: 'Feed arrangement, voltage drop, rectifier range, environment and design life.',
      },
      {
        metric: '656 mA/m',
        imperial: '200 mA/ft',
        status: 'Project-specific / available on request',
        confirm: 'Coating basis, conductor and joint configuration, heat/electrical limits and required evidence.',
      },
      {
        metric: '984 mA/m',
        imperial: '300 mA/ft',
        status: 'Standard direction',
        confirm: 'Current distribution, feed-point strategy, installation conditions and life calculation.',
      },
      {
        metric: '1312 mA/m',
        imperial: '400 mA/ft',
        status: 'Standard direction',
        confirm: 'Total-current and voltage-drop review, rectifier, cable, connections and rated duty.',
      },
      {
        metric: 'Other output',
        imperial: 'Order-defined',
        status: 'Custom review',
        confirm: 'Full CP design input, feasibility review and approved technical schedule.',
      },
    ],
    cards: [
      {
        title: '328 mA/m linear anode',
        body:
          'At 328 mA/m, 100 m of active length represents 32.8 A of nominal distributed output before project derating or design margins. Confirm whether the quoted length is active anode length or total delivered length, and confirm how current enters the longitudinal conductor.',
      },
      {
        title: '656 mA/m linear anode',
        body:
          'At 656 mA/m, 100 m of active length represents 65.6 A on the stated arithmetic basis. Because this is a project-specific direction, the quotation should define the coating/life basis, conductor and connection arrangement, feed points, test scope and operating limits.',
      },
    ],
    note: {
      title: 'Do not mix rating boundaries:',
      body:
        'maximum output, rated continuous output, design output and project operating output are not automatically the same. The approved datasheet and CP calculation should use one definition consistently.',
    },
  },

  technicalData: {
    eyebrow: 'Technical specification',
    title: 'MMO Linear Anode Technical Data',
    lede:
      'The values below describe our current reference supply directions. The quotation and approved technical schedule control the delivered configuration.',
    tables: [
      {
        heading: 'Electrical / Active System',
        rows: [
          { label: 'MMO coating', value: 'IrO₂ / Ta₂O₅' },
          { label: 'Titanium substrate', value: 'Grade 1' },
          { label: 'Standard output', value: '82, 328, 984 and 1312 mA/m' },
          { label: 'Custom output', value: 'Including 656 mA/m and other reviewed duties' },
          { label: 'Standard design basis', value: '25 years at confirmed rated conditions' },
          { label: 'Internal conductor', value: 'Copper, ≥10 mm² or project-defined' },
          { label: 'Typical connection spacing', value: '3 m ±5%, subject to approved design' },
          { label: 'Contact resistance', value: '≤0.009 Ω on the stated inspection basis' },
        ],
      },
      {
        heading: 'Mechanical / Packaging',
        rows: [
          { label: 'Flexible anode OD', value: '40 ±2 mm' },
          { label: 'Cable insulation', value: 'XLPE/PVC or project-specific' },
          { label: 'Alternative cable', value: 'PVDF/HMWPE for selected chemical or chloride environments' },
          { label: 'Coke breeze content', value: '≥98%' },
          { label: 'Coke particle size', value: '0.1–1.0 mm' },
          { label: 'Coke volume resistivity', value: '≤0.05 Ω·m' },
          { label: 'Typical product weight', value: '1.25–1.35 kg/m' },
          { label: 'Reference coil length', value: 'Up to 500 m; custom length available' },
        ],
      },
    ],
    note: {
      title: 'Order-defined items:',
      body:
        'minimum bend radius, pulling-force limit, permitted field cuts, reel dimensions, shipping weight, conductor/feed arrangement, lead-cable length, joint count, end sealing, identification and inspection sampling must be confirmed for the selected configuration. They are not inferred from the 40 mm outer diameter.',
    },
  },

  customEngineering: {
    eyebrow: 'Custom engineering',
    title: 'Configure the Assembly Around the Approved CP Layout',
    lede:
      'A useful custom quotation does more than change the coil length. It closes the electrical and mechanical interfaces that determine whether the assembly can be installed, energized, tested and traced as intended.',
    items: [
      {
        title: 'Output & Active Length',
        body: 'Rated mA/m, active length, total length, total current, life basis and any inactive lead sections.',
      },
      {
        title: 'Conductor & Feed Points',
        body: 'Conductor section, cable construction, current-entry arrangement, joint interval and voltage-drop basis.',
      },
      {
        title: 'Connection Protection',
        body: 'Anode-to-conductor joints, splices, end seals, lead transition, water/chemical exposure and mechanical protection.',
      },
      {
        title: 'Installation Handling',
        body: 'Reel dimensions, pay-off direction, pulling method, route, bending limits, trench or sand-pad condition and labeling.',
      },
      {
        title: 'Inspection & Documents',
        body: 'Coating/production record, continuity and resistance checks, dimensions, length record, labels and packing list.',
      },
      {
        title: 'Delivery Configuration',
        body: 'Coil/reel length, lead cable, junction accessories, quantity, preservation, shipping support and release documents.',
      },
    ],
    image: {
      src: '/images/titanium-anode/mmo-linear-anode-custom-assembly.webp',
      alt: 'Custom MMO linear anode assembly for an ICCP project',
    },
  },

  applications: {
    eyebrow: 'Applications & installation',
    title: 'Where Distributed Linear Anodes Fit',
    lede:
      'Linear anodes are most useful when the CP design needs distributed current along an extended or geometrically complex area. Application names alone do not determine suitability; each layout still requires current-demand, resistivity, interference, monitoring and installation review.',
    cards: [
      {
        title: 'Buried Pipelines',
        body:
          'Parallel or distributed installation can reduce dependence on one remote discharge point where the route and CP study support this approach.',
        image: {
          src: '/images/titanium-anode/mmo-linear-anode-buried-pipeline.webp',
          alt: 'MMO linear anode used beside a long-distance buried pipeline',
        },
      },
      {
        title: 'Tank Bottoms',
        body:
          'Concentric, parallel or other engineered layouts can distribute current beneath aboveground storage tank bottoms.',
        image: {
          src: '/images/titanium-anode/mmo-linear-anode-distributed-installation.webp',
          alt: 'MMO linear anode layout for aboveground storage tank bottom cathodic protection',
        },
      },
      {
        title: 'Dense Piping Networks',
        body:
          'Stations, chemical plants and power facilities may use distributed layouts where multiple buried structures and shielding complicate current delivery.',
        image: {
          src: '/images/titanium-anode/mmo-linear-anode-dense-piping-network.webp',
          alt: 'Distributed MMO linear anode for dense underground piping networks',
        },
      },
      {
        title: 'Buried Assets & Selected Concrete',
        body:
          'Configuration must reflect embedment, cover, resistivity, connection protection and accessibility; concrete work requires a separate installation review.',
        image: {
          src: '/images/titanium-anode/mmo-linear-anode-buried-assets.webp',
          alt: 'MMO linear anode application for buried steel and selected concrete cathodic protection',
        },
      },
    ],
  },

  review: {
    electrical: {
      eyebrow: 'Electrical review',
      title: 'Voltage Drop, Feed Points and Current Distribution',
      lede:
        'The rated mA/m value establishes a distributed-output basis. It does not prove that the same current reaches every part of a long installation. Conductor resistance, current-entry location, connection interval, active length and total current determine the longitudinal voltage profile.',
      cards: [
        {
          title: 'Calculate total nominal current',
          body:
            'Multiply the selected output per meter by active length, then apply the project calculation method, margins and operating assumptions.',
        },
        {
          title: 'Review the feed arrangement',
          body:
            'A one-end, two-end, center or multiple-feed arrangement may produce different current and voltage behavior. Define it on the approved electrical drawing.',
        },
        {
          title: 'Coordinate rectifier and cable limits',
          body:
            'Check rectifier voltage/current range, header cable, junction boxes, field cable and acceptable voltage drop as one electrical path.',
        },
      ],
    },
    installation: {
      eyebrow: 'Installation controls',
      title: 'Lay, Connect and Commission Without Damaging the Assembly',
      lede:
        'Installation controls should be agreed before manufacture because the site route affects reel size, lead configuration, joint protection, handling and inspection access.',
      cards: [
        {
          title: 'Trench Laying',
          body:
            'Control depth, spacing, support, backfill, sharp objects, crossing points and separation from the protected structure.',
        },
        {
          title: 'Tank-Bottom Layout',
          body:
            'Coordinate the sand pad, liner, ring or parallel geometry, feed locations, reference electrodes and future test access.',
        },
        {
          title: 'Pulling & Pay-Off',
          body:
            'Use the approved reel direction, route and handling limits. Do not infer pulling force or bend radius from outside diameter.',
        },
        {
          title: 'Commissioning',
          body:
            'Check polarity, continuity, isolation, rectifier output, structure-to-electrolyte potentials and current distribution against the CP procedure.',
        },
      ],
    },
  },

  quality: {
    eyebrow: 'Inside our factory',
    title: 'Inside Our Manufacturing & Quality System',
    lede:
      'The release package should match the ordered assembly, not a generic anode certificate. Our production reviews the MMO/Ti element, longitudinal conductor, defined connections, containment materials, finished length and packing against the confirmed specification.',
    cards: [
      {
        title: '1. Material & Build Identity',
        body: 'Confirm titanium wire, coating direction, conductor, cable, coke and fabric/outer protection.',
      },
      {
        title: '2. Assembly Control',
        body: 'Control connection interval, splices, end treatment, active/total length and assembly identification.',
      },
      {
        title: '3. Electrical Verification',
        body: 'Continuity, connection resistance and other order-defined electrical checks are recorded to the agreed method.',
      },
      {
        title: '4. Final Inspection',
        body: 'Review outside diameter, length, reel/coil condition, labels, mechanical protection and packing.',
      },
    ],
    records:
      'Available records may include the technical datasheet, coating or production record, inspection record, connection record, electrical test results, finished-length record, labels and packing list—only as agreed for the order.',
    image: {
      src: '/images/titanium-anode/mmo-linear-anode-components-inspection.webp',
      alt: 'MMO linear anode components and assembly inspection reference',
    },
    caption:
      'Inspection scope, sampling, acceptance values and supplied documents must be agreed before production.',
  },

  comparison: {
    eyebrow: 'Anode form comparison',
    title: 'Linear Anode vs MMO Wire, Ribbon and Mesh Ribbon',
    lede:
      'These products can all support distributed-current applications, but they are not interchangeable. Start with the required installation geometry and supply boundary.',
    tableHead: ['Product', 'What It Is', 'Typical Selection Direction', 'Next Step'],
    rows: [
      {
        product: 'MMO Linear Anode',
        whatItIs: 'Packaged flexible assembly with active MMO/Ti element, conductor, coke and protective layers.',
        direction: 'Long-run distributed ICCP where a complete installable assembly is required.',
        href: null,
        linkLabel: null,
      },
      {
        product: 'MMO Wire Anode',
        whatItIs: 'Flexible MMO-coated titanium active electrode.',
        direction: 'Embedded or custom assemblies where the project defines the surrounding system.',
        href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
        linkLabel: 'View MMO Wire Anode →',
      },
      {
        product: 'MMO Ribbon Anode',
        whatItIs: 'Flat MMO-coated titanium ribbon.',
        direction: 'Tank bottoms, concrete or other field-fabricated distributed layouts.',
        href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/',
        linkLabel: 'View MMO Ribbon Anode →',
      },
      {
        product: 'MMO Mesh Ribbon',
        whatItIs: 'Open expanded geometry with greater contact area.',
        direction: 'Selected reinforced-concrete or large-area embedded layouts.',
        href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
        linkLabel: 'View MMO Mesh Ribbon →',
      },
    ],
    related: [
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
      { label: 'MMO Canister Anode', href: '/titanium-anode/mmo-anode/mmo-canister-anode/' },
      { label: 'All MMO Anodes', href: '/titanium-anode/mmo-anode/' },
    ],
  },

  boundary: {
    eyebrow: 'Before requesting a quote',
    title: 'Define the Linear-Anode Assembly and Electrical Boundary Before Quotation',
    lede:
      'An MMO linear anode is an engineered distributed assembly, not simply coated wire sold by length. Quotation review should connect the required output to the active element, conductor, feed arrangement, voltage drop, connections and installation environment.',
    review: {
      title: 'What we review before manufacture',
      items: [
        'State required output per unit length and the conditions used to calculate it.',
        'Separate active length, inactive lead length and total supplied length.',
        'Define conductor size, feed points, allowable voltage drop and cable interface.',
        'Confirm coke breeze, fabric sleeve, backfill or other assembly components in the supply scope.',
        'Agree splice, end-seal, reel, handling and installation-document requirements.',
      ],
    },
    limits: {
      title: 'What the product specification cannot replace',
      items: [
        'A bare MMO wire and a complete packaged linear anode are different supply scopes.',
        'Nominal 328 or 656 ft lengths do not define output, voltage drop or suitability without the full electrical basis.',
        'Route design, groundbed layout and field installation remain project inputs unless included in the order.',
      ],
    },
    related: {
      title: 'Related anode options',
      body:
        'Compare the adjacent product families only after the reaction, environment and supply boundary are clear.',
      links: [
        { label: 'MMO Wire Anodes', href: '/titanium-anode/mmo-anode/mmo-wire-anode/' },
        { label: 'MMO Ribbon Anodes', href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/' },
        { label: 'MMO Canister Anodes', href: '/titanium-anode/mmo-anode/mmo-canister-anode/' },
        { label: 'MMO Tubular Anodes', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
        { label: 'All MMO Anode Forms', href: '/titanium-anode/mmo-anode/' },
      ],
    },
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'MMO Linear Anode FAQs',
    items: [
      {
        q: 'What is an MMO linear anode?',
        a: 'It is a flexible packaged ICCP anode that combines an MMO/Ti active element, longitudinal conductor, conductive coke breeze and protective fabric structure to distribute current along an extended length.',
      },
      {
        q: 'Is it the same as MMO wire?',
        a: 'No. MMO wire is the active electrode. A complete linear-anode assembly also includes the conductor, connections, conductive filling, containment, mechanical protection and ends or lead cables.',
      },
      {
        q: 'How should 328 and 656 mA/m be compared?',
        a: 'Compare total current at the required active length, then review coating/life basis, conductor, feed points, voltage drop, rectifier, environment, cable and inspection scope. A higher mA/m value is not automatically the better design.',
      },
      {
        q: 'Does the 25-year basis apply to every project?',
        a: 'No. It applies to the confirmed standard configuration and rated design assumptions. The quotation must identify the output, coating and life basis, environment, duty and calculation boundary for the project.',
      },
      {
        q: 'Can a 500 m coil be cut at site?',
        a: 'Only when the approved design and supplier instructions allow it. Cutting changes active length, total output, end sealing, feed arrangement, traceability and responsibility for field termination.',
      },
      {
        q: 'What data are needed for a quotation?',
        a: 'Provide the asset, CP current demand, proposed output per meter, active and total length, resistivity/backfill, layout, conductor and cable, feed arrangement, life target, quantity, drawings and required documents.',
      },
    ],
  },

  rfq: {
    eyebrow: 'Engineering RFQ',
    title: 'Request a Custom MMO Linear Anode Review',
    intro:
      'Send the information already available. Unknown values can remain open for review, but the output rating, active length, conductor and installation boundary should be resolved before the order is released.',
    checklist: [
      'Protected structure and CP current demand',
      '82 / 328 / 656 / 984 / 1312 mA/m or custom direction',
      'Active length, total length and quantity',
      'Soil, sand or backfill resistivity and installation layout',
      'Conductor, cable, feed points, joints and terminations',
      'Design-life target, inspection and document requirements',
    ],
    emailLabel: 'Prefer email?',
    email: 'sales@titanium-parts.com',
    address: 'Titanium Valley, Baoji City, Shaanxi Province, China',
    options: [
      { value: '82 mA/m MMO Linear Anode', label: '82 mA/m MMO Linear Anode' },
      { value: '328 mA/m MMO Linear Anode', label: '328 mA/m MMO Linear Anode' },
      { value: '656 mA/m Custom MMO Linear Anode', label: '656 mA/m Custom MMO Linear Anode' },
      { value: '984 mA/m MMO Linear Anode', label: '984 mA/m MMO Linear Anode' },
      { value: '1312 mA/m MMO Linear Anode', label: '1312 mA/m MMO Linear Anode' },
      { value: 'Custom Output / Configuration', label: 'Custom Output / Configuration' },
      { value: 'Not Sure — Need Technical Review', label: 'Not Sure — Need Technical Review' },
    ],
    submitLabel: 'Send MMO Linear Anode Inquiry',
    privacy: 'Your information will be used only to review and respond to this inquiry.',
  },
};










