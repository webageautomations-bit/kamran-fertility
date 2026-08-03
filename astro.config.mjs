// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin. Drives absolute URLs in the sitemap and in the
  // self-referencing <link rel="canonical"> emitted by BaseHead.astro.
  site: 'https://www.kamranfertility.com',

  // Legacy URL kept alive after the Fertility Treatment slug change, so old
  // links and search-index entries redirect instead of 404ing.
  redirects: {
    '/services/treatments': '/services/fertility-treatment'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Redirect stubs must never be indexed — only canonical URLs belong here.
      filter: (page) => !page.includes('/services/treatments')
    })
  ]
});
