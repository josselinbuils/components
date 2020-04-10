import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
} from 'react';
import { ButtonContainer } from './styles';

export const ButtonGroup: FC<Props> = ({
  children,
  className,
  orientation = 'horizontal',
  size = 'medium',
  variant = 'light',
  ...forwardedProps
}) => (
  <ButtonContainer orientation={orientation} role="group" {...forwardedProps}>
    {Children.map(children, (button) =>
      cloneElement(button as ReactElement, { size, variant })
    )}
  </ButtonContainer>
);

ButtonGroup.displayName = 'ButtonGroup';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** @default horizontal */
  orientation?: 'horizontal' | 'vertical';
  /** @default medium */
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  /** @default light */
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
}
