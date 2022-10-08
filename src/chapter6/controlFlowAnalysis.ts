namespace ControlFlowAnalysis {
  type SignType = "plus" | "minus";
  function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1;
  }
  function numberWithSign(num: number, type: SignType | "none") {
    if (type === "none") {
      return 0;
    } else {
      return num * signNumber(type);
    }
  }

  console.log(numberWithSign(3, "plus"));
  console.log(numberWithSign(3, "minus"));
  console.log(numberWithSign(3, "none"));

  function formatNumberOrString(value: string | number) {
    if (typeof value === "number") {
      return value.toFixed(3);
    } else {
      return value;
    }
  }
  console.log(formatNumberOrString(3.14));
  console.log(formatNumberOrString("pie"));

  type Animal = {
    tag: "animal";
    species: string;
  }
  type Human = {
    tag: "human";
    name: string;
  }
  type User = Animal | Human;

  const tama: User = {
    tag: "animal",
    species: "cat",
  };
  const tt: User = {
    tag: "human",
    name: "tt"
  };
  function getUserName(user: User) {
    switch (user.tag) {
      case "human":
        return user.name;
      case "animal":
        return "名無し";
    }
  }
  console.log(getUserName(tama));
  console.log(getUserName(tt));
}
