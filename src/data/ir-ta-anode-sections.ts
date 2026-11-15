/**
 * Section content of the Ir-Ta coated titanium anode page.
 *
 * Split from `ir-ta-anode-page.ts` so the copy can be reviewed on its own.
 * Every statement is tied to a condition (current density, pH, temperature,
 * duty cycle, contaminant behaviour) — reference windows are labelled as
 * reference windows and are confirmed against the actual duty before they
 * become a quotation.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type IrTaBlock = PageBlock;

/** A section of the page family. */
export type IrTaSection = PageSection;

export const irTaSections: IrTaSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This Coating Is',
    title: 'Ir-Ta MMO on Titanium: What You Are Actually Buying',
    intro:
      'An iridium oxide coated titanium anode is a titanium substrate carrying a mixed metal oxide layer built around iridium dioxide. The iridium carries the oxygen-evolution behaviour; a second oxide stabilises the layer. Which second oxide, and in what proportion, is what makes one iridium coating work in your cell and another one not.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'Iridium dioxide is the catalytic component. It lowers the potential at which oxygen is released, so more of the current does the reaction you are paying for and less is wasted on the competing reactions — in acid, on chlorine-containing feeds, and in the oxidising by-products of an electrolysis loop. It is also expensive, and it dissolves slowly under certain conditions, which is why the surrounding system matters.',
          'The stabilising component does a different job. Tantalum pentoxide is chemically very inert and it holds the mixed oxide layer together in conditions where a supported catalyst would dissolve. Tin dioxide and zirconium dioxide are used where a different conductivity and a different surface behaviour are needed. Changing the second oxide changes the conductivity of the layer, its resistance to attack, and how the surface behaves at a shutdown.',
          'The consequence is that an Ir-Ta coating is not a single material with a single performance figure. What you are buying is three things at once: a titanium substrate that carries current and survives the electrolyte, a mixed metal oxide layer selected for your reaction and your pH, and a manufactured geometry whose active area, edges and connection are resolved against your installation.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Iridium does the reaction',
            body:
              'It carries the catalytic activity for oxygen evolution. More iridium lowers the operating potential, and it raises the cost of the coating.',
          },
          {
            title: 'Tantalum does the surviving',
            body:
              'It stabilises the oxide layer in the harsh, oxidising, locally acidic zone at the anode surface and slows the dissolution of the iridium.',
          },
          {
            title: 'Titanium does the carrying',
            body:
              'The substrate conducts, resists the electrolyte and lets the coating stay thin. Grade, thickness and the masked areas are chosen with the coating, not after it.',
          },
          {
            title: 'The geometry decides the duty',
            body:
              'Active area, edge density and current distribution set the real current density. A coating selected on name alone, on a badly distributed geometry, will run outside the window it was chosen for.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'An engineered electrode, not a consumable by the square metre',
        intro:
          'One boundary is worth stating plainly, because it is the most common source of a disappointing first order.',
        note:
          'The service life of an iridium coated anode is a consequence of the electrolyte, the current density, the contaminant load and the duty — not of the coating alone. The same coating behaves differently in a clean acidic feed and in a carbonate bath that carries metals into the cell.',
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Coating Chemistry',
    title: 'How Iridium and Tantalum Split the Work, and Why the Second Oxide Moves',
    intro:
      'The choice of the second oxide, and the balance between the two, is decided by the medium the cell runs in. The table below is the working comparison we use when an oxygen-evolution duty is reviewed.',
    blocks: [
      {
        kind: 'table',
        columns: ['Property', 'IrO₂ – Ta₂O₅', 'IrO₂ – SnO₂ / ZrO₂'],
        rows: [
          [
            'Behaviour in strongly acidic media',
            'The reference system for acid — the tantalum stabilises the layer under strongly oxidising, acidic conditions',
            'Used where the conductivity and the surface behaviour of the layer matter more than maximum acid stability',
          ],
          [
            'Behaviour in alkaline media',
            'Usable, but the second oxide is often changed when the electrolyte is alkaline',
            'Commonly selected for alkaline duties, where conductivity of the layer is the limiting factor',
          ],
          [
            'Resistance to attack in the anodic layer',
            'Higher — the inert tantalum phase limits the dissolution of the iridium',
            'Lower — the layer is more conductive and therefore more exposed to the local chemistry',
          ],
          [
            'Susceptibility to contaminants',
            'Lower when the feed carries metals that can be deposited and re-dissolved',
            'Higher — a more conductive layer accelerates the side reactions that deposit contaminants',
          ],
          [
            'Cost of the coating material',
            'The reference cost of an iridium system',
            'Lower in the second component, higher overall where more iridium is needed to hold the behaviour',
          ],
          [
            'Typical duty it suits',
            'Acid electrolysis, oxygen evolution with a chlorine-bearing feed, advanced oxidation in acid',
            'Alkaline electrolysis, some plating and finishing duties, general oxygen-evolution service',
          ],
          [
            'What we confirm before quoting it',
            'pH, contaminant load, current density, shutdown behaviour and the required life',
            'pH, contaminant load, current density, shutdown behaviour and the required life',
          ],
        ],
        note:
          'Reference comparison for engineering discussion. The final system is fixed against your electrolyte, current density and duty — it is not selected from a table alone.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'There is one comparison that gets made constantly and that is worth settling early: an iridium system against a ruthenium system. They are not a better and a worse version of the same thing. Ruthenium-based coatings are the reference for chlorine evolution in chloride media; iridium-based coatings are the reference for oxygen evolution and for the acid duties where the ruthenium is not the stable choice. Choosing on the reaction, not on the catalogue, is the whole decision.',
        ],
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'What Is Defined Before Your Anode Is Manufactured',
    intro:
      'These are the parameters that are fixed on the order before manufacture starts. They are the same list for every iridium coating we supply, and each one is answered from your duty rather than from a default.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'Substrate material',
            value:
              'Commercially pure titanium, Grade 1 or Grade 2 as the duty requires. Grade 2 is the usual choice; Grade 1 is specified where the forming or the service temperature argues for it.',
          },
          {
            label: 'Coating system',
            value:
              'IrO₂ – Ta₂O₅ mixed metal oxide, with the iridium and the stabilising oxide balanced against the electrolyte, the current density and the required life. The balance is stated on the order confirmation.',
          },
          {
            label: 'Coating loading basis',
            value:
              'Stated in g/cm² of the coated area, measured on the finished electrode. The figure is tied to the geometry and to the duty — the same nominal loading behaves differently on a thin mesh and on a solid plate.',
          },
          {
            label: 'Active surface area',
            value:
              'Geometric wetted area of the coated surface, stated on the drawing. Current density quoted to you is always referenced to this area, not to the gross envelope of the part.',
          },
          {
            label: 'Current density reference window',
            value:
              'A reference window for oxygen-evolution service, confirmed against the duty. The usable window moves with the electrolyte, with the temperature and with the duty cycle, so the window is reviewed rather than assumed.',
          },
          {
            label: 'Electrolyte and pH',
            value:
              'The medium the electrode is designed for: composition, pH, temperature and the contaminants that can enter the cell are part of the coating selection, not an afterthought.',
          },
          {
            label: 'Connection and masking',
            value:
              'Threaded, shank or stud connection on the substrate, with the masked zone defined so that no coated surface carries mechanical load and no masked area is exposed to the electrolyte.',
          },
          {
            label: 'Surface and edge treatment',
            value:
              'The coating is carried over the working face; edges are either rounded or masked according to the current distribution at that geometry.',
          },
          {
            label: 'Geometries available',
            value:
              'Plate, tubular, rod, wire, mesh and ribbon, in the forms described in the geometry section. Custom shapes are produced to a drawing.',
          },
          {
            label: 'Documentation scope',
            value:
              'Material certification of the substrate, coating loading record, dimensional inspection, visual record and batch traceability, in the combination your acceptance process requires.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Why the loading is quoted in g/cm² and not in microns',
        intro:
          'This is the reference unit we use for every coated titanium anode we make, and it is worth explaining once.',
        note:
          'A coating is a layer with a real mass on a real area. Stating the mass per unit area is stating what was actually deposited, and it stays comparable across substrates, geometries and thicknesses of titanium. It is also what the inspection record is written against, so the number on the certificate is the number on the electrode.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Service Life',
    title: 'What Decides the Service Life of an Iridium Coated Anode',
    intro:
      'Nobody can quote a service life without knowing the duty. This is the list of variables we take into account, in the order in which they move the number, and the failure modes we see when one of them is out of range.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Current density',
            body:
              'The single largest variable. Life does not fall linearly with current: above the reference window the coating thins much faster, because the anodic current is then carried by the substrate rather than by the oxide.',
          },
          {
            title: 'pH of the electrolyte',
            body:
              'The local pH at the anode surface is not the bulk pH. An acidic zone forms at the surface even in an alkaline cell, and that zone is what attacks the layer.',
          },
          {
            title: 'Contaminant load',
            body:
              'Metals carried into the cell can deposit on the anode and be re-dissolved by the oxidising layer. That cycling consumes the coating far faster than a clean feed.',
          },
          {
            title: 'Duty cycle',
            body:
              'A cell that runs continuously and a cell that runs eight hours a day are not the same duty. Standby time in a partially depleted electrolyte is its own exposure.',
          },
          {
            title: 'Temperature',
            body:
              'Higher temperature accelerates the chemistry at the surface and shortens the time to failure for the same current density.',
          },
          {
            title: 'Shutdown behaviour',
            body:
              'A cell that is left standing with a partially depleted electrolyte can leave the surface in a condition it would not reach in steady operation. This is a real and avoidable cause of early loss.',
          },
        ],
      },
      {
        kind: 'table',
        columns: ['Observed condition', 'What it usually indicates', 'What to change'],
        rows: [
          [
            'Uniform thinning of the coating over the whole face',
            'The current density is above the window for the loading, or the duty is longer than the loading was designed for',
            'Reduce the current density, increase the coated area, or specify a higher loading',
          ],
          [
            'Attack concentrated at the edges and at the upper part of the face',
            'Edge effects and electrolyte depletion at the surface — the current is not distributing as the geometry assumed',
            'Change the geometry, the edge treatment or the flow arrangement',
          ],
          [
            'Dark, adherent deposits on the coating',
            'Contaminants are entering the cell and cycling on the anode',
            'Filter the feed, change the upstream separation, or select a coating with a lower susceptibility to deposition',
          ],
          [
            'Coating loss with a bright metal surface underneath',
            'The layer has been consumed through to the substrate — the anode has run out of coating',
            'Increase the loading, or plan the replacement interval against the duty rather than against the calendar',
          ],
          [
            'Rapid loss right after a shutdown or restart',
            'The cell stood in a depleted or contaminated electrolyte and the surface condition changed',
            'Define the shutdown and restart procedure in the operating instructions',
          ],
          [
            'Coating intact but the cell runs at a higher voltage than before',
            'The surface has been covered, or the connection has degraded — the coating is not necessarily the cause',
            'Inspect the surface and the connection before replacing the electrode',
          ],
        ],
        note:
          'Failure modes observed in service and in customer reviews. The diagnosis is confirmed against your cell before a change is specified.',
      },
      {
        kind: 'note',
        title: 'How the life estimate is quoted',
        intro:
          'We quote the estimate as a range against a stated duty, and we state the duty with it.',
        note:
          'The number means nothing on its own: "24 months at 4 A/dm² in a chloride-free acid feed at 40 °C, continuous" is an answer. A single number without those conditions is not, which is why the conditions are printed next to it.',
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Applications',
    title: 'Where Iridium Coated Titanium Anodes Are Used',
    intro:
      'The common applications, and what the coating has to survive in each of them.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/industries/water-treatment/',
            title: 'Advanced oxidation and water treatment',
            body:
              'Electrochemical oxidation for micropollutant removal, where the anode must oxidise organics without adding a consumable metal to the treated water.',
          },
          {
            href: '/industries/electroplating/',
            title: 'Electroplating and surface finishing',
            body:
              'Oxidation of the plating bath constituents, where the electrode faces an acidic or complexed electrolyte and a fixed contaminant load.',
          },
          {
            href: '/industries/chemical-processing/',
            title: 'Chemical processing',
            body:
              'General electrochemical synthesis and regeneration duties, where the electrolyte and the temperature define the coating system.',
          },
          {
            href: '/industries/medical/',
            title: 'Medical and hygienic applications',
            body:
              'Electrochemical sterilisation and disinfection duties, where the electrode must meet a hygienic installation requirement in addition to the chemical duty.',
          },
          {
            href: '/titanium-anode/mmo-anode/',
            title: 'Mixed metal oxide anodes',
            body:
              'The full range of MMO geometries and coating systems, and where this iridium coating sits among them.',
          },
          {
            href: '/titanium-anode/ruthenium-coated-titanium-anodes/',
            title: 'Ruthenium coated titanium anodes',
            body:
              'The chlorine-evolution counterpart, for comparison when both reactions appear in the same plant.',
          },
        ],
      },
    ],
  },
  {
    id: 'geometries',
    band: 'py-20 bg-white',
    eyebrow: 'Geometries',
    title: 'The Geometries This Coating Is Produced In',
    intro:
      'The coating follows the geometry, and the geometry decides the current distribution. Each of the forms below is produced as an iridium-based coating on a titanium substrate, to the same process and the same inspection as the rest of the family.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
            title: 'Disc anodes',
            body:
              'Flat and formed plate for cells with a defined area. The simplest current path and the easiest to inspect.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
            title: 'Tubular anodes',
            body:
              'For cells where the electrode is immersed and the flow runs past it, or where the anode has to fill a vessel volume.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-rod-anode/',
            title: 'Rod anodes',
            body:
              'Compact electrodes for narrow cells and for electrolysis heads where the space is defined.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
            title: 'Wire anodes',
            body:
              'High-area wire for cells that need a large active surface in a small volume.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
            title: 'Mesh and ribbon anodes',
            body:
              'Expanded or perforated mesh and ribbon forms, where the open area and the flow through the electrode both matter.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-canister-anode/',
            title: 'Canister anodes',
            body:
              'Complete electrode assemblies for electrolysis heads, supplied as a manufactured unit rather than as a part.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Custom shapes are produced to a drawing. If your cell needs a geometry that is not on this list, send us the drawing and the duty — the coating selection and the manufacturing route are worked out from both.',
        ],
      },
    ],
  },
  {
    id: 'quality',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Quality Records',
    title: 'What Is Inspected, and What You Receive With the Anode',
    intro:
      'The inspection list below is what we carry out on an iridium coated titanium anode. The documents you receive are the record of it.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Substrate verification',
            body:
              'The titanium is checked against the grade and the certificate before it enters the coating line. The material record travels with the electrode for the rest of its life.',
          },
          {
            title: 'Surface preparation',
            body:
              'The surface is prepared and inspected before coating. Preparation defects are the most common cause of a coating that later delaminates, so this step is recorded, not assumed.',
          },
          {
            title: 'Coating and loading control',
            body:
              'The coating is applied and the loading is controlled and recorded in g/cm², against the value fixed on the order.',
          },
          {
            title: 'Adhesion and continuity',
            body:
              'The bond between the coating and the substrate is checked, and the continuity of the layer over the working face is verified.',
          },
          {
            title: 'Dimensional and visual inspection',
            body:
              'The finished geometry is measured against the drawing and the surface is inspected for the defects that matter in service: pitting, bare areas, edge damage.',
          },
          {
            title: 'Batch traceability and release',
            body:
              'The electrode is traced to its substrate lot, its coating batch and its inspection record, and is released only when the record is complete.',
          },
        ],
      },
      {
        kind: 'linkcards',
        items: [
          {
            href: '/quality/',
            title: 'Quality and inspection process',
            body:
              'The full inspection and certification process, from incoming material to the released shipment.',
          },
          {
            href: '/contact/',
            title: 'Talk to an engineer',
            body:
              'Send the duty data and the drawing, and get an answer you can put into the purchase file.',
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
    title: 'Ir-Ta Anodes Built Around Your Cell, Not Around a Catalogue',
    intro:
      'The coating system, the loading, the substrate grade and the geometry are reviewed together against your electrolyte, your current density and your duty cycle. What comes back is a defined electrode with a stated basis, not a coated part with a product name.',
    image: {
      src: '/images/titanium-anode/ir-ta-mmo-anodes.webp',
      alt: 'Ir-Ta coated titanium anodes for an oxygen evolution duty',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Electrolyte pH and chemistry',
          'Current density basis',
          'Contaminant behaviour',
          'Coating loading',
          'Substrate grade and thickness',
          'Active area and geometry',
          'Electrical connection',
          'Service life target',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Application',
          'Electrolyte',
          'pH',
          'Temperature',
          'Current Density',
          'Coating',
          'Loading',
          'Geometry',
          'Connection',
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
    title: 'Define the Electrolyte, the Duty and the Service Life Before Quotation',
    intro:
      '“Iridium oxide coated titanium anode” is a starting point, not a specification. The coating system, the loading, the substrate and the geometry are only reviewable once the electrolyte and the duty are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the electrolyte composition, the pH, the temperature and the contaminant species present.',
        'Provide the operating current or the current-density basis and the daily schedule.',
        'Describe the shutdown, standby and re-start behaviour of the cell.',
        'Specify the coating family and the loading or coating-control evidence you require.',
        'Define the titanium substrate requirement and any order-specific material standard.',
        'State the geometry, the active surface area and the mechanical installation.',
        'Define the electrical connection, the masking zones and the available space.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'An iridium coating does not establish the service life by itself; the electrolyte and the duty do.',
        '“Ir-Ta” describes a family of coating systems, not a fixed composition or a fixed loading.',
        'A reference current density cannot be transferred between an acid duty and an alkaline duty.',
        'A generic material standard should not be assigned to an anode order without confirming the product form.',
      ],
    },
    related: {
      title: 'Related anode options',
      intro:
        'Compare the adjacent product families only after the reaction, the electrolyte and the supply boundary are clear.',
      links: [
        { href: '/titanium-anode/ruthenium-coated-titanium-anodes/', label: 'Ru-Ir Coated Anodes' },
        { href: '/titanium-anode/platinized-anode/', label: 'Platinized Anodes' },
        { href: '/titanium-anode/lead-dioxide-anode/', label: 'PbO₂ Coated Anodes' },
        { href: '/titanium-anode/mmo-anode/', label: 'All MMO Anode Forms' },
        { href: '/titanium-anode/mmo-anode/mmo-wire-anode/', label: 'MMO Wire Anodes' },
      ],
    },
  },
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Coating, the Substrate and the Geometry Are Controlled',
    intro:
      'We control the titanium identity, the surface condition, the coating loading and the connection against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied electrode.',
    image: {
      src: '/images/titanium-anode/coating-process-loading-control.webp',
      alt: 'Coating process and loading control in the titanium anode workshop',
      caption:
        'Inspection scope is matched to the ordered product and the agreed evidence package.',
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
            title: 'Surface Preparation',
            body: 'Control the roughness and the cleanliness of the substrate before the coating is applied; the coating follows the surface, not the other way round.',
          },
          {
            title: 'Coating Loading',
            body: 'Hold the loading basis of the coating system to the agreed production basis, and do not infer the life from the appearance alone.',
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

export const irTaFaq: { q: string; a: string }[] = [
  {
    q: 'What is the difference between an Ir-Ta coating and a ruthenium-based MMO coating?',
    a: 'They are built for different reactions. Ruthenium-based mixed metal oxide is the reference system for chlorine evolution in chloride media. Iridium-based systems are the reference for oxygen evolution and for the acid duties where the ruthenium is not the stable choice. If both reactions appear in the same plant, both coatings can be right — the one that is wrong is the one chosen without the reaction in mind.',
  },
  {
    q: 'Why does tantalum appear in the coating if iridium does the work?',
    a: 'The two do different jobs. Iridium dioxide carries the catalytic activity for oxygen evolution. Tantalum pentoxide is chemically very inert and it holds the layer together in the strongly oxidising, locally acidic zone that forms at the anode surface, which slows the dissolution of the iridium. Removing the stabilising oxide does not make the coating better; it makes it cheaper and shorter-lived.',
  },
  {
    q: 'How long does an iridium coated anode last?',
    a: 'There is no single answer, and we do not quote one without the duty attached. The estimate is produced as a range against a stated current density, electrolyte, temperature and duty cycle, and it is reviewed with your conditions. Quoting a bare number without those conditions is not an engineering statement.',
  },
  {
    q: 'What happens if the cell is shut down and left standing?',
    a: 'This is one of the more common causes of early loss and it is avoidable. A cell left standing in a partially depleted electrolyte can reach a surface condition it would not reach in steady operation. Define the shutdown, rinse and restart procedure in the operating instructions and the exposure largely goes away.',
  },
  {
    q: 'How is the coating loading specified — thickness, or weight per area?',
    a: 'Weight per unit area, in g/cm² of the coated surface, measured on the finished electrode. That states what was actually deposited, stays comparable across substrates, geometries and titanium thicknesses, and is the same unit the inspection record is written against.',
  },
  {
    q: 'Can you supply an Ir-Ta anode to a drawing?',
    a: 'Yes. Custom shapes are produced to a drawing, and the coating selection, the loading, the connection and the masked zones are worked out together with the duty. Send the drawing and the electrolyte data and the manufacturing route follows from both.',
  },
  {
    q: 'Which geometries are available with this coating?',
    a: 'Disc and plate forms, tubular, rod, wire, mesh and ribbon, and canister assemblies. All of them are produced as an iridium-based coating on a titanium substrate, to the same process and the same inspection as the rest of the family.',
  },
  {
    q: 'Does a contaminated feed shorten the life?',
    a: 'Yes, and it is one of the variables we take into account. Metals carried into the cell can deposit on the anode and be re-dissolved by the oxidising layer, and that cycling consumes the coating faster than a clean feed does. Where it is practical, filtering the feed or changing the upstream separation is cheaper than increasing the loading.',
  },
  {
    q: 'What documentation comes with the anode?',
    a: 'Material certification of the substrate, the coating loading record, dimensional inspection, the visual record and batch traceability, in the combination your acceptance process requires. The scope is agreed at the order, not imposed afterwards.',
  },
  {
    q: 'Will an iridium coating work in an alkaline electrolyte?',
    a: 'It depends on the system. An Ir-Ta coating is usable in alkaline media, but the stabilising oxide is often changed when the electrolyte is alkaline, because the conductivity of the layer becomes the limiting factor rather than its acid stability. This is one of the first things we check, and it is why the pH of your electrolyte is the first question we ask.',
  },
];
