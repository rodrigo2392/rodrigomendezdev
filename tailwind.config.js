/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d2e32',
        secondary: '#767676',
        bgGray: '#f9f9f9',
      }
    },
  },
  plugins: [],
}

