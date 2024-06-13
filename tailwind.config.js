const { default: daisyui } = require("daisyui");

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {},
      fontFamily: {
        'body-jp': ['Kiwi Maru', 'serif'],
        'body-en': ['Shrikhand', 'serif']
      },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
}
