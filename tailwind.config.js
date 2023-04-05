/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d2e32',
        secondary: '#3B3B3B',
        bgGray: '#f9f9f9',
      }
    },
  },
  plugins: [],
}

