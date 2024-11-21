/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Mono"', 'monospace'], // Nombre de la fuente
      },
    },
  },
  plugins: [],
}

