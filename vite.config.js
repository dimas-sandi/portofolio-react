import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: process.env.NETLIFY ? '/' : '/portofolio-react/',
  plugins: [react()],
  // HAPUS baris 'assetsInclude: ['**/*.glb'],' DARI SINI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
