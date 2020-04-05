import React, { FC } from 'react';
import { Icon, IconSVGComponent } from '../../../components/Icon';
import { Card } from '../Card';

import styles from './IconCard.module.scss';

export const IconCard: FC<Props> = ({ icon, title }) => (
  <Card className={styles.iconCard}>
    <Icon className={styles.icon} icon={icon} />
    <p className={styles.title}>{title}</p>
  </Card>
);

interface Props {
  icon: IconSVGComponent;
  title: string;
}
