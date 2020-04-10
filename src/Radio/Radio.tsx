import React, { FC, InputHTMLAttributes } from 'react';
import { Input, RadioContainer } from './styles';

export const Radio: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  style,
  ...forwardedProps
}) => (
  <RadioContainer className={className} style={style}>
    <input type="radio" {...forwardedProps} />
    <Input aria-hidden />
  </RadioContainer>
);

Radio.displayName = 'Radio';
