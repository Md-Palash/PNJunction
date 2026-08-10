"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Share2, Bookmark, Sparkles } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";

export function ToolHeader() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <header className="max-w-container mx-auto container-px pt-32 md:pt-40 pb-10">
      <Breadcrumbs />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-accent-soft text-accent shrink-0">
            <QrCode size={26} strokeWidth={1.75} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl md:text-3xl font-semibold text-navy tracking-tight font-display">
                QR Generator
              </h1>
              <span className="text-xs font-medium text-accent bg-accent-soft px-2.5 py-1 rounded-full">
                Utilities
              </span>
            </div>
            <p className="mt-1.5 text-ink-muted leading-relaxed max-w-md">
              Turn any link or text into a clean, downloadable QR code.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm text-navy border border-border px-4 py-2.5 rounded-full hover:bg-surface transition-colors"
            aria-label="Share this tool"
          >
            <Share2 size={15} strokeWidth={1.75} />
            Share
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setBookmarked((v) => !v)}
            aria-pressed={bookmarked}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark this tool"}
            className={`h-10 w-10 flex items-center justify-center rounded-full border transition-colors ${
              bookmarked
                ? "bg-navy border-navy text-white"
                : "border-border text-ink-muted hover:bg-surface"
            }`}
          >
            <Bookmark size={16} strokeWidth={1.75} fill={bookmarked ? "currentColor" : "none"} />
          </motion.button>
          <motion.a
            href="#tool"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-soft hover:bg-navy-light transition-colors"
          >
            <Sparkles size={15} strokeWidth={1.75} />
            Try it now
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}
