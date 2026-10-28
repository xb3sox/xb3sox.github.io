import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// GitHub Pages publishes from main:/ so the generated page and the static
// assets it references must be mirrored from dist/ to the repository root.
const files = ['index.html', 'robots.txt', 'sitemap.xml', 'og.png', 'apple-touch-icon.png', 'icon-32.png'];

for (const file of files) {
  await copyFile(resolve('dist', file), resolve(file));
}
