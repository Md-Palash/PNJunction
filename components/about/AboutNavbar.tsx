"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export function AboutNavbar() {
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
          : "bg-transparent border-b border-transparent"
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
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.label === "About" ? "page" : undefined}
                className={`text-sm transition-colors ${
                  link.label === "About"
                    ? "text-navy font-medium"
                    : "text-ink-muted hover:text-navy"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="/tools"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-sm font-medium text-white bg-navy px-4 py-2 rounded-full hover:bg-navy-light transition-colors shrink-0"
        >
          Explore tools
        </motion.a>
      </nav>
    </header>
  );
}
