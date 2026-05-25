import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0a0a0a",
          900: "#050505",
          800: "#0a0a0a",
          700: "#121212",
          600: "#1a1a1a",
          500: "#222222",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50: "#FAF3DA",
          100: "#F2E5B0",
          200: "#E8D27A",
          300: "#DBBE5E",
          400: "#C9A84C",
          500: "#B89537",
          600: "#8C6F26",
          bright: "#FFD700",
        },
        ivory: {
          DEFAULT: "#F5F0E8",
          50: "#FBF8F2",
          100: "#F5F0E8",
          200: "#E8DFCC",
          300: "#D4C7A8",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Playfair Display", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.35em",
        ultrawide: "0.5em",
      },
      animation: {
        "shimmer": "shimmer 3s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #8C6F26 0%, #C9A84C 25%, #FFD700 50%, #C9A84C 75%, #8C6F26 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)",
        "noir-fade":
          "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 70%, #0a0a0a 100%)",
        "noir-vignette":
          "radial-gradient(ellipse at center, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6) 70%, #0a0a0a 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
