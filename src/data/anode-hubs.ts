/**
 * Content blocks for the titanium anode category hubs and system pages.
 *
 * Each export belongs to exactly one route. The pages stay presentational;
 * every statement that a buyer would compare between products lives here
 * so it can be reviewed in one place.
 */

/* ------------------------------------------------------------------ */
/* MMO product family hub — /titanium-anode/mmo-anode/                 */
/* ------------------------------------------------------------------ */

export interface MmoHubSelectionRow {
  /** Geometry name. */
  geometry: string;
  /** Physical form in one line. */
  form: string;
  /** Where the geometry is normally used. */
  bestFor: string;
  /** What limits the choice. */
  constraint: string;
  /** Route of the detail page. */
  href: string;
}

export const mmoHub = {
  title: 'MMO Titanium Anodes',
  description:
    'Mixed metal oxide titanium anodes in eight geometries for impressed current protection and electrochemical cells, with coating, substrate and geometry selection basis.',
  lede:
    'MMO titanium anodes are a titanium substrate carrying a mixed metal oxide coating. The family covers eight geometries, each with its own installation method, current distribution and order basis.',
  heroImage: '/images/titanium-anode/ru-ir-mmo-anodes.webp',
  heroImageAlt: 'Mixed metal oxide coated titanium anodes',
  naming: {
    title: 'MMO and DSA Are Not Two Different Products',
    body:
      'MMO describes the coating chemistry — a mixed metal oxide layer applied to a titanium substrate and defined by its composition and loading. DSA describes dimensional stability, the property that lets a coated electrode keep its geometry and its active area under load. Industrial markets frequently use both terms for the same or an overlapping product. A qualified MMO/Ti anode therefore means a titanium substrate with a defined mixed metal oxide coating, not a generic label, and the composition, the loading basis and the substrate still have to be stated for the order.',
  },
  subsystems: [
    {
      title: 'Ru-Ir Mixed Metal Oxide',
      body: 'Ruthenium and iridium oxide systems, commonly reviewed for chlorine evolution in chloride media and for electrochlorination and hypochlorite generation.',
      href: '/titanium-anode/ruthenium-coated-titanium-anodes/',
    },
    {
      title: 'Ir-Ta and Ir-Based Mixed Metal Oxide',
      body: 'Iridium and tantalum oxide systems, commonly evaluated for oxygen evolution, alkaline service and selected advanced oxidation duties.',
      href: '/titanium-anode/iridium-oxide-coated-titanium-anodes/',
    },
    {
      title: 'Ru-Ti Mixed Metal Oxide',
      body: 'Ruthenium and titanium oxide systems used where a general mixed metal oxide coating is reviewed against a defined chloride or oxidising service.',
      href: '/titanium-anode/coating-systems/',
    },
  ],
  selectionRows: [
    {
      geometry: 'Linear',
      form: 'Pre-packaged flexible string with cable, backfill and sleeve',
      bestFor: 'Pipelines, tank bottoms and concrete, over long runs',
      constraint: 'Delivered as a finished package; installation is limited to routing and jointing',
      href: '/titanium-anode/mmo-anode/mmo-linear-anode/',
    },
    {
      geometry: 'Wire',
      form: 'Bare coated wire on a spool, coil or cut length',
      bestFor: 'Pipe walls, vessel interiors and distributed protection',
      constraint: 'No backfill or conductor included; routing and termination are the buyer scope',
      href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
    },
    {
      geometry: 'Ribbon',
      form: 'Solid flat coated strip',
      bestFor: 'Tank bottoms, large surfaces and long low-profile runs',
      constraint: 'Requires a prepared and accessible surface',
      href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/',
    },
    {
      geometry: 'Mesh Ribbon',
      form: 'Expanded coated mesh strip',
      bestFor: 'Reinforced concrete and large-area distributed protection',
      constraint: 'Heavier per metre and less flexible around tight corners',
      href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
    },
    {
      geometry: 'Canister',
      form: 'Coated element in a metal canister with backfill and sealed cable',
      bestFor: 'Deep groundbeds, restricted access and marine installations',
      constraint: 'Installation depth, hole diameter and grouting must be agreed in advance',
      href: '/titanium-anode/mmo-anode/mmo-canister-anode/',
    },
    {
      geometry: 'Tubular',
      form: 'Coated titanium tube',
      bestFor: 'Groundbeds, seawater service and industrial cells',
      constraint: 'Needs backfill in soil; end closure and feed are separate details',
      href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
    },
    {
      geometry: 'Disc',
      form: 'Flat coated circular plate',
      bestFor: 'Restricted spaces, fixed positions and local duties',
      constraint: 'Point-type element; it does not distribute current along a length',
      href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
    },
    {
      geometry: 'Rod',
      form: 'Straight coated rod with a defined active length',
      bestFor: 'Compact groundbeds, marine structures and electrode assemblies',
      constraint: 'Industrial MMO product only, not a consumer anode rod',
      href: '/titanium-anode/mmo-anode/mmo-rod-anode/',
    },
  ],
  specRows: [
    { label: 'Substrate', value: 'Commercially pure titanium, typically Grade 2 or Grade 1, confirmed against the service' },
    { label: 'Coating composition', value: 'Mixed metal oxide family and the specific oxide combination for the order' },
    { label: 'Loading basis', value: 'Mass per unit coated area with its units, or a thickness basis where the order defines one' },
    { label: 'Active area', value: 'Coated surface used as the basis for the current density' },
    { label: 'Current density basis', value: 'Stated per unit of coated active area, not per unit of gross geometry' },
    { label: 'Geometry', value: 'The one of the eight forms, with dimensions and the uncoated connection zone' },
    { label: 'Operating environment', value: 'Electrolyte or soil, temperature, flow and any contaminant exposure' },
    { label: 'Design life', value: 'The basis the coating life and the substrate condition are assessed against' },
  ],
  evidence: [
    'Titanium grade certificate with heat or lot identification where specified',
    'Coating composition and loading verification with its method and units',
    'Dimensional and active-area inspection record',
    'Visual inspection of the coated surface and the uncoated connection zone',
    'Connection and sealing check where a connection is part of the order',
    'Release documents agreed in the inspection plan for that order',
  ],
  faq: [
    {
      q: 'Is every MMO titanium anode the same product?',
      a: 'No. MMO identifies the coating family, not a single formulation. Ru-Ir, Ir-Ta and Ru-Ti systems behave differently against chlorine evolution, oxygen evolution and general oxidation duties, and each of them responds to impurities, pH, temperature and load in its own way. The coating family is only the starting point of the selection.',
    },
    {
      q: 'How do I choose between the eight MMO geometries?',
      a: 'Start from the installation rather than the shape name. A long buried or immersed run is usually a linear anode; a prepared flat surface is usually a ribbon; a restricted space points to a disc or a rod; a deep groundbed points to a canister; a conventional groundbed points to a tubular anode. The design current, the environment and the access then fix the size.',
    },
    {
      q: 'What is the minimum information needed for a quotation?',
      a: 'The service conditions, the design current and its active-area basis, the coating family required, the geometry and dimensions, the connection method and the required documents. An incomplete specification is not a blocker — the missing items are identified during the technical review and confirmed before the order is released.',
    },
    {
      q: 'Can an MMO titanium anode be supplied uncoated or recoated?',
      a: 'Recoating of a used titanium substrate is possible but is a condition-based decision, not a default. The remaining substrate, deformation, cracks, welds, the connection, contamination and the coating removal route all have to be evaluated first. The recoating review on the titanium anode hub lists the items that are checked.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Coating systems hub — /titanium-anode/coating-systems/              */
/* ------------------------------------------------------------------ */

export interface CoatingComparisonRow {
  /** Coating family name. */
  family: string;
  /** Detail page. */
  href: string;
  /** Reaction the family is commonly reviewed for. */
  targetReaction: string;
  /** Media the family is normally used in. */
  media: string;
  /** How the current basis is expressed for the family. */
  currentBasis: string;
  /** What normally limits the service life. */
  lifeLimit: string;
}

export const coatingHub = {
  title: 'Coating Systems for Titanium Anodes',
  description:
    'Compare Ru-Ir, Ir-Ta, platinized and specialty titanium anode coating systems against target reaction, electrolyte, current basis and service life.',
  lede:
    'The coating is the functional part of a titanium anode. This page compares the four coating systems we supply and shows which one has to be reviewed against a given process window.',
  heroImage: '/images/titanium-anode/coating-process-loading-control.webp',
  heroImageAlt: 'Titanium anode coating process control',
  relationship: {
    title: 'MMO Contains Ru-Ir and Ir-Ta — It Is Not a Separate Level',
    body:
      'Mixed metal oxide is the coating family. Ru-Ir and Ir-Ta are specific oxide combinations inside that family, not competitors to it. A Ru-Ir anode and an Ir-Ta anode are therefore both MMO anodes, and both are also MMO geometry products, because the coating chemistry and the shape of the electrode are two independent questions. The same anode can be described as an MMO titanium anode, as a Ru-Ir coated anode and as a tubular anode at the same time. Which description a buyer needs depends on whether the decision is about the surface, the shape or the application.',
  },
  comparisonRows: [
    {
      family: 'Ru-Ir Mixed Metal Oxide',
      href: '/titanium-anode/ruthenium-coated-titanium-anodes/',
      targetReaction: 'Chlorine evolution, electrochlorination and hypochlorite generation',
      media: 'Chloride brines, seawater and chloride-bearing process streams',
      currentBasis: 'Stated per unit of coated active area for the reviewed electrolyte',
      lifeLimit: 'Impurity load, chloride level, pH and operating temperature',
    },
    {
      family: 'Ir-Ta and Ir-Based Mixed Metal Oxide',
      href: '/titanium-anode/iridium-oxide-coated-titanium-anodes/',
      targetReaction: 'Oxygen evolution and selected advanced oxidation duties',
      media: 'Alkaline and acidic electrolytes, including water treatment matrices',
      currentBasis: 'Stated per unit of coated active area under the defined potential or current duty',
      lifeLimit: 'Electrolyte composition, contaminant behaviour and mass transfer',
    },
    {
      family: 'Platinized Titanium',
      href: '/titanium-anode/platinized-anode/',
      targetReaction: 'Precious metal plating, hard chrome plating and selected electrolysis',
      media: 'Plating baths and defined electrolysis media',
      currentBasis: 'Defined by the platinum metric, its coverage and the active area',
      lifeLimit: 'Bath chemistry, polarity, current density and mechanical wear',
    },
    {
      family: 'Specialty Coated Titanium',
      href: '/titanium-anode/lead-dioxide-anode/',
      targetReaction: 'Advanced oxidation and project-specific electrochemical duties',
      media: 'Case-by-case, defined by the complete process matrix',
      currentBasis: 'Stated per unit of coated area against a qualification basis',
      lifeLimit: 'Defined by the pilot or qualification programme and the disposal route',
    },
  ],
  selectionPath: [
    {
      step: '01',
      title: 'Start with the target reaction',
      body: 'Chlorine evolution, oxygen evolution, metal deposition or oxidation of a contaminant. The reaction decides which coating family is even worth reviewing.',
    },
    {
      step: '02',
      title: 'Define the complete media',
      body: 'Composition, concentration, contaminants, pH, temperature and flow. A coating name without the full matrix cannot be accepted as a selection.',
    },
    {
      step: '03',
      title: 'State the electrical duty',
      body: 'Current, voltage, waveform, polarity, daily operating schedule and the current-density basis expressed per unit of coated active area.',
    },
    {
      step: '04',
      title: 'Choose the geometry',
      body: 'Only after the surface is fixed does the shape follow from the installation. The eight MMO geometries are reviewed from their own pages.',
    },
  ],
  faq: [
    {
      q: 'Is a Ru-Ir anode the same product as an MMO anode?',
      a: 'A Ru-Ir anode is an MMO anode: the ruthenium and iridium oxide combination is one of the mixed metal oxide systems inside the MMO family. They are described separately on this site because the coating chemistry drives the reaction it suits, not because they belong to different product categories.',
    },
    {
      q: 'Can a platinized titanium anode be used where an MMO anode is used?',
      a: 'Sometimes, but the comparison has to be made on the same basis. Platinum brings a different cost structure, a different wear behaviour and a different metric, so a platinized electrode should not be specified just because it is described as a more inert surface. The duty, the media and the expected wear have to be reviewed together.',
    },
    {
      q: 'Why is coating loading not comparable between suppliers?',
      a: 'Because loading and thickness are different characteristics, each with its own units, measurement method, sampling plan and acceptance criteria. A loading figure quoted without its method cannot be compared against another supplier, and a test result on one characteristic is not proof of the others.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Marine anti-fouling system — /titanium-anode/anti-fouling-system/  */
/* ------------------------------------------------------------------ */

export const antiFoulingHub = {
  title: 'Marine Electrolytic Anti-Fouling Systems',
  description:
    'Electrolytic anti-fouling systems for seawater cooling circuits using titanium anodes, with system components, design inputs and the difference from ICCP protection.',
  lede:
    'An electrolytic anti-fouling system controls marine biological growth in seawater circuits by generating oxidant at an anode. It is a process system with its own design basis — not a cathodic protection installation.',
  heroImage: '/images/applications/marine-antifouling.webp',
  heroImageAlt: 'Marine electrolytic anti-fouling system in a seawater circuit',
  purpose: {
    title: 'What the System Is For',
    body:
      'Seawater cooling systems, ballast lines, intake screens and strainers are open to marine growth. Once organisms attach, the heat transfer degrades, the flow restriction rises and the maintenance cost of cleaning or replacing screens follows. An electrolytic anti-fouling system passes a controlled current through a dedicated anode so that the oxidant generated at the surface suppresses attachment in the protected circuit. The objective is the control of biological fouling, not the protection of a steel structure from corrosion.',
  },
  components: [
    {
      title: 'Anode Arrangement',
      body: 'The anode material and geometry are selected for the target circuit. Titanium anodes are commonly used where the oxidant has to be generated in a treated water or seawater loop without introducing metallic contamination into the system.',
    },
    {
      title: 'Counter Electrode',
      body: 'Depending on the system design, a second electrode completes the circuit. Copper anodes are used in some arrangements because they generate additional oxidant. The arrangement and the material split are confirmed against the circuit rather than assumed.',
    },
    {
      title: 'Power Supply and Control Unit',
      body: 'The rectifier or control unit sets the current and the duty cycle. Its control strategy, the current limits, the polarity and the protection of the installation against a fault condition are part of the system specification, not a separate detail.',
    },
    {
      title: 'Electrical Connections and Monitoring',
      body: 'Connections, cable sizing, isolation and the monitoring of the circuit are what keep the system effective in service. They are defined together with the installation environment.',
    },
  ],
  comparison: [
    {
      aspect: 'Design objective',
      iccp: 'Hold the protected structure at a defined potential to stop electrochemical corrosion.',
      antiFouling: 'Suppress marine biological attachment in a seawater circuit and keep heat transfer and flow stable.',
    },
    {
      aspect: 'Anodic reaction',
      iccp: 'Chlorine evolution at the anode, used as part of the protection current.',
      antiFouling: 'Deliberate oxidant generation at the anode, dosed into the treated stream.',
    },
    {
      aspect: 'What is monitored',
      iccp: 'Structure potential, usually through a reference electrode, to drive the rectifier.',
      antiFouling: 'Current, residual oxidant and the fouling condition of the protected circuit.',
    },
    {
      aspect: 'Reference electrode',
      iccp: 'Essential — it closes the control loop and defines the protected potential.',
      antiFouling: 'Not normally part of the arrangement, because the control target is current and dose, not a structure potential.',
    },
    {
      aspect: 'Common equipment',
      iccp: 'Rectifier, MMO titanium anodes, reference electrodes, cabling and monitoring.',
      antiFouling: 'Control unit, anode and counter electrode arrangement, cabling and control instrumentation.',
    },
  ],
  inputs: [
    { label: 'Circuit', value: 'Pipe diameters, lengths, volumes, flow rates and the number of protected points' },
    { label: 'Seawater', value: 'Salinity, temperature, suspended solids, chlorination history and biofouling record' },
    { label: 'Target', value: 'The fouling control objective, the residual oxidant level and the dose basis' },
    { label: 'Electrical duty', value: 'Current or current density per unit area, duty cycle, control strategy and limits' },
    { label: 'Installation', value: 'Positioning, flow direction, vessel geometry, access and the maintenance route' },
    { label: 'Documents', value: 'Control philosophy, alarm and trip requirements, commissioning and handover records' },
  ],
  applications: [
    {
      title: 'Seawater Cooling Circuits',
      body: 'Heat exchanger cooling loops where fouling reduces the transfer coefficient and raises energy use.',
    },
    {
      title: 'Ballast and Bilge Systems',
      body: 'Ballast tanks and bilge lines where biological growth blocks internal passages and pumps.',
    },
    {
      title: 'Intake and Screen Systems',
      body: 'Sea chests, intake screens and strainers that foul quickly in warm, nutrient-rich water.',
    },
  ],
  faq: [
    {
      q: 'Is an anti-fouling system the same as an ICCP installation?',
      a: 'No. Both may use MMO coated titanium anodes, but the design objectives, the anodic reaction and the control strategy are different. ICCP holds a structure at a defined potential to prevent corrosion and needs a reference electrode to close the loop. Anti-fouling generates a controlled oxidant dose in a seawater circuit and monitors current and dose instead.',
    },
    {
      q: 'Why does the water chemistry matter?',
      a: 'Temperature, salinity, suspended solids and the existing chlorination history change the oxidant demand and the formation rate of biological growth. They also affect the coating and the anode output. The circuit has to be described before the system can be specified.',
    },
    {
      q: 'What is supplied and what is the customer scope?',
      a: 'The anode and electrode arrangement, the control unit, cabling and the technical documentation can be supplied together, but the pipework, the vessel, the installation labour and the tie-in are normally the customer scope. The boundary is confirmed in the quotation rather than assumed.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Reference electrodes — /cathodic-protection/reference-electrodes/   */
/* ------------------------------------------------------------------ */

export const referenceElectrodeHub = {
  title: 'Reference Electrodes for Cathodic Protection',
  description:
    'Silver silver chloride, high-purity zinc and copper copper-sulfate reference electrodes for impressed current cathodic protection systems and potential monitoring.',
  lede:
    'A reference electrode measures the potential of the structure it is paired with. It does not carry protection current and it is not an anode — it is the sensing element that closes the control loop.',
  heroImage: '/images/industries/cathodic-protection.webp',
  heroImageAlt: 'Cathodic protection system with reference electrode monitoring',
  role: {
    title: 'Where the Reference Electrode Sits in the System',
    body:
      'An impressed current cathodic protection system has three parts. The rectifier supplies the protection current, the anode delivers that current into the electrolyte, and the reference electrode measures the potential of the protected structure. The controller compares that measured potential against the target criterion and adjusts the output. If the reference electrode drifts, is coated with debris, is damaged or is installed too close to the anode, the loop closes around a wrong value and the protection becomes either inadequate or excessive. The reference electrode is therefore specified as carefully as the anode.',
  },
  types: [
    {
      title: 'Silver / Silver Chloride Reference Electrode',
      body: 'The most widely used type in seawater and buried service. The silver-silver chloride element in a chloride electrolyte gives a stable, well characterised potential, and the design must keep the internal electrolyte at the required chloride concentration for that stability.',
      href: '/cathodic-protection/reference-electrodes/',
    },
    {
      title: 'High-Purity Zinc Reference Electrode',
      body: 'Used where the electrolyte chemistry makes a chloride element unsuitable, including some soil and high-purity water conditions. The zinc element requires a controlled, stable internal electrolyte to keep its potential reproducible.',
      href: '/cathodic-protection/reference-electrodes/',
    },
    {
      title: 'Copper / Copper Sulfate Reference Electrode',
      body: 'A robust, economical type used for soil, ballast and temporary monitoring duty. Its potential is more temperature dependent than the chloride or zinc types, so the measurement basis has to be stated with it.',
      href: '/cathodic-protection/reference-electrodes/',
    },
  ],
  inputs: [
    { label: 'Environment', value: 'Seawater, buried soil, concrete, ballast tank or a fresh water system' },
    { label: 'Installation', value: 'Direct burial, mounting bracket, immersion depth and the position relative to the anode' },
    { label: 'Electrolyte', value: 'Chloride level, salinity, pH and temperature at the measuring element' },
    { label: 'Type', value: 'Silver/silver chloride, high-purity zinc or copper/copper sulfate, with the intended use' },
    { label: 'Measurement', value: 'Cable length, termination, the instrument connected and the data logging requirement' },
    { label: 'Life and maintenance', value: 'Expected service interval, inspection access and the replacement basis' },
  ],
  notes: [
    'The reference electrode has to be installed clear of the anode, otherwise the measured potential is distorted by the anode output.',
    'The internal electrolyte condition and the membrane or frit determine the long-term stability more than the housing does.',
    'A reference electrode is a consumable sensing element; the replacement interval belongs in the maintenance plan.',
    'Where the reference electrode is replaced, the cell has to be re-checked against the protection criterion afterwards.',
  ],
  faq: [
    {
      q: 'Is a reference electrode a type of titanium anode?',
      a: 'No. A reference electrode is a sensing element that measures the potential of the protected structure and feeds the control system. It carries no protection current and it is not coated with a mixed metal oxide layer. It belongs to the cathodic protection system, not to the anode product range, which is why it is reviewed on its own page.',
    },
    {
      q: 'Which reference electrode type should be selected?',
      a: 'The environment decides it: silver/silver chloride in seawater and buried service, high-purity zinc where the electrolyte chemistry rules out a chloride element, and copper/copper sulfate for soil and temporary monitoring duty. The installation position and the measurement accuracy required are then confirmed against the controller.',
    },
    {
      q: 'Why does the distance between the reference electrode and the anode matter?',
      a: 'The anode produces an IR drop in the electrolyte that shifts the measured potential. Too close, the measurement reflects the anode output rather than the structure, and the controller will reduce the protection current unnecessarily. The installation separation is therefore part of the system design, not a site decision.',
    },
    {
      q: 'Can the reference electrode be supplied with the titanium anode order?',
      a: 'It can be quoted on the same order, and it is often practical to do so because the installation conditions are the same. The selection is still reviewed separately, because the reference electrode type depends on the electrolyte and the monitoring strategy rather than on the anode coating.',
    },
  ],
};
