import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    'process': '{}'
  },
  build: {
    lib: {
      entry: 'src/init.ts',
      formats: ['umd', 'iife'],
      name: 'Greeter',
      fileName: (format) => `greeter.${format}.js`
    },
    rollupOptions: {
      // No externals; bundle everything for self-contained output
      output: {
        globals: {
          // No need for globals since Vue is bundled
        }
      }
    }
  }
});
