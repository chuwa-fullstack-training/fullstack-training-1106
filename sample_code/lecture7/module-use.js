const module1 = require('./module1');
const module2 = require('./module2');

console.log('in module-use.js');
module1.module1();
module1.module2();
console.log('---------------------------------');
module2.module1();
module2.module2();
