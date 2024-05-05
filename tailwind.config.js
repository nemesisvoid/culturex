/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: 'Open Sans, sans-serif' },
    extend: {
      gridTemplateColumns: {
        'auto-fill': '1.1fr 1fr 1.1fr',
        'grid-auto-100': '1.2fr 1.4fr',
      },
    },

    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '400px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
