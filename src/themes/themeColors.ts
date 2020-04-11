import { defaultTheme } from './defaultTheme';
import { Theme, ThemeColors } from './Theme';

export const themeColors = {} as {
  [key in keyof ThemeColors]: ({ theme }: { theme: Theme }) => string;
};

Object.keys(defaultTheme.colors).forEach(
  (color) =>
    (themeColors[color as keyof ThemeColors] = ({ theme }: { theme: Theme }) =>
      (theme.colors || defaultTheme.colors)[color as keyof ThemeColors])
);
