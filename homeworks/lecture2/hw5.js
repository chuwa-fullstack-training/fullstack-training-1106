// Hoisting

// 1.
// output: undefined, 5, 5
var x;

if (x !== 3) { // true, because x is declared but undefined
  console.log(y); // print undefined, y is declared but undefined
  var y = 5; 
  if (y === 5) {
    var x = 3; // x redeclared to 3 (var allows re-declare)
  }
  console.log(y); // print 5
}
if (x === 3) {  // x is 3 because x has global scope
  console.log(y); // print 5
}


// 2.
// output: 2, 2
var x = 3;
if (x === 3) {
  var x = 2; // redeclare x to 2 with global scope
  console.log(x); // print 2
}
console.log(x); // print 2, because original x is replaced by var x=2;

