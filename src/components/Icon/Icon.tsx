import React, { FC } from 'react';

import styles from './Icon.module.scss';

export const Icon: FC<Props> = ({ icon: IconSVG }) => (
  <figure aria-hidden className={styles.icon}>
    <IconSVG />
  </figure>
);

interface Props {
  icon: IconSVGComponent;
}

export type IconSVGComponent = FC;
