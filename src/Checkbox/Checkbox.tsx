import React, { FC, InputHTMLAttributes } from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { CheckboxContainer, Input, StyledIcon } from './styles';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  checked,
  className,
  style,
  ...forwardedProps
}) => (
  <CheckboxContainer className={className} style={style}>
    {/* tslint:disable-next-line:react-a11y-input-elements */}
    <input
      aria-checked={checked}
      checked={checked}
      type="checkbox"
      {...forwardedProps}
    />
    <Input>
      <StyledIcon icon={CheckIcon} />
    </Input>
  </CheckboxContainer>
);

Checkbox.displayName = 'Checkbox';
