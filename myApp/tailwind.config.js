/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, scss}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Custom primary color (Orange-Red)
        secondary: "#4A90E2", // Custom blue shade
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        ponomar: ["Ponomar", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
