export function HeroVisual() {
  const nodes = [
    { x: 60, y: 40, r: 4, delay: "0s" },
    { x: 180, y: 24, r: 3, delay: "0.6s" },
    { x: 260, y: 90, r: 5, delay: "1.1s" },
    { x: 140, y: 130, r: 3.4, delay: "0.3s" },
    { x: 40, y: 170, r: 3, delay: "1.6s" },
    { x: 230, y: 200, r: 4, delay: "0.9s" },
    { x: 320, y: 160, r: 3, delay: "1.9s" },
    { x: 300, y: 40, r: 2.6, delay: "1.3s" },
  ];

  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [3, 5],
    [2, 5],
    [2, 7],
    [5, 6],
    [1, 7],
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div className="absolute inset-0 rounded-full bg-accent-soft/50 blur-3xl" />
      <svg
        viewBox="0 0 360 240"
        className="relative h-full w-full text-accent"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.35">
          {links.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
            />
          ))}
        </g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="currentColor"
            className="motion-safe:animate-drift"
            style={{
              animationDelay: n.delay,
              transformOrigin: `${n.x}px ${n.y}px`,
            }}
          />
        ))}
        {[0, 2, 5].map((idx) => (
          <circle
            key={`pulse-${idx}`}
            cx={nodes[idx].x}
            cy={nodes[idx].y}
            r={nodes[idx].r + 5}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="motion-safe:animate-pulse-soft"
            style={{
              animationDelay: nodes[idx].delay,
              transformOrigin: `${nodes[idx].x}px ${nodes[idx].y}px`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
