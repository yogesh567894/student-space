// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        blue: {
          800: "#1E3A8A",
          700: "#1D4ED8",
          600: "#2563EB",
        },
      },
    },
  },
  // ...other config
};
