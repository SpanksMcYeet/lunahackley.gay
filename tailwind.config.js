module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        bggradient: {
          '0%': {
            transform: 'rotate(-270deg)'
          },
          '100%': {
            transform: 'rotate(270deg)'
          },
        },
        spinInLeft: {
          '0%': {
            opacity: '0',
            transform: 'rotateZ(0deg) scale3d(0, 0, 0)',
          },
          '50%': {opacity: '0.7'},
          '70%': {
            transform: 'rotateZ(-360deg) scale3d(1, 1, 1)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'rotateZ(-360deg) scale3d(1, 1, 1)',
            opacity: '0.7',
          },
        },
      },
      animation: {
        bggradient: 'bggradient 15s ease-in-out',
        bgspin: 'spin 15s ease-in-out',
        spinInLeft: 'spinInLeft 5s cubic-bezier(0.23, 1, 0.32, 1)'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
