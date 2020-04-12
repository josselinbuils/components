import React from 'react';
import { SVGComponent } from '../../Icon';

export const ContrastIcon: SVGComponent = (forwardedProps) => (
  <svg viewBox="0 0 24 24" {...forwardedProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12,2 a1,1 0 0,0 0,20" fill="currentColor" />
  </svg>
);
