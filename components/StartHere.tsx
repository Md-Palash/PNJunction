import SectionHeader from "./SectionHeader";
import Button from "./Button";
import Reveal from "./ui/Reveal";
import { steps } from "@/lib/data";

export default function StartHere() {
  return (
    <section className="pn-section pn-section-tint">
      <Reveal>
        <SectionHeader eyebrow="New to PNJunction?" title="New to PNJunction?" align="center" />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.06}>
            <div className="pn-card rounded-sm2 px-6 py-7">
              <span className="text-[13px] font-bold text-accentStrong">{step.n}</span>
              <h3 className="mb-1.5 mt-2.5 text-[18px] font-bold">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-inkSoft">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.18}>
        <div className="mt-9 flex justify-center">
          <Button href="#topics" variant="primary">
            Start Exploring
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
