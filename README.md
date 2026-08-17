# PNJunction

Phase 1 rebuild: global design system, global navigation, global footer, and
the homepage. See `DESIGN_SYSTEM.md` for the full token and component
reference.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: the build fetches **Plus Jakarta Sans** and **Inter** from Google
> Fonts at build time via `next/font/google`. This requires normal internet
> access — if you build in a network-restricted sandbox, the fetch will
> fail; it will work in a standard dev/CI environment.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`next/core-web-vitals`)

## Structure

```
app/                  Next.js App Router entry (layout, homepage, globals.css)
components/           Page sections (Hero, TopicsSection, LatestSection, ...)
components/ui/        Reusable primitives (Card, Button, Badge, SectionHeader, Logo)
lib/                  Design tokens' logic: motion variants, content data, cn() helper
```

## Scope of this phase

Built: design system, navbar, footer, homepage (hero, topics, latest
preview, tools preview, start here, newsletter preview).

Not built yet (future phases): article pages, topic pages, latest page,
tools pages, newsletter page, about page, admin, auth, backend, CMS.
