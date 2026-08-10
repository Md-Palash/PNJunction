"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "AI", href: "/categories/ai" },
  { label: "Windows", href: "/categories/windows" },
  { label: "Android", href: "/categories/android" },
  { label: "Web Dev", href: "/categories/web-development" },
  { label: "Linux", href: "/categories/linux" },
  { label: "Security", href: "/categories/cybersecurity" },
];

export function Navbar() {
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
          ? "bg-white/75 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-container mx-auto container-px h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-display text-sm font-semibold">
            PJ
          </span>
          <span className="font-display font-semibold text-[17px] text-navy tracking-tight">
            PNJunction
          </span>
        </a>

        {/* Center nav */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-ink-muted hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href="/search"
            whileTap={{ scale: 0.94 }}
            aria-label="Search"
            className="h-9 w-9 flex items-center justify-center rounded-full text-ink-muted hover:text-navy hover:bg-surface transition-colors"
          >
            <Search size={18} strokeWidth={1.75} />
          </motion.a>
          <button
            aria-label="Toggle theme (coming soon)"
            className="h-9 w-9 hidden sm:flex items-center justify-center rounded-full text-ink-muted hover:text-navy hover:bg-surface transition-colors"
          >
            <span className="h-4 w-4 rounded-full border border-current" />
          </button>
        </div>
      </nav>
    </header>
  );
}
