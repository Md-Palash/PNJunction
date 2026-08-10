"use client";

import { motion } from "framer-motion";

// A small network of "junction" nodes — literal to the brand name, abstract
// enough to read as premium tech illustration rather than a diagram.
const nodes = [
  { id: "a", x: 60, y: 40, r: 5, big: true },
  { id: "b", x: 200, y: 90, r: 4 },
  { id: "c", x: 320, y: 30, r: 3.5 },
  { id: "d", x: 120, y: 190, r: 4.5 },
  { id: "e", x: 280, y: 200, r: 6, big: true },
  { id: "f", x: 380, y: 140, r: 3.5 },
  { id: "g", x: 40, y: 280, r: 3.5 },
  { id: "h", x: 200, y: 300, r: 5 },
];

const edges: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["b", "d"],
  ["d", "e"],
  ["e", "f"],
  ["e", "h"],
  ["d", "g"],
  ["c", "f"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function JunctionGraphic() {
  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto">
      <motion.svg
        viewBox="0 0 420 340"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {edges.map(([from, to], i) => {
          const a = byId[from];
          const b = byId[to];
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#2F6FED"
              strokeOpacity={0.28}
              strokeWidth={1.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: "easeOut" }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id} className="animate-drift" style={{ animationDelay: `${i * 0.4}s` }}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 8}
              fill={n.big ? "#2F6FED" : "#0B1730"}
              opacity={0.06}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.big ? "#2F6FED" : "#0B1730"}
              className={n.big ? "animate-pulseDot" : ""}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
