import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // ou 'node', dependendo do que você precisa
    setupFiles: './src/setupTests.js', // Adicione esta linha
  },
})
