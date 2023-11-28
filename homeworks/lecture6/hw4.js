/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  num = num.toString();
  let i = num.length-1;
  if(num.indexOf('.') > 0){
    i = num.indexOf('.') - 1;
  }
  while(i > 0) {
    i -= 3;
    if(i>=0){
      num = num.slice(0,i+1) + ',' + num.slice(i+1, num.length)
    }
  }
  return num;
}


console.log(format(123456.78)) // output: 123,456.78
console.log(format(0)); // Output: 0
console.log(format(1000000)); // Output: 1,000,000
console.log(format(0.123456)); // Output: 0.123456
console.log(format(1234567.899)); // Output: 1,234,567.899