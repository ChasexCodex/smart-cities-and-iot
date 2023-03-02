/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'DEFAULT': '#14aeff'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
