/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numStr = String(num);
  const [whole, decimal] = numStr.split('.');
  const l = whole.length;
  let res = decimal === undefined ? "" : "." + decimal;
  for(let i = l - 1; i > 0; i--) {
    res = whole[i] + res;
    if((l - i) % 3 === 0) {
      res = "," + res;
    }
  }
  res = whole[0] + res;
  return res;
}

const test1 = 123456789;
console.log(format(test1));

const test2 = 1234.56;
console.log(format(test2));