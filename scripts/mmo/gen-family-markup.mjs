/**
 * Writes the renderer of the MMO anode family pages.
 *
 * The pages are drawn with the markup of the reference pages and their own
 * utilities. The markup is written once, here, so that every page of the
 * family is drawn the same way, and so that the rule "the reference form is
 * replaced by this site's form" is kept in one place.
 */
import fs from 'node:fs';

const OUT = `---
/**
 * Shared renderer for the MMO anode product family.
 *
 * Every page in the family is described by the same content model
 * (\`src/data/mmo-family-pages.ts\`), so one component renders all of them.
 *
 * The body of a page is the markup of the reference page it mirrors, drawn
 * with the reference pages' own utilities. The utilities live in
 * \`src/styles/mmo-reference.css\` and are scoped under \`.mmo-page\`, so the
 * rest of the site is not affected by them.
 */
import BaseLayout from '../../layouts/BaseLayout.astro';
import { site } from '../../data/site';
import type { MmoPage } from '../../data/mmo-family-pages';
import RFQForm from '../RFQForm.astro';
import '../../styles/mmo-contrast.css';

interface Props {
  page: MmoPage;
}

const { page } = Astro.props;
const origin = site.url.replace(/\\/$/, '');
const canonicalUrl = new URL(Astro.url.pathname, origin).href;

/**
 * The quote request of the family: the marketing column, then the one
 * inquiry form of the site. The form itself is not part of the markup
 * string — it is the shared component, so the fields are the same on every
 * page of the site.
 */
const rfqParts = page.rfqHtml.split('<!--RFQ_FORM-->');

/**
 * The pictures of the page.
 *
 * The hero and the sections carry their pictures in their markup. The one the
 * JSON-LD names is the first of them.
 */
const heroImage = page.heroHtml.match(/src="([^"]+)"/)?.[1] ?? '';

/** The questions of the page, published as JSON-LD. */
const faqItems = page.sections
  .filter((section) => section.id === 'faq')
  .flatMap((section) => [...section.html.matchAll(/<summary[^>]*>([\\s\\S]*?)<\\/summary>/g)])
  .map((match) => ({
    q: match[1].replace(/<[^>]+>/g, '').replace(/\\s+/g, ' ').trim(),
    a: '',
  }))
  .filter((item) => item.q);

const jsonLd: Record<string, unknown>[] = [
  {
    '@type': 'WebPage',
    '@id': \`\${canonicalUrl}#webpage\`,
    url: canonicalUrl,
    name: page.seoTitle,
    description: page.description,
    isPartOf: { '@id': \`\${origin}/#website\` },
    inLanguage: site.locale,
    primaryImageOfPage: { '@id': \`\${canonicalUrl}#primaryimage\` },
    about: { '@id': \`\${canonicalUrl}#product\` },
    breadcrumb: { '@id': \`\${canonicalUrl}#breadcrumb\` },
  },
  {
    '@type': 'Product',
    '@id': \`\${canonicalUrl}#product\`,
    name: page.name,
    description: page.description,
    url: canonicalUrl,
    image: heroImage ? new URL(heroImage, origin).href : undefined,
    category: 'Titanium Anodes',
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': \`\${origin}/#organization\` },
  },
];

if (faqItems.length > 0) {
  jsonLd.push({
    '@type': 'FAQPage',
    '@id': \`\${canonicalUrl}#faq\`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  });
}
---

<BaseLayout
  title={page.seoTitle}
  description={page.description}
  ogImage={heroImage}
  jsonLd={jsonLd}
>
  <div class="mmo-page">
    <Fragment set:html={page.heroHtml} />

    {page.navHtml && <Fragment set:html={page.navHtml} />}

    {
      page.sections.map((section) => (
        <section id={section.id} class={section.cls}>
          <Fragment set:html={section.html} />
        </section>
      ))
    }

    {
      page.rfqHtml && (
        <section id="rfq" class="scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28">
          <Fragment set:html={rfqParts[0]} />
          <RFQForm
            title=""
            submitLabel={page.form.button}
            card={false}
            variant="mmo"
          />
          <Fragment set:html={rfqParts[1]} />
        </section>
      )
    }
  </div>
</BaseLayout>
`;

fs.writeFileSync('src/components/mmo/MmoProductPage.astro', OUT);
console.log('wrote src/components/mmo/MmoProductPage.astro');
