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
  let next_word = "";
  str = str.reduce((acc, curr) => {
    if (curr != ' ') {
      next_word += curr;
    }
    else {
      acc = next_word + curr + acc;
      next_word = "";
    }
    // console.log(acc);
    return acc;
  }, "")
  return next_word + " " + str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));