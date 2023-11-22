/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * implement a decorator to delay the calling of the input function `func` by `setTimeout`.
 * When `debounce` is called again with the `func`. Delete the last `setTimeout` call and set a new one. 
 * 
 * usage:
 * button.addEventListener("click", onClickCallback);
 * button.addEventListener("click", debounce(onClickCallback, 300));
 * 
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timer;
  return (...args) => {
    // clear the last setTimeout
    clearTimeout(timer);
    // create a new setTimeout
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let lastTime = 0;
  return (...args) => {
    let currTime = new Date().getTime(); 
    // if delay time is passed, call the function
    if (currTime - lastTime > delay) {
      func.apply(this, args);
      lastTime = currTime;
    }
  }
}
