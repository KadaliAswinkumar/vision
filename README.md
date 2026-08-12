# Vision — Premium Link-in-Bio

Ultra-modern personal links page for **Aswin Kumar Kadali** — React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Customize

### 1. Replace the profile image

1. Add your photo to `public/` as `profile.jpg` (or `.png` / `.webp`).
2. Open `src/components/Profile.tsx` and change:

```ts
const PROFILE_IMAGE = '/profile.svg'
```

to:

```ts
const PROFILE_IMAGE = '/profile.jpg'
```

### 2. Update all real URLs

Edit `src/data/links.ts` and replace each `url: '#'` with your real link, for example:

```ts
{ id: 'github', title: 'GitHub', url: 'https://github.com/yourhandle', ... }
```

Optional: update footer social hrefs in `src/components/Footer.tsx`.

### 3. Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In `vite.config.ts`, if your repo is **not** a user/org root site, set:

```ts
base: '/YOUR_REPO_NAME/'
```

   (`base: './'` works for many cases; an absolute `/repo/` path is more reliable for project pages.)

3. Deploy:

```bash
npm run deploy
```

4. In the GitHub repo → **Settings → Pages**, set source to the `gh-pages` branch (root).

Your site will be live at `https://<username>.github.io/<repo>/`.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
