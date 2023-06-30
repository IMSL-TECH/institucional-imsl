/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffff",
        primary: "#247377",
        green: "#1f6266",
        "middle-green": "#21696d",
        "dark-green": "#184a4d",
        "dark-blue": "#162A65",
        areaWhite: "#285572",
        "light-green": "#037c82",
      },
      backgroundColor: {
        white: "#f3f3f3",
        primary: "#247377",
        green: "#1f6266",
        "middle-green": "#21696d",
        "dark-green": "#184a4d",
        "dark-blue": "#162A65",
        areaWhite: "#285572",
      },
    },
  },
  plugins: [],
};
