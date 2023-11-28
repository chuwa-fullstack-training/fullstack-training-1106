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
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay)
  }
}

// test case 1
const printHello = () => console.log('hello')
const debouncedFn = debounce(printHello, 1000)
debouncedFn()
debouncedFn() // timer reset to 1s

// test case 2
const add = (a, b) => console.log(a + b);
const debouncedAdd = debounce(add, 1000);
debouncedAdd(1, 2);
debouncedAdd(3, 4); // output: 7



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
  let shouldIgnore = false;

  return function(...args) {
    if(shouldIgnore) {
      return;
    }

    shouldIgnore = true;
    setTimeout(() => {
      shouldIgnore = false;
      func(...args)
    }, delay)

  }
}

// test case 1
const printHello2 = () => console.log('hello')
const throttledFn = throttle(printHello2, 1000)
throttledFn()
throttledFn() // ignored

// test case 2
const add2 = (a, b) => console.log(a + b);
const throttleAdd = throttle(add2, 1000);
throttleAdd(1, 2); // output: 3
throttleAdd(3, 4); // ignored