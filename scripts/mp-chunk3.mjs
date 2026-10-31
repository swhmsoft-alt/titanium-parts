import { writeFile } from 'node:fs/promises';
const C3 = String.raw`<style>
.mp-hero { position: relative; min-height: 640px; padding: 7rem 0 4rem; background: #020617; color: #fff; overflow: hidden; }
.mp-hero-bg { position: absolute; inset: 0; z-index: 0; }
.mp-hero-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.55; }
.mp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(2,6,23,0.7) 0%, rgba(15,23,42,0.55) 100%); }
.mp-hero-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
.mp-eyebrow { display: inline-block; padding: 0.375rem 0.875rem; margin-bottom: 1.25rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #93c5fd; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 999px; }
.mp-hero h1 { font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 800; color: #fff; margin: 0 0 1.25rem; line-height: 1.1; letter-spacing: -0.02em; max-width: 900px; }
.mp-hero-lede { font-size: clamp(1rem, 1.4vw, 1.25rem); color: rgba(255,255,255,0.9); line-height: 1.6; max-width: 900px; margin: 0 0 2rem; }
.mp-hero-cta { display: flex; flex-wrap: wrap; gap: 1rem; }
.mp-btn-primary { display: inline-block; background: #2563eb; color: #fff; padding: 0.875rem 1.75rem; border-radius: 6px; font-weight: 600; text-decoration: none; }
.mp-btn-primary:hover { background: #1d4ed8; }
.mp-btn-secondary { display: inline-block; background: transparent; color: #fff; padding: 0.875rem 1.75rem; border: 1px solid rgba(255,255,255,0.4); border-radius: 6px; font-weight: 600; text-decoration: none; }
.mp-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
.mp-section { padding: 4.5rem 0; background: #fff; }
.mp-section.mp-alt { background: #f8fafc; }
.mp-section.mp-dark { background: #0a1428; color: #fff; }
.mp-inner { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
.mp-h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; color: #0f172a; margin: 0 0 1rem; line-height: 1.15; letter-spacing: -0.02em; }
.mp-h-light { color: #fff; }
.mp-lede { font-size: 1.0625rem; color: #475569; line-height: 1.65; margin: 0 0 2rem; max-width: 800px; }
.mp-lede-light { color: #cbd5e1; }
.mp-warning-sec p { font-size: 0.9375rem; color: #1e3a8a; line-height: 1.6; }
.mp-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
@media (max-width: 1024px) { .mp-grid-4 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .mp-grid-4 { grid-template-columns: 1fr; } }
.mp-card { padding: 1.5rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; }
.mp-icon-blue { color: #2563eb; margin-bottom: 0.75rem; }
.mp-card h3 { font-size: 1.0625rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
.mp-card p { font-size: 0.9375rem; color: #475569; line-height: 1.6; margin: 0; }
.mp-grade-card { border-top: 3px solid #2563eb; }
.mp-form-card { padding: 0; overflow: hidden; }
.mp-form-img { aspect-ratio: 4/3; background: #f1f5f9; overflow: hidden; }
.mp-form-img img { width: 100%; height: 100%; object-fit: cover; }
.mp-form-body { padding: 1.25rem; }
.mp-form-spec { font-size: 0.8125rem; color: #475569; line-height: 1.45; margin: 0 0 0.5rem; }
.mp-form-spec strong { color: #0f172a; }
.mp-form-text { font-size: 0.875rem; color: #64748b; line-height: 1.6; }
.mp-faq-grid { display: grid; grid-template-columns: 1fr; gap: 0.75rem; max-width: 900px; }
.mp-faq { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
.mp-faq[open] { box-shadow: 0 8px 20px rgba(15,23,42,0.06); border-color: #2563eb; }
.mp-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem 1.5rem; cursor: pointer; font-size: 1rem; font-weight: 600; color: #0f172a; list-style: none; }
.mp-faq summary::-webkit-details-marker { display: none; }
.mp-faq-icon { color: #2563eb; font-size: 1.5rem; flex-shrink: 0; transition: transform 0.3s; }
.mp-faq[open] .mp-faq-icon { transform: rotate(45deg); }
.mp-faq-a { padding: 0 1.5rem 1.25rem; border-top: 1px solid #f1f5f9; }
.mp-faq-a p { margin: 0; padding-top: 1rem; font-size: 0.9375rem; color: #475569; line-height: 1.7; }
.mp-rfq-grid { display: grid; grid-template-columns: 320px 1fr; gap: 2.5rem; align-items: start; margin-top: 1.5rem; }
@media (max-width: 1024px) { .mp-rfq-grid { grid-template-columns: 1fr; } }
.mp-side-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem; }
.mp-side-card h3 { font-size: 1.0625rem; font-weight: 700; color: #fff; margin: 0 0 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
.mp-related { display: block; padding: 0.5rem 0; color: #93c5fd; font-size: 0.9375rem; }
.mp-related:hover { text-decoration: underline; }
</style>
`;
await writeFile('scripts/mp3.txt', C3, 'utf8');
console.log('mp3:', C3.length, 'bytes');
