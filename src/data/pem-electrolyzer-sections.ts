/**
 * Section content of the PEM electrolyzer page.
 *
 * Split from `pem-electrolyzer-page.ts` so the copy can be reviewed on its
 * own. Every figure is a reference window tied to a condition (feed water
 * quality, current density, stack temperature, pressure, duty cycle) and is
 * confirmed against the actual duty before it becomes a quotation. No
 * certificate, customer or performance record is stated that cannot be
 * evidenced.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type PemBlock = PageBlock;

/** A section of the page family. */
export type PemSection = PageSection;

export const pemSections: PemSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What A PEM Electrolyzer Is',
    title: 'A PEM Electrolyzer Is a Gas Production Line, Not a Stack in a Box',
    intro:
      'A proton exchange membrane electrolyzer splits demineralised water into hydrogen and oxygen by passing a current through a membrane assembly. The membrane is the heart of it, but the cell only works as part of a system: the power supply, the gas purification, the cooling, the water treatment, the controls and the safety chain all decide whether the plant produces hydrogen at the rate you paid for.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The mechanism is simple. At the anode, water is oxidised and oxygen leaves the assembly. At the cathode, protons cross the membrane and hydrogen leaves on the other side. Because the membrane conducts protons but not electrons, the two gases are produced in separate compartments and stay separate — which is the main practical reason a PEM system is chosen over the alternatives for high-purity duty.',
          'The membrane is not just a separator. It is the electrolyte and the cathode support at the same time, and it defines the operating temperature, the pressure the cell can run at, and how fast the gas leaves. Changing the membrane changes the purity, the pressure, the dynamic behaviour and the cost of the stack in one move, which is why the membrane grade is a real decision rather than a detail.',
          'The consequence is that "PEM electrolyzer" names a family of machines with a wide range of behaviour, not one product. A laboratory generator, a stack for a fuel-cell test rig, and a containerised plant are the same chemistry with very different engineering, and the page keeps them apart because the specification for one is meaningless for the others.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'The membrane decides the purity',
            body:
              'The membrane keeps the products apart, so the hydrogen leaves the cathode side without carrying the oxygen over. How much oxygen remains depends on crossover and on how well the cell is sealed, not on a catalogue figure.',
          },
          {
            title: 'The feed water decides the life',
            body:
              'The membrane and the catalyst are both damaged by metal ions in the feed. The quality of the water is a more frequent cause of a short stack life than the pressure or the duty cycle.',
          },
          {
            title: 'The current decides the output',
            body:
              'Output follows the current passed through the active area, and the efficiency follows the cell voltage. Output per unit of power is where systems differ, and it is where a poor design is paid for over the whole life of the plant.',
          },
          {
            title: 'The balance of plant decides the uptime',
            body:
              'Cooling, gas drying, purification, and the safety chain are not accessories. They are what turn a stack into a machine that can run unattended and be handed over for acceptance.',
          },
        ],
      },
    ],
  },

  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Choosing The Route',
    title: 'PEM Against Alkaline: A Comparison You Should Make Before Anything Else',
    intro:
      'The alkaline route is older, cheaper per kilowatt and easier to service. The PEM route gives higher current density, faster dynamic response and a product that leaves the cell nearly free of oxygen. Neither is better in general — they suit different duties, and the comparison below is the one that should happen before a supplier is chosen.',
    blocks: [
      {
        kind: 'table',
        columns: ['Aspect', 'PEM route', 'Alkaline route'],
        rows: [
          [
            'Electrolyte',
            'Proton exchange membrane; the membrane is the electrolyte and the separator',
            'Liquid potassium hydroxide or sodium hydroxide in a porous diaphragm',
          ],
          [
            'Product purity',
            'Hydrogen leaves the cathode compartment with very little oxygen crossover',
            'Hydrogen leaves the gas space shared with the oxygen, so it is diluted and has to be purified',
          ],
          [
            'Current density',
            'Higher; compact and well suited to a footprint-constrained site',
            'Lower; the cell area per unit of output is larger',
          ],
          [
            'Dynamic response',
            'Fast; load follows the grid on a short timescale, which is why it is used with renewable input',
            'Slower; the electrolyte has to be brought to its working condition first',
          ],
          [
            'Turndown',
            'Wide, down to a low fraction of rated load',
            'Narrower; very low load causes gas purity and electrolyte issues',
          ],
          [
            'Operating temperature',
            'Low, typically around 60-80 °C in the cell',
            'Higher, typically around 80-90 °C, and the electrolyte has to stay above its freezing point',
          ],
          [
            'Feed water',
            'Demanding; the membrane is sensitive to metal ions, so demineralised water is required',
            'More tolerant; the liquid electrolyte is far less sensitive to trace metals',
          ],
          [
            'Service and cost',
            'Stack replacement is less frequent but more expensive when it comes',
            'Cheaper stacks, simpler service, but larger footprint',
          ],
          [
            'Typical duty',
            'Variable renewable input, high-purity requirement, space-constrained or mobile duty',
            'Steady base load, large output, lowest cost per kilogram',
          ],
        ],
        note:
          'The comparison is a starting point, not a decision. The decisive inputs are the load profile, the required purity, the available footprint, the water treatment that can be sustained on site, and the capital and running cost the project can carry.',
      },
      {
        kind: 'note',
        title: 'The load profile decides more than the technology',
        note:
          'A PEM stack follows a variable input within seconds; an alkaline cell has to be brought to its working temperature and electrolyte concentration first. If the duty is steady base load and the footprint is not constrained, the alkaline route is usually the cheaper answer. If the duty is driven by a renewable input, or the site has no room for a large cell, or the hydrogen has to come out of the cell already pure enough to use, the PEM route is the one that fits. Decide the duty first; the technology follows from it.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'The Parameters We Quote Against, and the Window Each One Belongs To',
    intro:
      'The figures below are the reference windows we quote for a PEM electrolyzer. They are not guarantees and they are not interchangeable: each one holds inside a stated condition, and several of them pull in opposite directions. The quotation states the operating point these windows are quoted at, so the numbers have a meaning.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          { label: 'Electrolyte', value: 'Deionised water; typically high-conductivity feed' },
          { label: 'Stack technology', value: 'Proton exchange membrane, with the membrane grade stated' },
          { label: 'Product hydrogen purity', value: 'Typically better than 99.99 % at the stack outlet, before purification' },
          { label: 'Oxygen in hydrogen', value: 'A function of crossover, load and cell sealing; quoted with the load' },
          { label: 'Hydrogen delivery pressure', value: 'Configurations from near atmospheric to several tens of bar' },
          { label: 'Oxygen delivery pressure', value: 'Usually atmospheric; the two outlets are at different pressures' },
          { label: 'Cell temperature', value: 'Typically 60-80 °C, with the cell held below the membrane limit' },
          { label: 'Feed water consumption', value: 'Stoichiometric plus a purification and blowdown allowance' },
          { label: 'System output', value: 'From a few hundred watts for laboratory duty to megawatt class for a plant' },
          { label: 'Stack life', value: 'A function of load, feed quality and operating hours; quoted with the basis' },
        ],
      },
      {
        kind: 'note',
        title: 'Two numbers that are quoted without their conditions are the two that mislead',
        intro:
          'We state them here because they are the ones that arrive as a bare figure on an enquiry.',
        note:
          'Purity without the load at which it was measured is not a specification, because oxygen crossover rises with current density. And stack life without the feed water quality and the operating hours is not a number, because the two things that shorten a membrane stack are the load and the water, not the calendar. Ask what the figure was measured at.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'How The Output Is Made',
    title: 'Where the Energy Goes, and What Actually Limits the Output',
    intro:
      'The headline figure of a PEM electrolyzer is its output in kilograms per hour. The number that matters over years is the energy each kilogram costs, and that is set by the cell voltage, which is itself a sum of several small contributions. Understanding the split is how you tell a well-designed system from a badly matched one.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'Split the cell voltage into its parts and the picture becomes clear. There is the reversible voltage, which is the thermodynamic minimum and cannot be beaten. On top of it sit the overpotentials of the two electrodes, which are the catalytic cost of the reactions, and the ohmic losses of the membrane and the current collectors, which grow with current density and with how the stack was assembled. Add to that the balance of plant, and the difference between a good stack and an average one is often smaller than the difference between a well-tuned system and an average one.',
          'The practical consequence is that a system specified only by output and by electrical input is under-specified. The same output can be produced with a larger stack at a lower current density, which costs more in capital and less in energy, or with a smaller stack at a higher current density, which costs less in capital and more in energy and wears the membrane faster. That trade is a project decision, and it is made explicitly rather than by default.',
          'There is a limit on how far the current density can be pushed. Past it the membrane runs too hot, the local pressure differential across the cell grows, and the cell starts to produce gas crossover that the purification stage then has to remove. Designing close to that limit gives a compact and expensive plant; designing well below it gives a robust one. Where the balance sits is a discussion, not a catalogue entry.',
        ],
      },
      {
        kind: 'steps',
        items: [
          {
            title: 'Feed the cell with the right water',
            body:
              'Demineralised water at a defined conductivity and with metal ions removed. The membrane and the catalyst are both vulnerable to them, and the cost of the treatment is part of the operating cost, not a footnote.',
          },
          {
            title: 'Hold the cell at its working temperature',
            body:
              'A PEM cell runs cold and it must be kept cold. The stack is the warm part of the plant, and the cooling circuit that holds it inside its window is a major consumer of the parasitic load.',
          },
          {
            title: 'Set the load, and follow it when it moves',
            body:
              'A PEM stack follows a variable input quickly, which is the main reason it is paired with renewable generation. The control system has to do this without letting the membrane run outside its window during the transition.',
          },
          {
            title: 'Dry and purify the product gas',
            body:
              'The hydrogen leaves the cell saturated with water vapour and carrying trace oxygen. Drying and purification are what turn stack output into a gas that a downstream instrument, a fuel cell or a standard will accept.',
          },
          {
            title: 'Protect the plant with an interlocked safety chain',
            body:
              'Detection, isolation, venting and shutdown have to be arranged so that a fault in one part cannot leave the cell running unattended in an unsafe state. This is discussed before the layout, not after it.',
          },
        ],
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'The Product Family',
    title: 'Six Configurations, and the Duty Each One Is Actually For',
    intro:
      'The family covers laboratory supply through to containerised plants. They are separated here by the duty they are built for rather than by a size ladder, because the difference between a bench generator and a plant is not that the plant is bigger — it is that the plant has to be maintained, operated and accepted by people who were not involved in building it.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'S-Series compact',
            body:
              'Compact PEM electrolyzer for laboratory and small-scale hydrogen supply. Bench or floor mounted, demineralised water feed, pressure options from near atmospheric upward.',
          },
          {
            title: 'H-Series mid-range',
            body:
              'Mid-range PEM systems for commercial and pilot hydrogen projects. Sized where a container or a plant room is a realistic installation and where unattended operation is expected.',
          },
          {
            title: 'C-Series industrial',
            body:
              'Industrial PEM electrolyzer systems for production-scale green hydrogen, with the balance of plant, the control package and the interface scope defined against the project.',
          },
          {
            title: 'M-Series high-capacity',
            body:
              'High-capacity PEM stack and system configurations for large output, where the stack count, the gas handling and the water treatment have to be engineered as a system.',
          },
          {
            title: 'Containerised systems',
            body:
              'Skid-mounted and containerised packages for deployment where the site has limited footprint and the build happens away from the commissioning team.',
          },
          {
            title: 'Custom skid and OEM',
            body:
              'Custom skid and OEM integration, where the machine is delivered into a customer enclosure, a customer control system or a customer product line.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Where the boundary of our supply sits',
        intro:
          'This is stated at the enquiry stage, because an undefined boundary is the most expensive thing to discover during commissioning.',
        note:
          'We supply the electrolyzer system and the documentation that goes with it. The electrical supply, the connection to the site network, the building, the civil works and the permits are assigned by the project. We are happy to work to a specification issued by your own engineer, and to state clearly which parts of the scope we are responsible for.',
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-white',
    eyebrow: 'Where These Systems Go',
    title: 'The Duties That Pay For A PEM System, and the Ones That Do Not',
    intro:
      'A PEM electrolyzer earns its place where the electrical input is variable, where the gas has to be clean, or where the footprint is short. It is the wrong tool for a steady large-tonnage duty where cost per kilogram is the only thing that matters. Naming the duty honestly is the fastest way to a correct specification.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Renewable-coupled production',
            body:
              'Pairing the stack with variable generation is the classic PEM case. The cell follows the input, so the hydrogen production follows the solar or wind output instead of being throttled away.',
          },
          {
            title: 'Laboratory and analytical supply',
            body:
              'On-site hydrogen for instruments that need it continuously, avoiding the handling of cylinders and the interruption that comes with a scheduled delivery.',
          },
          {
            title: 'Fuel cell and hydrogen testing',
            body:
              'Test rigs and pilot lines that need a controllable hydrogen source at a known purity and a known pressure, including the transient behaviour the cell has to deliver.',
          },
          {
            title: 'Metal treatment and pickling',
            body:
              'Hydrogen used in the treatment process itself, where producing it on site removes the transport step from a process that consumes it continuously.',
          },
          {
            title: 'Distributed and mobile supply',
            body:
              'Where the plant has to be containerised, shipped and commissioned elsewhere, and where a self-contained package is a condition of the project rather than a preference.',
          },
        ],
      },
    ],
  },
  {
    id: 'quality',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Inside The Factory',
    title: 'How the Stack, the Assembly and the Documentation Are Controlled',
    intro:
      'An electrolyzer is a machine that has to work for years without the person who built it being available. The inspection below is the minimum that supports that, and the records are written so they can be read by somebody who was not in the workshop.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Stack assembly',
            body:
              'The membrane assembly is built up in a controlled area, with the electrode materials, the catalyst loading and the gasket stack recorded against the cell serial number.',
          },
          {
            title: 'System integration',
            body:
              'The stack is combined with the gas handling, the power supply, the cooling and the control electronics, and the interfaces between them are checked as an assembly rather than as parts.',
          },
          {
            title: 'Pressure and leak testing',
            body:
              'The gas path is pressure tested and leak tested, and the result is recorded for the pressure rating the system will actually run at.',
          },
          {
            title: 'Performance and acceptance',
            body:
              'The unit is run and its output, purity and behaviour under load are measured, and the acceptance plan agreed at the order is carried out before shipment.',
          },
          {
            title: 'Traceability and documents',
            body:
              'Material records, process records, test records and the packing record are tied to the serial number, and the document package is assembled to the scope agreed at the order.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Third-party inspection is welcome',
        intro:
          'Many of the projects we work on have their own inspection or witnessing requirement.',
        note:
          'We support third-party inspection and witnessing of the factory acceptance test, and we agree the hold points with you before the build starts rather than during it. If your contract requires a specific inspection body, state it at the enquiry and we work to it.',
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'A PEM Electrolyzer Built Around Your Load, Your Water and Your Site',
    intro:
      'The stack size, the current density, the pressure level, the water treatment, the gas purification and the delivery format are reviewed together against your electrical input and your installation conditions. What comes back is a system with a stated operating point, not a nameplate with a price against it.',
    image: {
      src: '/images/scenarios/green-hydrogen.webp',
      alt: 'Green hydrogen production system using a PEM electrolyzer',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Electrical input and load profile',
          'Required hydrogen output and pressure',
          'Feed water quality and treatment route',
          'Stack count and current density',
          'Purity target and purification duty',
          'Installation footprint and enclosure',
          'Cooling and utility availability',
          'Control and safety interface',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Output',
          'Pressure',
          'Purity',
          'Load Profile',
          'Feed Water',
          'Stack Life',
          'Delivery',
          'Documentation',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define the Load, the Output and the Acceptance Before Quotation',
    intro: '“PEM electrolyzer” is a starting point, not a specification. The stack, the balance of plant and the acceptance plan are only reviewable once the load profile, the output and the acceptance basis are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the electrical supply: the peak and the continuous power, and how the input varies.',
        'State the required hydrogen output and the delivery pressure.',
        'State the purity the downstream process needs, and what the gas is used for.',
        'State the feed water quality available at site, or the water treatment that can be sustained.',
        'State the installation environment: the footprint, the enclosure, the ambient conditions and the cooling water.',
        'State the control system, the safety requirements and the interface to the site.',
        'State the acceptance plan, the inspection hold points and the document scope you need.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A system specified only by output and by electrical input leaves the current density open, and that decides both the cost and the life.',
        'A purity figure without the load at which it was measured is not a specification.',
        'A stack life quoted without the feed water quality and the operating hours is not a number.',
        'The building, the electrical supply, the civil works and the permits are assigned by the project.',
      ],
    },
    related: {
      title: 'Related pages',
      intro: 'Compare the adjacent pages once the duty and the delivery boundary are clear.',
      links: [
        { href: '/hydrogen-generators/', label: 'Hydrogen Generators' },
        { href: '/industries/hydrogen-energy/', label: 'Hydrogen Energy' },
        { href: '/industries/water-treatment/', label: 'Water Treatment' },
        { href: '/quality/', label: 'Quality and Inspection' },
        { href: '/contact/', label: 'Contact' },
      ],
    },
    blocks: []
  },  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Stack, the Assembly and the Records Are Controlled',
    intro:
      'We control the cell materials, the assembly, the pressure integrity and the acceptance test against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied system.',
    image: {
      src: '/images/service/engineering-review.webp',
      alt: 'Engineering review of an electrolyzer system in the workshop',
      caption: 'Inspection scope is matched to the ordered system and the agreed evidence package.',
    },
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Cell Materials',
            body: 'Confirm the membrane assembly materials, the catalyst and the gasket set against the specification, and record them against the cell serial number.',
          },
          {
            title: 'Stack Assembly',
            body: 'Build the cell to the stated compression and the stated active area, and record the process parameters that produce a comparable cell.',
          },
          {
            title: 'Pressure Integrity',
            body: 'Pressure test and leak test the gas path at the pressure the system will run at, and record the result before the balance of plant is closed in.',
          },
          {
            title: 'Functional Acceptance',
            body: 'Run the unit, measure the output, the purity and the behaviour under load, and carry out the acceptance plan agreed at the order.',
          },
          {
            title: 'Release and Traceability',
            body: 'Verify the dimensions, the identification, the visual condition, the packing and the document package, and tie the delivery back to the production record.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Sampling, acceptance values, test methods and the supplied records are finalised in the quotation, the inspection plan or the approved order documents. Where a third-party inspection is required, the hold points are agreed before the build starts.',
        ],
      },
    ],
  },
];

