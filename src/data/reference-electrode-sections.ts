/**
 * Section content of the reference electrode page.
 *
 * Split from `reference-electrode-page.ts` so the copy can be reviewed on
 * its own. The boundary that the page exists to make clear is stated in
 * several places: this is a measuring element, not an anode.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type ReferenceElectrodeBlock = PageBlock;

/** A section of the page family. */
export type ReferenceElectrodeSection = PageSection;

export const referenceElectrodeSections: ReferenceElectrodeSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What a Reference Electrode Is',
    title: 'The Electrode That Measures, and the Boundary That Goes With It',
    intro:
      'A cathodic protection system has to know where the potential of the structure stands. A reference electrode is the half-cell that gives that reading: a stable, reversible electrochemical reference placed in the electrolyte next to the structure, so that the measured potential can be referred to a fixed point.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'This is not an anode. An anode is where protection current enters the electrolyte and where the structure is protected from. A reference electrode carries no protection current, it is not consumed by the protection duty, and it does no protective work of its own. It measures. Everything it contributes to the system comes through the reading it gives, and through the control action that reading triggers.',
          'That distinction is worth stating because the two get confused in specifications, in delivery notes and in installation drawings. A reference electrode that has been installed where an anode should have been will not protect anything, and an anode installed where a reference electrode should have been will give a meaningless reading. They are different products with different materials, different lifetimes and different inspection regimes.',
          'The reference electrode therefore earns its place on a different basis. It is chosen for how stable and how reproducible its potential is in the electrolyte it will sit in, for how little it is affected by the current flowing past it, and for how it behaves over the temperature range the structure sees. Everything about the selection follows from the measurement duty, not from the protection duty.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'It carries no current',
            body:
              'A reference electrode is not in the protection circuit. It is in the measurement circuit, and it is designed to be polarised as little as possible.',
          },
          {
            title: 'It must be stable',
            body:
              'The value of the reading depends on the potential of the electrode not drifting. Stability over time matters more than a good figure on the bench.',
          },
          {
            title: 'It must be close',
            body:
              'The reading is only valid at the point where the reference sits. Distance introduces error, and in a resistive medium the error is large.',
          },
          {
            title: 'It must be reachable',
            body:
              'It has to be installed, inspected and replaced without dismantling the structure it monitors.',
          },
        ],
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-white',
    eyebrow: 'Electrode Families',
    title: 'Four Families, and the Electrolyte Each One Fits',
    intro:
      'The families are separated by the electrolyte and by the accuracy the control system depends on. The table below is the working comparison we use when a monitoring duty is reviewed.',
    blocks: [
      {
        kind: 'table',
        columns: ['Family', 'Where it is used', 'What governs the choice'],
        rows: [
          [
            'Silver/silver chloride (Ag/AgCl)',
            'Sea water, brackish water and the marine installations where the electrode is permanently installed',
            'Stability in chloride media, the temperature range, and whether a permanent installation is acceptable',
          ],
          [
            'Zinc',
            'Soil, groundwater and the buried and pipeline installations where the electrode sits in the ground',
            'The ground resistivity and chemistry, the driving potential in the soil, and the burial stability',
          ],
          [
            'Manganese dioxide (MnO₂)',
            'High-resistivity soils and the concrete or buried installations where a zinc electrode would not hold a stable potential',
            'The resistivity of the environment and the stability the system needs over the design life',
          ],
          [
            'Copper/copper sulphate permanent',
            'Marine and brackish installations where a large, permanently installed electrode is wanted in a housing',
            'The housing size, the electrolyte, the installation access and the expected service interval',
          ],
        ],
        note:
          'Reference comparison for selection discussion. The final family is fixed against the actual electrolyte, temperature and accuracy requirement.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'The selection question that decides most cases is simple: what is actually in contact with the electrode? A zinc electrode that behaves well in soil can be a poor choice in sea water, and a permanent copper/copper sulphate electrode is difficult to justify in a high-resistivity soil. When the medium is mixed — a partially buried electrode, or a tidal zone where the medium changes twice a day — that has to be stated, because it changes both the family and the maintenance interval.',
        ],
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'What Has To Be Defined For The Quotation',
    intro:
      'A reference electrode is quoted against the monitoring duty, not against a type name. These are the items we need to specify it.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'Electrolyte',
            value:
              'Sea water, brackish water, soil, groundwater, concrete pore water or tank internals, with the salinity, the resistivity and the chemistry.',
          },
          {
            label: 'Electrode family',
            value:
              'Ag/AgCl, zinc, manganese dioxide or copper/copper sulphate, selected against the electrolyte and the accuracy requirement.',
          },
          {
            label: 'Body material',
            value:
              'Titanium or a polymer housing, selected for the strength, the chemical compatibility and the size that the installation allows.',
          },
          {
            label: 'Temperature range',
            value:
              'The minimum and maximum temperature at the electrode position, and the seasonal variation at the site.',
          },
          {
            label: 'Installation type',
            value:
              'Permanent, permanently installed in a housing, or a retrievable probe for temporary survey work.',
          },
          {
            label: 'Cable and termination',
            value:
              'The cable length, the insulation and the termination, selected for the environment and for the distance to the instrument.',
          },
          {
            label: 'Accuracy and drift',
            value:
              'The accuracy the control system depends on and the drift that has to be held over the service interval.',
          },
          {
            label: 'Documentation',
            value:
              'Material certificates for the body, the certificate of the electrochemical element, the dimensional inspection and the lot traceability.',
          },
        ],
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Accuracy and IR Drop',
    title: 'Why the Reading Can Be Wrong Even When the Electrode Is Perfect',
    intro:
      'Most measurement disputes in cathodic protection turn out to be IR drop rather than a bad electrode. The distinction matters, because the fix is completely different.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The potential a reference electrode reports is the potential at its own location. The structure it is supposed to represent can be at a different potential, because the current flowing through the electrolyte between them drops a voltage across the resistance of that electrolyte. This is the IR drop. The further the electrode is from the structure, and the higher the resistance of the medium and the current, the larger the error.',
          'The consequence is that a perfectly healthy electrode can produce a reading that is significantly wrong. And the error is not a constant offset that a calibration can remove — it changes with the current, and the current changes with the season, the temperature and the condition of the coating on the structure. This is why a reference electrode that is a good choice in one installation becomes a bad choice in another after the environment changes.',
          'The design response is to place the electrode where the structure potential is actually being assessed, to keep the distance short, to use the size of electrode that does not polarise under the current flowing past it, and to record the reading with the measurement conditions alongside it so that the result can be interpreted. A reading without the conditions attached cannot be defended later.',
        ],
      },
      {
        kind: 'table',
        columns: ['Effect', 'What causes it', 'How it is designed out'],
        rows: [
          [
            'IR drop',
            'The voltage lost in the electrolyte between the electrode and the structure, proportional to the current and to the resistance',
            'Short distance, a low-resistance path, and a recording of the measurement conditions',
          ],
          [
            'Polarisation of the electrode',
            'Current flowing through the electrode itself shifts its potential away from its true value',
            'An electrode sized for the current it will see, and a measurement taken with the control circuit open to it',
          ],
          [
            'Drift of the element',
            'Aging, contamination or the chemical change of the active element over the service interval',
            'A specified service interval with scheduled inspection and replacement',
          ],
          [
            'Contamination of the porous element',
            'The electrolyte path into the element carries solids or biological growth',
            'A housing and an element geometry that shed contamination, and cleaning at inspection',
          ],
          [
            'Temperature error',
            'The potential of the reference element depends on the temperature',
            'Temperature compensation at the instrument, or the temperature recorded with the reading',
          ],
        ],
        note:
          'Reference relationships for instrument and installation design. The final arrangement is confirmed against the electrolyte and the measurement duty.',
      },
    ],
  },
  {
    id: 'installation',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Installation',
    title: 'Where the Electrode Goes, and How It Is Replaced',
    intro:
      'The installation of a reference electrode determines whether the reading means anything. Position, distance, housing and access are all part of the specification.',
    blocks: [
      {
        kind: 'list',
        points: [
          'Place the electrode close to the structure it represents, so that the potential being measured is the potential of the structure and not of the electrolyte somewhere else.',
          'Put it where the medium is representative — in the same soil, in the same water, at the same depth and in the same tidal condition.',
          'Keep it clear of the current field of the anodes, so that the electrode is not polarised by the protection current.',
          'Use a housing that sheds contamination and that protects the element from mechanical damage and from biological growth.',
          'Route the cable so that it is protected from the same environment, and terminate it where the instrument can reach it for a check.',
          'Leave the access needed for inspection and for replacement; a reference electrode that cannot be replaced will be left in place until it fails.',
        ],
      },
      {
        kind: 'note',
        title: 'Permanent or retrievable',
        intro:
          'The installation type is a life-cycle decision, not a convenience.',
        note:
          'A permanently installed electrode is cheaper to run and needs less intervention, but it has to be specified for a service interval and it has to be replaceable by diving or by excavation when that interval is reached. A retrievable probe is convenient for survey work and for temporary measurements, but it is not the instrument for a permanent feedback signal in an impressed current system.',
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'A Reference Electrode Selected Against the Electrolyte and the Control Loop',
    intro:
      'The body material, the construction, the housing, the cable and the installation are reviewed together against the electrolyte, the temperature at the electrode and the accuracy the control system depends on. What comes back is an instrument that holds its potential, not a metal rod in a container.',
    image: {
      src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
      alt: 'Reference electrode installation and connection inspection',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Electrolyte chemistry and pH',
          'Temperature at the electrode',
          'Accuracy the control depends on',
          'Installation type and position',
          'Distance to the structure',
          'Housing and cable run',
          'Service and inspection interval',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Electrolyte',
          'pH',
          'Temperature',
          'Accuracy',
          'Installation',
          'Housing',
          'Cable',
          'Service Interval',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Describe The Monitoring Duty',
    intro: 'Give us the electrolyte, the accuracy, the temperature, the installation access and the maintenance regime, and we answer with the electrode family, the body material, the construction, the cable and the document scope.',
review: {
      title: 'What we review before manufacture',
      points: [
        'State the electrolyte and its chemistry, including the contaminants that are present.',
        'State the temperature range at the electrode position.',
        'State the accuracy the control system depends on and the signal it has to deliver.',
        'State the installation type, the position and the distance to the structure.',
        'State the housing material and the cable run to the instrument.',
        'State the service interval and the access available for inspection.',
        'State the documentation scope expected at acceptance.',
      ],
    },
    
limits: {
      title: 'What the product name cannot replace',
      points: [
        'A reference electrode is not an anode; it carries no protective current and it is not a substitute for one.',
        'The body material has to suit the electrolyte, and a silver-silver chloride element cannot be assumed for every duty.',
        'The accuracy of the electrode and the accuracy of the instrument are two different things.',
        'A retrievable probe is not the right instrument for a permanent feedback signal.',
      ],
    },
    
    note: {
      title: 'What we answer with',
      body: 'Once the duty is described, the answer is a specific instrument rather than a type list: the electrode family, the body material, the construction, the cable, the installation detail and the document scope. If a part of the measurement system is outside our scope, we say so at the enquiry stage rather than leaving a gap that appears later as a commissioning problem.',
    },
related: {
      title: 'Related pages',
      intro: 'Compare the adjacent pages only after the measurement duty and the supply boundary are clear.',
      links: [
        { href: '/cathodic-protection/', label: 'Cathodic Protection' },
        { href: '/titanium-anode/mmo-anode/', label: 'All MMO Anode Forms' },
        { href: '/titanium-anode/mmo-anode/mmo-rod-anode/', label: 'MMO Rod Anodes' },
        { href: '/titanium-anode/mmo-anode/mmo-canister-anode/', label: 'MMO Canister Anodes' },
      ],
    },
  
  },
  
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Element, the Housing and the Traceability Are Controlled',
    intro:
      'We control the element, the body material, the housing and the cable against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied electrode.',
    image: {
      src: '/images/titanium-anode/titanium-substrate-traceability.webp',
      alt: 'Material traceability records for the supplied electrode',
      caption: 'Inspection scope is matched to the ordered instrument and the agreed evidence package.',
    },
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Material Identity',
            body: 'Confirm the body material, the element and the grade or order standard against the purchase specification.',
          },
          {
            title: 'Element and Housing',
            body: 'Hold the construction and the sealing to the agreed production basis, and do not infer the accuracy from the appearance alone.',
          },
          {
            title: 'Cable and Termination',
            body: 'Review the cable, the termination and the sealing details included in our supply scope.',
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

export const referenceElectrodeFaq: { q: string; a: string }[] = [
  {
    q: 'Is a reference electrode an anode?',
    a: 'No, and this is the most important thing to say about the product. An anode carries the protection current into the electrolyte and is where the structure is protected from. A reference electrode carries no protection current, is not consumed by the protection duty, and does no protective work. It measures the potential of the structure so that the control system knows where the structure stands. Installed in the wrong place, a reference electrode protects nothing.',
  },
  {
    q: 'What does the reference electrode actually measure?',
    a: 'The potential at its own location, referred to the potential of its own electrochemical element. It is a local measurement. Whether that local potential represents the structure depends on the distance between them and on the resistance of the electrolyte between them — the IR drop. That is why the position and the distance are part of the specification and not an installation detail.',
  },
  {
    q: 'What is IR drop and how do I minimise it?',
    a: 'IR drop is the voltage lost in the electrolyte as the protection current flows between the anode and the structure. The reference electrode reports the potential near itself, so that lost voltage appears as an error in the reading. It is minimised by keeping the electrode close to the structure, by providing a low-resistance path, and by using an electrode large enough that it is not polarised by the current passing it. It cannot be calibrated out, because it changes with the current and with the season.',
  },
  {
    q: 'Which reference electrode should I use in sea water?',
    a: 'The silver/silver chloride family is the usual choice for sea water and brackish water, because it holds a stable potential in chloride media over the temperature range a marine structure sees. The copper/copper sulphate permanent electrode is also used where a large, permanently installed electrode in a housing is wanted. The choice follows the electrolyte, the temperature range and whether a permanent installation is acceptable.',
  },
  {
    q: 'Which reference electrode should I use in soil?',
    a: 'Zinc is the traditional choice for soil and groundwater installations. In high-resistivity soils, or where the control system needs a more stable potential over a long service interval, the manganese dioxide family is used instead. The soil resistivity and the chemistry at the electrode position decide it, and it is worth stating them because a soil that is wet and conductive in the wet season and very resistive in the dry season is a different case from a permanently damp one.',
  },
  {
    q: 'How often does a reference electrode need to be checked or replaced?',
    a: 'On an interval set by the electrolyte, the temperature and the service the electrode is doing. In sea water a permanent installation is often inspected on a seasonal basis, while in soil the interval is generally longer and tied to the survey cycle. The point of specifying the interval is that it must be reachable: an electrode that cannot be inspected or replaced is left in place until it fails, and the failure is then a control failure rather than a maintenance event.',
  },
  {
    q: 'What causes a reference electrode to drift?',
    a: 'Aging of the active element, contamination of the porous path into it, the chemical change of the electrolyte at the element, and temperature. Contamination is the most common cause in practice and it is the reason a housing that sheds solids and biological growth is part of the specification rather than an optional extra.',
  },
  {
    q: 'Can I use a retrievable probe for a permanent system?',
    a: 'A retrievable probe is the right instrument for survey work and for temporary measurements, where an operator reads the potential at a defined point and interprets it. It is not the right instrument for a permanent feedback signal to an impressed current rectifier, because the reading has to be available continuously, without an operator in attendance, and without the electrode being handled and disturbed.',
  },
  {
    q: 'Do you supply the electrode housing and the cable?',
    a: 'Yes, the housing, the cable and the termination are part of the electrode we supply, selected for the environment and for the distance to the instrument. The instrument itself, the rectifier and the control strategy are assigned by the project. We are happy to work to a specification issued by your corrosion engineer.',
  },
  {
    q: 'What do you need from us to quote?',
    a: 'The electrolyte and its chemistry, the temperature range at the electrode position, the accuracy the control system depends on, the installation type, the position and the distance to the structure, the housing and the cable run, the service interval and the access available for inspection, and the documentation scope expected at acceptance. With that we answer with the electrode family, the body material, the construction, the cable, the installation detail and the document scope.',
  },
];
