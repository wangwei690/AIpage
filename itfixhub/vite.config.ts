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
  base: './',
  build: {
    // CSS code splitting for better caching
    cssCodeSplit: true,
    // Enable minification (using esbuild which is faster and built-in)
    minify: 'esbuild',
    // Disable sourcemap for production (smaller bundle size)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Generate manifest.json for PWA
    manifest: true,
    // Enable tree shaking
    target: 'esnext',
    // Module preload for faster initial load
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        // Manual chunks for vendor code separation (better caching)
        manualChunks: (id) => {
          // React core - load immediately
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
          if (id.includes('tailwind')) {
            return 'vendor-tailwind'
          }
        },
        // Asset file naming with hash for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Pre-build dependencies for faster initial load
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
