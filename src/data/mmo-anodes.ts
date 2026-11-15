/**
 * MMO titanium anodes by geometry.
 *
 * Every entry carries its own product boundary, specification basis,
 * application set and FAQ, because the eight geometries are separate
 * purchasing decisions with different installation methods — they are
 * not eight restatements of the same anode.
 *
 * The pages are rendered from a single template
 * (`src/pages/titanium-anode/mmo-anode/[slug]/index.astro`).
 */

export interface MmoSpecRow {
  /** Order input the buyer has to state. */
  label: string;
  /** What the value covers. */
  value: string;
}

export interface MmoApplication {
  title: string;
  body: string;
}

/**
 * One row of the standard output-rating ladder for flexible MMO anodes.
 *
 * The values are the industry reference ratings used to size an installation
 * in the first place; the rating written on the order is confirmed against
 * the project design, not copied from this table.
 */
export interface MmoRatingRow {
  /** Output per metre of installed anode, metric. */
  metric: string;
  /** The same rating expressed in the unit used in imperial practice. */
  imperial: string;
  /** Where this rating is normally applied. */
  use: string;
  /** What has to be confirmed before the rating is fixed on the order. */
  confirm: string;
}

/**
 * One row of the geometry comparison table carried by a product page.
 */
export interface MmoComparisonRow {
  /** Geometry name, linked to its own page. */
  geometry: string;
  /** Route of that geometry's page. */
  href: string;
  /** What the buyer receives. */
  form: string;
  /** Where the geometry is normally used. */
  bestFor: string;
}

export interface MmoAnode {
  /** URL segment under /titanium-anode/mmo-anode/. */
  slug: string;
  /** Product name, also used as the page title. */
  title: string;
  /** Meta description, 70-175 characters. */
  description: string;
  /** One-line positioning for the hub card and the page hero. */
  summary: string;
  /** What the product is and how it works. */
  detail: string;
  /** The boundary against the closest sibling geometry. */
  boundary: string;
  /** Substrate and construction detail specific to this geometry. */
  build: string[];
  /** Order-specific specification inputs. */
  specRows: MmoSpecRow[];
  /** Typical installations and what the buyer has to state. */
  applications: MmoApplication[];
  /** What is confirmed before a quotation is issued. */
  reviewBasis: string[];
  /** Inspection and documentation scope. */
  evidence: string[];
  /** Product-specific questions. */
  faq: { q: string; a: string }[];
  /**
   * Search-intent title for the geometry page, used as the page title when
   * present. It stays within the 70-character search result budget.
   */
  seoTitle?: string;
  /**
   * Output rating ladder for this geometry, when the geometry is rated per
   * metre of installed anode. Geometries rated per piece carry no ladder.
   */
  ratings?: MmoRatingRow[];
  /** Comparison against the sibling geometries, shown as a table. */
  comparison?: MmoComparisonRow[];
  /** Image path under public/images. */
  image: string;
  /** Alt text for the image. */
  imageAlt: string;
}

