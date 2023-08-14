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

const logTS = curry(log)(new Date().toISOString());
logTS('DEBUG', 'Hello World');
const warnNow = logTS('WARN');
warnNow('Hello World');

const debugNow = curry(log)(new Date().toISOString())('DEBUG');
debugNow('Hello World');

const infoNow = curry(log)(new Date().toISOString())('INFO');
infoNow('Hello World');

const store = {
  price: 100,
  discount: function (percentOff, bonus) {
    return this.price * (1 - percentOff / 100) - bonus;
  }
};

console.log(store.discount(10, 5));
const tenPercentDiscount = curry(store.discount)(10);
console.log('original price:', store.price);
console.log('after discount:', tenPercentDiscount(5));
