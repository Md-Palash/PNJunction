import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" {...props}>
      <circle cx="9" cy="16" r="3.2" fill="#2563EB" />
      <circle cx="23" cy="9" r="2.4" fill="#0B1733" />
      <circle cx="23" cy="23" r="2.4" fill="#0B1733" />
      <path d="M11.6 15.1L20.6 10" stroke="#0B1733" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M11.6 16.9L20.6 22" stroke="#0B1733" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export const toolIcons: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  qr: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="14.5" width="2.5" height="2.5" fill="currentColor" />
      <rect x="18.5" y="14.5" width="2.5" height="2.5" fill="currentColor" />
      <rect x="14.5" y="18.5" width="2.5" height="2.5" fill="currentColor" />
    </svg>
  ),
  json: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path
        d="M8 4c-2 0-2.5 1-2.5 3v3c0 1.2-.4 2-2 2 1.6 0 2 .8 2 2v3c0 2 .5 3 2.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4c2 0 2.5 1 2.5 3v3c0 1.2.4 2 2 2-1.6 0-2 .8-2 2v3c0 2-.5 3-2.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  compress: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 15l3.2-3.6 2.4 2.4 3-3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.3" fill="currentColor" />
    </svg>
  ),
  markdown: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.5 15V9l3 3.4L12.5 9v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9v4m0 0l2-2m-2 2l-2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  unit: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path
        d="M4 8h9M4 8l2.5-2.5M4 8l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16h-9m9 0l-2.5-2.5M20 16l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  base64: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3" y="6" width="8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="12.5" width="8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11 8.7h6a2 2 0 012 2v1M7 12v1a2 2 0 002 2h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};
