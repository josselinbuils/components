import React, { FC, HTMLAttributes } from 'react';
import { MaterialIcon } from './MaterialIcon';
import { IconContainer } from './styles';

export const Icon: FC<Props> = ({ icon: IconSVG, ...forwardedProps }) => (
  <IconContainer aria-hidden role="img" {...forwardedProps}>
    <IconSVG />
  </IconContainer>
);

export interface Props extends HTMLAttributes<HTMLElement> {
  /**
   * Icon coming from
   * [@material-ui/icons](https://material-ui.com/components/material-icons).
   */
  icon: MaterialIcon;
}
