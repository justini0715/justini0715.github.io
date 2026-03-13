import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL ?? 'https://justini0715.github.io';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => page !== `${siteUrl}/studio/`
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
