import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://HIMANSHI70489.github.io/portfolio_himanshi',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'react', 'react-dom'],
  },
  build: {
    outDir: 'dist', // Custom output directory
  },

});