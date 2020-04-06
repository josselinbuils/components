/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Return the actual scrollbar width.
 *
 * @returns {number}
 */
export function getScrollbarWidth() {
  const styleMap = new Map([
    ['width', '100px'],
    ['height', '100px'],
    ['overflow', 'scroll'],
    ['msOverflowStyle', 'scrollbar'],
    ['top', '-9999px'],
    ['position', 'absolute'],
  ]);

  const container = document.createElement('div');
  styleMap.forEach((styleValue, styleName) => {
    container.style[styleName] = styleValue;
  });
  document.body.appendChild(container);

  const scrollbarWidth = container.offsetWidth - container.clientWidth;

  container.remove();

  return scrollbarWidth;
}
