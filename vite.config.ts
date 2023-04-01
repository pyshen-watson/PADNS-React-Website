import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve:{
    alias:{
      '@Page': '/src/Pages',
      '@Components': '/src/Components',
      '@Assets': '/src/Assets',
      '@Data': '/src/Data',
    }
  }
})
