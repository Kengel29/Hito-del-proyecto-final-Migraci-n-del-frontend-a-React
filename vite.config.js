import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' hace que funcione en GitHub Pages sin importar el nombre del repo
export default defineConfig({
  plugins: [react()],
  base: './',
})
