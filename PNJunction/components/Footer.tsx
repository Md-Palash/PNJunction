const columns = [
  {
    title: "Categories",
    links: [
      { label: "AI", href: "/categories/ai" },
      { label: "Windows", href: "/categories/windows" },
      { label: "Android", href: "/categories/android" },
      { label: "Web Development", href: "/categories/web-development" },
      { label: "Linux", href: "/categories/linux" },
      { label: "Cybersecurity", href: "/categories/cybersecurity" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "All tools", href: "/tools" },
      { label: "QR Generator", href: "/tools/qr-generator" },
      { label: "Password Generator", href: "/tools/password-generator" },
      { label: "JSON Formatter", href: "/tools/json-formatter" },
    ],
  },
  {
    title: "Company",
    // Contact and Careers aren't built yet — left as placeholders on purpose.
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-container mx-auto container-px">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-display text-sm font-semibold">
                PJ
              </span>
              <span className="font-display font-semibold text-[15px] text-navy">
                PNJunction
              </span>
            </a>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-[200px]">
              Where technology actually connects.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-navy font-display">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
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
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} PNJunction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
