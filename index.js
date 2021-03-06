//COLORS
const skyBlue = '#57C7FF';
const lgBlue = '#6DDCCF';
const black = '#000000';
const dkGray = '#333';
const lgGray = '#555555';
const red = '#F56A79';
const rose = '#F25287';
const purple = '#A685E2';
const yellow = '#FFEDA3';
const lgYellow = '#FDFFB6';
const white = '#fff';
const green = '#A5E1AD';
const lgGreen = '#9BDEAC';

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: skyBlue,
    cursorShape: 'UNDERLINE',
    cursorAccentColor: black,
    foregroundColor: white,
    backgroundColor: black,
    selectionColor: white,
    borderColor: dkGray,
    fontWeightBold: 'normal',
    colors: {
      black: black,
      red: red,
      green: green,
      yellow: yellow,
      blue: lgGray,
      magenta: rose,
      cyan: lgBlue,
      white: white,
      lightBlack: lgGray,
      lightRed: yellow,
      lightGreen: lgGreen,
      lightYellow: lgYellow,
      lightBlue: skyBlue,
      lightMagenta: purple,
      lightCyan: skyBlue,
      lightWhite: white,
    },
  })
}