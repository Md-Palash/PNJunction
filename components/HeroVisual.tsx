"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 90, r: 5, delay: 0 },
  { x: 160, y: 40, r: 4, delay: 0.6 },
  { x: 250, y: 110, r: 6, delay: 1.2 },
  { x: 330, y: 55, r: 4, delay: 0.3 },
  { x: 210, y: 190, r: 4.5, delay: 0.9 },
  { x: 90, y: 210, r: 3.5, delay: 1.5 },
  { x: 300, y: 200, r: 3.5, delay: 0.2 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 2],
  [4, 5],
  [2, 6],
];

export default function HeroVisual() {
  return (
    <div className="aspect-[380/260] w-full" aria-hidden="true">
      <svg viewBox="0 0 380 260" width="100%" height="100%">
        <g stroke="#2563EB" strokeWidth="1" opacity="0.22">
          {links.map(([a, b], i) => {
            const A = nodes[a];
            const B = nodes[b];
            return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
          })}
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r + 6} fill="#2563EB" opacity="0.07" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i % 3 === 0 ? "#2563EB" : "#0B1733"}
              initial={{ opacity: i % 3 === 0 ? 0.8 : 0.4, scale: 1 }}
              animate={{
                opacity: i % 3 === 0 ? [0.8, 0.5, 0.8] : 0.4,
                scale: i % 3 === 0 ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 5,
                delay: n.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
