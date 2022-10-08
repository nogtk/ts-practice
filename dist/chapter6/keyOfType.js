"use strict";
var KeyOfType;
(function (KeyOfType) {
    const mmConversionTable = {
        mm: 1,
        cm: 10,
        m: 1e3,
        km: 1e6,
    };
    function convertUnits(value, unit) {
        const mmValue = value * mmConversionTable[unit];
        return {
            mm: mmValue,
            cm: mmValue / 10,
            m: mmValue / 1e3,
            km: mmValue / 1e6
        };
    }
    console.log(convertUnits(5600, "m"));
    console.log(convertUnits(5600, "cm"));
    function get(obj, key) { return obj[key]; }
    const taka = {
        name: "taka",
        age: 26
    };
    console.log(get(taka, "name"));
    console.log(get(taka, "age"));
})(KeyOfType || (KeyOfType = {}));
