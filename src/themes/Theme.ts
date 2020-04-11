import { FlattenSimpleInterpolation } from 'styled-components';

export interface ThemeColors {
  // Main
  primary: string;
  secondary: string;

  // Error levels
  success: string;
  info: string;
  warning: string;
  error: string;

  // Grey shades
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;

  // Not colors
  black: string;
  white: string;
}

export interface ThemeMixins {
  component: FlattenSimpleInterpolation;
}

export interface ThemeVariables {
  // Borders
  border: string;
  borderRadius: string;
  borderWidth: string;

  // Font
  fontFamily: string;
  fontWeight: number;
  fontSizeXL: string;
  fontSizeL: string;
  fontSize: string;
  fontSizeM: string;
  fontSizeS: string;
  fontSizeXS: string;

  // Spaces
  doubleSpace: string;
  space: string;
  halfSpace: string;
  quarterSpace: string;
}

export interface Theme {
  colors: ThemeColors;
  mixins: ThemeMixins;
  variables: ThemeVariables;
}
