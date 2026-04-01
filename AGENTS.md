# Repository Guidelines

## Project Structure & Module Organization
This repo is a small Vite + React + TypeScript app deployed as a static site. App code lives in `src/`: [`src/main.tsx`](/home/jnibarger/.openclaw/workspace-main/tire-promo/src/main.tsx) boots React, and [`src/App.tsx`](/home/jnibarger/.openclaw/workspace-main/tire-promo/src/App.tsx) contains the main UI and local state logic. The Vite entry HTML is [`index.html`](/home/jnibarger/.openclaw/workspace-main/tire-promo/index.html). Production output is written to `dist/` and should be treated as generated build artifacts. Deployment automation lives in `.github/workflows/deploy.yml`. The CSV file at the repo root is source data, not application code.

## Build, Test, and Development Commands
- `npm install`: install project dependencies.
- `npm run dev`: start the local Vite dev server for interactive development.
- `npm run build`: create the production bundle in `dist/`.
- `npm run preview`: serve the built output locally to verify the production build.

Run `npm run build` before opening a PR to catch TypeScript and bundling issues early.

## Coding Style & Naming Conventions
Use TypeScript with React function components and 2-space indentation. Keep imports grouped at the top and prefer double quotes to match the existing files. Use `PascalCase` for React component names, `camelCase` for variables and functions, and `UPPER_SNAKE_CASE` only for constant data blocks such as `RAW`. Keep new files inside `src/` unless they are docs or automation files.

## Testing Guidelines
There is no automated test suite configured yet. Until one is added, validate changes with `npm run build` and manual checks in `npm run dev` or `npm run preview`. When adding tests, place them alongside the feature or under a future `tests/` directory, and use names like `App.test.tsx` or `feature-name.test.ts`.

## Commit & Pull Request Guidelines
This repository currently has no commit history, so there is no established message convention to copy. Start with clear, imperative commits such as `feat: add callback filter` or `fix: persist selected rep`. PRs should include a short summary, any UI screenshots for visible changes, and the validation steps you ran (`npm run build`, browser smoke test, etc.).

## Deployment & Configuration Notes
GitHub Pages deployment is defined in `.github/workflows/deploy.yml` and currently triggers on pushes to `main`. Keep the app browser-only: the README documents `localStorage` persistence and no backend.
