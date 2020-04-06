import { unsetBodyScrollLock, setBodyScrollLock } from '../useLockBodyScroll';
import {
  isBodyScrollbarVisible,
  getScrollbarWidth,
} from '../../helpers/scrollbar';

jest.mock('../../helpers/scrollbar');
afterEach(() => {
  isBodyScrollbarVisible.mockReset();
  getScrollbarWidth.mockReset();
});

function getBodyStyle() {
  return document.body.getAttribute('style');
}

describe('set/unset BodyScrollLock', () => {
  it('should have no effect to call unsetBodyScrollLock when no lock is activated', () => {
    const bodyStyleValue = getBodyStyle();
    expect(unsetBodyScrollLock()).toBeFalsy();
    expect(getBodyStyle()).toBe(bodyStyleValue);
  });

  it('should behave correctly when there is no vertical scroll on body', () => {
    isBodyScrollbarVisible.mockReturnValue(false);

    const bodyStyleValue = getBodyStyle();
    const unsetLock = setBodyScrollLock();

    expect(unsetLock).toBe(unsetBodyScrollLock);
    expect(bodyStyleValue).not.toBe(getBodyStyle());
    expect(document.body.style['-webkit-overflow-scrolling']).toBe('touch');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('');

    const removePropertySpy = jest.spyOn(document.body.style, 'removeProperty');
    const unsetResult = unsetLock();

    expect(unsetResult).toBeTruthy();
    expect(removePropertySpy).toHaveBeenCalledWith(
      '-webkit-overflow-scrolling'
    );
    expect(removePropertySpy).toHaveBeenCalledWith('overflow');
    expect(document.body.style.paddingRight).toBe('');

    // Cleaning is necessary as removeProperty seems not to work with jsdom
    delete document.body.style['-webkit-overflow-scrolling'];
    delete document.body.style.overflow;
    delete document.body.style.paddingRight;
    removePropertySpy.mockRestore();
  });

  it('should behave correctly when there is a vertical scroll on body', () => {
    isBodyScrollbarVisible.mockReturnValue(true);
    getScrollbarWidth.mockReturnValue(12);

    const bodyStyleValue = getBodyStyle();
    const unsetLock = setBodyScrollLock();

    expect(unsetLock).toBe(unsetBodyScrollLock);
    expect(bodyStyleValue).not.toBe(getBodyStyle());
    expect(document.body.style['-webkit-overflow-scrolling']).toBe('touch');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('12px');

    const removePropertySpy = jest.spyOn(document.body.style, 'removeProperty');
    const unsetResult = unsetLock();

    expect(unsetResult).toBeTruthy();
    expect(removePropertySpy).toHaveBeenCalledWith(
      '-webkit-overflow-scrolling'
    );
    expect(removePropertySpy).toHaveBeenCalledWith('overflow');
    expect(removePropertySpy).toHaveBeenCalledWith('paddingRight');

    // Cleaning is necessary as removeProperty seems not to work with jsdom
    delete document.body.style['-webkit-overflow-scrolling'];
    delete document.body.style.overflow;
    delete document.body.style.paddingRight;
    removePropertySpy.mockRestore();
  });
});
