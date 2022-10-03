namespace UnionType {
  type Animal = {
    species: string;
    age: string;
  };
  type Human = { 
    name: string;
    age: number;
  };

  type User = Animal | Human;

  const tama: User = {
    species: "ABC",
    age: "17"
  };
  const tt: User = {
    name: "tt",
    age: 30
  };
  console.log(tama, tt);

  type MysteryFunc =
    | ((str: string) => string)
    | ((str: string) => number);
  
  function useFunc(func: MysteryFunc) {
    const result = func("45");
    console.log(result);
  }
  useFunc((arg: string): string =>  arg)
  useFunc((arg: string): number => Number(arg))
}
