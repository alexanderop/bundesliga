module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
}
