import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Alert.module.scss';

const Alert: FC<Props> = ({
  children,
  className,
  level,
  ...forwardedProps
}) => (
  <div
    {...forwardedProps}
    className={cn(styles.alert, styles[level], className)}
  >
    <div className={styles.icon}>
      <FontAwesomeIcon icon={getIconComponent(level)} />
    </div>
    <div className={styles.message}>{children}</div>
  </div>
);

Alert.displayName = 'Alert';

interface Props {
  className?: string;
  /** error, info, success, warning */
  level: AlertLevel;
}

Alert.defaultProps = {};

export default Alert;

export enum AlertLevel {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

function getIconComponent(level: AlertLevel): IconDefinition {
  switch (level) {
    case AlertLevel.Error:
      return faExclamationCircle;

    case AlertLevel.Info:
      return faInfoCircle;

    case AlertLevel.Success:
      return faCheckCircle;

    case AlertLevel.Warning:
      return faExclamationTriangle;

    default:
      throw new Error('Unknown alert level');
  }
}
