import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js", // Include Flowbite React components
    "./node_modules/flowbite/**/*.js", // Include Flowbite base components
  ],
  theme: {
    extend: {
      backgroundImage:{
        'treebg': "/Photos/88C71B99-4026-4BD4-8BB5-2838D395D929.jpg"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mybrown: "#483C32",
        navbar: "#121113",
      },
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
