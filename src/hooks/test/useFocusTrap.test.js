import {
  isGuard,
  notIsGuard,
  getFocusGuard,
  unsetFocusTrap,
  setFocusTrap,
  focusInHandler,
} from '../useFocusTrap';

describe('isGuard', () => {
  it('should return true when an element is a focus guard', () => {
    expect(isGuard({ dataset: { focusTrapGuard: true } })).toBeTruthy();
  });

  it('should return false otherwise', () => {
    expect(isGuard({ dataset: { focusTrapGuard: false } })).toBeFalsy();
    expect(isGuard({ dataset: {} })).toBeFalsy();
    expect(isGuard(undefined)).toBeFalsy();
  });
});

describe('notIsGuard', () => {
  it('should return false when an element is a focus guard', () => {
    expect(notIsGuard({ dataset: { focusTrapGuard: true } })).toBeFalsy();
  });

  it('should return true otherwise', () => {
    expect(notIsGuard({ dataset: { focusTrapGuard: false } })).toBeTruthy();
    expect(notIsGuard({ dataset: {} })).toBeTruthy();
    expect(notIsGuard(undefined)).toBeTruthy();
  });
});

describe('getFocusGuard', () => {
  it('should return a focus guard', () => {
    const expected =
      '<div style="width: 1px; height: 0px; padding: 0px; margin: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;" data-focus-trap-guard="true" tabindex="0"></div>';
    expect(getFocusGuard().outerHTML).toBe(expected);
  });
});

describe('set/unset FocusTrap', () => {
  it('should have no effect to call unsetFocusTrap when no trap is activated', () => {
    expect(unsetFocusTrap()).toBeFalsy();
  });

  it('should behave correctly', () => {
    document.body.innerHTML =
      '<div><span id="trap"></span><button type="button" id="btn">Ok</button></div>';
    const dom = document.body.innerHTML;

    const unsetTrap = setFocusTrap(document.getElementById('trap'));
    expect(typeof unsetTrap).toBe('function');
    expect(document.body.innerHTML).toBe(dom);

    focusInHandler({ target: document.getElementById('btn') });
    expect(document.body.innerHTML).toBe(
      '<div><span id="trap"><div style="width: 1px; height: 0px; padding: 0px; margin: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;" data-focus-trap-guard="true" tabindex="0"></div></span><button type="button" id="btn">Ok</button></div>'
    );
  });
});
