import { defaultTheme } from './defaultTheme';
import { Theme, ThemeVariables } from './Theme';

export const variables = {} as {
  [key in keyof ThemeVariables]: ({
    theme,
  }: {
    theme: Theme;
  }) => number | string;
};

Object.keys(defaultTheme.variables).forEach(
  (variable) =>
    (variables[variable as keyof ThemeVariables] = ({
      theme,
    }: {
      theme: Theme;
    }) =>
      (theme.variables || defaultTheme.variables)[
        variable as keyof ThemeVariables
      ])
);
