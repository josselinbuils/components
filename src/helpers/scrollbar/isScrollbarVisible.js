/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Whether a scrollbar is visible or not in a DomElement.
 * Test both axis if none sets, test only `x` or `y` axis otherwise.
 *
 * @param {DomElement} elm
 * @param {string} [axis]
 * @returns {boolean}
 */
export function isScrollbarVisible(elm, axis) {
  const computedStyle = window.getComputedStyle(elm);
  const isVisible = (scrollValue, clientValue, computedOverflowStyle) => {
    const contentOverflows = scrollValue > clientValue;
    const overflowShown = /^(visible|auto)$/.test(computedOverflowStyle);
    const alwaysShowScroll = computedOverflowStyle === 'scroll';

    return (contentOverflows && overflowShown) || alwaysShowScroll;
  };

  if (axis === 'x') {
    return isVisible(elm.scrollWidth, elm.clientWidth, computedStyle.overflowX);
  }

  if (axis === 'y') {
    return isVisible(
      elm.scrollHeight,
      elm.clientHeight,
      computedStyle.overflowY
    );
  }

  return (
    isVisible(elm.scrollWidth, elm.clientWidth, computedStyle.overflowX) ||
    isVisible(elm.scrollHeight, elm.clientHeight, computedStyle.overflowY)
  );
}
