import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { black, greyDark, greyMed, primary, white } from '../styles/colors';
import { component } from '../styles/mixins';
import { border } from '../styles/variables';

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
        border-color: #12b900;

        &:before {
          content: ' ';
          position: absolute;
          display: block;
          background-color: ${primary};
          border-radius: 100%;
          top: ${rem('2px')};
          left: ${rem('2px')};
          width: calc(100% - ${rem('4px')});
          height: calc(100% - ${rem('4px')});
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
