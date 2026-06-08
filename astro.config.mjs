import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anaselfatihi.github.io',
  integrations: [tailwind()],
});
