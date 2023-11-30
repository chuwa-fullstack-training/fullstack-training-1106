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
  // your code here
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
}

// test
const printHello = () => console.log('hello');
const debouncedFn = debounce(printHello, 1000);
debouncedFn(); // `func` will be called after 1000 ms
debouncedFn(); // `func` is called again before 1000 ms, the timer will be reset
// Output: hello

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
  // your code here
  let timer;
  return function() {
    if (timer && timer._idleStart < 1000) {
      console.log("this call is ignored");
      return;
    }
    console.log("creating the timer")
    timer = setInterval(() => func(), delay);
  };
}

// test
const printHello1 = () => console.log('hello1')
const throttledFn = throttle(printHello1, 1000)
throttledFn() // creating the timer, `func` will be called every `delay` ms
throttledFn() // `func` is called again before `delay` ms, the call will be ignored
/*
Output:
creating the timer
this call is ignored
hello1
hello1
hello1
...
*/