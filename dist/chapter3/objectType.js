"use strict";
const objOt = {
    foo: 1,
    bar: "World"
};
const object2Ot = {
    foo: 2,
    bar: "World"
};
console.log(objOt);
console.log(object2Ot);
const testOt = {
    foo: 123,
    bar: "Hello, world!"
};
console.log(testOt);
;
const objOt2 = {
    foo1: "fuga",
    bar1: 20,
};
console.log(objOt2);
const data = {
    apple: 220,
    coffee: 120,
    bento: 500
};
console.log(data);
data.chicken = 300;
console.log(data);
var ObjectType;
(function (ObjectType) {
    const obj = { foo: false, bar: true };
    const obj2 = { foo: true, bar: false, baz: 123 };
    console.log(obj);
    console.log(obj2);
    if (obj2.baz !== undefined) {
        console.log(obj2.baz * 1000);
    }
    const obj3 = { foo: 123 };
    console.log(obj3);
    // obj3.foo = 0; compile error
})(ObjectType || (ObjectType = {}));
