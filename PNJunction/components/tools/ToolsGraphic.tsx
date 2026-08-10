"use client";

import { motion } from "framer-motion";

const tiles = [
  { x: 30, y: 20, size: 70, accent: true, delay: 0 },
  { x: 130, y: 10, size: 50, accent: false, delay: 0.4 },
  { x: 40, y: 120, size: 56, accent: false, delay: 0.8 },
  { x: 130, y: 100, size: 80, accent: true, delay: 1.2 },
  { x: 220, y: 40, size: 44, accent: false, delay: 0.2 },
];

export function ToolsGraphic() {
  return (
    <div className="relative w-full max-w-[380px] aspect-square mx-auto">
      <motion.svg
        viewBox="0 0 300 260"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {tiles.map((t, i) => (
          <g key={i} className="animate-drift" style={{ animationDelay: `${t.delay}s` }}>
            <motion.rect
              x={t.x}
              y={t.y}
              width={t.size}
              height={t.size}
              rx={18}
              fill={t.accent ? "#2F6FED" : "#0B1730"}
              fillOpacity={t.accent ? 0.12 : 0.05}
              stroke={t.accent ? "#2F6FED" : "#0B1730"}
              strokeOpacity={0.2}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
            />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
