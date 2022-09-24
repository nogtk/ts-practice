namespace Chapter3 {
  namespace Try {
    type User = {
      name: string,
      age: number,
      premiumUser: boolean
    };
    const data: string = `
    uhyo,26,1
    John Smith, 17,0
    Mary Sue, 14, 1
    `;

    const users: Array<User> = [];

    for (const tmp of data.split("\n")) {
      const regExp = /^\s*$/
      if (regExp.test(tmp)) { continue; }

      const [nameString, ageString, premiumUserString] = tmp.split(',');
      const name = nameString.replace(/\s+/, '');
      const age = Number(ageString);
      const premiumUser = premiumUserString === "1";
      users.push({ name, age, premiumUser});
    }

    for (const user of users) {
      if (user.premiumUser) {
        console.log(`${user.name} (${user.age}) is premium user.`);
      } else {
        console.log(`${user.name} (${user.age}) is not premium user.`);
      }
    }
  }
}