export const mmoAnodes: MmoAnode[] = [
  {
    slug: 'mmo-linear-anode',
    title: 'MMO Linear Anode',
    description:
      'Pre-packaged MMO flexible linear titanium anode with coke backfill, copper cable and protective sleeve, for long-run pipeline and tank-bottom impressed current protection.',
    summary:
      'A pre-packaged flexible anode string, not a bare coated wire: MMO core, copper cable, conductive backfill and protective sleeve supplied as one assembly.',
    detail:
      'A flexible linear anode is a packaged system rather than a single coated component. The active element is an MMO coated titanium wire or strand, connected to a copper conductor, bedded in conductive coke backfill and enclosed in a porous sleeve that allows electrolyte access while keeping the backfill in place. Because the whole string arrives ready to install, current can be distributed over a long run without building a groundbed at every point, which is why the geometry is common on pipelines, tank bottoms and concrete structures.',
    boundary:
      'The linear anode is not a longer version of a wire anode. A wire anode is the bare MMO coated titanium wire itself, supplied on a spool for the buyer to route, terminate and support. The linear anode is the completed pre-packaged assembly: coated wire plus copper cable, coke backfill, sleeve and outer wrapping. They are quoted, installed and priced differently, and the linear version is normally the correct choice for a long buried or immersed run.',
    build: [
      'MMO coated titanium wire or strand as the active element',
      'Copper conductor cable with a stated length and cross-section',
      'Conductive coke backfill bedded around the active element',
      'Porous sleeve and protective outer wrapping for installation',
    ],
    specRows: [
      { label: 'Active element', value: 'MMO coated titanium wire or strand, diameter and coated length' },
      { label: 'Backfill', value: 'Coke type, grain size, bed cross-section and calculated bed volume' },
      { label: 'Conductor', value: 'Copper cable length, cross-section, termination and joint method' },
      { label: 'Sleeve', value: 'Material, permeability, length and closure method' },
      { label: 'Design basis', value: 'Structure, protection criterion, design current, soil resistivity and required life' },
    ],
    applications: [
      {
        title: 'Buried Pipelines',
        body: 'Long continuous runs under a pipeline, where the packaged string gives even current distribution along the route and avoids individual groundbeds.',
      },
      {
        title: 'Storage Tank Bottoms',
        body: 'Flexible runs laid over or under tank bottoms, following the plate layout without heavy steelwork or hot work inside the tank.',
      },
      {
        title: 'Reinforced Concrete',
        body: 'Low-profile runs in or on concrete, where the flexible form follows the member and the backfill supports ionic current transfer.',
      },
    ],
    reviewBasis: [
      'Protected structure, exposure and protection criterion',
      'Design current, driving voltage and required operating life',
      'Soil or electrolyte resistivity and backfill conditions',
      'Anode spacing, run length and connection to the rectifier',
      'Installation method, trench detail and damage protection',
    ],
    evidence: [
      'Titanium grade certificate and coil or strand identification',
      'Coating definition and loading or thickness basis with its measurement method',
      'Cable conductor size, length and continuity check',
      'Backfill specification and calculated bed volume',
      'Dimensional record of the finished assembly and sleeve',
    ],
    faq: [
      {
        q: 'Is an MMO linear anode the same product as an MMO wire anode?',
        a: 'No. The linear anode is a pre-packaged assembly built around an MMO coated wire, with a copper conductor, conductive coke backfill, sleeve and outer wrapping. The wire anode is the bare coated wire supplied for the buyer to route and terminate. Specify which one is required, because the assembly scope and the installation responsibility differ.',
      },
      {
        q: 'How is the required backfill volume calculated?',
        a: 'It depends on the design current, the design life and the resistivity of the surrounding soil. Those three inputs come from the project design, not from the anode geometry, so the calculated volume is confirmed against the project data before the order is released.',
      },
      {
        q: 'What is the difference between an 82 mA/m and a 328 mA/m linear anode?',
        a: 'The rating is the current the anode can deliver per metre of installed length. A higher rating lets the design cover a larger protected surface with fewer metres of anode, but it also assumes a better electrolyte contact, a longer design life and a backfill bed sized for that output. The rating that goes on the order is the one the project design justifies.',
      },
      {
        q: 'How long does a pre-packaged linear anode last?',
        a: 'The service life is set by the coating loading and the current it has to carry over the years. A high output rating with a long design life needs a heavier coating loading, and the loading basis is what the coating record has to state. Life is therefore a confirmed order value, not a fixed property of the geometry.',
      },
      {
        q: 'Can the standard coil be cut at site?',
        a: 'Cut lengths are possible where the order allows it, but the terminated end, the conductor connection and the sleeve closure then have to be made on site under the agreed method. Where that is not acceptable, the assembly is supplied with the termination completed and the length fixed before shipment.',
      },
      {
        q: 'What information is required to quote a linear anode?',
        a: 'The protected structure and the protection criterion, the design current and the driving voltage, the soil or electrolyte resistivity, the required service life, the run length and spacing, and the cable size and termination. With those inputs the output rating, the backfill volume and the coated length can be fixed rather than estimated.',
      },
    ],
    seoTitle: 'MMO Linear Anode Manufacturer | Flexible ICCP Anodes | Titanium Parts',
    ratings: [
      {
        metric: '82 mA/m',
        imperial: '25 mA/ft',
        use: 'Light duty, high-resistivity soil, short runs and supplementary protection',
        confirm: 'Design current, soil resistivity and the required design life',
      },
      {
        metric: '164 mA/m',
        imperial: '50 mA/ft',
        use: 'Medium-duty pipelines and tank bottoms in moderate resistivity soil',
        confirm: 'Design current and the backfill bed cross-section allowed on site',
      },
      {
        metric: '328 mA/m',
        imperial: '100 mA/ft',
        use: 'Standard-duty pipeline runs and large tank bottoms in normal soil',
        confirm: 'Design current, backfill volume and the operating temperature',
      },
      {
        metric: '656 mA/m',
        imperial: '200 mA/ft',
        use: 'High-current pipeline protection and long single runs',
        confirm: 'Design current, driving voltage and the coating loading basis',
      },
      {
        metric: '1312 mA/m',
        imperial: '400 mA/ft',
        use: 'Very high-current duty where the run length has to stay short',
        confirm: 'Design current, the coating loading basis and the available trench space',
      },
    ],
    image: '/images/titanium-anode/titanium-anode-manufacturer.webp',
    imageAlt: 'Pre-packaged MMO flexible linear titanium anode assembly',
  },
  {
    slug: 'mmo-wire-anode',
    title: 'MMO Wire Anode',
    description:
      'MMO coated titanium wire anode supplied as bare wire or coils for localised and distributed impressed current protection in soil, water and process vessels.',
    summary:
      'The bare MMO coated titanium wire itself — supplied on a spool for the buyer to route, terminate and support, without a packaged backfill or sleeve.',
    detail:
      'An MMO wire anode is the simplest coated titanium geometry to route. A continuous MMO coated titanium wire is delivered on a spool, in coils or as a cut length, and is installed by the buyer or by the installation contractor in the chosen pattern. Its small diameter and high active-area-to-length ratio make it useful where a rigid anode cannot be placed, for example along a pipe wall, inside a small vessel or where several parallel runs are needed to spread current.',
    boundary:
      'The wire anode is the uncooked element: MMO coating on titanium wire, with no copper conductor, no coke backfill and no sleeve. If the order calls for a pre-packaged flexible assembly that arrives ready to install, that is the MMO linear anode and not this product. Conversely, where the buyer wants to control routing, spacing and the electrical connection, the bare wire is the correct form.',
    build: [
      'Commercially pure titanium wire substrate, Grade 2 or Grade 1 as agreed',
      'Continuous MMO coating with a defined composition and loading basis',
      'Supplied on a spool, in coils or as cut lengths',
      'Uncoated end length for termination where the order requires it',
    ],
    specRows: [
      { label: 'Wire diameter', value: 'Finished coated diameter and the underlying titanium diameter' },
      { label: 'Length', value: 'Continuous spool length, coil weight or cut length' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and active length' },
      { label: 'Termination', value: 'Uncoated end length, connection method and the adjoining conductor' },
      { label: 'Design basis', value: 'Design current, electrolyte, temperature and required life' },
    ],
    applications: [
      {
        title: 'Pipeline and Tank Wall Protection',
        body: 'Runs fixed along or around a pipe or tank wall where a rigid groundbed cannot be installed.',
      },
      {
        title: 'Internal Vessel and Cell Duty',
        body: 'Anodes routed inside a process vessel or electrolytic cell where the available geometry only allows a slender element.',
      },
      {
        title: 'Distributed and Localised Protection',
        body: 'Multiple parallel wire runs used to spread current over a larger surface with a simple, low-cost installation.',
      },
    ],
    reviewBasis: [
      'Design current and the active-area basis used for it',
      'Electrolyte composition, temperature and flow conditions',
      'Wire diameter, length and the number of runs required',
      'Termination and connection detail including the uncoated end length',
      'Coating definition, sampling and acceptance method',
    ],
    evidence: [
      'Titanium grade certificate and wire identification',
      'Coating composition and loading verification with its units and method',
      'Diameter and length measurement record',
      'Visual and continuity check of the coated surface',
      'Packing record protecting the coated surface during transport',
    ],
    faq: [
      {
        q: 'Does the MMO wire anode come with backfill and a cable?',
        a: 'No. The wire anode is the bare coated element. Backfill, conductor cable, sleeve and termination are either part of the MMO linear anode package or the responsibility of the installation contractor. The order should state which of those items are inside the supply scope.',
      },
      {
        q: 'What current density can a wire anode carry?',
        a: 'That depends on the coating composition, the wire diameter, the active length and the electrolyte. A current value without an active-area basis cannot be compared between products, so the design current, the diameter and the coated length have to be stated together before the duty is confirmed.',
      },
    ],
    seoTitle: 'MMO Wire Anode Manufacturer | Bare Coated Wire | Titanium Parts',
    ratings: [
      {
        metric: '82 mA/m',
        imperial: '25 mA/ft',
        use: 'Light duty on pipe walls and vessel interiors, low design current',
        confirm: 'Design current, the active-area basis and the coated diameter',
      },
      {
        metric: '328 mA/m',
        imperial: '100 mA/ft',
        use: 'Distributed protection over a larger wall or vessel surface',
        confirm: 'Design current, the number of parallel runs and the coating loading',
      },
      {
        metric: '656 mA/m',
        imperial: '200 mA/ft',
        use: 'Higher current density applications and high-conductivity electrolytes',
        confirm: 'Design current, electrolyte composition and the coating composition',
      },
    ],
    image: '/images/titanium-anode/wire-anodes.webp',
    imageAlt: 'MMO coated titanium wire anode',
  },
  {
    slug: 'mmo-ribbon-anode',
    title: 'MMO Ribbon Anode',
    description:
      'Solid flat MMO ribbon anode for storage tank bottoms and large structures, delivering low-profile long-run current distribution over wide surface areas.',
    summary:
      'A solid, flat titanium ribbon with MMO coating, laid as long parallel runs to spread current over a wide surface at very low profile.',
    detail:
      'The ribbon anode is a solid flat strip of titanium with an MMO coating on the active face. Because it is a continuous element rather than a discrete point source, a set of parallel runs distributes current evenly along the full length instead of concentrating it near one anode. The profile is very low, which is what makes it practical on tank bottoms, under concrete slabs and on the external surfaces of large vessels where a groundbed cannot be excavated.',
    boundary:
      'The ribbon anode is a solid strip. The mesh ribbon anode is an expanded mesh structure with a different effective surface area, a different mechanical behaviour and a different installation method. The choice is driven by the installation: a solid ribbon suits long, continuous, low-profile runs over prepared surfaces, while a mesh ribbon is used where a higher effective surface and a more robust, embeddable form are needed, for example cast into concrete.',
    build: [
      'Solid titanium strip substrate, Grade 2 unless otherwise agreed',
      'MMO coating on the active face with a defined loading basis',
      'Uncoated end and tab detail for the electrical connection',
      'Optionally supplied as pre-cut lengths or continuous coils',
    ],
    specRows: [
      { label: 'Ribbon width', value: 'Width and thickness of the titanium strip, coated and uncoated' },
      { label: 'Length', value: 'Continuous coil length or pre-cut length with the number of runs' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and coated face' },
      { label: 'Connection', value: 'Tab, uncoated end and the conductor, including joint method between runs' },
      { label: 'Layout', value: 'Run spacing, number of runs and the surface preparation below' },
    ],
    applications: [
      {
        title: 'Storage Tank Bottoms',
        body: 'Parallel ribbon runs laid on the tank floor to provide an even current distribution across the whole plate area.',
      },
      {
        title: 'External Tank and Vessel Surfaces',
        body: 'Ribbon runs bonded or fixed to tank shells and large vessel surfaces where excavation is not possible.',
      },
      {
        title: 'Buried Pipelines and Structures',
        body: 'Low-profile ribbon runs along a pipeline or around a buried structure where the groundbed depth is limited.',
      },
    ],
    reviewBasis: [
      'Protected surface area and the protection criterion applied',
      'Design current and the number of runs required',
      'Ribbon width, thickness and length against the available surface area',
      'Surface preparation, fixing method and mechanical protection',
      'Joint and termination detail including the conductor cross-section',
    ],
    evidence: [
      'Titanium grade certificate and strip identification',
      'Coating definition and loading verification with its units and method',
      'Width, thickness and length measurement record',
      'Visual inspection of the coated face and the uncoated connection zone',
      'Joint and termination inspection record where the order requires it',
    ],
    faq: [
      {
        q: 'What is the difference between a ribbon anode and a mesh ribbon anode?',
        a: 'The ribbon is a solid flat strip and the mesh ribbon is an expanded mesh. They differ in effective surface area per unit length, in how they behave mechanically when installed and in the environments they are normally used in. A solid ribbon suits long, continuous, low-profile runs; a mesh ribbon is used where a higher effective surface and an embeddable form are required, such as cast into concrete.',
      },
      {
        q: 'How is the number of ribbon runs calculated?',
        a: 'From the design current and the protection criterion for the structure, divided by the output the selected ribbon can carry in the actual soil or electrolyte. Because output depends on coating, width, exposed area and environment, the run count is confirmed against the project data rather than assumed from a catalogue figure.',
      },
    ],
    seoTitle: 'MMO Ribbon Anode Manufacturer | Tank Bottoms | Titanium Parts',
    ratings: [
      {
        metric: '82 mA/m',
        imperial: '25 mA/ft',
        use: 'Low-profile runs on tank bottoms and prepared surfaces',
        confirm: 'Design current, the coated width and the surface preparation',
      },
      {
        metric: '328 mA/m',
        imperial: '100 mA/ft',
        use: 'Standard tank-bottom protection over large areas',
        confirm: 'Design current, the run spacing and the number of parallel runs',
      },
      {
        metric: '656 mA/m',
        imperial: '200 mA/ft',
        use: 'High-current tank bottoms and large structures',
        confirm: 'Design current, the driving voltage and the coating loading basis',
      },
    ],
    image: '/images/titanium-anode/ribbon-strip-anodes.webp',
    imageAlt: 'Solid MMO coated titanium ribbon anode',
  },
  {
    slug: 'mmo-mesh-ribbon-anode',
    title: 'MMO Mesh Ribbon Anode',
    description:
      'Expanded mesh MMO ribbon anode for reinforced concrete and large-area distributed protection, with a higher effective surface area than a solid ribbon.',
    summary:
      'An expanded titanium mesh ribbon, coated on the active surfaces, for concrete members and large areas where a higher effective surface is needed.',
    detail:
      'The mesh ribbon anode uses an expanded titanium mesh instead of a solid strip. Because the mesh presents exposed edges and a much larger wetted surface per unit of installed length, it delivers more current per unit length than a solid ribbon of the same width. That makes it the geometry used for reinforced concrete members and other large surfaces where the structure is expected to carry a protective current over its whole face and the anode is embedded close to the surface.',
    boundary:
      'The mesh ribbon is an expanded mesh, not a solid strip. Compared with the solid MMO ribbon anode it offers a higher effective surface area per unit length and a different mechanical behaviour when embedded, but it is heavier, less flexible in tight corners and priced differently. Solid ribbon is preferred for long, straight, low-profile runs on prepared surfaces; mesh ribbon is preferred for concrete and large-area distributed protection.',
    build: [
      'Expanded titanium mesh ribbon substrate, Grade 2 unless otherwise agreed',
      'MMO coating on the exposed mesh surfaces with a defined loading basis',
      'Uncoated end and connection detail for the electrical feed',
      'Optional pre-cut lengths with a stated nominal mesh and strand size',
    ],
    specRows: [
      { label: 'Mesh geometry', value: 'Strand and opening size, nominal width and sheet thickness' },
      { label: 'Length', value: 'Coil length or pre-cut length and the number of runs' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and coated surfaces' },
      { label: 'Connection', value: 'Uncoated end, connection method and the conductor detail' },
      { label: 'Installation', value: 'Fixing to the structure, embedment depth and joint method' },
    ],
    applications: [
      {
        title: 'Reinforced Concrete Members',
        body: 'Mesh ribbon fixed to or cast into concrete so that the reinforcement receives a distributed protective current.',
      },
      {
        title: 'Large Buried and Immersed Surfaces',
        body: 'Extended mesh runs on tanks, structures and seabed installations where a broad area has to be protected.',
      },
      {
        title: 'Water and Process Structures',
        body: 'Mesh ribbon used in tanks and chambers where a high active surface is needed at low installation weight.',
      },
    ],
    reviewBasis: [
      'Protected surface and the protection criterion applied',
      'Design current and the effective surface area assumed',
      'Mesh geometry, strand size and the coated surface definition',
      'Fixing method, embedment depth and the construction sequence',
      'Connection and termination detail, including the conductor cross-section',
    ],
    evidence: [
      'Titanium grade certificate and mesh identification',
      'Coating definition and loading verification with its units and method',
      'Mesh geometry and dimensional inspection record',
      'Visual inspection of the coated surfaces and uncoated connection zone',
      'Fixing and installation record where the installation is in scope',
    ],
    faq: [
      {
        q: 'Why choose a mesh ribbon over a solid ribbon?',
        a: 'The expanded mesh gives a higher effective surface area per unit of installed length, so it can deliver more current where the design current is high and the space available is limited. It is also the geometry normally used when the anode is embedded in concrete. The trade-off is weight and a higher price per running metre.',
      },
      {
        q: 'Can the mesh ribbon be embedded in concrete?',
        a: 'Yes, that is one of its main uses, provided the coating, the uncoated connection zone and the fixing method are agreed before production. The connection detail and the position of the uncoated end have to be coordinated with the reinforcement and the construction sequence.',
      },
    ],
    seoTitle: 'MMO Mesh Ribbon Anode | Concrete Protection | Titanium Parts',
    ratings: [
      {
        metric: '164 mA/m',
        imperial: '50 mA/ft',
        use: 'Reinforced concrete members with moderate current demand',
        confirm: 'Design current, the effective surface area and the embedment depth',
      },
      {
        metric: '328 mA/m',
        imperial: '100 mA/ft',
        use: 'Standard distributed protection over large concrete surfaces',
        confirm: 'Design current, the mesh geometry and the construction sequence',
      },
      {
        metric: '656 mA/m',
        imperial: '200 mA/ft',
        use: 'High-current concrete and large buried or immersed surfaces',
        confirm: 'Design current, the effective area basis and the coating loading',
      },
    ],
    image: '/images/titanium-anode/mesh-anodes.webp',
    imageAlt: 'Expanded mesh MMO ribbon anode',
  },
  {
    slug: 'mmo-canister-anode',
    title: 'MMO Canister Anode',
    description:
      'MMO canister anode assembly with metal canister, conductive backfill, cable and sealed connection for deep-well and remote groundbed installations.',
    summary:
      'A complete deep-well groundbed: coated titanium active anode, metal canister, conductive backfill, cable and a sealed, tested connection.',
    detail:
      'A canister anode is an assembly, not a bare electrode. The MMO coated titanium anode is housed inside a metal canister that is filled with conductive backfill, and the electrical connection between the anode and the outgoing cable is sealed and tested. The canister protects the connection from the aggressive ground conditions at depth and allows the unit to be lowered into a deep groundbed where surface access, excavation or traffic loading would rule out a shallow installation.',
    boundary:
      'A tubular anode is the bare active electrode. A canister anode is the complete packaged unit in which that electrode is installed. The canister can contain a tubular or rod element, but they are different products: the canister adds the housing, the backfill, the sealed connection and the installation package, and it is quoted as one assembly with its own installation and test requirements.',
    build: [
      'MMO coated titanium active anode, tubular or rod element',
      'Metal canister housing with the stated internal dimensions',
      'Conductive backfill filling the space around the active anode',
      'Sealed cable connection with an accessible test point',
    ],
    specRows: [
      { label: 'Active anode', value: 'Type, diameter and length of the coated titanium element' },
      { label: 'Canister', value: 'Outside diameter, wall, length and material grade' },
      { label: 'Backfill', value: 'Backfill type, grain size and the calculated fill volume' },
      { label: 'Connection', value: 'Cable size and length, sealing method and the test point position' },
      { label: 'Installation', value: 'Groundbed depth, hole diameter, grouting and the recording method' },
    ],
    applications: [
      {
        title: 'Deep Groundbeds',
        body: 'Remote or high-resistance locations where the groundbed has to be installed at depth to reach a low-resistivity stratum.',
      },
      {
        title: 'Highway and Rail Corridors',
        body: 'Sites where surface excavation is impossible and the unit has to be installed from a drilling or narrow access point.',
      },
      {
        title: 'Offshore and Marine Installations',
        body: 'Subsea or splash-zone installations where a sealed, protected connection is required.',
      },
    ],
    reviewBasis: [
      'Design current, soil resistivity and the target groundbed depth',
      'Required operating life and the design output basis',
      'Canister dimensions and the maximum installation torque or load',
      'Cable type, length and the connection sealing and test requirements',
      'Backfill specification, fill volume and the grouting method',
    ],
    evidence: [
      'Titanium grade certificate and active anode identification',
      'Coating definition and loading verification with its units and method',
      'Canister dimensional and material inspection record',
      'Connection sealing and electrical continuity test record',
      'Backfill batch record and the installed fill volume',
      'Installation and commissioning record where agreed',
    ],
    faq: [
      {
        q: 'Is a canister anode just a tubular anode in a box?',
        a: 'Not functionally. The canister adds the housing, the conductive backfill, the sealed cable connection and the installation package. The active element may be tubular or rod, but the performance, the installation method and the acceptance evidence are defined for the complete assembly.',
      },
      {
        q: 'How is the backfill inside the canister specified?',
        a: 'By type, grain size and the calculated fill volume for the design current and life. The backfill has to be compatible with the titanium surface and the local ground conditions, and the fill volume is recorded during installation because an under-filled canister will not deliver its design output.',
      },
    ],
    seoTitle: 'MMO Canister Anode Manufacturer | Deep Well Groundbed | Titanium Parts',
    image: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
    imageAlt: 'MMO canister anode with sealed electrical connection',
  },
  {
    slug: 'mmo-tubular-anode',
    title: 'MMO Tubular Anode',
    description:
      'MMO coated titanium tubular anode for groundbeds, seawater service and industrial cells, specified by outside diameter, length, wall and end closure.',
    summary:
      'A coated titanium tube used as the active electrode in groundbeds, seawater service and industrial cells, supplied bare and ready for installation.',
    detail:
      'The tubular anode is a titanium tube with an MMO coating over its outer surface. Its cylindrical form resists the mechanical loads that a flat element cannot take, and it presents a large active area for a compact footprint, which is why it is the standard groundbed element in medium and high resistivity soils and a common choice in seawater service and in industrial electrolytic cells. It is supplied as a bare element; the cable, the backfill and the connection are part of the installation scope unless the order states otherwise.',
    boundary:
      'The tubular anode is the bare active electrode. The canister anode is the complete unit in which a tubular or rod element is housed, backfilled and connected. Quoting a tubular anode means quoting the coated tube itself, with its dimensions, coating and connection end; quoting a canister means quoting the assembly, the backfill and the sealed connection together.',
    build: [
      'Titanium tube substrate, Grade 2 or Grade 1 as agreed',
      'MMO coating on the outer surface with a defined loading basis',
      'End closure and uncoated zone at the connection end',
      'Optional plug, cap or threaded termination as specified',
    ],
    specRows: [
      { label: 'Outside diameter', value: 'Tube outside diameter and wall thickness, coated and uncoated' },
      { label: 'Length', value: 'Overall length and the coated active length' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and coated surface' },
      { label: 'End closure', value: 'Closure method, plug or cap and the uncoated connection zone' },
      { label: 'Installation', value: 'Groundbed or vessel detail, spacing, backfill and the connection method' },
    ],
    applications: [
      {
        title: 'Groundbed Installations',
        body: 'Vertical tubular elements in conventional groundbeds where the soil needs to be backfilled around the anode.',
      },
      {
        title: 'Seawater and Marine Service',
        body: 'Tubular elements in seawater systems where the cylindrical form handles the exposure and the mechanical load.',
      },
      {
        title: 'Industrial Electrolytic Cells',
        body: 'Tubular electrodes in chlor-alkali, electrochlorination and water treatment cells as a durable alternative to flat plates.',
      },
    ],
    reviewBasis: [
      'Design current and the active-area basis used for it',
      'Electrolyte or soil conditions, temperature and flow',
      'Diameter, wall, length and the coated active length',
      'End closure and the electrical connection detail',
      'Backfill type and volume, or the vessel installation method',
    ],
    evidence: [
      'Titanium grade certificate and tube identification',
      'Coating definition and loading verification with its units and method',
      'Diameter, wall and length measurement record',
      'Visual inspection of the coated surface and the uncoated connection zone',
      'End closure and connection inspection record',
    ],
    faq: [
      {
        q: 'What is the difference between a tubular anode and a canister anode?',
        a: 'The tubular anode is the bare coated tube. The canister anode is the complete groundbed unit: a coated anode housed in a metal canister, filled with conductive backfill and connected through a sealed, tested cable joint. The canister adds housing, backfill, sealing and the installation package.',
      },
      {
        q: 'Can a tubular anode be used in seawater?',
        a: 'It can be reviewed for seawater service, but the coating composition, the chloride level, the temperature, the flow and the required life all affect the outcome. Those conditions have to be stated, because a coating that performs well in a chloride brine is not automatically the right choice for a different seawater circuit.',
      },
    ],
    seoTitle: 'MMO Tubular Anode Manufacturer | Groundbed Electrode | Titanium Parts',
    image: '/images/titanium-anode/tubular-anodes.webp',
    imageAlt: 'MMO coated titanium tubular anode',
  },
  {
    slug: 'mmo-disc-anode',
    title: 'MMO Disc Anode',
    description:
      'MMO coated titanium disc anode for space-constrained installations and fixed positions where a flat, low-profile active face is required.',
    summary:
      'A flat circular titanium disc with an MMO coating, used where a compact active face has to sit in a restricted space.',
    detail:
      'The disc anode is a flat circular plate of titanium with an MMO coating on the active face. Its value is geometric: a disc gives a defined active area in a very small footprint and presents a flat, predictable surface to the electrolyte, which matters where the installation space is restricted or where the anode has to be mounted at a fixed position against a wall, a screen or a vessel lining. The centre or the rim carries the electrical feed, depending on the design.',
    boundary:
      'The disc anode is a compact point-type element, not a distributed run. Where current has to be spread along a length, the ribbon and mesh ribbon geometries are used instead. The disc is chosen when the space, the mounting position or the local current demand makes a long run impractical, and it is also used as a supplementary or auxiliary electrode alongside a main anode.',
    build: [
      'Titanium disc substrate, Grade 2 unless otherwise agreed',
      'MMO coating on the active face with a defined loading basis',
      'Uncoated hub, tab or rim for the electrical feed',
      'Optional central bore, spacer or mounting boss as specified',
    ],
    specRows: [
      { label: 'Diameter', value: 'Disc diameter, thickness and the coated face diameter' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and coated surface' },
      { label: 'Connection', value: 'Hub, tab or rim feed with the uncoated zone and the conductor detail' },
      { label: 'Mounting', value: 'Fixing method, spacer or standoff and the clearance to the protected surface' },
      { label: 'Duty', value: 'Design current and the active-area basis, or the auxiliary role of the electrode' },
    ],
    applications: [
      {
        title: 'Space-Constrained Installations',
        body: 'Vessels, cells and chambers where the available volume will not accept a plate, tube or long ribbon element.',
      },
      {
        title: 'Screen and Intake Protection',
        body: 'Mounted against screens, strainers or intake structures where a flat face can be placed close to the protected element.',
      },
      {
        title: 'Auxiliary and Supplementary Electrodes',
        body: 'Used alongside a main anode where a local current demand has to be met at a defined position.',
      },
    ],
    reviewBasis: [
      'Design current and the active-area basis used for it',
      'Available space, mounting position and clearance to the protected surface',
      'Diameter, thickness and the coated face definition',
      'Feed method, uncoated zone and the conductor detail',
      'Electrolyte composition, temperature and flow conditions',
    ],
    evidence: [
      'Titanium grade certificate and disc identification',
      'Coating definition and loading verification with its units and method',
      'Diameter, thickness and flatness measurement record',
      'Visual inspection of the coated face and the uncoated feed zone',
      'Mounting and connection inspection record',
    ],
    faq: [
      {
        q: 'When is a disc anode preferred over a plate or ribbon anode?',
        a: 'When the available space is restricted, when the anode has to be mounted at a fixed position against a wall, a screen or a vessel lining, or when a compact defined active area is needed locally. For long runs that distribute current along a length, ribbon or mesh ribbon is the better geometry.',
      },
      {
        q: 'Can the disc be used as a supplementary electrode?',
        a: 'Yes. It is often specified as an auxiliary or supplementary electrode where a local current demand has to be met in addition to a main anode. In that case the design current, the position and the relative spacing to the main anode have to be stated together.',
      },
    ],
    seoTitle: 'MMO Disc Anode Manufacturer | Compact Electrode | Titanium Parts',
    image: '/images/titanium-anode/disc-special-geometry.webp',
    imageAlt: 'MMO coated titanium disc anode',
  },
  {
    slug: 'mmo-rod-anode',
    title: 'MMO Rod Anode',
    description:
      'MMO coated titanium rod anode for ICCP structures and electrode assemblies, specified by diameter, length, coated zone and termination.',
    summary:
      'A straight MMO coated titanium rod used as a compact impressed current electrode in structural protection and in electrode assemblies.',
    detail:
      'The rod anode is a straight titanium rod with an MMO coating over a defined active length. It is the simplest rigid geometry to fabricate, to machine and to connect, and it is used where a tubular or plate element would be oversized, where the anode has to pass through a bulkhead or a hanger, or where a group of rods forms the active surface of an electrode assembly in a cell.',
    boundary:
      'This is an industrial MMO coated titanium rod for impressed current cathodic protection and for electrode assemblies. It is not a consumer anode rod for water heaters, boilers or swimming pools, which are a different product with a different buyer, a different purpose and a different construction. When a buyer says anode rod, the coating, the diameter, the active length and the intended service have to be confirmed before the order is treated as an MMO rod anode.',
    build: [
      'Titanium rod substrate, Grade 2 or Grade 1 as agreed',
      'MMO coating over the defined active length with a loading basis',
      'Uncoated end zone for the termination',
      'Optional threaded, flanged or spade-lug termination as specified',
    ],
    specRows: [
      { label: 'Diameter', value: 'Rod diameter and the underlying titanium diameter' },
      { label: 'Length', value: 'Overall length and the coated active length' },
      { label: 'Coating', value: 'Composition family, loading or thickness basis and coated zone' },
      { label: 'Termination', value: 'Thread, flange, lug or cable termination with the uncoated length' },
      { label: 'Service', value: 'Impressed current protection duty or cell electrode duty, with the design current basis' },
    ],
    applications: [
      {
        title: 'Structural Impressed Current Protection',
        body: 'Compact rod electrodes installed in soil or in a drilled groundbed where a larger element cannot be placed.',
      },
      {
        title: 'Marine and Offshore Structures',
        body: 'Rod elements fitted to hulls, platforms and subsea assemblies where the installation envelope is restricted.',
      },
      {
        title: 'Electrode Assemblies',
        body: 'Parallel rods forming the active surface of an assembly mounted in a cell or vessel.',
      },
    ],
    reviewBasis: [
      'Design current and the active-area basis used for it',
      'Diameter, overall length and the coated active length',
      'Intended service, to confirm this is an industrial MMO rod and not a consumer anode rod',
      'Termination type, conductor detail and the uncoated length',
      'Installation environment, mounting method and access for inspection',
    ],
    evidence: [
      'Titanium grade certificate and rod identification',
      'Coating definition and loading verification with its units and method',
      'Diameter, length and active-length measurement record',
      'Visual inspection of the coated zone and the uncoated termination area',
      'Thread, flange or termination inspection record where applicable',
    ],
    faq: [
      {
        q: 'Is this the same as a water heater anode rod?',
        a: 'No. This is an industrial MMO coated titanium rod for impressed current cathodic protection and for electrode assemblies. Consumer anode rods for water heaters, boilers and pools are a different product with a different purpose and a different construction. If the enquiry mentions a hot water system, it should be routed as a separate review rather than quoted against this product.',
      },
      {
        q: 'Can an MMO rod anode be threaded for mounting?',
        a: 'Yes, where the order calls for it. The thread form, the pitch, the length and the uncoated zone at the thread have to be defined on the drawing, because a coated thread is not acceptable as an electrical connection and the coating run-out has to stop short of the working thread.',
      },
    ],
    seoTitle: 'MMO Rod Anode Manufacturer | Industrial ICCP | Titanium Parts',
    image: '/images/titanium-anode/rod-anodes.webp',
    imageAlt: 'MMO coated titanium rod anode',
  },
];

/**
 * Geometry comparison carried by the product pages.
 *
 * It answers the question the pages are actually searched for — which MMO
 * form to specify — with the same information the buyer gets from the hub,
 * so the two never drift apart.
 */
export const mmoGeometryComparison: MmoComparisonRow[] = [
  {
    geometry: 'Linear',
    href: '/titanium-anode/mmo-anode/mmo-linear-anode/',
    form: 'Pre-packaged string: coated wire, copper conductor, coke backfill and sleeve',
    bestFor: 'Pipelines, tank bottoms and concrete over long continuous runs',
  },
  {
    geometry: 'Wire',
    href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
    form: 'Bare coated wire on a spool, coil or cut length',
    bestFor: 'Pipe walls, vessel interiors and distributed protection',
  },
  {
    geometry: 'Ribbon',
    href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/',
    form: 'Solid flat coated ribbon laid in parallel runs',
    bestFor: 'Storage tank bottoms and large low-profile surfaces',
  },
  {
    geometry: 'Mesh Ribbon',
    href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
    form: 'Expanded coated mesh with a higher effective surface area',
    bestFor: 'Reinforced concrete members and large buried areas',
  },
  {
    geometry: 'Canister',
    href: '/titanium-anode/mmo-anode/mmo-canister-anode/',
    form: 'Complete groundbed: coated anode, housing, backfill and sealed connection',
    bestFor: 'Deep wells and remote groundbeds where access is restricted',
  },
  {
    geometry: 'Tubular',
    href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
    form: 'Bare coated tube supplied ready for installation',
    bestFor: 'Conventional groundbeds, seawater service and industrial cells',
  },
  {
    geometry: 'Disc',
    href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
    form: 'Flat coated disc with a defined active face in a small footprint',
    bestFor: 'Space-constrained installations and fixed mounting positions',
  },
  {
    geometry: 'Rod',
    href: '/titanium-anode/mmo-anode/mmo-rod-anode/',
    form: 'Coated rod with a termination for structural protection',
    bestFor: 'Compact groundbeds, offshore structures and electrode assemblies',
  },
];

