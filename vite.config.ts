import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // Cursor cloud port-forward uses *.cursorvm.com hostnames
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
})
