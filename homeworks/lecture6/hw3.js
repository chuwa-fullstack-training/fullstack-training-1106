/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, ...args), delay);
  }
}
let func = debounce(function () { console.log("hello"); }, 1000);
/*func();
setTimeout(func, 500);
setTimeout(func, 1501);
*/
/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let called = false;
  return function fire(...args) {
    if (!called) {
      setTimeout(() => {
        func.apply(this, args);
        called = false;
      }, delay);
      called = true;
    } else {
      console.log("call ignored")
    }
  }
}
/*
let func2 = throttle(() => console.log("world"), 1000);
func2();
setTimeout(func2, 500);
setTimeout(func2, 1000);
*/