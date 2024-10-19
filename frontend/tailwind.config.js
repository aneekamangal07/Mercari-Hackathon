import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          hover: colors.gray[100],
          border: colors.gray[300],
          text: colors.gray[600],
        },
      },
    },
  },
  plugins: [],
};
