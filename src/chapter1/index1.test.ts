describe('tobe toEqual toStrictEqual', () => {
  const a = 1;
  const b = { value: 1 };
  const c = { value: 1 };
  const d = { value: '1' };
  const e: {
    value?: number;
  } = { value: 1 };

  class F {
    value: number;
    constructor(value: number) {
      this.value = value;
    }
  }

  const g = { id: undefined, value: 1 };
  test('toBe', () => {
    expect(a).toBe(1);
    expect(b).not.toBe({ value: 1 });
    expect(a).toBe(b.value);
    expect(b).not.toBe(c);
  });

  test('toEqual', () => {
    expect(a).toEqual(1);
    expect(b).toEqual({ value: 1 });
    expect(a).toEqual(b.value);
    expect(d.value).toEqual(String(b.value));
    expect(e).toEqual(b);
    const f = new F(1);
    expect(f).toEqual(b);
    expect(g).toEqual({ value: 1 });
  });

  test('toStrictEqual', () => {
    expect(a).toStrictEqual(1);
    expect(b).toStrictEqual({ value: 1 });
    expect(a).toStrictEqual(b.value);
    expect(Number(d.value)).toStrictEqual(b.value);
    expect(e).toStrictEqual(b);
    const f = new F(1);
    expect(f).not.toStrictEqual(b);
    expect(g).not.toStrictEqual({ value: 1 });
  });
});
