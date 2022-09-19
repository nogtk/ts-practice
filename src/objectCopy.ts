// Use simple assignment
const foo = { num: 1 };
const bar = foo;
console.log(bar.num); // 1
foo.num++;
console.log(bar.num); // 2

// Use spread syntax
const foo2 = { num: 1 };
const bar2 = { ...foo2 };
console.log(bar2.num); // 1
foo2.num++;
console.log(bar2.num); // 1

// Note: nested objects has same object
const foo3 = { num: { hoge: "fuga" } };
const bar3 = { ...foo3 };
console.log(bar3.num); // { hoge: "fuga" }
foo3.num.hoge = "FUGA";
console.log(bar3.num); // { hoge: "FUGA" }
