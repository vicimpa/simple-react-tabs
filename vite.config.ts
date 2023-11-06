import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
  },
  publicDir: '../public',
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  plugins: [
    react({ plugins: [] }),
    paths({ projects: ['../tsconfig.json'] })
  ],
});
