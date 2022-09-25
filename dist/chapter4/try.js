"use strict";
var Chapter4;
(function (Chapter4) {
    let Try;
    (function (Try) {
        const getFizzBuzzString = (i) => {
            if (i % 3 === 0 && i % 5 === 0) {
                return "FizzBuzz";
            }
            else if (i % 3 === 0) {
                return "Fizz";
            }
            else if (i % 5 === 0) {
                return "Buzz";
            }
            else {
                return String(i);
            }
        };
        const sequence = (min, max) => {
            const result = [];
            for (let i = min; i <= max; i++) {
                result.push(i);
            }
            return result;
        };
        for (const i of sequence(1, 100)) {
            const message = getFizzBuzzString(i);
            console.log(message);
        }
        function map(array, callback) {
            const result = [];
            for (const element of array) {
                result.push(callback(element));
            }
            return result;
        }
        const dataNum = [1, 1, 2, 3, 5, 8, 13];
        const dataString = ["a", "b", "c", "d", "e", "f", "g"];
        const resultNum = map(dataNum, (x) => x * 10);
        const resultString = map(dataString, (x) => x.toUpperCase());
        console.log(resultNum);
        console.log(resultString);
    })(Try || (Try = {}));
})(Chapter4 || (Chapter4 = {}));
