describe('math random with spyOn', () => {
  let mockSpy: jest.SpyInstance;
  afterEach(() => {
    mockSpy.mockRestore();
  });

  test('return 1', () => {
    // 第一引数にオブジェクト、第二引数にメソッドを指定してその関数を上書きする
    mockSpy = jest.spyOn(Math, 'random').mockReturnValue(1);
    console.log(mockSpy.mock.calls);
    expect(Math.random()).toBe(1);
  });
  test('return under 1', () => {
    expect(Math.random()).toBeLessThan(1);
  });
});
