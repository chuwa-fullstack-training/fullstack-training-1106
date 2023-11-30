/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
// Space complexity: O(1)
// Time complexity: O(n)
// Solution: reverse the whole string, then reverse each word
// Example: "the sky is blue" -> "eulb si yks eht" -> "blue is sky the"
function reverseWords(str) {
  // your code here
  function reverseWord(start, end) {
    while (start < end) {
      let temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }

  reverseWord(0, str.length - 1);
  let left = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      reverseWord(left, i - 1);
      left = i + 1;
    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);

console.log(input.join('')); // Output: "blue is sky the"