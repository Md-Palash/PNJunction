import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold text-[15px] transition-all duration-300 ease-junction focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 min-h-[44px] px-6";

const variants = {
  primary:
    "bg-ink text-white shadow-[0_10px_24px_-10px_rgba(11,23,51,0.45)] hover:bg-accent hover:shadow-[0_14px_28px_-10px_rgba(47,111,237,0.5)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink border border-border hover:border-accent/40 hover:text-accent hover:-translate-y-0.5",
  ghost: "text-ink hover:text-accent",
};

type Variant = keyof typeof variants;

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
  withArrow?: boolean;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  withArrow?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.as === "a") {
    const { as, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
      </a>
    );
  }

  const { as, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.25} />}
    </button>
  );
}
