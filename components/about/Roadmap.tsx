"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "../Reveal";

type Status = "done" | "active" | "planned";

const milestones: { title: string; description: string; status: Status }[] = [
  {
    title: "Launch platform",
    description: "PNJunction goes live with its core categories and tools.",
    status: "done",
  },
  {
    title: "Publish high-quality articles",
    description: "A steady cadence of well-researched, practical guides.",
    status: "done",
  },
  {
    title: "Expand free tools",
    description: "Grow the tools hub with more everyday utilities.",
    status: "active",
  },
  {
    title: "Grow learning resources",
    description: "Deeper guides and structured learning paths.",
    status: "planned",
  },
  {
    title: "Introduce community features",
    description: "Ways for readers to discuss and contribute.",
    status: "planned",
  },
  {
    title: "Future AI utilities",
    description: "Smarter, assistive tools built on the same principles.",
    status: "planned",
  },
];

const statusStyles: Record<Status, string> = {
  done: "bg-navy text-white border-navy",
  active: "bg-accent text-white border-accent",
  planned: "bg-white text-ink-faint border-border",
};

export function Roadmap() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Roadmap &amp; vision
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Where PNJunction has been, and where it's headed.
            </p>
          </div>
        </Reveal>

        <ol className="relative border-l border-border pl-8 space-y-10">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <li className="relative">
                <span
                  className={`absolute -left-[41px] top-0.5 h-7 w-7 flex items-center justify-center rounded-full border-2 ${statusStyles[m.status]}`}
                >
                  {m.status === "done" ? (
                    <Check size={13} strokeWidth={2.5} />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-navy font-display">
                    {m.title}
                  </h3>
                  {m.status === "active" && (
                    <span className="text-[11px] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded-full">
                      In progress
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed max-w-md">
                  {m.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
