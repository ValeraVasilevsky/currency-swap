export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#a1a1aa",
        accent: "#799E99",
      },

      fontSize: {
        "placeholder-sm": ["10px", "12px"],
      },

      boxShadow: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
