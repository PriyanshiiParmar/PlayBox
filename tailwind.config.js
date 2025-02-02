module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will look for Tailwind classes in your JSX/TSX files
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Custom breakpoint for small mobile devices
      },
    },
  },
  plugins: [],
};
