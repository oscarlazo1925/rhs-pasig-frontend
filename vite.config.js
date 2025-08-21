// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [react()],
//   base: '/rhs-pasig-frontend/',
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'RHS Pasig',
        short_name: 'RHS Pasig',
        description: 'RHS Pasig Frontend App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/rhs-pasig-frontend/',
        start_url: '/rhs-pasig-frontend/',
        icons: [
          {
            src: '/rhslogo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/rhslogo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/rhslogo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  base: '/rhs-pasig-frontend/', // 👈 keep your GitHub Pages base
})
