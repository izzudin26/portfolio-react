/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#03E569",
      },
    },
  },
  plugins: [],
};
