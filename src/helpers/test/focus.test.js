import { isFocused, isBodyFocused, focus, focusOneOf } from '../focus';

describe('isFocused', () => {
  document.body.innerHTML = `
    <html>
      <head></head>
      <body>
        <div>
          <button id="btn1">btn 1</button>
          <button id="btn2">btn 2</button>
          <button id="btn3">btn 3</button>
        </div>
      </body>
    </html>
  `;

  it('should return false when element is not focussed', () => {
    document.getElementById('btn2').focus();
    expect(isFocused(document.getElementById('btn1'))).toBeFalsy();
  });

  it('should return true when element is focussed', () => {
    document.getElementById('btn2').focus();
    expect(isFocused(document.getElementById('btn2'))).toBeTruthy();
  });
});

describe('isBodyFocused', () => {
  document.body.innerHTML = `
    <html>
      <head></head>
      <body>
        <div>
          <button id="btn1">btn 1</button>
          <button id="btn2">btn 2</button>
          <button id="btn3">btn 3</button>
        </div>
      </body>
    </html>
  `;

  it('should return false when body is not focussed', () => {
    document.getElementById('btn2').focus();
    expect(isBodyFocused()).toBeFalsy();
  });

  it('should return true when body is focussed', () => {
    document.activeElement.blur();
    expect(isBodyFocused()).toBeTruthy();
  });
});

describe('focus', () => {
  document.body.innerHTML = `
    <html>
      <head></head>
      <body>
        <div>
          <button id="btn1">btn 1</button>
          <button id="btn2">btn 2</button>
          <button id="btn3">btn 3</button>
        </div>
      </body>
    </html>
  `;

  it('should not change the focused element when it is not possible', () => {
    document.getElementById('btn2').focus();
    const focusedElm = document.activeElement;
    expect(focus(undefined)).toBeFalsy();
    expect(document.activeElement).toBe(focusedElm);
  });

  it('should change the focused element when it is not possible', () => {
    document.getElementById('btn2').focus();
    const focusedElm = document.activeElement;
    expect(focus(document.getElementById('btn3'))).toBeTruthy();
    expect(document.activeElement).not.toBe(focusedElm);
    expect(document.activeElement).toBe(document.getElementById('btn3'));
  });
});

describe('focusOneOf', () => {
  document.body.innerHTML = `
    <html>
      <head></head>
      <body>
        <div>
          <button id="btn1">btn 1</button>
          <button id="btn2">btn 2</button>
          <button id="btn3">btn 3</button>
        </div>
      </body>
    </html>
  `;

  it('should not change the focused element when no element can be focus', () => {
    document.getElementById('btn2').focus();
    const focusedElm = document.activeElement;

    const canditates = [undefined, document.getElementById('btn4')];
    expect(focusOneOf(canditates)).toBeFalsy();
    expect(document.activeElement).toBe(focusedElm);
  });

  it('should change the focused element to the first element that can be focus', () => {
    document.getElementById('btn2').focus();
    let focusedElm = document.activeElement;
    let canditates = [
      undefined,
      document.getElementById('btn1'),
      document.getElementById('btn3'),
    ];
    expect(focusOneOf(canditates)).toBeTruthy();
    expect(document.activeElement).not.toBe(focusedElm);
    expect(document.activeElement).toBe(canditates[1]);

    document.getElementById('btn2').focus();
    focusedElm = document.activeElement;
    canditates = [
      document.getElementById('btn1'),
      document.getElementById('btn3'),
    ];
    expect(focusOneOf(canditates)).toBeTruthy();
    expect(document.activeElement).not.toBe(focusedElm);
    expect(document.activeElement).toBe(canditates[0]);
  });
});
