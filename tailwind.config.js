/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'769px',
      lg:'980px',
      xl:'1440px',
    },
    extend: {
      colors:{
        main:'#66DAFF',
        second:'#069BCA',
        text:'#20284F',
        white:'#F9f9f9',
        black:'1c1c1c',
      },
    },
  },
  plugins: [],
}
