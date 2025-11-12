import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/portofolio-react/',
  define: {
    'import.meta.env.VITE_VERCEL_DEPLOY': JSON.stringify(process.env.VERCEL ? 'true' : 'false'),
  },
  plugins: [react()],
  // HAPUS baris 'assetsInclude: ['**/*.glb'],' DARI SINI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
