import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

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

interface Props extends HTMLAttributes<HTMLElement> {
  icon: IconSVGComponent;
}

export type IconSVGComponent = FC;
