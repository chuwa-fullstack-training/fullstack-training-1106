/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay) {
  let timeoutId = null;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this.args);
    }, delay);
  };
}

// test function to demonstrate debounce
function testDebouncedFunction() {
  console.log("Debounce Function executed at", new Date().toISOString());
}

const debouncedTestFunction = debounce(testDebouncedFunction, 2000);

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function runDebounceTest() {
  for (let i = 0; i < 5; i++) {
    debouncedTestFunction();
    await delay(3000); // change dalay larger than 2 second will execute 5 times, less than 2 second will execute once.
  }
}

runDebounceTest().then(() => console.log("Debounce Test completed."));


// example of debouncing:
// Submit button: When you click a submit button on a website, it doesn't send the data immediately, but waits for a few milliseconds to see if you click it again.
// Search box: When you type something in a search box, it doesn't show suggestions on every keystroke, but waits until you stop typing for a while.

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function throttle(func, delay) {
  let lastFunc;
  let lastRan;

  return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= delay) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

function testThrottleFunction() {
  console.log("Throttle Function executed at", new Date().toISOString());
}

const throttleTestFunction = throttle(testThrottleFunction, 2000);

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function runThrolledTest() {
  for (let i = 0; i < 5; i++) {
    throttleTestFunction();
    await delay(500);
  }

  await delay(2000);
  console.log("Throlled Test completed.")
}

runThrolledTest()
