import React, { FC, InputHTMLAttributes } from 'react';
import { Input, SwitchContainer } from './styles';

export const Switch: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  style,
  ...forwardedProps
}) => (
  <SwitchContainer className={className} style={style}>
    <input role="switch" type="checkbox" {...forwardedProps} />
    <Input aria-hidden />
  </SwitchContainer>
);

Switch.displayName = 'Radio';
