const fruitList = ['apple', 'banana', 'orange'];

// １つのみ含まれて居ることの確認
test('fruits list has orange', () => {
  expect(fruitList).toContain('orange');
});

// 複数含まれて居ることの確認
test('fruits list has apple and banana', () => {
  expect(fruitList).toEqual(expect.arrayContaining(['apple', 'banana']));
});

// Error
class User {
  name: string;
  password: string;
  constructor({ name, password }: { name: string; password: string }) {
    // passwordが6文字以下ならエラー
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    this.name = name;
    this.password = password;
  }
}

test('creates a new user with a 6-chatacter password', () => {
  expect(
    new User({
      name: 'John',
      password: '123456',
    })
  ).toEqual({
    name: 'John',
    password: '123456',
  });
});

// Error
test('throws an error if password is less than 6 characters', () => {
  expect(() => {
    new User({
      name: 'John',
      password: '12345',
    });
  }).toThrow('Password must be at least 6 characters');
});

// callback
const fetchData = (callback: (args_0: string) => void) => {
  //setTimeout(callback, 100, 'lemon');
  setTimeout(() => {
    callback('lemon');
  }, 100);
};

// test('the data is lemon', () => {
//   const callback = (msg: string) => {
//     expect(msg).toBe('lemon');
//   };
//   fetchData(callback);
// });

// done
test('the data is lemon', (done) => {
  const callback = (msg: string) => {
    expect(msg).toBe('lemon');
    done();
  };
  fetchData(callback);
});
