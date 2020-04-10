import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexContainer: FC<Props> = ({
  children,
  offsetLeft,
  offsetTop,
  ...forwardedProps
}) => (
  <Container
    style={{ marginLeft: `${offsetLeft}px`, marginTop: `${offsetTop}px` }}
    {...forwardedProps}
  >
    {children}
  </Container>
);

interface Props extends HTMLAttributes<HTMLDivElement> {
  offsetLeft: number;
  offsetTop: number;
}
