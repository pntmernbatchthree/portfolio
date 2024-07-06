/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Sora", "sans-serif"],
      },
      colors: {
        primaryColor: "#0f0715",
        purpleDark: "#8750f7",
      },
    },
  },
  plugins: [],
};
