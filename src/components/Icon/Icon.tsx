import cn from 'classnames';
import React, { FC } from 'react';

import styles from './Icon.module.scss';

export const Icon: FC<Props> = ({
  className,
  icon: IconSVG,
  ...forwardedProps
}) => (
  <figure
    aria-hidden
    className={cn(styles.icon, className)}
    {...forwardedProps}
  >
    <IconSVG />
  </figure>
);

interface Props {
  className?: string;
  icon: IconSVGComponent;
}

export type IconSVGComponent = FC;
