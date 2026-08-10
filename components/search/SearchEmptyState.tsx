"use client";

import { motion } from "framer-motion";
import { SearchX, Compass } from "lucide-react";

export function SearchEmptyState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto container-px text-center py-16"
    >
      <div className="h-16 w-16 mx-auto rounded-2xl bg-surface border border-border flex items-center justify-center text-ink-faint shadow-soft">
        <SearchX size={26} strokeWidth={1.5} />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-navy font-display">
        No results for &ldquo;{query}&rdquo;
      </h2>
      <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
        We couldn't find any articles, tools, or resources matching that
        search. Try a different term or browse by category instead.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-navy px-6 py-3 rounded-full hover:bg-navy-light transition-colors"
        >
          <Compass size={16} strokeWidth={1.75} />
          Browse categories
        </motion.a>
        <button
          onClick={onClear}
          className="text-sm font-medium text-ink-muted hover:text-navy transition-colors px-6 py-3"
        >
          Clear search
        </button>
      </div>
    </motion.div>
  );
}
