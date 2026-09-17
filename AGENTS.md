# AGENTS.md

Personal portfolio site. Next.js 15 App Router + React 19, TypeScript (strict), Tailwind v3 + shadcn/ui (new-york), Zustand, next-intl, next-themes, Resend, web-push, Prisma/PostgreSQL.

## Commands

- `npm run dev` — dev server on `https://localhost:3000` (Next 15 `--experimental-https`; uses `certificates/*.pem` if present for custom certs).
- `npm run build` / `npm run start` — production build/serve.
- `npm run lint` — works, but runs deprecated `next lint` (flat ESLint config in `eslint.config.mjs`). Prefer `npx eslint .`.
- No test or typecheck script exists. Typecheck with `npx tsc --noEmit`.
- Formatting: Prettier is configured but there is no script. Run `npx prettier --write .`.
- DB: `npx prisma migrate deploy` then `npx prisma generate` (also runs on `postinstall`). Requires a PostgreSQL `DATABASE_URL`.
- Single test target: `npx eslint <file>` or `npx tsc --noEmit`; there is no unit/integration test suite.

## Architecture / gotchas

- Path alias `@/*` maps to the repo root.
- **i18n has no locale-prefix routing.** Locale is stored in the `MATIJAKOCEVARPORTFOLIO_LOCALE` cookie (default `en`), read in `i18n/request.ts`. `store/use-language-store.ts` sets the cookie via `document.cookie` and reloads. `messages/en.json` and `messages/sl.json` must stay in sync — add every new key to **both** files.
- **Clerk auth is stale/removed.** `.env.example` and `README.md` still mention Clerk, but `@clerk/nextjs` is NOT installed and the active `middleware.ts` is CORS-only. The old Clerk + route-protection middleware lives in `middleware.ts.bak` — do not reintroduce Clerk unless asked.
- `middleware.ts` applies CORS to `/api/:path*` and page routes with hardcoded allowed origins.
- **Site content is hardcoded in the app, not the DB.** Prisma has only `Score`, `Task`, `ContactSubmission` models. Projects, skills, experience, and bio data live in `app/projects/page.tsx` and the per-section `_store/` files (despite README's "projects in Postgres" claim).
- Contact form is a server action (`actions/email.ts`) using Resend, with IP-based rate limiting persisted to `ContactSubmission`. Needs `RESEND_API_KEY`, `CONTACT_EMAIL`, and a working DB.
- SVG icons are imported as React components via `@svgr/webpack` (webpack + turbopack rules in `next.config.ts`), and loaded dynamically by `components/icon-renderer.tsx` from `public/icons/*.svg`. Do not inline SVGs elsewhere.
- `next/image` has `unoptimized: true` and allows any `https` remote host.
- Theme system: `themes/*.css` define CSS vars per base color × light/dark; the theme list is generated in `store/use-theme-store.ts` (default `blue-dark`), consumed via `next-themes`.
- PWA: `app/manifest.ts` + `public/sw.js` + web-push. HTTPS is required in dev (hence `--experimental-https`).

## Conventions

- Prettier: single quotes, `jsxSingleQuote`, 4-space indent, printWidth 120, tailwind plugin.
- Per-section code goes under `app/<section>/` with private `_components/` and `_stores/` folders (`_` = not routed).
- Zustand stores: global ones in `store/`, section-local ones in `app/<section>/_stores/`.
- ESLint `@typescript-eslint/no-unused-vars` is warn-only; unused imports are common and won't fail lint.

## Git

- Default branch is `develop`; `master` is production. Changes flow `develop` → `master` via PRs.

## Stale files

- `middleware.ts.bak` — old Clerk-based middleware; ignore.
