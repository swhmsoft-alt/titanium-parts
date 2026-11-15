/**
 * Aerospace & advanced engineering.
 *
 * This sector is governed by a customer-approved process rather than by a
 * material name. The failure mechanisms here are metallurgical and
 * manufacturing driven, so the copy below is written around specification
 * control, billet quality, hydrogen content and inspection scope.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const aerospace: SpokeContent = {
  h1: 'Aerospace & Advanced Engineering Titanium Alloy Supply',
  seoTitle: 'Aerospace Titanium Alloy Supply | Titanium Parts',
  metaDescription:
    'Ti-6Al-4V plate, bar, forgings and fasteners to AMS and ASTM specifications with heat traceability, mechanical testing and first-article inspection records.',
  heroLede:
    'Aerospace supply is defined by the governing specification and the revision of the drawing, not by a generic titanium grade name. The alloy, the temper, the billet size, the inspection regime and the approval route all follow the customer-approved process, and a part that meets the chemistry but not the process is rejected. We supply titanium in the mill forms aerospace uses, with full heat and lot traceability, mechanical test results and first-article inspection records issued against the drawing revision that was actually quoted.',
  riskSectionTitle: 'Metallurgical and Process Failure Risks in Aerospace Titanium',
  failureModes: [
    {
      title: 'Hydrogen Embrittlement from Pickling, Plating and Service Environment',
      body: 'Titanium absorbs hydrogen during acid pickling, during chemical milling and during any high-temperature exposure in a hydrogenous atmosphere, and the absorbed hydrogen lowers the fracture toughness of the alloy without changing its appearance or its chemistry. In an alpha-beta alloy such as Ti-6Al-4V the effect is severe, because hydrogen migrates to the beta phase and the material fails at a stress well below its yield strength, with a flat, brittle fracture surface. The aerospace controls are procedural rather than metallurgical: a controlled pickling line with a documented hydrogen limit, a stress-relief or anneal sequence where the specification calls for it, and a hydrogen content figure on the certification rather than a general statement that the material was vacuum treated.',
    },
    {
      title: 'Microstructural Inhomogeneity and Alpha Case Damage',
      body: 'A titanium component does not fail because of a bulk chemistry deviation most of the time. It fails because of the microstructure at the surface or in the heat-affected zone. Alpha case is a brittle, oxygen-enriched surface layer formed when the material is heated in air, typically above 500 degrees, and it is a crack initiation site that resists the shot peening and the machining that are supposed to remove it. The same applies to the coarse alpha colonies in a forged part that did not receive enough deformation, and to the unmelted tungsten electrode inclusions from a fusion weld. The failure control is the process: a controlled atmosphere, a validated heat treatment cycle, and a microstructure requirement in the purchase specification that the supplier has to demonstrate on the actual part.',
    },
    {
      title: 'Fatigue Crack Initiation at Machined and Damaged Surface Features',
      body: 'Aerospace titanium is designed to a fatigue life, and the fatigue life is decided almost entirely at the surface. A machining mark left by a dull tool, a residual tensile stress from machining, a burr, an EDM recast layer, a cleaning scratch or a handling ding all act as crack initiation sites, and in a notched specimen the initiation stress can drop by a factor that the drawing never accounted for. The practical consequence is that the qualification of the part is a joint property of the material and the finishing operation. Burr removal, a defined surface finish, a stress-relief after rough machining, a shot peen specification and a prohibition on unapproved cleaning chemistry are all part of the material supply, and each of them is auditable in the inspection report.',
    },
  ],
  solutionSectionTitle: 'Aerospace-Grade Titanium Supply and Machined Components',
  solutions: [
    {
      title: 'Ti-6Al-4V Plate, Sheet, Bar and Billet to AMS and ASTM',
      body: 'The mill form has to match the process the customer has approved, because a different billet size or a different temper can invalidate a qualification. AMS 4911 covers Ti-6Al-4V sheet and plate, AMS 4928 covers bar, and ASTM B348 covers the equivalent wrought forms. We supply these with an EN 10204 3.1 certificate tied to the heat number, mechanical test results to the specification, and a microstructure statement where the specification requires one. Where the customer process demands a specific billet size, a specific heat treatment and a specific melt route, those are stated on the order basis rather than left to be confirmed after the order is placed.',
      points: [
        'Ti-6Al-4V sheet and plate to AMS 4911, bar and billet to AMS 4928 and ASTM B348',
        'EN 10204 3.1 certification with full heat and lot traceability',
        'Mechanical test results and microstructure statement to the specification',
        'Billet size, temper and heat treatment stated as the order basis',
      ],
      href: assertRoute('/titanium-products/titanium-plate/', 'aerospace solution'),
      hrefLabel: 'Titanium Plate & Sheet',
    },
    {
      title: 'Closed Die Forgings and Precision Machined Parts',
      body: 'Aerospace structural and engine components are frequently specified as forgings, and a forging carries requirements that bar does not: the die impression and the forging ratio, the grain flow, the macro-etch quality and the ultrasonic acceptance class. These are properties of the forging process, not of the material certificate. Where the drawing calls for a machined component, the same logic applies to the finished part: the machining plan, the fixture and the first article inspection record are part of the deliverable, because a titanium part that meets the print but not the drawing tolerance and datum scheme is not an accepted part. We supply both, with the inspection records attached to the shipment rather than issued afterwards.',
      points: [
        'Closed die forgings and ring forgings with macro-etch and ultrasonic records',
        'Machined structural and engine components to the customer drawing revision',
        'First article inspection report with the dimensional record attached',
        'Shot peen, stress relief and surface finish executed to the specification',
      ],
      href: assertRoute('/titanium-products/titanium-forgings/', 'aerospace solution'),
      hrefLabel: 'Titanium Forgings',
    },
    {
      title: 'Aerospace Fasteners and Precision CNC Machining',
      body: 'Fasteners carry the hydrogen risk more than most titanium components, because they are machined from bar, rolled or cut, then pickled, and they are installed under sustained tensile load in a structure that may see moisture. The specification therefore controls the hydrogen content, the surface finish and the lot traceability, and the fastener supplier is expected to hold the process approval rather than only the material approval. For machined parts, the defining parameter is the titanium machining behaviour itself: the low thermal conductivity drives heat into the cutting edge, the springy material causes chatter, and a carbide tool that is not sharp enough will work-harden the surface and leave it prone to cracking. We cut these parts with the tool condition, the coolant and the stress-relief sequence matched to the alloy.',
      points: [
        'Titanium fasteners to the specified grade, diameter, length and drive torque',
        'Hydrogen content reported against the customer limit on the certification',
        'CNC machining with the tool condition and coolant matched to the alloy',
        'Stress relief after rough machining where the drawing requires it',
      ],
      href: assertRoute('/titanium-service/cnc-machining/', 'aerospace solution'),
      hrefLabel: 'CNC Machining Service',
    },
  ],
  matrixSectionTitle: 'Aerospace Application-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Airframe structural plate and sheet',
      medium: 'Ambient to 120 C, airframe environment, sustained tensile and fatigue load',
      risk: 'Alpha case at the surface; fatigue initiation at machining and forming damage',
      recommendation: 'AMS 4911 Ti-6Al-4V with defined surface finish and a heat treatment cycle',
    },
    {
      process: 'Engine compressor and fan components',
      medium: '300-600 C, cyclic load, high-pressure bleed air with moisture',
      risk: 'Hydrogen embrittlement at machined surfaces; creep and microstructural stability',
      recommendation: 'AMS 4928 bar or forging stock with a vacuum anneal and a documented cycle',
    },
    {
      process: 'Fasteners and structural attachments',
      medium: 'Ambient to 150 C, sustained tensile load, assembly and service moisture',
      risk: 'Hydrogen pickup during pickling and rolling; stress corrosion in a warm humid environment',
      recommendation: 'ASTM F468 fastener grade with a hydrogen limit and a full lot traceability',
    },
    {
      process: 'Landing gear and actuation components',
      medium: 'Shock and fatigue loading, hydraulic fluid exposure, temperatures to 200 C',
      risk: 'Fatigue crack growth from surface damage; hydrogen assisted cracking',
      recommendation: 'Forged Ti-6Al-4V with ultrasonic acceptance and a shot peen specification',
    },
    {
      process: 'Heat exchanger and ducting in the airframe',
      medium: 'Hot bleed air 400-700 C, high velocity, cyclic thermal shock',
      risk: 'Oxidation and alpha case growth; creep of thin section',
      recommendation: 'AMS 4944 or a specified heat-resistant titanium with a controlled atmosphere treatment',
    },
    {
      process: 'Chemical milling and surface finishing operations',
      medium: 'Acid pickling and milling baths, 20-90 C, hydrogenous environment',
      risk: 'Hydrogen absorption during pickling; alpha case on the machined surface',
      recommendation: 'Material with a documented hydrogen limit and a controlled post-machining anneal',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Specification, Testing and Inspection Control',
  standards: [
    'AMS 4911 for Ti-6Al-4V sheet and plate used in airframe structures',
    'AMS 4928 for Ti-6Al-4V bar and billet used in machined and fastener components',
    'ASTM B348 for titanium and titanium alloy bar, billet and forging stock',
    'ASTM F468 for titanium and titanium alloy bolts, screws and studs',
    'AMS 2750 for pyrometry and thermal processing control on heat treatment',
    'EN 10204 3.1 material certification with melt-to-part traceability',
    'Ultrasonic and radiographic inspection to the acceptance class named on the drawing',
    'First article inspection report against the drawing revision that was quoted',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Structural bracket assemblies for an airframe subsystem, machined from Ti-6Al-4V bar to a customer drawing revision.',
      spec: 'AMS 4928 bar with an EN 10204 3.1 certificate and mechanical test results, CNC machined with stress relief after rough machining, burr removal verified, and a first article inspection report on the quoted drawing revision.',
      result: 'First article accepted with no deviations raised, and the production lots delivered with the traceability and inspection records required by the customer source approval.',
    },
    {
      duty: 'Engine accessory ring forgings, hot formed and machined, with ultrasonic acceptance on every part.',
      spec: 'Closed die forgings with a defined forging ratio and macro-etch acceptance, machined after the forging cycle and delivered with the ultrasonic report, the macro-etch record and the final dimensional report.',
      result: 'All forgings accepted on first submission at ultrasonic, with the macro-etch showing a continuous grain flow and no lap or fold indication.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Aerospace RFQ',
  rfqInputs: [
    'Governing customer specification, the revision number and the drawing revision quoted',
    'Alloy and temper requirement, and the approved process or source approval route',
    'Product form: plate, sheet, bar, billet, forging, fastener or machined component',
    'Dimensions and tolerances, the datum scheme and the required surface finish',
    'Heat treatment cycle, stress relief or anneal requirement and the atmosphere',
    'Inspection scope: mechanical testing, ultrasonic, radiographic, macro-etch, dimensional',
    'Traceability requirement from melt to delivered part, including the certificate format',
    'Packaging, marking, export documentation and the required delivery schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Aerospace Supply and Quality Engineers',
  faqs: [
    {
      question: 'What is the difference between a Grade 5 titanium and a Ti-6Al-4V aerospace bar?',
      answer: 'They are not comparable in the way a grade number suggests. Grade 5 refers to ELI commercially pure titanium, which has no aluminium or vanadium and is used where corrosion resistance and biocompatibility matter rather than strength. Ti-6Al-4V is an alpha-beta alloy, roughly twice as strong, and it is the material the aerospace specifications actually cover, under AMS 4928 for bar and AMS 4911 for sheet. The point that matters commercially is that a customer-approved process is tied to a specific specification and a specific material, so substituting a grade that happens to meet the mechanical properties is not an acceptable route to a source approval.',
    },
    {
      question: 'How is hydrogen embrittlement controlled in aerospace titanium parts?',
      answer: 'By controlling the process and by documenting the result. Pickling, chemical milling and thermal exposure are the sources, so the specification places a limit on the hydrogen content and often requires a stress relief or anneal afterwards. The documentation is the part that is usually missing: a general statement that the material was vacuum treated is not the same as a hydrogen content figure on the certification, and a customer audit will ask for the number rather than the statement. Where the part is machined, a stress relief after rough machining removes the residual tensile stress that would otherwise combine with the hydrogen.',
    },
    {
      question: 'Why does a titanium forging need a macro-etch and an ultrasonic report?',
      answer: 'Because a forging has failure modes that a material certificate cannot show. The macro-etch reveals the grain flow, and it will show a lap, a fold, a cold shut or a die mismatch that would become a crack under fatigue loading. The ultrasonic report detects internal flaws that the surface inspection cannot reach, and it is the reason a forging is accepted or rejected at the forging stage rather than after machining has removed the evidence. Both records therefore travel with the part, and both are part of the acceptance criteria on the customer drawing rather than a supplier preference.',
    },
    {
      question: 'What does a first article inspection actually confirm in an aerospace supply?',
      answer: 'It confirms that the process produces a conforming part, not only that this part happens to conform. The dimensional report proves the drawing is achievable with the stated process and the stated datums, the material records prove the correct alloy and heat reached the part, and the records of the operations, from heat treatment to final inspection, prove they are repeatable. This is why the first article is expensive and why it is done once, at the start of a production run, against the drawing revision that was actually quoted. A change of drawing revision or of process invalidates it.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-products/', 'aerospace related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Mill forms and machined components for aerospace structures and engines.',
    },
    {
      href: assertRoute('/titanium-products/titanium-bolts/', 'aerospace related link'),
      label: 'Titanium Fasteners',
      note: 'Fasteners to the specified grade, diameter, length and hydrogen limit.',
    },
    {
      href: assertRoute('/titanium-service/material-testing-certificate/', 'aerospace related link'),
      label: 'Material Testing & Certificates',
      note: 'Mechanical testing, hydrogen content and certification scope.',
    },
    {
      href: assertRoute('/industries/', 'aerospace related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
