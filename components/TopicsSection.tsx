import { SectionHeader } from "./ui/SectionHeader";
import { TopicGrid } from "./TopicGrid";

export function TopicsSection() {
  return (
    <section id="topics" className="section-pad py-16 sm:py-20">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Topics"
          heading="Explore Topics"
          supporting="Choose a topic and dive in."
        />
        <div className="mt-8">
          <TopicGrid />
        </div>
      </div>
    </section>
  );
}
