describe('mock test', () => {
  test('mock obj specification', () => {
    // mockにはよくつかypropertie
    // mock.calls: 関数が呼ばれたときの引数の配列
    // mock.results: 関数が呼ばれたときの戻り値の配列
    // type: 'return' or 'throw' or 'incomplete'
    // mock.instances: 関数が呼ばれたときのインスタンスの配列
    // mockClear: mock.calls, mock.results, mock.instancesを初期化
    // mockReset: mock.calls, mock.results, mock.instances, mockImplementationを初期化

    const mockFunction = jest.fn();
    // return with undefined
    expect(mockFunction('foo', 'bar', 'baz')).toBe(undefined);
    // have mock property
    expect(mockFunction).toHaveProperty('mock');
    // calls property in mock property
    expect(mockFunction.mock).toHaveProperty('calls');
    // called once
    expect(mockFunction.mock.calls).toHaveLength(1);
    // first call with arguments 'foo' and 'bar'
    expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar', 'baz']);
    // results property in mock property
    expect(mockFunction.mock).toHaveProperty('results');
    // called once
    expect(mockFunction.mock.results).toHaveLength(1);
    // first call with arguments undefined
    expect(mockFunction.mock.results[0].value).toBe(undefined);
    // finished with success
    expect(mockFunction.mock.results[0].type).toBe('return');
  });

  test('mock return hello', () => {
    const mockFunction = jest.fn().mockReturnValue('hello');
    // const mockFunction = jest.fn(() => 'hello');
    expect(mockFunction()).toBe('hello');
  });

  test('mock return hello once and then it returns goodbye', () => {
    const mockFunction = jest
      .fn()
      .mockReturnValueOnce('hello')
      .mockReturnValueOnce('goodbye');
    expect(mockFunction()).toBe('hello');
    expect(mockFunction()).toBe('goodbye');
    expect(mockFunction()).toBe(undefined);
  });
});
