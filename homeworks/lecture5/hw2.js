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
  const input = str.split(' ');
  var ans = [];
  for(let i=input.length-1;i>=0;i--){
    ans.push(input[i]);
  } 
  return ans.join(' ');
}

// const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
str = "the sky is blue"
console.log(reverseWords(str));