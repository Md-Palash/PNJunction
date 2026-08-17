import {
  Sparkles,
  Layers,
  MousePointerClick,
  Type as TypeIcon,
  Palette,
  Component,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Display,
  H2,
  H3,
  Body,
  BodyLarge,
  Small,
  Meta,
  Label,
} from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardEyebrow, CardTitle, CardDescription } from "@/components/ui/Card";
import { topicList } from "@/lib/tokens";
import { LogoMark } from "@/components/ui/Logo";

function Swatch({
  name,
  hex,
  className,
  textClassName = "text-ink-inverse",
}: {
  name: string;
  hex: string;
  className: string;
  textClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 rounded-card border border-border/60 shadow-elevation-1 flex items-end p-2.5 ${className}`}
      >
        <span className={`text-meta font-medium ${textClassName}`}>{hex}</span>
      </div>
      <Meta className="text-ink-secondary">{name}</Meta>
    </div>
  );
}

export default function FoundationPreviewPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Section spacing="lg" className="relative overflow-hidden">
        {/* Signature motif: soft junction nodes, quiet ambient depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent-50 blur-3xl opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-40 h-[320px] w-[320px] rounded-full bg-topic-ai-soft blur-3xl opacity-60"
        />

        <Container className="relative">
          <AnimatedSection className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2">
              <LogoMark className="h-6 w-6" />
              <Label>Phase 01 · Foundation &amp; Design System</Label>
            </div>
            <Display as="h1" className="mb-6">
              A calmer way to read about technology.
            </Display>
            <BodyLarge className="mb-8 max-w-xl">
              This is PNJunction&rsquo;s foundation preview — the design
              tokens, elevation system and reusable components every future
              page will be built from. No articles, tools or homepage
              sections live here yet.
            </BodyLarge>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#colors" size="lg">
                Explore the system
              </Button>
              <Button href="#components" variant="outline" size="lg">
                View components
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ================= COLOR SYSTEM ================= */}
      <Section id="colors" tone="muted" spacing="md">
        <Container>
          <AnimatedSection className="mb-10 flex items-center gap-2.5">
            <Palette className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
            <H2>Color system</H2>
          </AnimatedSection>

          <AnimatedSection delayMs={80}>
            <Small className="mb-4 uppercase tracking-wide text-ink-muted text-meta font-semibold">
              Surfaces &amp; brand
            </Small>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
              <Swatch name="Page background" hex="#FCFCFA" className="bg-bg" textClassName="text-ink" />
              <Swatch name="Card surface" hex="#FFFFFF" className="bg-surface" textClassName="text-ink" />
              <Swatch name="Deep Navy" hex="#0B1733" className="bg-navy" />
              <Swatch name="Technology Blue" hex="#2563EB" className="bg-accent" />
              <Swatch name="Text secondary" hex="#545F7A" className="bg-navy-500" />
              <Swatch name="Border" hex="#E8E5DD" className="bg-[#E8E5DD]" textClassName="text-ink" />
            </div>
          </AnimatedSection>

          <AnimatedSection delayMs={140}>
            <Small className="mb-4 uppercase tracking-wide text-ink-muted text-meta font-semibold">
              Topic accents — soft &amp; desaturated
            </Small>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {topicList.map((topic) => (
                <div
                  key={topic.slug}
                  className={`rounded-card border border-border/60 p-4 flex flex-col gap-6 ${topic.soft}`}
                >
                  <span className={`h-3 w-3 rounded-full ${topic.text.replace("text-", "bg-")}`} />
                  <span className={`text-small font-medium ${topic.text}`}>
                    {topic.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ================= TYPOGRAPHY ================= */}
      <Section spacing="md">
        <Container>
          <AnimatedSection className="mb-10 flex items-center gap-2.5">
            <TypeIcon className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
            <H2>Typography</H2>
          </AnimatedSection>

          <AnimatedSection delayMs={80} className="space-y-6">
            <Display as="div">Display / Hero</Display>
            <div className="h-px bg-border" />
            <H2 as="div">Heading Two — Sora 600</H2>
            <H3 as="div">Heading Three — Sora 600</H3>
            <div className="font-sans text-h4 text-ink font-semibold">
              Heading Four — Inter 600
            </div>
            <BodyLarge>
              Body large — used for intros and lede paragraphs where a
              little extra presence helps guide the reader in.
            </BodyLarge>
            <Body>
              Body — the default reading size across articles and guides,
              set at 1.65 line-height for comfortable long-form reading on
              every screen size.
            </Body>
            <Small>Small text — captions, secondary UI copy, helper text.</Small>
            <div className="flex items-center gap-4">
              <Meta>Metadata · 6 min read</Meta>
              <Label>Section Label</Label>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ================= BUTTONS & BADGES ================= */}
      <Section tone="muted" spacing="md">
        <Container>
          <AnimatedSection className="mb-10 flex items-center gap-2.5">
            <MousePointerClick className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
            <H2>Buttons &amp; badges</H2>
          </AnimatedSection>

          <AnimatedSection delayMs={80} className="mb-10">
            <Small className="mb-4 uppercase tracking-wide text-ink-muted text-meta font-semibold">
              Button variants
            </Small>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delayMs={140}>
            <Small className="mb-4 uppercase tracking-wide text-ink-muted text-meta font-semibold">
              Topic badges
            </Small>
            <div className="flex flex-wrap gap-2.5">
              {topicList.map((topic) => (
                <Badge key={topic.slug} topic={topic.slug} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ================= CARD ELEVATION ================= */}
      <Section spacing="md">
        <Container>
          <AnimatedSection className="mb-10 flex items-center gap-2.5">
            <Layers className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
            <H2>Card elevation</H2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                level: "Elevation 1",
                desc: "Resting state — cards sit gently above the milky-white page.",
                delay: 0,
              },
              {
                level: "Elevation 2",
                desc: "Used for slightly more prominent surfaces, like modals or featured cards.",
                delay: 100,
              },
              {
                level: "Elevation 3",
                desc: "Hover / focus state — a soft lift, never a dramatic float.",
                delay: 200,
              },
            ].map((item) => (
              <AnimatedSection key={item.level} delayMs={item.delay}>
                <Card>
                  <CardEyebrow>{item.level}</CardEyebrow>
                  <CardTitle>Sample article card</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <Meta className="mt-5">
            Hover any card above — try it with a keyboard (Tab) to see the
            same lift on focus.
          </Meta>
        </Container>
      </Section>

      {/* ================= COMPONENT INVENTORY ================= */}
      <Section id="components" tone="muted" spacing="md">
        <Container>
          <AnimatedSection className="mb-10 flex items-center gap-2.5">
            <Component className="h-5 w-5 text-accent-600" strokeWidth={1.75} />
            <H2>Foundational components</H2>
          </AnimatedSection>

          <AnimatedSection delayMs={80}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Navbar", "Sticky, responsive, topic-aware navigation."],
                ["Container", "Centralized max-width and horizontal padding."],
                ["Section", "Centralized vertical rhythm and surface tone."],
                ["Button", "4 variants, 3 sizes, 44px min touch target."],
                ["Card", "The elevation system — restrained lift on hover."],
                ["Badge", "Data-driven topic and status labels."],
                ["Image", "Fixed-aspect, lazy-loaded, optional hover zoom."],
                ["Typography", "Display through label — one consistent scale."],
                ["AnimatedSection", "Scroll reveal, reduced-motion aware."],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="rounded-card-md border border-border bg-surface p-5"
                >
                  <H3 as="h3" className="text-h4 mb-1.5">
                    {name}
                  </H3>
                  <Small>{desc}</Small>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delayMs={160} className="mt-10 flex items-start gap-3 rounded-card-md border border-accent-100 bg-accent-50 p-5">
            <Sparkles className="h-5 w-5 shrink-0 text-accent-600 mt-0.5" strokeWidth={1.75} />
            <Body className="text-ink">
              This foundation is deliberately quiet — Phase 02 will layer
              real homepage sections, article cards, topic pages and tools
              on top of these same tokens, without changing a single hex
              value here.
            </Body>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
