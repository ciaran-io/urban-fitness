module.exports = {
  mode: 'jit',
    purge: [
      './home/templates/home/**/*.html',
      './products/templates/products/**/*.html',
      './cart/templates/cart/**/*.html',
      './templates/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        'sort-box':' 0px 0px 5px rgba(0, 0, 0, 0.28)',
      },
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
          text:'#838687',
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

