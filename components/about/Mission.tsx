"use client";

import { Target } from "lucide-react";
import { Reveal } from "../Reveal";

export function Mission() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="bg-card border border-border rounded-3xl shadow-soft px-8 py-12 md:px-14 md:py-16 max-w-3xl mx-auto text-center">
            <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <Target size={22} strokeWidth={1.75} />
            </div>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Our mission
            </h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              We help people understand technology, solve real problems,
              and discover genuinely useful tools — through content that's
              reliable, easy to follow, and never padded for the sake of
              length.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
