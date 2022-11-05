/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#ECF7FF",
      primary_dark: "#A6B9D6",
      secondary: "#00288A",
      secondary_light: "#113A9F",
      secondary_lighter: "#3DBCF9",
      tertiary: "#FFF",
    },
    extend: {},
  },
  plugins: [],
};
