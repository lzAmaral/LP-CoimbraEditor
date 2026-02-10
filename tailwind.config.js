/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4D81",     // Azul principal
        secondary: "#5ba5ff",   // Azul claro
        background: "#F0EEE9",  // Fundo off-white
        text: "#1F2933",        // Texto principal
        muted: "#6B7280",       // Texto secundário
        accent: "#F59E0B",      // CTA / destaque
        surface: "#FFFFFF",    // Cards
        border: "#E5E7EB",      // Bordas
      },
    },
  },
  plugins: [],
}
