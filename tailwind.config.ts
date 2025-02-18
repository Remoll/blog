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
        red: {
          600: "#D94F4F",
        },
        blue: {
          600: "#444E8D",
        },
        green: {
          600: "#82E49A",
        },
        yellow: {
          600: "#FFBF42",
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
