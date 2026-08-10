"use client";

import { useEffect, useState } from "react";

export function SearchNavbar() {
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
      <nav className="max-w-container mx-auto container-px h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-display text-sm font-semibold">
            PJ
          </span>
          <span className="font-display font-semibold text-[17px] text-navy tracking-tight">
            PNJunction
          </span>
        </a>

        <a
          href="/"
          className="text-sm text-ink-muted hover:text-navy transition-colors"
        >
          Back home
        </a>
      </nav>
    </header>
  );
}
