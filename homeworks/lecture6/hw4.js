/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let strNum = num.toString();
  let listNum = strNum.split('.');
  let numBeforeDot = listNum[0];
  let numAfterDot = listNum.length > 1 ? '.' + listNum[1] : '';
  let results = '';
  let count = 0;
  
  for (let i = numBeforeDot.length - 1; i >= 0; i--){
    results = numBeforeDot[i] + results;
    count++;

    if ((count % 3) === 0 && i !== 0){
      results = ',' + results;
    }
  }
  return results + numAfterDot;
}

console.log(format(12345678));
