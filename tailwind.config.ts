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
          DEFAULT: "#1A1208",
          900: "#0A0A0A",
          800: "#1A1208",
          700: "#241B0D",
          600: "#2E2410",
          500: "#3A2F18",
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
          label: "#6F561A",
          light: "#E8D5A3",
          bright: "#FFD700",
        },
        ivory: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#F9F6F1",
          200: "#F2EDE6",
          300: "#E3DCCD",
        },
        cream: "#F9F6F1",
        warmgray: "#F2EDE6",
        snow: "#FFFFFF",
        pearl: "#E3DCCD",
        muted: {
          DEFAULT: "#5A524A",
          dark: "#8C8378",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Bodoni Moda", "serif"],
        sans: ["var(--font-body)", "Jost", "system-ui", "sans-serif"],
        // Separate role: the wordmark does not follow the display face.
        logo: ["var(--font-logo)", "Playfair Display", "serif"],
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
        "light-fade":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 70%, #FFFFFF 100%)",
        "light-vignette":
          "radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.85) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
