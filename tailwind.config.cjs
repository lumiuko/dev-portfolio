/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        lime: '#4EE1A0',
        light: '#979797',
        red: '#ff6f5b',
        'dark-gray': '#242424',
        'light-gray': '#d9d9d9',
        'semi-black': 'rgb(0 0 0 / 75%)'
      },
      backgroundImage: {
        'pattern-circle': `url('/assets/pattern-circle.svg')`,
        'pattern-rings': `url('/assets/pattern-rings.svg')`
      }
    },
    maxWidth: {
      small: '445px'
    },
    letterSpacing: {
      xl: '-2.5px',
      l: '-1.5px',
      link: '2.29px'
    },
    fontSize: {
      xl: '5.5rem',
      l: '3rem',
      m: '1.5rem',
      title: '2.5rem',
      default: '1.125rem',
      72: '4.5rem',
      40: '2.5rem',
      32: '2rem'
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1110px'
    }
  },
  plugins: []
}
