import { darken, lighten, rem } from 'polished';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import {
  greyDark,
  greyDarker,
  greyMed,
  primary,
  secondary,
  white,
} from '../../styles/colors';
import { component } from '../../styles/mixins';
import {
  border,
  borderRadius,
  fontSize,
  halfSpace,
  quarterSpace,
  space,
} from '../../styles/variables';
import { Icon } from '../Icon';

const colors = {
  ghost: css`
    border-color: ${primary};
    background-color: ${white};
    color: ${primary};

    &:active {
      border-color: transparent;
      box-shadow: 0 0 0 ${rem('1px')} ${primary};
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
    border-color: ${greyDark};
    background-color: ${white};
    color: ${darken(0.3, primary)};

    &:active {
      border-color: transparent;
      box-shadow: 0 0 0 ${rem('1px')} ${greyDark};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${greyMed};
      }
    }
  `,
  primary: css`
    background-color: ${primary};
    color: ${white};

    &:active {
      box-shadow: 0 0 0 ${rem('1px')} ${primary};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${lighten(0.1, primary)};
      }
    }
  `,
  secondary: css`
    background-color: ${secondary};
    color: ${white};

    &:active {
      box-shadow: 0 0 0 ${rem('1px')} ${secondary};
    }

    &:not(:active) {
      &:focus,
      &:hover {
        background-color: ${lighten(0.1, secondary)};
      }
    }
  `,
} as { [color: string]: FlattenSimpleInterpolation };

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
    padding: ${quarterSpace} ${rem('12px')};
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

export const StyledButton = styled.button<{ color: string; size: string }>`
  ${component};

  border: ${border} transparent;
  border-radius: ${borderRadius};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
  cursor: pointer;
  font-size: ${fontSize};
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  ${({ size }) => sizes[size]};

  &:disabled {
    color: ${greyDarker};
    background-color: ${greyMed};
    border-color: transparent;
  }

  &:not(:disabled) {
    ${({ color }) => colors[color]};
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: ${rem('21px')};

  &:not(:last-child) {
    margin-right: ${halfSpace};
  }
`;
