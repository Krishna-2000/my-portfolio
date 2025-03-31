import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./", 
  plugins: [react(), tailwindcss()],
  esbuild: {
    jsx: "automatic",
    logOverride: { "this-is-undefined-in-esm": "silent" } // Show clearer errors
  }
})
