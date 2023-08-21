/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2D303D',
        secondary: '#5E6D73',
        hover: '#505463'
      },
      inset: {
        '18': '4.5rem'
      },
      colors: {
        'special-blue': '#3B92BC'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

