/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      screens: {
        "ipad-land": { max: "1024px" },
        "mob-land": { max: "767px" },
        "mob": { max: "480px" },
        "sm-mob": { max: "375px" },
      },
      fontFamily: {
        "cormorant-regular": ["cormorant-regular"],
        "cormorant-medium": ["cormorant-medium"],
        "cormorant-semibold": ["cormorant-semibold"],
        "cormorant-bold": ["cormorant-bold"],
      },
      colors: {
        "primary-color": "#1C3935",
        "secondary-color": "#F7F9F9",
      },
      textColor: {
        "gray-shade": "#A0ADA9"
      },
      letterSpacing: {
        "sm": "0.14px",
        "base": "0.08px"
      }
    },
  },
  plugins: [],
};
