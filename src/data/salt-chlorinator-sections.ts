/**
 * Section content of the salt chlorinator page.
 *
 * Split from `salt-chlorinator-page.ts` so the copy can be reviewed on its
 * own. Every figure is a reference window tied to a condition (salinity,
 * output current, cell temperature, flow, free chlorine residual) and is
 * confirmed against the actual duty before it becomes a quotation. No
 * certificate, customer or performance record is stated that cannot be
 * evidenced.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type SaltChlorinatorBlock = PageBlock;

/** A section of the page family. */
export type SaltChlorinatorSection = PageSection;

export const saltChlorinatorSections: SaltChlorinatorSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What A Salt Chlorinator Is',
    title: 'A Salt Chlorinator Is a Cell Plus a Control System, Not a Tank of Salt',
    intro:
      'A salt chlorinator makes chlorine by electrolysing a salt solution and dosing it into the water. The cell is the part that is usually quoted, but the cell alone does not chlorinate a pool: the brine preparation, the cell condition, the dosing control, the flow verification and the water chemistry all decide whether the required free chlorine is actually delivered and held.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The chemistry is straightforward. Brine passes through an electrolytic cell, the chloride ions are oxidised at the anode to form free chlorine, and the hydrogen produced at the cathode is vented. The chlorine dissolves into the pool water and, with the pH in the right range, forms hypochlorous acid, which is the species that does the disinfecting. That last step is where most of the practical difficulty of a salt chlorinator lives, and it is a water-chemistry question rather than a hardware question.',
          'The cell in a commercial pool system is usually a bipolar stack of titanium plates, coated so that the anode side carries an active coating and the cathode side stays as plain titanium. The plates are separated by gaskets that both hold the brine in and set the gap, which is what defines the gap resistance and therefore the current at a given voltage. A cell that has been in service for two years has a different gap resistance from a new one, and the control system has to compensate for that.',
          'The consequence is that "salt chlorinator" names a wide family of equipment. A replacement cell for an existing residential unit, a complete commercial system for a hotel pool, and an OEM platform for a branded equipment manufacturer are different products with different specifications, and the page keeps them apart because a quotation for one of them is meaningless for the others.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'The cell produces, it does not dose',
            body:
              'The cell converts brine into a chlorine solution. Whether the right amount reaches the pool is decided by the pump, the flow switch and the dosing control, and a fault in any of them is invisible from the cell alone.',
          },
          {
            title: 'pH decides whether the chlorine works',
            body:
              'Free chlorine at a given concentration does very different amounts of work at different pH values, because the balance between hypochlorous acid and hypochlorite changes. The cell cannot fix the pH, and no chlorine figure means much without the pH beside it.',
          },
          {
            title: 'Scale is the normal failure mode',
            body:
              'Calcium carbonate from the pool water precipitates on the cell plates as scale. It insulates the active surface, the output falls, and the control system raises the voltage to compensate until the cell is cleaned or replaced.',
          },
          {
            title: 'The generator is the boundary of the supply',
            body:
              'The cell, the cell assembly, the tubing and the electrode connections are one supply. The pump, the probe, the controller, the chemistry set and the pool balance are the installer’s or the operator’s, and the two are stated separately.',
          },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'How The Chlorine Is Made And How Much Of It Works',
    title: 'The Reaction Is Simple, the Water Chemistry Is Not',
    intro:
      'The cell chemistry does not change from one unit to the next. What changes is how much chlorine the cell produces, how much of it reaches the pool, and how much of that chlorine is in the form that actually disinfects. Each of the three is a separate design question, and they are usually quoted as one number.',
    blocks: [
      {
        kind: 'table',
        columns: ['Stage', 'What happens', 'What controls it', 'What goes wrong'],
        rows: [
          [
            'Brine preparation',
            'Salt is dissolved and held at the required concentration before it reaches the cell.',
            'The salt concentration, the water source and the make-up arrangement.',
            'Dilute brine from an undersized saturator or from a softener that is not sized for the duty.',
          ],
          [
            'Electrolysis',
            'Chloride is oxidised at the anode; hydrogen is produced at the cathode and vented.',
            'The cell voltage, the gap resistance, the brine temperature and the scaling rate.',
            'Scaled plates, a failing electrode connection or a cell driven above its rated output.',
          ],
          [
            'Dosing',
            'The chlorine solution is injected into the return flow and mixed into the pool.',
            'The injector, the pump rate, the flow switch and the dosing control.',
            'Injection into a low-flow line, where the chlorine is lost before it reaches the pool.',
          ],
          [
            'Disinfection',
            'Free chlorine in the right pH range forms hypochlorous acid, which does the work.',
            'The pH, the free chlorine residual, the temperature and the contact time.',
            'A correct free chlorine reading at a pH where most of the chlorine is inactive.',
          ],
          [
            'Verification',
            'The residual and the pH are checked, and the control loop is adjusted to hold them.',
            'The probe, its calibration, the controller set points and the operator.',
            'A probe that drifts and is never calibrated against a wet test kit.',
          ],
        ],
        note:
          'The stages are sequential and each one can invalidate the measurement of the next. A chlorine figure taken at the cell but not at the pool, or at the pool but with the pH ignored, is a number without an operation behind it.',
      },
      {
        kind: 'note',
        title: 'Why the free chlorine figure and the pH always travel together',
        intro:
          'This is the single most useful thing a pool operator can be told, so it is stated plainly.',
        note:
          'At a pH around 7.2 to 7.4 the great majority of the free chlorine is present as hypochlorous acid, which is the form that penetrates and disinfects. As the pH rises, more of it is present as hypochlorite, which is a much weaker disinfectant at the same measured concentration, so a pool at a high pH can read a satisfactory free chlorine figure and still disinfect poorly. The alkalinity and the calcium hardness decide how hard the pH is to hold, and that is a balancing operation rather than an equipment decision. Any chlorine figure we quote is therefore stated with the pH range it applies to.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'The Figures That Define A Cell, And The Conditions They Belong To',
    intro:
      'The table below is the reference window we work to. It is stated as a window rather than as a single figure because the output depends on the brine concentration, the cell temperature and the current, and any of those can move the result by a large amount.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          { label: 'Cell construction', value: 'Bipolar plate cell in titanium, with a coated anode side and an uncoated cathode side' },
          { label: 'Active coating', value: 'Mixed metal oxide on titanium, or platinized titanium, selected against the brine chemistry' },
          { label: 'Brine concentration', value: 'Typically a saturated solution, with the concentration held within a narrow band' },
          { label: 'Chlorine output', value: 'A function of the current passed; stated as grams per hour at a named brine concentration and temperature' },
          { label: 'Cell voltage', value: 'Rises with the gap resistance as the plates scale; the control system compensates within a range' },
          { label: 'Cell temperature', value: 'Output falls and the scaling rate rises as the brine warms; the cell is temperature sensitive' },
          { label: 'Solution strength', value: 'The chlorine concentration of the produced solution, and the flow at which it is injected' },
          { label: 'Hydrogen side', value: 'Vented to atmosphere, away from the plant room and from any ignition source' },
          { label: 'Water quality', value: 'Hard water causes scale; treated water can affect the brine and the cell life' },
          { label: 'Cell life', value: 'A function of the running hours, the brine quality and the temperature; quoted with the basis' },
          { label: 'Electrical supply', value: 'The cell supply is a controlled source; the operating current is what sets the output' },
          { label: 'Control interface', value: 'Flow verification, a residual probe connection and the control signal the cell follows' },
        ],
      },
      {
        kind: 'note',
        title: 'The number that arrives most often without its conditions',
        intro:
          'We state it here because a grams-per-hour figure on its own is the figure most likely to be wrong.',
        note:
          'A chlorine output quoted without the brine concentration, the cell temperature and the current is not a specification, because the same cell can deliver materially different output at the same voltage depending on all three. Ask for the output at the conditions you intend to run, and ask for the brine concentration the figure assumes.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'How The System Behaves',
    title: 'Polarity Reversal, Scale, And Why The Output Falls Before The Cell Dies',
    intro:
      'A salt chlorinator is a consumable system that is designed to be maintained. Understanding how it degrades tells you whether it is worth repairing, and it tells you what to look at when a pool operator says the chlorine is low.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'Commercial cells are normally operated with periodic polarity reversal. Running the cell in reverse for a short period every few weeks clears the scale that has built up on the plates, and it keeps the active coating in a condition that keeps delivering output. A cell that is never reversed loses output progressively, and the failure is gradual enough that it is usually blamed on the pool chemistry before it is blamed on the cell.',
          'The second degradation mechanism is the gradual loss of the coating itself. The active coating is an oxide layer, and it is consumed slowly by the electrolysis. Its life is counted in operating hours rather than in calendar years, because a cell that runs for twenty hours a day and one that runs for two are not the same service. This is why the cell life is always quoted with the running hours as the basis.',
          'The third is the electrical connection. A cell in a pool plant sits in a wet, warm, chemically aggressive enclosure for years, and the connections corrode, the gaskets perish and the terminals scale. A cell that is producing well at the meter and poorly at the pool is often a connection problem, and the check is quick: measure the voltage at the cell and compare it with the voltage at the supply.',
        ],
      },
      {
        kind: 'table',
        columns: ['Symptom', 'Most likely cause', 'How to confirm it', 'What it usually is not'],
        rows: [
          [
            'Free chlorine falls below target with the cell running',
            'Scale on the plates, or a scaled electrical connection.',
            'Measure the cell voltage against the supply voltage and inspect the plates and the terminals.',
            'It is rarely a fault of the control system itself.',
          ],
          [
            'Output is low from the start of a new cell',
            'The brine is below the concentration the cell assumes.',
            'Test the brine concentration against the figure the cell was quoted on.',
            'It is rarely a defective coating on a new cell.',
          ],
          [
            'Free chlorine reads correct, but the pool will not hold it',
            'The pH is too high for the residual to work as intended.',
            'Measure the pH and the alkalinity at the same time as the residual.',
            'It is rarely an undersized cell at this point.',
          ],
          [
            'The unit runs but produces no chlorine at all',
            'No brine flow, a failed cell, or a failed power supply.',
            'Check the flow switch, the supply and the cell continuity in that order.',
            'It is rarely a dosing control fault.',
          ],
          [
            'Output is uneven through the day',
            'The controller is reacting to a drifting probe.',
            'Compare the controller reading against a wet test kit at two or three times of day.',
            'It is rarely the cell, which produces steadily.',
          ],
        ],
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Configurations',
    title: 'Complete Systems, Replacement Cells and OEM Platforms',
    intro:
      'The same cell sits inside three quite different offers, and the difference is mostly about who supplies the surrounding equipment and who carries the performance of the finished product.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Commercial pool system',
            body:
              'A complete chlorination package for a commercial pool, water park, hotel or aquatic facility: the cell, the brine preparation, the cell control and the documentation for the installation. The pump, the probe, the pool chemistry and the installation are the project’s.',
          },
          {
            title: 'OEM salt chlorinator platform',
            body:
              'A white-label platform for equipment manufacturers and system integrators: the cell, the mechanical and electrical interfaces, the control functions and the documentation the brand needs for its own compliance file.',
          },
          {
            title: 'Replacement cell',
            body:
              'A titanium electrolytic cell made to fit an existing installation, matched to the existing footprint, the connections, the control signal and the brine conditions of the unit it replaces.',
          },
          {
            title: 'Titanium electrolysis cell',
            body:
              'The cell as a component, with the coating, the gap and the electrical design selected against the brine chemistry and the output the application needs.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Where the supply boundary is drawn',
        intro:
          'This is the line that most often causes a mismatch after the order, so it is stated rather than implied.',
        note:
          'We supply the cell or the cell assembly, and the tubing, the connections and the documentation that belong to it. We do not supply the circulation pump, the residual probe, the controller, the brine tank, the salt, the pool chemistry or the installation labour, unless they are named in the quotation. Where a customer expects a turnkey chlorination package, we quote the full scope as a separate line so that nothing is assumed.',
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-white',
    eyebrow: 'Where The Equipment Is Used',
    title: 'The Duties That Suit Electrolytic Chlorination, And The Ones That Do Not',
    intro:
      'On-site electrolysis makes sense when the site handles the salt, the brine and the maintenance. It does not make sense everywhere, and the pages below are the honest list of where it fits.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            title: 'Commercial pools and water parks',
            body:
              'Hotels, resorts, public pools and aquatic facilities where the chlorine has to be produced on site and where the residual is monitored continuously.',
            href: '/industries/water-treatment/',
          },
          {
            title: 'Water treatment and disinfection',
            body:
              'The broader treatment duty, including the electrochlorination route that produces chlorine at the point of use rather than by delivery.',
            href: '/industries/chemical-processing/',
          },
          {
            title: 'On-site hypochlorite generation',
            body:
              'Where the duty is larger than a pool and the product is a sodium hypochlorite solution rather than a gas, the same electrolysis principle is used at a different scale.',
            href: '/sodium-hypochlorite-generator/',
          },
          {
            title: 'Spa, wellness and leisure water',
            body:
              'Spas and leisure pools where the water is held at a higher temperature and the chemistry demand on the cell is correspondingly higher.',
            href: '/industries/water-treatment/',
          },
        ],
      },
      {
        kind: 'note',
        title: 'The duties this route does not suit',
        intro:
          'Some of these are handled by other pages of this site, and saying so is more useful than a vague offer.',
        note:
          'A duty that needs a very large and continuous output is better served by a bought-in chemical supply or by a bulk hypochlorite installation, because the cell cost and the maintenance scale with the output. A duty where the water chemistry cannot be held under control — very high calcium, a high pH that cannot be corrected, heavy metal contamination — will not be solved by a better cell. And a site with no reliable brine handling and no maintenance routine will get worse results from an on-site generator than from delivered chlorine, because the failure mode is a cell that silently stops producing.',
      },
    ],
  },
  {
    id: 'quality',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Quality And Documentation',
    title: 'What We Control On The Cell, And What You Receive With It',
    intro:
      'The cell is a coated titanium component, so the controls that matter are the ones that act on the substrate, on the coating and on the seal. The document set exists so that the cell can be traced back to the production record and so that a replacement cell can be matched to an existing installation.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Material Identity',
            body: 'Confirm the titanium grade, the plate thickness and the material evidence against the purchase specification, and record it against the cell serial number.',
          },
          {
            title: 'Plate Preparation',
            body: 'Control the surface condition of the plates before the coating is applied. The coating follows the surface, so a defect introduced here is a defect that cannot be repaired afterwards.',
          },
          {
            title: 'Coating and Gap',
            body: 'Hold the coating build, the plate gap and the gasket set to the agreed production basis. The gap is what sets the resistance, so it is a dimensional characteristic and not a visual one.',
          },
          {
            title: 'Sealing And Assembly',
            body: 'Verify the gasket compression, the seals around the brine path and the tightness of the stack, and check the electrode connections for the corrosion protection they need.',
          },
          {
            title: 'Release And Traceability',
            body: 'Verify the dimensions, the identification, the visual condition, the packing and the document package, and tie the delivery back to the production record.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'The documents that belong to a cell',
        intro:
          'The scope of the package is agreed at the order rather than imposed afterwards.',
        note:
          'Material certification of the titanium substrate, the coating record, the dimensional inspection record, the visual inspection record, the electrical continuity check, the instructions for the commissioning and the cleaning routine, and the batch traceability that ties the cell back to the production record. For an OEM platform the documentation package is written to match the brand’s own compliance file, and the inspection hold points can be agreed before the build starts.',
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'A Salt Chlorinator Built Around Your Pool, Your Brine And Your Maintenance Routine',
    intro:
      'The cell size, the output, the coating, the gap, the connections and the control interface are reviewed together against your pool volume, your flow, your brine and the way the plant room is actually maintained. What comes back is a cell matched to an installation, not a cell that fits a product range.',
    image: {
      src: '/images/applications/water-treatment.webp',
      alt: 'On-site chlorination equipment for a water treatment installation',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Pool volume and circulation flow',
          'Required free chlorine residual',
          'Water chemistry: pH, calcium and alkalinity',
          'Brine concentration and saturator arrangement',
          'Cell output and the operating current',
          'Coating selection against the brine',
          'Connection, footprint and service access',
          'Control interface and documentation scope',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Pool Volume',
          'Flow',
          'Residual',
          'pH',
          'Brine',
          'Output',
          'Coating',
          'Control',
          'Service',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define The Pool, The Brine And The Duty Before Quotation',
    intro:
      '“Salt chlorinator” is a starting point, not a specification. The cell, the output and the interface are only reviewable once the pool, the brine and the duty are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the pool volume, the circulation flow and the pipework the cell has to work with.',
        'State the free chlorine residual you need to hold and the pH range you operate to.',
        'State the water chemistry: the calcium hardness, the alkalinity and the fill water source.',
        'State the brine concentration available and how the saturator or the salt hopper is arranged.',
        'State the cell output required and how many hours a day it will run.',
        'State whether the cell is a new installation or a replacement for an existing unit, and give the existing drawing.',
        'State the control signal, the connection and the space the cell has to fit into.',
        'State the inspection and the document scope your acceptance process needs.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A chlorine output figure without the brine concentration and the cell temperature is not a specification.',
        'A cell sold without the pump, the probe and the controller is a component, not a chlorination system.',
        'The cell cannot correct the pH, and a pool that will not hold its pH will not hold its chlorine.',
        'Pool chemistry compliance and the operating permit are assigned by the operator and the authority, not by the supplier.',
      ],
    },
    note: {
      title: 'What we answer with',
      body: 'Once the boundary is defined, the answer is a specific cell: the construction, the coating, the output at the stated conditions, the connection, the control interface, the document scope and the manufacturing and delivery basis. Where a part of the installation is outside our scope, we say so rather than leaving a gap that appears on site.',
    },
    related: {
      title: 'Related pages',
      intro:
        'Compare the adjacent pages only after the duty and the supply boundary are clear.',
      links: [
        { href: '/sodium-hypochlorite-generator/', label: 'Sodium Hypochlorite Generators' },
        { href: '/industries/water-treatment/', label: 'Water Treatment' },
        { href: '/titanium-anode/platinized-anode/', label: 'Platinized Anodes' },
        { href: '/titanium-anode/ruthenium-coated-titanium-anodes/', label: 'Ru-Ir Coated Anodes' },
      ],
    },
  },
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How The Cell, The Coating And The Seal Are Built And Released',
    intro:
      'We control the titanium identity, the plate preparation, the coating build, the gap and the sealing against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied cell.',
    image: {
      src: '/images/service/inspection-docs.webp',
      alt: 'Inspection and documentation of the supplied electrolysis cell',
      caption: 'Inspection scope is matched to the ordered product and the agreed evidence package.',
    },
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Substrate And Grade',
            body: 'Confirm the titanium grade, the plate thickness and the material evidence against the purchase specification, and tie it to the cell serial number.',
          },
          {
            title: 'Surface And Coating',
            body: 'Control the surface preparation and hold the coating build to the agreed basis. The coating follows the surface, so the preparation is checked before the layer is applied.',
          },
          {
            title: 'Assembly And Sealing',
            body: 'Set the plate gap and the gasket compression, seal the brine path and check the electrical connections for the protection they need in a wet enclosure.',
          },
          {
            title: 'Test And Release',
            body: 'Carry out the continuity and the functional checks the order calls for, then verify the dimensions, the identification, the packing and the document package before shipment.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Sampling, acceptance values, test methods and the supplied records are finalised in the quotation, the inspection plan or the approved order documents. Where a customer inspection or a third-party inspection is required, the hold points are agreed before the build starts.',
        ],
      },
    ],
  },
];

