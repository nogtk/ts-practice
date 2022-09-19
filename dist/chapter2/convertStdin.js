import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.close();
rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    let res;
    if (10 <= num && num <= 100) {
        res = `${num} は10以上100以下です`;
    }
    else {
        res = `${num} は10未満または100より大きいです`;
    }
    console.log(res);
    rl.close();
});
rl.question('名前を入力してください', (name) => {
    const displayName = name || 'default name';
    console.log(displayName);
    rl.close();
});
const secret = process.env.SECRET ?? 'default';
console.log(secret);
