// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site deployed to GitHub Pages and served at the root of the custom
// domain raphos.com (a CNAME file in public/ pins the domain). `site` + `base`
// make Astro emit correct asset URLs, canonical/OG tags and the sitemap.
export default defineConfig({
  site: 'https://raphos.com',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  // Static redirects. In static output Astro emits a small meta-refresh HTML
  // page for each entry, which works on GitHub Pages (no server needed).
  redirects: {
    '/synera': '/work/synera/',
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
