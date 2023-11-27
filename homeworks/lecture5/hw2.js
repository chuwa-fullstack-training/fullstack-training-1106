/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  let left = 0, right = 0;

  reverseHelper(str, 0, str.length-1);
  
  for (let i = 0;i<str.length;i++){
    if(str[i] === ' '){
      right = i-1;
      reverseHelper(str, left, right);
      left = i+1;
    }
  }
  reverseHelper(str, left, str.length-1);

  console.log(str.join(''));
}

function reverseHelper(str, start, end){
  let [left, right] = [start, end];

  while(left<right){
    let tmp = str[left];
    str[left] = str[right];
    str[right] = tmp;
    left++;
    right--;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);