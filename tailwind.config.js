/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js',
    './node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(to right top, #e0e0e0, #e4e4e4, #e8e8e8, #ececec, #f0f0f0)',
        'dark-gradient': 'linear-gradient(to right top, #333333, #393939, #404040, #464646, #4d4d4d)',
        'm-light-gradient': 'linear-gradient(to right top, #e0e0e0, #e4e4e4, #e8e8e8, #ececec, #f0f0f0)',
        'm-dark-gradient': 'linear-gradient(to right top, #1a1a1a, #1e1e1e, #232323, #272727, #2c2c2c)'
      }
    }
  },
  plugins: [require('flowbite/plugin'), require('preline/plugin')]
}
