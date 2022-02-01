module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FEF08A",
        "primary-text": "#292717",
        "button-primary": "#544F2E",
        "button-secondary": "#7E7845",
        "secondary-yellow": "#D3C873",
      },
      // backgroundImage: {
      //   "hero-desktop": "url('/images/landscapeShowcase.jpg')",
      // }
    },
    fontFamily: {
      Quicksand: 'Quicksand, sans-serif',
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
}
