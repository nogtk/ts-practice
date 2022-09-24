const objOt = {
  foo: 1,
  bar: "World"
};

const object2Ot: {
  foo: number,
  bar: string
} = {
  foo: 2,
  bar: "World"
}

console.log(objOt);
console.log(object2Ot);

type FooBarObj = {
  foo: number,
  bar: string,
};

const testOt: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
};

console.log(testOt);

interface FooBarInterface {
	foo1: string,
	bar1: number,
};

const objOt2: FooBarInterface = {
	foo1: "fuga",
	bar1: 20,
};
console.log(objOt2);

type PriceData = {
	[key: string]: number;
}
const data: PriceData = {
	apple: 220,
	coffee: 120,
	bento: 500
};
console.log(data);
data.chicken = 300;
console.log(data);

namespace ObjectType {
  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
  }

  const obj: MyObj = { foo: false, bar: true };
  const obj2: MyObj = { foo: true, bar: false , baz: 123};

  console.log(obj);
  console.log(obj2);
  if (obj2.baz !== undefined) {
    console.log(obj2.baz * 1000);
  }

  type MyObj2 = {
    readonly foo: number;
  };
  const obj3: MyObj2 = { foo: 123 };
  console.log(obj3);
  // obj3.foo = 0; compile error
}