export const saltChlorinatorFaq: { q: string; a: string }[] = [
  {
    q: 'How much chlorine does the cell produce?',
    a: 'It depends on the current passed, the brine concentration and the cell temperature, and all three have to be named for the figure to mean anything. We quote the output as grams per hour at a stated brine concentration and temperature, so it can be checked against your own operating conditions. A figure quoted without those conditions is the one most likely to be wrong.',
  },
  {
    q: 'Is a salt chlorinator better than chlorine delivered to site?',
    a: 'For a commercial pool it often is, because it removes the delivery, the storage and the handling of a hazardous chemical, and the residual can be controlled continuously. For a large plant with a steady and high demand, bought-in hypochlorite is usually cheaper and simpler, and we will say so. The deciding factors are the scale of the duty, the site’s maintenance routine and whether the water chemistry can be held under control.',
  },
  {
    q: 'Why is my free chlorine reading correct but the pool still not properly disinfected?',
    a: 'Almost always the pH. At a pH around 7.2 to 7.4 most of the free chlorine is present as hypochlorous acid, which is the form that disinfects. As the pH rises, more of it is present as a much weaker species, so the same measured residual does less work. Measure the pH and the alkalinity at the same time as the residual, and correct the balance rather than increasing the chlorine.',
  },
  {
    q: 'How often does the cell need cleaning, and what does scaling do to it?',
    a: 'Scale from calcium carbonate precipitates on the plates and insulates the active surface, so the output falls and the cell voltage rises. Commercial cells are normally run with periodic polarity reversal, which keeps the plates clear; a cell that is never reversed loses output progressively. The routine and its interval are part of the operating instructions, and we supply them with the cell.',
  },
  {
    q: 'What coating should be used in a salt cell?',
    a: 'A mixed metal oxide coating on titanium is the usual choice for brine electrolysis, and a platinized titanium coating is used where the duty or the brine chemistry calls for it. The choice depends on the brine concentration, the temperature, the current and the service interval, and it is made against your duty rather than by default.',
  },
  {
    q: 'Can you supply a replacement cell for our existing installation?',
    a: 'Yes, and it is usually the quickest and the cheapest route. Send the drawing or the existing cell, the model, the output requirement and the control signal, and we will match the footprint, the connections and the operating point to what is already installed. A replacement cell matched to a different unit is the most common cause of a poor installation.',
  },
  {
    q: 'What is included in the supply?',
    a: 'The cell or the cell assembly, the tubing and the connections that belong to it, and the documentation package. The circulation pump, the residual probe, the controller, the brine tank, the salt, the pool chemistry and the installation labour are not included unless the quotation names them. We state the boundary explicitly because a mismatch here is only discovered on site.',
  },
  {
    q: 'How long does the cell last?',
    a: 'The life is counted in operating hours rather than in calendar years, because a cell that runs twenty hours a day and one that runs two are not the same service. The coating is consumed slowly by the electrolysis, the scale rate depends on the water hardness and the temperature, and the connections and the seals have their own life. We quote the cell life with the basis it was assessed against.',
  },
  {
    q: 'What happens to the hydrogen produced on the cathode side?',
    a: 'It is vented to atmosphere. The volume is small relative to the chlorine production, but it is a flammable gas, so the venting has to be arranged away from the plant room, away from any ignition source and with enough air movement. We state the venting requirement in the operating instructions and include it in the installation documentation.',
  },
  {
    q: 'Do you supply complete systems for OEM brands?',
    a: 'Yes. We supply the cell, the mechanical and electrical interfaces, the control functions and a documentation package written to match your own compliance file, and we can hold inspection hold points to your production schedule. The scope is agreed at the engineering stage so that the platform is a specification rather than a sample.',
  },
];
