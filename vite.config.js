import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// More permissive dev server config to ensure preview works across proxy domains
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true,
  },
  server: {
    port: 3000,
    host: true, // listen on all interfaces
    strictPort: true,
    // Allow any host (useful for ephemeral preview URLs)
    allowedHosts: true,
    hmr: false,
    watch: false,
    cors: true,
  },
})
