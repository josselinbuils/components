import React, { FC } from 'react';

import styles from './FlexContainer.module.scss';

export const FlexContainer: FC<Props> = ({
  children,
  offsetLeft,
  offsetTop,
}) => (
  <div
    className={styles.flexContainer}
    style={{ marginLeft: `${offsetLeft}px`, marginTop: `${offsetTop}px` }}
  >
    {children}
  </div>
);

interface Props {
  offsetLeft: number;
  offsetTop: number;
}
