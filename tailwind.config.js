/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },

      backgroundImage: {
        desktopImage: "url('./images/bg-desktop.png')",
        mobileImage: "url('./images/bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
