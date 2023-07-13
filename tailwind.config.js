/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary: "#468B97",
        accent: "#EF6262",
        warning: "#F3AA60",
      },
    },
  },
  plugins: [],
};
