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

  test('test1', async () => {
    const expected = ['山田 太郎', '佐藤 花子'];

    // getUsers関数をモック化
    jest.spyOn(users, 'getUsers').mockResolvedValue([
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

  test('test1', async () => {
    // const expected = ['山田 太郎', '佐藤 花子'];
    // // getUsers関数をモック化
    // users.getUsers = jest.fn().mockResolvedValue([
    //   { name: '山田 太郎', age: 30, isDileted: false },
    //   { name: '佐藤 花子', age: 20, isDileted: false },
    // ])
    // // getNameList関数をモック化
    // users.getNameList = jest.fn().mockResolvedValue(['山田 太郎', '佐藤 花子']);
    // const actual = await users.getNameList();
    // expect(actual).toEqual(expected);
    expect(1).toBe(1);
  });

  test('test3', async () => {
    //jest.mockとjest.spyOnの違い
    //jest.mockはモジュール全体をモック化する
    //jest.spyOnはモジュールの一部をモック化する

    // test1をjest.mockを使って書き換える
    // const expected = ['山田 太郎', '佐藤 花子'];
    // jest.mock('./users', () => ({
    //   getUsers: jest.fn().mockResolvedValue([
    //     { name: '山田 太郎', age: 30, isDileted: false },
    //     { name: '佐藤 花子', age: 20, isDileted: false },
    //   ]),
    //   getNameList: jest.fn().mockResolvedValue(['山田 太郎', '佐藤 花子']),
    // }));
    // const actual = await users.getNameList();
    // expect(actual).toEqual(expected);
    expect(1).toBe(1);
  });
});
