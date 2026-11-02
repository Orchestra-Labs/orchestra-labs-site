import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // "@/*" alias comes from tsconfig.json "paths" (native in Vite 8; replaces vite-tsconfig-paths).
    tsconfigPaths: true,
  },
  server: {
    open: true,
    host: true,
  },
  preview: {
    open: false,
  },
});
