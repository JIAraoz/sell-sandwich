/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-color": "bounceColor 1s infinite ease-in-out",
      },
      keyframes: {
        bounceColor: {
          "0%, 100%": {
            transform: "translateY(0)",
            backgroundColor: "rgb(236, 72, 153)", // Rosado (pink-500)
          },
          "50%": {
            transform: "translateY(-10px)",
            backgroundColor: "#808000", // Verde oliva
          },
        },
      },
    },
  },
  plugins: [],
}

