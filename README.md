# Basem Sufan — personal site

Astro 7 + TypeScript, rendered as static HTML with no client-side JavaScript. Requires Node.js 22.23.4 or newer. The design follows the visitor’s color scheme (light/dark) and reduced-motion preferences in pure CSS, and ships a branded `404.html` for unmatched routes.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Edit the source in `src/`; static assets live in `public/`. The build syncs the generated page and its static assets (`index.html`, `robots.txt`, `sitemap.xml`, `og.png`, `apple-touch-icon.png`, `icon-32.png`, `404.html`) to the repository root because GitHub Pages currently publishes from `main:/`. CI checks these generated files are committed and current.
