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
var ClassDeclaration;
(function (ClassDeclaration) {
    var _User_age;
    class User {
        constructor(name, age, data) {
            _User_age.set(this, void 0);
            this.name = name;
            __classPrivateFieldSet(this, _User_age, age, "f");
            this.data = data;
        }
        static getAdminUser() {
            return new User(User.adminName, 30, 111);
        }
        isAdult() {
            return __classPrivateFieldGet(this, _User_age, "f") >= 20;
        }
        setAge(newAge) { __classPrivateFieldSet(this, _User_age, newAge, "f"); }
    }
    _User_age = new WeakMap();
    User.adminName = "nogtk";
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
})(ClassDeclaration || (ClassDeclaration = {}));
