import { chohan } from './chohan';

jest.mock('./seed', () => {
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 1),
  };
});

describe('chohan', () => {
  test('returns 丁', () => {
    expect(chohan()).toBe('丁');
  });
  test('returns 半', () => {
    expect(chohan()).toBe('半');
  });
});

// mockImplementationOnceは関数への複数のコールが異なる結果を返せるようチェーンできる
