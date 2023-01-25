/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // path to flowbite-react
  ],
  theme: {
    extend: {
      colors: {
        "vodafone": "#e60000",
        "light-white": "rgba(255,255,255,0.373)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
}
