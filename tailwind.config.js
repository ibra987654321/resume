/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.public/index.html','./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'primary': '#f23abe',
      }
    },
  },
  plugins: [],
}

