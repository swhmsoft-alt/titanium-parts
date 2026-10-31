export interface FAQ {
  question: string;
  answer: string;
}

export const homeFAQs: FAQ[] = [
  {
    question: 'What product families does Titanium Parts supply?',
    answer: 'Titanium Parts supplies titanium mill products, custom-machined titanium parts, MMO and platinized titanium anodes, cathodic protection anodes, water treatment electrochemical systems, anti-fouling systems, and PEM electrolyzer stacks and systems.',
  },
  {
    question: 'Can Titanium Parts match an installed or replacement component?',
    answer: 'Replacement requirements can be reviewed from existing drawings, measured dimensions, photographs and service information. The project should identify the interfaces that must remain interchangeable, including geometry, mounting, electrical connection, cable, sealing and installation constraints.',
  },
  {
    question: 'Can third-party inspection or FAT be included?',
    answer: 'Third-party inspection, witness points and FAT can be reviewed when they are defined before order release. The quotation should identify the applicable procedure, inspection stage, acceptance criteria, witness responsibility, report format and any schedule or commercial impact.',
  },
  {
    question: 'What remains the responsibility of the buyer or system integrator?',
    answer: 'The project team remains responsible for confirming the application basis, site conditions, system interfaces, regulatory requirements and final approval unless a responsibility is expressly included in Titanium Parts\'s quotation. Titanium Parts is responsible for the confirmed manufacturing, inspection, documentation and delivery scope stated in the order.',
  },
  {
    question: 'What should be included in the first RFQ?',
    answer: 'Send the product or application, available drawings or dimensions, material or coating requirement, operating conditions, quantity, destination, required documents and expected schedule. A complete specification is not required for the first review; unknown items can be identified during technical communication.',
  },
];

export const titaniumFAQs: FAQ[] = [
  {
    question: 'How is a titanium grade selected?',
    answer: 'Grade selection should be reviewed against the actual media, concentration, temperature, pressure, mechanical duty, fabrication route and governing design requirements. The grade name alone is not enough.',
  },
  {
    question: 'Can standard mill products be cut or processed to drawing?',
    answer: 'Cutting, sizing, machining, forming, welding and finishing can be reviewed according to the product form, grade, dimensions, tolerance, quantity and acceptance requirements.',
  },
  {
    question: 'Are stock, MOQ and lead time fixed for every titanium product?',
    answer: 'No. They vary with grade, form, dimensions, condition, quantity, processing, testing and current material availability. They should be confirmed in the quotation.',
  },
  {
    question: 'Which documents can be supplied with an order?',
    answer: 'Depending on the confirmed order scope, documents may include an MTC, heat or lot traceability, dimensional records, specified test reports, packing list and marking records. Required documents should be agreed before order placement.',
  },
  {
    question: 'Does a material certificate prove fitness for the final application?',
    answer: 'No. It supports material conformity to the stated order basis. Final design suitability, code compliance, component qualification and application approval remain separate responsibilities unless explicitly included in the contract.',
  },
];

export const anodeFAQs: FAQ[] = [
  {
    question: 'What is the difference between MMO and other coatings?',
    answer: 'MMO (Mixed Metal Oxide) coatings provide a stable, low-consumption surface for oxygen or chlorine evolution. Platinum coatings offer a different electrochemical profile. The choice depends on the reaction, electrolyte and operating conditions.',
  },
  {
    question: 'Does loading equal the same value as coating thickness?',
    answer: 'No. Thickness, total or precious-metal loading, application mass and surface elemental composition measured by XRF are different characteristics. The order should define the metric, units, method, locations, sampling and acceptance criteria.',
  },
  {
    question: 'Can anode lifetime be guaranteed from coating loading alone?',
    answer: 'No. Service life depends on the reaction, electrolyte and impurities, pH, temperature, current-density basis, voltage and polarity, mass transfer, shutdowns, connection, substrate and coating quality, cleaning and operating control.',
  },
  {
    question: 'Can Titanium Parts guarantee complete cell or system performance from the anode specification alone?',
    answer: 'No. Electrode spacing, cathode condition, electrolyte management, hydraulics, power supply, controls, installation and operating practice also affect system performance. The quotation and order should define the responsibility boundary.',
  },
  {
    question: 'Can a used titanium anode always be recoated?',
    answer: 'No. Recoating requires inspection of substrate thickness, distortion, cracks, welds, connection, contamination, prior coating removal and dimensional suitability. Reuse or replacement criteria must be agreed before recoating.',
  },
];
