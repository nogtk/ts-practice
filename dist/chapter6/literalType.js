"use strict";
var LiteralType;
(function (LiteralType) {
    const foo = "foo";
    // const bar: FooString = "bar"; compile error
    function fromKey(key) {
        return key.slice(5);
    }
    const user = fromKey("user:tt");
    console.log(user);
    function signNumber(type) {
        return type === "plus" ? 1 : -1;
    }
    signNumber("plus");
    signNumber("minus");
    // signNumber("hoge"); compile error
})(LiteralType || (LiteralType = {}));
