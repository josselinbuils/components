import { useEffect } from 'react';
import {
  focusOneOf,
  querySelectorAllFocusable,
  querySelectorFocusable,
  focus,
} from '../helpers/focus';

let traps = [];
let tab;
let shift;

/**
 * Whether an element is a guard or not.
 *
 * @param {HtmlElement} elm
 * @returns {boolean}
 */
export function isGuard(elm) {
  return (elm && elm.dataset && elm.dataset.focusTrapGuard) === true;
}

/**
 * Whether an element isn't a guard or is.
 *
 * @param {HtmlElement} elm
 * @returns {boolean}
 */
export function notIsGuard(elm) {
  return !isGuard(elm);
}

/**
 * Return a DivElement that can handle focus.
 *
 * @returns {DivElement}
 */
export function getFocusGuard() {
  const guardElm = document.createElement('div');

  guardElm.style.width = '1px';
  guardElm.style.height = '0';
  guardElm.style.padding = '0';
  guardElm.style.margin = '0';
  guardElm.style.overflow = 'hidden';
  guardElm.style.position = 'fixed';
  guardElm.style.top = '1px';
  guardElm.style.left = '1px';

  guardElm.dataset.focusTrapGuard = true;
  guardElm.setAttribute('tabindex', 0);

  return guardElm;
}

/**
 * Handler for `focusin` event.
 *
 * @param {FocusEvent} event
 */
export function focusInHandler(event) {
  const { target } = event;
  const activeTrap = traps[traps.length - 1];

  if (!activeTrap) {
    return;
  }

  if (activeTrap.container.contains(target)) {
    traps[traps.length - 1].lastFocusedElm = target;
    return;
  }

  // let's trigger the trap
  const focusableElms = Array.from(
    querySelectorAllFocusable(activeTrap.container)
  ).filter(notIsGuard);
  let focusClaimers = focusableElms.slice(0);

  if (!focusableElms.length) {
    if (!activeTrap.guard) {
      traps[traps.length - 1].guard = getFocusGuard();
    }

    if (activeTrap.guard.parentNode !== activeTrap.container) {
      activeTrap.container.appendChild(activeTrap.guard);
    }

    focusClaimers.push(activeTrap.guard);
  } else if (activeTrap.lastFocusedElm === focusableElms[0] && tab && shift) {
    focusClaimers = focusClaimers.reverse();
  }

  tab = undefined;
  shift = undefined;

  setTimeout(() => focusOneOf(focusClaimers), 0);
}

/**
 * Handler for `keydown` event.
 *
 * @param {KeyboardEvent} event
 */
export function keydownHandler(event) {
  tab = (event.charCode || event.keyCode) === 9;
  shift = event.shiftKey === true;
}

/**
 * Unset a focus trap.
 *
 * @param {HtmlElement} elm
 * @returns {boolean}
 */
export function unsetFocusTrap(elm) {
  const trapToRemove = traps.reverse().find(trap => trap.container === elm);
  if (!trapToRemove) {
    return false;
  }

  traps = traps.filter(trap => trap !== trapToRemove);
  if (!traps.length) {
    document.removeEventListener('focusin', focusInHandler);
    document.removeEventListener('keydown', keydownHandler);
  }

  focus(trapToRemove.initialFocusedElm);
  if (trapToRemove.guard) {
    trapToRemove.guard.remove();
  }

  return true;
}

/**
 * Set a focus trap.
 *
 * @param {HtmlElement} elm
 * @returns {function}
 */
export function setFocusTrap(elm) {
  const firstFocusableElm = querySelectorFocusable(elm);

  traps.push({
    container: elm,
    initialFocusedElm: document.activeElement,
    lastFocusedElm: firstFocusableElm,
    guard: undefined,
  });

  if (traps.length === 1) {
    document.addEventListener('focusin', focusInHandler);
    document.addEventListener('keydown', keydownHandler);
  }

  focusInHandler({ target: elm });
  focus(firstFocusableElm);

  return () => unsetFocusTrap(elm);
}

/**
 * React hook to trap the focus inside an HtmlContainer.
 *
 * @param {boolean} isTrapped
 * @param {ReactRef} ref
 */
export default function useFocusTrap(isTrapped, ref) {
  let removeFocusTrap;
  const removeTrap = () => {
    if (typeof removeFocusTrap === 'function') {
      removeFocusTrap();
      removeFocusTrap = undefined;
    }
  };

  useEffect(() => {
    const { el } = ref.current;

    if (isTrapped && removeFocusTrap === undefined) {
      removeFocusTrap = setFocusTrap(el);
    } else if (!isTrapped) {
      removeTrap();
    }

    return removeTrap;
  }, [isTrapped, ref]);
}
