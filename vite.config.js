import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 5173, // Default to 5173 if VITE_PORT is not set
    host: '0.0.0.0'

  },
})
