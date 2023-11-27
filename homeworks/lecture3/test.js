// testing script for lecture3 hw1, hw2, hw4, hw5 and hw6. hw3 can be tested by running it directly
const assert = require('assert');

// hw1
const pickCoins = require("./hw1.js");
let checkCoins = solutions => {
    assert.deepEqual(solutions[0]['1'] == solutions[1]['1'], false, "[!] Two different solutions required.");
    for (let s of solutions) {
        assert.deepEqual((s['1'] ?? 0) + (s['5'] ?? 0) * 5 + (s['25'] ?? 0) * 25, 100, "[!] One dollar required.");
        assert.deepEqual((s['1'] ?? 0) + (s['5'] ?? 0) + (s['25'] ?? 0), 48, "[!] Forty eight coins required.");
    }
}
checkCoins(pickCoins());
console.log("[+] All hw1 cases passed.");

// hw2
const sum = require("./hw2.js");
assert.deepEqual(sum(2)(3), 5, "[!] sum check failed.");
assert.deepEqual(sum(2, 3), 5, "[!] sum check failed.");
console.log("[+] All hw2 cases passed.");

// hw4
const {Triangle, Circle, ES6Triangle, ES6Circle} = require("./hw4.js")
const tri = new Triangle(3, 4, 5);
const cir = new Circle(2);
const es6Tri = new ES6Triangle(3, 4, 5);
const es6Cir = new ES6Circle(2);
assert.deepEqual(tri.getPerimeter(), 12, "[!] getPerimeter failed.");
assert.deepEqual(tri.getArea(), 6, "[!] getPerimeter failed.");
assert.deepEqual(cir.area(), 4*Math.PI, "[!] getPerimeter failed.");
assert.deepEqual(cir.circumference(), 4*Math.PI, "[!] getPerimeter failed.");
assert.deepEqual(es6Tri.getPerimeter(), 12, "[!] getPerimeter failed.");
assert.deepEqual(es6Tri.getArea(), 6, "[!] getPerimeter failed.");
assert.deepEqual(es6Cir.area(), 4*Math.PI, "[!] getPerimeter failed.");
assert.deepEqual(es6Cir.circumference(), 4*Math.PI, "[!] getPerimeter failed.");
console.log("[+] All hw4 cases passed.");

// hw5
const User = require("./hw5.js");
const user = new User();
assert.deepEqual(user.setPassword('123456'), true, "[!] setPasswd failed");
assert.deepEqual(user.checkPassword('123456'), true, "[!] checkPassword failed"); // true
assert.deepEqual(user.checkPassword('123'), false, "[!] checkPassword failed"); // false
assert.deepEqual(user.password, undefined, "[!] password failed"); // undefined
assert.deepEqual(user.setPassword('123'), false, "[!] setPasswd failed"); // Error
assert.deepEqual(user.checkPassword('123'), false, "[!] checkPassword failed"); // false
assert.deepEqual(user.password, undefined, "[!] password failed"); // undefined
console.log("[+] All hw5 cases passed.");

// hw6
const {numIdenticalPairs, removeVowels} = require("./hw6.js")
assert.deepEqual(numIdenticalPairs([1,2,3,1,1,3]), 4, "[!] numIdenticalPairs check failed");
assert.deepEqual(numIdenticalPairs([1,1,1,1]), 6, "[!] numIdenticalPairs check failed");
assert.deepEqual(numIdenticalPairs([1,2,3]), 0, "[!] numIdenticalPairs check failed");
assert.deepEqual(removeVowels("asfuijhjafn"), "sfjhjfn", "[!] removeVowels check failed");
console.log("[+] All hw6 cases passed.");