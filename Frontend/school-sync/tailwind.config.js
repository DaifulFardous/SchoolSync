/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "istok-web": "'Istok Web'",
        poppins: "Poppins",
      },
      fontSize: {
        "13xl": "32px",
        "base-2": "16.2px",
        "mini-1": "14.1px",
        inherit: "inherit",
      },
    },
  },
  plugins: [
  ],
};