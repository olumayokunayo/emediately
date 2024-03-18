/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        orange: "#fe4f31",
        primary: "#050816",
        secondary: "#aaa6c3",
      },
      backgroundImage: {
        hero_pattern: "url('/src/assets/embg.jpg')",
      },
    },
  },
  plugins: [],
};
