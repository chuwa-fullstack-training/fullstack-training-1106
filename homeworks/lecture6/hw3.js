/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timer; // Declare a timer variable
  return (...args) => { // Return a function that accepts any number of arguments
    clearTimeout(timer); // Clear the timer
    timer = setTimeout(() => { // Set a timer to execute the main function after the specified delay
      func(...args); // Execute the main function
    }, delay);
  };
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let timer; 
  return (...args) => {
    if (timer === null) { // If there is no timer currently running
      func(...args); // Execute the main function 
      timer = setTimeout(() => { // Set a timer to clear the timer after the specified delay
        timer = null; // Clear the timer to allow the main function to be executed again
      }, delay);
    }
  };
}
