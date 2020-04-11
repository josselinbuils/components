import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, CardProps } from '../Card';

const StyledCard = styled(Card)`
  height: 225px;
  margin-top: 25px;
  margin-left: 45px;

  p {
    margin: 0;
    color: #424242;
  }
`;

const Preview = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 7px;
`;

export const ColorCard: FC<Props> = ({ color, title, ...forwardedProps }) => (
  <StyledCard {...forwardedProps}>
    <Preview style={{ background: color }} />
    <p>{title}</p>
    <p>{color}</p>
  </StyledCard>
);

interface Props extends CardProps {
  color: string;
  title: string;
}
