/**
 * Apply reviewed meta descriptions to the generated template pages.
 *
 * The templates originally composed the meta description from the
 * summary plus a suffix, which pushed several pages past the ~175
 * character search-result limit. Each entry now carries its own
 * description in the data source, so every page stays within range and
 * the wording is specific to the page.
 *
 *   node scripts/media/apply-template-descriptions.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

/**
 * Reviewed descriptions keyed by data-source slug.
 * Each must be 70-175 characters.
 */
const DESCRIPTIONS = {
  // --- Industries -------------------------------------------------------
  'chemical-processing':
    'Titanium plate, tube, fittings and clad copper for corrosive chemical service, selected against media, concentration, temperature and the governing design specification.',
  'water-treatment':
    'Salt chlorination cells, MMO anodes and electrolysis packages for water treatment and desalination, sized from chemistry, flow and current duty.',
  'aerospace':
    'Ti-6Al-4V plate, bar, forgings and fasteners to AMS and ASTM specifications, with full heat traceability and first-article inspection records.',
  'medical':
    'Grade 23 ELI plate, bar, wire and precision balls for implant and bioprocess use, with surface condition, cleaning and packaging evidence to order.',
  'cathodic-protection':
    'MMO linear, ribbon, tubular and disc anodes for impressed-current protection, designed from the protection criterion, design current and anode-bed geometry.',
  'electroplating':
    'Platinised and MMO titanium anodes, baskets and racks for plating lines, selected against bath chemistry, current density and contact design.',
  'electrowinning':
    'MMO anodes, cathode baskets and clad copper anodes for metal recovery, selected against electrolyte composition, impurities and current distribution.',
  'hydrogen-energy':
    'PEM electrolyzer stacks and packaged systems for green hydrogen, sized from required output, purity, pressure and the available power supply.',

  // --- Anode coating families -------------------------------------------
  'ruthenium-coated-titanium-anodes':
    'Ru-Ir MMO titanium anodes for chlorine-evolution and electrochlorination service, with coating definition, geometry and loading basis confirmed to order.',
  'iridium-oxide-coated-titanium-anodes':
    'Ir-Ta and iridium-based MMO titanium anodes for oxygen-evolution duties, reviewed against electrolyte, contaminants, mass transfer and operating schedule.',
  'platinized-anode':
    'Platinum-coated titanium anodes for plating and selected electrolysis processes, with the platinum metric, coverage, substrate and wear acceptance defined.',
  'lead-dioxide-anode':
    'Specialty coated titanium anodes reviewed case by case against the reaction, hazard profile, qualification evidence and end-of-life responsibility.',

  // --- Fabrication services ---------------------------------------------
  'cutting-sizing':
    'Titanium cutting and sizing for plate, sheet, bar, tube and coil, with finished dimension, tolerance, cut edge and quantity confirmed before quotation.',
  'cnc-machining':
    'Turned and milled titanium components produced to your drawing, with datums, GD&T, thread, inspection scope and report format agreed in advance.',
  'forming-bending':
    'Titanium bending, roll forming and mandrel bending with springback, minimum bend radius and grain direction reviewed against the design.',
  'welding-assembly':
    'TIG, MIG, plasma and laser welding of titanium with procedure qualification, shielding, purge control and inspection scope held to the joint.',
  'surface-treatment-finishing':
    'Titanium pickling, passivation, polishing, blasting and coating, with the chemistry and finish selected against the required end condition.',
  'material-testing-certificate':
    'Material certificates, heat and lot traceability, dimensional inspection, mechanical testing and PMI, with the document set agreed before order release.',
};

/** Data source files that hold the slug entries. */
const SOURCES = [
  'src/data/industries-data.ts',
  'src/data/anode-coatings.ts',
  'src/data/service-steps.ts',
];

/** Template file -> the expression that currently builds the description. */
const TEMPLATES = [
  ['src/pages/industries/[slug]/index.astro', 'industry'],
  ['src/pages/titanium-anode/[slug]/index.astro', 'coating'],
  ['src/pages/titanium-service/[slug]/index.astro', 'step'],
];

let changed = 0;

/* ------------------------------------------------------------------ */
/* 1. Add the description to each data source entry                     */
/* ------------------------------------------------------------------ */
for (const rel of SOURCES) {
  const full = path.join(ROOT, rel);
  const source = fs.readFileSync(full, 'utf8');
  let text = source;

  for (const [slug, description] of Object.entries(DESCRIPTIONS)) {
    const slugLine = new RegExp(`(slug: '${slug}',)`);
    if (!slugLine.test(text)) continue;
    if (text.includes(`slug: '${slug}',\n    description:`)) continue;
    text = text.replace(
      slugLine,
      `$1\n    description:\n      '${description.replace(/'/g, "\\'")}',`
    );
  }

  if (text !== source) {
    fs.writeFileSync(full, text);
    changed++;
    console.log(`updated ${rel}`);
  }
}

/* ------------------------------------------------------------------ */
/* 2. Point the templates at the new field                              */
/* ------------------------------------------------------------------ */
for (const [rel, field] of TEMPLATES) {
  const full = path.join(ROOT, rel);
  const source = fs.readFileSync(full, 'utf8');
  let text = source;

  const descRe = /description=\{`\$\{[^`]*`\}/;
  if (!descRe.test(text)) {
    console.warn(`! could not match the description expression in ${rel}`);
    continue;
  }
  text = text.replace(descRe, `description={${field}.description}`);

  if (text !== source) {
    fs.writeFileSync(full, text);
    changed++;
    console.log(`updated ${rel}`);
  }
}

console.log(`\n${changed} file(s) updated`);
