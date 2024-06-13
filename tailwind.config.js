const { default: daisyui } = require("daisyui");

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],

  theme: {
      extend: {
          fontFamily: {
            'body-jp': ['Noto Serif JP', 'serif'],
            'body-en': ['Shrikhand', 'serif']
          },
          // 画像、テキストのアニメーション追加
          animation: {
              "bounce-in-top": "bounce-in-top 1.1s ease   both",
              "fade-in-fwd": "fade-in-fwd 1.9s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
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
              },
              "fade-in-fwd": {
                "0%": {
                    transform: "translateZ(-80px)",
                    opacity: "0"
                },
                to: {
                    transform: "translateZ(0)",
                    opacity: "1"
                }
              }
          },
      }
  },

  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["light", "dark", "night", "garden", "dim", "dracula", "business"],
  }
}
