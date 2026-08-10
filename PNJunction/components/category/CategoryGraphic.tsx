"use client";

import { motion } from "framer-motion";

// A quiet abstract grid of panes and dots — reusable across any category,
// not tied to one topic's iconography.
const panes = [
  { x: 40, y: 30, w: 90, h: 64, accent: false },
  { x: 150, y: 10, w: 60, h: 44, accent: true },
  { x: 60, y: 120, w: 70, h: 50, accent: false },
  { x: 160, y: 90, w: 100, h: 76, accent: false },
];

const dots = [
  { x: 30, y: 210 }, { x: 54, y: 210 }, { x: 78, y: 210 },
  { x: 30, y: 234 }, { x: 54, y: 234 }, { x: 78, y: 234 },
  { x: 30, y: 258 }, { x: 54, y: 258 }, { x: 78, y: 258 },
];

export function CategoryGraphic() {
  return (
    <div className="relative w-full max-w-[300px] aspect-square mx-auto">
      <motion.svg
        viewBox="0 0 280 280"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {panes.map((p, i) => (
          <motion.rect
            key={i}
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx={14}
            fill={p.accent ? "#2F6FED" : "#0B1730"}
            fillOpacity={p.accent ? 0.14 : 0.06}
            stroke={p.accent ? "#2F6FED" : "#0B1730"}
            strokeOpacity={0.18}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
          />
        ))}

        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={3} fill="#2F6FED" fillOpacity={0.35} />
        ))}
      </motion.svg>
    </div>
  );
}
