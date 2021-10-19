module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0082C9',
        'primary-lg': '#AFDEF7',
        'primary-bg': '#1B7CB1',
        secondary: '#F05223',
        'secondary-lg': '#DE826B',
        'secondary-bg': '#BE5741',
        tertiary: '#FEC00F',
        'tertiary-lg': '#FECA8E',
        'tertiary-bg': '#FEB700',
        'bg-color': '#353535',
        'lg-grey': '#B9B9B9',
        'lg-green': '#A4CE4B',
      },
      fontSize: {
        gigantic: '248px',
        huge: '144px',
        'really-big': '168px',
        'quite-big': '114px',
        big: '72px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
