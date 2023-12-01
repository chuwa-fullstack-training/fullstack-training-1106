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
  let timer_id;

  return function() {
    if (timer_id) {
      clearTimeout(timer_id);
    }

    timer_id = setTimeout(() => {
      func();
      timer_id = "";
    }, delay);
  };
}

const printHello = () => console.log('hello');
const debouncedFn = debounce(printHello, 1000);
// debouncedFn();
// debouncedFn();
// setTimeout(() => debouncedFn(), 200);
// setTimeout(() => debouncedFn(), 400);
// setTimeout(() => debouncedFn(), 600);
// print hello after ~1.68 seconds because 1000 + 600 ms

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
  let timer_id_throttle;

  return function() {
    if (timer_id_throttle) {
      return;
    }
    timer_id_throttle = setTimeout(() => {
      func();
      timer_id_throttle = null;
    }, delay);
  };
}


const throttledFn = throttle(printHello, 1000)
throttledFn()
throttledFn() // ignored
setTimeout(() => throttledFn(), 200);
setTimeout(() => throttledFn(), 400);
setTimeout(() => throttledFn(), 600);
