/**
 * Immediately Invoked Function Expression (IIFE)
 */
// Namespace function for utilities
var Utils = (function () {
  // Private variable
  var count = 0;

  // Private function
  function incrementCount() {
    count++;
  }

  // Public function
  function getCount() {
    return count;
  }

  // Expose public functions
  return {
    incrementCount: incrementCount,
    getCount: getCount
  };
})();

// Using the namespace functions
Utils.incrementCount();
Utils.incrementCount();
console.log(Utils.getCount()); // Output: 2
