/**
 * Section content of the marine electrolytic anti-fouling system page.
 *
 * Split from `anti-fouling-page.ts` so the copy can be reviewed on its own.
 * Every figure is a reference figure tied to a condition (flow, temperature,
 * salinity, current density, duty cycle) and is confirmed against the vessel
 * before it becomes a system design.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type AntiFoulingBlock = PageBlock;

/** A section of the page family. */
export type AntiFoulingSection = PageSection;

export const antiFoulingSections: AntiFoulingSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This System Is',
    title: 'Anti-Fouling by Oxidation, Not by Barrier',
    intro:
      'An electrolytic anti-fouling system uses a titanium anode to generate an oxidising agent directly in the sea water flowing past the hull. The organisms that settle on the surface are oxidised and cannot establish, so the surface stays clean. There is no barrier coat, nothing to touch up, and nothing to renew in dry dock.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The mechanism is the electrochemistry of the anode. A direct current is applied to a titanium anode in the sea water, and the anode produces chlorine, which hydrolyses to hypochlorous acid. Hypochlorous acid is the active species: it is a strong oxidant and it is what kills the fouling organisms. Because the generation happens at the electrode and the active species is short-lived, the chemistry stays local to the protected surface and it does not build up in the water column.',
          'That locality is the whole design idea, and it is also the reason the system is a flow system. The oxidant is produced in the boundary layer, in the water that is moving past the hull, and it is consumed there. Where the flow is fast and continuous, the oxidant is generated and used efficiently. Where the vessel is slow, stopped or drifting, the water is stagnant, the residual oxidant falls away, and the protection falls away with it.',
          'So the questions that decide an anti-fouling installation are not about the electrode material. They are about how the vessel moves, where the water is moving and where it is not, what the seawater temperature and salinity do to the chemistry, and what the corrosion allowance of the structure can absorb. The electrode is the straightforward part.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'No barrier coating',
            body:
              'Nothing is applied to the hull, so there is nothing to touch up, nothing to strip and nothing to renew in dry dock.',
          },
          {
            title: 'Oxidant at the surface',
            body:
              'The active species is generated where it is needed and consumed where it is used, so it does not accumulate in the water column.',
          },
          {
            title: 'Depends on flow',
            body:
              'The residual oxidant depends on the water moving past the electrode and past the surface. A stationary vessel is the worst case.',
          },
          {
            title: 'Not corrosion protection',
            body:
              'It does nothing for the corrosion of the steel. A vessel needs cathodic protection as well, and the two systems are sized independently.',
          },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Chemistry',
    title: 'What the Electrode Actually Produces in Sea Water',
    intro:
      'The chemistry of sea water decides what the system produces, and the temperature and the pH decide which of those products does the work.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Chlorine at the anode',
            body:
              'The anode reaction in sea water produces chlorine from the chloride that the sea water already contains. This is the same anodic reaction used in chlor-alkali cells, at a much lower concentration.',
          },
          {
            title: 'Hydrolysis to hypochlorous acid',
            body:
              'The chlorine hydrolyses. The proportion that becomes hypochlorous acid depends on the pH, and hypochlorous acid is the species that does the killing.',
          },
          {
            title: 'Oxidation of the organisms',
            body:
              'Hypochlorous acid oxidises the fouling organisms at the surface, and they are prevented from establishing and growing into a biofilm.',
          },
          {
            title: 'Decomposition and loss',
            body:
              'The oxidant decomposes in sunlight, in warm water and on contact with organic material. This is what sets the required current: the electrode has to generate enough to cover the losses.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'A residual, not a dose',
        intro:
          'The number that matters is the residual oxidant at the surface, not the amount of chlorine produced.',
        note:
          'A system is judged on the oxidant that survives to the hull, because that is what the organisms meet. The current is the means of achieving it, and the current is set by the losses — decomposition, contact with organic material, and the water leaving the boundary layer.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'The Inputs That Decide the System',
    intro:
      'An anti-fouling system is specified from the vessel and the water, not from a catalogue. These are the figures we need, and what each one changes in the design.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'Anode substrate',
            value:
              'Titanium Grade 1 or Grade 2, selected for the strength and the corrosion resistance that the installation point requires.',
          },
          {
            label: 'Anode coating',
            value:
              'Mixed metal oxide for the chlorine-evolution reaction in sea water, selected for the low-chloride, temperature-varying duty.',
          },
          {
            label: 'Electrode arrangement',
            value:
              'Streamlined or mesh geometry, sized on the active area that the required current has to be carried at the selected current density.',
          },
          {
            label: 'Current source',
            value:
              'A controlled DC source with the regulation needed to hold the residual oxidant constant as the vessel speed changes.',
          },
          {
            label: 'Control strategy',
            value:
              'Reference-electrode feedback or a flow- and speed-linked control, so the dose follows the demand instead of a fixed output.',
          },
          {
            label: 'Connections and lead-ins',
            value:
              'Seawater-resistant connections, insulated lead-ins and the potential bonding to the structure, resolved against the vessel.',
          },
          {
            label: 'Reference residual oxidant',
            value:
              'Typically held in the sub-milligram-per-litre range at the boundary layer. The setpoint is confirmed against the fouling pressure on the route.',
          },
          {
            label: 'Documentation',
            value:
              'Material certificates, coating records, dimensional inspection, connection inspection and the commissioning record.',
          },
        ],
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Dosing and Performance',
    title: 'Why the Demand Changes With the Vessel',
    intro:
      'The current an anti-fouling system draws is not a constant. It follows the water, and the water follows the vessel. This is the relationship that decides the size of the system and the size of the power supply.',
    blocks: [
      {
        kind: 'table',
        columns: ['Variable', 'What it changes', 'Why it matters to the design'],
        rows: [
          [
            'Seawater temperature',
            'The rate of generation, the rate of decomposition and the balance between the chlorine species',
            'A warm route needs more current than a cold one for the same protection',
          ],
          [
            'Salinity',
            'The chloride available for the anodic reaction, and therefore the generation efficiency',
            'Low-salinity or brackish water changes the current requirement',
          ],
          [
            'Flow speed over the hull',
            'The rate at which the boundary layer is replaced and the oxidant is carried away',
            'This is usually the dominant variable in the whole sizing',
          ],
          [
            'Time at low speed or at rest',
            'The residual oxidant in the boundary layer',
            'A vessel that spends long periods slow or stopped needs a different strategy',
          ],
          [
            'Fouling pressure on the route',
            'The concentration of organisms that need to be oxidised',
            'A route through warm, nutrient-rich water needs a higher residual',
          ],
          [
            'Organic load in the water',
            'The consumption of the oxidant before it reaches the surface',
            'Harbour and aquaculture waters can consume the oxidant very quickly',
          ],
        ],
        note:
          'Reference relationships for system sizing. The current requirement is produced against the actual vessel, route and service pattern.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'The practical consequence is that the power supply and the control system are sized for the worst case, while the average consumption follows the service pattern. A vessel that spends most of its time at speed and only occasionally drifts is a different design from one that works a slow route or waits at anchor regularly. It is worth being explicit about the service pattern at the quotation stage rather than discovering it later.',
        ],
      },
    ],
  },
  {
    id: 'installation',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Installation',
    title: 'Where the Electrode Goes, and Why the Position Matters More Than the Size',
    intro:
      'An anti-fouling electrode is a large, low-current-density electrode. Where it is placed decides whether the oxidant reaches the surface it is meant to protect.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The anode is usually a streamlined or mesh form running along the underwater hull, often inside a protective fairing, and it is connected to a controlled DC source through a sealed lead-in. The arrangement has to satisfy two requirements at once: it has to sit where the water moves past it, so that the oxidant is generated into the boundary layer rather than into a stagnant pocket, and it has to sit where it can be inspected and replaced.',
          'This is why the electrode is frequently run at a lower current density than a chlorine-evolution anode would use, and why a substantial active area is chosen. The system is aiming for a residual across a large surface, not for a reaction rate on a small one. Sizing the electrode for a high current density and then wondering why the residual is low is a common and expensive mistake.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Fairing and streamlining',
            body:
              'The electrode is often faired into the hull line to limit drag and to protect the element from ice, debris and impact.',
          },
          {
            title: 'Lead-in and sealing',
            body:
              'The connection passes through the hull with a sealed, corrosion-resistant penetrator. This is a pressure-boundary detail and it is engineered, not improvised.',
          },
          {
            title: 'Structural bonding',
            body:
              'The structure is bonded to the system so that the anodes and the hull share a potential and the installation does not fight the coating.',
          },
          {
            title: 'Accessibility',
            body:
              'The layout is arranged so that the elements can be inspected and replaced without lifting the vessel out of the water.',
          },
        ],
      },
    ],
  },
  {
    id: 'comparison',
    band: 'py-20 bg-white',
    eyebrow: 'System Boundary',
    title: 'Anti-Fouling vs ICCP: Two Different Jobs',
    intro:
      'These two systems are often discussed together because both use impressed current and both use titanium electrodes. They solve different problems, and a vessel usually needs both.',
    blocks: [
      {
        kind: 'table',
        columns: ['', 'Electrolytic anti-fouling', 'Impressed current cathodic protection'],
        rows: [
          [
            'What it protects against',
            'Biological fouling — the organisms that settle and grow on the surface',
            'Corrosion — the electrochemical dissolution of the metal',
          ],
          [
            'How it works',
            'Generates an oxidising agent at an anode in the sea water',
            'Drives the structure to a protective potential through an anode',
          ],
          [
            'What the current does',
            'Produces the oxidant that kills the organisms',
            'Polarises the steel so that the corrosion reaction stops',
          ],
          [
            'Where the electrode is',
            'In the water, in the flow, aimed at the boundary layer',
            'On the structure, bonded to it, distributing current into the steel',
          ],
          [
            'Effect of being stationary',
            'Protection falls away — no flow means no residual',
            'Protection does not depend on flow',
          ],
          [
            'Effect on the coating',
            'Does not protect the coating system from corrosion',
            'Is the reason the coating system stays intact',
          ],
          [
            'Typical service life',
            'The electrode is consumed or depleted; it is inspected and replaced',
            'The anode is designed to be consumed over the design life of the coating',
          ],
          [
            'Can one replace the other',
            'No — they are complementary and are sized independently',
            'No — anti-fouling cannot be credited with corrosion protection',
          ],
        ],
        note:
          'Anti-Fouling vs ICCP is the boundary that matters most here. One system keeps the surface clean; the other keeps the steel from corroding. Neither substitutes for the other.',
      },
      {
        kind: 'note',
        title: 'Why this is written down explicitly',
        intro:
          'Because the two are sold, specified and occasionally credited against each other in the same document.',
        note:
          'A vessel with an anti-fouling system and no adequate cathodic protection will have a clean hull and a corroding structure. A vessel with cathodic protection and no anti-fouling system will have a sound structure and a fouled hull with the drag that comes with it. The correct specification is both, each sized on its own basis.',
      },
    ],
  },
  {
    id: 'maintenance',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Maintenance',
    title: 'What the Operator Has to Do',
    intro:
      'An anti-fouling system has no coating to renew, but it does have an electrode that has to be checked and a control system that has to be verified.',
    blocks: [
      {
        kind: 'list',
        points: [
          'Inspect the electrode elements at the planned interval and record the condition of the surface, the connections and the fairing.',
          'Verify the residual oxidant at the boundary layer, at the setpoint agreed for the route, rather than only at the power panel.',
          'Check the current draw against the service pattern — a fall in current at speed usually means a fouled or a degraded element.',
          'Inspect the lead-ins, the penetrators and the bonding to the structure for evidence of seawater ingress.',
          'Keep the reference electrode or the control sensor clean and calibrated; the control is only as good as its sensor.',
          'Plan for element replacement in the window that the shipyard can give you, rather than at the point of failure.',
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'There is no dry-dock renewal cycle for the coating, because there is no coating. What there is instead is a scheduled inspection and a planned replacement of the electrode elements, which can be done alongside other underwater work. For most operators this is the whole argument for the system: the annual cost of a clean hull replaces a cycle of stripping, blasting and repainting.',
        ],
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'An Anti-Fouling System Sized for the Vessel, the Route and the Sea',
    intro:
      'The system is not a set of electrodes. It is a chlorine generator, a control strategy, a current requirement, an arrangement on the hull and a maintenance regime. Those are reviewed together against the vessel, the route and the fouling pressure, because each of them decides whether the system works.',
    image: {
      src: '/images/titanium-anode/iccp-marine-protection.webp',
      alt: 'Marine anti-fouling system arrangement on a steel hull',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Vessel length and speed range',
          'Hull form and protected areas',
          'Seawater temperature and salinity',
          'Fouling pressure on the route',
          'Existing corrosion protection',
          'Available space and cable route',
          'Electrical supply',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Vessel',
          'Speed Range',
          'Route',
          'Fouling Pressure',
          'Electrode Layout',
          'Control',
          'Maintenance',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define the Vessel, the Route and the Control Basis Before Quotation',
    intro:
      'A system name is not a specification. The electrode arrangement, the control strategy and the maintenance regime are only reviewable once the vessel, the route and the fouling pressure are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the vessel type, the length and the speed range with the percentage of time under way.',
        'State the hull form, the areas to be protected and the areas that are excluded.',
        'State the seawater temperature, the salinity and the fouling pressure on the route.',
        'State the corrosion protection already fitted and the current it draws.',
        'State the available space, the connection route and the electrical supply.',
        'State the control strategy and the residual setpoint the system is to hold.',
        'State the discharge point and the regulatory requirement that applies to it.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'An anti-fouling system does not establish the service life by itself; the route and the duty do.',
        'The electrode arrangement depends on the hull form and the protected area, not on the vessel length alone.',
        'The residual setpoint and the discharge point are prescribed by the local regulation and are not ours to choose.',
        'The system is not a substitute for the corrosion protection already fitted.',
      ],
    },
    related: {
      title: 'Related anode options',
      intro: 'Compare the adjacent product families only after the reaction, the environment and the supply boundary are clear.',
      links: [
        { href: '/titanium-anode/mmo-anode/', label: 'All MMO Anode Forms' },
        { href: '/titanium-anode/mmo-anode/mmo-disc-anode/', label: 'MMO Disc Anodes' },
        { href: '/titanium-anode/mmo-anode/mmo-wire-anode/', label: 'MMO Wire Anodes' },
        { href: '/cathodic-protection/', label: 'Cathodic Protection' },
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
    title: 'How the System, the Control and the Documentation Are Controlled',
    intro:
      'We control the titanium identity, the electrode arrangement, the control hardware and the connection against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied system.',
    image: {
      src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
      alt: 'Electrical connection and geometry inspection of an anode assembly',
      caption: 'Inspection scope is matched to the ordered system and the agreed evidence package.',
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
            title: 'Electrode Arrangement',
            body: 'Hold the electrode layout, the spacing and the active area to the agreed design basis, and do not infer the performance from the surface alone.',
          },
          {
            title: 'Control and Connection',
            body: 'Review the control strategy, the current path, the sealing and the connection details included in our supply scope.',
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

export const antiFoulingFaq: { q: string; a: string }[] = [
  {
    q: 'Is an electrolytic anti-fouling system a replacement for cathodic protection?',
    a: 'No. The two protect against different mechanisms, and a vessel normally needs both. Anti-fouling generates an oxidising agent in the sea water that kills the organisms which settle on the hull. Cathodic protection polarises the steel so that the corrosion reaction stops. Anti-fouling does nothing for corrosion, and cathodic protection does nothing for biological growth. They are sized independently, and each is credited only with what it actually does.',
  },
  {
    q: 'Does the system protect the hull coating from corrosion?',
    a: 'No. The oxidising agent it generates is aggressive towards coatings, which is one more reason the two systems are specified together. The coating system is protected by cathodic protection; the fouling is prevented by the anti-fouling system. Treating either system as if it did the other’s job is how vessels end up with a clean hull and a corroding structure.',
  },
  {
    q: 'What happens when the vessel is stopped or drifting?',
    a: 'The protection falls away. The oxidant is generated into the boundary layer and it is consumed there, so it depends on the water moving past the surface. Without flow there is no replacement of the boundary layer and the residual decays. For a vessel that spends long periods stationary, the sizing has to account for it, and in some service patterns an additional measure is needed.',
  },
  {
    q: 'How is the required current calculated?',
    a: 'From the losses, not from a nominal figure. The current has to cover the oxidant decomposed by sunlight and temperature, the oxidant consumed by organic material in the water, and the oxidant carried out of the boundary layer by the flow. The fouling pressure of the route sets the residual that has to be maintained, and the flow, the temperature and the salinity set the losses. We produce the current requirement against the actual vessel, route and service pattern.',
  },
  {
    q: 'Why is the electrode so much larger than a cathodic protection anode?',
    a: 'Because the two run at completely different current densities. A cathodic protection anode is designed to concentrate current into the structure; an anti-fouling electrode is designed to deliver a residual over a large surface, and it works best at a low current density with a large active area. Sizing an anti-fouling electrode like a cathodic protection anode is a common mistake that produces a high current draw and a low residual.',
  },
  {
    q: 'Does the system work in brackish or polluted water?',
    a: 'Not identically. The chemistry of sea water is what makes the chlorine hydrolysis work the way it does, and the current requirement changes with salinity. In heavily polluted or organic-rich water the oxidant is consumed faster by the contaminants, which raises the demand and can change the balance of the design. The water analysis has to be part of the enquiry rather than an assumption.',
  },
  {
    q: 'What does the operator have to do routinely?',
    a: 'Inspect the electrode elements, the connections, the lead-ins and the fairing; verify the residual oxidant at the boundary layer rather than only the current at the panel; and keep the control sensor clean and calibrated. There is no coating to renew and nothing to strip in dry dock, so the maintenance is inspection and a planned replacement of elements rather than a full coating cycle.',
  },
  {
    q: 'Can the electrode be inspected and replaced in dry dock?',
    a: 'Yes, and it is normally done alongside other underwater work. The layout is arranged so that the elements can be reached without lifting the vessel out of the water, which is one of the arguments for the system over a conventional coating approach.',
  },
  {
    q: 'Is there any environmental restriction on the use of chlorine?',
    a: 'The generation is local and the active species is short-lived, which is the reason the system is workable at all. Even so, the discharge has to be assessed against the local regulation, and in some jurisdictions the residual setpoint and the discharge point are prescribed. We design to the requirement given to us and we state the operating basis, so the assessment can be made against real figures rather than against a catalogue.',
  },
  {
    q: 'What do you need from us to quote the system?',
    a: 'The vessel type, length and speed range with the percentage of time under way; the hull form and the areas to be protected; the seawater temperature, the salinity and the fouling pressure on the route; the corrosion protection already fitted and the current it draws; and the available space, the connection route and the electrical supply. With that we answer with a current requirement, an electrode arrangement, an installation detail and the documentation scope.',
  },
];

