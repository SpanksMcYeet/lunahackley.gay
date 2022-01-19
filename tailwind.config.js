module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        'bg-gradient': {
          '0%, 100%': {
            transform: 'rotate(-270deg)'
          },
          '50%': {
            transform: 'rotate(270deg)'
          },
        },
      },
      animation: {
        'bg-gradient': 'bg-gradient 15s ease-in-out',
        'bg-spin': 'spin 15s ease-in-out'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
