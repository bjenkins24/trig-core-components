const primary = '#2C2929';
const primaryShades = {
  50: '#E6E5E5',
  100: '#C0BFBF',
  200: '#8A8787',
  300: '#6B6969',
  400: '#4C4949',
  500: primary,
  600: '#272424',
  700: '#211F1F',
  800: '#1B1919',
  900: '#100F0F',
};
const secondary = '#009E8F';
const secondaryShades = {
  // Secondary shade
  50: '#E0F3F2',
  100: '#B3E2DD',
  200: '#80CFC7',
  300: '#4DBBB1',
  400: '#26ADA0',
  500: secondary,
  600: '#009183',
  700: '#008F7C',
  800: '#098072',
  900: '#007060',
};
const background = '#F5F5F5';
const backgroundShades = {
  200: '#FFFFFF',
  300: '#FCFCFC',
  400: '#FAFAFA',
  500: background,
};
const primaryContrast = background;
const secondaryContrast = background;
const backgroundContrast = primary;
const shadow =
  '0px 1px 8px rgba(0, 0, 0, 0.08), 0px 4px 5px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.08)';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128],
  sizes: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [9, 11, 14, 16, 26, 34, 64],
  fontWeights: {
    bold: '600',
    normal: '400',
  },
  radii: [0, 4],
  colors: {
    // Primary Colors
    p: primary,
    pc: primaryContrast,
    pcs: backgroundShades,
    ps: primaryShades,
    // Secondary Colors
    s: secondary,
    sc: secondaryContrast,
    scs: backgroundShades,
    ss: secondaryShades,

    // Background Colors
    b: background,
    bc: backgroundContrast,
    bcs: primaryShades,
    bs: backgroundShades,

    // Accent Color
    a1: '#E6544C',
    a1c: background,
    a2: '#7594BD',
    a2c: background,
    a3: '#8D85E1',
    a3c: background,
    a4: '#2D81EF',
    a4c: background,
    a5: '#FCCC79',
    a5c: primary,

    // Error color
    e: '#f16969',
  },

  // Primary Colors
  p: primary,
  pc: primaryContrast,
  pcs: backgroundShades,
  ps: primaryShades,
  // Secondary Colors
  s: secondary,
  sc: secondaryContrast,
  scs: backgroundShades,
  ss: secondaryShades,

  // Background Colors
  b: background,
  bc: backgroundContrast,
  bcs: primaryShades,
  bs: backgroundShades,

  // Accent Color
  a1: '#E6544C',
  a1c: background,
  a2: '#7594BD',
  a2c: background,
  a3: '#8D85E1',
  a3c: background,
  a4: '#2D81EF',
  a4c: background,
  a5: '#FCCC79',
  a5c: primary,

  // Error color
  e: '#f16969',

  // OTHER
  // Box-shadow
  sh: shadow,
  br: '0.4rem',
};

export default theme;
