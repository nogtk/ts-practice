"use strict";
var TypeArgument;
(function (TypeArgument) {
    const obj = {
        mother: 0,
        father: 1,
        child: "child"
    };
    console.log(obj);
    const human = {
        mother: { name: 'mama' },
        father: { name: 'papa' },
        child: { name: 'meme', age: 30 }
    };
    console.log(human);
})(TypeArgument || (TypeArgument = {}));
