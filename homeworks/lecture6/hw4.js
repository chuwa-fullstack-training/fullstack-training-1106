/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  let prefix;
  let suffix;
  numStr = numStr.split(".");
  if (numStr.length == 1) {
    suffix = null;
  } else {
    suffix = numStr[1];
  }
  prefix = numStr[0];
  function addComma(str, prefix) {
    let strArr = Array.from(str);

    let res = [];
    if (prefix) strArr.reverse();
    res = strArr.reduce((acc, curr, idx) => {
      prefix ? acc.unshift(curr) : acc.push(curr);
      if ((idx + 1) % 3 == 0) {
        prefix ? acc.unshift(',') : acc.push(',');
      }
      return acc;
    }, res);
    if (prefix) {
      res[0] == "," ? res.shift() : null;
    } else {
      res[res.length - 1] == "," ? res.pop() : null;
    }
    return res.join("");
  }
  prefix = addComma(prefix, true);
  if (suffix == null) {
    return prefix;
  } else {
    suffix = addComma(suffix, false);
    return prefix + "." + suffix;
  }
}


console.log(format(1234.456789));