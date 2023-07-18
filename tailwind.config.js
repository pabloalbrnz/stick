/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      animation: {
        errorPage: "errorPage 20s ease infinite",
        errorShake: "errorShake 1.5s ease infinite",
        errorPageBounce: "errorPageBounce 15s ease infinite",
      },
      keyframes: {
        errorPage: {
          "0%, 100%": {
            color: "theme(colors.rose.500)",
          },
          "33.34%": {
            color: "theme(colors.violet.500)",
          },
          "66.67%": {
            color: "theme(colors.teal.500)",
          },
        },
        errorShake: {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "rotate(-1deg)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "rotate(1deg)",
          },
        },
        errorPageBounce: {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "25%, 75%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
