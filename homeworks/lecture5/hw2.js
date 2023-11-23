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
  const res = str
    .join("")
    .split(" ")
    .reduce((arr, char) => {
      arr.unshift(char);
      return arr;
    }, []);
  str.length = 0;
  for (let words of res) str.push(words);
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input);
