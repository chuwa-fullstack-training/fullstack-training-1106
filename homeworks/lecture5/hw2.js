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
    reverse(str, 0, str.length - 1);
    let start = 0;
    for (let end = 0; end < str.length; end++) {
        if (str[end] === ' ' || end === str.length - 1) {
            reverse(str, start, end === str.length - 1 ? end : end - 1);
            start = end + 1;
        }
    }
}
function reverse(str, start, end) {
    while (start < end) {
        const temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

const input = 'the sky is blue'.split('');
reverseWords(input);
const output = input.join('');
console.log(output);
