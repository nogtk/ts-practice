namespace SubtypingRelation {
  type FooBar = {
    foo: string,
    bar: number,
  }
  type FooBarBaz = {
    foo: string,
    bar: number,
    baz: boolean,
  }

  const obj: FooBarBaz = {
    foo: "hello",
    bar: 1,
    baz: false,
  };
  const obj2: FooBar = obj

  console.log(obj);
  console.log(obj2);
  // console.log(obj2.baz); compile error

  type User = { name: string; age: number };
  // const u: User = { name: "hoge", age: 20, telNumber: "09001234567" }; compile error
  const obj3 = { name: "hoge", age: 20, telNumber: "09001234567" };
  // obj3 の部分型関係によってUserに定義されていないプロパティを持っていてもコンパイルエラーは起きない
  const u: User = obj3
  console.log(u);
}
