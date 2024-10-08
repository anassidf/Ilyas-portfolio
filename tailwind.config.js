/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },

      colors: {
        'dark-gray': '#1e1e1e',
        'light-gray':'#3f3f3f',
        'dark-yellow': '#BFAF9B',
        'lighter-gray': '#A6A6A6',
        'slight-dark-gray':'#313131'
      }, 
      backgroundImage: {
        'landing-page-image': "url('/src/assets/landing-page-bg.jpg')",
        'clients-banner-image': "url('/src/assets/clients-banner.jpg')"
      }
    
    
    },
  letterSpacing:{
    'menu-spacing':'15px'
  }
  },
  plugins: [],
})