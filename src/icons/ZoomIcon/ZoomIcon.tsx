import React from 'react';
import { SVGComponent } from '../../Icon';

export const ZoomIcon: SVGComponent = (forwardedProps) => (
  <svg viewBox="0 0 24 24" {...forwardedProps}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
