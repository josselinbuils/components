import React, { FC, HTMLAttributes } from 'react';
import { Icon } from '../Icon';
import { AlertCircleIcon } from '../icons/AlertCircleIcon';
import { AlertTriangleIcon } from '../icons/AlertTriangleIcon';
import { CheckCircleIcon } from '../icons/CheckCircleIcon';
import { InfoIcon } from '../icons/InfoIcon';
import { AlertContainer, IconContainer, Message } from './styles';

const icons = {
  error: AlertCircleIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: AlertTriangleIcon,
};

export const Alert: FC<Props> = ({ children, level, ...forwardedProps }) => (
  <AlertContainer level={level} {...forwardedProps}>
    <IconContainer>
      <Icon icon={icons[level] || icons.error} />
    </IconContainer>
    <Message role="alert">{children}</Message>
  </AlertContainer>
);

Alert.displayName = 'Alert';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  level: 'error' | 'info' | 'success' | 'warning';
}
