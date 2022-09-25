"use strict";
var Chapter5;
(function (Chapter5) {
    let Try;
    (function (Try) {
        class EmptyNameError extends Error {
        }
        ;
        class User {
            constructor(name, age) {
                if (name === "") {
                    throw new EmptyNameError("名前は空にできません");
                }
                this.name = name;
                this.age = age;
            }
            getMessage(message) {
                return `${this.name} (${this.age}) 「${message}」`;
            }
        }
        const tt = new User("tt", 30);
        console.log(tt.getMessage("こんにちは"));
        function createUser(name, age) {
            return (m) => `${name} (${age}) 「${m}」`;
        }
        const getMessage = createUser("abab", 20);
        console.log(getMessage("Hello"));
    })(Try || (Try = {}));
})(Chapter5 || (Chapter5 = {}));
