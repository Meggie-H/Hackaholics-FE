/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Caslon Text"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      "primary-navy": {
        100: "#C1C3C8",
        300: "#6E7480",
        500: "#303849",
        700: "#242B39",
        900: "#131721",
      },
      "primary-sky": {
        100: "#E5EBED",
        300: "#C3D0D6",
        500: "#A9BCC4",
        700: "#98ADB6",
        900: "#7E97A2",
      },
      "primary-stone": {
        100: "#F7F6F5",
        200: "#F4F4F2",
        300: "#EDEDEA",
        500: "#DBDAD4",
        700: "#B0AFA7",
        800: "#62615D",
        900: "#3B3A38",
      },
      "accent-amber": {
        100: "#F0DFCA",
        300: "#DCB382",
        500: "#CD934D",
        700: "#C1803D",
        900: "#AE6425",
      },
      "bg-error": "#F5E2DF",
      error: "#BD371A",
      "bg-warning": "#FDB657",
      warning: "#B05B15",
      "bg-success": "#95B949",
      success: "#356823",
      "bg-information": "#83CBC4",
      information: "#328589",
      offwhite: "#F6F6F4",
      white: "#FFFFFF",
    },
  },
  plugins: [require("daisyui")],
};
