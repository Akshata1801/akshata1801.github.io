# Akshata Pore — Portfolio

Static React + Vite + Tailwind v4 portfolio. Compatible with GitHub Pages.

## Develop
```
npm install
npm run dev
```

## Build
```
npm run build
```
Output goes to `dist/`.

## Deploy to GitHub Pages

### Option A — automatic via GitHub Actions
1. Push this repo to GitHub.
2. In repo Settings → Pages, set Source to "GitHub Actions".
3. Edit `.github/workflows/deploy.yml` and set `VITE_BASE: /<your-repo-name>/`
   (or leave `/` if deploying to a `username.github.io` user site).
4. Push to `main`. The workflow builds and deploys automatically.

### Option B — manual via gh-pages
```
VITE_BASE=/<repo-name>/ npm run build
npx gh-pages -d dist
```

## Notes
- Pure client-side (no SSR, no server functions, no Cloudflare).
- Resume PDF lives in `public/Akshata_Pore_Resume.pdf`.
