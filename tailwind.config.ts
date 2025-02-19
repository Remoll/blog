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
    },
  },
  plugins: [],
} satisfies Config;
