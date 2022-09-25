"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var ClassInterface;
(function (ClassInterface) {
    var _User_age;
    class User {
        constructor(name, age) {
            _User_age.set(this, void 0);
            this.name = name;
            __classPrivateFieldSet(this, _User_age, age, "f");
        }
        isAdult() {
            return __classPrivateFieldGet(this, _User_age, "f") >= 18;
        }
        filterOlder(users) {
            return users.filter(u => __classPrivateFieldGet(u, _User_age, "f") > __classPrivateFieldGet(this, _User_age, "f"));
        }
    }
    _User_age = new WeakMap();
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
})(ClassInterface || (ClassInterface = {}));
