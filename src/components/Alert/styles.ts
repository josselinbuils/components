import { darken, lighten, rem } from 'polished';
import styled from 'styled-components';
import { error, info, success, warning } from '../../styles/colors';
import { component } from '../../styles/mixins';
import {
  border,
  borderRadius,
  fontSizeM,
  halfSpace,
  space,
} from '../../styles/variables';

const colors = { error, info, success, warning } as { [color: string]: string };

const alert = (color: string) => `
  color: ${darken(0.3, color)};
  border-color: ${darken(0.1, color)};
  background-color: ${lighten(0.3, color)};

  svg {
    color: ${color};
  }
`;

export const AlertContainer = styled.div<{ level: string }>`
  ${component}
  ${({ level }) => alert(colors[level] || colors.error)}

  font-size: ${fontSizeM};
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: ${halfSpace} ${space};
  border: ${border};
  border-radius: ${borderRadius};
`;

export const IconContainer = styled.div`
  font-size: ${rem('21px')};
  flex-grow: 0;
  margin-right: ${space};
  padding: ${rem('3px')} 0;
`;

export const Message = styled.div`
  padding: ${halfSpace} 0;
`;
