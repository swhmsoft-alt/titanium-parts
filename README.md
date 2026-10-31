# Titanium Parts - Astro SSG Clone

A 100% pixel-perfect recreation of titanium-parts.com using Astro Static Site Generation.

## Tech Stack
- **Astro 5.x** (SSG mode)
- **TypeScript** strict
- **Native CSS** with CSS variables
- **Sharp** for image optimization
- **@astrojs/sitemap** for auto-generated sitemap

## Project Structure
```
src/
├── components/   # Reusable .astro components
├── layouts/      # Page layouts
├── pages/        # Routes (only English)
├── content/      # Content Collections (products, team, faqs)
├── data/         # Static data (navigation, company info)
└── styles/       # Global CSS

public/
├── images/       # All original site images
├── fonts/        # Original webfonts
└── robots.txt

docs/
└── research/heletitanium/  # Original site research & screenshots
```

## Commands
```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Pages (80+ English pages)
- Home `/`
- About: `/company/`, `/our-team/`, `/quality/`, `/manufacturing-capabilities/`
- Products: `/titanium-products/`, `/titanium-anode/`, `/cathodic-protection/`, `/pem-electrolyzer/`
- Product Details: `/products/[...slug]/` (50+ dynamic routes)
- Support: `/industries/`, `/knowledge-center/`, `/contact/`
- Plus: salt-chlorinator, sodium-hypochlorite-generator, hydrogen-generators
