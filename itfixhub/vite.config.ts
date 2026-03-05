import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer (only in dev/build, can be removed in production)
    // import { visualizer } from 'rollup-plugin-visualizer'
  ],
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
    // Minify options for terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Manual chunks for vendor code separation (better caching)
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          'vendor-icons': ['lucide-react'],
        },
        // Asset file naming with hash for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Compact output for smaller file size
        compact: true,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Exclude large dependencies from optimization
    exclude: [],
  },
  // Server configuration
  server: {
    // Enable fast HMR
    hmr: {
      overlay: true,
    },
  },
  // Preview configuration
  preview: {
    port: 4173,
  },
})
