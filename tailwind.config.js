module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'light': 'rgba(255, 255, 255, 0.3)',
        'medium': 'rgba(255, 255, 255, 0.6)',
      },
      animation: {
        marquee: 'marquee linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
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
    padding: {
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
    fontFamily: {
      'mudstone': ['"mudstone-sans"', 'sans-serif'],
      'salted': ['"salted"', 'sans-serif'],
    },
    fontSize: {
      h1: ['2.875rem', {
        lineHeight: '1',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      'h1-d': ['5rem', {
        lineHeight: '1',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      h2: ['2.25rem', {
        lineHeight: '1',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      'h2-d': ['3rem', {
        lineHeight: '1.2',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      h3: ['1.375rem', {
        lineHeight: '1.2',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      'h3-d': ['1.5rem', {
        lineHeight: '1.2',
        fontWeight: '700',
        fontFamily: 'mudstone',
      }],
      h4: ['1.125rem', {
        lineHeight: '1.2',
        fontWeight: '700'
      }],
      eyebrow: ['1rem', {
        lineHeight: '1.2',
        fontWeight: '700',
        letterSpacing: '0.1em',
        fontFamily: 'mudstone',
        textTransform: 'uppercase',
      }],
      'p-large': ['1.25rem', {
        lineHeight: '1.6',
        fontWeight: '400',
        fontFamily: 'salted',
      }],
      p: ['1rem', {
        lineHeight: '1.6',
        fontWeight: '400',
        fontFamily: 'salted',
      }],
      'p-small': ['0.875rem', {
        lineHeight: '1.2',
        fontWeight: '400',
        fontFamily: 'salted',
      }],
      'p-tiny': ['0.75rem', { 
        lineHeight: '1.6',
        fontWeight: '400',
        fontFamily: 'salted',
      }],
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
