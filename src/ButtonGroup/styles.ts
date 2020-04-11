import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { variables } from '../themes';

const { borderWidth } = variables;

const orientations = {
  horizontal: css`
    button:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button + button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -${borderWidth};
    }
  `,
  vertical: css`
    flex-direction: column;

    button:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    button + button {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: -${borderWidth};
    }
  `,
} as { [orientation: string]: FlattenSimpleInterpolation };

export const ButtonContainer = styled.div<{ orientation: string }>`
  position: relative;
  display: inline-flex;

  ${({ orientation }) => orientations[orientation]};

  button:active,
  button:focus {
    position: relative;
    z-index: 1;
  }
`;
