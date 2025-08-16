/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#171717",
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      keyframes: {
        neonPulse: {
          "0%": { transform: "scale(0.98)", opacity: "0.8", filter: "blur(8px)" },
          "50%": { transform: "scale(1.06)", opacity: "1", filter: "blur(18px)" },
          "100%": { transform: "scale(0.98)", opacity: "0.8", filter: "blur(8px)" },
        },
      },
      animation: {
        neonPulse: "neonPulse 1.8s ease-in-out infinite",
      },
    },
  },
};
