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
