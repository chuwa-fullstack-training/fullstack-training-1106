/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timer;
  return function (...args) {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func.apply(context, args);
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
  return function (...args) {
    let context = this;
    let currTime = new Date().getTime();
    if(currTime - timer > delay) {
      func.apply(context, args);
      timer = currTime;
    }
  };
}
