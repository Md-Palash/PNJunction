import { Logo } from "./ui/Logo";

const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Topics", href: "#topics" },
      { label: "Latest", href: "#latest" },
      { label: "Tools", href: "#tools" },
      { label: "Start Here", href: "#start-here" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container-wide section-pad grid grid-cols-2 gap-10 py-14 sm:py-18 md:grid-cols-5">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 max-w-[280px] text-[14.5px] leading-relaxed text-ink-soft">
            Where technology actually connects — topics, articles, and tools
            in one clear place.
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
              {col.heading}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14.5px] text-ink-soft transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-wide section-pad flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} PNJunction. All rights reserved.</p>
          <p>Built for people who like technology that makes sense.</p>
        </div>
      </div>
    </footer>
  );
}
