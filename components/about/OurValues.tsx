"use client";

import { motion } from "framer-motion";
import { Eye, Gem, MessageSquare, GraduationCap } from "lucide-react";
import { Reveal } from "../Reveal";

const values = [
  { icon: Eye, title: "Clarity", description: "If it can be said simply, it should be said simply." },
  { icon: Gem, title: "Quality", description: "Fewer, better pieces beat volume for its own sake." },
  { icon: MessageSquare, title: "Transparency", description: "We say what we know, and what we don't." },
  { icon: GraduationCap, title: "Continuous learning", description: "Technology moves — so do we, deliberately." },
];

export function OurValues() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-container mx-auto container-px">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
              Our values
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              The four ideas that shape every editorial and product
              decision here.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <value.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy font-display">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
