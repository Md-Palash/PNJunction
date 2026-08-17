# PNJunction

## Where things stand

The design tokens and reusable primitives from Phase 01 are unchanged and
still live entirely in code (`tailwind.config.ts`, `app/globals.css`,
`lib/tokens.ts`) — visitors never see a "design system" page. On top of
that foundation, the real homepage now exists with exactly three pieces,
per the current brief:

1. **Navbar** — logo + search affordance only. No invented nav links.
2. **Hero** — headline, supporting copy, two CTAs, and a signature
   "junction" graphic (topic-colored nodes converging on a central hub).
3. **Explore Topics** — an 8-topic, image-led card grid (4×2 desktop,
   1-column mobile), driven by `lib/data/topics.ts`.

Nothing else (Latest, Tools, Newsletter, About, footer, topic/article
pages) has been built yet — intentionally, waiting for review.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** — deploys cleanly to Vercel
- **Tailwind CSS** — all design tokens centralized in `tailwind.config.ts` + `app/globals.css`
- **lucide-react** — the only icon set used anywhere (no emoji-as-icon)
- No animation library — motion is CSS + a small `IntersectionObserver` hook (`AnimatedSection`), kept intentionally lightweight

## Design decisions

**Typography.** Two-face system: **Sora** (a geometric, slightly technical
display face) for Display/H1–H3, and **Inter** for H4–H6, body, and all UI
text. This is a deliberate exception to "one typeface" — Sora gives the
brand a distinct, technological personality at headline sizes without
sacrificing Inter's best-in-class readability everywhere text is actually
read at length.

**Color.** Deep Navy (`#0B1733`) is the anchor — used for text, primary
buttons and the logomark — with Technology Blue (`#2563EB`) reserved for
accents and links so the site never reads as "a blue website." Each of the
8 content topics gets its own soft, desaturated accent (see
`lib/tokens.ts`), applied only to small surfaces (badges, icons, thin
washes) — never as a large saturated block.

**Cards.** The core of PNJunction's identity: white surface, a hairline
border, and a soft, layered, navy-tinted shadow (never pure black). On
hover/focus, cards lift ~6px and gain one elevation step — restrained,
not floaty, not rotated.

**Signature element.** The logomark is a literal junction: three paths
converging on a single node, echoing how the site itself is where
separate topics (AI, Linux, hardware, security…) meet at one calm point
of reference. It reappears as a quiet ambient motif behind the hero.

## Design tokens — single source of truth

| Concern | Where it lives |
|---|---|
| Colors (surfaces, brand, text, borders, topics) | CSS variables in `app/globals.css`, exposed to Tailwind via `tailwind.config.ts` |
| Topic → color/label mapping | `lib/tokens.ts` (data-driven, typed by `types/index.ts`) |
| Radius scale (`sm` 16px / `md` 20px / `lg` 24px) | `tailwind.config.ts` → `borderRadius` |
| Elevation (3 levels) | CSS variables `--shadow-elevation-*` → Tailwind `shadow-elevation-*` |
| Motion durations/easing | CSS variables + `tailwind.config.ts` → `transitionDuration` |
| Type scale (display → label) | `tailwind.config.ts` → `fontSize` |

Nothing above should ever be hardcoded again in a component — extend the
token file instead.

## Components

`components/ui/`: `Container`, `Section`, `Typography` (Display, H1–H6,
Body, BodyLarge, Small, Meta, Label), `Button`, `Badge`, `Card` (+
`CardEyebrow`/`CardTitle`/`CardDescription`/`CardFooter`), `TopicCard`
(image-led, placeholder-aware), `HeroGraphic` (the hero's signature
visual), `Image`, `AnimatedSection`, `Logo`/`LogoMark`.

`components/layout/`: `Navbar` — logo + search affordance, sticky,
scroll-elevated. Intentionally minimal: no Articles/Guides/Tools/About
links until those pages exist. **No footer** — later phase.

## Content typing & data

`types/index.ts` defines `Topic { slug, name, description, image?,
accentColor }`, plus `Article`/`Tool` for later phases. `lib/data/topics.ts`
holds the actual 8-topic content, kept separate from presentation —
`TopicCard` is the only place that maps a topic to markup.

`Topic.image` is intentionally left `undefined` for now. `TopicCard`
renders a designed placeholder (soft topic wash + centered mark) instead
of stock photography — swap in `image` later and the real photo renders
in the same slot with no component changes.

## Accessibility & performance checklist

- [x] 4.5:1+ text contrast (navy-on-milky-white, verified against all text tokens)
- [x] 44px minimum touch targets on every interactive control
- [x] Visible focus rings on every focusable element (`:focus-visible` in `globals.css`)
- [x] `prefers-reduced-motion` collapses all reveal/hover motion to instant
- [x] Semantic HTML (`header`, `nav`, `main`, heading hierarchy)
- [x] No emoji-as-icon anywhere — `lucide-react` throughout
- [x] SEO foundation: title template, canonical, Open Graph, Twitter card in `app/layout.tsx`

## Running locally

```bash
npm install
npm run dev
```

> Note: `next/font/google` fetches Sora/Inter from Google Fonts at build
> time. This requires normal internet access (available on Vercel and any
> standard dev machine) — it's the only reason a build would fail in a
> network-locked sandbox.

## Explicitly not built (by design — see brief)

Latest section, Tools section, Newsletter, About, footer, topic detail
pages, article pages, admin dashboard, auth, database, CMS. All of these
will consume the tokens and components above in later phases.
