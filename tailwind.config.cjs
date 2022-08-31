/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'other': 'repeat(12, minmax(auto, 60px)',
        'auto-fit': 'repeat(auto-fit, minmax(365px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(365px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(22rem, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(22rem, 1fr))',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1366px',
      },
      backgroundImage: {
        sorriso: 'url(/src/assets/background-doguinho.png)',
        doguinhos: 'url(/src/assets/background-amarelo-doguinhos.png)',
        sorrisosm: 'url(/src/assets/background-sorriso-sm.jpg)',
        sorrisomd: 'url(/src/assets/background-sorriso-md.jpg)',
        sorrisolg: 'url(/src/assets/background-sorriso-lg.jpg)',
        sorrisomdblend: 'url(/src/assets/background-sorriso-md-blend.jpg)',
        dogsubscribe: 'url(/src/assets/background-subscribe.png)',
        dogsubscriber: 'url(/src/assets/background-dog-subscriber.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
          white: {
              100: '#FFFFFF',
              900: '#AC8975',
          },
          yellow: {
              300: '#FFF7AD',
              500: '#FCEC5D',
              600: '#BAAE47',
          },
          gray: {
            200: '#CDCCC5',
            700: '#121214',
            800: '#1E1E1E',
            900: '#09090A',
          }
        },
    },
  },
  plugins: [],
}
