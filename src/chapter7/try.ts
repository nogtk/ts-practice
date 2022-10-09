import * as fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath);
const fileLocation = path.join(fileDir, '../../src/chapter7/sample.txt')

fs.readFile(fileLocation, { encoding: "utf8"} , (err, data) => {
  if (err) throw err;
  const regExp = /taka/g;
  const ans = (data.match(regExp) || []).length;
  console.log(ans);
});
