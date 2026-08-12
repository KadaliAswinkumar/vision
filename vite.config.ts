import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set base to '/<repo-name>/' when deploying to GitHub Pages project site.
// Example: base: '/vision/'
// For username.github.io root repo, use base: '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/vision/',
})
