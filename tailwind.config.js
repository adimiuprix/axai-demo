/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // soft white
        'primary-dark': '#E0E0E0', // a darker shade of white

        secondary: '#000', // slightly less than black
        "secondary-dark":'#222', // black

        'accent-light': '#54FF93', // light green
        accent: '#24C067',  // green
        'accent-dark': '#008E30', // darker shade of green
      },
      fontFamily: {
        robotoslab: ['Roboto Slab', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme('2.25rem'),
              lineHeight: theme('2.5rem'),
              fontWeight: theme('bold'),
              color: theme('colors.blue.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

