import { darken, lighten, rem } from 'polished';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Icon } from '../Icon';
import { themeColors, themeMixins, themeVariables } from '../themes';

const { grey74, grey87, grey93, primary, secondary, white } = themeColors;
const { component } = themeMixins;
const {
  border,
  borderRadius,
  borderWidth,
  fontSize,
  halfSpace,
  quarterSpace,
  space,
} = themeVariables;

const variants = {
  ghost: css`
    border-color: ${primary};
    background-color: ${white};
    color: ${primary};

    &:active {
      border-color: transparent;
      box-shadow: 0 0 0 ${borderWidth} ${primary};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${primary};
        color: ${white};
      }
    }
  `,
  light: css`
    border-color: ${grey87};
    background-color: ${white};
    color: ${(props) => darken(0.3, primary(props))};

    &:active {
      border-color: transparent;
      box-shadow: 0 0 0 ${borderWidth} ${grey87};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${grey93};
      }
    }
  `,
  primary: css`
    background-color: ${primary};
    color: ${white};

    &:active {
      box-shadow: 0 0 0 ${borderWidth} ${primary};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${(props) => lighten(0.1, primary(props))};
      }
    }
  `,
  secondary: css`
    background-color: ${secondary};
    color: ${white};

    &:active {
      box-shadow: 0 0 0 ${borderWidth} ${secondary};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${(props) => lighten(0.1, secondary(props))};
      }
    }
  `,
} as { [variant: string]: FlattenSimpleInterpolation };

const sizes = {
  large: css`
    padding: ${rem('12px')} ${rem('20px')};
    height: ${rem('58px')};
    min-width: ${rem('58px')};
  `,
  medium: css`
    padding: ${halfSpace} ${space};
    height: ${rem('50px')};
    min-width: ${rem('50px')};
  `,
  small: css`
    padding: ${quarterSpace} calc(${halfSpace} + ${quarterSpace});
    height: ${rem('42px')};
    min-width: ${rem('42px')};
  `,
  extraSmall: css`
    padding: 0 ${halfSpace};
    height: ${rem('34px')};
    min-width: ${rem('34px')};
  `,
} as { [size: string]: FlattenSimpleInterpolation };

export const Content = styled.span`{
  padding: ${quarterSpace} 0;
  display: inline-block;
`;

export const StyledButton = styled.button<{ size: string; variant: string }>`
  ${component};

  border: ${border} transparent;
  border-radius: ${borderRadius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
  font-size: ${fontSize};
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  box-sizing: border-box;

  ${({ size }) => sizes[size]};

  &:disabled {
    color: ${grey74};
    background-color: ${grey93};
    border-color: transparent;
  }

  &:not(:disabled) {
    cursor: pointer;

    ${({ variant }) => variants[variant]};
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: ${rem('21px')};

  &:not(:last-child) {
    margin-right: ${halfSpace};
  }
`;
