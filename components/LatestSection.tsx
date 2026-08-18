import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import Reveal from "./ui/Reveal";
import { latestItems } from "@/lib/data";

export default function LatestSection() {
  return (
    <section id="latest" className="pn-section pn-section-tint">
      <Reveal>
        <SectionHeader eyebrow="Latest" title="Latest" sub="Fresh from PNJunction." />
      </Reveal>

      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {latestItems.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i * 0.04, 0.2)}>
            <ContentCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
