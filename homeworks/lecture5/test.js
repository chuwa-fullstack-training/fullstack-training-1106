// testing script for lecture5 hw2. hw5 and hw6 can be tested by running it directly.
const assert = require('assert');

// hw2
const reverseWords = require("./hw2.js");
assert.deepEqual(reverseWords(['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']), "blue is sky the", "[!] reverseWords check failed");
console.log("[+] All hw2 cases passed.");