import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stp: {
          navy: "#0a1128",
          dark: "#030712",
          surface: "#0f172a",
          card: "#111827",
          border: "#1f2937",
          blue: "#2563eb",
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
          gold: "#f59e0b",
          red: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(6, 182, 212, 0.25)",
        "glow-gold": "0 0 35px -5px rgba(245, 158, 11, 0.25)",
        "glow-emerald": "0 0 35px -5px rgba(16, 185, 129, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark":
          "radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
