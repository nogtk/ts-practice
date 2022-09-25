namespace ClassDeclaration {
  class User<T> {
    static adminName: string = "nogtk";
    static getAdminUser() {
      return new User(User.adminName, 30, 111);
    }

    // constructor(public name: string, private age: number) {}
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
      this.name = name;
      this.#age = age;
      this.data = data;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
    setAge(newAge: number) { this.#age = newAge; }
  }

  const user = new User("test", 19, "additional data");
  console.log(user);
  console.log(user.isAdult());
  console.log(user.data);
  user.setAge(30);
  console.log(user.isAdult());
  // user.name = "test"; compile error

  console.log(User.getAdminUser());
  const adminUser = User.getAdminUser();
  console.log(adminUser.name);
  console.log(adminUser.isAdult());

  const otherUser = new User("hoge", 20, true);
  console.log(otherUser.data);
}
