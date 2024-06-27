import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#373528",
        accent1: "#EFDFFD",
        accent2: "#E5FFC7",
        accent3: "#FDE49B",
      },
      boxShadow: {
        card: "0px 4px 16px 0px #673F1833",
        message: "0px 4px 16px 0px #9A5E2426",
      },
      backgroundImage: {
        "hero-pattern": "url('@/app/assets/patterns/hero-pattern.svg')",
      },
      keyframes: {
        ticker: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc((487px + 1rem) * -5))",
          },
        },
      },
      animation: {
        ticker: "ticker 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
