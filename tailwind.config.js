module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
      'Golds-Gym-Yellow' : '#ffed00',
      'Golds-Gym-Secondary' : '#F0DF00',
      'Golds-Gym-Light' : '#fff680'
    },
    screens: {
      '1920res' : '1920px',
      '2500res' : '2500px'
    }
  },
  },
  plugins: [],
}

