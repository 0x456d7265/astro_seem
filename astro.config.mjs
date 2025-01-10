// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://0x456d7265.github.io',
  base: '/astro_seem',
  output: 'static',
  build: {
    assets: '_astro'
  },
  trailingSlash: 'always'
});
