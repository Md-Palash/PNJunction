"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon, MenuIcon, CloseIcon, SearchIcon } from "./icons";

const links = ["Topics", "Latest", "Tools"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-page/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 border-b ${
        scrolled ? "border-borderc shadow-[0_4px_20px_-14px_rgba(11,23,51,0.14)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2 font-heading text-[17px] font-extrabold">
          <LogoIcon />
          <span>PNJunction</span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[14.5px] font-medium text-inkSoft transition-colors hover:text-ink"
            >
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            aria-label="Search"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-ink transition-colors hover:bg-surface2"
          >
            <SearchIcon />
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-ink transition-colors hover:bg-surface2 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-60 border-borderc" : "max-h-0 border-transparent"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="block border-b border-borderc px-6 py-3.5 font-medium"
          >
            {l}
          </Link>
        ))}
      </div>
    </header>
  );
}
