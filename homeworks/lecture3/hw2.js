/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b = undefined) {
  // implement here
  if (b) {
    return a + b;
  }
  return function closureSum(c) {
    return a + c;
  };
}
console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
