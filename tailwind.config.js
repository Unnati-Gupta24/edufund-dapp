/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#0ff",
        dark: "#0a0a0a",
      },
      animation: {
        "neon-pulse": "neonPulse 1.5s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
