/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x, y) {
  if (y === undefined) {
    return function (y) {
      return x + y;
    }
  } else {
    return x + y
  }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)