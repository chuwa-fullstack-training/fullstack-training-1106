// testing script for lecture4 hw1, hw2, hw3, hw4 and hw5.
const assert = require('assert');

// hw1
const checkValidHTML = require("./hw1.js");
assert.deepEqual(checkValidHTML("<html><head><title>My Title</title></head></html>"), true, "[!] checkValidHTML check failed");
assert.deepEqual(checkValidHTML("<html><head><title>My Title</title></head></head></html>"), false, "[!] checkValidHTML check failed");
console.log("[+] All hw1 cases passed.");

// hw2
const {f1, f2, f3, f4} = require("./hw2.js")
assert.deepEqual(f1([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10], "[!] f1 check failed");
assert.deepEqual(f2([1, 2, 3, 4, 5]), [2, 4], "[!] f2 check failed");
assert.deepEqual(f3("Hello World"), "dlroW olleH", "[!] f3 check failed");
assert.deepEqual(f4([[0, 1], [2, 3], [4, 5]]), [0, 1, 2, 3, 4, 5], "[!] f4 check failed");
assert.deepEqual(f4([[0, 1], [2, 3], [4, [5, 6]]]), [0, 1, 2, 3, 4, 5, 6], "[!] f4 check failed");
console.log("[+] All hw2 cases passed.");

// hw3
const {Singleton, ES6Singleton} = require("./hw3.js")
const instance1 = new Singleton();
const instance2 = new Singleton();
assert.deepEqual(instance1 === instance2, true, "[!] Singleton check failed");
const es6Instance1 = new ES6Singleton();
const es6Instance2 = new ES6Singleton();
assert.deepEqual(es6Instance1 === es6Instance2, true, "[!] ES6Singleton check failed");
console.log("[+] All hw3 cases passed.");

// hw4
const intersection = require("./hw4.js");
assert.deepEqual(intersection([1,2,2,1], [2,2]).sort((a, b) => a-b), [2], "[!] intersection check failed");
assert.deepEqual(intersection([4,9,5], [9,4,9,8,4]).sort((a, b) => a-b), [4,9], "[!] intersection check failed");
console.log("[+] All hw4 cases passed.");

// hw5
const cloneDeepWithLoop = require("./hw5.js");
const data = {
    name: 'foo',
    child: null
}
data.child = data;
clonedData = cloneDeepWithLoop(data);
assert.deepEqual(clonedData === clonedData.child, true, "[!] cloneDeepWithLoop check failed");
assert.deepEqual(clonedData === data, false, "[!] cloneDeepWithLoop check failed");
console.log("[+] All hw5 cases passed.");