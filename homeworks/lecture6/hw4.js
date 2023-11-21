/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const s = new String(num);
  const [wn, dp] = s.split('.')
  if (!wn) {
    return s;
  }
  var result = "";
  Object.entries(wn).forEach(([i, n]) => {
    result += (wn.length - i) % 3 === 0 ? (',' + n) : n;
  })
  result += dp === undefined ? '' : ('.' + dp);
  return result
}

console.log(format(12345678) === "12,345,678")
console.log(format(1234.56) === "1,234.56")
