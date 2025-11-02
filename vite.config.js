import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WhiteOut-thegame/',
  assetsInclude: ['**/*.mov'],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  },
})
