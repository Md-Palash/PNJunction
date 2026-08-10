"use client";

import { motion } from "framer-motion";

const rings = [
  { r: 40, opacity: 0.5 },
  { r: 80, opacity: 0.32 },
  { r: 120, opacity: 0.18 },
  { r: 160, opacity: 0.09 },
];

const nodes = [
  { angle: -40, r: 80 },
  { angle: 120, r: 120 },
  { angle: 200, r: 160 },
  { angle: 30, r: 160 },
];

function toXY(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

export function AboutGraphic() {
  const cx = 180;
  const cy = 180;

  return (
    <div className="relative w-full max-w-[380px] aspect-square mx-auto">
      <motion.svg
        viewBox="0 0 360 360"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={ring.r}
            fill="none"
            stroke="#2F6FED"
            strokeOpacity={ring.opacity}
            strokeWidth={1.5}
          />
        ))}

        <circle cx={cx} cy={cy} r={10} fill="#0B1730" />

        {nodes.map((n, i) => {
          const { x, y } = toXY(n.angle, n.r, cx, cy);
          return (
            <g key={i}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="#2F6FED"
                strokeOpacity={0.2}
                strokeWidth={1.25}
              />
              <g className="animate-drift" style={{ animationDelay: `${i * 0.5}s` }}>
                <circle cx={x} cy={y} r={5} fill="#2F6FED" />
              </g>
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}
