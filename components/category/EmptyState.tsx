"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center py-20 px-6 border border-dashed border-border rounded-2xl bg-surface"
    >
      <div className="h-16 w-16 rounded-2xl bg-white border border-border flex items-center justify-center text-ink-faint shadow-soft">
        <SearchX size={26} strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-navy font-display">
        No articles match yet
      </h3>
      <p className="mt-2 text-sm text-ink-muted max-w-xs leading-relaxed">
        Try a different search term or clear the current filters to see
        everything in this category.
      </p>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="mt-6 text-sm font-medium text-white bg-navy px-5 py-2.5 rounded-full hover:bg-navy-light transition-colors"
      >
        Clear filters
      </motion.button>
    </motion.div>
  );
}
