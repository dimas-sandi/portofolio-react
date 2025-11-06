import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // HAPUS baris 'assetsInclude: ['**/*.glb'],' DARI SINI
  base: '/portfolio-react/',
})