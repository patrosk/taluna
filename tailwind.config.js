module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
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
