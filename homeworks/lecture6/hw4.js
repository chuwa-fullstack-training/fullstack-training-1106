/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let num_str = num.toString();
  let decimal;
  var result = "";

  if (num_str.split(".").length > 1) {
    decimal = num_str.split(".")[1];
    num_str = num_str.split(".")[0];
  }
  // this if statement used to get possible decimals

  let first_length = num_str.length % 3;

  result += num_str.substring(0, first_length);

  for (let i=0; i<((num_str.length - first_length) / 3); i++) {
    if (first_length !== 0  || i !== 0){
      // there will be 1 case we don't need to add the `,`: the length of the integer is multiples of 3 which first_length is 0
      result += ",";
    }
    result += num_str.substring(first_length + 3 * i, first_length + 3 * i + 3);
  }

  if (decimal) {
    result += '.' + decimal;
  }

  return result;
}

console.log(format(12345678));
console.log(format(123456));
console.log(format(1234.56));
console.log(format(123456.78));
console.log(format(0.1234567));


// after I finish this, I check Mdn Web Docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
// and find out seems I can just use the number.toLocaleString() as a integrated way to achieve this
// the pro to use integrated function: simple and wouldn't break
// the cons: it will round up the decimals to max 3 decimals
function format_easy(num) {
  return num.toLocaleString();
}

console.log('test for integrated function:');
console.log(format_easy(12345678));
console.log(format_easy(123456));
console.log(format_easy(1234.56));
console.log(format_easy(123456.78));
console.log(format_easy(0.1234567));