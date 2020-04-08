import { rem, transparentize } from 'polished';
import styled from 'styled-components';
import {
  black,
  greyDark,
  greyDarker,
  greyMed,
  primary,
  white,
} from '../../styles/colors';
import { component } from '../../styles/mixins';
import { border, borderRadius, fontSizeL } from '../../styles/variables';
import { Icon } from '../Icon';

export const Input = styled.span`
  border: ${border} ${greyDark};
  border-radius: ${borderRadius};
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

  svg {
    stroke-width: 4px;
  }
`;

export const CheckboxContainer = styled.div`
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

    &:checked + ${Input} > ${StyledIcon} {
      opacity: 1;
    }

    &:disabled + ${Input} {
      border-color: ${greyMed};
      background-color: ${greyMed};

      ${StyledIcon} {
        color: ${greyDarker};
      }
    }

    &:not(:disabled) {
      &:checked + ${Input} {
        border-color: ${primary};
        background-color: ${primary};
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
