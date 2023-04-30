import * as users from './users';

describe('getNameList', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('すべてのユーザー名を返す', async () => {
    const expected = ['山田 太郎', '田中 次郎', '佐藤 花子'];

    // getUsers関数をモック化
    jest.spyOn(users, 'getUsers').mockResolvedValue([
      { name: '山田 太郎', age: 30, isDileted: false },
      { name: '田中 次郎', age: 40, isDileted: false },
      { name: '佐藤 花子', age: 20, isDileted: false },
    ]);

    const actual = await users.getNameList();
    expect(actual).toEqual(expected);
  });

  test('mock getNameList', async () => {
    const expected = ['山田 太郎', '佐藤 花子'];

    // getUsers関数をモック化
    const mockGetUsers = jest.spyOn(users, 'getUsers').mockResolvedValue([
      { name: '山田 太郎', age: 30, isDileted: false },
      { name: '佐藤 花子', age: 20, isDileted: false },
    ]);

    // getNameList関数をモック化
    jest
      .spyOn(users, 'getNameList')
      .mockResolvedValue(['山田 太郎', '佐藤 花子']);

    const actual = await users.getNameList();
    // expect(mockGetUsers).toHaveBeenCalledTimes(1);
    expect(actual).toEqual(expected);
  });
});
