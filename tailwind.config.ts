import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.125rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px'
      },
      colors: {
        brand1: '#FAA500',
        brand2: '#000000',
        brand3: '#000000b3',
        brand4: '#353535',
        brand6: '#464B54',
        brand7: '#787D83',
        brand8: '#EFEFEF',
        brand9: '#FAFAFA',
        brand10: '#FFFFFF',
        brand11: '#C4C4C4',
      },
      boxShadow: {
        'effect1': '0px 4px 6px 0px #00000014',
      },
      keyframes: {
        'menu-in': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'menu-out': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
            display: 'none',
          },
        },
        'minicart-in': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'minicart-out': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
            display: 'none',
          },
        },
      },
      animation: {
        'menu-in': 'menu-in 0.5s forwards',
        'menu-out': 'menu-out 0.5s forwards',
        'minicart-in': 'minicart-in 0.5s forwards',
        'minicart-out': 'minicart-out 0.5s forwards',
      },
    },
  },
  plugins: [],
};

export default config;