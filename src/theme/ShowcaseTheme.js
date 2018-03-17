import { injectGlobal } from 'styled-components';

const colors = {
  blue: '#09F',
  green: '#3C9',
  red: '#F63',
  yellow: '#FB3',
  orange: '#F93',
  purple: '#66F',

  darkBlue: '#1587DB',
  darkerBlue: '#28303D',

  lightRed: '#F2724F',
  lighterRed: '#F58F63'
};

const ShowcaseTheme = {
  palette: {
    // ┌───────────┐
    // │ Grayscale │
    // └───────────┘
    white: '#ffffff',
    lighterGray: '#ECEFF5',
    lightGray: '#D8DDE6',
    gray: '#C1C7D4',
    darkGray: '#ACB0BB',
    darkerGray: '#7F8492',
    black: '#494949',

    primary: colors.blue,
    primary2: colors.darkBlue,
    primary3: colors.darkerBlue,
    secondary: colors.red,
    secondary2: colors.lightRed,
    secondary3: colors.lighterRed,

    success: colors.green,
    alert: colors.yellow,
    warning: colors.orange,
    error: colors.red,
    info: colors.purple
  },

  // ┌──────────────┐
  // │ UI Variables │
  // └──────────────┘
  easingFunction: 'cubic-bezier(0.215, 0.440, 0.420, 0.880)',

  // ┌─────────────┐
  // │ TYPE COLORS │
  // └─────────────┘
  typeColor: '#494949',
  linkColor: colors.blue,

  // ┌──────────────┐
  // │ Breakpoints  │
  // └──────────────┘
  small: '480px',
  medium: '860px',
  large: '1450px',

  // Rhythm
  spacing: '1rem'
};

//Do the global styles stuff
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default ShowcaseTheme;
