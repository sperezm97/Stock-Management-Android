const tintColorLight = '#0099FF';
const tintColorDark = '#fff';

const colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#363636',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  primary: '#26A8FF',
  secondary: '#0099FF',
  gray: '#707070',
  white: '#FBFBFB',
  blue: '#104BD6',
  text: '#363636',
};

const sizes = {
  //global sizes
  base: 16,
  font: 17,
  radius: 5,
  padding: 16,

  //font sizes
  h1: 30,
  h2: 22,
  body: 18,
  paragraph: 15,
  caption: 13,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
    color: colors.white,
  },
  header: {
    fontSize: sizes.h1,
  },
  title: {
    fontSize: sizes.h2,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

export { sizes, fonts, colors };
