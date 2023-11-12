// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // output : undefined. y is hoisted but not yet assigned
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // output 5
}
if (x === 3) {
  console.log(y); // output 5. This block checks if x is equal to 3, which is true.
                  // Even though variable y is outside the if block, it is hoisted 
                  //to the top of the current scope (which is the global scope in this case).
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // output:2
}
console.log(x); // output:2. The var declarations are function-scoped, 
                // Therefore, the x declared inside the if block will affect the outer x. 

