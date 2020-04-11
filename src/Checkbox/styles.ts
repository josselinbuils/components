import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { themeColors, themeMixins, themeVariables } from '../themes';

const { black, grey74, grey87, grey93, primary, white } = themeColors;
const { component } = themeMixins;
const { border, borderRadius, fontSizeL } = themeVariables;

const size = rem('24px');

export const Input = styled.span`
  border: ${border} ${grey87};
  border-radius: ${borderRadius};
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

export const StyledIcon = styled(Icon)`
  color: ${white};
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  font-size: ${fontSizeL};
  line-height: 1em;

  svg {
    stroke-width: 4px;
  }
`;

export const CheckboxContainer = styled.div`
  ${component};

  position: relative;
  width: ${size};
  height: ${size};
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

    &:checked + ${Input} > ${StyledIcon} {
      opacity: 1;
    }

    &:disabled + ${Input} {
      border-color: ${grey93};
      background-color: ${grey93};

      ${StyledIcon} {
        color: ${grey74};
      }
    }

    &:not(:disabled) {
      &:checked + ${Input} {
        border-color: ${primary};
        background-color: ${primary};
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
