/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  Mode: 'jit', 
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx)'),
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}


