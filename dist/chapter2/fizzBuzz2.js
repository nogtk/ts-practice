"use strict";
let res = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        res += "FizzBuzz";
    }
    else if (i % 3 === 0) {
        res += "Buzz";
    }
    else if (i % 5 === 0) {
        res += "Fizz";
    }
    else {
        res += String(i);
    }
    res += " ";
}
console.log(res);
