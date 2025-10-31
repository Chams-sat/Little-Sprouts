/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#FFD93D',
        'accent-blue': '#4D96FF',
        'accent-green': '#6BCB77',
        'background-light': '#FFF9F0',
        'background-dark': '#1A202C',
        'text-light': '#3D3D3D',
        'text-dark': '#F0F0F0',
        'subtle-light': '#FEECEB',
        'subtle-dark': '#3D3D3D',
        'accent-red': '#E74C3C',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        handwriting: ['Gaegu', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
