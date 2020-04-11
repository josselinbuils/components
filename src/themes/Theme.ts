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
  grey12: string;
  grey25: string;
  grey38: string;
  grey45: string;
  grey61: string;
  grey74: string;
  grey87: string;
  grey93: string;
  grey96: string;
  grey98: string;

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
