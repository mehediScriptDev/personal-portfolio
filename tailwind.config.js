/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        highlight: '#E94560',
        mainbg: '#1A1A2E',
        littlebg: '#0F3460'
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
    },
  plugins: [
    require('daisyui'),
  ],
}

