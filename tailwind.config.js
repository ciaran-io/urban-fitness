module.exports = {
  mode: 'jit',
    purge: [
      './home/templates/home/**/*.html',
      './proucts/templates/products/**/*.html',
      './templates/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily : {
        'body': ['Noto Sans JP', 'sans-serif'],
        'alt-font': ['Nunito', 'sans-serif'],
        'logo': ['Megrim', 'cursive'],
      },
      extend: {
        colors: {
          primary:'#fcecdd',
          secondary:'#95a9af',
          headings:'#465559',
          text:'#9ca0a1',
          buttons:'#ffb98a',
        }
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [],
}

