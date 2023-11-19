// Hoisting

// 1.
var x;
// since var is in function scope, hoisting will initialize y here
// var y;

// x is undefined here, so undefined !== 3 is true
if (x !== 3) {
  // hoisting initialize y before but didn't asign any value, so y is undefined here
  console.log(y);
  // y is asigned with 5
  var y = 5;
  if (y === 5) {  // true
    // x is asigned with 3
    var x = 3;
  }
  // y = 5
  console.log(y);
}
// since var is in function scope, x will keep the value 3
if (x === 3) {  // true
  // since var is in function scope, y will keep the value 5
  // y = 5
  console.log(y);
}


// 2.
// x is initialized and asigned with 3
var x = 3;
if (x === 3) {  // true
  // x is asigned with 2
  var x = 2;
  // x = 2
  console.log(x);
}
// since var is in function scope, x will keep the value 2
// x = 2
console.log(x);


// The output will be:
// undefined
// 5
// 5
// 2
// 2
