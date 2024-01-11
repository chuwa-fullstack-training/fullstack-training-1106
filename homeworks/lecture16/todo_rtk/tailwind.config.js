/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        blue: "0 0 0 4px rgba(0, 123, 255, 0.30)",
        gray: "0 0 0 4px rgba(156, 163, 175, 0.40)"
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
