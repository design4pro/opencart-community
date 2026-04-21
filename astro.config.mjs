import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react(), mdx()],
  site: 'https://opencart.design4.pro/',
  vite: {
    plugins: [tailwindcss()],
  },
});
