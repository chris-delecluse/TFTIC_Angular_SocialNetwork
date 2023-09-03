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
        hover: '#505463',
        'z-color': '#373C48'
      },
      inset: {
        '18': '4.5rem',
        '2.75': '0.775rem',
        '4.5': '1.125rem',
        '7.5': '1.8875rem'
      },
      colors: {
        'special-blue': '#3B92BC'
      },
      borderColor: {
        primary: '#2D303D',
        secondary: '#5E6D73',
      },
      borderWidth: {
        '10': '10px',
      },
      height: {
        '89-vh': '89vh',
        '68-vh': '68vh',
        '25-vh': '25vh',
        '18-vh': '18vh'
      },
      padding: {
        17: '4.250rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

