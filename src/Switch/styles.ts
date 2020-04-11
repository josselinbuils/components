import { rem, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { remFloat } from '../helpers';
import { Theme, themeColors, themeMixins, themeVariables } from '../themes';

const { black, grey200, grey300, primary, white } = themeColors;
const { component } = themeMixins;
const { border, borderWidth } = themeVariables;

const width = rem('44px');
const height = rem('24px');
const offset = (props: { theme: Theme }) =>
  `${Math.max(remFloat('2px') - remFloat(borderWidth(props) as string), 0)}rem`;
const toggleSize = css`calc(${height} - (${offset} + ${borderWidth}) * 2)`;

export const Input = styled.span`
  border: ${border} ${grey200};
  border-radius: calc(${height} / 2);
  background-color: ${grey200};
  box-sizing: border-box;
  content: '';
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  text-align: center;
  display: flex;
  align-items: center;

  &::after {
    content: ' ';
    display: block;
    background-color: ${white};
    border-radius: 100%;
    margin-left: ${offset};
    width: ${toggleSize};
    height: ${toggleSize};
    transition: margin-left 0.15s ease-in-out;
  }
`;

export const SwitchContainer = styled.div`
  ${component};

  position: relative;
  width: ${width};
  height: ${height};
  display: inline-block;

  input {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    margin: 0;
    appearance: none;

    &:checked + ${Input}::after {
      margin-left: calc(100% - ${toggleSize} - ${offset});
    }

    &:disabled + ${Input}::after {
      background-color: ${grey300};
    }

    &:not(:disabled) {
      & + ${Input}::after {
        box-shadow: 0 ${rem('3px')} ${rem('1px')} 0
            ${(props) => transparentize(0.95, black(props))},
          0 ${rem('2px')} ${rem('2px')} 0
            ${(props) => transparentize(0.9, black(props))},
          0 ${rem('3px')} ${rem('3px')} 0
            ${(props) => transparentize(0.95, black(props))};
      }

      &:checked + ${Input} {
        background-color: ${primary};
        border-color: ${primary};
      }

      &:focus + ${Input} {
        box-shadow: 0 0 ${rem('4px')} 0
          ${(props) => transparentize(0.5, black(props))};
      }
    }
  }
`;
