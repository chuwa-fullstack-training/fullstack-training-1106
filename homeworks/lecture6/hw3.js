/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timeoutId;

  return function(...arg) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, arg);
      timeoutId = null;
    }, delay)
  };
}


/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let shouldWait = false;
  let waitingArgs;
  
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      func.apply(this, waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  }

  return function(...arg) {
    if (shouldWait) {
      waitingArgs = arg;
      return;
    }
    func.apply(this, arg);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  }
}