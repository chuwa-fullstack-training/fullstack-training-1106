/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func.apply(this, arguments)
    }, delay)
  }
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let lastRun = 0;

  return () => {
    let now = Date.now();
    if ((now - lastRun) < delay) {
      return;
    }
    else{
      lastRun = now;
      func.apply(this,arguments)
    }
  }
}

// const printHello = () => console.log('hello')
// const debouncedFn = debounce(printHello, 1000)
// debouncedFn()
// debouncedFn() // timer reset to 1s

// function delay(milliseconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, milliseconds);
//   });
// }

// const throttledFn = throttle(printHello, 1000)
// throttledFn()
// throttledFn()
// delay(2000).then(() => {
//   throttledFn();
// });