import { isScrollbarVisible } from '../isScrollbarVisible';

const originalGetComputedStyle = window.getComputedStyle;
function replaceGetComputedStyle(overflowX, overflowY) {
  window.getComputedStyle = () => ({ overflowX, overflowY });
}
function restoreGetComputedStyle() {
  window.getComputedStyle = originalGetComputedStyle;
}

describe('isScrollbarVisible', () => {
  it('should return false by default', () => {
    replaceGetComputedStyle('', '');
    expect(isScrollbarVisible({})).toBeFalsy();
    restoreGetComputedStyle();
  });

  it('should return true when overflowX is set to `scroll`', () => {
    replaceGetComputedStyle('scroll', 'scroll');
    expect(isScrollbarVisible({})).toBeTruthy();
    restoreGetComputedStyle();
  });

  describe('scroll width is bigger than the client width', () => {
    const fakeHTMLElement = {
      scrollWidth: 1000,
      clientWidth: 500,
    };

    it('should return true when overflowX is set to `auto`', () => {
      replaceGetComputedStyle('auto', '');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeTruthy();
      restoreGetComputedStyle();
    });

    it('should return true when overflowX is set to `visible`', () => {
      replaceGetComputedStyle('visible', '');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeTruthy();
      restoreGetComputedStyle();
    });
  });

  describe('scroll width is smaller than the client width', () => {
    const fakeHTMLElement = {
      scrollWidth: 500,
      clientWidth: 1000,
    };

    it('should return true when overflowX is set to `auto`', () => {
      replaceGetComputedStyle('auto', '');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeFalsy();
      restoreGetComputedStyle();
    });

    it('should return true when overflowX is set to `visible`', () => {
      replaceGetComputedStyle('visible', '');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeFalsy();
      restoreGetComputedStyle();
    });
  });

  describe('scroll height is bigger than the client height', () => {
    const fakeHTMLElement = {
      scrollHeight: 1000,
      clientHeight: 500,
    };

    it('should return true when overflowY is set to `auto`', () => {
      replaceGetComputedStyle('', 'auto');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeTruthy();
      restoreGetComputedStyle();
    });

    it('should return true when overflowY is set to `visible`', () => {
      replaceGetComputedStyle('', 'visible');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeTruthy();
      restoreGetComputedStyle();
    });
  });

  describe('scroll height is smaller than the client height', () => {
    const fakeHTMLElement = {
      scrollHeight: 500,
      clientHeight: 1000,
    };

    it('should return true when overflowY is set to `auto`', () => {
      replaceGetComputedStyle('', 'auto');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeFalsy();
      restoreGetComputedStyle();
    });

    it('should return true when overflowY is set to `visible`', () => {
      replaceGetComputedStyle('', 'visible');
      expect(isScrollbarVisible(fakeHTMLElement)).toBeFalsy();
      restoreGetComputedStyle();
    });
  });
});
