"use strict";
var ArrayNamespace;
(function (ArrayNamespace) {
    // const unionArr: Array<number | string> = [1, "2", false]; compileError
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
    console.log(arr.includes(3));
    console.log(arr.length);
    for (const elm of arr) {
        console.log(elm);
    }
    let tuple = ["foo", 0];
    console.log(tuple);
    // console.log(tuple[2]); compile error
})(ArrayNamespace || (ArrayNamespace = {}));
