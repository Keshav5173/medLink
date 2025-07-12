import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  proxy: {
      '/login': 'http://localhost:5000',
      '/register': 'http://localhost:5000',
      '/home': 'http://localhost:3000',
    },
  plugins: [
    tailwindcss()

,    react()],
})
