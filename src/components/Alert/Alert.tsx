import cn from 'classnames';
import React, { FC } from 'react';
import { Icon, IconSVGComponent } from '../Icon';
import { AlertCircleIcon } from '../icons/AlertCircleIcon';
import { AlertTriangleIcon } from '../icons/AlertTriangleIcon';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';
import { InfoIcon } from '../icons/InfoIcon';

import styles from './Alert.module.scss';

export const Alert: FC<Props> = ({
  children,
  className,
  level,
  ...forwardedProps
}) => (
  <div
    className={cn(styles.alert, styles[level], className)}
    {...forwardedProps}
  >
    <div className={styles.icon}>
      <Icon icon={getIconComponent(level)} />
    </div>
    <div role="alert" className={styles.message}>
      {children}
    </div>
  </div>
);

Alert.displayName = 'Alert';

interface Props {
  className?: string;
  level: 'error' | 'info' | 'success' | 'warning';
}

function getIconComponent(level: string): IconSVGComponent {
  switch (level) {
    case 'info':
      return InfoIcon;

    case 'success':
      return CheckCircleIcon;

    case 'warning':
      return AlertTriangleIcon;

    default:
      return AlertCircleIcon;
  }
}
