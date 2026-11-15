/**
 * Electroplating & surface finishing.
 *
 * The anode in a plating line is the part that sets the current
 * distribution and it is also the part that contaminates the bath when it
 * dissolves. The failure modes below are written around bath chemistry,
 * anode-to-workpiece geometry and the contact design.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const electroplating: SpokeContent = {
  h1: 'Electroplating & Surface Finishing Titanium Anodes and Baskets',
  seoTitle: 'Electroplating Titanium Anodes & Baskets | Titanium Parts',
  metaDescription:
    'Platinised and MMO titanium anodes, cathode baskets and racks for plating lines, selected against bath chemistry, current density and anode-to-workpiece geometry.',
  heroLede:
    'Plating anodes have to hold a stable current density without shedding into the bath. Substrate grade, geometry, coating type and contact design are chosen together, because the anode is only one part of the cell and the bath quality is decided as much by what leaves the anode as by what is deposited on the part. We supply platinised and mixed metal oxide titanium anodes, cathode baskets and the racks that hold the work, selected against the bath chemistry and the current density the line actually runs at.',
  riskSectionTitle: 'Bath Contamination and Current Distribution Risks in Electroplating',
  failureModes: [
    {
      title: 'Anode Dissolution and Metal Contamination of the Bath',
      body: 'In a plating bath the anode is the source of the metal ion, and the whole cell is balanced on the assumption that the anode dissolves at the same rate the workpiece consumes. When that balance breaks, the bath contaminates and the deposit changes. The common causes are a coating that has thinned and begun to dissolve non-uniformly, a connection point where the metal has dissolved and left a crevice that traps sludge, and an anode in a bath whose chemistry has drifted. The symptom is usually not a visible failure of the anode. It is a reject rate in the plating line and a chemistry analysis showing metals that should not be there, which is why the diagnosis so often starts at the bath rather than at the anode, and why the anode supply has to specify the bath it is intended for.',
    },
    {
      title: 'Passivation of the Anode and Collapse of the Cell Voltage',
      body: 'A platinised or mixed metal oxide anode in a plating bath can become passivated, particularly in the chemistries that are strongly oxidising or that contain the species that block the catalytic surface. As the coating passes into a non-dissolving state, the effective anode area falls, the current distribution across the line becomes uneven, and the cell voltage rises to hold the required production current. The line compensates by raising the voltage, which increases the ohmic heating in the bath and starts to change the deposit, and the operator sees a drift in current density and a change in the deposit quality long before the anode is visibly consumed. The controls that work are the coating system matched to the bath chemistry, a defined current density limit on the anode surface, and monitoring of the cell voltage as a leading indicator rather than only of the deposit.',
    },
    {
      title: 'Poor Current Distribution from Anode Geometry and Spacing',
      body: 'The plating tank is a three-dimensional current field, and the anode arrangement determines what the part actually sees. Anodes that are too close to the workpiece produce a high local current density that burns at the edge of the part and leaves the centre thin; anodes that are too far apart or too small in area produce the opposite problem, a low average density and a deposit that will not meet the specification in the shadowed areas. The geometry interacts with the part shape in a way that is not intuitive, and the same anode arrangement that suits a flat panel will not suit a deep box or a complex component. The practical requirement is that the anode area, the spacing and the number of anodes are calculated against the actual part and the actual current density, and that the anode is sized to the full surface rather than to the projected area.',
    },
  ],
  solutionSectionTitle: 'Anodes, Baskets and Racks for Plating Lines',
  solutions: [
    {
      title: 'Platinised Titanium Anodes for Decorative and Functional Plating',
      body: 'A platinised titanium anode is the inert form: the platinum layer does not dissolve, so the only metal entering the bath is the metal being deposited. This makes it the right answer for decorative lines where bath purity is the constraint, for precious metal plating where the bath cannot tolerate a foreign metal at any concentration, and for any line where the anode must be run at a current density that would dissolve a soluble anode. The platinum loading is specified in g/m2 and verified on the delivered surface, and the substrate grade and the surface preparation between the titanium and the platinum layer determine whether the coating adheres and whether the anode survives the line.',
      points: [
        'Platinised titanium anodes with the loading specified in g/m2 and verified by XRF',
        'Substrate grade and surface preparation confirmed for coating adhesion',
        'Anodes sized to the full wetted surface rather than the projected area',
        'Contact and busbar design matched to the current the line delivers',
      ],
      href: assertRoute('/titanium-anode/platinized-anode/', 'electroplating solution'),
      hrefLabel: 'Platinised Titanium Anodes',
    },
    {
      title: 'MMO Titanium Anodes for Hard and Functional Plating',
      body: 'Where the bath can tolerate a small amount of dissolution, a mixed metal oxide coated titanium anode is the economical answer, and it is the standard in hard chromium, nickel and general functional plating. The coating system is chosen against the bath chemistry and the current density the line runs, because the operating potential and the coating life both depend on them. The geometry follows the tank: plate anodes for flat-panel work, mesh or basket anodes where the part is three-dimensional and the solution has to move through the assembly, and the anode-to-workpiece spacing is set so that the current density at the nearest point and at the furthest point stay within the range the deposit can tolerate.',
      points: [
        'MMO coated titanium anodes in plate, mesh and basket geometry',
        'Coating system selected against the bath chemistry and the operating current density',
        'Anode area and spacing calculated against the part geometry, not the tank area',
        'Coating loading verified by XRF and substrate grade certified to EN 10204 3.1',
      ],
      href: assertRoute('/titanium-anode/mmo-anode/', 'electroplating solution'),
      hrefLabel: 'MMO Anodes for Plating',
    },
    {
      title: 'Titanium Cathode Baskets, Racks and Contacts',
      body: 'The cathode side of the cell carries a different set of requirements, because here the titanium is the part that has to hold the work and carry the current in an acidic or alkaline bath. A titanium basket for a barrel or a rack for a hanging part has to resist the bath chemistry, carry the current without a resistive joint, and be rigid enough to hold the load through repeated handling. A poor contact is the classic cause of a plating fault: the resistance at the contact heats the joint, the coating on the part near the contact burns, and the fault is written off as a coating problem rather than as a rack problem. We supply baskets, racks, jigs and contacts machined with the contact geometry and the stiffness designed in, rather than as a general-purpose item.',
      points: [
        'Cathode baskets and racks in titanium, sized to the work and the tank arrangement',
        'Contact geometry and busbar attachment designed against the line current',
        'Titanium mesh and contact hardware for the hanging and barrel work',
        'Rigidness and deflection considered for the part weight and handling cycle',
      ],
      href: assertRoute('/titanium-products/titanium-baskets/', 'electroplating solution'),
      hrefLabel: 'Titanium Baskets & Plating Racks',
    },
  ],
  matrixSectionTitle: 'Electroplating Process-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Decorative nickel and chrome on consumer parts',
      medium: 'Watts nickel bath, pH 3.5-4.5, 40-55 C, 3-8 A/dm2',
      risk: 'Bath contamination from anode dissolution; burning at the part edges',
      recommendation: 'Platinised titanium anodes with an area matched to the full part surface',
    },
    {
      process: 'Functional hard chrome plating on hydraulic parts',
      medium: 'Hexavalent chrome bath, 55-60 C, 50-60 A/dm2, high current density',
      risk: 'Coating passivation at high current density; uneven distribution at edges',
      recommendation: 'MMO titanium anodes with the coating specified for the current density and spacing set to the part',
    },
    {
      process: 'Precious metal plating for electronics and connectors',
      medium: 'Gold or palladium bath, 25-40 C, 0.5-3 A/dm2, high purity requirement',
      risk: 'Any base metal dissolution contaminates the bath and the deposit',
      recommendation: 'Platinised titanium anodes, with a documented bath purity baseline',
    },
    {
      process: 'Zinc and alkaline non-electrolytic pretreatment lines',
      medium: 'Alkaline zinc or alkaline zinc-nickel, 30-50 C, 2-6 A/dm2',
      risk: 'Anode dissolution raising the metal content; contact corrosion at the rack',
      recommendation: 'MMO anodes with titanium racks and contacts to eliminate the steel contact point',
    },
    {
      process: 'Anodising and etch lines on aluminium parts',
      medium: 'Sulfuric or chromic anodising bath, 20-30 C, high acidity',
      risk: 'Chemical attack on exposed metal contacts; bath chemistry drift',
      recommendation: 'Titanium contacts and fixtures isolated from the workpiece where a dissimilar pair is unavoidable',
    },
    {
      process: 'Continuous strip and roll plating',
      medium: 'Continuous bath, high throughput, narrow strip with close anode spacing',
      risk: 'Edge burning from uneven anode-to-workpiece distance; contact marking',
      recommendation: 'Segmented anode arrays with the segment pitch set against the strip width',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Substrate, Coating and Dimensional Quality Control',
  standards: [
    'ASTM B348 for the titanium bar and sheet used as the anode substrate',
    'EN 10204 3.1 material certification with heat and lot traceability on every substrate',
    'XRF surface elemental composition on every coated or platinised anode, reported as loading in g/m2',
    'Coating thickness and adhesion check on the as-delivered anode surface',
    'Dimensional inspection of the finished anode against the drawing and the tank layout',
    'Contact and busbar continuity check on every anode assembly before shipment',
    'Surface roughness and preparation recorded where the coating depends on it',
    'Certificate issued stating the coating system, the loading and the substrate grade',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Decorative line for a consumer hardware product, running a nickel bath at 5 A/dm2 with a strict bath purity limit.',
      spec: 'Platinised titanium plate anodes sized to the full part surface with the loading specified in g/m2, delivered with XRF verification on every anode and with titanium contact hardware to remove the steel rack contact.',
      result: 'Bath metal analysis stable over the first year of production with no measurable base metal pick-up, and the reject rate attributed to contact marks reduced to zero.',
    },
    {
      duty: 'Hard chrome line on hydraulic manifolds at 55 A/dm2, with the previous soluble anodes replaced.',
      spec: 'MMO titanium mesh anodes with the coating system selected for the current density, sized to the part envelope with the spacing set from the current distribution rather than from the tank layout, supplied with titanium racks.',
      result: 'Cell voltage held stable against the baseline, no coating passivation observed, and the deposit thickness uniformity across the manifold brought within the specified tolerance.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Electroplating RFQ',
  rfqInputs: [
    'Bath chemistry and the metals deposited, with the impurity limit the bath must hold',
    'Operating current density and the cell voltage the line currently runs at',
    'Anode-to-workpiece geometry, the part envelope and the required surface area',
    'Whether the bath can tolerate any metal dissolution, or must be kept inert',
    'Anode geometry required: plate, mesh, basket, rod, disc or a segmented array',
    'Coating system or platinised layer, with the loading metric and units',
    'Contact and busbar arrangement, and the mechanical detail of the rack',
    'Documentation scope: certificate, loading report, dimensional report and the schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Electroplating and Surface Finishing Engineers',
  faqs: [
    {
      question: 'Should we use platinised titanium or MMO anodes for our plating line?',
      answer: 'The question is whether the bath can tolerate base metal dissolution. If it cannot, for a precious metal line, a decorative line with a strict purity specification, or a bath where any foreign metal at trace level is a reject, the platinised titanium anode is the answer because the platinum layer does not dissolve. If the bath can tolerate a controlled level of dissolution, MMO titanium is more economical and gives a wider choice of geometry and current density. The cost difference between the two is often smaller than the cost of one bath purification campaign caused by a soluble anode operating outside its window, so the decision is properly made against the bath specification rather than against the anode price.',
    },
    {
      question: 'How do we stop the anode from contaminating the plating bath?',
      answer: 'By keeping the anode in its operating window and by choosing the right anode form for the bath. The most common mechanism is not a catastrophic failure of the anode but a slow drift: the coating thins, dissolution becomes uneven, and the dissolved metal content in the bath rises until the chemistry balance is affected. The controls are a current density limit on the anode surface, a coating system selected for the bath, an anode area sized to the full wetted surface so the density is uniform rather than concentrated, and monitoring of the bath chemistry as a routine measurement rather than only when the deposit goes wrong. The anode contacts also matter, because a dissolving connection point produces sludge that circulates through the bath.',
    },
    {
      question: 'Why does our plating deposit burn at the edges and thin in the middle?',
      answer: 'That is the signature of a current distribution problem, and the cause is usually the anode geometry rather than the rectifier. Current density is highest where the anode is closest to the workpiece, so an anode that sits close to the part edge delivers more current there and burns it, while the centre is shadowed by the geometry of the part itself. The correction is to move the anodes further away, to increase the anode area so the same total current is spread over more surface, and to shield or mask the edges where the design does not want deposit. It is worth noting that this is a design calculation, not a trial and error process, because the same distribution calculation is used to size the anodes in the first place.',
    },
    {
      question: 'What is the role of titanium in the cathode side of the cell?',
      answer: 'The cathode side carries the work and the current, and it has to survive the same bath. A titanium basket or rack resists the acid and alkaline chemistries that would attack a steel rack, and more importantly it removes the steel contact point that produces the classic burn mark at the contact. It also matters for the bath chemistry, because a steel rack dissolving in a bath adds iron to a solution that may have an iron limit. The detail that decides whether it works is the contact: the geometry, the busbar attachment and the stiffness of the rack have to be designed for the current and the part weight, because a resistive or flexible contact generates heat at the joint and the fault appears on the part rather than on the rack.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-anode/', 'electroplating related link'),
      label: 'Electrochemical Anodes',
      note: 'The full anode range, including the coated and platinised families.',
    },
    {
      href: assertRoute('/titanium-anode/coating-systems/', 'electroplating related link'),
      label: 'Coating Systems',
      note: 'The mixed metal oxide families and their loading metrics.',
    },
    {
      href: assertRoute('/titanium-products/titanium-mesh/', 'electroplating related link'),
      label: 'Titanium Mesh',
      note: 'Mesh and expanded forms for basket and basket-style anodes.',
    },
    {
      href: assertRoute('/industries/', 'electroplating related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
