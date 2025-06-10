/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#F5B800',
        'primary-hover': '#E6A600',
        'primary-light': '#FFC933',
        'primary-dark': '#CC9900',
        secondary: '#6366F1',
        'secondary-hover': '#5856EB',
        'secondary-light': '#818CF8',
        'secondary-dark': '#4F46E5',
        accent: '#FF8C00',
        'accent-hover': '#E67E00',
      },
    },
  },
  plugins: [],
};