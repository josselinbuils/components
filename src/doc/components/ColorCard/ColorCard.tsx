import React, { FC } from 'react';
import { Card } from '../Card';

import styles from './ColorCard.module.scss';

export const ColorCard: FC<Props> = ({ color, title }) => (
  <Card className={styles.colorCard}>
    <div className={styles.preview} style={{ background: color }} />
    <p>{title}</p>
    <p>{color}</p>
  </Card>
);

interface Props {
  color: string;
  title: string;
}
