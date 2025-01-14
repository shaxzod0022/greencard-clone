/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "#00214e",
        blueColor: "#2196F3",
        lightGrey: "#f9f9f9",
        darkBlue: "#233b93",
      },
    },
  },
  plugins: [],
};
