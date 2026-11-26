# Siriwat's portfolio
Next.js App Router + TypeScript + Material UI. Three routes:
- /: about, profile, passion, and tech stack
- /projects/: project cards, details, and demo links
- /contact/: email, GitHub, and LinkedIn

## Local development
Use Node.js 22 or later.
Run npm ci, then npm run dev. Open http://localhost:3000.
Run npm run typecheck and npm run build for production checks.
The static export is generated in out/.

## Personalize
Edit src/data/portfolio.ts for profile, stack, projects, demo URLs, and contact links.
Edit src/app/page.tsx for your introduction and passion.
The shared MUI theme is in src/components/Providers.tsx.
Empty demo, email, and LinkedIn URLs show disabled buttons instead of invented links.

## GitHub Pages
The workflow installs from package-lock.json, checks TypeScript, builds the export,
and deploys out/. It runs on pushes to main and manually.
In repository Settings > Pages, select GitHub Actions.
NEXT_PUBLIC_BASE_PATH is /portfolio for siriwat191260.github.io/portfolio/.
Change that workflow variable if renaming the repository.
Local development uses no base path.
Legacy HTML files remain as references; GitHub Pages deploys only the Next.js export.
