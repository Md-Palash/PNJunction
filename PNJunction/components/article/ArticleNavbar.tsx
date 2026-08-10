"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";

export function ArticleNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1100px] mx-auto container-px h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-display text-sm font-semibold">
            PJ
          </span>
          <span className="font-display font-semibold text-[17px] text-navy tracking-tight hidden sm:inline">
            PNJunction
          </span>
        </a>

        <a
          href="/"
          className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-navy transition-colors"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          All articles
        </a>

        <motion.button
          whileTap={{ scale: 0.94 }}
          aria-label="Search"
          className="h-9 w-9 flex items-center justify-center rounded-full text-ink-muted hover:text-navy hover:bg-surface transition-colors"
        >
          <Search size={18} strokeWidth={1.75} />
        </motion.button>
      </nav>
    </header>
  );
}
