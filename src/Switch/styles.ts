import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { black, greyDark, greyMed, primary, white } from '../styles/colors';
import { remFloat } from '../styles/helpers';
import { component } from '../styles/mixins';
import { border, borderWidth } from '../styles/variables';

const width = rem('44px');
const height = rem('24px');
const offset = `${Math.max(remFloat('2px') - remFloat(borderWidth), 0)}rem`;
const toggleSize = `calc(${height} - (${offset} + ${borderWidth}) * 2)`;

export const Input = styled.span`
  border: ${border} ${greyMed};
  border-radius: ${remFloat(height) / 2}rem;
  background-color: ${greyMed};
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

  &:after {
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
      background-color: ${greyDark};
    }

    &:not(:disabled) {
      & + ${Input}::after {
        box-shadow: 0 ${rem('3px')} ${rem('1px')} 0
            ${transparentize(0.95, black)},
          0 ${rem('2px')} ${rem('2px')} 0 ${transparentize(0.9, black)},
          0 ${rem('3px')} ${rem('3px')} 0 ${transparentize(0.95, black)};
      }

      &:checked + ${Input} {
        background-color: ${primary};
        border-color: ${primary};
      }

      &:focus + ${Input} {
        box-shadow: 0 0 ${rem('4px')} 0 ${transparentize(0.5, black)};
      }
    }
  }
`;
