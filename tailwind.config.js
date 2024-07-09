/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        outlet: 'calc(100vh - 80px)',
      },
      letterSpacing: {
        4: '.5em',
      },
      fontFamily: {
        josefin: "'Josefin Sans','sans-serif'",
      },
    },
  },
  plugins: [require('daisyui')],
};
