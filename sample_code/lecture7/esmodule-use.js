// in package.json, have `"type": "module"`

// import { getDistance, printPoint } from './esmodule.js';

// import test1 from './esmodule.js';

// printPoint([1, 2]);
// console.log(getDistance([1, 2], [4, 6]));
// console.log(test1);


// in package.json, have `"type": "commonjs"`
// import { getDistance, printPoint } from './esmodule.js';
import { module1 as m1, module2 as m2 } from './module1.js';
import { module1, module2 } from './module2.js';
printPoint([1, 2]);
console.log(getDistance([1, 2], [4, 6]));