namespace TypeFunction {
  type F = (repeatNum: number) => string;
  const xRepeat: F = (num: number): string => "x".repeat(num);
  console.log(xRepeat(5));

  type HasName = {
    name: string;
  }
  type HasNameAndAge = {
    name: string;
    age: number;
  }

  const fromAge = (age: number): HasNameAndAge => ({
    name: 'tt',
    age
  });
  const f: (age: number) => HasName = fromAge;
  const obj: HasName = f(100);
  console.log(obj);

  const showName = (obj: HasName) => {
    console.log(obj.name);
  };
  const g: (obj: HasNameAndAge) => void = showName;
  g({ name: 'aa', age: 20 });
}
