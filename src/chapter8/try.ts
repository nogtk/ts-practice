import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath);
const fileLocation = path.join(fileDir, '../../src/chapter7/sample.txt')

const sleep1ms = () => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 1);
  });
};

sleep1ms().then(() => process.exit());
const data = await fs.readFile(fileLocation, { encoding: 'utf8'})
const regExp = /taka/g;
const ans = (data.match(regExp) || []).length;
console.log(ans);
