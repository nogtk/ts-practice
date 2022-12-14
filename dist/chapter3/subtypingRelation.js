"use strict";
var SubtypingRelation;
(function (SubtypingRelation) {
    const obj = {
        foo: "hello",
        bar: 1,
        baz: false,
    };
    const obj2 = obj;
    console.log(obj);
    console.log(obj2);
    // const u: User = { name: "hoge", age: 20, telNumber: "09001234567" }; compile error
    const obj3 = { name: "hoge", age: 20, telNumber: "09001234567" };
    // obj3 の部分型関係によってUserに定義されていないプロパティを持っていてもコンパイルエラーは起きない
    const u = obj3;
    console.log(u);
})(SubtypingRelation || (SubtypingRelation = {}));
