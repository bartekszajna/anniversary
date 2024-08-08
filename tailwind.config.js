/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Merriweather', 'serif']
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      brand: '#2a6688',
      primary: '#C16937',
      gray: '#F4F4F4'
    },
    extend: {}
  },
  plugins: []
}
