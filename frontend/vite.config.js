import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      'webpage-craft-18.preview.emergentagent.com',
      '4ec7df23-2901-491d-b574-b0259dfac4ca.preview.emergentagent.com',
      'site-blueprint-24.preview.emergentagent.com',
      'calculator-redesign.preview.emergentagent.com'
    ],
  },
})
