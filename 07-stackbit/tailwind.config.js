module.exports = {
  purge: ["./www/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        black: "var(--color-black)",
        blue: "var(--color-blue)",
        gray: {
          DEFAULT: "var(--color-gray)",
          light: "var(--color-gray-light)",
        },
        orange: "var(--color-orange)",
        red: "var(--color-red)",
        white: "var(--color-white)",
        yellow: {
          DEFAULT: "var(--color-yellow)",
          dark: "var(--color-yellow-dark)",
        },
      },
    },
    fontFamily: {
      default: ["Source Sans Pro", "sans-serif"],
      headings: ["Playfair Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
