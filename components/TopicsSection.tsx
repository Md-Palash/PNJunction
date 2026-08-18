import SectionHeader from "./SectionHeader";
import TopicCard from "./TopicCard";
import Reveal from "./ui/Reveal";
import { topics } from "@/lib/data";

export default function TopicsSection() {
  return (
    <section id="topics" className="pn-section">
      <Reveal>
        <SectionHeader eyebrow="Explore Topics" title="Explore Topics" sub="Choose a topic and dive in." />
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {topics.map((topic, i) => (
          <Reveal key={topic.id} delay={Math.min(i * 0.04, 0.24)}>
            <TopicCard topic={topic} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
