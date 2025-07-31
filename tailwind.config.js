/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        opensans: ["var(--font-open-sans)"],
        roboto: ["var(--font-roboto)"], // ou autre
      },
      colors: {
        primaire: "#dc2626",
        secondaire: "#7c3aed",
      },
    },
  },
  plugins: [],
};
