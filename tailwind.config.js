/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color' : '#ffc400',
        'sec-color' : '#00ff4c0e',
        'low-bg-color' : '#ffffff07',
      }
    },
  },
  plugins: [daisyui],
}

