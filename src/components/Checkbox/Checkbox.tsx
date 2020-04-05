import cn from 'classnames';
import React, { FC, InputHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import { CheckIcon } from '../icons/CheckIcon';

import styles from './Checkbox.module.scss';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  checked,
  className,
  style,
  ...forwardedProps
}) => (
  <div className={cn(styles.checkbox, className)} style={style}>
    {/* tslint:disable-next-line:react-a11y-input-elements */}
    <input
      aria-checked={checked}
      checked={checked}
      type="checkbox"
      {...forwardedProps}
    />
    <span className={styles.input}>
      <Icon className={styles.checkIcon} icon={CheckIcon} />
    </span>
  </div>
);

Checkbox.displayName = 'Checkbox';
