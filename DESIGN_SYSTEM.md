# PNJunction — Global Design System

This is the foundation for the entire PNJunction platform. Every future page
(Topics, Latest, Tools, About, etc.) should be built on top of these tokens
and components rather than introducing new ones.

## 1. Brand feel

Modern, clean, intelligent, premium, trustworthy, visual, fast, slightly
futuristic. Never: newspaper, generic blog, corporate SaaS dashboard,
AI-template, cluttered magazine, gaming site.

## 2. Color tokens

Light theme only.

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FFFFFF` | Primary background |
| `bg-secondary` | `#F7F9FC` | Section backgrounds, footer |
| `ink` | `#0B1733` | Primary text, headings |
| `ink-soft` | `#64748B` | Secondary text |
| `ink-faint` | `#94A3B8` | Meta text, timestamps |
| `border` | `#E7EBF3` | Default hairline border |
| `border-strong` | `#DCE3EF` | Hover border state |
| `accent` | `#2F6FED` | Primary blue accent — used sparingly |
| `accent-deep` | `#1B4FC4` | Hover/active accent, badge text |
| `accent-soft` | `#EAF1FF` | Accent backgrounds (badges, icon tiles) |

Blue is a highlight, not a background color. Most of the UI stays white /
navy / gray, with blue reserved for interactive and brand moments.

## 3. Typography

- **Headings** — Plus Jakarta Sans (500/600/700/800), tight tracking (`-0.02em`)
- **Body** — Inter (400/500/600)
- Base body size 16px, line-height 1.5+
- Large editorial headline in the hero (38–54px), short paragraphs everywhere else

## 4. The Junction Card system (signature element)

Every card in the product — topic, content, tool, newsletter — is built on
the shared `<Card>` primitive (`components/ui/Card.tsx`) and the
`.junction-card` CSS in `app/globals.css`:

- Soft layered shadow (`shadow-card-idle` → `shadow-card-hover`) for a
  subtly lifted, physical feel — never flat, never exaggerated 3D
- Hairline border that shifts to `border-strong` on hover
- A small **junction mark** in the top-right corner: a node with two
  hairline traces, echoing the product's name and its circuit motif,
  without illustrating a literal circuit board
- Hover: `translateY(-4px)` + `scale(1.01–1.02)` + deeper shadow, ~350ms
  with the `junction` easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`)
- `prefers-reduced-motion` disables the transform, keeping only the shadow

Do not create one-off card styles. Compose `<Card>` for new card types.

## 5. Motion

Shared variants live in `lib/motion.ts` (`fadeUp`, `fadeIn`, `scaleIn`,
`staggerContainer`). Page-load reveal order on the homepage: navbar →
hero copy → hero visual → topic cards → latest → tools. Sections below the
fold reveal on scroll via `whileInView`, once, with a small stagger —
never a long cinematic intro, never bouncy easing.

## 6. Spacing & layout

- Content is constrained to `container-wide` (1240px max) with responsive
  `section-pad` gutters
- Spacing scale follows Tailwind's 4px base; sections use 64–80px vertical
  rhythm (`py-16 sm:py-20`)
- Grid: 4 columns desktop / 3 tablet / 2 mobile for topic cards; 3/2/1 for
  content and tool cards

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
