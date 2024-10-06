module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Indigo-600
        },
        secondary: {
          DEFAULT: '#374151', // Gray-700
        },
        accent: {
          DEFAULT: '#06B6D4', // Cyan-500
        },
      },
    },
  },
  plugins: [],
};
