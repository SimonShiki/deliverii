import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import progress from 'vite-plugin-progress'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), progress()],
  resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
  }
})
