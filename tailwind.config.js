/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        outside: "0px 0px 10px 4px rgba(34, 60, 80, 0.14)",
      },
    },
  },
  plugins: [],
};
