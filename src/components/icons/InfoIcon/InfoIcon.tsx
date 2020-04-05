import React from 'react';
import { IconSVGComponent } from '../../Icon';

export const InfoIcon: IconSVGComponent = (forwardedProps) => (
  <svg focusable="false" viewBox="0 0 24 24" {...forwardedProps}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
