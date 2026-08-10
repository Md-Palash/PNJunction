"use client";

import { motion } from "framer-motion";
import { Share2, Bookmark } from "lucide-react";
import { useState } from "react";

export function ArticleHeader() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <header className="max-w-[820px] mx-auto container-px pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center text-xs font-medium text-accent bg-accent-soft px-3 py-1 rounded-full">
          AI
        </span>

        <h1 className="mt-5 text-[32px] leading-[1.15] sm:text-[40px] md:text-[44px] font-semibold text-navy tracking-tight">
          How local LLMs are changing the developer workflow
        </h1>

        <p className="mt-4 text-lg text-ink-muted leading-relaxed max-w-[680px]">
          A practical look at running models on-device — where they
          genuinely save time, where they still fall short, and how to
          fit them into a real toolchain.
        </p>

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-surface border border-border flex items-center justify-center text-navy font-display text-sm font-semibold shrink-0">
              MR
            </div>
            <div>
              <p className="text-sm font-medium text-navy">Maya Reyes</p>
              <div className="flex items-center gap-2 text-xs text-ink-faint mt-0.5">
                <span>Jul 28, 2026</span>
                <span aria-hidden="true">·</span>
                <span>Updated Aug 2, 2026</span>
                <span aria-hidden="true">·</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-sm text-navy border border-border px-4 py-2 rounded-full hover:bg-surface transition-colors"
              aria-label="Share this article"
            >
              <Share2 size={15} strokeWidth={1.75} />
              Share
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setBookmarked((v) => !v)}
              aria-pressed={bookmarked}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this article"}
              className={`h-9 w-9 flex items-center justify-center rounded-full border transition-colors ${
                bookmarked
                  ? "bg-navy border-navy text-white"
                  : "border-border text-ink-muted hover:bg-surface"
              }`}
            >
              <Bookmark size={15} strokeWidth={1.75} fill={bookmarked ? "currentColor" : "none"} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/9] bg-surface group"
      >
        <div className="w-full h-full bg-gradient-to-br from-navy/[0.06] to-accent/[0.1] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <span className="text-xs font-medium text-ink-faint tracking-wide uppercase">
            Hero image
          </span>
        </div>
      </motion.div>
    </header>
  );
}
