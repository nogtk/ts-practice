"use strict";
var ArrowFunction;
(function (ArrowFunction) {
    const calcBMI = ({ height, weight }) => {
        return weight / height ** 2;
    };
    const calcBMI2 = ({ height, weight }) => weight / height ** 2;
    console.log(calcBMI({ height: 1.70, weight: 55 }));
    console.log(calcBMI2({ height: 1.70, weight: 55 }));
    const calcBMIObject = ({ height, weight }) => ({
        bmi: weight / height ** 2
    });
    console.log(calcBMIObject({ height: 1.70, weight: 55 }));
    const obj = {
        double: (num) => num * 2,
    };
    console.log(obj.double(2));
    const sum = (...args) => {
        let result = 0;
        for (const num of args) {
            result += num;
        }
        return result;
    };
    console.log(sum(1, 2, 3));
    console.log(sum(4, 5));
    const nums = [1, 2, 3, 4, 5];
    console.log(sum(...nums));
    const getName = (u) => u.name;
    const users = [
        { name: 'tt', age: 20 },
        { name: 'yy', age: 30 },
    ];
    console.log(users.map(getName));
    console.log(users.map((u) => u.name));
    const adultUsers = users.filter((u) => u.age >= 25);
    const seniorExists = users.some((u) => u.age >= 60);
    console.log(adultUsers, seniorExists);
})(ArrowFunction || (ArrowFunction = {}));
