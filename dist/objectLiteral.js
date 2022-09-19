"use strict";
const a = 2;
const property = "foo";
const obj = {
    a,
    hoge: 'bar',
    "test": "aaa",
    1: 30,
    [property]: "yay",
};
console.log(obj.a);
console.log(obj.hoge);
console.log(obj["test"]);
console.log(obj["1"]);
console.log(obj.foo);
console.log(obj[property]);
const obj1 = {
    foo: 1,
    bar: 4,
    baz: 5
};
const obj2 = {
    ...obj1,
    foo: 2
};
console.log(obj2);
