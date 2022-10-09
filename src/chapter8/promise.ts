import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath);
const fileLocation = path.join(fileDir, '../../src/chapter8/foo.txt')

const p = readFile(fileLocation, "utf8");
p.then((data) => {
  console.log(data);
});
p.catch((error: unknown) => {
  console.log("failure", error);
});
p.finally(() => console.log("end"));

const pp = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});
pp.then((num) => {
  console.log(`結果は${num}`);
})
