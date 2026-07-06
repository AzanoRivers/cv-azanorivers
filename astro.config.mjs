// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // El pipeline de Tailwind 4 minifica el CSS final con su propio target moderno
    // (Safari 16.4+) sin importar la config de Vite/browserslist del proyecto, y
    // eso borra el prefijo -webkit-backdrop-filter que necesita iOS Safari < 18.
    // Sin minificación CSS el prefijo se conserva siempre; el costo (unos KB extra
    // en un CSS ya chico) es irrelevante frente a que el fondo se vea roto en iPhone.
    build: {
      cssMinify: false,
    },
  },
});