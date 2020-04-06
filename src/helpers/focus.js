const FOCUSABLE_SELECTOR =
  'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]';

/**
 * Return all focusable elements from a container.
 *
 * @param {HTMLElement} elm
 * @returns {HTMLCollection}
 */
export function querySelectorAllFocusable(elm) {
  return elm.querySelectorAll(FOCUSABLE_SELECTOR);
}

/**
 * Returns the first focusable Element from a container.
 *
 * @param {HTMLElement} elm
 * @returns {(HTMLElement | null)}
 */
export function querySelectorFocusable(elm) {
  return elm.querySelector(FOCUSABLE_SELECTOR);
}

/**
 * Whether an element is focused or not.
 *
 * @param {HTMLElement} elm
 * @returns {boolean}
 */
export function isFocused(elm) {
  return (document && document.activeElement) === elm;
}

/**
 * Whether the body is focused or not.
 *
 * @returns {boolean}
 */
export function isBodyFocused() {
  return isFocused(document.body);
}

/**
 * Try to focus an element.
 *
 * @param {HTMLElement} elm
 * @returns {boolean}
 */
export function focus(elm) {
  try {
    elm.focus();
    if (elm.contentWindow) {
      elm.contentWindow.focus();
    }
  } catch (e) {
    return false;
  }

  return true;
}

/**
 * Try to focus one of an elements array.
 *
 * @param {(HTMLCollection | array)} elms
 * @returns {HTMLElement}
 */
export function focusOneOf(elms) {
  return Array.from(elms).find(focus);
}
