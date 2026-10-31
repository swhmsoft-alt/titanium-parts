import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, 'public', 'images');

const imageMap = {
  'logos/hele-logo.png': 'https://heletitanium.com/wp-content/uploads/2026/06/Hele-Logo-2.png',
  'logos/sespi.png': 'https://heletitanium.com/wp-content/uploads/2026/06/SESPI-.png',
  'logos/waterair.png': 'https://heletitanium.com/wp-content/uploads/2026/06/waterair-1.png',
  'logos/mainfraim.png': 'https://heletitanium.com/wp-content/uploads/2026/06/Mainfraim-industries.png',
  'logos/electra.png': 'https://heletitanium.com/wp-content/uploads/2026/06/Electra.png',
  'logos/pss.png': 'https://heletitanium.com/wp-content/uploads/2026/06/PSS.png',
  'logos/ventil-aqua.png': 'https://heletitanium.com/wp-content/uploads/2026/06/VENTIL-AQUA.png',
  'logos/h2o.png': 'https://heletitanium.com/wp-content/uploads/2026/06/H2O.png',
  'logos/gonvarri.png': 'https://heletitanium.com/wp-content/uploads/2026/06/GONVARRI.png',
  'products/titanium-anodes.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Tittanium-Anodes.webp',
  'products/pem-electrolyzer.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/PEM-Electrolyzer-1.webp',
  'products/titanium-rod-bar.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Titanium-Rod-Bar.webp',
  'products/titanium-plates-sheets.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/TItanium-Plates-Sheets-1.webp',
  'products/titanium-tubes.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Titnaium-Tubes.webp',
  'products/titanium-fittings.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Titnaium-Fittings.webp',
  'products/titanium-fasteners.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Titanium-Fasteners.webp',
  'products/titanium-parts.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Titanium-Parts.webp',
  'hero-bg.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Your-Materials-Anodes-Hydrogen-Solutions-Partner.webp',
  'industries/energy-hydrogen.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Energy-Hydrogen-1.webp',
  'industries/water-treatment.webp': 'https://heletitanium.com/wp-content/uploads/2023/09/Wastewater-treatment-and-disposal-evreka-scaled-2.webp',
  'industries/marine-offshore.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Marine-Offshore.webp',
  'industries/cathodic-protection.webp': 'https://heletitanium.com/wp-content/uploads/2023/03/Cathodic-protection.webp',
  'industries/metal-electrowinning.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/Metal-Electrowinning.webp',
  'industries/aerospace.webp': 'https://heletitanium.com/wp-content/uploads/2026/06/ChatGPT-Image-2026%E5%B9%B46%E6%9C%883%E6%97%A5-13_19_09-2.webp',
  'quality/mtc.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/MTC-Material-Test-Certificates.webp',
  'quality/pmi.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Positive-Material-Identification-PMI.webp',
  'quality/continuous-verification.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Continuous-Verification-During-Production.webp',
  'quality/dimensional-inspection.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Dimensional-Inspection12.webp',
  'quality/coating-verification.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Coating-Verification.webp',
  'quality/final-inspection.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Final-Inspection.webp',
  'quality/assembly-testing.jpeg': 'https://heletitanium.com/wp-content/uploads/2026/09/Assembly-Testing.jpeg',
  'quality/export-packing.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Export-Packing11.webp',
  'scenarios/oxidation-wastewater.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Advanced-Oxidation-Wastewater.webp',
  'scenarios/green-hydrogen.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/Green-Hydrogen.webp',
  'scenarios/system-integration.webp': 'https://heletitanium.com/wp-content/uploads/2026/09/System-Integration-Workshop8.webp',
};

function download(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100) { resolve('exists'); return; }
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) { download(res.headers.location, dest).then(resolve); return; }
      if (res.statusCode !== 200) { resolve('http ' + res.statusCode); return; }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve('ok'); });
    }).on('error', (e) => resolve('err ' + e.message));
  });
}

(async () => {
  let ok = 0, fail = 0, exists = 0;
  for (const [rel, url] of Object.entries(imageMap)) {
    const dest = path.join(baseDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const r = await download(url, dest);
    if (r === 'ok') ok++;
    else if (r === 'exists') exists++;
    else { fail++; console.log('FAIL', rel, r); }
  }
  console.log(`Done: ${ok} downloaded, ${exists} existed, ${fail} failed`);
})();
