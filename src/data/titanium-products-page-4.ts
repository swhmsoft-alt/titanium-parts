export const selectionSteps = [
  { n: '1', title: 'Define the service', body: 'Media, concentration, temperature, pressure, load and design responsibility.' },
  { n: '2', title: 'Select form and grade', body: 'Choose the mill form or component route that fits fabrication and service duty.' },
  { n: '3', title: 'Freeze the order basis', body: 'Drawing revision, dimensions, tolerances, surface and processing scope.' },
  { n: '4', title: 'Agree acceptance evidence', body: 'Documents, inspection, marking, packing and delivery requirements before order.' },
];

export const supplyOptions = [
  { title: 'Standard Mill Supply', body: 'Product form, grade, specification, condition, size and quantity.' },
  { title: 'Cut-to-Size Material', body: 'Add cut geometry, tolerance, edge condition and machining allowance.' },
  { title: 'Custom Production', body: 'Confirm feasibility, quantity basis, production route and qualification needs.' },
  { title: 'Drawing-Based Parts', body: 'Freeze drawing revision, critical features, inspection plan and change control.' },
];

export const industries = [
  { title: 'Chemical Processing', body: 'Start with process chemistry, concentration, temperature, pressure and fabrication code.', img: '/images/titanium-products/industry-chemical-processing.webp' },
  { title: 'Marine & Offshore', body: 'Define seawater exposure, crevice conditions, mechanical load and maintenance access.', img: '/images/titanium-products/industry-marine-offshore.webp' },
  { title: 'Healthcare & Life Sciences', body: 'Separate material compliance from finished-device approval and customer validation.', img: '/images/titanium-products/industry-medical-precision.webp' },
  { title: 'Aerospace', body: 'Confirm alloy, condition, approved specification, traceability and qualification responsibilities.', img: '/images/titanium-products/industry-aerospace.webp' },
  { title: 'Electronics & Electrochemical', body: 'Define substrate function, geometry, surface condition, cleanliness and downstream coating process.', img: '/images/titanium-products/industry-electrochemical-systems.webp' },
  { title: 'Energy & Hydrogen', body: 'Share fluid, pressure, temperature, joining route, inspection and system qualification requirements.', img: '/images/titanium-products/industry-green-hydrogen.webp' },
];

export const grades = [
  { grade: 'Grade 1', family: 'Commercially pure titanium', note: 'High formability; review strength and product-form availability' },
  { grade: 'Grade 2', family: 'Commercially pure titanium', note: 'Common industrial corrosion-resistant material; confirm environment and fabrication route' },
  { grade: 'Grade 5', family: 'Ti-6Al-4V', note: 'Higher-strength alloy for machined and structural parts; confirm condition and specification' },
  { grade: 'Grade 7', family: 'Palladium-alloyed CP titanium', note: 'Consider for selected corrosive chemical conditions after media review' },
  { grade: 'Grade 9', family: 'Ti-3Al-2.5V', note: 'Useful where strength and formability are both required; confirm form-specific standard' },
  { grade: 'Grade 12', family: 'Ti-0.3Mo-0.8Ni', note: 'Used in selected chemical and heat-transfer duties; verify exact service conditions' },
  { grade: 'Grade 23', family: 'Ti-6Al-4V ELI', note: 'Controlled-interstitial alloy; material compliance alone is not finished-device approval' },
];

export const processingSteps = [
  { label: 'Cutting & Sizing', href: '/titanium-service/cutting-sizing/' },
  { label: 'CNC Machining', href: '/titanium-service/cnc-machining/' },
  { label: 'Forming & Bending', href: '/titanium-service/forming-bending/' },
  { label: 'Welding & Assembly', href: '/titanium-service/welding-assembly/' },
  { label: 'Surface Treatment', href: '/titanium-service/surface-treatment-finishing/' },
  { label: 'Testing & Certificates', href: '/titanium-service/material-testing-certificate/' },
];

export const evidenceChecks = [
  'Material certificate and stated order basis',
  'Heat or lot identification where applicable',
  'Dimensional and surface inspection scope',
  'Specified test or NDT reports when agreed',
  'Marking, packing list and packing requirements',
  'Third-party inspection points when required',
];

export const purchaseGuard = [
  { title: 'Material Identity', body: 'Grade, product form, standard revision, condition and heat or lot basis.' },
  { title: 'Dimensions & Processing', body: 'Size, tolerance, surface, machining allowance and processing responsibility.' },
  { title: 'Evidence & Acceptance', body: 'Certificates, inspection, testing, hold points and acceptance criteria agreed before order.' },
  { title: 'Packing & Delivery', body: 'Marking, protection, document set, destination, Incoterm and delivery basis.' },
];
