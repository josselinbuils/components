/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isScrollbarVisible } from './isScrollbarVisible';

/**
 * Whether body's scrollbar is visible or not.
 * Test both axis if none sets, test only `x` or `y` axis otherwise.
 *
 * @param {string} [axis]
 * @returns {boolean}
 */
export function isBodyScrollbarVisible(axis) {
  return isScrollbarVisible(document.documentElement || document.body, axis);
}
