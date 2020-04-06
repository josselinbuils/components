import { getDisplayName } from '../index';

describe('getDisplayName', () => {
  it('should return the `displayName` props when exists', () => {
    expect(getDisplayName({ displayName: 'Name to display' })).toBe(
      'Name to display'
    );
  });

  it('should return the `name` props when exists', () => {
    expect(getDisplayName({ name: 'The name' })).toBe('The name');
  });

  it('should return `Component` otherwise', () => {
    expect(getDisplayName({})).toBe('Component');
  });
});
