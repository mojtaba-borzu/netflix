module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["netflix", "Arial", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/heroBoxImage.jpg')",
      },
    },
  },
  plugins: [],
};
