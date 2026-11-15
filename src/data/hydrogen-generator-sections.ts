/**
 * Section content of the PEM hydrogen generator page.
 *
 * Split from `hydrogen-generator-page.ts` so the copy can be reviewed on its
 * own. The subject is laboratory and OEM supply, where the decisive issues
 * are gas purity at the point of use, the behaviour of the generator when
 * the load changes, and whether an on-site generator is the right answer at
 * all. Every figure is a reference window tied to a stated condition.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type HydrogenBlock = PageBlock;

/** A section of the page family. */
export type HydrogenSection = PageSection;

export const hydrogenSections: HydrogenSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This Machine Is',
    title: 'A Hydrogen Generator Is a Gas Supply With a Delivery Point Attached',
    intro:
      'A PEM hydrogen generator makes hydrogen on site, continuously, from demineralised water and electricity. For a laboratory or an OEM it replaces the cylinder: no deliveries, no storage of a compressed gas, no interruption when the delivery is late. In exchange it introduces its own set of obligations, and the ones that matter are the purity of the gas at the point of use, the behaviour of the machine when the load changes, and the maintenance of the stack.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The chemistry is the same as it is for a large plant, and the engineering is not. A laboratory generator runs at a few hundred watts, produces a few tens of millilitres per minute, and feeds an instrument that draws a steady trickle. There is no load-following to speak of and no grid interface. What there is instead is a very tight requirement on the gas, because the downstream instrument was specified against a particular purity, a particular pressure and a particular flow, and any deviation shows up as an analytical result that has to be explained.',
          'That is why the specification of a laboratory generator is mostly a specification of the gas. Purity, the oxygen content, the moisture content and the stability of the flow are the four figures that decide whether the instrument runs cleanly. The machine is chosen to deliver them, and the packaging — the drying, the purification, the pressure regulation and the outlet fitting — is where most of that work is done.',
          'The other thing a generator brings is a stack with a life. It is a consumable, it is replaced at some point, and the cost of that replacement should be visible in the quotation rather than discovered in the third year. We state the basis on which the life was assessed and the cost at which it can be replaced.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'The gas is the product',
            body:
              'Everything else on the machine exists to deliver a gas with a defined purity, pressure and flow at the outlet. That is the acceptance criterion, not the output of the cell.',
          },
          {
            title: 'Pressure regulation is part of the machine',
            body:
              'A cell produces gas at a pressure that varies with load and temperature. The regulator, the buffer and the relief arrangement are what turn that into a stable delivery.',
          },
          {
            title: 'The stack is a consumable',
            body:
              'It has a life measured in operating hours, and replacing it is routine. The replacement cost and the interval belong in the commercial offer.',
          },
          {
            title: 'The feed water sets the interval',
            body:
              'Demineralised water with the metal ions removed. Poor feed water shortens the stack, and the water treatment is what protects the investment.',
          },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Purity And What It Means',
    title: 'What 99.99 % Actually Covers, and What It Does Not',
    intro:
      'Purity is quoted as a single number, and it is the single most useful and most misused figure in this field. A purity statement has to name what is excluded and where it is measured, because the answer that matters is the one at the instrument, not at the stack.',
    blocks: [
      {
        kind: 'table',
        columns: ['Specification', 'What it states', 'Where it has to be measured'],
        rows: [
          [
            'Hydrogen purity',
            'The proportion of hydrogen in the gas, with the balance being air or the residual oxygen and water from the cell',
            'At the delivery outlet, after the purification stage, not at the cell',
          ],
          [
            'Oxygen content',
            'The oxidising species that matters to the downstream process, whether it arrives as oxygen or as water',
            'At the outlet, and it is the figure that determines whether the gas is fit for the carrier gas duty',
          ],
          [
            'Dew point',
            'The moisture content, expressed as the temperature at which water starts to condense out',
            'At the outlet after the dryer, and it is the figure that decides whether the gas can be used with a sensitive instrument',
          ],
          [
            'Pressure stability',
            'How much the delivery pressure moves with the load and with the temperature of the cell',
            'At the outlet over a load cycle, not at a single operating point',
          ],
          [
            'Flow stability',
            'How much the delivered flow moves over the run',
            'At the outlet, and it is what the instrument at the far end actually experiences',
          ],
          [
            'Start-up time',
            'The time from power-on to gas at the stated purity',
            'With the machine cold, because a warm start is much shorter',
          ],
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'The numbers above are the reference windows we quote for a laboratory PEM generator. They are confirmed against your instrument and its method before they become a quotation, because an instrument that needs 99.99 % nitrogen as a carrier gas and one that needs a specific oxygen limit are not the same requirement.',
        ],
      },
      {
        kind: 'note',
        title: 'Purity is a specification against a use, not a grade of gas',
        intro:
          'This is worth saying plainly, because a purity figure quoted without a use invites a mismatch that only appears after the instrument is installed.',
        note:
          'The requirement for a gas chromatograph carrier, for a mass spectrometer, for a fuel-cell test rig and for a semiconductor process are four different requirements. We would rather be told which instrument the gas is going into than be told a purity number, because the second one tells us how to check the first.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'The Parameters We Quote Against, and the Window Each One Belongs To',
    intro:
      'These are the reference windows for a laboratory PEM hydrogen generator. Each holds inside a stated condition and several of them pull against each other — the pressure configuration and the flow, the purity and the output. The quotation states the operating point, so the numbers have a meaning.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          { label: 'Technology', value: 'Proton exchange membrane, with the membrane grade stated' },
          { label: 'Feed', value: 'Demineralised water, with the conductivity limit stated' },
          { label: 'Hydrogen output', value: 'Typically tens of millilitres per minute in the laboratory range' },
          { label: 'Hydrogen purity', value: 'Typically better than 99.99 % at the outlet, after purification' },
          { label: 'Oxygen content', value: 'Quoted with the load, because crossover rises with current density' },
          { label: 'Dew point', value: 'Set by the dryer stage, quoted at the outlet' },
          { label: 'Delivery pressure', value: 'Configurations from near atmospheric to several tens of bar' },
          { label: 'Pressure stability', value: 'Quoted over a load cycle, not at one operating point' },
          { label: 'Start-up time', value: 'From cold, to gas at the stated purity' },
          { label: 'Stack life', value: 'A function of the operating hours and the feed quality; quoted with the basis' },
          { label: 'Power supply', value: 'Stated input, and the connection requirements are part of the delivery' },
          { label: 'Outlet', value: 'The fitting and the interface to the instrument are specified with the order' },
        ],
      },
      {
        kind: 'note',
        title: 'The delivery point is part of the specification',
        intro:
          'A frequent source of a late problem, and a cheap one to avoid.',
        note:
          'The outlet fitting, the tubing, the regulator position and the distance to the instrument all affect the gas the instrument actually receives. A tube of the wrong material or a fitting left as a leak path can undo a purification stage that was specified correctly. We agree the interface with you rather than leaving it to the installer.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Behaviour Over Time',
    title: 'Start-Up, Transients And What Happens When the Load Moves',
    intro:
      'A laboratory instrument does not take a constant flow. It takes what it needs, it stops and starts, and it may be left idle for a weekend. The behaviour of the generator through those transitions is what determines whether the analytical results stay comparable, and it is the part of the specification that is usually left out.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'A PEM stack responds quickly, which is an advantage when the load follows a test schedule and a disadvantage when purity has to settle before a reading is taken. After a change in load the gas composition moves for a period, and if a reading is taken during that period it will not be comparable with one taken in steady state. The machine can be controlled to make that settling period short and known, and the correct way to do it is a control strategy rather than a delay in the operator instructions.',
          'The second behaviour that matters is idle. A stack that is switched off for a long period does not come back the way it left. The membrane is exposed to whatever is on the cathode side during the stoppage, and the water in the cell can sit against surfaces that were wetted under load. The recovery time after a long stop is longer than after a short one, and a machine that is used every day behaves differently from one that runs intermittently. If the duty is intermittent, say so, because the recovery behaviour has to be designed for it.',
          'The third is the drift over a long run. The cell output falls slightly as the stack ages, and the purification stage has a finite capacity before it needs attention. Both are gradual and both are manageable, provided the instrument is fed from a stable reference and the maintenance interval is set from the operating hours rather than from the calendar.',
        ],
      },
      {
        kind: 'steps',
        items: [
          {
            title: 'Cold start',
            body:
              'From power-on to gas at the stated purity. This is the figure to compare against an instrument method that has a defined ready time.',
          },
          {
            title: 'Load change',
            body:
              'How fast the delivery follows a change in the drawn flow, and how long the gas takes to settle back to the stated purity.',
          },
          {
            title: 'Extended shutdown',
            body:
              'How the machine behaves after it has been off for days or weeks, and how long it takes to be back in specification afterwards.',
          },
          {
            title: 'Stack ageing',
            body:
              'The gradual change in output over the life of the stack, and how the maintenance interval is set from the operating hours.',
          },
          {
            title: 'Purifier duty',
            body:
              'The capacity of the purification stage between services, and the indication that the service is due.',
          },
        ],
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Where The Gas Is Used',
    title: 'The Laboratory Duties, and the One Case Where a Cylinder Is Better',
    intro:
      'An on-site generator earns its place where the gas is consumed continuously, where the delivery of cylinders interrupts the work, or where the stored gas on site is a safety or regulatory burden. It does not earn its place where the gas is used occasionally, and we say that when it applies.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Analytical instruments',
            body:
              'Carrier and make-up gas for gas chromatography, mass spectrometry and ICP instruments, where a continuous supply avoids the interruption of a scheduled delivery and the contamination risk of a shared cylinder.',
          },
          {
            title: 'Fuel cell and electrolyser testing',
            body:
              'A controllable hydrogen source with a known purity and a known pressure, including the transient behaviour the test programme depends on.',
          },
          {
            title: 'Semiconductor and thin-film processes',
            body:
              'Process atmospheres that need a stable, clean hydrogen delivered at a defined pressure and flow, in small volume and without the logistics of a gas supplier.',
          },
          {
            title: 'Chemical vapour deposition',
            body:
              'Hydrogen as a carrier or reducing gas in deposition equipment, where the delivery has to be steady and the purity consistent from one run to the next.',
          },
          {
            title: 'OEM integration',
            body:
              'The generator built into a customer instrument or a customer product line, where the module, its interface and its service access are defined by the customer rather than by the laboratory.',
          },
          {
            title: 'Where a cylinder is the better answer',
            body:
              'If the gas is used in short bursts, if the instrument has its own gas purification and buffering, or if the laboratory has no demineralised water available, a cylinder is simpler and cheaper. We would rather supply one of these than sell a machine that is not the right instrument.',
          },
        ],
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-white',
    eyebrow: 'The Product Family',
    title: 'Compact Units, OEM Modules And Custom Machines',
    intro:
      'Three delivery forms, distinguished by where the machine sits in your organisation rather than by a performance ladder.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'S-Series compact',
            body:
              'Bench and floor-standing PEM generators for laboratory supply, with a range of pressure configurations and the outlet interface agreed with the instrument.',
          },
          {
            title: 'OEM modules',
            body:
              'Generators built as modules for integration into a customer enclosure or a customer product, with the electrical, control and gas interface defined by the OEM.',
          },
          {
            title: 'Custom configurations',
            body:
              'Machines built to a duty that the standard range does not cover: a specific output, a specific purity, a specific footprint or a specific interface.',
          },
        ],
      },
    ],
  },
  {
    id: 'quality',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Inside The Factory',
    title: 'How the Assembly, the Gas Path and the Records Are Controlled',
    intro:
      'A generator that has to sit on a laboratory bench for years has to be built to a standard that the person who assembled it will never see. The inspection below covers the parts that decide whether the gas that comes out is the gas that was specified.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Cell and materials',
            body:
              'The membrane assembly materials, the catalyst and the gasket set are confirmed against the specification and recorded against the serial number.',
          },
          {
            title: 'Gas path integrity',
            body:
              'The cell, the purification stage, the dryer and the regulator are pressure and leak tested as a path, because a leak anywhere in it defeats the whole package.',
          },
          {
            title: 'Functional running',
            body:
              'The unit is run and the output, the purity, the oxygen content and the pressure behaviour at the outlet are measured.',
          },
          {
            title: 'Interface and documentation',
            body:
              'The outlet fitting, the electrical connection and the control interface are checked as delivered, and the document package is assembled to the agreed scope.',
          },
          {
            title: 'Packing and traceability',
            body:
              'The machine is packed for transport and for installation, and the delivery is tied back to the production record by its serial number.',
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
    title: 'A Hydrogen Generator Specified Against Your Instrument, Not Against a Purity Number',
    intro:
      'The output, the purity, the pressure, the dew point, the outlet interface and the delivery form are reviewed together against the instrument that will consume the gas. What comes back is a machine with a stated gas specification at the delivery point, not a generator with a purity label on the front.',
    image: {
      src: '/images/scenarios/green-hydrogen.webp',
      alt: 'On-site hydrogen generation for laboratory supply',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Instrument and method the gas serves',
          'Required flow and duty cycle',
          'Purity and oxygen content target',
          'Dew point requirement',
          'Delivery pressure and stability',
          'Start-up and settling behaviour',
          'Outlet fitting and tubing route',
          'Feed water and available utilities',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Output',
          'Purity',
          'O₂',
          'Dew Point',
          'Pressure',
          'Flow Stability',
          'Stack Life',
          'Interface',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define the Instrument, the Flow and the Delivery Point Before Quotation',
    intro:
      '“Hydrogen generator” is a starting point, not a specification. The gas at the outlet, the interface to the instrument and the acceptance of the machine are only reviewable once the use, the flow and the interface are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State which instrument or process the gas serves, and the method it has to satisfy.',
        'State the flow required and the duty cycle, including whether the machine runs continuously.',
        'State the purity and the oxygen content the process needs.',
        'State the dew point requirement, or the humidity the instrument is sensitive to.',
        'State the delivery pressure and how stable it has to be at the outlet.',
        'State the outlet fitting, the tubing route and the distance to the instrument.',
        'State the demineralised water available at site and the utilities the machine can use.',
        'State the acceptance criteria and the document scope you need at delivery.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A purity figure without a stated use does not say whether the gas suits the instrument.',
        'A flow figure without a duty cycle does not say whether the machine will be idle for long periods.',
        'A start-up time measured warm says nothing about the cold start that matters on a Monday.',
        'The demineralised water plant and the laboratory gas installation are assigned by the project.',
      ],
    },
    note: {
      title: 'Where our supply boundary sits',
      body: 'We supply the generator, the gas handling, the control package and the documentation. The electrical supply, the demineralised water plant, the laboratory gas installation downstream of the outlet, the ventilation and the permits are assigned by the project. For an OEM module the boundary is defined by the interface documents you issue.',
    },
    related: {
      title: 'Related pages',
      intro:
        'Compare the adjacent pages once the duty and the delivery boundary are clear.',
      links: [
        { href: '/pem-electrolyzer/', label: 'PEM Electrolyzers' },
        { href: '/industries/hydrogen-energy/', label: 'Hydrogen and Energy' },
        { href: '/quality/', label: 'Quality and Inspection' },
        { href: '/contact/', label: 'Contact' },
      ],
    },
  },
  
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Assembly, the Gas Path and the Records Are Controlled',
    intro:
      'We control the cell materials, the assembly, the integrity of the gas path and the functional test against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied machine.',
    image: {
      src: '/images/service/inspection-docs.webp',
      alt: 'Inspection and documentation of a supplied generator',
      caption: 'Inspection scope is matched to the ordered machine and the agreed evidence package.',
    },
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Material Identity',
            body: 'Confirm the membrane assembly materials, the catalyst, the gasket set and the body materials against the specification, and record them against the serial number.',
          },
          {
            title: 'Assembly',
            body: 'Build the cell to the stated compression and the stated active area, and fit the purification and drying stages to the agreed configuration.',
          },
          {
            title: 'Gas Path Integrity',
            body: 'Pressure test and leak test the cell, the purifier, the dryer and the regulator as one path, and record the result before the machine is closed.',
          },
          {
            title: 'Functional Test',
            body: 'Run the machine and measure the output, the purity, the oxygen content and the pressure behaviour at the outlet.',
          },
          {
            title: 'Release and Traceability',
            body: 'Verify the interface, the identification, the visual condition, the packing and the document package, and tie the delivery back to the production record.',
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
export const hydrogenFaq: { q: string; a: string }[] = [
  {
    q: 'How is this different from buying hydrogen cylinders?',
    a: 'A cylinder is a stored gas that has to be delivered, stored, handled and replaced, and it interrupts the work when it runs out. A generator produces the gas on site from water and electricity, so the supply is continuous and there is no compressed gas on site. The cost of that is the capital of the machine, the electricity, the demineralised water and the stack that has to be replaced at some point. For a continuous duty the generator usually wins on both cost and convenience; for occasional use the cylinder is normally the better answer.',
  },
  {
    q: 'What purity can you guarantee?',
    a: 'We quote the purity at the outlet, after the purification stage, and together with the load it is measured at, because oxygen crossover rises with current density. A figure in the high-purity range is typical for a laboratory PEM generator. We would rather quote it against your instrument and its method than against a headline number, because that is the figure you can actually check.',
  },
  {
    q: 'What happens if the machine is left switched off for a week?',
    a: 'Recovery after a long stop is slower than recovery after a short one, because the cell is exposed to a different condition while it is idle and the water in it sits against surfaces that were wetted under load. If the duty is intermittent, we design the control and the start-up sequence around that, and we state the cold start time in the specification. Tell us the duty pattern, because a machine used every day and a machine used in bursts are not the same specification.',
  },
  {
    q: 'Do you supply the demineralised water plant?',
    a: 'Not by default. We specify the feed water the machine needs and the consequence of not meeting it, and we can supply or specify the treatment. In most laboratory installations the site already has a suitable supply or a small unit is a straightforward addition, and it is normally the customer who owns that part of the system. It is stated in the boundary rather than left open.',
  },
  {
    q: 'Can you supply an OEM module?',
    a: 'Yes. We build generators as modules for integration into a customer enclosure or a customer product, with the electrical, control and gas interface defined by you. That work runs on the interface documents rather than on a duty description: the power, the signals, the outlet, the control setpoints, the service access and the acceptance requirements.',
  },
  {
    q: 'What testing is carried out before shipment?',
    a: 'The gas path is pressure and leak tested as a whole, and the machine is run with the output, the purity, the oxygen content and the pressure behaviour at the outlet measured. The acceptance criteria agreed at the order are applied, and the outlet interface and the electrical connection are checked as they are delivered.',
  },
  {
    q: 'What do you need from us to quote?',
    a: 'Which instrument or process the gas serves, the flow and the duty cycle, the purity and the oxygen content the process needs, the dew point requirement, the delivery pressure and how stable it must be, the outlet fitting and the tubing route, the demineralised water available at site, and the acceptance criteria and document scope. With that we answer with the configuration, the gas specification at the outlet and the document scope.',
  },
  {
    q: 'What is the dew point and why does it matter?',
    a: 'The dew point is the temperature at which water starts to condense out of the gas, and it is the way moisture content is stated. It matters because a wet gas can damage a sensitive instrument, upset a detector or condense in a capillary where it should not. The dryer stage of the generator sets it, and it is specified at the outlet rather than at the cell.',
  },
  {
    q: 'How long does the stack last?',
    a: 'It depends on the operating hours and on the feed water quality, and we quote it with the basis on which it was assessed so it can be checked against your own duty. The stack is a consumable and the replacement is routine; the replacement cost and the interval belong in the quotation rather than being discovered later. Good feed water and a sensible operating temperature are what protect the interval.',
  },
  {
    q: 'Can the generator follow a variable flow?',
    a: 'A PEM stack responds quickly, so it follows a changing draw better than the alternatives. What matters is what happens to the gas composition during the transition: it settles for a period, and a reading taken during that period is not comparable with one taken in steady state. We set the control strategy so the settling period is short and known, rather than leaving it to be discovered at the instrument.',
  },
];
