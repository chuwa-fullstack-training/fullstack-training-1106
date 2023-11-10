// Hoisting

// 1. undefined 5 5
var x;

if (x !== 3) {
  console.log("undefined -> ", y); //undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log("5 -> ", y);//5
}
if (x === 3) {
  console.log("5 -> ", y);//5
}


// 2.  2 2
var x = 3;
if (x === 3) {
  var x = 2;
  console.log("2 -> ", x); //2
}
console.log("2 -> ", x);//2

