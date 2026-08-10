"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { popularSearches } from "./data";

export function PopularSearches({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  return (
    <section className="max-w-container mx-auto container-px">
      <Reveal delay={0.2}>
        <h2 className="text-2xl font-semibold text-navy tracking-tight text-center mb-8">
          Popular searches
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularSearches.map((item, i) => (
          <Reveal key={item.title} delay={0.22 + i * 0.05}>
            <motion.button
              onClick={() => onSelect(item.title)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group w-full text-left h-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
            >
              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <item.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy font-display">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </motion.button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
