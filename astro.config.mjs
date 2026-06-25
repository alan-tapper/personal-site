// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  site: 'https://alantapper.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
