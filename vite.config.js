import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // CSS code splitting
    cssCodeSplit: true,
    // Enable CSS minification
    minify: 'terser',
    // Generate sourcemaps for production (disable for smaller size)
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Target modern browsers for smaller bundles
    target: 'es2015',
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // Optimization settings
  optimizeDeps: {
    include: [],
  },
  // Server configuration
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  // Preview server configuration  
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
});
