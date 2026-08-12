// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  // Canonical origin. Drives absolute URLs in the sitemap and in the
  // self-referencing <link rel="canonical"> emitted by BaseHead.astro.
  site: 'https://www.kamranfertility.com',
  // Enforce no trailing slash on all routes, matching internal nav links
  // and preventing host-level redirects that were breaking canonical URLs.
  trailingSlash: 'never',
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
  ],
  // Output flat .html files (services/assessment.html) instead of directory
  // format (services/assessment/index.html), so hosts don't auto-redirect
  // no-slash requests to a trailing-slash URL.
  build: {
    format: 'file'
  }
});
