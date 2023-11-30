/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let arr = num.toString().split('');
  let start = arr.includes('.') ? arr.indexOf('.') : arr.length;
  for (let i = start - 3; i > 0; i -= 3) {
    arr.splice(i, 0, ',')
  }
  return arr.join('');
}
module.exports = format;
