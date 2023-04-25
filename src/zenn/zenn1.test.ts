describe('zenn1', () => {
  const mockFunction = jest.fn();
  // console.log(mockFunction.mock);
  // console.log(mock);
  test('mock', () => {
    expect(mockFunction).not.toHaveBeenCalled();
  });

  test('mock called once', () => {
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);
    // mock解除
    mockFunction.mockClear();
  });

  test('mock called with arguments', () => {
    mockFunction('foo', 'bar', 'baz');
    expect(mockFunction).toHaveBeenCalledWith('foo', 'bar', 'baz');
    expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar', 'baz']);
    console.log(mockFunction.mock.calls[0]);
  });

  test('mock return value', () => {
    mockFunction.mockReturnValueOnce('hello');
    mockFunction.mockReturnValueOnce('goodbye');
    expect(mockFunction()).toBe('hello');
    expect(mockFunction()).toBe('goodbye');
    expect(mockFunction()).toBe(undefined);
  });
});
