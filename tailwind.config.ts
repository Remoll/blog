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
        "custom-gray": "#f4f4f4",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E2C3B",
        secondary: "#363B5C",
        red: {
          600: "#D94F4F",
          700: "#A02E41",
        },
        blue: {
          600: "#444E8D",
          700: "#0B2D7F",
        },
        green: {
          600: "#82E49A",
          700: "#49C38C",
        },
        yellow: {
          600: "#FFBF42",
          700: "#C69E34",
        },
      },
      borderRadius: {
        "card-sm": "53.09px",
        "card-md": "60px",
        "card-lg": "60.37px",
      },
      fontFamily: {
        playfair: "var(--font-playfair-display), serif",
        poppins: "var(--font-poppins), sans-serif",
        opensans: "var(--font-open-sans), sans-serif",
      },
      fontSize: {
        "2xs": "0.75rem", // 12px
        xs: "0.875rem", // 14px
        sm: "0.9375rem", // 15px
        base: "1rem", // 16px
        xl: "1.125rem", // 18px
        "2xl": "1.22rem", // ~19.47px
        "3xl": "1.25rem", // 20px
        "4xl": "1.5rem", // 24px
        "5xl": "1.55rem", // ~24.77px
        "6xl": "1.75rem", // 28px
        "7xl": "2rem", // 32px
        "8xl": "2.19rem", // ~35px
      },
    },
  },
  plugins: [],
} satisfies Config;
