import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Variant = "primary" | "ghost" | "text";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
}

export default function Button({ children, variant = "primary", href = "#" }: ButtonProps) {
  return (
    <Link href={href} className={`pn-btn pn-btn-${variant}`}>
      {children}
      {variant === "primary" && <ArrowIcon className="pn-btn-arrow" />}
    </Link>
  );
}
