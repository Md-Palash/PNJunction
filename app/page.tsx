import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { H1, H2, BodyLarge, Label } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { HeroGraphic } from "@/components/ui/HeroGraphic";
import { TopicCard } from "@/components/ui/TopicCard";
import { topics } from "@/lib/data/topics";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent-50 blur-3xl opacity-70"
        />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection>
              <Label className="mb-5 inline-block">Technology, clearly explained</Label>
              <H1 className="mb-5 max-w-xl">
                Where every corner of technology meets.
              </H1>
              <BodyLarge className="mb-8 max-w-md">
                PNJunction brings AI, hardware, security and everything
                between into one calm, visual place — so finding what to
                learn next never feels like work.
              </BodyLarge>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="#topics" size="lg" iconRight={<ArrowRight className="h-4.5 w-4.5" />}>
                  Explore Topics
                </Button>
                <Button href="#topics" variant="outline" size="lg" iconLeft={<Compass className="h-4.5 w-4.5" />}>
                  See what&rsquo;s inside
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delayMs={150}>
              <HeroGraphic />
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ================= EXPLORE TOPICS ================= */}
      <Section id="topics" tone="muted" spacing="md">
        <Container>
          <AnimatedSection className="mb-10 max-w-xl">
            <Label className="mb-3 inline-block">Browse by topic</Label>
            <H2>Explore Topics</H2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, i) => (
              <AnimatedSection key={topic.slug} delayMs={i * 60}>
                <TopicCard topic={topic} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
