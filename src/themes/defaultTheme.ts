import { rem } from 'polished';
import { css } from 'styled-components';
import { Theme, ThemeColors, ThemeMixins, ThemeVariables } from './Theme';

const colors = {
  // Main
  primary: '#007ad8',
  secondary: '#12a500',

  // Error levels
  success: '#3cb34c',
  info: '#15b1ce',
  warning: '#ff8a00',
  error: '#df3f2e',

  // Grey shades
  grey12: '#212121',
  grey25: '#424242',
  grey38: '#616161',
  grey45: '#757575',
  grey61: '#9e9e9e',
  grey74: '#bdbdbd',
  grey87: '#e0e0e0',
  grey93: '#eeeeee',
  grey96: '#f5f5f5',
  grey98: '#fafafa',

  // Not colors
  black: '#000000',
  white: '#ffffff',
} as ThemeColors;

const borderWidth = rem('1px');

const variables = {
  // Borders
  border: `${borderWidth} solid`,
  borderRadius: rem('3px'),
  borderWidth,

  // Font
  fontFamily: 'Open Sans, arial, sans-serif',
  fontWeight: 400,
  fontSizeXL: rem('20px'),
  fontSizeL: rem('18px'),
  fontSize: rem('16px'),
  fontSizeM: rem('14px'),
  fontSizeS: rem('12px'),
  fontSizeXS: rem('10px'),

  // Spaces
  doubleSpace: rem('32px'),
  space: rem('16px'),
  halfSpace: rem('8px'),
  quarterSpace: rem('4px'),
} as ThemeVariables;

const mixins = {
  component: css`
    font-family: ${variables.fontFamily};
    font-size: ${variables.fontSize};
    font-weight: ${variables.fontWeight};
    line-height: 1.5;
  `,
} as ThemeMixins;

export const defaultTheme = { colors, mixins, variables } as Theme;
