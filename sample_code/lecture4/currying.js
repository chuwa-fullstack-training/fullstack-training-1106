function log(timestamp, level, message) {
    console.log(`${timestamp} [${level}] ${message}`);
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const debugNow = curry(log)(new Date().toISOString())("DEBUG");
debugNow("Hello World");

const infoNow = curry(log)(new Date().toISOString())("INFO");
infoNow("Hello World");
