import React, { FC, HTMLAttributes } from 'react';
import { IconSVGComponent } from '../Icon';
import { Content, StyledButton, StyledIcon } from './styles';

export const Button: FC<Props> = ({
  children,
  color = 'light',
  icon: IconSVG,
  size = 'medium',
  ...forwardedProps
}) => (
  <StyledButton color={color} size={size} {...forwardedProps}>
    {IconSVG && <StyledIcon icon={IconSVG} />}
    {children && <Content>{children}</Content>}
  </StyledButton>
);

Button.displayName = 'Button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** @default light */
  color?: 'primary' | 'secondary' | 'ghost' | 'light';
  /** See Icon component */
  icon?: IconSVGComponent;
  /** @default medium */
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
}
