import warning from '../warning';

describe('warning', () => {
  it('should display the error message if condition is false', () => {
    // Given
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const errorMessage = 'errorMessage';

    // When
    warning(false, errorMessage);

    // Then
    expect(consoleSpy).toHaveBeenCalledWith('Warning: ', errorMessage);
    consoleSpy.mockRestore();
  });

  it('should not display the error message if condition is true', () => {
    // Given
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    // When
    warning(true, 'errorMessage');

    // Then
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should not display error messages in production environment', () => {
    // Given
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const env = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    // When
    warning(false, 'errorMessage');

    // Then
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
    process.env.NODE_ENV = env;
  });
});
