module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "#191F28",
        "custom-dark-grey": "#3C3E48",
        "custom-grey": "#4B4D5C",
        "custom-grey-2": "#4D4E57",
        "custom-grey-3": "#999BA3",
        "custom-light-grey": "#6E7079",
        "custom-grey-footer": "#C1C3C9",
        white: "#fff",
        red: "#E50019",
      },
      letterSpacing: {
        "much-widest": ".2em",
      },
      fontSize: {
        s8: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
