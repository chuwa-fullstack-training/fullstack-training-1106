/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(()=>func(...args), delay);
  }
}

function test(s){
  console.log(s);
}

const debounceString = debounce(test, 1000);
debounceString("1");
debounceString("2");
debounceString("3");

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let timer = null;

  return (...args) => {
    if(!timer){
      timer = setTimeout(()=>func(...args),delay);
    }
    else{
      console.log("this call ignored")
    }
  }
}

const throttleString = throttle(test, 1000);
throttleString("4");
throttleString("5");
throttleString("6");