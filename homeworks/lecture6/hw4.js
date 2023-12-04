/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  let arr = numStr.split('.');
  if(arr.length === 1){
  return arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}else if(arr.length === 2){
  return arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')+ '.' + arr[1];
}
else{
  throw new Error("Wrong input");
}
  
}

console.log(format(123456.78));
console.log(format(12345678));
