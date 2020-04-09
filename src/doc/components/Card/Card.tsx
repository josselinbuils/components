import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const Card: FC<CardProps> = ({ children, ...forwardedProps }) => (
  <Container {...forwardedProps}>{children}</Container>
);

export type CardProps = HTMLAttributes<HTMLDivElement>;
