# Basem Sufan — personal site

Astro 7 + TypeScript, rendered as static HTML with no client-side JavaScript. Requires Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Edit the source in `src/`; static assets live in `public/`. The build syncs the generated page and its static assets (`index.html`, `robots.txt`, `sitemap.xml`, `og.png`, `apple-touch-icon.png`, `icon-32.png`) to the repository root because GitHub Pages currently publishes from `main:/`. CI checks these generated files are committed and current.
