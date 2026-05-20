/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#E5B520',
          blue: '#0A66FF',
          red: '#C8102E',
          dark: '#1a1a1a',
          light: '#f7f7f9',
        },
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
