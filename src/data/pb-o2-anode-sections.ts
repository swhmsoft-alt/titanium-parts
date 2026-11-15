/**
 * Section content of the lead dioxide coated titanium anode page.
 *
 * Split from `pb-o2-anode-page.ts` so the copy can be reviewed on its own.
 *
 * The copy on this page carries a different responsibility from the rest of
 * the family. The performance statements are tied to a condition as usual,
 * and in addition the hazard profile, the handling obligations and the
 * end-of-life route are stated explicitly, because they are part of what the
 * buyer is buying and they have to be settled before the order.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type PbO2Block = PageBlock;

/** A section of the page family. */
export type PbO2Section = PageSection;

export const pbO2Sections: PbO2Section[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This Anode Is',
    title: 'PbO₂ on Titanium: A Legacy Coating That Still Has Its Place',
    intro:
      'A lead dioxide coated titanium anode is a titanium substrate carrying a lead dioxide layer, sometimes with an intermediate layer that separates the lead from the titanium. It is one of the oldest anode coating families in industrial electrochemistry, and it is still selected for a defined set of duties where the alternatives did not hold up.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'The reason it survives in those duties is its electrochemistry. Lead dioxide is a strongly oxidising, conductive oxide with a low oxygen overpotential, and it keeps that behaviour in acid where many other surfaces passivate. In a strongly acidic, oxidising electrolyte — the kind of medium that attacks a mixed metal oxide coating — the lead dioxide layer is still the coating of reference.',
          'The reason it does not survive everywhere is the same element. Lead is a heavy metal with a well-established toxicity, and the coating is a consumable surface: as it wears, lead leaves the electrode. That has to be contained, monitored and accounted for, and it has to be settled before the electrode goes into the cell rather than discovered afterwards.',
          'So the honest position on this coating is narrow. Where it is the right engineering answer, it is a good answer and it is available. Where it is not, the answer is a lead-free coating, and we will say so during the review. The pages below describe what it does, where it belongs, and what the obligations around it are.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Low oxygen overpotential',
            body:
              'The layer conducts and catalyses oxygen evolution well, and it keeps that behaviour in acid where other surfaces passivate.',
          },
          {
            title: 'Conductivity in the layer',
            body:
              'The coating carries current across the whole face, so the active area is the area the drawing states.',
          },
          {
            title: 'A consumable surface',
            body:
              'The layer wears during service. Lead leaves the electrode, so the wear rate and the exposure route have to be part of the design.',
          },
          {
            title: 'A managed material',
            body:
              'Lead dioxide is a controlled material in most jurisdictions. Handling, storage and disposal are engineering inputs, not afterthoughts.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'Why we do not quote this coating from a catalogue',
        intro:
          'The performance of a PbO₂ anode and the risk it carries are the same subject.',
        note:
          'A quote that states only the size and the price for a lead dioxide anode is incomplete, because it omits the information the buyer needs to decide whether the duty and the site can carry it. We review the electrolyte, the duty, the handling regime and the end-of-life route before we release a quotation.',
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Coating Chemistry',
    title: 'The Layer Structure, and Where the Lead Actually Sits',
    intro:
      'The structure of a lead dioxide anode decides both its performance and its hazard profile. This is what the cross-section looks like and what each layer does.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'The titanium substrate',
            body:
              'Commercially pure titanium, Grade 1 or Grade 2. It carries the current, resists the electrolyte and gives the coating a mechanically sound base that can be formed into the required geometry.',
          },
          {
            title: 'The intermediate layer',
            body:
              'A layer between the titanium and the lead dioxide. Its purpose is to bond the lead layer and to slow the transport of lead into the substrate, because the substrate is not supposed to see the electrolyte.',
          },
          {
            title: 'The lead dioxide layer',
            body:
              'The working surface. It carries the anodic current, catalyses the reaction and wears during service. Its loading and its adhesion to the layer below are the two things the inspection concentrates on.',
          },
          {
            title: 'The masked zones',
            body:
              'The connection, the back and the edges are masked so that the lead layer is not exposed where it is not wanted, and so that the current is carried by the titanium rather than by the coating.',
          },
        ],
      },
      {
        kind: 'table',
        columns: ['Question', 'Why it decides the answer'],
        rows: [
          [
            'What is the electrolyte, and how acidic is it?',
            'The acidity and the oxidising power set whether the coating is attacked, and whether the intermediate layer is doing its job',
          ],
          [
            'What is the current density and the duty cycle?',
            'They set the wear rate of the layer, and therefore the rate at which lead enters the system',
          ],
          [
            'Does the product stream stay in contact with the coated surface?',
            'It decides whether the dissolved lead goes into a contained loop or into a product that leaves the site',
          ],
          [
            'How are the electrodes removed and cleaned?',
            'Handling is where most of the occupational exposure arises, and it is a design input, not an operating detail',
          ],
          [
            'What is available at end of life?',
            'A defined take-back or a licensed disposal route is a precondition for the supply, not an afterthought',
          ],
          [
            'Is there a lead-free coating that meets the duty?',
            'It is the first question, and where the answer is yes, that is the answer we give',
          ],
        ],
        note: 'The review questions we work through before a PbO₂ anode is quoted.',
      },
    ],
  },
  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Technical Data',
    title: 'What Is Defined Before Your Anode Is Manufactured',
    intro:
      'These are the parameters fixed on the order before manufacture starts. For this coating they are inseparable from the handling and the end-of-life data, which are agreed at the same time.',
    blocks: [
      {
        kind: 'spec',
        specs: [
          {
            label: 'Substrate material',
            value:
              'Commercially pure titanium, Grade 1 or Grade 2, with the grade selected against the forming route and the mechanical duty.',
          },
          {
            label: 'Layer structure',
            value:
              'Titanium substrate, intermediate layer, lead dioxide working layer. The construction is stated on the order and on the drawing, so the layer build is not a matter of assumption.',
          },
          {
            label: 'Lead dioxide loading',
            value:
              'Stated in g/cm² of the coated area, measured on the finished electrode, against the value fixed on the order.',
          },
          {
            label: 'Active surface area',
            value:
              'Geometric wetted area of the coated surface, stated on the drawing. Current density is always referenced to this area.',
          },
          {
            label: 'Current density reference window',
            value:
              'A reference window for the coating in acidic service, confirmed against the duty, the acidity and the temperature. It is reviewed rather than assumed.',
          },
          {
            label: 'Electrolyte and acidity',
            value:
              'Composition, acidity, temperature and the contaminants present. These decide the coating build and the expected wear behaviour.',
          },
          {
            label: 'Masking and connection',
            value:
              'The connection, the back and the edges are masked, so the current is carried by the substrate and no lead layer is exposed where it is not wanted.',
          },
          {
            label: 'Geometries available',
            value:
              'Plate, tubular, rod, wire and mesh, in the forms described in the geometry section. Custom shapes are produced to a drawing.',
          },
          {
            label: 'Handling and end-of-life route',
            value:
              'The installation, removal, cleaning and storage regime, and the disposal or take-back route available at end of life, agreed before the order is released.',
          },
          {
            label: 'Documentation scope',
            value:
              'Material certification of the substrate, the coating record, dimensional inspection, visual record and batch traceability, plus the lead-content documentation your own compliance file requires.',
          },
        ],
      },
    ],
  },
  {
    id: 'hazard',
    band: 'py-20 bg-white',
    eyebrow: 'Lead Profile',
    title: 'What the Lead Means for the Installation and for the People Around It',
    intro:
      'This section exists because the lead is the reason this coating is not a routine purchase. It describes the exposure routes, the controls that belong to the design, and the monitoring that has to be in place.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'Lead dioxide is stable in the coating and it is a controlled material in most jurisdictions. The exposure does not come from the electrode sitting quietly in the cell. It comes from three places: the wear of the coating during operation, the handling of the electrode when it is removed and cleaned, and the end-of-life route for a coated part.',
          'The design response to all three is the same in kind. Contain what is released, control who touches the electrode and how, and close the loop at the end of the electrode\'s life. None of that is a remark in a manual; it is a set of decisions that have to be taken at the design stage, which is why we take them during the review rather than after the order.',
        ],
      },
      {
        kind: 'table',
        columns: ['Exposure route', 'Where it arises', 'What belongs to the design'],
        rows: [
          [
            'Coating wear in service',
            'The layer is anodic and is consumed at a rate set by the current density, the acidity and the duty',
            'A defined replacement interval, the wear rate stated against the duty, and a monitoring plan for the lead content in the loop',
          ],
          [
            'Removal and cleaning',
            'The electrode is handled while it still carries a lead-containing layer, usually outside the cell',
            'A handling procedure with the appropriate PPE, a defined wet-cleaning method and a designated area for removal',
          ],
          [
            'Storage of removed electrodes',
            'Spent electrodes are often stored before disposal, and they carry the coating',
            'A labelled, contained storage area with a defined maximum holding time',
          ],
          [
            'Disposal',
            'The coated part is a lead-containing waste at the end of its life',
            'A licensed route agreed before the first order, with the paperwork defined in advance',
          ],
          [
            'Airborne dust',
            'Any mechanical action that could generate dust from the coating, including grinding or cutting of a spent electrode',
            'A prohibition on machining spent electrodes, and a wet method wherever cleaning is required',
          ],
          [
            'Product stream',
            'Dissolved lead can enter the electrolyte and, depending on the loop, the product',
            'A lead balance for the loop, and confirmation that the product stream is not a route that leaves the site',
          ],
        ],
        note:
          'Exposure routes and the controls that belong to the design. The applicable requirements are set by the jurisdiction the cell operates in.',
      },
      {
        kind: 'note',
        title: 'The alternative is part of the answer',
        intro:
          'A review that ends with a PbO₂ anode has done its job properly, whatever the outcome.',
        note:
          'In a number of the duties where PbO₂ was historically used, a ruthenium, iridium or platinized coating now meets the requirement. Where that is true for your duty, we will tell you during the review, with the reasoning and the comparison, so the choice is made on the evidence rather than on habit.',
      },
    ],
  },
  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Applications',
    title: 'Where a PbO₂ Anode Is Still Selected',
    intro:
      'The duty pattern that brings a lead dioxide anode into the discussion, and what the coating is doing in each of them.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/industries/chemical-processing/',
            title: 'Acidic chemical processing',
            body:
              'Strongly acidic, oxidising process streams where a mixed metal oxide coating is attacked and the lead dioxide layer is not.',
          },
          {
            href: '/industries/electroplating/',
            title: 'Electroplating and surface finishing',
            body:
              'Oxidation duties in acid baths, where the coating has to survive the acidity and the oxidising additives.',
          },
          {
            href: '/industries/medical/',
            title: 'Medical and hygienic applications',
            body:
              'Electrochemical disinfection duties where the process chemistry requires the strongly oxidising anodic surface.',
          },
          {
            href: '/industries/water-treatment/',
            title: 'Water treatment',
            body:
              'Advanced oxidation duties in acidic media, where the cell runs in a contained loop with a defined lead balance.',
          },
          {
            href: '/titanium-anode/mmo-anode/',
            title: 'Mixed metal oxide anodes',
            body:
              'The lead-free coating family, and the first place to look when a PbO₂ anode is being considered.',
          },
          {
            href: '/quality/',
            title: 'Quality and inspection process',
            body:
              'The inspection, the traceability and the documentation scope that go with a coated anode of this class.',
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
      'Each of the forms below is produced as a lead dioxide coated titanium anode, with the layer build, the masking and the connection defined against your drawing.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
            title: 'Disc and plate anodes',
            body:
              'Flat and formed plate for cells with a defined area, and the simplest form to inspect and to clean.',
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
          'Custom shapes are produced to a drawing. Where a geometry creates a handling difficulty, say so during the review: it is usually easier to resolve at the drawing stage than to manage on the floor.',
        ],
      },
    ],
  },
  {
    id: 'end-of-life',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'End of Life',
    title: 'What Happens to the Electrode When It Is Spent',
    intro:
      'The end of the electrode is part of the purchase. This is what we settle before the first order, so that the site is not left with a waste stream it did not plan for.',
    blocks: [
      {
        kind: 'steps',
        items: [
          {
            title: 'Return to the supplier',
            body:
              'Spent coated anodes can be returned for recycling of the coating metal. The route, the packaging and the paperwork are defined at the order, so the site always has a route to follow.',
          },
          {
            title: 'Licensed disposal',
            body:
              'Where return is not practical, the coated part is a lead-containing waste and it goes through the licensed route that your jurisdiction provides. We supply the documentation the route requires.',
          },
          {
            title: 'Recovery of the substrate',
            body:
              'The titanium substrate is recoverable, because the coating is a layer on it rather than the material itself. That is one of the reasons this coating is produced on titanium.',
          },
          {
            title: 'Records closed out',
            body:
              'The batch record is closed against the order, so the documentation follows the electrode through its life rather than stopping at the delivery note.',
          },
        ],
      },
      {
        kind: 'note',
        title: 'A route agreed before the first order',
        intro:
          'This is the single most practical thing that can be done for a lead dioxide anode.',
        note:
          'A defined take-back or disposal route, agreed before the first shipment, removes the largest practical source of uncertainty around this coating. It also removes the temptation to improvise at the end of the electrode\'s life, which is when improvisation is most expensive.',
      },
    ],
  },
  {
    id: 'custom-engineering',
    layout: 'showcase',
    band: 'py-24 bg-[#003366] text-white',
    eyebrow: 'Custom Engineering',
    title: 'PbO₂ Anodes Reviewed Case by Case, Against the Duty and the Rules',
    intro:
      'A lead dioxide electrode is not a generic purchase. The layer build, the substrate, the geometry, the handling regime and the end-of-life route are reviewed together against your duty, because the compliance exposure is part of the specification and not an afterthought.',
    image: {
      src: '/images/titanium-anode/pbo2-coated-anodes.webp',
      alt: 'Lead dioxide coated titanium anodes',
    },
    blocks: [
      {
        kind: 'checks',
        entries: [
          'Electrolyte chemistry and pH',
          'Current density basis',
          'Lead content and layer build',
          'Substrate grade and thickness',
          'Active area and geometry',
          'Handling and protection regime',
          'End-of-life route',
        ],
      },
      {
        kind: 'pills',
        entries: [
          'Application',
          'Electrolyte',
          'pH',
          'Current Density',
          'Lead Content',
          'Geometry',
          'Handling',
          'End of Life',
        ],
      },
    ],
  },
  {
    id: 'before-quote-boundary',
    layout: 'boundary',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'Define the Duty, the Handling Regime and the End-of-Life Route Before Quotation',
    intro:
      '“Lead dioxide anode” is a starting point, not a specification. The layer build, the handling regime and the disposal route are only reviewable once the duty and the site requirements are stated.',
    review: {
      title: 'What we review before manufacture',
      points: [
        'State the electrolyte composition, the pH, the temperature and the contaminants present.',
        'Provide the operating current or the current-density basis and the daily schedule.',
        'State the lead-content requirement and any document your compliance file needs.',
        'Define the titanium substrate requirement and any order-specific material standard.',
        'State the geometry, the active surface area and the mechanical installation.',
        'Describe the handling, the storage and the cleaning regime the electrode will see.',
        'State the end-of-life route that has been agreed for the spent electrode.',
      ],
    },
    limits: {
      title: 'What the product name cannot replace',
      points: [
        'A lead dioxide anode does not establish the service life by itself; the electrolyte and the duty do.',
        '“PbO₂ coated” does not state the lead content, the layer build or the adhesion requirement.',
        'The end-of-life route is part of the purchase, not a matter for the operator after delivery.',
        'Where a lead-free coating meets the same duty, we say so and give the comparison.',
      ],
    },
    related: {
      title: 'Related anode options',
      intro: 'Compare the adjacent product families only after the reaction, the electrolyte and the supply boundary are clear.',
      links: [
        { href: '/titanium-anode/ruthenium-coated-titanium-anodes/', label: 'Ru-Ir Coated Anodes' },
        { href: '/titanium-anode/iridium-oxide-coated-titanium-anodes/', label: 'Ir-Ta Coated Anodes' },
        { href: '/titanium-anode/platinized-anode/', label: 'Platinized Anodes' },
        { href: '/titanium-anode/mmo-anode/', label: 'All MMO Anode Forms' },
      ],
    },
  },
  {
    id: 'manufacturing-quality',
    layout: 'quality',
    afterFaq: true,
    band: 'scroll-mt-24 bg-blue-950 py-20 text-white lg:py-28',
    eyebrow: 'Inside our factory',
    title: 'How the Layer Build, the Handling and the Traceability Are Controlled',
    intro:
      'We control the titanium identity, the surface condition, the layer build and the connection against the approved order basis. The inspection records identify what was checked, the agreed method and the accepted result for the supplied electrode.',
    image: {
      src: '/images/titanium-anode/titanium-substrate-traceability.webp',
      alt: 'Titanium substrate traceability and material records',
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
            title: 'Layer Build',
            body: 'Hold the layer build and the adhesion basis to the agreed production basis, and do not infer the life from the appearance alone.',
          },
          {
            title: 'Handling and Protection',
            body: 'Apply the agreed handling, storage and protection regime to the finished electrode before packing, and record it.',
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

export const pbO2Faq: { q: string; a: string }[] = [
  {
    q: 'Why is a lead dioxide anode still used when the coating wears and releases lead?',
    a: 'Because in a defined set of duties — strongly acidic, oxidising electrolytes — it is still the coating that holds its electrochemistry. The wear is a managed condition, not an uncontrolled one: the wear rate follows from the current density, the acidity and the duty, and the replacement interval and the monitoring follow from it. Where a lead-free coating meets the duty, we say so during the review.',
  },
  {
    q: 'What do we need to provide before you will quote a PbO₂ anode?',
    a: 'The electrolyte and its acidity and temperature, the current density and the duty cycle, how the electrodes are installed, removed, cleaned and stored, the occupational hygiene regime around the cell, the disposal or take-back route available at end of life, and the documentation your own compliance file needs. That is the review; we quote after it, not before it.',
  },
  {
    q: 'How is the coating specified on the order?',
    a: 'As a layer structure — titanium substrate, intermediate layer, lead dioxide working layer — with the lead dioxide loading in g/cm² of the coated area, the active area on the drawing, the masked zones and the connection. The construction is written down, so it is not a matter of assumption later.',
  },
  {
    q: 'Where does the occupational exposure actually come from?',
    a: 'Not from the electrode sitting in the cell. It comes from the wear of the coating during operation, from handling the electrode when it is removed and cleaned, and from the end-of-life route for a coated part. Handling is usually the largest of the three, which is why the removal and cleaning method is treated as a design input rather than an operating detail.',
  },
  {
    q: 'Can spent PbO₂ anodes be recycled?',
    a: 'Yes. Spent coated anodes can be returned for recovery of the coating metal, and the titanium substrate is recoverable in its own right because the coating is a layer on it rather than the material itself. The route, the packaging and the paperwork are defined at the order, so the site always has a route to follow when the first electrode is spent.',
  },
  {
    q: 'How long does a PbO₂ anode last?',
    a: 'It wears, so its life is a wear rate rather than a coverage criterion. We state the estimate against the current density, the acidity, the temperature and the duty, and we state those conditions with it. A bare number without the conditions would be meaningless for this coating in particular.',
  },
  {
    q: 'Can the lead get into our product?',
    a: 'Dissolved lead can enter the electrolyte, so this depends on your loop. Where the electrolyte is a contained recirculating loop, the exposure is managed with a lead balance and a monitoring plan. Where the electrolyte is once-through or the product leaves the site, the exposure route is different and the review has to treat it as such.',
  },
  {
    q: 'Which geometries are available with this coating?',
    a: 'Disc and plate forms, tubular, rod, wire, mesh and ribbon, and canister assemblies, all produced with the layer build, the masking and the connection defined against your drawing.',
  },
  {
    q: 'What documentation accompanies the electrode?',
    a: 'Material certification of the substrate, the coating record, dimensional inspection, the visual record and batch traceability, plus the lead-content documentation your own compliance file requires. The scope is agreed at the order.',
  },
  {
    q: 'Would you recommend a lead-free coating instead?',
    a: 'That is the first question of the review, and the answer depends entirely on the duty. Ruthenium, iridium and platinized systems now cover a number of the applications where PbO₂ was historically used. If one of them meets your duty, that is what we will recommend, with the comparison and the reasoning.',
  },
];
