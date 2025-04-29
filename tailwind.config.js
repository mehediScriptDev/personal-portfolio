/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1A1A2E',
      secondary: '#16213E',
      accent: '#0F3460',
      highlight: '#E94560',
      textColor: '#FFFFFF',
      textSecondary: '#B0B0B0',
      mainbg: '#1A1A2E',
      littlebg: '#0F3460'
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      code: ['Fira Code', 'monospace'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

