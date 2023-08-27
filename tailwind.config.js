/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      container: {
        width: '100%',
        screens: {
          sm: '576px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },       
      height: {
        '120': '500px', 
        '100': '435px', 
      },
    },
  },
  plugins: [],
};