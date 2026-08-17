"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  supporting?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  supporting,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn(align === "center" && "sm:mx-auto sm:text-center")}>
        {eyebrow && (
          <p className="mb-2 text-[13px] font-display font-semibold uppercase tracking-[0.08em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[28px] leading-[1.15] sm:text-[34px] font-display font-bold text-balance">
          {heading}
        </h2>
        {supporting && (
          <p className="mt-2 max-w-[520px] text-[16px] leading-relaxed text-ink-soft">
            {supporting}
          </p>
        )}
      </div>
      {action}
    </motion.div>
  );
}
