"use client";

import { Type, Sparkles, Download } from "lucide-react";
import { Reveal } from "../Reveal";

const steps = [
  {
    icon: Type,
    title: "Enter your text or link",
    description: "Paste a URL, or type any text you'd like encoded.",
  },
  {
    icon: Sparkles,
    title: "Click Generate",
    description: "Your QR code is created instantly, right in the browser.",
  },
  {
    icon: Download,
    title: "Copy or download",
    description: "Save the image, or copy the source text for later.",
  },
];

export function HowToUse() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-14 text-center">
            How to use it
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full bg-card border border-border rounded-2xl p-7 shadow-soft">
                <span className="absolute top-6 right-6 text-3xl font-display font-semibold text-border select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <step.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy font-display">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
