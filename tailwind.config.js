/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '426px',
        md: '769px',
        lg: '1025px',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
