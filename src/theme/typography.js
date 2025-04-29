// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// const primaryFont = 'Public Sans, sans-serif'; // Google Font
const primaryFont = 'Playfair Display Bold, serif';
// const secondaryFont = 'CircularStd, sans-serif'; // Local Font

// ----------------------------------------------------------------------

export const typography = {
  // fontFamily: 'Playfair Display',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: 'Playfair Display, sans-serif',
    fontWeight: 500,
    lineHeight: pxToRem(69),
    fontSize: pxToRem(42),
    // ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontFamily: 'Playfair Display, sans-serif',
    fontWeight: 500,
    lineHeight: pxToRem(57),
    fontSize: pxToRem(38),
    // ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: 'Playfair Display, sans-serif',
    fontWeight: 500,
    lineHeight: pxToRem(48),
    fontSize: pxToRem(32),
    // ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: 'Playfair Display, sans-serif',
    fontWeight: 700,
    lineHeight: pxToRem(39),
    fontSize: pxToRem(26),
    // ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: 'Playfair Display, sans-serif',
    fontWeight: 700,
    lineHeight: pxToRem(33),
    fontSize: pxToRem(22),
    // ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    // ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: 'Satoshi Variable, sans-serif',
    lineHeight: pxToRem(27),
    fontSize: pxToRem(18),
  },
  body2: {
    fontFamily: 'Satoshi Variable, sans-serif',
    lineHeight: pxToRem(24),
    fontSize: pxToRem(16),
  },
  body3: {
    fontFamily: 'Satoshi Variable, sans-serif',
    lineHeight: pxToRem(21),
    fontSize: pxToRem(14),
  },
  body4: {
    fontFamily: 'Satoshi Variable, sans-serif',
    lineHeight: pxToRem(18),
    fontSize: pxToRem(12),
  },
  body5: {
    fontFamily: 'Satoshi Variable, sans-serif',
    lineHeight: pxToRem(15),
    fontSize: pxToRem(10),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: 'Satoshi Variable, sans-serif',
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
};
