import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Card.module.scss';

export const Card: FC<Props> = ({ children, className }) => (
  <div className={cn(styles.card, className)}>{children}</div>
);

interface Props {
  className?: string;
}
