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
    // Enable minification
    minify: 'terser',
    // Disable sourcemap for production (smaller bundle size)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Generate manifest.json for PWA
    manifest: true,
    rollupOptions: {
      output: {
        // Manual chunks for vendor code separation (better caching)
        manualChunks: {
          vendor: ['react', 'react-dom'],
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
  },
})
