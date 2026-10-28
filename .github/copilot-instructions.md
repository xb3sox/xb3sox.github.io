# Repository guidance

This is Basem Sufan’s one-page Astro + TypeScript portfolio. Source lives in `src/`; root `index.html` is generated for GitHub Pages—do not edit it directly.

- Keep the design minimal, typography-led, and responsive.
- Keep project copy concise and mark ventures as planned until launch is verified. Never invent customers, outcomes, metrics, dates, or live URLs.
- Prefer Astro’s static output; add client-side JavaScript or dependencies only for a clear need. UI primitives (Button, Badge, Separator) live in `src/components/ui/` in the shadcn/ui registry format, vendored from Astro-native bejamas/ui (MIT) and themed via the `cn-*` hooks in `src/styles/ui.css` — extend by vendoring more registry items the same way rather than adding React/hydration. Tailwind v4 is a build-time dependency only (theme + utilities, no preflight).
- Preserve semantic markup, keyboard focus, and reduced-motion support. Avoid tracking and remote fonts.
- Use the project skills in `.agents/skills/`: `ui-ux-pro-max` for interface work, `copy-editing` for existing copy, and `copywriting` for new or substantially rewritten copy. Run the UI/UX search from the repo root with `python3 .agents/skills/ui-ux-pro-max/scripts/search.py` (the upstream Claude plugin path does not apply here); follow this site's minimal, no-invented-claims constraints when using recommendations.
- Use `npm ci`, `npm run dev`, `npm run check`, and `npm run build` to work and validate.
