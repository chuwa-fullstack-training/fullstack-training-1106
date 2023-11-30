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
  function reverseArray(start, end) {
    while (start < end) {
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }

  // Reverse the entire string
  reverseArray(0, str.length - 1);

  // Reverse each word individually
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (str[end] === ' ') {
      reverseArray(start, end - 1);
      start = end + 1;
    }
  }

  // Reverse the last word
  reverseArray(start, str.length - 1);
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
const result = input.join('');
console.log(result); 