/**
 * Medical & bioprocessing.
 *
 * The material certificate does not close a medical requirement. Surface
 * condition, cleaning, packaging, sterilisation compatibility and
 * biocompatibility evidence sit alongside the alloy specification, and the
 * failure modes below are written around those, not around corrosion in a
 * generic sense.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const medical: SpokeContent = {
  h1: 'Medical & Bioprocessing Titanium Components and Materials',
  seoTitle: 'Medical Titanium Components & Materials | Titanium Parts',
  metaDescription:
    'Grade 23 ELI plate, bar, wire, balls and formed components for implant and bioprocess use with surface condition, cleaning, packaging and traceability evidence.',
  heroLede:
    'Medical titanium is specified as an implant or a device material, which means the alloy designation is only the first line of the requirement. The surface condition, the cleaning route, the packaging, the sterilisation compatibility and the biocompatibility evidence sit alongside the certificate, and a part that meets the chemistry but not the surface and packaging specification is not an acceptable part. We supply Grade 23 ELI mill forms and precision components with the surface and cleanliness records stated on the order basis.',
  riskSectionTitle: 'Material, Surface and Contamination Failure Risks in Medical and Bioprocess',
  failureModes: [
    {
      title: 'Surface Contamination and Particulate Release',
      body: 'A titanium implant that is chemically correct but carries a contaminated surface is a clinical risk, and the risk is invisible to the eye. The mechanisms are specific: iron particles transferred from carbon steel tooling or from a shared work surface, machining coolant residue, grinding swarf, and the residue of a cleaning chemistry that was not compatible with the passivation film. Each of these leaves a surface that can either release particulate or corrode in service, and once the part is passivated it is difficult to prove which mechanism was responsible. The control is therefore procedural and documented: dedicated tooling for medical grade, defined cleaning chemistry, a validated passivation route, and a cleanliness and packaging record that travels with the batch.',
    },
    {
      title: 'Fatigue and Stress Corrosion Cracking from Residual Forming Stress',
      body: 'Many medical titanium components are formed rather than machined: drawn tube, a deep drawn cup, a stamped diaphragm. Forming leaves residual stress in the part, and that stress acts on the finished geometry in a way the designer rarely intended. Under cyclic loading it reduces the fatigue strength, and in a warm, humid or saline environment it can combine with the residual stress to produce stress corrosion cracking, which is the mechanism behind a large share of in-service fracture reports for stainless and titanium surgical implants. The mitigations are well established but must be specified: a stress relief anneal after forming, a defined minimum bend radius, a surface finish that does not introduce new stress raisers, and a proof test where the design supports it.',
    },
    {
      title: 'Biocompatibility and Sterilisation Compatibility Failures',
      body: 'The alloy is only one part of the biocompatibility argument, and a change of process can invalidate it even when the material is unchanged. A residual machining oil, a passivation bath chemistry that leaves a fluoride or an aluminium trace, a packaging that off-gasses, or a cleaning agent that is not validated for the intended sterilisation route can each create a problem at the point of use. Steam autoclaving, gamma irradiation and ethylene oxide each have their own constraints: autoclaving demands that the polymer components and the surface finish can take the cycle, gamma irradiation can degrade some polymers and affects the dose validation, and ethylene oxide leaves residuals that require a defined aeration period. The right way to handle this is to state the sterilisation route and the packaging requirement at the enquiry stage, not at the delivery stage.',
    },
  ],
  solutionSectionTitle: 'Medical-Grade Titanium Supply and Precision Components',
  solutions: [
    {
      title: 'Grade 23 ELI Plate, Sheet, Bar and Wire',
      body: 'Grade 23 ELI is the standard material for implantable titanium components because it combines the corrosion resistance of commercially pure titanium with an ELI chemistry that leaves no interstitial gaps and no nickel, which matters for nickel sensitivity and for the regulatory file. The specification covers the plate, the sheet, the bar and the wire, and the material has to be supplied with a full melt-to-part traceability and the surface condition stated on the certificate. Beyond the certificate, the questions that decide whether the order is workable are the surface finish required on the delivered form, the cleaning route, the packaging and the sterilisation route, because those are properties of the delivery rather than of the billet.',
      points: [
        'Grade 23 ELI plate, sheet, bar and wire with full melt-to-part traceability',
        'EN 10204 3.1 certificate with the interstitial and chemistry detail stated',
        'Surface condition, cleanliness and packaging defined on the order basis',
        'Sterilisation route confirmed before the material is cut or drawn',
      ],
      href: assertRoute('/titanium-products/titanium-wire/', 'medical solution'),
      hrefLabel: 'Titanium Wire & Precision Forms',
    },
    {
      title: 'Precision Balls, Spheres and Formed Components',
      body: 'Precision titanium balls and spheres are used in orthopaedic and instrument applications where the surface of the ball is the working surface and therefore the whole of the requirement. The controlling parameters are diameter tolerance, sphericity, surface roughness and the absence of defects on the surface that will be in contact with tissue. A ball that meets diameter and sphericity but carries a single grinding mark is rejected, because the fatigue and wear behaviour of the surface depends on the surface being unbroken. Formed components such as deep drawn cups and welded diaphragms follow the same logic: the forming route, the stress relief and the surface finish are part of the deliverable, and the part is inspected after forming rather than before.',
      points: [
        'Precision balls and spheres with diameter, sphericity and roughness to the drawing',
        'Surface inspected for grinding marks, pits and handling damage before packing',
        'Deep drawn and formed components with the stress relief route documented',
        'Cleanroom-style handling and individually sealed packaging on request',
      ],
      href: assertRoute('/titanium-products/titanium-balls/', 'medical solution'),
      hrefLabel: 'Titanium Balls & Spheres',
    },
    {
      title: 'Bioprocess Weldments, Mesh and Surface Treatment',
      body: 'In bioprocessing the titanium is usually part of a vessel, a filter or a heat exchanger that has to be cleaned, sanitised and sterilised repeatedly, and it usually has to be welded and then passivated. The welding has to be performed so that the interior surface remains passivatable, which means the oxide layer, the heat tint and the pickling residue have to be removable without attacking the parent metal, and the passivation cycle has to be validated on the assembly rather than on a coupon. Mesh and woven elements appear in filter and catalyst supports, where the surface condition matters for the filtration performance and for the release of any residual metal.',
      points: [
        'Orbital welded assemblies with the interior surface left in a passivatable condition',
        'Validated passivation and cleaning cycle applied to the finished assembly',
        'Woven and knitted mesh supplied with the surface condition stated',
        'Assemblies pressure tested and documented before release',
      ],
      href: assertRoute('/titanium-service/surface-treatment-finishing/', 'medical solution'),
      hrefLabel: 'Surface Treatment & Finishing',
    },
  ],
  matrixSectionTitle: 'Medical and Bioprocess Application-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Orthopaedic implant stems and fixation components',
      medium: 'Physiological saline and body fluid at 37 C, cyclic load, 10+ years in service',
      risk: 'Fatigue from forming and machining stress; crevice corrosion at modular junctions',
      recommendation: 'Grade 23 ELI with a stress-relieved formed condition and a defined surface finish',
    },
    {
      process: 'Surgical instruments and instrument components',
      medium: 'Repeated steam autoclave cycles at 134 C, body contact, mechanical wear',
      risk: 'Surface degradation and repassivation loss; crevice corrosion at joints',
      recommendation: 'Grade 23 ELI with a validated autoclave-compatible passivation route',
    },
    {
      process: 'Implantable dental and small precision components',
      medium: 'Oral environment with chlorides and fluctuating temperature, mastication load',
      risk: 'Fretting and wear at mating surfaces; stress corrosion in a warm chloride environment',
      recommendation: 'Grade 23 ELI with a polished or coated surface as the application requires',
    },
    {
      process: 'Bioprocess vessel, filter and heat exchanger fabrication',
      medium: 'Pharmaceutical process media, CIP and SIP cycles, 121-134 C steam',
      risk: 'Iron or chemical contamination from fabrication; incomplete passivation in welds',
      recommendation: 'Grade 2 with a validated post-weld passivation cycle and a cleaning certificate',
    },
    {
      process: 'Fluid handling and transfer in clean process lines',
      medium: 'High-purity water and process streams with low ionic contamination limits',
      risk: 'Particle shedding from a rough or damaged surface; metal ion release',
      recommendation: 'Grade 2 with an electropolished or controlled internal finish and sealed packaging',
    },
    {
      process: 'Catheter and guidewire component manufacture',
      medium: 'Body contact with flexible polymer overcoats, high flex fatigue cycles',
      risk: 'Fatigue of the metal core from the forming process; adhesion failure at the coating interface',
      recommendation: 'Grade 23 ELI wire with a controlled diameter, temper and surface finish',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Material, Surface and Documentation Control',
  standards: [
    'ASTM F136 for wrought Ti-6Al-4V ELI alloy used in surgical implants',
    'ASTM F348 for titanium and titanium alloy bar, sheet and plate for medical applications',
    'EN 10204 3.1 or 3.2 material certification with melt-to-part traceability',
    'Surface roughness measurement recorded against the specified finish on every batch',
    'Validated passivation and cleaning route with the certificate issued per batch',
    'Packaging, sealing and sterilisation compatibility confirmed against the stated route',
    'Dimensional inspection against the drawing, with sphericity and roundness where applicable',
    'Biocompatibility and surface treatment evidence supplied as specified by the customer',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Precision titanium balls for an orthopaedic instrument, used as an articulation element in a saline environment at 37 C.',
      spec: 'Grade 23 ELI balls supplied to the drawing with the sphericity and roughness recorded per batch, individually cleaned and sealed, and delivered with the melt-to-part traceability and the dimensional report.',
      result: 'Accepted with no dimensional deviations, and the delivered surface confirmed free of grinding marks and handling damage at incoming inspection.',
    },
    {
      duty: 'Bioprocess filter housing and support mesh for a pharmaceutical skid, subject to CIP and steam sanitisation.',
      spec: 'Grade 2 titanium housing with an orbital welded internal surface, a validated post-weld passivation cycle with the cleaning certificate issued per batch, and woven support mesh with the surface condition stated.',
      result: 'Accepted for the sanitisation cycle without repassivation failure at the welds, and no metal ion or particulate release reported from the finished assembly.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Medical and Bioprocess RFQ',
  rfqInputs: [
    'Application class: implantable, surgical instrument, bioprocess equipment or laboratory',
    'Alloy and grade requirement, and whether ELI is mandatory',
    'Product form and dimensions, with the tolerance and datum scheme',
    'Surface finish, roughness limit and the surface treatment route required',
    'Cleaning, passivation and packaging requirement for the delivered part',
    'Sterilisation route in use and the packaging compatibility requirement',
    'Biocompatibility or surface treatment evidence the customer must receive',
    'Traceability level, certificate format, delivery destination and the schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Medical Device and Bioprocess Engineers',
  faqs: [
    {
      question: 'Why is Grade 23 ELI preferred over Grade 2 for implant components?',
      answer: 'Grade 23 ELI is Ti-6Al-4V with extra-low interstitial content, and it was written into the implant standards specifically to close two gaps. The first is ductility: the ELI chemistry leaves more room for the material to be formed into the complex shapes an implant needs without losing toughness. The second is nickel: Grade 23 contains no nickel, which matters for patients with a nickel sensitivity. Grade 2 remains correct for bioprocess equipment where corrosion resistance and cleanability decide the outcome and the part never sees a stress in the body. The distinction is not a preference, it is a regulatory and metallurgical one.',
    },
    {
      question: 'What does a medical titanium surface specification actually require?',
      answer: 'It requires the surface to be chemically uniform, free of contaminants and free of defects, and it requires that this can be demonstrated rather than assumed. In practice that means a defined roughness limit, a passivation route validated for the alloy, cleaning chemistry that is compatible with the passivation film, and a packaging system that will not recontaminate the part between the cleanroom and the point of use. The material certificate cannot carry this, because the certificate describes the metal and not the delivered surface. The evidence comes from the cleaning and passivation records and from the packaging specification.',
    },
    {
      question: 'How is sterilisation compatibility confirmed for a titanium component?',
      answer: 'By confirming the route at the enquiry stage and validating the whole assembly, not only the metal. Steam autoclaving is the simplest route for a fully metallic part because titanium tolerates the temperature and the cycle, but it constrains any polymer and it requires that the passivation survives repeated cycles. Ethylene oxide requires a defined aeration period and a residual limit. Gamma irradiation requires a dose validation and affects some polymers. Where the part is part of an assembly, the validation has to be run on the assembly, because the failure that matters is often at the interface between the titanium and the polymer rather than on the titanium itself.',
    },
    {
      question: 'Why do deep drawn medical titanium components need a stress relief anneal?',
      answer: 'Because the forming process leaves residual tensile stress in the part, and that stress sits alongside the service load rather than replacing it. Under cyclic loading it reduces the fatigue margin, and in a warm chloride environment it can open a stress corrosion crack. The anneal removes the residual stress before the part is finished, which restores the design intent for the fatigue life. Where the component is annealed, the passivation has to follow it, because the anneal leaves a fresh oxide that will otherwise be the site that corrodes first.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-products/', 'medical related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Mill forms, formed components and precision parts for medical duty.',
    },
    {
      href: assertRoute('/titanium-products/titanium-diaphragm/', 'medical related link'),
      label: 'Titanium Diaphragms',
      note: 'Formed thin-wall components with the forming and stress relief route documented.',
    },
    {
      href: assertRoute('/titanium-service/material-testing-certificate/', 'medical related link'),
      label: 'Material Testing & Certificates',
      note: 'Certification, surface roughness and inspection records per batch.',
    },
    {
      href: assertRoute('/industries/', 'medical related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
