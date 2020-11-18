const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      // display: ['Inter', 'system-ui', 'sans-serif'],
      // body: ['Inter', 'system-ui', 'sans-serif'],
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        violet: colors.violet,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/**
 * === Already Included Colors ===
 * gray: coolGray
 * red: red
 * yellow: amber
 * green: emerald
 * blue: blue
 * indigo: indigo
 * purple: violet
 * pink: pink
 */

/**
 * === All Colors ===
 * blueGray
 * coolGray
 * gray
 * trueGray
 * warnGray
 * red
 * orange
 * amber
 * yellow
 * lime
 * green
 * emerald
 * teal
 * cyan
 * lightBlue
 * blue
 * indigo
 * violet
 * purple
 * fuchsia
 * pink
 * rose
 */
