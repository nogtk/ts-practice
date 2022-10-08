namespace Chapter6 {
  namespace Try {
    type Some<T> = {
      tag: "existence",
      result: T
    };
    type None = {
      tag: "not existence"
    }

    type Option<T> = Some<T> | None;

    function showOption<T>(arg: Option<T>) {
      if (isSome(arg)) {
        console.log(arg.result);
      }
    }
    function isSome<T>(arg: Option<T>): arg is Some<T> {
      return arg.tag === "existence";
    }
    function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
      switch (obj.tag) {
        case "existence":
          return { tag: "existence", result: callback(obj.result) };
        case "not existence":
          return { tag: "not existence" }
      }
    }
    function doubleOption(obj: Option<number>) {
      return mapOption(obj, x => x * 2);
    }
    function toStringOption(obj: Option<number>) {
      return mapOption(obj, x => String(x));
    }

    showOption(
      { 
        tag: "existence",
        result: 200 
      }
    );
    showOption({
        tag: "existence",
        result: "hogehoge"
      }
    );
    showOption(
      {
        tag: "not existence"
      }
    );
    
    const four: Option<number> = { tag: "existence", result: 4};
    const none: Option<number> = { tag: "not existence" };
    console.log(doubleOption(four));
    console.log(doubleOption(none));
    console.log(toStringOption(four));
    console.log(toStringOption(none));
  }
}
