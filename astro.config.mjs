// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://titanium-parts.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({ changefreq: 'weekly', priority: 0.7, lastmod: new Date() }),
  ],
  vite: {
    ssr: { noExternal: ['astro/*'] },
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'src/data'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
      },
    },
  },
});
