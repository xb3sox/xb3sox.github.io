# Basem Sufan — personal site

Astro 7 + TypeScript, rendered as static HTML with no client-side JavaScript. Requires Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Edit the source in `src/`. The build syncs the generated page to root `index.html` because GitHub Pages currently publishes from `main:/`. CI checks that generated file is committed and current.
