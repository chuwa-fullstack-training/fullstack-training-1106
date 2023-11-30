import * as t from "./test.js"
import * as s from "./test.js"
import { default as y } from "./test.js"
import x from "./test.js"
console.log(t);
console.log(t.x);
console.log(s.x);
console.log(y);
console.log(x);
console.log(t.default);
t.inc();
console.log(t.x);
console.log(s.x);
console.log(y);
console.log(x);
console.log(t.default);