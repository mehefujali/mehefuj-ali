/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2cc6c3",
        "sec-color": "#2cc6c31e",
        "low-bg-color": "#ffffff07",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["black"],
  },
};
