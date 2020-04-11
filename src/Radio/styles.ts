import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { colors, mixins, variables } from '../themes';

const { black, grey87, grey93, primary, white } = colors;
const { component } = mixins;
const { border, borderWidth } = variables;

export const Input = styled.span`
  border: ${border} ${grey87};
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
      border-color: ${grey93};
      background-color: ${grey93};
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
          width: calc(
            100% - ${(props) => `max(${borderWidth(props)}, ${rem('2px')})`} * 2
          );
          height: calc(
            100% - ${(props) => `max(${borderWidth(props)}, ${rem('2px')})`} * 2
          );
        }
      }

      &:focus + ${Input} {
        border-color: ${primary};
        box-shadow: 0 0 ${rem('4px')} 0
          ${(props) => transparentize(0.5, black(props))};
      }

      &:hover + ${Input} {
        border-color: ${primary};
      }
    }
  }
`;
