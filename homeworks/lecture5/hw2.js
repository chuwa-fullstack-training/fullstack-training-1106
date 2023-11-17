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
  // 1. reverse the whole string
  str.reverse();
  // 2. reverse each word
  let start = 0;
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] === ' ' || i === str.length) {
      let end = i - 1;
      while (start < end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
      }
      start = i + 1;
    }
  }
  console.log(str.join(''));
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);