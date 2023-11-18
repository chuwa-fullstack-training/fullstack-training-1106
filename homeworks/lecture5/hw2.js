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
  str.reverse()
  for (let start = 0; start < str.length; start++) {
    let end = start;
    while (end < str.length && str[end] !== ' ') {
      end++;
    }
    str.splice(start, end-start, ... str.slice(start, end).reverse());
    start = end;
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
const reversed = reverseWords(input);
console.log(reversed.join('')); // Output: blue is sky the

const input2 = 'hello world'.split(''); 
const reversed2 = reverseWords(input2);
console.log(reversed2.join('')); // Output: "world hello"