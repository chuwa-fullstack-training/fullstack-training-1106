/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let str = num.toString()
  part = str.split('.')
  part[0] = part[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return part.join('.');
}

console.log(format(345678.23))