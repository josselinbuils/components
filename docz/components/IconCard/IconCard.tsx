import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon, SVGComponent } from '../../../src/Icon';
import { Card, CardProps } from '../Card';

const StyledCard = styled(Card)`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 25px;
`;

const StyledIcon = styled(Icon)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  margin: 0;
  color: #424242;
  text-align: center;
  font-size: 14px;
`;

export const IconCard: FC<Props> = ({ icon, title, ...forwardedProps }) => (
  <StyledCard {...forwardedProps}>
    <StyledIcon icon={icon} />
    <Title>{title}</Title>
  </StyledCard>
);

interface Props extends CardProps {
  icon: SVGComponent;
  title: string;
}
