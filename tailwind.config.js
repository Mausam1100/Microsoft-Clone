/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        xsm: '540px',
        sm1: '860px',
        md1: '910px',
        md2: '960px',
        md3: '1005px',
        md4: '1180px',
        md5: '1085px',
        xl1: '1400px',
        xl2: '1790px'
      },
      spacing: {
        17: '4.3rem',
      }
    },
  },
  plugins: [],
}

