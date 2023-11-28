/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const str = num.toString();
  const parts = str.split('.');
  const integer = parts[0];
  const decimal = parts[1];
  const len = integer.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    if ((len - i) % 3 === 0 && i !== 0) {
      result += ',';
    }
    result += integer[i];
  }
  if (decimal) {
    result += '.' + decimal;
  }
  return result;
}

console.log(format(12345678));
console.log(format(1234.56));