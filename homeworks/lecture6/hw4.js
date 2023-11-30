/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  // get the last index before "."
  num = num.toString();
  let last = num.length-1;
  for (let i=1; i<num.length; i++) {
    (num[i] === ".") && (last = i-1);
  }

  // add ","
  let count = 0;
  for (let i=last; i >= 0; i--) {
    if (count === 3) {
      num = num.substring(0, i+1) + "," + num.substring(i+1);
      count = 1;
    } else {
      count++;
    }
  }
  return num;
}

// Test cases
console.assert(format(12345678) === '12,345,678', 'Test 1 failed');
console.assert(format(1234.56) === '1,234.56', 'Test 2 failed');
console.assert(format(123) === '123', 'Test 3 failed');