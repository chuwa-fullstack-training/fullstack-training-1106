/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let string_num = num.toString();
  let [integerPart, decimalPart] = string_num.split('.');
  let res = "";
  let len = 0;
  for (let i = integerPart.length - 1; i >= 0; i--) {
    len++;
    res = integerPart[i] + res;
    if (len === 3 && i > 0) {
      res = ',' + res;
      len = 0;
    }
  }
  if (decimalPart) {
    res += '.' + decimalPart;
  }
  return res;
}


console.log(format(12345678));
console.log(format(1234.56));
console.log(format(1891234.5607));
