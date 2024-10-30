import type { Config } from "tailwindcss";

const config: Config = {
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
        brand: {
          blue: "hsla(221, 100%, 63%, 1)",
          darkBlue: "hsla(221, 100%, 30%, 1)",
          gray: "hsla(0, 0%, 62%, 1)"
        }
      },

    },
   
    boxShadow: {
      'card': '2px 2px 30px hsla(0, 0%, 0%, 0.25)',
      },
  },
  plugins: [],
};
export default config;
