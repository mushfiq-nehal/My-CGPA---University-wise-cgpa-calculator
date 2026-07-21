// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mycgpa.com',
  // Canonicals, sitemap and every internal link use the trailing-slash form,
  // which is what the host serves 200 for (the bare form 307-redirects).
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
