import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { black, greyDarker, greyMed, primary, white } from '../styles/colors';
import { component } from '../styles/mixins';
import { border } from '../styles/variables';

export const Input = styled.span`
  border: ${border} ${greyMed};
  border-radius: ${rem('12px')};
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

  &:after {
    content: ' ';
    position: absolute;
    display: block;
    background-color: ${white};
    border-radius: 100%;
    top: ${rem('1px')};
    right: ${rem('21px')};
    width: ${rem('20px')};
    height: ${rem('20px')};
    transition: right 0.15s ease-in-out;
    box-shadow: 0 ${rem('3px')} ${rem('1px')} 0 ${transparentize(0.95, black)},
      0 ${rem('2px')} ${rem('2px')} 0 ${transparentize(0.9, black)},
      0 ${rem('3px')} ${rem('3px')} 0 ${transparentize(0.95, black)};
  }
`;

export const SwitchContainer = styled.div`
  ${component};

  position: relative;
  width: ${rem('44px')};
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

    &:checked + ${Input}::after {
      right: ${rem('1px')};
    }

    &:disabled + ${Input}::after {
      background-color: ${greyDarker};
    }

    &:not(:disabled) {
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
