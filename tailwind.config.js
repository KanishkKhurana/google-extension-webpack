/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'logo' : ["Pacifico", "cursive"],
       'primary' : ["Raleway", "sans-serif"],
    },
  },
},
  plugins: [],
}