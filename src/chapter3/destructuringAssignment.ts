namespace destructuringAssignment {
  const obj = {
    foo: 1,
    bar: "2",
    baz: true,
  };
  const { foo, bar, baz } = obj;
  const { foo: Foo, bar: Bar, baz: Baz } = obj;
  console.log(foo, bar, baz);
  console.log(Foo, Bar, Baz);

  const nested = {
    num: 123,
    obj: {
      fooo: "hello",
      bar: "world"
    }
  }
  const { num, obj: { fooo } } = nested;
  console.log(num, fooo);

  type DeafultObj =  { hoo?: number };
  const obj1: DeafultObj = {};
  const obj2: DeafultObj = { hoo: 1 };

  const { hoo = 500 } =  obj1;
  const { hoo: baa = 500 } = obj2;
  console.log(hoo, baa);

  const { foo: fpp, ...restObj } = obj;
  console.log(restObj);
}
