/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated, interpolate } from 'react-spring';
import cn from 'classnames';

import useFocusTrap from '../../hooks/useFocusTrap';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

import Button from '../Button';
import Icon from '../Icon';
import IconClose from '../Icon/Icons/IconClose';
import Portal from '../Portal';
import styles from './Modal.module.scss';

const HeaderCloseButton = ({ toggle, label, dataQa }) => (
  <button
    className={styles.close}
    type="button"
    onClick={toggle}
    aria-label={label}
    data-qa={dataQa ? `${dataQa}-close` : null}
  >
    <Icon component={IconClose} />
  </button>
);

HeaderCloseButton.propTypes = {
  label: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  dataQa: PropTypes.string,
};

HeaderCloseButton.defaultProps = {
  dataQa: '',
};

const Modal = ({
  on,
  toggle,
  children,
  className,
  header,
  buttonTitle,
  hasIframe,
  dataQa,
  Footer,
}) => {
  const classNames = cn(
    'toolkit',
    styles.content,
    {
      [styles.noFooter]: Footer === null,
      [styles.iframe]: hasIframe,
    },
    className
  );

  const headerStyle = cn(styles.header, {
    [styles.hasContent]: !!header,
  });

  const portalRef = useRef(null);
  useLockBodyScroll(on);
  useFocusTrap(on, portalRef);

  const renderFooter = () =>
    Footer === undefined ? (
      // default footer
      <footer className={styles.footer}>
        <Button title={buttonTitle} onClick={toggle} theme="secondary" />
      </footer>
    ) : (
      Footer
    );

  const renderHeader = () => {
    if (header === undefined) {
      // default header
      return (
        <header className={headerStyle}>
          <HeaderCloseButton
            toggle={toggle}
            dataQa={dataQa}
            label={buttonTitle}
          />
        </header>
      );
    }
    if (typeof header === 'string') {
      return (
        <header className={headerStyle}>
          <h4>{header}</h4>
          <HeaderCloseButton
            toggle={toggle}
            dataQa={dataQa}
            label={buttonTitle}
          />
        </header>
      );
    }

    return header;
  };

  return (
    <Portal ref={portalRef}>
      <Transition
        native
        config={{ tension: 350, friction: 23, mass: 0.6 }}
        items={on}
        from={{ o: 0, s: 0.75, y: '33vh' }}
        enter={{ o: 1, s: 1, y: '0' }}
        leave={{ o: 0, s: 0.75, y: '33vh' }}
      >
        {display => {
          if (display === false) return () => null;
          // eslint-disable-next-line react/prop-types,react/display-name
          return ({ o, s, y }) => {
            return (
              <animated.aside
                onClick={toggle}
                className={styles.modal}
                role="dialog"
                style={{
                  // eslint-disable-next-line react/prop-types
                  opacity: o.interpolate(opacity => opacity),
                }}
              >
                <animated.div
                  className={classNames}
                  onClick={e => e.stopPropagation()}
                  role="contentinfo"
                  data-qa={dataQa}
                  style={{
                    transform: interpolate(
                      [s, y],
                      (scale, translateY) =>
                        `scale(${scale}) translate3d(0, ${translateY}, 0)`
                    ),
                  }}
                >
                  <div className={styles.ieCompatibilityContainer}>
                    {renderHeader()}
                    <div className={styles.body}>{children}</div>
                    {renderFooter()}
                  </div>
                </animated.div>
              </animated.aside>
            );
          };
        }}
      </Transition>
    </Portal>
  );
};

Modal.dislayName = 'Modal';

Modal.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  buttonTitle: PropTypes.string,
  Footer: PropTypes.node,
  hasIframe: PropTypes.bool,
  dataQa: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
  buttonTitle: 'close',
  hasIframe: false,
  dataQa: '',
  header: undefined,
  Footer: undefined,
};

export default Modal;
