/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f7ead9',
        secondary: '#e1d2a9',
        third: '#88b499',
        fourty: '#619885',
        five: '#67594e'
      }
    },
   
  },
  plugins: [],
}

