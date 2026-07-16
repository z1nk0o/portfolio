# Trex Dexter Reapor — Portfolio

Personal portfolio website: junior programmer specializing in web development and ERP systems.

**🌐 Live:** [portfolio-trex-reapor.vercel.app](https://portfolio-trex-reapor.vercel.app)

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · deployed on Vercel

**Details:** dark/light mode with an animated circular-reveal transition (View Transitions API), an animated hero portrait, and full mobile responsiveness. Reduced-motion preferences are respected throughout.

## Editing content

All content lives in [`src/data/resume.ts`](./src/data/resume.ts) — profile, experience, projects, skills, and education. Edit that file to update the site; no component changes needed.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |

## Deploy

Import the repo into [Vercel](https://vercel.com/new) — no environment variables needed. Free tier is sufficient.