export const pemFaq: { q: string; a: string }[] = [
  {
    q: 'How is this different from an alkaline electrolyzer?',
    a: 'The alkaline cell uses a liquid electrolyte in a porous diaphragm, and its hydrogen leaves a gas space shared with the oxygen, so it needs purification. The PEM cell uses the membrane as the electrolyte and the separator, produces the two gases in separate compartments, works at a higher current density and a lower temperature, and follows a variable input faster. The alkaline route is usually cheaper per kilowatt for a steady large-tonnage duty; the PEM route is usually the better answer when the input varies, when purity matters, or when the footprint is short. We quote against the route that fits the duty, and we say so when the other one is better.',
  },
  {
    q: 'What does the stack life depend on?',
    a: 'On the load and how long it is held there, on the quality of the feed water, and on the operating temperature of the cell. Metal ions in the feed water and a cell that runs too warm are the two things that shorten a membrane stack. We quote the life with the basis it was assessed against, so that it can be checked against your own operating plan.',
  },
  {
    q: 'Do you supply the whole plant or only the electrolyzer?',
    a: 'We supply the electrolyzer system, its gas handling, its control package and the documentation that goes with it. The electrical supply, the connection to the site network, the building, the civil works and the permits are assigned by the project. The boundary is stated in the quotation, and we are happy to work to a specification issued by your own engineer.',
  },
  {
    q: 'How long does delivery take?',
    a: 'It depends on the configuration, the stack size and the current build position, so it is stated against the order rather than quoted as a standard lead time. Containerised packages and standard series units carry a different schedule from a custom skid, and the manufacturing slot is confirmed with the quotation.',
  },
  {
    q: 'What testing is included before shipment?',
    a: 'Pressure and leak testing of the gas path, functional running with the output, the purity and the behaviour under load measured, and the acceptance plan agreed at the order carried out. Third-party inspection and witnessing are supported, and the hold points are agreed before the build starts rather than during it.',
  },
  {
    q: 'Can you supply an OEM or skid-mounted version?',
    a: 'Yes. We build custom skids and integrate into customer enclosures, control systems and product lines. That work needs the interface documents rather than a duty description: the power, the control signals, the gas take-off, the safety chain and the acceptance requirements. Send those and we answer with a configuration and a boundary.',
  },
  {
    q: 'What do you need from us to quote?',
    a: 'The electrical input and how it varies, the required hydrogen output and pressure, the purity and what the gas is used for, the feed water quality available at site, the installation footprint and the cooling water, the control and safety interface, and the acceptance plan and document scope you need. With that we answer with the stack configuration, the balance of plant, the delivery format and the document scope.',
  },
  {
    q: 'What water quality do I need?',
    a: 'Demineralised water at a defined conductivity, with the metal ions that damage the membrane and the catalyst removed. The membrane is the sensitive part of the assembly, and the feed specification is normally stricter than the rest of the plant. If the site has a water treatment plant, state its performance; if not, the treatment is part of the scope we need to size.',
  },
  {
    q: 'Can the system follow a variable renewable input?',
    a: 'That is the case PEM was built for. The stack follows the electrical input on a short timescale, so production tracks the generation instead of being throttled away. The control system still has to hold the cell inside its temperature and pressure window during the transition, and that logic is part of the package rather than something left to the site.',
  },
];
