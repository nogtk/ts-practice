"use strict";
var Generics;
(function (Generics) {
    function repeat(element, length) {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
    const repeat2 = (element, length) => {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    };
    const repeatName = (element, length) => {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element.name);
        }
        return result;
    };
    console.log(repeat(1, 3));
    console.log(repeat("a", 10));
    console.log(repeat2(false, 3));
    console.log(repeatName({ name: 'test' }, 3));
})(Generics || (Generics = {}));
