/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here

  // // Method 1: use regex
  // const nums = num.toString();
  // const idx = nums.indexOf('.');

  // if (idx === -1) {
  //   return nums.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // } else {
  //   return nums.slice(0, idx).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + nums.substring(idx);
  // }

  // // Method 2: use splice
  // const nums = num.toString();
  // const idx = nums.indexOf('.');
  // const arr = nums.split('');

  // let count = 0;
  // for (let i = idx === -1 ? arr.length - 1 : idx - 1; i >= 0; i--) {
  //   count++;
  //   if (count % 3 === 0) {
  //     arr.splice(i, 0, ',');
  //   }
  // }

  // return arr.join('');


  // Method 3: use reduce
  const nums = num.toString();
  const idx = nums.indexOf('.');
  const arr = nums.split('');

  const l = idx === -1 ? arr.length : idx;

  return arr.slice(0, l).reduceRight((acc, cur, idx) => {
    if ((arr.length - idx) % 3 === 0 && idx !== 0) {
      return ',' + cur + acc;
    } else {
      return cur + acc;
    }
  }, idx === -1 ? '' : nums.slice(l));

}

console.log(format(12345678));
console.log(format(1234.56));
