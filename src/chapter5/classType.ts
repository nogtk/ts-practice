namespace ClassType {
  type HasAge = {
    age: number
  };

  class User {
    constructor(public name: string, public age: number) {}
  }

  function getPrice(customer: HasAge) {
    if (customer instanceof User) {
      if (customer.name === "tt") {
        return 0;
      }
    }

    return customer.age >= 18 ? 1000 : 1800;
  }

  const u = new User("aa", 20);
  console.log(u instanceof User);
  console.log({} instanceof User);

  const uu: User = {
    name: 'te',
    age: 20,
  };
  // User型のオブジェクトを作っても instanceof は false
  console.log(uu instanceof User);

  const ttUser = new User("tt", 0);
  const adultUser: HasAge = { age: 18 };
  const childUser: HasAge = { age: 17 };
  console.log(getPrice(ttUser), getPrice(adultUser), getPrice(childUser));
}
