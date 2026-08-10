"use client";

import { motion } from "framer-motion";
import { Link2, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const shareLinks = [
  { icon: Twitter, label: "Share on X" },
  { icon: Linkedin, label: "Share on LinkedIn" },
];

export function ShareSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // UI only — no-op if clipboard is unavailable.
    }
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 py-8 border-y border-border">
      <p className="text-sm font-medium text-navy">Found this useful?</p>
      <div className="flex items-center gap-2">
        {shareLinks.map((s) => (
          <motion.button
            key={s.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={s.label}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:text-navy hover:bg-surface transition-colors"
          >
            <s.icon size={15} strokeWidth={1.75} />
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyLink}
          className="h-9 px-4 flex items-center gap-1.5 rounded-full border border-border text-sm text-ink-muted hover:text-navy hover:bg-surface transition-colors"
        >
          <Link2 size={15} strokeWidth={1.75} />
          {copied ? "Copied!" : "Copy link"}
        </motion.button>
      </div>
    </div>
  );
}
