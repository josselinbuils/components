import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import React, { FC, HTMLAttributes } from 'react';
import { AlertContainer, Message, StyledIcon } from './styles';

const icons = {
  error: ErrorOutlineIcon,
  info: InfoOutlinedIcon,
  success: CheckCircleOutlineIcon,
  warning: ReportProblemOutlinedIcon,
};

export const Alert: FC<Props> = ({ children, level, ...forwardedProps }) => (
  <AlertContainer level={level} role="alert" {...forwardedProps}>
    <StyledIcon icon={icons[level]} />
    <Message>{children}</Message>
  </AlertContainer>
);

Alert.displayName = 'Alert';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  level: 'error' | 'info' | 'success' | 'warning';
}
