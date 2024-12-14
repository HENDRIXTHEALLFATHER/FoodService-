/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/images/food.jpg')",
      },
      transitionProperty: {
        'width-height': 'width, height',
      }
    },
  },
  plugins: [],
}

