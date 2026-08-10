# PNJunction

A premium technology platform — homepage, article template, category template,
search experience, tools hub, individual tool template, and about page.
Apple / Vercel / Linear / Notion–inspired design system throughout.

No backend, no auth, no database — every page is a static or client-rendered
UI layer with realistic mock data, built to be wired up to real
content/services later without redesigning anything.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, 6 categories, latest articles, popular tools, newsletter |
| `/articles/[slug]` | Reusable article template (reading progress, TOC, callouts, code blocks) |
| `/categories/[category]` | Reusable category template (filter/sort/search, working client-side) |
| `/search` | Search experience (⌘K to focus, live typeahead with highlighted matches) |
| `/tools` | Free Tools Hub — featured/popular/newest tools, collections, FAQ |
| `/tools/[slug]` | Reusable individual tool template (QR Generator shown as the example) |
| `/about` | About page — mission, coverage, trust signals, values, roadmap, FAQ |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production

```bash
npm run build
npm start
```

This has been build-tested end to end (`next build` completes cleanly across
all 7 routes).

## Project structure

```
app/
  page.tsx                    → homepage
  layout.tsx                  → root layout, loads Inter + Geist
  globals.css
  articles/[slug]/page.tsx
  categories/[category]/page.tsx
  search/page.tsx
  tools/page.tsx
  tools/[slug]/page.tsx
  about/page.tsx
components/
  *.tsx                       → homepage sections (Navbar, Hero, Footer, etc.)
  article/                    → article template components
  category/                   → category template components
  search/                     → search experience components
  tools/                      → tools hub components
  tool/                       → individual tool template components
  about/                      → about page components
```

## Design tokens

| Role | Value |
|---|---|
| Background | `#FFFFFF` |
| Secondary surface | `#F6F7F9` |
| Navy (primary) | `#0B1730` |
| Accent (blue) | `#2F6FED` |
| Text | `#0B1220` |
| Text muted | `#5B6472` |
| Border | `#E6E9EF` |
| Display font | Geist (via the `geist` npm package) |
| Body font | Inter (via `next/font/google`) |

## Notes on what's real vs. placeholder

- **Real, working interactivity**: category page filtering/sorting/search,
  search page ⌘K + typeahead + arrow-key navigation, article table of
  contents (scroll-spy), FAQ accordions, the tool page's Generate/Reset/Copy
  flow (UI state only — no actual QR encoding), newsletter forms (UI only,
  no submission wired).
- **Static placeholders by design**: hero/article images, download buttons,
  "Contact"/"Careers"/"Privacy"/"Terms" footer links, author social icons,
  trending topics, popular tags — these were specified as UI-only in each
  page's brief.
- **Dynamic routes are templates, not per-item pages**: `/articles/[slug]`,
  `/categories/[category]`, and `/tools/[slug]` all render the same
  hardcoded example content regardless of the slug you visit. Swapping in
  a CMS or database means editing each route's data source, not the layout.
- Every card that links to another built page uses real Next.js routing;
  a few links (Contact, Careers, Privacy, Terms) point to `#` because those
  pages don't exist yet.

## Everything not built (on purpose)

Per each page's brief: no backend, no authentication, no admin dashboard,
no database, no working tool logic (QR generation, password generation,
image compression, etc.), no CMS. All content is realistic mock data.
