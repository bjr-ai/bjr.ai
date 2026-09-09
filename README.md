# bjr.ai

Source for [bjr.ai](https://www.bjr.ai) — BJ Richardson's consultancy homepage and case studies.

Next.js App Router, TypeScript, Tailwind 4. Static/server-rendered by default; client
components only where interaction is needed (nav menu, the KPI "why this matters"
tooltips, the case-study Before/After toggle).

## Routes

- `/` — homepage: positioning, proof, how I help, approach, experience, contact.
- `/work/bank-resources` — Case Study 001: the Bank Resources site recovery and migration.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start   # production build + serve
```

## Brand tokens

Colors, type, and spacing tokens live in `app/globals.css`. Fonts are Space Grotesk
(display), Inter (body), and IBM Plex Mono (accent/labels only), loaded via `next/font`.

## Deployment

Deployed on Vercel from this repo. `main` is production; feature work happens on
branches and previews before merging.
