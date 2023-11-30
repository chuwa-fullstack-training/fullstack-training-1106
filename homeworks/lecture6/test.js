// testing script for lecture6 hw4. hw3 and hw5 can be tested by running it directly.
const assert = require('assert');

// hw4
const format = require("./hw4.js");
assert.deepEqual(format(12345678), "12,345,678", "[!] format check failed");
assert.deepEqual(format(1234.56), "1,234.56", "[!] format check failed");
console.log("[+] All hw4 cases passed.");