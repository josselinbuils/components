import cn from 'classnames';
import React, { FC } from 'react';
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

interface Props {
  className?: string;
  color: 'primary' | 'secondary' | 'ghost' | 'light';
  icon?: IconSVGComponent;
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
}
