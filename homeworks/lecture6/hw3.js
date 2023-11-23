/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timerId = null;
  return function fire() {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  }
}
/*
let func = debounce(() => console.log("hello"), 1000);
func();
setTimeout(func, 500);
setTimeout(func, 1502);
*/

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let lastCall = null;
  return function fire() {
    let now = new Date();
    if (lastCall) {
      if (now - lastCall < delay) {
        // ignored
        console.log("ignored");
        return;
      }
    }
    func();
    lastCall = new Date();
  }
}
let func2 = throttle(() => console.log("world"), 1000);
func2();
setTimeout(func2, 500);
setTimeout(func2, 1000);