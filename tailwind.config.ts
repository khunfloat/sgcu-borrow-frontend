import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FCA758",
        green: "#C7EC96",
        blue: "#BDDCE8",
        gray: "#E3E3E3",
        red: "#D22B2B",
      },
    },
  },
  plugins: [],
} satisfies Config;
