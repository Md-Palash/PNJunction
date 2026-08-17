import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        "surface-sunken": "var(--color-surface-sunken)",

        // Brand
        navy: {
          DEFAULT: "var(--color-navy)",
          50: "var(--color-navy-50)",
          100: "var(--color-navy-100)",
          200: "var(--color-navy-200)",
          300: "var(--color-navy-300)",
          400: "var(--color-navy-400)",
          500: "var(--color-navy-500)",
          600: "var(--color-navy-600)",
          700: "var(--color-navy-700)",
          800: "var(--color-navy-800)",
          900: "var(--color-navy-900)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          50: "var(--color-accent-50)",
          100: "var(--color-accent-100)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
        },

        // Text
        ink: {
          DEFAULT: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },

        // Borders
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
          subtle: "var(--color-border-subtle)",
        },

        // Status
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",

        // Topic accent system (data-driven, referenced via lib/tokens.ts)
        topic: {
          ai: "var(--color-topic-ai)",
          "ai-soft": "var(--color-topic-ai-soft)",
          windows: "var(--color-topic-windows)",
          "windows-soft": "var(--color-topic-windows-soft)",
          android: "var(--color-topic-android)",
          "android-soft": "var(--color-topic-android-soft)",
          webdev: "var(--color-topic-webdev)",
          "webdev-soft": "var(--color-topic-webdev-soft)",
          linux: "var(--color-topic-linux)",
          "linux-soft": "var(--color-topic-linux-soft)",
          security: "var(--color-topic-security)",
          "security-soft": "var(--color-topic-security-soft)",
          hardware: "var(--color-topic-hardware)",
          "hardware-soft": "var(--color-topic-hardware-soft)",
          productivity: "var(--color-topic-productivity)",
          "productivity-soft": "var(--color-topic-productivity-soft)",
        },
      },

      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Display / hero
        display: [
          "clamp(2.75rem, 2.1rem + 2.6vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h1: [
          "clamp(2.25rem, 1.9rem + 1.5vw, 3rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h2: [
          "clamp(1.75rem, 1.55rem + 0.8vw, 2.25rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        h3: [
          "clamp(1.375rem, 1.28rem + 0.4vw, 1.625rem)",
          { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        h4: [
          "1.25rem",
          { lineHeight: "1.35", letterSpacing: "-0.005em", fontWeight: "600" },
        ],
        h5: ["1.0625rem", { lineHeight: "1.4", fontWeight: "600" }],
        h6: [
          "0.875rem",
          { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        meta: ["0.8125rem", { lineHeight: "1.4" }],
        label: [
          "0.75rem",
          { lineHeight: "1.3", letterSpacing: "0.06em", fontWeight: "600" },
        ],
      },

      borderRadius: {
        // Centralized geometry scale referenced across all cards/controls
        xs: "8px",
        sm: "12px",
        control: "12px",
        card: "16px", // small card radius
        "card-md": "20px", // medium card radius
        "card-lg": "24px", // large card radius
        pill: "999px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      boxShadow: {
        // Elevation system — soft, layered, navy-tinted (never pure black)
        "elevation-1": "var(--shadow-elevation-1)",
        "elevation-2": "var(--shadow-elevation-2)",
        "elevation-3": "var(--shadow-elevation-3)",
        "focus-ring": "0 0 0 3px var(--color-accent-100)",
      },

      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
        slower: "600ms",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "node-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.12)", opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fade: "fade 0.5s ease-out forwards",
        "node-pulse": "node-pulse 3.5s ease-in-out infinite",
      },

      maxWidth: {
        container: "1280px",
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
