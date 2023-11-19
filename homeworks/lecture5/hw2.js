const { isEqual } = require("lodash");

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
  // first reverse the entire str
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  // then reverse (back) each word
  function helper(start, end) {
    for (let i = start; i <= Math.floor((end - start) / 2 + start); i++) {
      let toSwap = end - (i - start);
      [str[i], str[toSwap]] = [str[toSwap], str[i]];
    }
  }
  let s = 0;
  str.forEach((val, ind) => {
    if (val === " ") {
      helper(s, ind - 1);
      s = ind + 1;
    } else if (ind === str.length - 1) {
      helper(s, ind);
    }
  })
}

const input = 'the sky is blue'.split('');
reverseWords(input);
console.assert(isEqual(['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e'], input), "Test 1 failed.")

const input2 = 'hello! world'.split('');
reverseWords(input2);
console.assert(isEqual(['w', 'o', 'r', 'l', 'd', ' ', 'h', 'e', 'l', 'l', 'o', '!'], input2), "Test 2 failed.")

const input3 = ''.split('');
reverseWords(input3);
console.assert(isEqual([], input3), "Test 3 failed.")

const input4 = 'hello'.split('');
reverseWords(input4);
console.assert(isEqual(['h', 'e', 'l', 'l', 'o'], input4), "Test 4 failed.")