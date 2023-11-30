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
    const len = str.length;
    // reverse the whole string
    reverseWord(str,0,len-1);
    let start = 0;
    let end = 0;
    while (end < len) {
        if (str[end] === ' ') {
        // reverse each word
        reverseWord(str, start, end - 1);
        start = end + 1;
        }
        end++;
    }
    console.log(str.join(''));
  
}
function reverseWord(str, start, end) {
    while (start < end) {
        const temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);