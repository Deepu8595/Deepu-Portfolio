import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Deepu8595.githu.io/Deepu portfolio',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'react', 'react-dom'],
  },
  build: {
    outDir: 'dist', // Custom output directory
  },

});