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

  gradients: {
    primary: 'linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)',
    secondary:
      'linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)'
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
  spacing: '1rem',

  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '8px'
  },

  boxShadow: {
    z1: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    z2: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    z3: 'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px',
    z4: 'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px',
    z5: 'rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px'
  }
};

//Do the global styles stuff
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: ${colors.darkerBlue};
  }
`;

export default ShowcaseTheme;
