import { useLayoutEffect } from 'react';
import {
  getScrollbarWidth,
  isBodyScrollbarVisible,
} from '../helpers/scrollbar';

const WEBKIT_OVERFLOW = '-webkit-overflow-scrolling';
const locks = [];

/**
 * Unset body scroll lock.
 *
 * @returns {boolean}
 */
export function unsetBodyScrollLock() {
  const lockToRemove = locks.pop();
  if (!lockToRemove) {
    return false;
  }

  const { initialStyle } = lockToRemove;
  Object.keys(initialStyle).forEach(key => {
    if (initialStyle[key]) {
      document.body.style[key] = initialStyle[key];
    } else {
      document.body.style.removeProperty(key);
    }
  });

  return true;
}

/**
 * Set body scroll lock.
 *
 * @returns {function}
 */
export function setBodyScrollLock() {
  const bodyStyle = document.body.style;
  const initialStyle = {
    [WEBKIT_OVERFLOW]: bodyStyle[WEBKIT_OVERFLOW] || '',
    overflow: bodyStyle.overflow || '',
  };

  if (isBodyScrollbarVisible('x')) {
    initialStyle.paddingRight = bodyStyle.paddingRight || '';

    const bodyComputedStyle = window.getComputedStyle(document.body);
    const bodyPaddingRight =
      parseInt(document.body.style.paddingRight, 10) || 0;
    const computedBodyPaddingRight =
      parseInt(bodyComputedStyle.paddingRight, 10) || 0;

    document.body.style.paddingRight = `${getScrollbarWidth() +
      computedBodyPaddingRight -
      bodyPaddingRight}px`;
  }

  // Mobile safari
  document.body.style[WEBKIT_OVERFLOW] = 'touch';
  document.body.style.overflow = 'hidden';

  locks.push({ initialStyle });

  return unsetBodyScrollLock;
}

/**
 * Prevent scrolling the body while scrolling in a component.
 *
 * @param {boolean} isLocked
 */
export default function useLockBodyScroll(isLocked) {
  let removeBodyScrollLock;
  const removeLock = () => {
    if (typeof removeBodyScrollLock === 'function') {
      removeBodyScrollLock();
      removeBodyScrollLock = undefined;
    }
  };

  useLayoutEffect(() => {
    if (isLocked && removeBodyScrollLock === undefined) {
      removeBodyScrollLock = setBodyScrollLock();
    } else if (!isLocked) {
      removeLock();
    }

    return removeLock;
  }, [isLocked]);
}
