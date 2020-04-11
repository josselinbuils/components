import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { black, greyDark, greyMed, primary, white } from '../styles/colors';
import { remFloat } from '../styles/helpers';
import { component } from '../styles/mixins';
import { border, borderWidth } from '../styles/variables';

const offset = `${Math.max(remFloat(borderWidth), remFloat('2px'))}rem`;

export const Input = styled.span`
  border: ${border} ${greyDark};
  border-radius: 100%;
  box-sizing: border-box;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${white};
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioContainer = styled.div`
  ${component};

  position: relative;
  width: ${rem('24px')};
  height: ${rem('24px')};
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

    &:disabled + ${Input} {
      border-color: ${greyMed};
      background-color: ${greyMed};
    }

    &:not(:disabled) {
      &:checked + ${Input} {
        border-color: ${primary};

        &::before {
          content: ' ';
          position: absolute;
          display: block;
          background-color: ${primary};
          border-radius: 100%;
          width: calc(100% - ${offset} * 2);
          height: calc(100% - ${offset} * 2);
        }
      }

      &:focus + ${Input} {
        border-color: ${primary};
        box-shadow: 0 0 ${rem('4px')} 0 ${transparentize(0.5, black)};
      }

      &:hover + ${Input} {
        border-color: ${primary};
      }
    }
  }
`;