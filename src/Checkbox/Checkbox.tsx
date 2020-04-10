import React, { FC, InputHTMLAttributes } from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { CheckboxContainer, Input, StyledIcon } from './styles';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  style,
  ...forwardedProps
}) => (
  <CheckboxContainer className={className} style={style}>
    <input type="checkbox" {...forwardedProps} />
    <Input aria-hidden>
      <StyledIcon icon={CheckIcon} />
    </Input>
  </CheckboxContainer>
);

Checkbox.displayName = 'Checkbox';
