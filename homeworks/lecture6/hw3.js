/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      // Execute the function
      func.apply(this, args);
      
      // Set a timeout to enable the function call after the delay
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

function myFunction() {
  console.log("Function executed!");
}

const debouncedFunction = debounce(myFunction, 500);
const throttledFunction = throttle(myFunction, 500);

// Call the debounced function
debouncedFunction();

// Call the throttled function
throttledFunction();