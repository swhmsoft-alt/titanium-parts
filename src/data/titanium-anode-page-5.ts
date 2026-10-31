export const beforeQuoteDo = [
  'Define current density with the exact active-area denominator.',
  'Separate XRF composition, coating loading, thickness and service-life evidence.',
  'Mark coated, masked, connection and sealed zones on the drawing.',
  'Assign anode, cell/system, installation and commissioning responsibilities.',
  'Compare quotations only after the coating and test definitions match.',
];

export const beforeQuoteDont = [
  '"MMO coating for water treatment"',
  'A current-density number with no active-area basis',
  '"XRF passed" with no method, sampling or acceptance limits',
  'Coating loading treated as a guaranteed operating life',
  'A drawing with no coated, masked or connection zones',
  'A lifetime claim with no electrolyte, duty cycle or failure criterion',
];

export const recoatingCards = [
  { title: 'Information to provide', body: 'Original drawing or dimensions, coating type if known, operating chemistry, electrical duty, service time, cleaning history, failure symptoms and photographs.' },
  { title: 'Conditions to inspect', body: 'Substrate thickness and distortion, cracks, welds, threads, cable or tab connection, contamination and dimensional suitability after coating removal.' },
  { title: 'Possible outcomes', body: 'Proceed to a defined recoating route, request further inspection or recommend replacement when the substrate or connection no longer meets the agreed criteria.' },
  { title: 'No automatic performance reset', body: 'Recoating should not be presented as automatically restoring a used assembly to new-product performance. The accepted basis must be documented for the specific item.' },
];
