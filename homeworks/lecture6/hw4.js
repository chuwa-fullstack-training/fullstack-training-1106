/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numString = num.toString();
  let [intStr, decimalStr] = numString.split('.');
  let result = '';
  for(let i = intStr.length - 1; i >= 0; i--) {
    result = intStr[i] + result;
    if ((intStr.length - i) % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }
  if (decimalStr) {
    result += '.' + decimalStr;
  }
  return result;
}
console.log(format(12345678)); // Output: 12,345,678
console.log(format(1234.56)); // Output: 1,234.56
console.log(format(123456789.123456789)); // Output: 123,456,789.123456789
