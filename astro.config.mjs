import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL ?? 'https://justini0715.github.io';
const excludedPages = new Set([
  `${siteUrl}/blog/42-push-swap/`,
  `${siteUrl}/blog/42-philosopher/`
]);

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !excludedPages.has(page)
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
