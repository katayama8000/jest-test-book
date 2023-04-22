test.each([
  { name: 'joe', age: 18 },
  { name: 'mike', age: 20 },
  { name: 'lily', age: 22 },
])('name: %s, age: %i', (user) => {
  expect(user.age).toBeGreaterThan(17);
});

// before after beforeAll afterAll
describe('before after timing', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  test('test1', () => {
    console.log('test1');
  });
  test('test2', () => {
    console.log('test2');
  });
  describe('sco[ed nest', () => {
    beforeAll(() => {
      console.log('beforeAll-2');
    });
    afterAll(() => {
      console.log('afterAll-2');
    });
    beforeEach(() => {
      console.log('beforeEach-2');
    });
    afterEach(() => {
      console.log('afterEach-2');
    });
    test('test3', () => {
      console.log('test3');
    });
  });
});
