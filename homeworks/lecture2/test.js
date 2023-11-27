// testing script for lecture2 hw1 and hw6
const assert = require('assert');

// hw1
const {extend, union, restrict, intersection} = require("./hw1.js")

let o = {}, p = {};
let reset = () => {
    return [{
        a: 1,
        b: 2,
        c: 3,
    },
    {
        b: 2,
        c: 4,
        d: 6,
    }]
};
[o, p] = reset();
assert.deepEqual(extend(o, p), {a: 1, b: 2, c: 4, d: 6}, "[!] extend check failed");
[o, p] = reset();
assert.deepEqual(union(o, p), {a: 1, b: 2, c: 3, d: 6}, "[!] union check failed");
[o, p] = reset();
assert.deepEqual(restrict(o, p), {b: 2, c: 3}, "[!] restrict check failed");
[o, p] = reset();
assert.deepEqual(intersection(o, p), {b: 2, c: 3}, "[!] intersection check failed");
console.log("[+] All hw1 cases passed.");

// hw6
const {largestElement, reverseList, checkTwice} = require("./hw6.js")
assert.deepEqual(largestElement([5, 4, 6, 3, 8, 9]), 9, "[!] largestElement check failed");
assert.deepEqual(reverseList([5, 4, 6, 3, 8, 9]), [9, 8, 3, 6, 4, 5], "[!] reverseList check failed");
assert.deepEqual(checkTwice([5, 4, 6, 3, 8, 9, 8], 9), false, "[!] checkTwice check failed");
assert.deepEqual(checkTwice([5, 4, 6, 3, 8, 9, 8], 8), true, "[!] checkTwice check failed");
console.log("[+] All hw6 cases passed.");