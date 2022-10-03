"use strict";
var UnionType;
(function (UnionType) {
    const tama = {
        species: "ABC",
        age: "17"
    };
    const tt = {
        name: "tt",
        age: 30
    };
    console.log(tama, tt);
    function useFunc(func) {
        const result = func("45");
        console.log(result);
    }
    useFunc((arg) => arg);
    useFunc((arg) => Number(arg));
})(UnionType || (UnionType = {}));
