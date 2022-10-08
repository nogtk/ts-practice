"use strict";
var ControlFlowAnalysis;
(function (ControlFlowAnalysis) {
    function signNumber(type) {
        return type === "plus" ? 1 : -1;
    }
    function numberWithSign(num, type) {
        if (type === "none") {
            return 0;
        }
        else {
            return num * signNumber(type);
        }
    }
    console.log(numberWithSign(3, "plus"));
    console.log(numberWithSign(3, "minus"));
    console.log(numberWithSign(3, "none"));
    function formatNumberOrString(value) {
        if (typeof value === "number") {
            return value.toFixed(3);
        }
        else {
            return value;
        }
    }
    console.log(formatNumberOrString(3.14));
    console.log(formatNumberOrString("pie"));
    const tama = {
        tag: "animal",
        species: "cat",
    };
    const tt = {
        tag: "human",
        name: "tt"
    };
    function getUserName(user) {
        switch (user.tag) {
            case "human":
                return user.name;
            case "animal":
                return "名無し";
        }
    }
    console.log(getUserName(tama));
    console.log(getUserName(tt));
})(ControlFlowAnalysis || (ControlFlowAnalysis = {}));
