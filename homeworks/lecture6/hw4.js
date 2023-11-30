/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const parts = num.toString().split('.');
  let integerPart = parts[0];
  let formattedInteger = '';
  while (integerPart.length > 3) {
    formattedInteger = ',' + integerPart.slice(-3) + formattedInteger;
    integerPart = integerPart.slice(0, -3);
  }
  formattedInteger = integerPart + formattedInteger;
  return parts.length > 1 ? formattedInteger + '.' + parts[1] : formattedInteger;
}

// test
console.log(format(12345678));        // 12,345,678
console.log(format(1234.56));         // 1,234.56