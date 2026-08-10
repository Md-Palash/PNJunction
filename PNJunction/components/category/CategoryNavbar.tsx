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

export function CategoryNavbar({ active }: { active?: string }) {
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

        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const isActive = link.label.toLowerCase() === active?.toLowerCase();
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-navy font-medium"
                      : "text-ink-muted hover:text-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            whileTap={{ scale: 0.94 }}
            aria-label="Search"
            className="h-9 w-9 flex items-center justify-center rounded-full text-ink-muted hover:text-navy hover:bg-surface transition-colors"
          >
            <Search size={18} strokeWidth={1.75} />
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
