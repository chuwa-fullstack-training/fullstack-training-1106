/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args) {
    if (args.length === 2) {
      // Uncurried usage: sum(2, 3)
      return args[0] + args[1];
    } else if (args.length === 1 && typeof args[0] === 'number') {
      // Curried usage: sum(2)(3)
      const firstArg = args[0];
      return function (secondArg) {
        return firstArg + secondArg;
      };
    } else {
      throw new Error('Invalid usage of sum function');
    }
  }
  
  // Test cases
  console.log(sum(2)(3) === 5);
  console.log(sum(2, 3) === 5);
