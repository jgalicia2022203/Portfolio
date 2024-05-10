/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Chivo Mono", "monospace"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
