import { rem } from 'polished';

/**
 * Provides px/rem input value as rem number.
 *
 * @param value Value in px or rem.
 */
export function remFloat(value: string): number {
  return parseFloat(value.endsWith('px') ? rem(value) : value);
}
