// https://github.com/vitejs/vite/discussions/3448
import path from 'path';
import fs from 'fs/promises';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        // eslint-disable-next-line no-undef
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        // eslint-disable-next-line no-undef
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  // server: {
  //   port: 3030,
  // },
  preview: {
    port: 5175,
  },
});
