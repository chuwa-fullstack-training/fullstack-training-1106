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
  let w = '';
  const tmp = [];
  for (const i of str) {
    if (i !== " ") {
      w += i;
    } else if (w !== '') {
      tmp.push(w);
      w = '';
    }
  }
  if(w !== ''){
    tmp.push(w);
  }
  const reversedStr = tmp.reverse().join(' ');

  console.log(reversedStr);
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);