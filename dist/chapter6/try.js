"use strict";
var Chapter6;
(function (Chapter6) {
    let Try;
    (function (Try) {
        function showOption(arg) {
            if (isSome(arg)) {
                console.log(arg.result);
            }
        }
        function isSome(arg) {
            return arg.tag === "existence";
        }
        function mapOption(obj, callback) {
            switch (obj.tag) {
                case "existence":
                    return { tag: "existence", result: callback(obj.result) };
                case "not existence":
                    return { tag: "not existence" };
            }
        }
        function doubleOption(obj) {
            return mapOption(obj, x => x * 2);
        }
        function toStringOption(obj) {
            return mapOption(obj, x => String(x));
        }
        showOption({
            tag: "existence",
            result: 200
        });
        showOption({
            tag: "existence",
            result: "hogehoge"
        });
        showOption({
            tag: "not existence"
        });
        const four = { tag: "existence", result: 4 };
        const none = { tag: "not existence" };
        console.log(doubleOption(four));
        console.log(doubleOption(none));
        console.log(toStringOption(four));
        console.log(toStringOption(none));
    })(Try || (Try = {}));
})(Chapter6 || (Chapter6 = {}));
