import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { colors, mixins, ThemeColors, variables } from '../themes';

const { error } = colors;
const { component } = mixins;
const {
  border,
  borderRadius,
  fontSizeM,
  fontSizeXXL,
  halfSpace,
  lineHeight,
  space,
} = variables;

const alert = (color: string) => css`
  color: ${darken(0.2, color)};
  border-color: ${color};
  background-color: ${lighten(0.4, color)};

  svg {
    color: ${color};
  }
`;

export const AlertContainer = styled.div<{ level: string }>`
  ${component};

  font-size: ${fontSizeM};
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: ${halfSpace} ${space};
  border: ${border};
  border-radius: ${borderRadius};
  height: calc(${fontSizeM} * ${lineHeight} + ${halfSpace} * 2);

  ${({ level, ...props }) =>
    alert(colors[level as keyof ThemeColors](props) || error(props))};
`;

export const Message = styled.div`
  padding: ${halfSpace} 0;
`;

export const StyledIcon = styled(Icon)`
  font-size: ${fontSizeXXL};
  flex-grow: 0;
  margin-right: ${space};
`;
