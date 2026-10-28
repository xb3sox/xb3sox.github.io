import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xb3sox.github.io',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    server: {
      allowedHosts: ['.e2b.app'],
    },
  },
});
