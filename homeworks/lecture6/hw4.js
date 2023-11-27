/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let s = num.toString();
  let startIndex = s.indexOf('.') === -1? s.length : s.indexOf('.');
  let count = 0;

  for(let i = startIndex; i>0; i--){
    if(count == 3){
      s = s.slice(0, i) + ',' + s.slice(i);
      count = 1;
    }
    else{
      count++;
    }
  }

  return s;
}

console.log(format(12345678));
console.log(format(112234588.23678));
console.log(format(1214234.56));
