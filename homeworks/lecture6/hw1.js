var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCustomer(u) {
    return __assign(__assign({}, u), { type: "customer" });
}
var test1 = makeCustomer({ id: 1, type: "a", name: "name" });
console.log(test1);
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("Only accept either two strings or two numbers at the same time");
    }
}
console.log(f("a", "b"));
console.log(f(1, 2));
console.log(f('a', 2));
