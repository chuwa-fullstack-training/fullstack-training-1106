/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let nums = num.toString().split(".");
  let res = "";
  let count = 0;
  for (let i = nums[0].length - 1; i >= 0; i--) {
    res = nums[0][i] + res;
    count++;

    if (count === 3 && i !== 0) {
      res = "," + res;
      count = 0;
    }
  }
  return res + (nums[1] !== undefined ? "." + nums[1] : "");
}

console.log(format("12345678"));
console.log(format("1234.56"));
