/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  let timer;
  return function (...args) {
    // reset timer if called again
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

// test case
function testFunction() {
  console.log("Function executed");
}

let debouncedTest = debounce(testFunction, 1000);
debouncedTest();
setTimeout(debouncedTest, 200); // Should not trigger the function
setTimeout(debouncedTest, 400); // Should not trigger the function
setTimeout(debouncedTest, 600); // Should trigger the function

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let lastTime = 0;
  return function(...args) {
    let currTime = Date.now();
    // check enough time passed from last call
    if (currTime - lastTime >= delay) {
      func(...args);
      lastTime = currTime;
    }
  }
}

// test case
let throttledTest = throttle(testFunction, 1000);

// Call throttledTest multiple times
throttledTest(); // Should trigger the function
setTimeout(throttledTest, 200); // Should not trigger the function
setTimeout(throttledTest, 1000); // Should trigger the function after 1 second from the first call