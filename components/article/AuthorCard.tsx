"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Globe } from "lucide-react";

export function AuthorCard() {
  return (
    <div className="bg-card border border-border rounded-2xl p-7 md:p-8 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="h-16 w-16 rounded-full bg-surface border border-border flex items-center justify-center text-navy font-display text-lg font-semibold shrink-0">
          MR
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-navy font-display">
            Maya Reyes
          </p>
          <p className="mt-1.5 text-sm text-ink-muted leading-relaxed max-w-md">
            Maya writes about developer tooling and applied AI at
            PNJunction. Previously built infra for on-device inference at a
            devtools startup.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {[Twitter, Linkedin, Globe].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-8 w-8 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-navy hover:bg-surface transition-colors"
                aria-label="Author social link"
              >
                <Icon size={14} strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </div>
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center text-sm font-medium text-navy border border-border px-5 py-2.5 rounded-full hover:bg-surface transition-colors shrink-0 self-start sm:self-center"
        >
          View all articles
        </motion.a>
      </div>
    </div>
  );
}
