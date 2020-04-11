import styled from 'styled-components';

export const IconContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;

  svg {
    font-size: inherit;
    width: 1em;
    height: 1em;
    user-select: none;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
