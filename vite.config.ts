/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  cacheDir: './node_modules/.vite/app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    svgr(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      data: '/src/data',
      constansts: '/src/constansts',
      helpers: '/src/helpers',
      hooks: '/src/hooks',
      services: '/src/services',
      styles: '/src/styles',
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: './',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
