namespace LiteralType {
  type FooString = "foo";
  const foo: FooString = "foo";
  // const bar: FooString = "bar"; compile error

  function fromKey<T extends string>(key: `user:${T}`): T {
    return key.slice(5) as T;
  }
  const user = fromKey("user:tt"); console.log(user);

  function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
  }
  signNumber("plus");
  signNumber("minus");
  // signNumber("hoge"); compile error
}
