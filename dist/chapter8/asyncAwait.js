"use strict";
async function get3() {
    return 3;
}
const p = get3();
p.then((num => console.log(num)));
const sleep = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
async function get4() {
    await sleep(1000);
    return 4;
}
const pp = get4();
pp.then(num => console.log(`num is ${num}`));
