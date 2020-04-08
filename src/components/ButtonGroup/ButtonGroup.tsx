import cn from 'classnames';
import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
} from 'react';

import styles from './ButtonGroup.module.scss';

export const ButtonGroup: FC<Props> = ({
  children,
  className,
  color = 'light',
  orientation = 'horizontal',
  size = 'medium',
  ...forwardedProps
}) => (
  <div
    className={cn(styles.buttonGroup, styles[orientation], className)}
    role="group"
    {...forwardedProps}
  >
    {Children.map(children, (button) =>
      cloneElement(button as ReactElement, {
        className: styles.button,
        color,
        size,
      })
    )}
  </div>
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
