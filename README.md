# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Deployment on GitHub
1. Install Vite Plugin for GitHub Pages >> Vite requires a plugin to handle GitHub Pages deployment properly. Run:
    - npm install gh-pages --save-dev
2. Add homepage (optional but recommended) >> In your package.json, add a homepage field that points to your repo:
    - "homepage": "https://your-username.github.io/your-repo"
    - e.g. https://oscarlazo1925.github.io/myapp 
3. Configure vite.config.js
   ```
   import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'

      export default defineConfig({
      plugins: [react()],
      base: '/<your-repo>/', // 👈 important for GitHub Pages
      })
   ```
  4. Update package.json Scripts
      ```
      "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
      }
      ```
  5. Push to GitHub
     ```
      git init
      git remote add origin https://github.com/<your-username>/<your-repo>.git
      git add .
      git commit -m "Initial commit"
      git push -u origin main
     ```
  6. Deploy to GitHub Pages
     ```
     npm run deploy

     - This will:
     - Build your app into dist/
     - Push it to the gh-pages branch
     - Publish to GitHub Pages automatically

     ```
  7. Enable GitHub Pages
      - Go to your repo on GitHub → Settings → Pages
      - Select Deploy from branch
      - Pick branch = gh-pages and folder = / (root)
      - Save
         - Your app should be live at:
           - https://your-username.github.io/your-repo/

  8. Read >> https://chatgpt.com/share/68a6bcea-b0f8-800c-b493-40c456eaeec0
