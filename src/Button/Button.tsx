import React, { FC, HTMLAttributes } from 'react';
import { MaterialIcon } from '../Icon';
import { Content, StyledButton, StyledIcon } from './styles';

export const Button: FC<Props> = ({
  children,
  icon: IconSVG,
  size = 'medium',
  variant = 'light',
  ...forwardedProps
}) => (
  <StyledButton size={size} variant={variant} {...forwardedProps}>
    {IconSVG && <StyledIcon icon={IconSVG} />}
    {children && <Content>{children}</Content>}
  </StyledButton>
);

Button.displayName = 'Button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** See Icon component. */
  icon?: MaterialIcon;
  /** @default medium */
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  /** @default light */
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
}
