import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";
import Button from "./Button";
import Reveal from "./ui/Reveal";
import { tools } from "@/lib/data";

export default function ToolsSection() {
  return (
    <section id="tools" className="pn-section">
      <Reveal>
        <SectionHeader eyebrow="Useful Tools" title="Useful Tools" sub="Small tools for everyday tasks." />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <Reveal key={tool.id} delay={Math.min(i * 0.03, 0.15)}>
            <ToolCard tool={tool} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-9 flex justify-center">
          <Button href="/tools" variant="text">
            Explore All Tools
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
