/**
 * Section content of the cathodic protection page.
 *
 * Split from `cathodic-protection-page.ts` so the copy can be reviewed on
 * its own. The three anode families are kept apart throughout, because
 * confusing impressed current with sacrificial protection is the most
 * expensive mistake in this field.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type CathodicProtectionBlock = PageBlock;

/** A section of the page family. */
export type CathodicProtectionSection = PageSection;

export const cathodicProtectionSections: CathodicProtectionSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What Cathodic Protection Is',
    title: 'Making the Steel the Anode, on Purpose',
    intro:
      'Corrosion of steel in an electrolyte is an electrochemical reaction: the metal oxidises at one place and is reduced at another. Cathodic protection stops that reaction by making the whole structure the cathode. The structure is connected to a power source, and the current that flows keeps the steel in a state where it cannot dissolve.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'There are two ways of doing it. With impressed current cathodic protection, a rectifier drives a current from an anode in the environment into the structure, and the structure is held at a protective potential. With sacrificial protection, the structure is electrically connected to a more active metal — zinc, aluminium or magnesium — and that metal corrodes in preference to the steel, which is left protected without any external supply.',
          'The choice between them is not a matter of preference. It is decided by the current demand of the structure, the resistivity of the environment, the availability of a power supply, the access for maintenance, the area the installation may occupy, and whether the structure is allowed to be electrically continuous. A tanker with a coating system, an oil pipeline crossing a wide area of high-resistivity soil and a harbour jetty are three different problems.',
          'What an anode supplier can responsibly contribute is the anode: the material, the geometry, the mounting and the connection that carry the current to where it has to go, and the records that prove what was made. The system design — the criterion, the current budget, the rectifier, the reference electrode and the interference assessment — belongs with the corrosion engineer who holds the design. We are explicit about that boundary because it protects the project.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Impressed current',
            body:
              'A rectifier drives the current. It suits large structures and high current demand, and it needs a power supply and a maintenance regime.',
          },
          {
            title: 'Sacrificial',
            body:
              'A more active metal corrodes instead of the steel. It needs no supply, it suits small or isolated assets, and its life is fixed by the anode mass.',
          },
          {
            title: 'Reference electrode',
            body:
              'It measures the structure potential. It carries no protection current and does no work of its own — it tells the control system where the structure stands.',
          },
          {
            title: 'The anode interface',
            body:
              'The anode is where the current enters the electrolyte. Its material, its surface area and its position decide whether the current reaches the structure.',
          },
        ],
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-white',
    eyebrow: 'Anode Families',
    title: 'The Three Families, and What Each One Is For',
    intro:
      'The families are separated here because they answer different questions and they are specified on different bases.',
    blocks: [
      {
        kind: 'table',
        columns: ['Family', 'Examples', 'How it is selected'],
        rows: [
          [
            'Impressed current anodes',
            'Installation configurations, deep groundbed systems, tank bottom protection, reinforced concrete protection, marine structures, pipelines and buried structures, high silicon cast iron, powered anode rod',
            'By the current the structure needs, the resistivity of the environment, the space available and the mounting method',
          ],
          [
            'Sacrificial anodes',
            'Aluminium, zinc and magnesium anodes, bracelet anodes, ribbon anodes, hull anodes, ballast tank anodes',
            'By the driving voltage available, the anode mass needed for the design life, and the electrolyte',
          ],
          [
            'Reference electrodes',
            'Ag/AgCl, zinc, manganese dioxide, copper/copper sulphate permanent electrodes',
            'By the electrolyte, the required accuracy, the temperature range and the installation access',
          ],
        ],
        note:
          'The three families are not alternatives chosen by preference. The current demand of the structure and the environment decide which one applies.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Within the impressed current family there is a further split that matters for titanium. A mixed metal oxide titanium anode is used where a small, defined footprint has to carry a defined current — a deep groundbed, a tank bottom, a concrete reinforcement, a marine structure. A high silicon cast iron anode is used where a large, low-resistance, sacrificial mass is wanted in the ground. Both are impressed current anodes; they are different products for different duties, and the current density at the anode surface is what separates them.',
        ],
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'What the Anode Has to Do, and What It Is Made Of',
    intro:
      'The anode carries the current from the source into the electrolyte. Everything about it — the material, the surface area, the connection — follows from the current it has to pass and the environment it sits in.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'MMO substrate',
            value:
              'Titanium Grade 1 or Grade 2, selected for the mechanical strength the installation point requires and for its resistance to the electrolyte.',
          },
          {
            label: 'MMO coating',
            value:
              'Mixed metal oxide, selected for the current density and the electrolyte chemistry at the anode surface.',
          },
          {
            label: 'Cast iron anode',
            value:
              'High silicon cast iron for buried groundbed duties where a large, low-resistance sacrificial mass is wanted in the soil.',
          },
          {
            label: 'Sacrificial anode',
            value:
              'Aluminium, zinc or magnesium, with the driving voltage and the capacity matched to the electrolyte and the design life.',
          },
          {
            label: 'Current density at the anode',
            value:
              'The design figure for the anode surface, set against the current the structure has to receive and the effective surface area of the element.',
          },
          {
            label: 'Electrical connection',
            value:
              'The cable, the lug, the sealing and the lead-in, selected for the environment and for the mechanical load of the installation.',
          },
          {
            label: 'Mounting',
            value:
              'Backfill for buried groundbeds, direct bonding for tank bottoms, cast-in or bolted mounting for reinforced concrete, and faired mounting for marine structures.',
          },
          {
            label: 'Documentation',
            value:
              'Material certificates, coating records, dimensional inspection, the connection inspection and the traceability of the lot.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'The design criterion belongs to the structure',
        intro:
          'The number that sizes the anode is the current the structure needs to reach its protection criterion.',
        note:
          'That criterion is set by the corrosion engineer against the environment, the coating system and the consequence of exceeding it — over-protection matters as much as under-protection, because it can cause hydrogen embrittlement in high-strength steels and it dislodges coatings. We size the anode to the current that is handed to us and we state the basis.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Design Criteria',
    title: 'What Decides the Current, and What Decides the Life',
    intro:
      'These are the relationships that turn a protection criterion into an anode order. They are also the relationships that decide whether a system works after it is installed.',
    blocks: [
      {
        kind: 'table',
        columns: ['Variable', 'What it changes', 'Consequence for the design'],
        rows: [
          [
            'Soil or seawater resistivity',
            'The resistance between the anode and the structure, and therefore the voltage the rectifier must hold',
            'High resistivity means a higher driving voltage and often a distributed anode arrangement',
          ],
          [
            'Shielding by the structure itself',
            'The current path from the anode to the steel',
            'A shielded structure cannot be protected by the anode that is placed behind it',
          ],
          [
            'Stray current interference',
            'The current that a neighbouring system injects into the structure',
            'Interference has to be assessed and often mitigated; it is not an anode problem',
          ],
          [
            'Coating system quality',
            'The surface that actually has to be protected',
            'A well-coated structure needs far less current than a bare one',
          ],
          [
            'Current demand of the structure',
            'The total current the installation has to deliver',
            'This is the figure the anode is sized against, with a margin for the variation in the environment',
          ],
          [
            'Design life',
            'The rate at which the anode is consumed and the maintenance cycle',
            'For a titanium MMO anode this is a long interval; for a sacrificial anode it is the anode mass',
          ],
          [
            'Temperature and chemistry',
            'The corrosion rate of the anode and the behaviour of the coating',
            'It changes the current density the coating can carry and the life that can be expected',
          ],
        ],
        note:
          'Reference relationships for design discussion. The current and the anode quantity are produced against the structure, its environment and its design life.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'One consequence is worth spelling out because it is often missed at the enquiry stage: the anode does not create the protection criterion, and it does not remove the need for the coating. In a well-designed system the coating carries the isolation and the anode carries the residual protection, and the current that the anode has to deliver falls as the coating improves. A current figure quoted for a bare structure and applied to a coated one is one of the most common reasons a system underperforms in the field.',
        ],
      },
    ],
  },
  {
    id: 'geometries',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'MMO Geometries',
    title: 'The Eight Titanium Geometries Used in ICCP',
    intro:
      'The geometries below are the titanium anode products used in impressed current installations. Each one has its own construction, its own installation method and its own order basis, and the choice is made against the installation point rather than against the current alone.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            title: 'Rod Anode',
            body:
              'A straight or segmented element for tank bottom protection, for small structures and for installations where the geometry has to follow a vessel wall.',
            href: '/titanium-anode/mmo-anode/mmo-rod-anode/',
          },
          {
            title: 'Canister Anode',
            body:
              'A housed element for deep groundbed systems, where the anode is installed in a backfilled chamber and has to survive burial.',
            href: '/titanium-anode/mmo-anode/mmo-canister-anode/',
          },
          {
            title: 'Tubular Anode',
            body:
              'A tubular element for tank internals and for pipe-like installations where the anode follows the shape of the vessel.',
            href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
          },
          {
            title: 'Disc Anode',
            body:
              'A flat disc element for reinforced concrete protection and for surfaces where a low-profile form is required.',
            href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
          },
          {
            title: 'Linear Anode',
            body:
              'A continuous strip along a pipeline or a buried structure, where the protection has to follow the asset over distance.',
            href: '/titanium-anode/mmo-anode/mmo-linear-anode/',
          },
          {
            title: 'Wire Anode',
            body:
              'A wire element for distributed current output, used where many small points have to be fed from one installation.',
            href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
          },
          {
            title: 'Ribbon Anode',
            body:
              'A ribbon element for tank bottom protection over large areas and for structures where a flexible, large-area form is needed.',
            href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/',
          },
          {
            title: 'Mesh Ribbon Anode',
            body:
              'A mesh form for marine and offshore structures, where a large area has to be protected without adding drag.',
            href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
          },
        ],
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'A Cathodic Protection Design Built Around the Structure, Not Around a Product',
    intro:
      'The anode family, the geometry, the current requirement, the connection, the mounting and the backfill are reviewed together against the structure, the environment and the protection criterion. What comes back is a design basis you can hand to the corrosion engineer, not a bag of electrodes.',
    image: {
      src: '/images/titanium-anode/mmo-canister-anode-deep-groundbed-installation.webp',
      alt: 'Impressed current cathodic protection groundbed installation',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Protected structure and coating',
          'Environment and soil resistivity',
          'Protection criterion and current',
          'Design life and maintenance access',
          'Anode family and geometry',
          'Mounting and backfill',
          'Cable and termination',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Structure',
          'Environment',
          'Resistivity',
          'Criterion',
          'Current',
          'Anode Family',
          'Layout',
          'Backfill',
          'Design Life',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define the CP System Boundary',
    intro: 'A comparable quotation starts with the protected asset, the exposure, the environment, the protection criterion, the current demand and the design life. These are the items we need.',
review: {
      title: 'What we review before manufacture',
      points: [
        'State the protected asset, its coating system and the surface condition.',
        'State the exposure, the environment and the soil or water resistivity.',
        'State the protection criterion and the current it takes to meet it.',
        'State the design life and the maintenance access the layout has to allow.',
        'State the anode family, the geometry and the quantity.',
        'State the mounting, the backfill and the cabling.',
        'State whether the rectifier, the reference electrode and the interference assessment are in scope.',
      ],
    },
    
limits: {
      title: 'What the product name cannot replace',
      points: [
        'The current requirement cannot be inferred from the anode size or from the coating name.',
        'A generic material standard should not be assigned to an anode order without confirming the product form.',
        'The mounting and the backfill are part of the performance, not a detail to be settled on site.',
        'The rectifier, the reference electrode and the interference assessment are assigned by the project.',
      ],
    },
    
    note: {
      title: 'What we answer with',
      body: 'Once the boundary is defined, the answer is a specific anode rather than a general offer: the anode family, the material and the coating, the geometry, the quantity, the electrical connection and the mounting, the document scope, and the manufacturing and delivery basis. If a part of the system is outside our scope, we say so rather than leaving a gap that appears later as a site problem.',
    },
related: {
      title: 'Related anode options',
      intro: 'Compare the adjacent product families only after the reaction, the environment and the supply boundary are clear.',
      links: [
        { href: '/titanium-anode/mmo-anode/', label: 'All MMO Anode Forms' },
        { href: '/titanium-anode/mmo-anode/mmo-rod-anode/', label: 'MMO Rod Anodes' },
        { href: '/titanium-anode/mmo-anode/mmo-canister-anode/', label: 'MMO Canister Anodes' },
        { href: '/cathodic-protection/reference-electrodes/', label: 'Reference Electrodes' },
      ],
    },
  
  },
  
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Substrate, the Coating and the Connection Are Controlled',
    intro:
      'We control the titanium identity, the surface condition, the coating loading and the connection against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied assembly.',
    image: {
      src: '/images/titanium-anode/coating-process-loading-control.webp',
      alt: 'Coating process and loading control in the titanium anode workshop',
      caption: 'Inspection scope is matched to the ordered product and the agreed evidence package.',
    },
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Material Identity',
            body: 'Confirm the titanium form, grade or order standard, the dimensions and the material evidence against the purchase specification.',
          },
          {
            title: 'Coating and Active Zone',
            body: 'Control the coating direction and the active geometry to the agreed production basis; do not infer life from appearance alone.',
          },
          {
            title: 'Connection and Assembly',
            body: 'Review the electrical joints, the cable interfaces, the sealing and the mechanical details included in our supply scope.',
          },
          {
            title: 'Final Release',
            body: 'Verify the dimensions, the identification, the visual condition, the packing and the agreed inspection or document package before shipment.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Sampling, acceptance values, test methods and the supplied records are finalised in the quotation, the inspection plan or the approved order documents.',
        ],
      },
    ],
  },
];

