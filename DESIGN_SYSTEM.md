# PNJunction — Global Design System

This is the foundation for the entire PNJunction platform. Every future page
(Topics, Latest, Tools, About, etc.) should be built on top of these tokens
and components rather than introducing new ones.

## 1. Brand feel

Modern, clean, intelligent, premium, trustworthy, visual, fast, slightly
futuristic. Never: newspaper, generic blog, corporate SaaS dashboard,
AI-template, cluttered magazine, gaming site.

## 2. Color tokens — milky-white system

Light theme only. The page is never pure white; cards sit one step
brighter than the page so the interface reads as soft and layered rather
than stark.

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FCFCFA` | Primary page background (milky white) |
| `bg-secondary` | `#F7F8F7` | Section backgrounds, footer |
| `surface` | `#FFFFFF` | Card surface — brighter than the page |
| `ink` | `#0B1733` | Primary text, headings — deep navy, never pure black |
| `ink-soft` | `#5B6577` | Secondary text |
| `ink-faint` | `#8B93A3` | Meta text, timestamps |
| `border` | `#EAEAE6` | Default hairline border |
| `border-strong` | `#DEDFDA` | Hover border state |
| `accent` | `#2563EB` | Primary blue accent — used sparingly |
| `accent-deep` | `#1D4FC4` | Hover/active accent, badge text |
| `accent-soft` | `#EAF2FF` | Accent backgrounds (badges, icon tiles) |

Blue is a controlled accent, not a dominant background color. Most of the
UI stays milky-white / navy / gray.

## 3. Typography

- **Headings** — Plus Jakarta Sans (500/600/700/800), tight tracking (`-0.02em`)
- **Body** — Inter (400/500/600)
- Base body size 16px, line-height 1.5+
- Large editorial headline in the hero (38–54px), short paragraphs everywhere else

## 4. The Junction Card system (signature element)

Every card in the product — topic, content, tool, newsletter — is built on
the shared `<Card>` primitive (`components/ui/Card.tsx`) and the
`.junction-card` CSS in `app/globals.css`:

- Soft, low-key layered shadow (`shadow-card-idle` → `shadow-card-hover`)
  — a card gently sitting above the milky-white page, never a heavy drop
  shadow or exaggerated 3D
- Tiered corner radius: `rounded-card-lg` (24px, large/hero cards),
  `rounded-card-md` (20px, the default — topic/content/tool cards),
  `rounded-card-sm` (16px, compact elements)
- Hairline border that shifts to `border-strong` on hover
- Card content is clipped to the rounded corners (`overflow-hidden`), so
  image-led cards get consistently rounded imagery for free
- A small **junction mark** in the top-right corner on text-only utility
  cards (Tools, Start Here, Newsletter) — a node with two hairline traces.
  Image-led cards (Topic, Latest) omit it (`showMark={false}`) so it never
  competes with the artwork
- Hover: `translateY(-5px)` + `scale(1.01)` + deeper shadow, ~350ms with
  the `junction` easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`); any image
  inside the card (`.junction-card-image`) zooms to `scale(1.02)` in sync
- `prefers-reduced-motion` disables the transform, keeping only the shadow

Do not create one-off card styles. Compose `<Card>` for new card types.

### Card art

No licensed photography was supplied for this pass. Rather than pull
unlicensed stock photos into the codebase, topic and content cards use a
layered "cover" composition (`components/CardArt.tsx`): a two-tone
gradient mesh unique per topic, soft depth blobs, and the topic's glyph
(`components/TopicGlyphs.tsx`) drawn large. It occupies the same image slot
a real photo would — swap in `next/image` with a licensed photo per topic
when one is sourced; no layout changes needed.

## 5. Motion

Shared variants live in `lib/motion.ts` (`fadeUp`, `fadeIn`, `scaleIn`,
`staggerContainer`). Page-load reveal order on the homepage: navbar →
hero copy → hero visual → topic cards → latest → tools. Sections below the
fold reveal on scroll via `whileInView`, once, with a small stagger —
never a long cinematic intro, never bouncy easing.

## 6. Spacing & layout

- Content is constrained to `container-wide` (1240px max) with responsive
  `section-pad` gutters
- Spacing scale follows Tailwind's 4px base; sections use a generous
  64–112px vertical rhythm (`py-16 sm:py-20 lg:py-28`)
- Card gaps run 20–28px (`gap-5` → `gap-7` across breakpoints); internal
  card padding runs 20–24px (`p-5`/`p-6`)
- Grid: 4 columns desktop / 3 tablet / 1 mobile for topic cards (image-led,
  needs room to breathe); 2 columns desktop / 1 mobile for Latest's
  horizontal editorial cards; 3/2/1 for tool cards

## 7. Accessibility floor

- All interactive targets ≥ 44×44px
- Visible focus ring (`:focus-visible`) in accent blue on every interactive
  element — never removed
- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`)
- Color is never the only signal (topic badges carry text, not just color)
- Reduced-motion respected in both CSS (`@media (prefers-reduced-motion)`)
  and Tailwind (`motion-safe:` utilities on the hero visual)

## 8. Component inventory

| Component | Path |
|---|---|
| Navbar | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |
| Hero + HeroVisual | `components/Hero.tsx`, `components/HeroVisual.tsx` |
| TopicCard / TopicGrid / TopicsSection | `components/Topic*.tsx` |
| ContentCard / LatestSection | `components/ContentCard.tsx`, `components/LatestSection.tsx` |
| ToolCard / ToolsSection | `components/ToolCard.tsx`, `components/ToolsSection.tsx` |
| StartHere | `components/StartHere.tsx` |
| NewsletterSection | `components/NewsletterSection.tsx` |
| UI primitives | `components/ui/` (Card, Button, Badge, SectionHeader, Logo, JunctionMark) |

## 9. What's intentionally not built yet

Per the current phase scope: no Article/Topic/Latest/Tools detail pages, no
Newsletter page, no About page, no auth, no CMS, no backend. Homepage links
to these routes point at anchors or placeholder hrefs (`#`, `/about`, etc.)
until those pages exist.
