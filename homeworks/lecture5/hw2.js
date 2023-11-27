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
  var cur_word = "";
  var i = str.length - 1;
  const res = [];
  while (i >= 0) {
    while (i >= 0 && str[i] != " ") {
      cur_word = str[i] + cur_word;
      i--;
    }
    if (cur_word != "") {
      res.push(cur_word);
      cur_word = "";
    }
    i--;
  }
  return res.join(" ");
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
const res1 = reverseWords(input);
console.log(res1);

const input2 = "  hello world  ".split('');
const res2 = reverseWords(input2);
console.log(res2);