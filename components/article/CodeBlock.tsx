"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

export function CodeBlock({
  code,
  language = "bash",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, UI only.
    }
  };

  return (
    <div className="not-prose my-6 rounded-2xl overflow-hidden border border-navy/10 bg-navy shadow-soft">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <span className="text-xs font-medium text-white/50 uppercase tracking-wide">
          {language}
        </span>
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={13} strokeWidth={2} />
              Copied
            </>
          ) : (
            <>
              <Copy size={13} strokeWidth={1.75} />
              Copy
            </>
          )}
        </motion.button>
      </div>
      <pre className="px-5 py-4 overflow-x-auto">
        <code className="text-[13px] leading-relaxed text-white/90 font-mono">
          {code}
        </code>
      </pre>
    </div>
  );
}
