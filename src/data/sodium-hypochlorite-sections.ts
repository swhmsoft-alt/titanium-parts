/**
 * Section content of the sodium hypochlorite generator page.
 *
 * Split from `sodium-hypochlorite-page.ts` so the copy can be reviewed on its
 * own. Every figure is a reference window tied to a condition (brine strength,
 * current density, cell temperature, solution strength, feed salinity) and is
 * confirmed against the actual duty before it becomes a quotation. No
 * certificate, customer or performance record is stated that cannot be
 * evidenced.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type HypochloriteBlock = PageBlock;

/** A section of the page family. */
export type HypochloriteSection = PageSection;

export const hypochloriteSections: HypochloriteSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What An On-Site Hypochlorite Generator Is',
    title: 'A Hypochlorite Generator Makes A Liquid Disinfectant At The Point Of Use',
    intro:
      'An on-site sodium hypochlorite generator electrolyses a brine solution into sodium hypochlorite solution and hydrogen. The product is a liquid, not a gas, and that single fact decides most of the engineering: how it is stored, how it is dosed, how it decays and what the site has to handle every day.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The chemistry is the electrolysis of brine. Chloride is oxidised at the anode to form free chlorine, which in the alkaline solution formed at the cathode is present as hypochlorite. The net product is sodium hypochlorite solution, at a strength set by the brine concentration and the current, with hydrogen vented from the cathode side. It is the same reaction a swimming pool salt cell uses, carried out at a scale where the output is measured in tonnes a day rather than in grams an hour.',
          'The liquid form is the reason this route exists at all. Chlorine gas is the most efficient carrier of available chlorine, but it is a compressed, toxic, hazardous gas that has to be stored and handled under a regulatory regime. Hypochlorite solution removes that regime, and what it adds instead is a set of chemical realities that the plant has to manage: the solution decomposes with time and with temperature, it is caustic, it is light-sensitive, and it attacks some materials.',
          'The consequence is that a hypochlorite generator is a system with a life of its own. The cell, the brine preparation, the cooling, the solution storage, the dosing and the instrumentation all have to be designed together, because the weakest of them sets the quality of what reaches the process. This page treats it as a system, and it states where our supply stops.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'The product decays, and the rate is not fixed',
            body:
              'Sodium hypochlorite loses strength with time, faster at higher temperature and faster at higher pH. A plant that produces more than it uses within a short period is paying for a product that will be weaker by the time it is used.',
          },
          {
            title: 'The brine quality sets the ceiling',
            body:
              'The concentration of the feed solution limits the strength that can be produced, and the impurities in it — hardness, metals, organics — accumulate in the cell and shorten its life. Brine preparation is part of the system, not a utility.',
          },
          {
            title: 'Hydrogen is a real output, not a by-product',
            body:
              'Every kilogram of hypochlorite produces hydrogen at the cathode. It has to be vented safely, and in a confined plant room that is an engineering requirement rather than a formality.',
          },
          {
            title: 'The storage is part of the design',
            body:
              'The tank material, the volume, the agitation and the residence time decide the strength the plant actually delivers. A generator sized only by its hourly output will produce a product that is weaker than the nameplate by the time it reaches the dosing point.',
          },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'How The Product Is Made And What It Becomes',
    title: 'From Brine To Solution, And The Decay That Starts Immediately',
    intro:
      'Every stage between the salt and the dosing point changes the strength of the product. The stages are usually quoted as one figure, and the difference between the figures at each end is the difference between a system that meets its specification and one that does not.',
    blocks: [
      {
        kind: 'table',
        columns: ['Stage', 'What happens', 'What controls it', 'What goes wrong'],
        rows: [
          [
            'Brine preparation',
            'Salt is dissolved and conditioned to the concentration the cell assumes.',
            'The salt grade, the saturation method, the hardness removal and the make-up rate.',
            'Hard or metal-bearing brine, which scales the cell and contaminates the product.',
          ],
          [
            'Electrolysis',
            'Chloride is oxidised at the anode; sodium hypochlorite forms and hydrogen is vented.',
            'The current density, the cell temperature, the brine concentration and the gap resistance.',
            'A cell run warm or at too high a current density, which cuts the current efficiency.',
          ],
          [
            'Cooling',
            'The product is brought to the temperature at which it is stable.',
            'The heat removal and the temperature of the brine entering the cell.',
            'Warm product, which decays faster and consumes the strength that was paid for.',
          ],
          [
            'Storage',
            'The solution is held in a tank before it is dosed.',
            'The tank material, the volume, the agitation, the light exposure and the residence time.',
            'A tank that is too large or too warm, so the product weakens before it is used.',
          ],
          [
            'Dosing',
            'The solution is metered into the water to be treated.',
            'The dosing pump, the calibration, the injection point and the flow.',
            'A mis-calibrated pump, which produces a correct average and a wrong instantaneous dose.',
          ],
        ],
        note:
          'This is why the useful measure of a generator is the available chlorine at the dosing point, not the chlorine produced at the cell. The two figures differ, and the difference is set by the temperature, the residence time and the storage volume.',
      },
      {
        kind: 'note',
        title: 'Why the strength figure has three numbers attached to it',
        intro:
          'This is the trade that decides whether an on-site generator is worth building.',
        note:
          'A plant produces a solution at a certain strength, the solution sits in a tank, and it is dosed at a rate that reflects what it has lost on the way. Quoting only the production figure overstates the plant by the decay loss and the storage dilution. We quote the production strength, the expected delivery strength and the residence time it assumes, so that the plant can be checked against the duty rather than against a headline.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'The Figures That Define A Generator, And The Conditions They Belong To',
    intro:
      'The table below is the reference window we work to. It is stated as a window rather than as a single figure because the output depends on the brine concentration, the current density, the cell temperature and the residence time, and any of those can move the result by a large amount.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          { label: 'Cell construction', value: 'Bipolar plate cell in titanium, with a coated anode side and an uncoated cathode side' },
          { label: 'Active coating', value: 'Mixed metal oxide on titanium, or platinized titanium, selected against the brine chemistry' },
          { label: 'Brine concentration', value: 'The strength of the feed solution; it sets the ceiling on the strength that can be produced' },
          { label: 'Current density', value: 'The primary working variable: output rises with current and efficiency falls as the density rises' },
          { label: 'Current efficiency', value: 'The fraction of the passed charge that appears as hypochlorite; it falls with temperature and density' },
          { label: 'Production strength', value: 'The chlorine concentration of the solution leaving the cell, before any decay' },
          { label: 'Delivery strength', value: 'The concentration at the dosing point, after the decay and the dilution of the storage' },
          { label: 'Cell temperature', value: 'The cell is temperature sensitive; output and life both fall as the brine warms' },
          { label: 'Solution temperature', value: 'Set by the cooling duty; a warm solution decays faster and shortens the usable life' },
          { label: 'Storage residence time', value: 'The time between production and dosing, which is the largest single cause of strength loss' },
          { label: 'Available chlorine', value: 'The measured oxidising capacity of the solution, expressed as free or total available chlorine' },
          { label: 'Hydrogen side', value: 'Vented to atmosphere, away from the plant room and from any ignition source' },
          { label: 'Electrical supply', value: 'A controlled rectifier with a stable current, since the current is what sets the output' },
          { label: 'Control and instrumentation', value: 'Flow verification, a residual or ORP measurement and the interlock that protects the cell' },
        ],
      },
      {
        kind: 'note',
        title: 'The figure that arrives most often without its conditions',
        intro: 'We state it here because a chlorine figure on its own is the figure most likely to be wrong.',
        note:
          'A production rate quoted without the brine concentration, the current density and the cell temperature is not a specification, because the same cell can deliver materially different output at the same voltage depending on all three. Ask for the production strength at the conditions you intend to run, and ask for the delivery strength that follows from your own storage volume and residence time.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'How The Plant Behaves',
    title: 'Efficiency, Decay And The Failure Modes Worth Knowing Before You Buy',
    intro:
      'An on-site generator is not a constant-output machine. Its behaviour is the behaviour of a chemistry that is running while the product is already losing strength, and the failure modes are known and mostly avoidable.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The current efficiency of a hypochlorite cell is the first number that decides whether an on-site plant is worth building. It rises with current density at low load, peaks, and then falls as the cell runs hotter and as the brine concentration rises. A plant run far below its rated output is therefore running at a poor efficiency, and a plant run at its maximum is running warm. The efficient point is not the same as the maximum point, and the operating instructions should say where it is.',
          'The second behaviour is the decay of the product. Hypochlorite decomposes into chlorate and eventually into oxygen, and the rate rises with temperature, with pH and with the presence of trace metals. This is why a solution tank that is too large is a liability: the oldest product in it is the weakest, and a plant that produces in batches and holds them overnight is buying strength it will not use. The residence time is a design variable, not an accident of the plant layout.',
          'The third is scale and contamination. Calcium from the brine and hardness from the make-up water precipitate on the plates as the cell runs, the gap resistance rises, the cell voltage climbs, and the current efficiency falls with it. Organics and heavy metals in the feed do the same thing worse, because they poison the coating. A cell that is fed with untreated water is a cell with a short life, and the reason is almost never the coating.',
        ],
      },
      {
        kind: 'table',
        columns: ['Symptom', 'Most likely cause', 'How to confirm it', 'What it usually is not'],
        rows: [
          [
            'Output falls over a period of weeks without a change in demand',
            'Scale on the plates, or brine that carries hardness and metals.',
            'Measure the cell voltage against the supply voltage and inspect the plates and the brine.',
            'It is rarely a coating that was wrong at the start.',
          ],
          [
            'The delivered strength is below the production strength',
            'The storage residence time and the solution temperature.',
            'Measure the strength at the cell and again at the dosing point, and compare the times.',
            'It is rarely an undersized cell.',
          ],
          [
            'Output is low from the start of a new plant',
            'The brine concentration is below the value the cell assumes.',
            'Test the brine concentration against the figure the plant was quoted on.',
            'It is rarely a defective coating on a new cell.',
          ],
          [
            'The cell voltage rises while the current stays the same',
            'Scale in the gap, or a fouled cathode side.',
            'Inspect the plates, check the polarity reversal routine and check the brine quality.',
            'It is rarely a fault of the rectifier.',
          ],
          [
            'Efficiency is poor even on a new installation',
            'The plant is running well below or well above its efficient point.',
            'Compare the measured output against the current and the conditions in the operating data.',
            'It is rarely a fault of the control system.',
          ],
          [
            'Hydrogen accumulates in the plant room',
            'The venting is undersized, restricted or discharging into a confined space.',
            'Check the vent route, the flow and the location of the discharge point.',
            'It is never acceptable to solve by simply running the cell harder.',
          ],
        ],
      },
    ],
  },
  
  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Where The Plant Is Used',
    title: 'The Duties Where On-Site Generation Earns Its Place, And The Ones Where It Does Not',
    intro:
      'The route works best where the chlorine demand is steady, where a liquid product can be dosed safely, and where the site would otherwise carry the handling of a hazardous delivered chemical. Where those three conditions do not all hold, a delivered chemical is often the better answer.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            title: 'Water treatment and disinfection',
            body: 'Municipal and industrial water, where the chlorine demand is continuous and the site wants the dosing controlled rather than the delivery managed.',
            href: '/industries/water-treatment/',
          },
          {
            title: 'Food and beverage processing',
            body: 'Washdown and sanitation lines where the concentration has to be held at a point in the process rather than in a bulk tank.',
            href: '/industries/medical/',
          },
          {
            title: 'Chemical processing',
            body: 'Where hypochlorite is an intermediate rather than a finished product, and the strength has to be consistent between batches.',
            href: '/industries/chemical-processing/',
          },
          {
            title: 'Pools and aquatic facilities',
            body: 'Commercial pools and water parks, where the smaller cell format and the on-site route remove the delivery of a hazardous chemical.',
            href: '/salt-chlorinator-for-pool/',
          },
          {
            title: 'Healthcare and laboratory use',
            body: 'Where the disinfection has to be repeatable and traceable to a strength rather than to a delivery note.',
            href: '/industries/medical/',
          },
          {
            title: 'Electrolysis and anode supply',
            body: 'The coated titanium electrodes behind the cell, and the reference to the coating families that the duty is selected from.',
            href: '/titanium-anode/mmo-anode/',
          },
        ],
      },
      {
        kind: 'note',
        title: 'When a delivered chemical is the better answer',
        intro: 'We say this on purpose, because a plant that should not have been built is a poor outcome for both sides.',
        note:
          'If the demand is intermittent and small, a plant sized for the peak will idle most of the year and its product will decay in the tank. If the demand is very large and steady, purchased hypochlorite is usually cheaper per unit of available chlorine and removes the plant entirely. If the site cannot keep a routine of brine preparation, plate cleaning and strength testing, the plant will be the weakest part of the process rather than the strongest.',
      },
    ],
  },
  {
    id: 'families',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'The Product Family',
    title: 'Skid, Panel And Vessel-Mounted Forms, And How They Differ',
    intro:
      'Three delivery forms, distinguished by where the plant sits and how much of the surrounding routine it takes with it. The electrochemistry is the same in all three.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Skid-mounted plant',
            body:
              'The cell, the rectifier, the brine and product handling on a common frame, ready for a plant room. It takes the most space and it takes the least from the civil works, because the whole skid is delivered, installed and commissioned as one unit.',
          },
          {
            title: 'Panel-mounted cell',
            body:
              'The electrolytic cell and its power supply mounted in a frame that the customer installs, with the brine preparation, the product tank and the duty arranged by the customer. It suits a site that already has a tank, a dosing line and a routine.',
          },
          {
            title: 'Vessel-mounted generator',
            body:
              'A cell arrangement built onto a vessel that the customer already operates, where the brine is prepared and the product is stored on the same skid. The lowest footprint, and it depends the most on the vessel being available when the plant needs work.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'The form follows the routine, not the size',
        intro:
          'A frequent mistake in a plant like this is to size the plant by the peak demand and then place it where the routine cannot reach it.',
        note:
          'The three forms carry the same equipment in different degrees of prefabrication. What decides the choice is how much of the routine — the brine preparation, the plate cleaning, the strength test and the product handling — the site can carry, and how much of it the supplier should carry with the equipment. That is a discussion about operations, not about output, and it is settled before the quotation rather than after it.',
      },
    ],
  },
  {
    id: 'quality',
    band: 'py-20 bg-white',
    eyebrow: 'Quality And Traceability',
    title: 'What Is Controlled, What Is Recorded And What You Receive',
    intro:
      'The evidence package for an electrolysis cell is decided at the enquiry, not after the build. We state what is measured, what the accepted values are and which records accompany the delivery, so that your acceptance process has something to work with.',
    blocks: [
      {
        kind: 'table',
        columns: ['Element', 'What is controlled', 'The record that accompanies it'],
        rows: [
          [
            'Titanium substrate',
            'The grade, the form and the dimensions against the purchase specification.',
            'Material certification of the substrate, tied to the cell serial number.',
          ],
          [
            'Surface preparation',
            'The cleanliness and the roughness of the plates before the coating is applied.',
            'The preparation record for the batch.',
          ],
          [
            'Coating build',
            'The process basis and the loading applied, held to the agreed production basis.',
            'The coating record for the cell.',
          ],
          [
            'Cell assembly',
            'The plate gap, the gasket compression, the sealing of the brine path and the electrical continuity.',
            'The assembly and function check record.',
          ],
          [
            'Dimensional inspection',
            'The plate thickness, the gap and the overall dimensions of the assembly.',
            'The dimensional inspection report.',
          ],
          [
            'Identification',
            'The serial number, the coating system and the operating basis marked on the cell.',
            'The nameplate and the delivery documentation.',
          ],
          [
            'Visual condition',
            'The plate surfaces, the terminals and the sealing before packing.',
            'The visual inspection record and the photographs.',
          ],
          [
            'Lot traceability',
            'The link from the delivered cell back to the production record.',
            'The batch traceability sheet.',
          ],
        ],
      },
      {
        kind: 'note',
        title: 'Where our supply stops',
        intro: 'This is stated on every page of this family, and it matters most on a system page.',
        note:
          'We supply the cell or the cell assembly, the electrode package, the documentation that belongs to it and the technical support for the duty. The rectifier, the brine preparation plant, the solution tank, the cooling, the dosing pump, the residual instrumentation, the installation, the commissioning and the regulatory permit are assigned by the project, and they are the parts that usually decide whether a plant works.',
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'A Hypochlorite Generator Sized Around Your Demand, Your Brine And Your Residence Time',
    intro:
      'The cell size, the current, the cooling, the solution tank, the storage volume and the dosing are reviewed together against your chlorine demand, your brine quality and the time the product spends in the tank. What comes back is a plant matched to a duty, not a cell that fits a product range.',
    image: {
      src: '/images/applications/electrochlorination.webp',
      alt: 'On-site electrochlorination plant for sodium hypochlorite generation',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Chlorine demand and the daily profile',
          'Brine concentration and salt quality',
          'Make-up water hardness and treatment',
          'Cell current, density and temperature',
          'Solution cooling duty',
          'Storage volume and residence time',
          'Dosing method and instrumentation',
          'Hydrogen venting and safety requirements',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Demand',
          'Brine',
          'Hardness',
          'Current',
          'Cooling',
          'Storage',
          'Residence',
          'Dosing',
          'Venting',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define The Demand, The Brine And The Residence Time Before Quotation',
    intro:
      '“Sodium hypochlorite generator” is a starting point, not a specification. The cell, the output and the balance of the plant are only reviewable once the demand, the brine and the storage conditions are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the chlorine demand in kilograms a day and the daily and seasonal profile.',
        'State the brine concentration available and the salt grade and the make-up water source.',
        'State the required production strength and the strength you need at the dosing point.',
        'State the storage volume, the residence time and the ambient temperature of the plant room.',
        'State the cooling available and the maximum temperature you can hold at the cell.',
        'State whether the plant is a new installation or an addition to an existing one, and give the drawing.',
        'State the dosing method, the instrumentation and the control signal the plant has to follow.',
        'State the inspection and the document scope your acceptance process needs.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A production figure without the brine concentration and the current density is not a specification.',
        'The delivery strength is not the production strength; the difference is set by your storage and your temperature.',
        'A cell sold without the rectifier, the cooling, the tank and the dosing is a component, not a plant.',
        'The hydrogen handling, the chemical storage and the discharge permit are assigned by the project.',
      ],
    },
    note: {
      title: 'What we answer with',
      body: 'Once the boundary is defined, the answer is a specific plant: the cell construction, the coating, the production rate at the stated conditions, the expected delivery strength, the cooling duty, the storage recommendation, the connection, the document scope and the manufacturing and delivery basis. Where a part of the installation is outside our scope, we say so rather than leaving a gap that appears on site.',
    },
    related: {
      title: 'Related pages',
      intro: 'Compare the adjacent pages only after the duty and the supply boundary are clear.',
      links: [
        { href: '/salt-chlorinator-for-pool/', label: 'Salt Chlorinators For Pools' },
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

export const hypochloriteFaq: { q: string; a: string }[] = [
  {
    q: 'How much sodium hypochlorite can the generator produce?',
    a: 'It depends on the current passed, the brine concentration and the cell temperature, and all three have to be named for the figure to mean anything. We quote the production rate as kilograms of available chlorine a day at a stated brine concentration and cell temperature, so it can be checked against your own duty. A figure quoted without those conditions is the one most likely to be wrong.',
  },
  {
    q: 'Is on-site generation cheaper than buying hypochlorite?',
    a: 'It depends on the scale, the duty and the site. On-site generation wins where the chlorine demand is continuous and moderate, where the delivered chemical carries a real handling and storage burden, and where energy is cheap relative to the delivered product. For a very large and steady demand, purchased hypochlorite is usually cheaper per unit of available chlorine, and for an intermittent small demand a plant is usually not worth building. We will tell you which side of that line your duty falls on.',
  },
  {
    q: 'Why does the delivered strength keep lower than the production strength?',
    a: 'Because hypochlorite decays. It decomposes into chlorate and eventually into oxygen, and the rate rises with temperature, with pH and with trace metals in the solution. The difference between the two figures is set by your storage volume, your residence time and the temperature of the tank, which is why we quote both figures rather than only the one at the cell.',
  },
  {
    q: 'What happens to the hydrogen produced on the cathode side?',
    a: 'It is vented to atmosphere. The volume is small relative to the chlorine production, but it is a flammable gas, so the venting has to be arranged away from the plant room, away from any ignition source and with enough air movement. We state the venting requirement in the operating instructions and include it in the installation documentation.',
  },
  {
    q: 'How long does the cell last?',
    a: 'The life is counted in operating hours rather than in calendar years, because a cell that runs twenty hours a day and one that runs two are not the same service. The coating is consumed slowly by the electrolysis, the scale rate depends on the hardness of the brine and the temperature, and the connections and the seals have their own life. We quote the cell life with the basis it was assessed against.',
  },
  {
    q: 'What coating should be used in a hypochlorite cell?',
    a: 'A mixed metal oxide coating on titanium is the usual choice for brine electrolysis, and a platinized titanium coating is used where the duty or the brine chemistry calls for it. The choice depends on the brine concentration, the temperature, the current and the service interval, and it is made against your duty rather than by default.',
  },
  {
    q: 'Do you supply the complete plant or only the cell?',
    a: 'Both are possible, and the scope is written into the quotation. We supply the cell or the cell assembly, the electrode package, the documentation and the technical support for the duty. The rectifier, the brine preparation plant, the solution tank, the cooling, the dosing pump, the residual instrumentation, the installation, the commissioning and the regulatory permit are assigned by the project, and we state this explicitly because a mismatch here is only discovered on site.',
  },
  {
    q: 'How is the brine prepared, and does the salt grade matter?',
    a: 'It matters a great deal. The salt has to be free of the impurities that scale the cell and contaminate the product, and the make-up water has to be treated so that its hardness does not precipitate on the plates. Brine preparation is part of the system rather than a utility, and a cell fed with untreated water will lose output and life quickly. We supply the brine quality specification with the cell.',
  },
  {
    q: 'Can the cell be supplied as a replacement for an existing installation?',
    a: 'Yes, and it is usually the quickest and the cheapest route. Send the drawing or the existing cell, the model, the output requirement and the control signal, and we will match the footprint, the connections and the operating point to what is already installed. A replacement cell matched to a different unit is the most common cause of a poor installation.',
  },
  {
    q: 'What documentation comes with the generator?',
    a: 'Material certification of the titanium substrate, the coating record, the dimensional inspection, the visual record and the batch traceability, in the combination your acceptance process requires, together with the operating instructions and the installation requirements. The scope is agreed at the order rather than imposed afterwards, and where a customer or third-party inspection is required the hold points are agreed before the build starts.',
  },
];
