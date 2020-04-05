import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import styles from './Card.module.scss';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => <div className={cn(styles.card, className)}>{children}</div>;
