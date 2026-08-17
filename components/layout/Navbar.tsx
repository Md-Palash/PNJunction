"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

/**
 * Minimum viable navbar for the homepage. Deliberately does not invent
 * a nav structure (Articles/Guides/Tools/About) before those pages
 * exist — see project brief. Grows incrementally as real sections ship.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-base ease-premium",
        "bg-bg/85 backdrop-blur-md border-b",
        scrolled ? "border-border shadow-elevation-1" : "border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 lg:h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-control"
            aria-label="PNJunction home"
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Search PNJunction"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-control text-ink-secondary transition-colors duration-fast hover:bg-navy-50 hover:text-ink"
            >
              {searchOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Search className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Search panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-slow ease-premium",
          searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="py-4">
          <label className="sr-only" htmlFor="site-search">
            Search PNJunction
          </label>
          <div className="flex items-center gap-3 rounded-control border border-border-strong bg-surface px-4 py-3">
            <Search className="h-4.5 w-4.5 text-ink-muted shrink-0" strokeWidth={1.75} />
            <input
              id="site-search"
              type="search"
              placeholder="Search articles, guides, and tools…"
              className="w-full bg-transparent text-body text-ink placeholder:text-ink-muted focus:outline-none"
            />
          </div>
        </Container>
      </div>
    </header>
  );
}
