/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'primary-color-dark': 'var(--primary-color-dark)',
        'secondary-color-dark': 'var(--secondary-color-dark)',
        'font-light': 'var(--font-light)',
        'font-dark': 'var(--font-dark)',
        'red-from-gradient': '#C0163F',
        'red-via-gradient': 'rgba(201, 71, 103, 0.760417)',
        'red-to-gradient': 'rgba(228, 228, 228, 0)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        'p-xl': '55rem',
      },
    },
  },
  plugins: [],
};
