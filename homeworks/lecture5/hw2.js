/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(s) {
  // your code here
  let firstWord = "";
  for (let i in s) {
    if (s[i] != " ") {
      firstWord += s[i];
    }
    else
      break;
  }
  const reversed = s.reverse();
  let curr = "";
  let revesedCurr = "";
  let res = "";
  
  for (let i in reversed) {
    if (reversed[i] == " ") {      
      revesedCurr = curr.split("").reverse().join("");
      res += revesedCurr + " ";
      curr = "";
    }
    else
      curr += reversed[i];
  } 
  res += firstWord;
  return res;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);