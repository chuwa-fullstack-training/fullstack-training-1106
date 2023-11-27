// Global scope
var globalVar = "I'm a global variable";

function myFunction() {
  // Function scope
  var functionVar = "I'm a function-scoped variable";

  if (true) {
    // Block scope (ES6+)
    let blockVar = "I'm a block-scoped variable";
    const blockConst = "I'm a block-scoped constant";

    const BLOCK_CONST = '';

    var test = 1;
    console.log(globalVar); // Accessible inside the function
    console.log(functionVar); // Accessible inside the function
    console.log(blockVar); // Accessible inside the block
    console.log(blockConst); // Accessible inside the block
  }

  console.log(blockVar); // Error: blockVar is not defined
  // console.log(blockConst); // Error: blockConst is not defined
}

myFunction();
console.log(functionVar);

console.log(globalVar); // Accessible outside the function
console.log(global.globalVar);

test = "I'm a global variable, test";
console.log(global.test);
// console.log(functionVar); // Error: functionVar is not defined
