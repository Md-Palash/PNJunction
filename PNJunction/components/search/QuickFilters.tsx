"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { quickFilterOptions, QuickFilter } from "./data";

export function QuickFilters({
  active,
  onChange,
}: {
  active: QuickFilter;
  onChange: (v: QuickFilter) => void;
}) {
  return (
    <Reveal delay={0.1}>
      <div
        className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 justify-center flex-wrap"
        role="group"
        aria-label="Quick filters"
      >
        {quickFilterOptions.map((filter, i) => {
          const isActive = active === filter;
          return (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onChange(filter)}
              aria-pressed={isActive}
              className={`shrink-0 text-sm px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-ink-muted border-border hover:bg-surface"
              }`}
            >
              {filter}
            </motion.button>
          );
        })}
      </div>
    </Reveal>
  );
}
