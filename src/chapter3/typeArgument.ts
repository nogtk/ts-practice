namespace TypeArgument {
  type Family<Parent, Child> = {
    mother: Parent,
    father: Parent,
    child: Child,
  };
  const obj: Family<number, string> = {
    mother: 0,
    father: 1,
    child: "child"
  };
  console.log(obj);

  type HasName = { name: string };
  type HasNameFamily<Parent extends HasName, Child extends HasName> = {
    mother: Parent,
    father: Parent,
    child: Child,
  }
  type Animal = { name: string };
  type Human = { name: string, age: number }
  type T = HasNameFamily<Animal, Human>;
  const human: T = {
    mother: { name: 'mama' },
    father: { name: 'papa' },
    child: { name: 'meme', age: 30 }
  };
  console.log(human);
}
