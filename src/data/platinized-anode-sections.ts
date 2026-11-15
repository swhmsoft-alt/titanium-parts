/**
 * Section content of the platinized titanium anode page.
 *
 * Split from `platinized-anode-page.ts` so the copy can be reviewed on its
 * own. Every statement is tied to a condition (current density, electrolyte,
 * temperature, duty cycle) — reference windows are labelled as reference
 * windows and are confirmed against the actual duty before they become a
 * quotation.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type PlatinizedBlock = PageBlock;

/** A section of the page family. */
export type PlatinizedSection = PageSection;

export const platinizedSections: PlatinizedSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This Anode Is',
    title: 'Platinized Titanium: A Noble Layer on a Light Substrate',
    intro:
      'A platinized titanium anode is a titanium substrate with a layer of platinum on the working face. Platinum is the most corrosion-resistant metal available, it does not dissolve into the product stream, and it keeps its shape over a very long service. Those three properties are the reason to choose it, and they are the reason it is not the cheap answer.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The titanium underneath does the structural work. It is light, it is strong, it is easy to form into plates, tubes, wire and mesh, and it is cheap compared with the noble metal above it. The platinum does the electrochemical work. Because platinum does not dissolve, the treated stream picks up no metal ion from the electrode — which matters when the product is water, a pharmaceutical intermediate, a food-grade stream or a high-purity chemical.',
          'That property is what separates a platinized anode from the mixed metal oxide anodes in the same family. An MMO coating is consumed slowly and it releases what it is made of as it goes. A platinum coating is not consumed in the same way, so the electrode keeps its dimensions and its surface for far longer. That is the case for it. The case against it is equally plain: platinum is one of the most expensive metals in manufacturing, and a platinized electrode is a coating-cost decision before it is a performance decision.',
          'The third property is selectivity. Platinum is a very good catalyst for the reactions it suits — hydrogen evolution, oxidation of organics, the anodic side of a laboratory electrochemistry cell — and it holds its activity over a wide range of conditions. It is also, in some media, more prone than a mixed metal oxide to the side reactions that consume current without doing the useful work.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'No dissolution',
            body:
              'Platinum does not dissolve into the electrolyte, so the treated stream is not contaminated by the electrode. This is the primary reason for the coating.',
          },
          {
            title: 'Dimensional stability',
            body:
              'The working face does not thin measurably over the service life, so a cell can be set up once and left running without a geometry correction.',
          },
          {
            title: 'Wide chemical tolerance',
            body:
              'Platinum tolerates media that attack other electrode materials, including strong oxidising acids in the correct conditions.',
          },
          {
            title: 'A coating-cost decision',
            body:
              'The cost is dominated by the noble metal and by the deposition route. The right question is what the duty is worth, not what the coating costs per square metre.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Platinized is not a specification',
        intro:
          'Two platinized anodes can differ in behaviour while both being called platinized. This is why we do not quote from a name.',
        note:
          'The application method, the loading, the coverage of the working face, the surface morphology and the adhesion to the substrate all change the behaviour. So does whether the face is fully platinized or only partially, and whether the back and the edges are masked. These are defined on the order, not implied by the product name.',
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Coating Chemistry',
    title: 'How the Platinum Gets On, and Why That Decides the Behaviour',
    intro:
      'The deposition route is the single most consequential decision on a platinized anode, because it decides the adhesion, the morphology and what happens at a pinhole.',
    blocks: [
      {
        kind: 'table',
        columns: ['Aspect', 'Electroplated platinum', 'Platinum from a molecular precursor'],
        rows: [
          [
            'How the layer forms',
            'Platinum is deposited from a platinum salt solution onto a prepared and activated titanium surface',
            'A platinum precursor is converted in place into a thin, adherent platinum layer on the titanium',
          ],
          [
            'Adhesion to titanium',
            'Good, and it depends entirely on the surface preparation and the activation step before plating',
            'Very good — the layer grows out of the substrate surface rather than onto it',
          ],
          [
            'Layer thickness possible',
            'A wide range, from a very thin layer to a heavy build',
            'Normally a thin layer; heavy builds are achieved by repeated treatment',
          ],
          [
            'Surface morphology',
            'Dense and smooth, with the crystal structure of the deposited metal',
            'Fine-grained and conformal, following the substrate roughness',
          ],
          [
            'Behaviour at a defect',
            'A through-thickness defect can expose the titanium to the electrolyte',
            'A local defect still leaves a titanium surface behind, and the substrate has to be protected',
          ],
          [
            'Where it is usually chosen',
            'Where a heavier, more robust platinum layer is wanted on a large active area',
            'Where a thin, conformal, well-adhered layer is wanted and the cost has to be controlled',
          ],
          [
            'What we confirm before quoting it',
            'The application method, the loading, the coverage, the mask and the required life',
            'The application method, the loading, the coverage, the mask and the required life',
          ],
        ],
        note:
          'Reference comparison for engineering discussion. The route is selected against your electrolyte, current density, coverage requirement and budget — not from this table alone.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'There is a comparison worth making here as well, because it comes up in every review: a platinized titanium anode against a ruthenium or iridium mixed metal oxide anode. They are not competitors in the same niche. The MMO coatings are the workhorses for large-area chlorine and oxygen evolution, where cost per square metre is part of the economics. The platinized anode is the answer where the product stream must stay metal-free, where the geometry must not change, or where the electrolyte tolerates nothing else.',
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
      'These are the parameters fixed on the order before manufacture starts. Each is answered from your duty rather than from a default.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'Substrate material',
            value:
              'Commercially pure titanium, Grade 1 or Grade 2. Grade 2 is the usual choice; Grade 1 is specified where the forming route or the service temperature argues for it.',
          },
          {
            label: 'Application method',
            value:
              'Electroplated platinum, platinum from a molecular precursor, or a combined route, selected against the electrolyte, the loading and the adhesion requirement.',
          },
          {
            label: 'Platinum loading',
            value:
              'Stated in µm or in g/cm² of the coated area, in whichever unit your acceptance process uses. The two are converted and stated together, because one alone does not describe the layer.',
          },
          {
            label: 'Coverage',
            value:
              'Which surfaces carry the platinum: the working face only, the working face with the edges, or a defined partial pattern. The back, the edges and the connection are masked so that no platinum is exposed where it is not wanted.',
          },
          {
            label: 'Active surface area',
            value:
              'Geometric wetted area of the platinized surface, stated on the drawing. Current density is always referenced to this area.',
          },
          {
            label: 'Current density reference window',
            value:
              'A reference window for platinized service, confirmed against the duty. The usable window moves with the electrolyte and with the temperature, so it is reviewed rather than assumed.',
          },
          {
            label: 'Electrolyte and pH',
            value:
              'Composition, pH, temperature and the contaminants present. These decide the route, the loading and the coverage, so they are confirmed before anything is coated.',
          },
          {
            label: 'Connection and masking',
            value:
              'Threaded, shank or stud connection on the substrate, with the masked zone defined so that the connection carries the current and the masked area is not exposed.',
          },
          {
            label: 'Geometries available',
            value:
              'Plate, tubular, rod, wire, mesh and ribbon, in the forms described in the geometry section. Custom shapes are produced to a drawing.',
          },
          {
            label: 'Documentation scope',
            value:
              'Material certification of the substrate, the coating record, dimensional inspection, visual record and batch traceability, in the combination your acceptance process requires.',
          },
        ],
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Performance',
    title: 'How a Platinized Anode Behaves, and How It Fails',
    intro:
      'A platinized anode does not wear away like a consumable coating. Its failure modes are different, and they are worth knowing before you write an operating procedure.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Coverage is the life',
            body:
              'As long as the platinum covers the working face, the surface keeps its behaviour. The end of life is the point at which the coverage is no longer continuous, not a gradual thinning of the layer.',
          },
          {
            title: 'Adhesion decides the failure mode',
            body:
              'A well-adhered layer that loses coverage does so gradually. A poorly adherent layer lifts, and it lifts in patches, which is a visible and diagnosable event rather than a slow drift.',
          },
          {
            title: 'Contaminants still matter',
            body:
              'Platinum resists most contaminants, but organic or metallic deposits on the surface block the active area and change the overpotential even though the coating is intact.',
          },
          {
            title: 'Side reactions consume current',
            body:
              'In some media platinum catalyses more than the reaction you want. The cell runs, the voltage is right, and the yield is not — which is a process problem, not a coating failure.',
          },
        ],
      },
      {
        kind: 'table',
        columns: ['Observed condition', 'What it usually indicates', 'What to change'],
        rows: [
          [
            'Small bright patches of titanium showing through the layer',
            'Coverage is no longer continuous on the working face — the electrode has reached the end of its life',
            'Replace the electrode, and review whether the loading matched the duty',
          ],
          [
            'Platinum lifting in flakes at an edge or at a masked boundary',
            'Adhesion is the problem, often combined with thermal cycling or with a bad preparation',
            'Review the preparation and the activation step, and specify the adhesion requirement',
          ],
          [
            'Dark, adherent film over part of the face',
            'Deposits are blocking the active area — the coating is intact but the surface is covered',
            'Clean the surface in service and review the upstream filtration',
          ],
          [
            'Cell voltage higher than the design value, coating intact',
            'The surface is fouled, or the gas bubble coverage has increased',
            'Inspect the surface and the gas release before replacing the electrode',
          ],
          [
            'Platinum found in the product stream',
            'A through-thickness defect exposed the titanium, and the titanium was attacked instead of the platinum',
            'This is a defect, not a wear mode — review the inspection record and the coverage',
          ],
        ],
        note:
          'Failure modes observed in service and in customer reviews. The diagnosis is confirmed against your cell before a change is specified.',
      },
      {
        kind: 'note',
        title: 'The honest way to state a life figure',
        intro:
          'A platinized anode is usually specified as a long-life electrode, and that is true.',
        note:
          'What matters for the purchase file is the stated coverage, the stated loading and the electrolyte it was selected for. Where a customer needs a replacement interval, we produce it against a stated current density, electrolyte and duty — and the conditions are printed next to the number.',
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Applications',
    title: 'Where Platinized Titanium Anodes Are Used',
    intro:
      'The applications where the properties of platinum — no dissolution, dimensional stability, chemical tolerance — are worth what they cost.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/industries/medical/',
            title: 'Medical and hygienic applications',
            body:
              'Electrochemical sterilisation and disinfection duties, where the treated stream must not receive a metal ion from the electrode.',
          },
          {
            href: '/industries/water-treatment/',
            title: 'Water treatment and electrolysis',
            body:
              'High-purity electrolysis and ozone generation duties where the product stream has to stay metal-free.',
          },
          {
            href: '/industries/chemical-processing/',
            title: 'Chemical processing',
            body:
              'Synthesis and regeneration duties where the electrolyte is aggressive and the geometry has to stay stable.',
          },
          {
            href: '/industries/electroplating/',
            title: 'Electroplating and surface finishing',
            body:
              'Pretreatment and finishing duties where dimensional stability of the electrode matters to the plating thickness.',
          },
          {
            href: '/industries/electrowinning/',
            title: 'Electrowinning',
            body:
              'Cathodic metal recovery duties, where the anode environment sets the purity of the recovered metal.',
          },
          {
            href: '/titanium-anode/mmo-anode/',
            title: 'Mixed metal oxide anodes',
            body:
              'The rest of the coating family, for comparison when the duty could go either way.',
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
      'Each of the forms below is produced as a platinized titanium anode, with the coverage, the masking and the connection defined against your drawing.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
            title: 'Disc and plate anodes',
            body:
              'Flat and formed plate for cells with a defined area, and the easiest form to inspect for coverage.',
          },
          {
            href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
            title: 'Tubular anodes',
            body:
              'For immersed duties where the flow runs past the electrode, or where the anode has to fill a vessel volume.',
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
          'Custom shapes are produced to a drawing, including the platinized pattern itself where a partial coverage is part of the design.',
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
      'The inspection list below is what we carry out on a platinized titanium anode. The documents you receive are the record of it.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Substrate verification',
            body:
              'The titanium is checked against the grade and the certificate before it enters the coating line. The material record travels with the electrode.',
          },
          {
            title: 'Surface preparation and activation',
            body:
              'The surface is prepared, activated and inspected before any platinum is deposited. This is the step that decides the adhesion, so it is recorded rather than assumed.',
          },
          {
            title: 'Coating application and loading control',
            body:
              'The layer is applied by the agreed route and the loading is controlled and recorded against the value fixed on the order.',
          },
          {
            title: 'Adhesion and continuity',
            body:
              'The bond to the substrate is checked, and the continuity of the platinum over the working face is verified against the specified coverage.',
          },
          {
            title: 'Dimensional and visual inspection',
            body:
              'The finished geometry is measured against the drawing and the surface is inspected for the defects that matter in service: bare patches, pitting, edge damage.',
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
    title: 'Platinized Anodes Built Around the Cell, Not Around a Product Name',
    intro:
      'The platinum metric, the substrate grade, the geometry and the connection are reviewed together against your electrolyte, your current density and your duty. What comes back is a defined electrode with a stated basis, not a plated part with a label.',
    image: {
      src: '/images/titanium-anode/platinized-titanium-anodes.webp',
      alt: 'Platinized titanium anodes supplied by our factory',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Electrolyte chemistry and pH',
          'Current density basis',
          'Platinum metric and coverage',
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
          'Platinum Metric',
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
    title: 'Define the Electrolyte, the Platinum Metric and the Duty Before Quotation',
    intro:
      '“Platinized titanium anode” is a starting point, not a specification. The platinum metric, the coverage, the substrate and the geometry are only reviewable once the electrolyte and the duty are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the electrolyte composition, the pH, the temperature and the contaminants present.',
        'Provide the operating current or the current-density basis and the daily schedule.',
        'State whether the platinum is to be applied as a coating or as a plated layer, and the metric you require.',
        'Define the titanium substrate requirement and any order-specific material standard.',
        'State the geometry, the active surface area and the mechanical installation.',
        'Define the electrical connection, the masking zones and the available space.',
        'State the inspection and the document scope your acceptance process needs.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A platinum anode does not establish the service life by itself; the electrolyte and the duty do.',
        '“Platinized” does not state the platinum metric, the coverage or the adhesion requirement.',
        'A reference current density cannot be transferred between a plating duty and an electrolysis duty.',
        'The plating route has to be compatible with the substrate and with the masking.',
      ],
    },
    related: {
      title: 'Related anode options',
      intro: 'Compare the adjacent product families only after the reaction, the electrolyte and the supply boundary are clear.',
      links: [
        { href: '/titanium-anode/ruthenium-coated-titanium-anodes/', label: 'Ru-Ir Coated Anodes' },
        { href: '/titanium-anode/iridium-oxide-coated-titanium-anodes/', label: 'Ir-Ta Coated Anodes' },
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
    title: 'How the Substrate, the Plating and the Geometry Are Controlled',
    intro:
      'We control the titanium identity, the surface condition, the plating process and the connection against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied electrode.',
    image: {
      src: '/images/titanium-anode/surface-preparation-control.webp',
      alt: 'Surface preparation control before the plating process',
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
            title: 'Surface Preparation',
            body: 'Control the roughness and the cleanliness of the substrate before the plating is applied; the layer follows the surface, not the other way round.',
          },
          {
            title: 'Plating Process',
            body: 'Hold the process basis and the loading of the platinum layer to the agreed production basis, and do not infer the life from the appearance alone.',
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

export const platinizedFaq: { q: string; a: string }[] = [
  {
    q: 'What is the difference between platinized titanium and a mixed metal oxide anode?',
    a: 'They solve different problems. A mixed metal oxide coating is consumed slowly and releases its constituents as it goes, which makes it the economical answer for large-area chlorine and oxygen evolution. A platinum coating does not dissolve, so the treated stream stays metal-free and the working face keeps its dimensions. Choose the MMO coating for cost per square metre of duty; choose the platinized electrode when contamination or dimensional stability is the constraint.',
  },
  {
    q: 'Is a platinized titanium anode actually long-life?',
    a: 'Yes, relative to a consumable coating, and the reason is specific: the coating is not consumed, so the end of life is the point at which the coverage is no longer continuous. That is a very different mechanism from a coating thinning gradually, and it is why the specified coverage and loading matter more than a calendar replacement interval.',
  },
  {
    q: 'What is the difference between electroplated platinum and a platinum precursor coating?',
    a: 'The route decides the adhesion, the morphology and the behaviour at a defect. Electroplating builds a dense, smooth metal layer onto a prepared and activated titanium surface and allows heavier builds. A precursor route converts in place into a thin, conformal, fine-grained layer that grows out of the substrate and adheres very well, and it is normally a thin layer. The route is selected against your electrolyte, loading and adhesion requirement.',
  },
  {
    q: 'Will the titanium substrate corrode if the platinum layer is damaged?',
    a: 'That is the reason coverage and continuity are inspected, and the reason the mask around the connection and the edges is defined. A through-thickness defect that exposes titanium to the electrolyte is a defect, not a wear mode, and it is caught at inspection. If platinum is found in the product stream, the electrode should be replaced and the inspection record reviewed.',
  },
  {
    q: 'Can you platinize only part of the surface?',
    a: 'Yes, and it is often the right answer. The coverage pattern is defined on the order: the working face only, the working face with the edges, or a defined partial pattern for a specific cell. The back, the edges and the connection are masked so that no platinum is exposed where it is not wanted.',
  },
  {
    q: 'How is the platinum loading stated?',
    a: 'In µm or in g/cm² of the coated area, in whichever unit your acceptance process uses. The two are converted and stated together, because one alone does not describe the layer: thickness without the density behind it, or a mass per area without the morphology, is not a specification.',
  },
  {
    q: 'Which geometries are available in platinized form?',
    a: 'Disc and plate forms, tubular, rod, wire, mesh and ribbon, and canister assemblies. All of them are produced with the coverage, the masking and the connection defined against your drawing.',
  },
  {
    q: 'Can you supply a platinized anode to our drawing?',
    a: 'Yes. Custom shapes are produced to a drawing, including the platinized pattern itself where a partial coverage is part of the design. Send the drawing and the electrolyte data and the coating route follows from both.',
  },
  {
    q: 'What documentation comes with the electrode?',
    a: 'Material certification of the substrate, the coating record, dimensional inspection, the visual record and batch traceability, in the combination your acceptance process requires. The scope is agreed at the order rather than imposed afterwards.',
  },
  {
    q: 'Does the cell voltage rise over the life of a platinized anode?',
    a: 'Not normally, because the surface is not thinning. If the voltage does rise, look at the surface and the gas release first — a fouled surface or increased bubble coverage will do it, and that is a service question rather than a reason to replace the electrode.',
  },
];
