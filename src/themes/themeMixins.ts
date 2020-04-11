import { FlattenSimpleInterpolation } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import { Theme, ThemeMixins } from './Theme';

export const themeMixins = {} as {
  [key in keyof ThemeMixins]: ({
    theme,
  }: {
    theme: Theme;
  }) => FlattenSimpleInterpolation;
};

Object.keys(defaultTheme.mixins).forEach(
  (mixin) =>
    (themeMixins[mixin as keyof ThemeMixins] = ({ theme }: { theme: Theme }) =>
      (theme.mixins || defaultTheme.mixins)[mixin as keyof ThemeMixins])
);
