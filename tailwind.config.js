/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          DM: ["DM Sans", "sans-serif"],
          Nunito: ["Nunito", "sans-serif"],

      }
    },
  },
  plugins: [],
  darkMode: "class"
}

