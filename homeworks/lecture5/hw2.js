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
  let curr = 0;
  let left = 0;
  let right = 0;
  str.reverse();
  while (curr < str.length) {
    left = curr;
    right = curr;
    while (right < str.length && str[right] != ' ') {
      right++;
    }
    curr = right + 1;
    right--;
    while (left <= right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++
      right--;
    }
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input);