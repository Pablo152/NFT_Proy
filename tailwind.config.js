module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-13': '-11deg'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
