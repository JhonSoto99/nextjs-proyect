const { requirePage } = require('next/dist/server/require');
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js}'],
  theme: {
    colors: {
      ...colors,
    },
  },
};
