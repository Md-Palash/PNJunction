import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#FCFCFA",
        card: "#FFFFFF",
        surface2: "#F7F8F7",
        ink: "#0B1733",
        inkSoft: "#64748B",
        borderc: "#E7E9E4",
        accent: "#2563EB",
        accentSoft: "#EAF2FF",
        accentStrong: "#1D4ED8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        lg2: "24px",
        md2: "20px",
        sm2: "18px",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        pnPulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.1)" },
        },
      },
      animation: {
        pnPulse: "pnPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
