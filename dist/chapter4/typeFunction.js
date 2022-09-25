"use strict";
var TypeFunction;
(function (TypeFunction) {
    const xRepeat = (num) => "x".repeat(num);
    console.log(xRepeat(5));
    const fromAge = (age) => ({
        name: 'tt',
        age
    });
    const f = fromAge;
    const obj = f(100);
    console.log(obj);
    const showName = (obj) => {
        console.log(obj.name);
    };
    const g = showName;
    g({ name: 'aa', age: 20 });
})(TypeFunction || (TypeFunction = {}));
