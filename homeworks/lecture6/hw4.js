/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // Convert number to string
  const numStr = num.toString();

  let [integerPart, decimalPart] = numStr.split('.');

  let result = '';
  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    if ((integerPart.length - i) % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  if (decimalPart !== undefined) {
    result += '.' + decimalPart;
  }

  return result;
}

console.log(format(12345678) === "12,345,678"); // true
console.log(format(1234.56) === "1,234.56"); // true
console.log(format(123) === "123"); // true
console.log(format(123456.789) === "123,456.789"); // true
