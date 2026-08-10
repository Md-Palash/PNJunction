import { ChevronRight } from "lucide-react";

const trail = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "QR Generator", href: undefined },
];

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <a href={item.href} className="text-ink-muted hover:text-navy transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-navy font-medium" aria-current="page">
                {item.label}
              </span>
            )}
            {i < trail.length - 1 && (
              <ChevronRight size={13} strokeWidth={2} className="text-ink-faint" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
