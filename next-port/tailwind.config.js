/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  Mode: 'jit', 
  content: [// tailwind를 사용할 경로들을 입력
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}


