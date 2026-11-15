/**
 * Cathodic protection & infrastructure.
 *
 * This sector is governed by the protection criterion and the anode bed
 * geometry, not by the anode dimension. The failure modes below are
 * written around the electrochemical behaviour of the coating, the
 * geometry of current distribution and the electrical continuity of the
 * installation.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const cathodicProtection: SpokeContent = {
  h1: 'Cathodic Protection MMO Anodes and Monitoring Electrodes',
  seoTitle: 'Cathodic Protection MMO Anodes | Titanium Parts',
  metaDescription:
    'MMO linear, ribbon, tubular and disc titanium anodes for impressed current cathodic protection, designed from the protection criterion, design current and anode bed geometry.',
  heroLede:
    'Cathodic protection supply starts from the protection criterion and the anode bed geometry, not from an anode dimension. Whether the coating survives, whether the current reaches the structure and whether the coating is consumed evenly are all decided by the relationship between the anode geometry, the soil resistivity and the current density on the surface. We supply MMO titanium anodes in the geometry that the bed requires, with the substrate, the coating and the connection detail confirmed before production and verified on the delivered surface.',
  riskSectionTitle: 'Coating, Current Distribution and Continuity Failure Risks in Cathodic Protection',
  failureModes: [
    {
      title: 'Coating Passivation and Loss of Driving Voltage',
      body: 'A mixed metal oxide anode does not fail by dissolving; it fails by passivating. Once the surface has been polarised to the operating potential, the oxide layer can grow to a condition where the current collapses, and the anode continues to sit in the ground looking perfectly intact. The trigger is usually a combination of a low driving voltage from a long cable run, an electrolyte chemistry that is not alkaline enough, and a current density that is too low for the coating system. The symptom on the structure is a slow drift of the potential towards the unprotected condition, and because the anode itself shows no visible damage, the failure is diagnosed from the potential survey rather than from the anode. This is why the coating system has to be matched to the electrolyte and the design current rather than chosen from a price list.',
    },
    {
      title: 'Non-Uniform Current Distribution and Undermining of the Coating',
      body: 'Anode geometry that does not match the structure produces a current distribution that concentrates on the nearest point, and the consequence is a locally very high current density with a very low one elsewhere. The over-driven area consumes the coating years early, often leaving the anode looking worn at one end and unused at the other, and the coating on the structure in the high-current zone is undermined and detaches in sheets. The under-driven zone never reaches the protection potential at all. This is the reason that a remote anode bed designed for one structure is frequently unsuitable for another, and the reason that the anode length, the spacing and the number of beds are calculated against the resistance of the soil and the geometry of the protected surface rather than against the amount of metal required.',
    },
    {
      title: 'Electrical Continuity Loss at the Cable Termination',
      body: 'The most common cause of a failed anode bed is not the anode at all. It is the termination: the cable-to-anode connection, the crimp, the epoxy encapsulation and the point where the cable enters the electrolyte. These joints are made in the field, in wet soil, often by a crew working to a cable schedule rather than to a termination procedure. A high-resistance joint does not announce itself; it simply reduces the current the bed can deliver, and the structure drifts out of protection while the anode in the ground appears normal and its coating is intact. The defences are procedural: a defined termination and encapsulation method, a resistance or continuity measurement on every anode before backfill, and a recorded as-built measurement of the cable length and route.',
    },
  ],
  solutionSectionTitle: 'Engineered Anode Systems for Cathodic Protection',
  solutions: [
    {
      title: 'MMO Coated Linear and Ribbon Anodes for Pipelines',
      body: 'Linear and ribbon anodes are the standard for buried pipelines because the current has to travel along the length of the structure, and a distributed anode bed delivers the protection where it is needed rather than from a single point. The ribbon form is used where the soil resistivity is low or the trench is narrow, because it can be installed in a narrow backfill column, and the linear form is used where a larger surface area per metre is required. The design parameters are the coating type and holiday size on the pipeline, the soil resistivity, the target potential, the design current and the intended life. The anode substrate is Grade 2 titanium and the coating is a mixed metal oxide applied in a graded layer structure, with the loading specified in g/m2 and verified on the delivered surface.',
      points: [
        'Linear and ribbon anodes in Grade 2 titanium substrate',
        'Coating loading specified in g/m2 and verified by XRF on the delivered surface',
        'Anode length, spacing and number of beds calculated against soil resistivity',
        'Connection detail, cable length and encapsulation method stated on the order basis',
      ],
      href: assertRoute('/titanium-anode/mmo-anode/mmo-linear-anode/', 'cathodic protection solution'),
      hrefLabel: 'MMO Linear Anodes',
    },
    {
      title: 'Tubular, Rod and Disc Anodes for Structures and Tanks',
      body: 'Offshore structures, storage tanks and immersed plant need a geometry that surrounds the protected surface rather than a row of discrete anodes, because the structure is not a line and the current does not propagate along it in a uniform field. A tubular anode can be placed around a jacket leg or a diverter, giving a near-uniform field at the surface; a rod anode suits a confined space such as a tank bottom; and a disc anode suits a small local area. The same coating principle applies, but the current density has to be calculated against the surface area of the structure and the available driving voltage from the rectifier, and the anode mass has to be matched to the intended life at that current.',
      points: [
        'Tubular, rod and disc geometries for tanks, offshore structures and immersed plant',
        'Anode mass and surface area matched to the design current and the intended life',
        'Coating loading and substrate grade confirmed against the electrolyte',
        'Resistance or continuity measurement on every anode before shipment',
      ],
      href: assertRoute('/titanium-anode/mmo-anode/mmo-tubular-anode/', 'cathodic protection solution'),
      hrefLabel: 'MMO Tubular Anodes',
    },
    {
      title: 'Reference Electrodes and Potential Monitoring',
      body: 'The reference electrode is the instrument that tells the operator whether the protection is actually working, and it is usually the least specified item in the system. An electrode is a potential reference against which the structure potential is measured, and it drifts, it ages and it is damaged by handling and by the environment. The consequence of a bad reference is a false reading, which either triggers a needless anode replacement or hides a real loss of protection. The selection is a matter of the electrolyte and the installation: a permanent reference for a controlled environment, a high-temperature reference where the electrolyte runs hot, and a portable reference for the survey itself. The requirement that matters is that the calibration record travels with the electrode.',
      points: [
        'Reference electrodes selected for the electrolyte, temperature and installation method',
        'Calibration record issued with every electrode supplied',
        'Reference and monitoring electrodes available in the same supply scope as the anodes',
        'Type-specific electrolyte requirements stated on the order basis',
      ],
      href: assertRoute('/cathodic-protection/reference-electrodes/', 'cathodic protection solution'),
      hrefLabel: 'Reference Electrodes',
    },
  ],
  matrixSectionTitle: 'Cathodic Protection Application-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Buried cross-country pipeline with external coating',
      medium: 'Native soil, resistivity 1000-10000 ohm-cm, cathodic polarisation',
      risk: 'Coating passivation at low driving voltage; current shorting to a foreign structure',
      recommendation: 'MMO linear or ribbon anodes with loading verified, spaced against the calculated attenuation',
    },
    {
      process: 'Pipeline with a poor or damaged external coating',
      medium: 'Soil with high chloride content, bare steel at holiday sites',
      risk: 'Local current concentration at coating holidays; rapid undermining of the coating',
      recommendation: 'Higher loading MMO coating with closer anode spacing across the holiday zone',
    },
    {
      process: 'Above-ground or tank bottom storage',
      medium: 'Sand or soil beneath the tank, high temperature at the bottom plate',
      risk: 'Anode shielding by the tank wall; passivation at low electrolyte temperature',
      recommendation: 'High-temperature reference and rod anodes placed in the tank bottom sand bed',
    },
    {
      process: 'Offshore platform and subsea structure',
      medium: 'Seawater, conductive, low resistance, strong electrolyte support',
      risk: 'Shielding of the anode by the structure; galvanic interaction with dissimilar metals',
      recommendation: 'Tubular anodes around the protected member with a controlled potential window',
    },
    {
      process: 'Water tank and potable water storage',
      medium: 'Potable water at ambient temperature, low conductivity',
      risk: 'Low driving voltage from resistive water; coating passivation without alkalinity',
      recommendation: 'Platinised titanium anodes with the higher driving voltage of the two systems',
    },
    {
      process: 'Heat exchanger and condenser housings',
      medium: 'Cooling water with chlorides and treatment chemicals, varying temperature',
      risk: 'Localised attack where the anodes are not distributed; interference from stray currents',
      recommendation: 'Small disc or rod anodes distributed against the measured current demand',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Coating, Substrate and Installation Quality Control',
  standards: [
    'ASTM B348 for the titanium bar and tube used as the anode substrate',
    'EN 10204 3.1 material certification with heat and lot traceability on the substrate',
    'XRF surface elemental composition on every coated anode, reported as precious metal loading in g/m2',
    'Coating thickness and adhesion check on the as-delivered anode surface',
    'Electrical continuity or resistance measurement on every anode before shipment',
    'Dimension and geometry inspection of the anode against the anode bed design',
    'Installation records, cable lengths and as-built resistance values against the design',
    'Certificate issued stating the coating system, the loading and the substrate grade',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Anode bed for a buried pipeline crossing mixed ground with resistivity from 800 to 6000 ohm-cm, designed for a 25 year life.',
      spec: 'MMO coated titanium ribbon anodes on a Grade 2 substrate at a loading specified against the design current, with the spacing calculated across the resistivity gradient, delivered with XRF loading verification and a continuity measurement on every element.',
      result: 'Delivered with full XRF and continuity records, and the as-built survey after installation showing the structure potential held within the specified window across the whole crossing in the first season.',
    },
    {
      duty: 'Anode system for an offshore jacket leg in seawater, with a platinised titanium reference electrode for potential monitoring.',
      spec: 'Tubular MMO anodes sized against the structure surface and the available driving voltage, with sealed cable connections, supplied with the reference electrode and its calibration record.',
      result: 'Installed without connection defects, and the reference electrode readings consistent with the portable survey instrument at every comparison point during commissioning.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Cathodic Protection RFQ',
  rfqInputs: [
    'Structure type, material, coating and the geometry that defines the anode bed',
    'Protection criterion or target potential and the reference electrode used',
    'Soil or electrolyte resistivity and the temperature range',
    'Design current and the intended service life of the anode bed',
    'Anode geometry required: linear, ribbon, tubular, rod, disc or canister',
    'Available driving voltage from the rectifier and the cable route length',
    'Coating system requirement and the loading metric with units and measurement method',
    'Installation, backfill and termination requirements, and the as-built documentation scope',
  ],
  faqSectionTitle: 'Technical FAQs for Cathodic Protection Design and Installation Engineers',
  faqs: [
    {
      question: 'How is the required coating loading on an MMO anode calculated?',
      answer: 'From the current the anode has to deliver, the surface area available to deliver it and the intended life, with a margin applied. The loading is expressed in grams of precious metal per square metre, and the metal that matters is the one in the coating, because the coating is what carries the current and it is the coating that is consumed. A higher loading buys more life at a given current density, but the relationship is not linear, because a thicker coating changes the polarisation behaviour and can make the anode harder to start. In practice the loading is specified from the design current, the geometry and the electrolyte, and it is verified on the delivered surface by XRF.',
    },
    {
      question: 'Why does an anode look perfect after it has stopped protecting the structure?',
      answer: 'Because the failure is electrochemical rather than mechanical. A passivated or consumed MMO coating has no visible symptom, and the anode stays in the ground intact and well connected. The evidence that it has failed is on the structure: the potential drifts back towards the unprotected condition and the coating on the pipe begins to corrode. This is why the periodic potential survey is the primary diagnostic in cathodic protection, and why an anode bed cannot be accepted on the basis of an installation check alone. It also means that an anode in a bed of identical anodes can fail independently, which is another argument for the as-built documentation of every element.',
    },
    {
      question: 'What causes coating holidays to undermine faster than expected?',
      answer: 'The current concentrates at the holiday because it is the only place where the coating is absent, so the local current density at that point is many times the design figure. The steel at the holiday corrodes, the corrosion products lift the surrounding coating, and the exposed area grows. The anode does not see this as a failure, because the anode is still delivering the current it was designed to deliver; it is the coating that was not designed for a concentrated current. The countermeasures are a coating design for the holiday size actually present on the pipeline, an anode spacing that limits the attenuation across the holiday zone, and a survey method that looks for the holiday rather than only for the average potential.',
    },
    {
      question: 'When is a platinised titanium anode the right choice instead of MMO?',
      answer: 'When the driving voltage is the limiting factor. A platinised titanium anode operates at a low, stable polarisation, so it delivers a high current at a low cell voltage, which matters where the cable run is long, the electrolyte resistance is high or the available rectifier voltage is limited. MMO anodes carry a higher and less stable operating potential but are available in geometries and with loadings that suit distributed beds and lower-current duty. The decision is therefore an electrical one, made against the available driving voltage and the required design current, and it is not a comparison of coating quality.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-anode/', 'cathodic protection related link'),
      label: 'Electrochemical Anodes',
      note: 'The full anode range, including the coated and platinised families.',
    },
    {
      href: assertRoute('/titanium-anode/coating-systems/', 'cathodic protection related link'),
      label: 'Coating Systems',
      note: 'The mixed metal oxide families and their loading metrics.',
    },
    {
      href: assertRoute('/titanium-anode/mmo-anode/', 'cathodic protection related link'),
      label: 'MMO Anodes',
      note: 'Coating systems and geometry families used in protection beds.',
    },
    {
      href: assertRoute('/industries/', 'cathodic protection related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
