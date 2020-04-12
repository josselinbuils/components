import React from 'react';
import { SVGComponent } from '../../Icon';

export const ScrollIcon: SVGComponent = (forwardedProps) => (
  <svg viewBox="0 0 24 24" {...forwardedProps}>
    <polyline points="9 5 12 2 15 5" />
    <polyline points="15 19 12 22 9 19" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);
