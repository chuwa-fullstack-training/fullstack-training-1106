/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. 
 * if `func` is called again before `delay` ms, the timer will be reset
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
  if(debounce.prototype.timeId){
    clearTimeout(debounce.prototype.timeId);
  }
  debounce.prototype.timeId = setTimeout(func,delay);
  // debounce.prototype.timeId();
}
var func = () => {console.log('hello')};



debounce(func,20000);
debounce(func,2000);
debounce(func,2000);

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
  if(throttle.prototype.timeId){
    clearTimeout(throttle.prototype.timeId);
    return;
  }
  throttle.prototype.timeId = setTimeout(func,delay);
}
throttle(func,20000);
throttle(func,2000);
throttle(func,2000);