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

  theme: {
      extend: {
          fontFamily: {
            'body-jp': ['Kiwi Maru', 'serif'],
            'body-en': ['Shrikhand', 'serif']
          },
          // 画像のアニメーション追加
          animation: {
              "bounce-in-top": "bounce-in-top 1.1s ease   both"
          },
          keyframes: {
              "bounce-in-top": {
                  "0%": {
                      transform: "translateY(-500px)",
                      "animation-timing-function": "ease-in",
                      opacity: "0"
                  },
                  "38%": {
                      transform: "translateY(0)",
                      "animation-timing-function": "ease-out",
                      opacity: "1"
                  },
                  "55%": {
                      transform: "translateY(-65px)",
                      "animation-timing-function": "ease-in"
                  },
                  "72%,90%,to": {
                      transform: "translateY(0)",
                      "animation-timing-function": "ease-out"
                  },
                  "81%": {
                      transform: "translateY(-28px)"
                  },
                  "95%": {
                      transform: "translateY(-8px)",
                      "animation-timing-function": "ease-in"
                  }
              }
          }
      }
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night", "garden", "dim", "dracula"],
  },
}
