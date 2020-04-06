import { isBodyScrollbarVisible } from '../isBodyScrollbarVisible';
import { isScrollbarVisible } from '../isScrollbarVisible';

jest.mock('../isScrollbarVisible');
afterEach(() => {
  isScrollbarVisible.mockReset();
});

describe('isBodyScrollbarVisible', () => {
  it('should return isScrollbarVisible result with body element as props', () => {
    isScrollbarVisible.mockReturnValue('foo');
    const expected = isBodyScrollbarVisible();
    expect(isScrollbarVisible).toHaveBeenCalledTimes(1);
    expect(isScrollbarVisible).toHaveBeenCalledWith(
      document.documentElement || document.body,
      undefined
    );
    expect(expected).toBe('foo');
  });

  it('should return isScrollbarVisible result with body element and axis as props', () => {
    isScrollbarVisible.mockReturnValue('bar');
    const expected = isBodyScrollbarVisible('y');
    expect(isScrollbarVisible).toHaveBeenCalledTimes(1);
    expect(isScrollbarVisible).toHaveBeenCalledWith(
      document.documentElement || document.body,
      'y'
    );
    expect(expected).toBe('bar');
  });
});
