namespace ClassInterface {
  type HasName = { name: string }
  
  class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 18;
    }
    
    public filterOlder(users: readonly User[]): User[] {
      return users.filter(u => u.#age > this.#age);
    }
  }
  console.log(new User('te', 17).isAdult());
  
  const alice = new User('alice', 25);
  const john = new User('john', 15);
  const bob = new User('bob', 40);

  const older = alice.filterOlder([john, bob]);
  console.log(older);

  console.log(john.isAdult(), john.isAdult.apply(bob));

  const funcOnly = alice.isAdult;
  // console.log(funcOnly()); RuntimeError
  const boundsAdult = alice.isAdult.bind(alice);
  console.log(boundsAdult());
}
