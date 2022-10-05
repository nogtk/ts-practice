namespace InterSectionUnionType {
  type Human = { name: string, age: number };
  type Animal = { species: string };
  function getName(human: Human) {
    return human.name;
  }
  function getSpecies(animal: Animal) {
    return animal.species;
  }

  const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

  const human: Human = { name: 'name', age: 25 };
  const animal: Animal = { species: 'dog' };

  // compile error
  // mysteryFunc(human);
  // mysteryFunc(animal);

  const animalHuman: Human & Animal = {
    ...human, ...animal
  };

  console.log(animalHuman);
  console.log(mysteryFunc(animalHuman));

  function useMaybeHuman(human: Human | undefined) {
    const age = human?.age;
    console.log(age);
  }
  useMaybeHuman(human);
  useMaybeHuman(undefined);

  type GetTimeFunc = () => Date;
  function useTime(getTimeFunc: GetTimeFunc | undefined) {
    const timeOrUndefined = getTimeFunc?.();
    console.log(timeOrUndefined);
  }
  useTime(() => new Date());
  useTime(undefined);
}
