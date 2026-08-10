"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";
import { Reveal } from "../Reveal";
import { recentSearches } from "./data";

export function RecentSearches({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  return (
    <Reveal delay={0.15}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-ink-faint uppercase tracking-wide mb-4">
          <History size={13} strokeWidth={1.75} />
          Recent searches
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {recentSearches.map((term) => (
            <motion.button
              key={term}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(term)}
              className="text-sm text-ink-muted bg-surface border border-border px-4 py-2 rounded-full hover:text-navy hover:bg-white transition-colors"
            >
              {term}
            </motion.button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
