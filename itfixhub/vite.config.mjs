import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// CDN configuration - can be customized for different CDN providers
// Examples:
// - GitHub Pages: './'
// - jsDelivr: 'https://cdn.jsdelivr.net/gh/yourusername/AIpage@latest/itfixhub/'
// - unpkg: 'https://unpkg.com/AIpage@latest/itfixhub/'
const CDN_BASE = './'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: CDN_BASE,
  build: {
    // CSS code splitting for better caching
    cssCodeSplit: true,
    // Enable minification using esbuild (faster and built-in)
    minify: 'esbuild',
    // Disable sourcemap for production (smaller bundle size)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Generate manifest.json for PWA and resource tracking
    manifest: true,
    // Enable tree shaking
    target: 'esnext',
    // Module preload for faster initial load
    modulePreload: {
      polyfill: true,
    },
    // Report compressed size for analysis
    reportCompressedSize: true,
    // Drop console in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Rollup optimization
    rollupOptions: {
      output: {
        // Manual chunks for vendor code separation (better caching)
        manualChunks: (id) => {
          // React core - load immediately (critical)
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'vendor-react'
          }
          // Radix UI components - lazy load
          if (id.includes('@radix-ui')) {
            return 'vendor-radix'
          }
          // Icons - lazy load
          if (id.includes('lucide-react')) {
            return 'vendor-icons'
          }
          // Tailwind utilities
          if (id.includes('tailwindcss') || id.includes('tailwind')) {
            return 'vendor-tailwind'
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor-misc'
          }
        },
        // Asset file naming with hash for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: (chunkInfo) => {
          // Put vendor chunks in separate directory for better organization
          if (chunkInfo.name?.startsWith('vendor-')) {
            return 'assets/vendor/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
