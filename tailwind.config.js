/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'homepage': "url('/images/background.jpeg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
};
export const plugins = [];