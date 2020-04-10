import React, { FC, HTMLAttributes } from 'react';
import { IconSVGComponent } from './IconSVGComponent';
import { IconContainer } from './styles';

export const Icon: FC<Props> = ({ icon: IconSVG, ...forwardedProps }) => (
  <IconContainer aria-hidden {...forwardedProps}>
    <IconSVG />
  </IconContainer>
);

export interface Props extends HTMLAttributes<HTMLElement> {
  icon: IconSVGComponent;
}
