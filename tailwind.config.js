/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif']
      },
      boxShadow: {
        custom: '0px 4px 8px 0px rgba(69, 69, 69, 0.25)'
      }
    },
    screens: {
      '2xl': { max: '1680px' },

      xl: { max: '1250px' },

      lg: { max: '1050px' },

      md: { max: '700px' },

      sm: { max: '639px' }
    }
  },
  plugins: []
}
