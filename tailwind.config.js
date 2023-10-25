module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'light': 'rgba(255, 255, 255, 0.3)',
      }
    },
    gap: {
      '4xs': '4px',
      '3xs': '8px',
      '2xs': '16px',
      'xs': '24px',
      'sm': '32px',
      'md': '48px',
      'lg': '64px',
      'xl': '80px',
      '2xl': '120px',
      '3xl': '144px',
      '4xl': '160px',
      '5xl': '200px',
      'none': '0',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
