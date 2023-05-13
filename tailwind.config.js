/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        home: "#efefef",
        drawer: "#f7f7f7",
        navbar: "#ffffff",
        header: "#333333",
        text: "#4d4d4d",
        button: "#ededed",
        grayText: "#b3b3b3"
      },
      letterSpacing: {
        tightest: '-0.3em'
      },
      borderRadius: {
        floatingButton: '5px'
      }
    },
    
  },
  plugins: [],
}

