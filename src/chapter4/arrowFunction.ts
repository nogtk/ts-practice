namespace ArrowFunction {
  type Human = {
    height: number,
    weight: number,
  };

  const calcBMI = ({
    height, weight
  }: Human): number => {
    return weight / height ** 2;
  };
  const calcBMI2 = ({
    height, weight
  }: Human): number => weight / height ** 2;

  console.log(calcBMI({ height: 1.70, weight: 55 }));
  console.log(calcBMI2({ height: 1.70, weight: 55}));

  type ReturnObj = { bmi: number };

  const calcBMIObject = ({
    height, weight
  }: Human): ReturnObj => ({
    bmi: weight / height ** 2
  });
  console.log(calcBMIObject({ height: 1.70, weight: 55}));

  const obj = {
    double: (num: number): number => num * 2,
  };
  console.log(obj.double(2));

  const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) { result += num; }
    return result;
  };
  console.log(sum(1, 2, 3));
  console.log(sum(4, 5));
  const nums = [1, 2, 3, 4, 5];
  console.log(sum(...nums));

  type User = { name: string, age: number };
  const getName = (u: User): string => u.name;
  const users: User[] = [
    { name: 'tt', age: 20 },
    { name: 'yy', age: 30 },
  ];
  console.log(users.map(getName));
  console.log(users.map((u: User): string => u.name));
  const adultUsers = users.filter((u: User) => u.age >= 25);
  const seniorExists = users.some((u: User) => u.age >= 60);
  console.log(adultUsers, seniorExists);
}
