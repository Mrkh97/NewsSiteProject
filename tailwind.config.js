module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          50: 'rgba(255, 255, 255, 0.50)',
          30: 'rgba(255, 255, 255, 0.30)',
          15: 'rgba(255, 255, 255, 0.15)',
          10: 'rgba(255, 255, 255, 0.10)',
          100: 'rgba(255,255,255,1)'
        },
      }
    },
    fontFamily: {
      
      'Pacifico':['Pacifico']
    }
  },
  plugins: [],
}
