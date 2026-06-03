import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
  plugins: [react(), tailwindcss()],
  server: {
  proxy: {
    '/api/yelp': {
      target: 'https://api.yelp.com/v3',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/yelp/, ''),
      headers: {
        Authorization: `Bearer ${env.VITE_YELP_KEY}`
      },
    },
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    }
  },
},
  }});