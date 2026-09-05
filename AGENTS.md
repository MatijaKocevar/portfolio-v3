# AGENTS.md

Personal portfolio (Next.js 15 App Router + TypeScript). Single app — no monorepo.

## Commands

- `npm run dev` — dev server over HTTPS (`--turbopack --experimental-https`) at `https://localhost:3000`. PWA features need `certificates/cert.pem` + `key.pem` (see `README.md`; dir is gitignored, generated with `mkcert`).
- `npm run lint` — ESLint via `next lint` (Next 15.2). There is **no** `typecheck` or `test` script and no test framework; lint + `npm run build` are the only verification.
- `npx prisma generate` runs automatically on `postinstall`. Apply schema changes with `npx prisma migrate deploy` (or `migrate dev`); migrations live in `prisma/migrations`.
- `npm run build` before commit/PR to catch type errors (build runs TS checking).

## Paths / structure

- `@/*` maps to the **repo root** (`./*`), not `src/`.
- App Router routes under `app/`: `(home)`, `about`, `experience`, `projects`, `skills`, `interests`, `contact`. Route-scoped code lives in each route's `_components` / `_stores` (co-located, underscore-prefixed so Next ignores them).
- `components/ui/*` — shadcn/ui components (customized; edit in place, don't regenerate blindly).
- `lib/prisma.ts` — Prisma singleton (dev hot-reload safe).
- `store/` — Zustand global stores (theme, language, navigation). Per-route state uses `_stores` folders instead.

## Conventions that differ from defaults

- **Formatting (Prettier):** single quotes, `jsxSingleQuote`, `tabWidth: 4`, `printWidth: 120`, tailwind class sorting. Match this — it's enforced by `.prettierrc`.
- **SVGs** are imported as React components via SVGR (`import Icon from './x.svg'`); loader is configured in `next.config.ts` (both webpack and turbopack rules). No `<img src="*.svg">`.
- `next/image` has `unoptimized: true` and allows any `https` remote host.

## i18n (next-intl v4)

- Locale comes from the `MATIJAKOCEVARPORTFOLIO_LOCALE` cookie (`i18n/request.ts`); default `en`.
- Adding/editing user-facing text requires updating **both** `messages/en.json` and `messages/sl.json`. Keys are flat namespace strings (e.g. `app.meta.title`).

## Auth / middleware

- `middleware.ts` is **CORS-only** (matcher: `/api/:path*` + pages) and does **not** run Clerk. Despite `README.md` and `.env.example` mentioning Clerk, Clerk auth has been removed from the home layout (see commit "Simplify home layout: remove Clerk auth"). Don't reintroduce it without asking.
- `middleware.ts.bak` is a stale leftover — ignore it.
- CORS allowed origins are hardcoded in `middleware.ts`; add new domains there.

## Data / env

- PostgreSQL via Prisma; models are `Score`, `Task`, and `ContactSubmission`. API routes under `app/api/*` return plain JSON.
- Contact form (`actions/email.ts`) stores submissions in `ContactSubmission` (with IP + user-agent) and sends email via Resend. It has server-side validation plus IP rate-limiting (3 emails/hour, block at 8) — silently returns `success: true` to spammers. Web push via `actions/webpush.ts` / `webpush/`.
- `.env.local` is the real env (gitignored); `.env.example` is the documented template.
- Theming: custom CSS files in `themes/*.css` wired through `next-themes` (`defaultTheme: 'blue-dark'`).

## Git

- Default branch is `develop`; `master` is production. Changes flow `develop` → `master` via PRs.
