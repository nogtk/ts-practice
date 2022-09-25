namespace Chapter5 {
  namespace Try {
    class EmptyNameError extends Error {};

    class User {
      name: string;
      age: number;

      constructor(name: string, age: number) {
        if (name === "") {
          throw new EmptyNameError("名前は空にできません");
        }
        this.name = name;
        this.age = age;
      }

      public getMessage(message: string): string {
        return `${this.name} (${this.age}) 「${message}」`;
      }
    }

    const tt = new User("tt", 30);
    console.log(tt.getMessage("こんにちは"));

    function createUser(name: string, age: number) {
      return (m: string) => `${name} (${age}) 「${m}」`;
    }

    const getMessage = createUser("abab", 20);
    console.log(getMessage("Hello"));
  }
}
