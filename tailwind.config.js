module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            orange: {
                200: '#F06700',
            },
            green: {
                600: '#00D186',
            },
            gray: {
                500: '#2a2b2a',
                900: '#131c13',
            }
          },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
