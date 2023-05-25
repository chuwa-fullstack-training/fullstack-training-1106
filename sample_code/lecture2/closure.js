function createCalculator() {
  var result = 0;

  function add(number) {
    result += number;
    console.log('Added ' + number + ', result: ' + result);
  }

  function subtract(number) {
    result -= number;
    console.log('Subtracted ' + number + ', result: ' + result);
  }

  function multiply(number) {
    result *= number;
    console.log('Multiplied by ' + number + ', result: ' + result);
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    getResult: getResult,
    reset: reset
  };
}

var calculator1 = createCalculator();
var calculator2 = createCalculator();

calculator1.add(5); // Output: Added 5, result: 5
calculator1.subtract(2); // Output: Subtracted 2, result: 3
calculator1.multiply(4); // Output: Multiplied by 4, result: 12

console.log(calculator1.getResult()); // Output: 12
console.log(calculator2.getResult()); // Output: 0
