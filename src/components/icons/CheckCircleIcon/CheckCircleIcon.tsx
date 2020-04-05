import React, { FC, HTMLAttributes } from 'react';

export const CheckCircleIcon: FC<HTMLAttributes<SVGElement>> = (
  forwardedProps
) => (
  <svg focusable="false" viewBox="0 0 24 24" {...forwardedProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
