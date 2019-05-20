// https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=FFC107&secondary.color=7CB342

export const theme = {
  primary: {
    main: '#7cb342',
    light: '#aee571',
    dark: '#4b830d',
  },
  secondary: {
    main: '#ffc107',
    light: '#fff350',
    dark: '#c79100',
  },
  text: {
    main: '#111',
    inverted: '#eeeeee',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  gaps: {
    xxs: 4,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
  },
  fontSize: {
    h1: '16px',
    body: '14px',
  },
  fontWeight: {
    bold: 500,
    normal: 400,
    light: 300,
  },
};

export type Theme = typeof theme;
