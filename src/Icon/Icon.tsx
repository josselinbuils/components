import React, { FC, HTMLAttributes } from 'react';
import { IconContainer } from './styles';
import { SVGComponent } from './SVGComponent';

export const Icon: FC<Props> = ({ icon: IconSVG, ...forwardedProps }) => (
  <IconContainer aria-hidden {...forwardedProps}>
    <IconSVG focusable={false} />
  </IconContainer>
);

export interface Props extends HTMLAttributes<HTMLElement> {
  icon: SVGComponent;
}
