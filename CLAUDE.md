# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a personal portfolio site scaffolded from Vite's default `react` template. The app (`src/App.jsx`) still contains the unmodified Vite/React starter markup (counter button, "Get started" links) — no portfolio content has been built yet.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project

There is no test runner configured in this repo.

## Architecture

- Plain JS + JSX (no TypeScript), single-page app entry at `src/main.jsx` mounting `src/App.jsx` into `#root` (defined in `index.html`).
- Vite config (`vite.config.js`) only wires up `@vitejs/plugin-react`; no aliases, env handling, or other customization yet.
- ESLint (`eslint.config.js`) uses flat config: `@eslint/js` recommended + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite preset), targeting `**/*.{js,jsx}` with browser globals. `dist` is ignored.
- Static assets referenced via `/icons.svg#<id>` (an SVG sprite in `public/`) rather than individual icon files.

## Deployment

`Dockerfile` is a two-stage build: the `build` stage runs `npm ci && npm run build`, the runtime stage is `nginx:alpine` serving the built `dist/` output as static files per `nginx.conf` (SPA fallback to `index.html`, gzip, long-cache headers on `/assets/`). Nginx listens on port 5124 with `server_name www.careerjourney.io careerjourney.io`. Configured for deployment via Dokploy, which expects the app to listen on port 5124 and handles the actual domain routing/SSL termination (Traefik) in front of the container.
