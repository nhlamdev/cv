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
        'summary-gradient': 'linear-gradient(to right top, #d1913c, #dda152, #e8b168, #f4c17e, #ffd194);'
      }
    }
  },
  plugins: [require('flowbite/plugin'), require('preline/plugin')]
}
