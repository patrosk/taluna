module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  colors: {
    'green': '#00D186',
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
