import { name as takaName, age, getTakaName } from "./exporter.js";
import takaAge from "./takaAge.js";
import increment, { value } from "./counter.js";
import { Animal, tama } from "./animal.js";

console.log(takaName, age);

console.log(getTakaName());
console.log(takaAge);

console.log(increment());
console.log(value);

const myCat: Animal = { ...tama };
console.log(myCat);
