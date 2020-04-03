import React, { FC } from 'react';
import { Transition, animated, config } from 'react-spring';
import cn from 'classnames';

import Hint from '../Hint';
import Portal from '../Portal';
import styles from './Alert.module.scss';

const translate = (value: Position) => {
  switch (value) {
    case 'topRight':
    case 'bottomRight':
      return 320;
    case 'topLeft':
    case 'bottomLeft':
      return -320;
    default:
      return 320;
  }
};

const timer = (toggle: () => void, timeout: number) =>
  setTimeout(() => toggle(), timeout);

const Alert: FC<Props> = ({
  className = '',
  dataQa = '',
  on,
  position = 'topRight',
  textAlert,
  theme = 'default',
  timeout = 0,
  toggle
}) => {
  const classNames = cn(
    'toolkit',
    styles.alert,
    {
      [styles.right]: position === 'topRight' || position === 'bottomRight',
      [styles.left]: position === 'topLeft' || position === 'bottomLeft',
      [styles.top]: position === 'topRight' || position === 'topLeft',
      [styles.bottom]: position === 'bottomRight' || position === 'bottomLeft'
    },
    className
  );

  const setTranslate = translate(position);

  if (timeout !== undefined && on) {
    timer(toggle, timeout);
  }

  return (
    <Portal>
      <Transition
        native
        items={on}
        config={config.stiff}
        from={{ transform: `translateX(${setTranslate}px)` }}
        enter={{ transform: 'translateX(0)' }}
        leave={{ transform: `translateX(${setTranslate}px)` }}
      >
        {display =>
          display &&
          (style => (
            <animated.div
              className={classNames}
              role="contentinfo"
              style={style}
              onClick={toggle}
              // timer={timeout}
              // position={position}
            >
              <Hint textAlert={textAlert} theme={theme} dataQa={dataQa} />
            </animated.div>
          ))
        }
      </Transition>
    </Portal>
  );
};

Alert.displayName = 'Alert';

export default Alert;

type Position = 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';

type Theme = 'default' | 'light' | 'danger' | 'menthe';

interface Props {
  className?: string;
  dataQa?: string;
  on: boolean;
  position?: Position;
  textAlert: string | (() => void);
  theme?: Theme;
  timeout?: number;
  toggle(): void;
}