export const cathodicProtectionFaq: { q: string; a: string }[] = [
  {
    q: 'Should I use impressed current or sacrificial anodes?',
    a: 'The current demand of the structure decides it, together with the environment and the logistics. Impressed current suits large structures, high current demand and any installation with a rectifier and a maintenance regime available. Sacrificial suits small or isolated assets, structures where no power supply can be run, and installations where simplicity matters more than controllability. The anode mass and the driving voltage available in the electrolyte set the sacrificial option, and the design life is what decides how much mass you need.',
  },
  {
    q: 'Do I still need a coating if I am installing anodes?',
    a: 'Yes. In a well-designed system the coating carries the isolation and the anode carries the residual protection, and the current the anode must deliver falls as the coating improves. An anode specification written for a bare structure and applied to a coated one will over-size the installation; the reverse produces a system that never reaches its criterion.',
  },
  {
    q: 'Can a titanium MMO anode be used in a buried groundbed?',
    a: 'It can, but it is a specific construction rather than a general one. The titanium MMO element is used where a small, defined footprint has to carry a defined current in a high-resistivity or aggressive environment — a deep groundbed, for example. A conventional buried groundbed more often uses a high silicon cast iron anode, because a large sacrificial mass in the soil is what the duty calls for. The choice follows from the current density at the anode surface.',
  },
  {
    q: 'How long does a titanium MMO anode last in a cathodic protection installation?',
    a: 'A titanium MMO anode is not consumed in the way a sacrificial anode is; it is designed to have a long service life and to be checked rather than replaced on a short cycle. The life that can be stated depends on the current density at the anode surface, the electrolyte, the temperature and the design life of the installation, so we state it against those conditions rather than as a generic figure.',
  },
  {
    q: 'What is the role of the reference electrode, and is it required?',
    a: 'The reference electrode measures the potential of the structure. It carries no protection current and it does no protective work of its own. In an impressed current system it is the feedback signal that tells the rectifier how much to deliver, and without it the system is running open-loop against whatever the environment happens to be doing. Its accuracy and its placement decide how well the system tracks the criterion.',
  },
  {
    q: 'What happens if there is stray current interference?',
    a: 'The neighbouring system injects current into your structure and drives its potential away from the criterion, which accelerates corrosion where the current leaves the structure. This is not an anode problem and it cannot be solved by changing the anode. It needs an interference assessment, and usually cross-bonding, draining, or a change on the offending installation. We say this plainly because an anode order taken without an interference assessment is an incomplete project.',
  },
  {
    q: 'How do you size the number of anodes?',
    a: 'From the current the structure has to receive, divided by the current density the anode surface can carry, and then checked against the effective surface area actually available and the space available for the installation. A margin is applied for the variation in the environment over the design life. The current figure comes from the protection criterion, so the criterion has to be given to us rather than derived from the anode.',
  },
  {
    q: 'Do you supply the rectifier and the reference electrode as well?',
    a: 'They are part of the system, and we are explicit about the scope. We supply the anode side — the anode, the cable, the lug, the sealing and the mounting — and the documentation that goes with it. The rectifier, the reference electrode, the interference assessment and the installation are assigned by the project. We are happy to work to a specification issued by your corrosion engineer.',
  },
  {
    q: 'What documentation comes with the anodes?',
    a: 'Material certificates for the titanium substrate, the coating records with the loading actually applied, dimensional inspection, the inspection of the electrical connection, and the lot traceability that ties the delivery back to the production record. The document scope is agreed at the enquiry stage so that the acceptance package matches what your inspection plan expects.',
  },
  {
    q: 'What do you need from us to quote?',
    a: 'The protected asset and its coating system, the exposure and the environment with its resistivity, the protection criterion and the current it takes to meet it, the design life and the maintenance access, the anode family, the quantity, the layout, the mounting, the cabling and the backfill, and whether the rectifier, the reference electrode and the interference assessment are in scope. With that we answer with the anode family, the geometry, the quantity, the connection, the mounting and the document scope.',
  },
];
