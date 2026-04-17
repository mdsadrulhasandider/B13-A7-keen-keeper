import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Handle client-side routing on Netlify/Vercel (no 404 on reload)
  build: {
    rollupOptions: {}
  }
})
