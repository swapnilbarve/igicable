/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,html}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#F4856D',
          '50': '#FEF4F2',
          '100': '#FDE4DF',
          '200': '#FAC4B9',
          '300': '#F7A593',
          '400': '#F4856D',
          '500': '#F05939',
          '600': '#E03611',
          '700': '#AC290D',
          '800': '#781D09',
          '900': '#431005'
        },
        'secondary': {
          DEFAULT: '#094E5D',
          '50':  '#dae4e7',
          '100': '#b2c4ca',
          '200': '#8ba5ad',
          '300': '#648791',
          '400': '#3d6a77',
          '500': '#094E5D',
          '600': '#08414d',
          '700': '#07343e',
          '800': '#05272f',
          '900': '#031b21'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
