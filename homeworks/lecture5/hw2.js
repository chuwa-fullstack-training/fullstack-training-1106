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
  function reverseWord(s, e) {
    while (s < e) {
      [str[s], str[e]] = [str[e], str[s]];
      s += 1;
      e -= 1;
    }
  }
  // reverse string, then reverse words
  reverseWord(0, str.length-1);
  let wordS = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      reverseWord(wordS, i-1);
      wordS = i + 1;
    }
  }
  if (wordS < str.length) {
    reverseWord(wordS, str.length-1);
  }
  return str.join('');
}

// const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
// reverseWords(input);
module.exports = reverseWords;