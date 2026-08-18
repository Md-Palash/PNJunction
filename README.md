# PNJunction — Phase 1

Global design system, navigation, footer, and homepage for PNJunction, built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

This phase intentionally includes only the homepage and shared shell (navbar/footer).
No topic pages, article pages, tools pages, auth, or backend — those come later.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Homepage — assembles all sections
  globals.css        Tailwind layers + the pn-card / pn-btn / pn-badge system
components/
  Navbar.tsx          Sticky global nav, mobile menu
  Hero.tsx            Headline, CTAs, entrance animation
  HeroVisual.tsx       Connected-node visual (Framer Motion pulse)
  TopicsSection.tsx / TopicCard.tsx     Image-led topic grid
  LatestSection.tsx / ContentCard.tsx    Editorial horizontal content cards
  ToolsSection.tsx / ToolCard.tsx       Tools preview grid
  StartHere.tsx        3-step onboarding
  NewsletterSection.tsx
  Footer.tsx
  Button.tsx / Badge.tsx / SectionHeader.tsx   Shared primitives
  icons.tsx            Inline SVG icon set
  ui/Reveal.tsx         Shared scroll-reveal wrapper (Framer Motion)
lib/
  data.ts              Topics / latest items / tools / steps content
public/images/topics/  Topic imagery (original abstract duotone compositions)
```

## Design tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `page` | `#FCFCFA` | Page background (milky white) |
| `card` | `#FFFFFF` | Card surface |
| `surface2` | `#F7F8F7` | Secondary/tinted section background |
| `ink` | `#0B1733` | Primary text, deep navy |
| `inkSoft` | `#64748B` | Secondary text |
| `borderc` | `#E7E9E4` | Subtle borders |
| `accent` | `#2563EB` | Soft technology blue |
| `accentSoft` | `#EAF2FF` | Accent backgrounds/badges |
| `accentStrong` | `#1D4ED8` | Accent hover/active |

Card radius scale: `rounded-lg2` (24px, large cards), `rounded-md2` (20px, medium), `rounded-sm2` (18px, small).

## Notes on the topic imagery

Rather than stock photography (copyright risk, cliché "person at laptop" imagery),
`public/images/topics/` contains eight original, procedurally generated abstract
duotone compositions in the site's navy/blue palette — one distinct scene per topic.
Swap these for real photography/illustration whenever you're ready; every `<Image>`
reference lives in `lib/data.ts`.

## What's next

Per the phased build plan: Topics index + individual topic pages, Latest (articles/news),
Tools pages, Search, and eventually auth/CMS/admin — each as a separate phase.
