/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  var ans = []
  let flag = 0;
  let str = num.toString();
  if(Number.isInteger(num)){
    for(let i=str.length-1;i>=0;i--){
      if(flag === 3){
        ans.unshift(',');
        flag = 0;
      }
      ans.unshift(str[i]);
      flag++;
    }
  }else{
    let dot;
    for(let i=str.length-1;i>=0;i--){
      ans.unshift(str[i]);
      if(str[i] === '.'){
        dot = i;
        break;
      } 
    }
    for(let i= dot - 1;i>=0;i--){
      if(flag === 3){
        ans.unshift(',');
        flag = 0;
      }
      ans.unshift(str[i]);
      flag++;
    }
  }
  return ans.join('');
}

console.log(format(12345678.1235655));
