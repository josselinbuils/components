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
  color = 'light',
  orientation = 'horizontal',
  size = 'medium',
  ...forwardedProps
}) => (
  <ButtonContainer orientation={orientation} role="group" {...forwardedProps}>
    {Children.map(children, (button) =>
      cloneElement(button as ReactElement, { color, size })
    )}
  </ButtonContainer>
);

ButtonGroup.displayName = 'ButtonGroup';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** @default light */
  color?: 'primary' | 'secondary' | 'ghost' | 'light';
  /** @default horizontal */
  orientation?: 'horizontal' | 'vertical';
  /** @default medium */
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
}
