// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/.vitepress/**/*.{js,ts,tsx,vue,css}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;
