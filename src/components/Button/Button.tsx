import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { Icon, IconSVGComponent } from '../Icon';

import styles from './Button.module.scss';

export const Button: FC<Props> = ({
  children,
  className,
  color = 'light',
  icon: IconSVG,
  size = 'medium',
  ...forwardedProps
}) => (
  <button
    className={cn(styles.button, styles[color], styles[size], className)}
    {...forwardedProps}
  >
    {IconSVG && <Icon className={styles.icon} icon={IconSVG} />}
    {children && <span className={styles.content}>{children}</span>}
  </button>
);

Button.displayName = 'Button';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** @default light */
  color?: 'primary' | 'secondary' | 'ghost' | 'light';
  /** See Icon component */
  icon?: IconSVGComponent;
  /** @default medium */
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
}
