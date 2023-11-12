function counter() {
    
  var acc = 0;

  return function (num) {
    if (num !== undefined) {
      acc += num;
    }
    return acc;
  }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8