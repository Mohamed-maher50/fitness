/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#EF4444",
          secondary: "#325401",
          accent: "#1dcdbc",
          neutral: "#181B1C",
          "base-100": "#0000",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "primary-content": "#ffff",
        },
      },
      {
        light: {
          primary: "#FF2B2B",
          secondary: "#325401",
          "primary-content": "#2c2c2c",
          accent: "#1dcdbc",
          neutral: "#fff",
          "base-100": "#FFFFFF",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "base-300": "#162b36bf",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
