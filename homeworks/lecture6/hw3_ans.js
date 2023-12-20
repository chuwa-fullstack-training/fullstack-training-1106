/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
    // your code here
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
    // your code here
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        func.apply(this, args);
    };
}