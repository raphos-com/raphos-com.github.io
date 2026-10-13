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
    // The lean-mechanics API docs are a separate GitHub Pages project site.
    // Project sites only inherit a custom domain from an organisation site
    // (a repo named raphos-com.github.io), and this site is not one, so
    // raphos.com/lean-mechanics/ would otherwise 404. Deep links into the docs
    // are forwarded by src/pages/404.astro.
    '/lean-mechanics': 'https://raphos-com.github.io/lean-mechanics/',
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
