namespace InterSectionType {
  type Animal = {
    species: string;
    age: number;
  }

  type Human = Animal & {
    name: string;
  }

  const tama: Animal = {
    species: "cat",
    age: 3
  };

  const tt: Human = {
    species: 'human',
    age: 25,
    name: 'tt'
  };

  console.log(tama, tt);
}
