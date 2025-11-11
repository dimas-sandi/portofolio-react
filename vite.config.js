import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: process.env.NETLIFY ? '/' : '/portofolio-react/',
  define: {
    'import.meta.env.VITE_NETLIFY_DEPLOY': JSON.stringify(process.env.NETLIFY ? 'true' : 'false'),
  },
  plugins: [react()],
  // HAPUS baris 'assetsInclude: ['**/*.glb'],' DARI SINI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
